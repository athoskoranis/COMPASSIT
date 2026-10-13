'use client'
import { useLanguage } from '@/context/LanguageContext'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import ContactCTA from '@/components/sections/ContactCTA'
import SectionImage from '@/components/ui/SectionImage'
import { serviceData } from '@/lib/serviceTranslations'

// No RelatedReading: no post covers procurement yet, and a related link that is
// not related is worse than none.
export default function HardwareSupplyPageClient() {
  const { lang } = useLanguage()
  const d = serviceData['hardware-supply'][lang]
  return (
    <main>
      <ServiceHero {...d.hero} />
      {d.sections.map((s, i) => (
        <ServiceSubServices key={i} eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} items={s.items} />
      ))}
      {/* Sits below the fold on purpose: lazy-loaded, never the LCP element.
          See the note in SectionImage. Licensed stock, not a Compass install. */}
      <section className="relative z-[1] pb-4">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <SectionImage
            src="/images/site/hardware-supply-workstations.jpg"
            alt="Rows of identical monitors on white desks across an open-plan floor"
          />
        </div>
      </section>

      <ServiceWhyUs {...d.whyUs} />
      {d.faq && <ServiceFAQ faqs={d.faq} />}
      <ContactCTA />
    </main>
  )
}
