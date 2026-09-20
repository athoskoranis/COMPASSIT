import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "كومباس آي تي سولوشنز — مُثبَّت بإتقان. يعمل باستمرار." },
  description: "نبني البنية التحتية الهادئة التي تُمكِّن الفرق الطموحة من التحرك دون عوائق — مُثبَّتة بإتقان منذ البداية، وتعمل باستمرار على المدى البعيد في قطر ودول الخليج.",
  alternates: {
    canonical: '/ar',
    languages: { en: '/', ar: '/ar', 'x-default': '/' },
  },
  // og:image and twitter:image. Next's file convention fills these in from the
  // nearest opengraph-image.tsx, but declaring an openGraph object here stops
  // the root app/opengraph-image.tsx from reaching this route, so every /ar
  // page was shipping with no share card at all — a bare link on every paste
  // into WhatsApp, LinkedIn or X, which is where a Gulf B2B page gets shared.
  //
  // Pointed at the English counterpart's card, which already renders the mark,
  // the tagline and the service line. The card is in English on an Arabic
  // page: not ideal, and noted in CHANGELOG as needing an Arabic one. It needs
  // approved Arabic copy and an RTL-safe renderer — Satori joins Arabic glyphs
  // badly, and a broken Arabic card would be worse than an English one.
  openGraph: { url: '/ar', locale: 'ar_QA', images: ['/opengraph-image'] },
  twitter: { images: ['/opengraph-image'] },
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
