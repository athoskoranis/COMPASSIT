'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { useMemo, useState } from 'react'
import { posts } from '@/lib/posts'

/**
 * Blog index: one featured post, then a grid.
 *
 * ── Why this page is wider than 1280px ──────────────────────────────────────
 *
 * DESIGN.md sets max content width at 1280px and CLAUDE.md repeats it. This
 * page runs to 1600px, on the client's instruction, and it is the only page
 * that does.
 *
 * The reason it shows here and nowhere else: every other page is prose and
 * panels, which a 1280px measure suits. This one is a card grid, and on a
 * 1900px display a 1280px grid leaves roughly 310px of empty page down each
 * side while the cards themselves are cramped to three narrow columns. The
 * hero widens with it so the left edge of the heading still lines up with the
 * left edge of the first card.
 *
 * Logged as Decision 122. It is a scoped exception, not a new default — do not
 * carry it to other pages without the same argument.
 *
 * It was nine full-width horizontal cards stacked one under another. Each was
 * around 300px tall, so a reader saw roughly one post per screen and had to
 * scroll three thousand pixels to reach the ninth — and every post carried
 * identical weight, so nothing marked the newest or the one worth reading
 * first. An index that gives nine things equal prominence has not indexed them.
 *
 * The newest post now leads at full width and the rest sit three across. Same
 * nine posts, about a third of the height, with a hierarchy.
 *
 * ── Why the feature disappears when a filter is on ──────────────────────────
 *
 * Featuring the first of two results looks like a bug rather than a choice: the
 * lead treatment means "start here, out of nine", and it stops meaning that
 * when there are three. Filtered views are an even grid.
 *
 * ── What did not change ─────────────────────────────────────────────────────
 *
 * Filtering stays client state and still does not touch the URL. A ?category=
 * parameter would be crawlable, and nine posts would become five near-identical
 * URLs competing with /blog itself. Every post is still server-rendered, so the
 * ItemList schema in page.tsx and what a crawler sees are unaffected by which
 * chip is active.
 */

// Categories come from the posts themselves, so a category introduced by a new
// post appears here without anyone editing a list. Counts are shown because an
// empty-looking filter is otherwise indistinguishable from a broken one.
const CATEGORIES = Array.from(
  posts.reduce((acc, p) => acc.set(p.category, (acc.get(p.category) ?? 0) + 1), new Map<string, number>())
).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

const chipClass = (on: boolean) =>
  [
    'font-jetbrains text-[11px] uppercase tracking-eyebrow px-4 py-2 rounded-xl border transition-colors duration-200',
    on
      ? 'bg-signal text-ink border-signal'
      : 'text-ink/60 border-ink/15 hover:text-ink hover:border-ink/40',
  ].join(' ')

