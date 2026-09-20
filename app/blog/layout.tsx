/**
 * Blog segment metadata.
 *
 * This layout exists for one reason: the title template.
 *
 * SEO.md's Global SEO Rules cap a title tag at 60 characters, and the root
 * template appends " | Compass IT Solutions" — 23 of them. A post headline is
 * a question phrased for search ("How to Build Network Infrastructure in
 * Qatar?", 45 characters), so every post on the site was rendering a title
 * between 64 and 82 characters and being cut off in the result page, usually
 * mid-word and usually before the part that names Qatar.
 *
 * The posts already answer this themselves: each one's openGraph.title uses
 * "| Compass ITS". This just makes the <title> agree with the card that has
 * been shipping beside it all along, and buys back nine characters.
 *
 * A title.template applies to child segments rather than the one that declares
 * it, so /blog keeps the root suffix and only the posts below it shorten. That
 * is the right split — the index has a short name and room to spare.
 *
 * Declaring it here rather than per post is what makes it hold: posts are
 * written into app/blog/ by the blog bot, and anything fixed nine times in
 * nine page files would be correct until the next one lands.
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { template: '%s | Compass ITS', default: 'Compass IT Solutions' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
