import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "تطوير تطبيقات الجوال في قطر ودول الخليج · Compass ITS" },
  description: "تطبيقات جوال أصيلة ومتعددة المنصات مبنية للأداء وسهولة الاستخدام والاستدامة على المدى البعيد — من أول تدفق للمستخدم حتى إدراج التطبيق في متجر التطبيقات.",
  alternates: {
    canonical: '/ar/services/app-development',
    languages: { en: '/services/app-development', ar: '/ar/services/app-development', 'x-default': '/services/app-development' },
  },
  // Share card. Declaring openGraph here stops the file-convention image
  // reaching this route, so it names the Arabic card explicitly.
  openGraph: { url: '/ar/services/app-development', locale: 'ar_QA', images: ['/images/og/ar-share-card.png'] },
  twitter: { images: ['/images/og/ar-share-card.png'] },
}

import Client from '@/app/services/app-development/client'

export default function ArabicServicePage() {
  return <Client />
}
