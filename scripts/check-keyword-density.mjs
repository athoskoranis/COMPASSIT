#!/usr/bin/env node
/**
 * Reports how often a page repeats its target phrases.
 *
 * Why this exists
 * ---------------
 * The service pages were written to rank and ended up repeating their keywords
 * far past the point of readability. /services/digital-marketing said "in Qatar"
 * 26 times and named Qatar 39 times in one page; /services/it-services said
 * "IT support" 12 times and "in Qatar" 12 times.
 *
 * The repetition is structural rather than scattered: the geographic term was
 * appended to every sub-service card title and then repeated inside each card's
 * description, so eight cards cost sixteen mentions before the body copy said
 * anything.
 *
 * Where the phrases belong is settled: the title tag, the H1 and the meta
 * description are specified per page in SEO.md and are left alone. This counts
 * what the body says on top of that.
 *
 * Counting the rendered page rather than the source, because the source splits
 * one sentence across template strings and the reader sees the assembled text.
 * Only <main> is counted: the footer carries the office address and the
 * copyright line, which spend four geo mentions on every page before the copy
 * says anything, and those are correct NAP data rather than repetition.
 *
 *   npm run check:density              against a local dev server
 *   npm run check:density -- --live    against production
 *
 * Exits 1 if any page is over its cap, so it can gate a build later if wanted.
 */
const live = process.argv.includes('--live')
const BASE = live ? 'https://compass-its.com' : 'http://localhost:3001'

// Caps count <main> only. The geo cap is six because a page spends four of it
// in slots that should keep it: the H1 ("Digital Marketing Agency in Qatar,
// GCC") and the eyebrow above it ("DIGITAL MARKETING · QATAR · GCC") are two
// each. That leaves the one-to-two body mentions the brief asked for.
const GEO = ['Qatar', 'Doha', 'GCC', 'Saudi Arabia', 'UAE']
const CAPS = { geo: 6, brand: 3, phrase: 3 }

const PAGES = [
  { slug: 'digital-marketing', phrase: 'digital marketing services' },
  { slug: 'it-services', phrase: 'IT support' },
  { slug: 'cybersecurity', phrase: 'service provider' },
  { slug: 'cloud-solutions', phrase: 'cloud solutions' },
  { slug: 'ai-workflows', phrase: 'consulting services' },
  { slug: 'network-infrastructure', phrase: 'network infrastructure solutions' },
  { slug: 'web-development', phrase: 'web development' },
  { slug: 'app-development', phrase: 'app development' },
]

const BRAND = 'Compass IT Solutions'

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
}

// Word-bounded, so the demonym "Qatari" is not counted as a mention of Qatar.
const count = (text, needle) =>
  (text.match(new RegExp(`\\b${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')) || []).length

const rows = []
for (const page of PAGES) {
  const url = `${BASE}/services/${page.slug}`
  let text
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const html = await res.text()
    const main = html.match(/<main[\s\S]*?<\/main>/i)
    text = visibleText(main ? main[0] : html)
  } catch (err) {
    console.error(`check-density: could not read ${url} — ${err.message}`)
    console.error(live ? '' : 'Is the dev server running on port 3001?')
    process.exit(1)
  }
  const geo = GEO.reduce((n, term) => n + count(text, term), 0)
  rows.push({
    slug: page.slug,
    geo,
    brand: count(text, BRAND),
    phrase: count(text, page.phrase),
    label: page.phrase,
    over: geo > CAPS.geo || count(text, BRAND) > CAPS.brand || count(text, page.phrase) > CAPS.phrase,
  })
}

const pad = (s, n) => String(s).padEnd(n)
console.log(`\ncheck-density: ${BASE}\n`)
console.log(`${pad('page', 26)}${pad('geo', 6)}${pad('brand', 7)}${pad('phrase', 8)}target phrase`)
console.log('-'.repeat(78))
for (const r of rows) {
  const mark = r.over ? '  <- over' : ''
  console.log(`${pad(r.slug, 26)}${pad(r.geo, 6)}${pad(r.brand, 7)}${pad(r.phrase, 8)}${r.label}${mark}`)
}
console.log(`\ncaps: geo ${CAPS.geo} (all of ${GEO.join(', ')}), brand ${CAPS.brand}, target phrase ${CAPS.phrase}`)

const over = rows.filter((r) => r.over)
if (over.length) {
  console.log(`\ncheck-density: ${over.length} page(s) over cap — ${over.map((r) => r.slug).join(', ')}`)
  process.exit(1)
}
console.log('\ncheck-density: every page within cap')
