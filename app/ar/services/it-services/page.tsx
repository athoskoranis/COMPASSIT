import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "خدمات تقنية المعلومات في قطر ودول الخليج · Compass ITS" },
  description: "بوصفها شركة رائدة في خدمات تقنية المعلومات بقطر، تقدم كومباس آي تي سولوشنز حلولاً تقنية شاملة للشركات في جميع أنحاء دول الخليج، مدعومةً بخبرة في أحدث التقنيات.",
  alternates: {
    canonical: '/ar/services/it-services',
    languages: { en: '/services/it-services', ar: '/ar/services/it-services', 'x-default': '/services/it-services' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/services/it-services', locale: 'ar_QA', images: ['/services/it-services/opengraph-image'] },
  twitter: { images: ['/services/it-services/opengraph-image'] },
}

import Client from '@/app/services/it-services/client'

export default function ArabicServicePage() {
  return <Client />
}
