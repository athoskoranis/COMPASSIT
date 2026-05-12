'use client'
import { Monitor, Wifi, Cloud, Shield, Globe, Smartphone, Cpu, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'

const servicesMeta = [
  { id: 1, href: '#contact', icon: Monitor, relatedIds: [2, 4], energy: 90 },
  { id: 2, href: '#contact', icon: Wifi,    relatedIds: [1, 3], energy: 85 },
  { id: 3, href: '#contact', icon: Cloud,   relatedIds: [2, 4], energy: 80 },
  { id: 4, href: '#contact', icon: Shield,  relatedIds: [1, 3], energy: 88 },
  { id: 5, href: '#contact', icon: Globe,   relatedIds: [6, 8], energy: 75 },
  { id: 6, href: '#contact', icon: Smartphone, relatedIds: [5, 7], energy: 70 },
  { id: 7, href: '#contact', icon: Cpu,     relatedIds: [6, 8], energy: 82 },
  { id: 8, href: '#contact', icon: TrendingUp, relatedIds: [5, 7], energy: 72 },
]

export default function ServicesOverview() {
  const { tr } = useLanguage()
  const servicesData = servicesMeta.map((meta, i) => ({
    ...meta,
    ...tr.services.items[i],
  }))

  return (
    <section id="services" className="py-20 lg:py-24 z-[1] relative">
      <div className="relative h-[880px]">
        {/* Heading overlaid top-left — shares vertical space with orbit */}
        <div className="absolute top-0 left-0 right-0 z-10 max-w-content mx-auto px-6 lg:px-20 pointer-events-none">
          <EyebrowLabel className="mb-4 block">{tr.services.eyebrow}</EyebrowLabel>
          <h2 className="font-archivo text-heading-1 font-semibold text-paper tracking-[-0.025em] max-w-[520px]">
            {tr.services.heading}{' '}
            <span className="text-signal">{tr.services.headingHighlight}</span>
          </h2>
          <p className="font-archivo text-body text-paper/50 mt-4 max-w-[460px]">
            {tr.services.body}
          </p>
        </div>

        <RadialOrbitalTimeline timelineData={servicesData} seeLabel={tr.services.seeLabel} />
      </div>
    </section>
  )
}
