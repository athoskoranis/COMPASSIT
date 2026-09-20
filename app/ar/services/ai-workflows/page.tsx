import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "الذكاء الاصطناعي وأتمتة العمليات في قطر · Compass ITS" },
  description: "حسّن نتائج أعمالك من خلال خدمات تطوير واستشارات الذكاء الاصطناعي في دول الخليج — التعلم الآلي وتصنيف المحتوى وأتمتة العمليات لتحقيق أهدافك بكفاءة أعلى.",
  alternates: {
    canonical: '/ar/services/ai-workflows',
    languages: { en: '/services/ai-workflows', ar: '/ar/services/ai-workflows', 'x-default': '/services/ai-workflows' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/services/ai-workflows', locale: 'ar_QA', images: ['/services/ai-workflows/opengraph-image'] },
  twitter: { images: ['/services/ai-workflows/opengraph-image'] },
}

import Client from '@/app/services/ai-workflows/client'

export default function ArabicServicePage() {
  return <Client />
}
