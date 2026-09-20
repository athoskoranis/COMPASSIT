'use client'
import { useLanguage } from '@/context/LanguageContext'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import ContactCTA from '@/components/sections/ContactCTA'
import SectionImage from '@/components/ui/SectionImage'
import { serviceData } from '@/lib/serviceTranslations'
import RelatedReading from '@/components/sections/RelatedReading'
import { postsForService } from '@/lib/posts'

export default function CybersecurityPageClient() {
  const { lang } = useLanguage()
  const d = serviceData['cybersecurity'][lang]
  return (
    <main>
      <ServiceHero {...d.hero} />
      {d.sections.map((s, i) => (
        <ServiceSubServices key={i} eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} items={s.items} />
      ))}
      {/* Below the fold on purpose: lazy-loaded, never the LCP element.
          See the note in SectionImage. */}
      <section className="relative z-[1] pb-4">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <SectionImage
            src="/images/site/cybersecurity-monitoring.jpg"
            alt="Code on monitors in a darkened security operations room"
          />
        </div>
      </section>

      <ServiceWhyUs {...d.whyUs} />
      {d.faq && <ServiceFAQ faqs={d.faq} />}
      <RelatedReading posts={postsForService('cybersecurity')} />
      <ContactCTA />
    </main>
  )
}
