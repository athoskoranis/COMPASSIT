'use client'
import Link from 'next/link'
import { Monitor, Wifi, Cloud, Shield, Globe, Smartphone, Cpu, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'

const servicesMeta = [
  { id: 1, href: '/services/it-services',            icon: Monitor,    relatedIds: [2, 4], energy: 90 },
  { id: 2, href: '/services/network-infrastructure', icon: Wifi,       relatedIds: [1, 3], energy: 85 },
  { id: 3, href: '/services/cloud-solutions',        icon: Cloud,      relatedIds: [2, 4], energy: 80 },
  { id: 4, href: '/services/cybersecurity',          icon: Shield,     relatedIds: [1, 3], energy: 88 },
  { id: 5, href: '/services/web-development',        icon: Globe,      relatedIds: [6, 8], energy: 75 },
  { id: 6, href: '/services/ai-workflows',           icon: Cpu,        relatedIds: [5, 7], energy: 70 },
  { id: 7, href: '/services/ai-workflows',           icon: Smartphone, relatedIds: [6, 8], energy: 82 },
  { id: 8, href: '/services/digital-marketing',       icon: TrendingUp, relatedIds: [5, 7], energy: 72 },
]

export default function ServicesOverview() {
  const { tr } = useLanguage()
  const servicesData = servicesMeta.map((meta, i) => ({
    ...meta,
    ...tr.services.items[i],
  }))

  return (
    <section id="services" className="py-20 lg:py-24 z-[1] relative">

      {/* Desktop: orbital dial */}
      <div className="hidden lg:block relative h-[880px]">
        <div className="absolute top-0 left-0 right-0 z-10 max-w-content mx-auto px-6 lg:px-20 pointer-events-none">
          <EyebrowLabel className="mb-4 block">{tr.services.eyebrow}</EyebrowLabel>
          <h2 className="font-archivo text-heading-1 font-semibold text-paper tracking-[-0.025em] max-w-[520px]">
            {tr.services.heading}{' '}
            <span className="text-signal">{tr.services.headingHighlight}</span>
          </h2>
          <p className="font-barlow text-body text-paper/50 mt-4 max-w-[460px]">
            {tr.services.body}
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={servicesData} seeLabel={tr.services.seeLabel} />
      </div>

      {/* Mobile: list grid */}
      <div className="lg:hidden max-w-content mx-auto px-6">
        <EyebrowLabel className="mb-4 block">{tr.services.eyebrow}</EyebrowLabel>
        <h2 className="font-archivo text-[32px] font-semibold text-paper tracking-[-0.025em] mb-2">
          {tr.services.heading}{' '}
          <span className="text-signal">{tr.services.headingHighlight}</span>
        </h2>
        <p className="font-barlow text-[17px] text-paper/50 mb-10">
          {tr.services.body}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {servicesData.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.id}
                href={s.href}
                className="flex flex-col gap-3 p-4 rounded-xl border border-paper/[0.10] bg-paper/[0.04] hover:border-signal/40 hover:bg-paper/[0.07] active:scale-[0.98] transition-all"
              >
                <Icon size={20} className="text-signal" />
                <span className="font-archivo font-medium text-paper text-[14px] leading-snug">
                  {s.title}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

    </section>
  )
}
