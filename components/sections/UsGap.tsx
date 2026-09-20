import Image from 'next/image'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * What the POS leaves out, as four cards with a photograph each.
 *
 * This is a /us-only version of ServiceSubServices. The shared component is
 * text-only and is used by nine Gulf service pages, where it should stay that
 * way — the images here are specific to a restaurant audience and would be
 * wrong on a network infrastructure page.
 *
 * Portrait crops, not banners. A full-width landscape strip is a break between
 * sections rather than part of one; in a card beside the words it is doing the
 * same job the words are, which is what "integrated" means here.
 *
 * Licensed stock. None of these is a Compass client, a Compass kitchen or a
 * Compass install, and no caption may suggest otherwise — the rule in
 * SectionImage applies to every photograph on the site.
 */

type GapItem = {
  title: string
  description: string
  image: string
  alt: string
}

export default function UsGap({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string
  heading: string
  intro: string
  items: GapItem[]
}) {
  return (
    <section className="relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>

        <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[32px] md:text-[44px] leading-none mb-6 max-w-[720px]">
          {heading}
        </h2>

        <p className="font-barlow text-[17px] text-paper/70 max-w-[680px] mb-12 leading-[1.65]">
          {intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl border border-paper/[0.10] bg-paper/[0.03] overflow-hidden"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  /* Four across on desktop, so never more than a quarter of the
                     container. Without this every phone pulls a desktop file. */
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent"
                />
              </div>

              <div className="p-5 pt-4">
                <h3 className="font-archivo font-medium text-paper text-[17px] tracking-[-0.02em] m-0">
                  {item.title}
                </h3>
                <p className="font-barlow text-[14.5px] text-paper/65 leading-[1.6] mt-2.5 m-0">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
