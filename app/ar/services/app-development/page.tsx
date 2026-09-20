import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "تطوير تطبيقات الجوال في قطر ودول الخليج · Compass ITS" },
  description: "تطبيقات جوال أصيلة ومتعددة المنصات مبنية للأداء وسهولة الاستخدام والاستدامة على المدى البعيد — من أول تدفق للمستخدم حتى إدراج التطبيق في متجر التطبيقات.",
  alternates: {
    canonical: '/ar/services/app-development',
    languages: { en: '/services/app-development', ar: '/ar/services/app-development', 'x-default': '/services/app-development' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/services/app-development', locale: 'ar_QA', images: ['/services/app-development/opengraph-image'] },
  twitter: { images: ['/services/app-development/opengraph-image'] },
}

import Client from '@/app/services/app-development/client'

export default function ArabicServicePage() {
  return <Client />
}
