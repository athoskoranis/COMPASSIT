'use client'
import { useLanguage } from '@/context/LanguageContext'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ContactCTA from '@/components/sections/ContactCTA'
import { serviceData } from '@/lib/serviceTranslations'

export default function AIWorkflowsPage() {
  const { lang } = useLanguage()
  const d = serviceData['ai-workflows'][lang]

  return (
    <>
      <TopoBackground />
      <Nav />
      <main>
        <ServiceHero {...d.hero} />
        {d.sections.map((s, i) => (
          <ServiceSubServices key={i} eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} items={s.items} />
        ))}
        <ServiceWhyUs {...d.whyUs} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
