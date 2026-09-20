import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "الحلول السحابية في قطر ودول الخليج · Compass ITS" },
  description: "نجعل رحلة تحديث أعمالك أيسر من خلال خدماتنا السحابية. نضع استراتيجيات سحابية ترفع كفاءة التكلفة وتزيد إنتاجية الأعمال وتيسّر التعاون بين الفرق.",
  alternates: {
    canonical: '/ar/services/cloud-solutions',
    languages: { en: '/services/cloud-solutions', ar: '/ar/services/cloud-solutions', 'x-default': '/services/cloud-solutions' },
  },
  // Share card. Declaring openGraph here stops the file-convention image
  // reaching this route, so it names the Arabic card explicitly.
  openGraph: { url: '/ar/services/cloud-solutions', locale: 'ar_QA', images: ['/images/og/ar-share-card.png'] },
  twitter: { images: ['/images/og/ar-share-card.png'] },
}

import Client from '@/app/services/cloud-solutions/client'

export default function ArabicServicePage() {
  return <Client />
}
