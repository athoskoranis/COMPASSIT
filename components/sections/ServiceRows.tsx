import Link from 'next/link'
import SectionImage from '@/components/ui/SectionImage'

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
// Each row is its own full-width band, alternating Paper and Mist, with an id
// the hero's jump index links to.
export default function ServiceRows({ items, seeLabel }: { items: ServiceRow[]; seeLabel: string }) {
  return (
    <>
      {items.map((item, i) => {
        const flip = i % 2 === 1
        return (
          <section
            key={item.href}
            id={item.slug}
            aria-labelledby={`${item.slug}-heading`}
            className={`relative z-[1] scroll-mt-20 border-t border-ink/[0.08] py-16 lg:py-24 ${flip ? 'bg-mist' : 'bg-paper'}`}
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
                <span className="font-jetbrains text-xs font-medium uppercase tracking-eyebrow text-ink/40 mb-4">
                  {item.category}
                </span>

                <h2
                  id={`${item.slug}-heading`}
                  className="font-archivo font-normal text-ink text-[32px] leading-[36px] lg:text-[44px] lg:leading-[46px] tracking-[-0.025em] mb-4"
                >
                  {item.title}
                </h2>

                <p className="font-archivo text-[19px] leading-[26px] lg:text-body-l text-ink mb-4">
                  {item.description}
                </p>

                <p className="font-barlow text-body leading-[28px] text-ink/60 max-w-[62ch] mb-8">{item.body}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-ink/[0.12] pt-6 mb-8">
                  {item.includes.map((name) => (
                    <li key={name} className="flex gap-3 font-barlow text-[15px] leading-[22px] text-ink">
                      <span aria-hidden className="font-jetbrains text-ink/30">/</span>
                      {name}
                    </li>
                  ))}
                </ul>

                <Link
                  href={item.href}
                  className="self-start font-jetbrains text-xs uppercase tracking-eyebrow text-ink border-b-[1.5px] border-signal pb-1 transition-colors duration-200 hover:text-signal focus-visible:text-signal"
                >
                  {seeLabel} {item.title} →
                </Link>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
