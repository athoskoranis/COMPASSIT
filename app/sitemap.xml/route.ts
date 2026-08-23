import { sitemapEntries } from '@/lib/sitemap-entries'

/**
 * The sitemap, served by hand rather than by `app/sitemap.ts`.
 *
 * The only reason this file exists is the second line of output: Next's
 * MetadataRoute.Sitemap generates the XML itself and offers no hook for an
 * `<?xml-stylesheet?>` processing instruction, so a browser opening
 * /sitemap.xml gets a wall of untagged text. Chrome dropped its built-in XML
 * pretty-printer, but it still honours a document-level stylesheet, so one
 * line of XML buys back a readable page. Crawlers ignore the instruction.
 *
 * The entries themselves are unchanged — `lib/sitemap-entries.ts` is the
 * former `app/sitemap.ts`, moved so it stops claiming this route, with its
 * dates and derivations intact. Only serialisation happens here, and it
 * matches Next's own output element for element so the bytes Google reads do
 * not change.
 */
export const dynamic = 'force-static'

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export function GET() {
  const entries = sitemapEntries()

  const body = entries
    .map((entry) => {
      const lines = [`<loc>${escape(entry.url)}</loc>`]

      // Alternates sit between loc and lastmod, the order Next emitted them in.
      const languages = entry.alternates?.languages
      if (languages) {
        for (const [hreflang, href] of Object.entries(languages)) {
          if (href) {
            lines.push(
              `<xhtml:link rel="alternate" hreflang="${escape(hreflang)}" href="${escape(String(href))}" />`,
            )
          }
        }
      }

      if (entry.lastModified) {
        const date =
          entry.lastModified instanceof Date ? entry.lastModified : new Date(entry.lastModified)
        lines.push(`<lastmod>${date.toISOString()}</lastmod>`)
      }
      if (entry.changeFrequency) lines.push(`<changefreq>${entry.changeFrequency}</changefreq>`)
      if (entry.priority !== undefined) lines.push(`<priority>${entry.priority}</priority>`)

      return `<url>\n${lines.join('\n')}\n</url>`
    })
    .join('\n')

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    body +
    '\n</urlset>\n'

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
