import GlowCard from '@/components/ui/GlowCard'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

interface ServiceItem {
  title: string
  description: string
}

interface ServiceSubServicesProps {
  eyebrow?: string
  heading: string
  intro?: string
  items: ServiceItem[]
}

export default function ServiceSubServices({
  eyebrow,
  heading,
  intro,
  items,
}: ServiceSubServicesProps) {
  return (
    <section className="py-20 lg:py-28 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {eyebrow && (
          <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>
        )}

        <h2 className="font-archivo font-light text-paper tracking-[-0.04em] text-[32px] md:text-[44px] leading-none mb-6 max-w-[720px]">
          {heading}
        </h2>

        {intro && (
          <p className="font-barlow text-[17px] text-paper/60 max-w-[680px] mb-12 leading-relaxed">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <GlowCard key={item.title} variant="cyan" className="p-6">
              <h3 className="font-archivo font-medium text-paper text-[17px] mb-3">
                {item.title}
              </h3>
              <p className="font-barlow text-[15px] text-paper/55 leading-relaxed">
                {item.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
