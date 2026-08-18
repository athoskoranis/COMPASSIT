'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { useMemo, useState } from 'react'
import { posts } from '@/lib/posts'


// Categories come from the posts themselves, so a category introduced by a new
// post appears here without anyone editing a list. Counts are shown because with
// eight posts across four categories, an empty-looking filter is otherwise
// indistinguishable from a broken one.
const CATEGORIES = Array.from(
  posts.reduce((acc, p) => acc.set(p.category, (acc.get(p.category) ?? 0) + 1), new Map<string, number>())
).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

export default function BlogIndexClient() {
  // Filtering is client state and deliberately does not touch the URL. A
  // ?category= parameter would be crawlable, and eight posts would become five
  // near-identical URLs competing with /blog itself. The server still renders
  // every post, so the ItemList schema and what a crawler sees are unaffected.
  const [active, setActive] = useState<string | null>(null)
  const visible = useMemo(
    () => (active ? posts.filter((p) => p.category === active) : posts),
    [active]
  )

  return (
    <main>
      {/* Hero */}
      <section className="pt-[54px] relative z-[1] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
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
        <div className="max-w-content mx-auto px-6 lg:px-20">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter articles by category">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-pressed={active === null}
              className={[
                'font-jetbrains text-[11px] uppercase tracking-eyebrow px-4 py-2 rounded-xl border transition-colors duration-200',
                active === null
                  ? 'bg-signal text-ink border-signal'
                  : 'text-ink/60 border-ink/15 hover:text-ink hover:border-ink/40',
              ].join(' ')}
            >
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
                  className={[
                    'font-jetbrains text-[11px] uppercase tracking-eyebrow px-4 py-2 rounded-xl border transition-colors duration-200',
                    on
                      ? 'bg-signal text-ink border-signal'
                      : 'text-ink/60 border-ink/15 hover:text-ink hover:border-ink/40',
                  ].join(' ')}
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

          <div className="space-y-8">
            {visible.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bracketed bracketed-light bracketed-split raised-light flex flex-col lg:flex-row rounded-lg overflow-hidden transition-shadow duration-300"
              >
                <div className="lg:w-[440px] shrink-0 overflow-hidden bg-ink">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={440}
                    height={260}
                    className="w-full h-[220px] lg:h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="flex-1 p-8 lg:p-10 bg-paper flex flex-col justify-center">
                  <EyebrowLabel className="mb-4 block">{post.category}</EyebrowLabel>
                  <h2 className="font-archivo font-medium text-ink leading-tight tracking-[-0.02em] text-[22px] md:text-[26px] mb-4 group-hover:text-signal transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="font-barlow text-body text-ink/60 leading-[28px] mb-6 max-w-[520px]">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase">{post.date}</span>
                    <span className="font-jetbrains text-xs text-ink/20">·</span>
                    <span className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase">{post.readTime}</span>
                    <span className="font-jetbrains text-xs text-ink/20">·</span>
                    <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase group-hover:underline underline-offset-4">
                      Read the article →
                    </span>
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
