import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "الحلول السحابية في قطر ودول الخليج · Compass ITS" },
  description: "نجعل رحلة تحديث أعمالك أيسر من خلال خدماتنا السحابية. نضع استراتيجيات سحابية ترفع كفاءة التكلفة وتزيد إنتاجية الأعمال وتيسّر التعاون بين الفرق.",
  alternates: {
    canonical: '/ar/services/cloud-solutions',
    languages: { en: '/services/cloud-solutions', ar: '/ar/services/cloud-solutions' },
  },
  openGraph: { url: '/ar/services/cloud-solutions', locale: 'ar_QA' },
}

import Client from '@/app/services/cloud-solutions/client'

export default function ArabicServicePage() {
  return <Client />
}
