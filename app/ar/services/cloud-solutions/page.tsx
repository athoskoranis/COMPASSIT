import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "الحلول السحابية في قطر ودول الخليج · Compass ITS" },
  description: "نجعل رحلة تحديث أعمالك أيسر من خلال خدماتنا السحابية. نضع استراتيجيات سحابية ترفع كفاءة التكلفة وتزيد إنتاجية الأعمال وتيسّر التعاون بين الفرق.",
  alternates: {
    canonical: '/ar/services/cloud-solutions',
    languages: { en: '/services/cloud-solutions', ar: '/ar/services/cloud-solutions', 'x-default': '/services/cloud-solutions' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/services/cloud-solutions', locale: 'ar_QA', images: ['/services/cloud-solutions/opengraph-image'] },
  twitter: { images: ['/services/cloud-solutions/opengraph-image'] },
}

import Client from '@/app/services/cloud-solutions/client'

export default function ArabicServicePage() {
  return <Client />
}
