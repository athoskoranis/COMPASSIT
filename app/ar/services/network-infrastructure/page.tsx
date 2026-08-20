import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "البنية التحتية للشبكات في قطر ودول الخليج · Compass ITS" },
  description: "تحتاج الشركات اليوم إلى اتصال دائم ومستقر. نبني العمود الفقري القوي الذي يبقي شبكتك تعمل — تصميم وتركيب وإدارة البنية التحتية للشبكات في قطر ودول الخليج.",
  alternates: {
    canonical: '/ar/services/network-infrastructure',
    languages: { en: '/services/network-infrastructure', ar: '/ar/services/network-infrastructure', 'x-default': '/services/network-infrastructure' },
  },
  openGraph: { url: '/ar/services/network-infrastructure', locale: 'ar_QA' },
}

import Client from '@/app/services/network-infrastructure/client'

export default function ArabicServicePage() {
  return <Client />
}
