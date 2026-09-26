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

export default function AIWorkflowsPageClient() {
  const { lang } = useLanguage()
  const d = serviceData['ai-workflows'][lang]
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
            src="/images/site/ai-workflows-neural-render.jpg"
            alt="Abstract render of connected nodes in a neural network"
          />
        </div>
      </section>

      <ServiceWhyUs {...d.whyUs} />
      <RelatedReading posts={postsForService('ai-workflows')} />
      {d.faq && <ServiceFAQ faqs={d.faq} />}
      <ContactCTA />
    </main>
  )
}
