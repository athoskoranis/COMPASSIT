import Link from 'next/link'
import SectionImage from '@/components/ui/SectionImage'
import Button from '@/components/ui/Button'

export type ServiceRow = {
  slug: string
  href: string
  category: string
  title: string
  description: string
  /** The longer paragraph. Approved copy only — see the page for where each comes from. */
  body: string
  /** Sub-service titles, as already shipped on the service's own page. */
  includes: string[]
  image: string
  alt: string
}

// The /services hub as alternating rows: photograph on one side, copy on the
// other, swapping sides down the page. Each service is a real section — an h2,
// a paragraph, what it covers, and a link that names it — so the hub reads as
// a page, not a grid of teasers. Decisions 156 and 157.
//
// Each row is its own full-width band with an id the hero's jump index links
// to. Bands alternate Paper and Ink (Decision 158). An Ink band is transparent,
// not bg-ink: like the hero, it lets SiteBackground's contour lines show
// through, so the dark rows read as the same surface as the hero. Signal marks
// the category on Ink only — on Paper it falls below AA at caption size.
//
// Decision 159 adds Signal where the guide already spends it: each row's link
// becomes the primary CTA button (Signal border, Signal fill on hover), and
// the list markers take Signal as a live mark. The markers are aria-hidden
// glyphs, not text, so the AA limit on Signal-on-Paper text does not apply.
export default function ServiceRows({ items, seeLabel }: { items: ServiceRow[]; seeLabel: string }) {
  return (
    <>
      {items.map((item, i) => {
        const flip = i % 2 === 1
        const dark = flip
        return (
          <section
            key={item.href}
            id={item.slug}
            aria-labelledby={`${item.slug}-heading`}
            className={`relative z-[1] scroll-mt-20 py-16 lg:py-28 ${dark ? 'border-t border-paper/[0.08]' : 'bg-paper'}`}
          >
            <div className="max-w-content mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
              <Link
                href={item.href}
                tabIndex={-1}
                aria-hidden
                className={`group relative block ${flip ? 'lg:order-last' : ''}`}
              >
                <SectionImage
                  src={item.image}
                  alt={item.alt}
                  aspect="aspect-[4/3]"
                  className="transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </Link>

              <div className="flex flex-col">
                <span className={`font-jetbrains text-xs font-medium uppercase tracking-eyebrow mb-4 ${dark ? 'text-signal' : 'text-ink/40'}`}>
                  {item.category}
                </span>

                <h2
                  id={`${item.slug}-heading`}
                  className={`font-archivo font-normal ${dark ? 'text-paper' : 'text-ink'} text-[32px] leading-[36px] lg:text-[44px] lg:leading-[46px] tracking-[-0.025em] mb-4`}
                >
                  {item.title}
                </h2>

                <p className={`font-archivo text-[19px] leading-[26px] lg:text-body-l mb-4 ${dark ? 'text-paper' : 'text-ink'}`}>
                  {item.description}
                </p>

                <p className={`font-barlow text-body leading-[28px] max-w-[62ch] mb-8 ${dark ? 'text-paper/60' : 'text-ink/60'}`}>{item.body}</p>

                <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-t pt-6 mb-8 ${dark ? 'border-paper/[0.12]' : 'border-ink/[0.12]'}`}>
                  {item.includes.map((name) => (
                    <li key={name} className={`flex gap-3 font-barlow text-[15px] leading-[22px] ${dark ? 'text-paper/80' : 'text-ink'}`}>
                      <span aria-hidden className="font-jetbrains text-signal">/</span>
                      {name}
                    </li>
                  ))}
                </ul>

                <Button href={item.href} variant="primary" className="self-start">
                  {seeLabel} {item.title} →
                </Button>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