export default function BlogIndexClient() {
  const [active, setActive] = useState<string | null>(null)

  const visible = useMemo(
    () => (active ? posts.filter((p) => p.category === active) : posts),
    [active]
  )

  // Unfiltered, the newest post leads and the remaining eight form the grid.
  const featured = active ? null : visible[0]
  const grid = featured ? visible.slice(1) : visible

  return (
    <main>
      {/* Hero */}
      <section className="pt-[54px] relative z-[1] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
          <EyebrowLabel className="mb-6 block">COMPASS ITS · BLOG</EyebrowLabel>
          <h1 className="font-archivo font-light text-paper leading-none tracking-[-0.04em] text-[44px] md:text-[60px] lg:text-[72px] max-w-[600px] mb-6">
            Thinking out loud.
          </h1>
          <p className="font-barlow text-body-l text-paper/60 max-w-[480px] leading-relaxed">
            Technology, infrastructure, and what makes IT work in Qatar and the GCC.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-paper py-16 lg:py-24 relative z-[1]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20">

          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter articles by category">
            <button type="button" onClick={() => setActive(null)} aria-pressed={active === null} className={chipClass(active === null)}>
              All ({posts.length})
            </button>

            {CATEGORIES.map(([category, count]) => {
              const on = active === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(on ? null : category)}
                  aria-pressed={on}
                  className={chipClass(on)}
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>

          <p className="sr-only" aria-live="polite">
            {visible.length} {visible.length === 1 ? 'article' : 'articles'}
            {active ? ` in ${active}` : ''}
          </p>

          {/* Featured — newest post, unfiltered only */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group bracketed bracketed-light bracketed-split raised-light flex flex-col lg:flex-row lg:h-[360px] rounded-lg overflow-hidden mb-12 transition-shadow duration-300"
            >
              <div className="lg:w-[56%] shrink-0 overflow-hidden bg-ink">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={720}
                  height={440}
                  // 56% of the 1600px container from lg up, full-bleed below.
                  // Stated because without it next/image assumes the image
                  // could fill the viewport; kept in step with the container
                  // width, because a stale value here silently ships a blurry
                  // image rather than an error.
                  sizes="(min-width: 1024px) 900px, 100vw"
                  // The largest element in view on this page, so the LCP
                  // candidate. Everything below it stays lazy.
                  priority
                  className="w-full h-[220px] lg:h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="flex-1 p-8 lg:p-10 bg-paper flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  <EyebrowLabel className="block">{featured.category}</EyebrowLabel>
                  <span className="font-jetbrains text-[10px] text-ink/35 uppercase tracking-eyebrow border border-ink/15 rounded-md px-2 py-1">
                    Latest
                  </span>
                </div>

                <h2 className="font-archivo font-medium text-ink leading-tight tracking-[-0.025em] text-[24px] md:text-[30px] mb-4 group-hover:text-signal transition-colors duration-200">
                  {featured.title}
                </h2>

                {/* Three lines, not four. At four the block plus the title, eyebrow
                    and meta row totals more than the 360px the card is capped
                    at, and the last line clipped against the bottom edge. */}
                <p className="font-barlow text-[17px] text-ink/60 leading-[28px] mb-6 max-w-[620px] line-clamp-3">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase">{featured.date}</span>
                  <span className="font-jetbrains text-xs text-ink/20">·</span>
                  <span className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase">{featured.readTime}</span>
                  <span className="font-jetbrains text-xs text-ink/20">·</span>
                  <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase group-hover:underline underline-offset-4">
                    Read the article →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          {/* Four across from xl. With the feature taken out, eight posts make
              two clean rows of four; at three across the last row is a ragged
              pair. Drops to three at lg, where four would be too narrow. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {grid.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bracketed bracketed-light raised-light flex flex-col rounded-lg overflow-hidden transition-shadow duration-300"
              >
                <div className="overflow-hidden bg-ink">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={420}
                    height={236}
                    // Four across inside the 1600px container, three at lg,
                    // two at md.
                    sizes="(min-width: 1280px) 350px, (min-width: 1024px) 460px, (min-width: 768px) 45vw, 100vw"
                    className="w-full aspect-[16/9] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6 bg-paper">
                  <EyebrowLabel className="mb-3 block">{post.category}</EyebrowLabel>

                  <h2 className="font-archivo font-medium text-ink leading-snug tracking-[-0.02em] text-[19px] mb-3 group-hover:text-signal transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Clamped so three cards in a row square off regardless of
                      how long the excerpt runs. */}
                  <p className="font-barlow text-[15px] text-ink/60 leading-[25px] mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* mt-auto pins the meta line to the bottom of every card, so
                      the dates align across the row. */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-auto pt-1">
                    <span className="font-jetbrains text-[11px] text-ink/40 tracking-eyebrow uppercase">{post.date}</span>
                    <span className="font-jetbrains text-[11px] text-ink/20">·</span>
                    <span className="font-jetbrains text-[11px] text-ink/40 tracking-eyebrow uppercase">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
