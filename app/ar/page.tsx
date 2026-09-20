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
  // It pointed at the English counterpart's card for one release, because the
  // audit that found the cards missing would not ship an Arabic card it could
  // not verify. The verification was worth doing: next/og cannot draw this one.
  // Satori joins Arabic letters correctly but does no bidi reordering, so it
  // lays words out in source order, left to right, and every multi-word line
  // comes out reversed. scripts/build-ar-share-card.html carries the evidence
  // and regenerates the card.
  //
  // So this is a committed PNG drawn by a browser canvas, which has a real bidi
  // implementation. A static file is also cheaper than the edge function every
  // English card runs on — it just cannot be built from data at request time,
  // which is why one card serves the whole subtree where the English side has
  // one per service. Arabic per-service cards are a later job.
  openGraph: { url: '/ar', locale: 'ar_QA', images: ['/images/og/ar-share-card.png'] },
  twitter: { images: ['/images/og/ar-share-card.png'] },
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
