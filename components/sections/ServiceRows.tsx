import Link from 'next/link'
import SectionImage from '@/components/ui/SectionImage'

export type ServiceRow = {
  href: string
  category: string
  title: string
  description: string
  /** The longer paragraph. Approved copy only — see the page for where each comes from. */
  body: string
  image: string
  alt: string
}

// The /services hub as alternating rows: photograph on one side, copy on the
// other, swapping sides down the page. Each service is a real section — an h2,
// a paragraph and a link that names it — so the hub reads as a page, not a
// grid of teasers. Ten rows also ends the lone tenth card the three-column
// grid left on its last row. Decision 156.
export default function ServiceRows({ items, seeLabel }: { items: ServiceRow[]; seeLabel: string }) {
  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      {items.map((item, i) => (
        <article
          key={item.href}
          className="group grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-14 items-center"
        >
          <Link
            href={item.href}
            tabIndex={-1}
            aria-hidden
            className={i % 2 === 1 ? 'lg:order-last' : undefined}
          >
            <SectionImage src={item.image} alt={item.alt} aspect="aspect-[3/2]" />
          </Link>

          <div className="flex flex-col gap-4">
            <span className="font-jetbrains text-xs font-medium uppercase tracking-eyebrow text-ink/40">
              {item.category}
            </span>

            <h2 className="font-archivo font-normal text-ink text-[26px] lg:text-[30px] leading-[34px] tracking-[-0.02em]">
              {item.title}
            </h2>

            <p className="font-archivo text-[19px] leading-[26px] text-ink">{item.description}</p>

            <p className="font-barlow text-body leading-[28px] text-ink/60 max-w-[62ch]">{item.body}</p>

            <Link
              href={item.href}
              className="self-start mt-2 font-jetbrains text-xs uppercase tracking-eyebrow text-ink border-b-[1.5px] border-signal pb-1 transition-colors duration-200 hover:text-signal focus-visible:text-signal"
            >
              {seeLabel} {item.title} →
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
