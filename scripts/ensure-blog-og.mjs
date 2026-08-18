#!/usr/bin/env node
/**
 * Guarantees every blog post emits an og:image.
 *
 * Why this exists
 * ---------------
 * Blog posts are written by an automated publisher whose page template lives
 * outside this repository. That template exports `metadata.openGraph` with a
 * title, a description and a url, and no `images` key.
 *
 * Next's file-convention image at app/blog/opengraph-image.tsx does not reach
 * those pages. Verified against this exact setup: a post whose metadata matches
 * the bot's shape renders no og:image tag at all, even with the parent file
 * present. A post segment has to declare the image itself.
 *
 * So eight published posts shipped as bare links on every social surface, and
 * the next auto-published one would have done the same. Since the template
 * cannot be changed from here, this repairs the output instead: it runs on
 * `prebuild`, so any post missing the key is fixed before it is ever built,
 * whether the build happens locally or on the deploy host.
 *
 * Run with --check to report without writing (exit 1 if anything is missing).
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const BLOG_DIR = 'app/blog'
const OG = "'/blog/opengraph-image'"
const check = process.argv.includes('--check')

const posts = readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((slug) => existsSync(join(BLOG_DIR, slug, 'page.tsx')))

const repaired = []
const missing = []

for (const slug of posts) {
  const file = join(BLOG_DIR, slug, 'page.tsx')
  let src = readFileSync(file, 'utf8')

  // A post that ships its own opengraph-image.tsx needs nothing from us.
  if (existsSync(join(BLOG_DIR, slug, 'opengraph-image.tsx'))) continue

  const hasOpenGraph = /openGraph:\s*\{/.test(src)
  if (!hasOpenGraph) continue
  if (/openGraph:\s*\{[\s\S]*?images:/.test(src)) continue

  missing.push(slug)
  if (check) continue

  // Insert `images` as the first key of the openGraph object, so it survives
  // whatever ordering the template happens to emit.
  const nl = src.includes('\r\n') ? '\r\n' : '\n'
  const before = src
  src = src.replace(/(openGraph:\s*\{)/, `$1${nl}    images: [${OG}],`)
  if (src === before) continue

  writeFileSync(file, src)
  repaired.push(slug)
}

if (check) {
  if (missing.length) {
    console.error(`ensure-blog-og: ${missing.length} post(s) with no og:image -> ${missing.join(', ')}`)
    process.exit(1)
  }
  console.log(`ensure-blog-og: all ${posts.length} posts declare an og:image`)
} else if (repaired.length) {
  console.log(`ensure-blog-og: added og:image to ${repaired.length} post(s) -> ${repaired.join(', ')}`)
} else {
  console.log(`ensure-blog-og: all ${posts.length} posts already declare an og:image`)
}
