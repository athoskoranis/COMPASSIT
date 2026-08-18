import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "تطوير المواقع الإلكترونية في قطر ودول الخليج · Compass ITS" },
  description: "نطور حلول مواقع إلكترونية تفاعلية تحقق نتائج أعمال ملموسة. وسّع قاعدة عملائك واحصل على مزيد من الفرص مع خدمات تطوير المواقع من كومباس آي تي سولوشنز.",
  alternates: {
    canonical: '/ar/services/web-development',
    languages: { en: '/services/web-development', ar: '/ar/services/web-development' },
  },
  openGraph: { url: '/ar/services/web-development', locale: 'ar_QA' },
}

import Client from '@/app/services/web-development/client'

export default function ArabicServicePage() {
  return <Client />
}
