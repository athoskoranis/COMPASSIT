import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "خدمات التسويق الرقمي في قطر ودول الخليج · Compass ITS" },
  description: "قنوات البحث والمحتوى والإعلانات المدفوعة مصممة للعمل معاً — قياس أسبوعي وتحسين شهري وتراكم على مدى أرباع السنة. برامج تسويق رقمي تبنى لتدوم.",
  alternates: {
    canonical: '/ar/services/digital-marketing',
    languages: { en: '/services/digital-marketing', ar: '/ar/services/digital-marketing', 'x-default': '/services/digital-marketing' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/services/digital-marketing', locale: 'ar_QA', images: ['/services/digital-marketing/opengraph-image'] },
  twitter: { images: ['/services/digital-marketing/opengraph-image'] },
}

import Client from '@/app/services/digital-marketing/client'

export default function ArabicServicePage() {
  return <Client />
}
