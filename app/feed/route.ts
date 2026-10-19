import { posts } from '@/lib/posts'
import { BASE, postDates } from '@/lib/sitemap-entries'

/**
 * RSS 2.0 feed of the blog, at /feed — the path the group's WordPress sites
 * (compasswaterproof.com, compass-arabia.com, compassfmgcc.com,
 * sunsetmediame.com) serve theirs on, so anything that already reads those
 * finds this one by the same rule. /feed/ with the slash 308s here.
 *
 * Titles, excerpts and images come from lib/posts.ts; dates come from the
 * fixed publish dates in lib/sitemap-entries.ts. posts.ts only carries
 * "October 2026", and a feed reader sorts on the full date.
 */
export const dynamic = 'force-static'

const TITLE = 'Compass IT Solutions'
const DESCRIPTION =
  'Managed IT services for organisations across Qatar and the GCC. Network infrastructure, cloud, cybersecurity, and web development — wired right the first time.'

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

// Noon UTC, so the date reads the same in Doha and in a reader set to UTC.
const rfc822 = (date: string) => new Date(`${date}T12:00:00Z`).toUTCString()

export function GET() {
  const dated = posts
    .map((post) => {
      const dates = postDates.find((d) => d.slug === post.slug)
      return dates ? { ...post, published: dates.published } : null
    })
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => b.published.localeCompare(a.published))

  const items = dated
    .map((post) => {
      const url = `${BASE}/blog/${post.slug}`
      const image = `${BASE}${post.image}`
      return [
        '<item>',
        `<title>${escape(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${rfc822(post.published)}</pubDate>`,
        `<dc:creator>${TITLE}</dc:creator>`,
        `<category>${escape(post.category)}</category>`,
        `<description>${escape(post.excerpt)}</description>`,
        `<media:content url="${escape(image)}" medium="image" type="image/jpeg" />`,
        '</item>',
      ].join('\n')
    })
    .join('\n')

  const lastBuild = dated[0] ? rfc822(dated[0].published) : new Date().toUTCString()

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">\n' +
    '<channel>\n' +
    `<title>${TITLE}</title>\n` +
    `<atom:link href="${BASE}/feed" rel="self" type="application/rss+xml" />\n` +
    `<link>${BASE}/blog</link>\n` +
    `<description>${escape(DESCRIPTION)}</description>\n` +
    `<lastBuildDate>${lastBuild}</lastBuildDate>\n` +
    '<language>en</language>\n' +
    `<image>\n<url>${BASE}/brand/compass-its-horizontal-dark.png</url>\n<title>${TITLE}</title>\n<link>${BASE}/blog</link>\n</image>\n` +
    items +
    '\n</channel>\n</rss>\n'

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
