import 'server-only'
import fs from 'node:fs'
import path from 'node:path'

// The Trusted Partners roster: the specialist contractors Compass brings onto
// client sites. The roster section on /trusted-partners renders ONLY when this
// file holds entries, so the page never shows invented contractors — the same
// rule the site already applies to client proof.
//
//   content/partners.json   [{ name, city, disciplines[], blurb?, since? }]
//
// A contractor goes in here only once procurement has ACCEPTED them and their
// signed application is on file. That signature is what permits the public
// listing, and it is why a removal request must be honoured within 30 days.

export type Partner = {
  /** Company name, as they want it shown. */
  name: string
  /** Where they are based, e.g. 'Doha, Qatar'. */
  city: string
  /** What they do, in our service language. */
  disciplines: string[]
  /** One line about them, in Compass voice. No superlatives, no invented claims. */
  blurb?: string
  /** Year they joined the roster, e.g. '2026'. */
  since?: string
}

export function getPartners(): Partner[] {
  const file = path.join(process.cwd(), 'content', 'partners.json')
  if (!fs.existsSync(file)) return []

  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  if (!Array.isArray(data)) return []

  return (data as Partner[])
    .map((p) => ({ ...p, disciplines: Array.isArray(p.disciplines) ? p.disciplines : [] }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
