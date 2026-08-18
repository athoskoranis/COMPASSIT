import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "خدمات التسويق الرقمي في قطر ودول الخليج · Compass ITS" },
  description: "قنوات البحث والمحتوى والإعلانات المدفوعة مصممة للعمل معاً — قياس أسبوعي وتحسين شهري وتراكم على مدى أرباع السنة. برامج تسويق رقمي تبنى لتدوم.",
  alternates: {
    canonical: '/ar/services/digital-marketing',
    languages: { en: '/services/digital-marketing', ar: '/ar/services/digital-marketing' },
  },
  openGraph: { url: '/ar/services/digital-marketing', locale: 'ar_QA' },
}

import Client from '@/app/services/digital-marketing/client'

export default function ArabicServicePage() {
  return <Client />
}
