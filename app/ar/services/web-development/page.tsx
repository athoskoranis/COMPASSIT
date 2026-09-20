import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "تطوير المواقع الإلكترونية في قطر ودول الخليج · Compass ITS" },
  description: "نطور حلول مواقع إلكترونية تفاعلية تحقق نتائج أعمال ملموسة. وسّع قاعدة عملائك واحصل على مزيد من الفرص مع خدمات تطوير المواقع من كومباس آي تي سولوشنز.",
  alternates: {
    canonical: '/ar/services/web-development',
    languages: { en: '/services/web-development', ar: '/ar/services/web-development', 'x-default': '/services/web-development' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/services/web-development', locale: 'ar_QA', images: ['/services/web-development/opengraph-image'] },
  twitter: { images: ['/services/web-development/opengraph-image'] },
}

import Client from '@/app/services/web-development/client'

export default function ArabicServicePage() {
  return <Client />
}
