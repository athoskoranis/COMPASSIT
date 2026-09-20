'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import type { Post } from '@/lib/posts'

/**
 * A row of posts offered at the end of a blog post or a service page.
 *
 * ── Why it exists ───────────────────────────────────────────────────────────
 *
 * The 2026-09-20 audit found every blog post sitting on exactly one inbound
 * link, from the index, with nothing connecting posts to each other and no
 * service page linking the post that covers its subject. Posts are where this
 * site's organic traffic lands, so the pages doing the most work were the ones
 * least supported by the rest of the site.
 *
 * Which posts appear is decided in lib/posts.ts — `relatedPosts()` for a post,
 * `postsForService()` for a service page. This file only draws them.
 *
 * ── English only, deliberately ──────────────────────────────────────────────
 *
 * The blog has no Arabic edition. Arabic service pages render this same client
 * component, so without the language check a reader on /ar/services/cybersecurity
 * would be offered three English articles under an English heading in the middle
 * of an Arabic page. Returning null there is the honest answer until the posts
 * themselves exist in Arabic.
 *
 * ── Placement ───────────────────────────────────────────────────────────────
 *
 * Between the article and ContactCTA on a post, and before ContactCTA on a
 * service page. Both spots sit on the Ink page background rather than inside the
 * Paper article, which is why this is styled for Ink.
 *
 * Images are `SectionImage`-style rather than the component itself: these are
 * small fixed-ratio thumbnails inside a link, so they take their own sizes and
 * never `priority` — the row is always below the fold and must not become the
 * LCP element.
 */

export default function RelatedReading({
  posts,
  eyebrow = 'Related reading',
}: {
  posts: Post[]
  /** Overridable so a page can name the subject rather than the section. */
  eyebrow?: string
}) {
  const { lang } = useLanguage()

  // No Arabic blog to point at, and nothing to draw when the caller found no
  // genuinely related post. Both render nothing rather than an empty heading.
  if (lang !== 'en' || posts.length === 0) return null

  return (
    <section className="py-16 lg:py-20 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <EyebrowLabel className="mb-8 block">{eyebrow}</EyebrowLabel>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-xl border border-paper/[0.12] bg-paper/[0.03] overflow-hidden hover:border-signal/40 hover:bg-paper/[0.06] transition-colors"
              >
                {/* Fixed ratio reserves the box before the file lands, so the
                    row costs nothing in layout shift. */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <p className="font-jetbrains text-[10px] text-signal/70 uppercase tracking-eyebrow m-0 mb-3">
                    {post.category}
                  </p>
                  <h3 className="font-archivo font-medium text-[17px] text-paper leading-snug tracking-[-0.02em] m-0 mb-3 group-hover:text-signal transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-jetbrains text-[10px] text-paper/55 uppercase tracking-eyebrow m-0 mt-auto">
                    {post.readTime}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
