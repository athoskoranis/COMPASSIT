import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "توريد الأجهزة وتركيبها في قطر ودول الخليج · Compass ITS" },
  description: "أجهزة كمبيوتر وحواسيب محمولة وشاشات وطابعات وخوادم وأنظمة قاعات الاجتماعات للشركات في قطر. Dell وHP وLenovo وApple — مهيّأة ومركّبة ومسجّلة.",
  alternates: {
    canonical: '/ar/services/hardware-supply',
    languages: { en: '/services/hardware-supply', ar: '/ar/services/hardware-supply', 'x-default': '/services/hardware-supply' },
  },
  // Share card. Declaring openGraph here stops the file-convention image
  // reaching this route, so it names the Arabic card explicitly.
  openGraph: { url: '/ar/services/hardware-supply', locale: 'ar_QA', images: ['/images/og/ar-share-card.png'] },
  twitter: { images: ['/images/og/ar-share-card.png'] },
}

import { arServiceJsonLd } from '@/lib/arServiceSchema'
import Client from '@/app/services/hardware-supply/client'

export default function ArabicServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(arServiceJsonLd('hardware-supply')) }} />
      <Client />
    </>
  )
}
