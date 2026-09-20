import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "خدمات التسويق الرقمي في قطر ودول الخليج · Compass ITS" },
  description: "قنوات البحث والمحتوى والإعلانات المدفوعة مصممة للعمل معاً — قياس أسبوعي وتحسين شهري وتراكم على مدى أرباع السنة. برامج تسويق رقمي تبنى لتدوم.",
  alternates: {
    canonical: '/ar/services/digital-marketing',
    languages: { en: '/services/digital-marketing', ar: '/ar/services/digital-marketing', 'x-default': '/services/digital-marketing' },
  },
  // Share card. Declaring openGraph here stops the file-convention image
  // reaching this route, so it names the Arabic card explicitly.
  openGraph: { url: '/ar/services/digital-marketing', locale: 'ar_QA', images: ['/images/og/ar-share-card.png'] },
  twitter: { images: ['/images/og/ar-share-card.png'] },
}

import Client from '@/app/services/digital-marketing/client'

export default function ArabicServicePage() {
  return <Client />
}
