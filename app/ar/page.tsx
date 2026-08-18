import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar',
    languages: { en: '/', ar: '/ar' },
  },
  openGraph: { url: '/ar', locale: 'ar_QA' },
}

import Hero from '@/components/sections/Hero'
import BrandPillars from '@/components/sections/BrandPillars'
import ServicesOverview from '@/components/sections/ServicesOverview'
import StatsBar from '@/components/sections/StatsBar'
import WhyCompass from '@/components/sections/WhyCompass'
import ContactCTA from '@/components/sections/ContactCTA'

export default function ArabicHomePage() {
  return (
    <main>
      <Hero />
      <BrandPillars />
      <ServicesOverview />
      <StatsBar />
      <WhyCompass />
      <ContactCTA />
    </main>
  )
}
