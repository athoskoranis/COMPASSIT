import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "خدمات الأمن السيبراني في قطر ودول الخليج · Compass ITS" },
  description: "خدمات استشارات أمن سيبراني متكاملة في قطر ودول الخليج تتوافق مع رؤيتك التجارية — تقييم المخاطر واختبار الاختراق والامتثال وتنفيذ الحلول الأمنية.",
  alternates: {
    canonical: '/ar/services/cybersecurity',
    languages: { en: '/services/cybersecurity', ar: '/ar/services/cybersecurity' },
  },
  openGraph: { url: '/ar/services/cybersecurity', locale: 'ar_QA' },
}

import Client from '@/app/services/cybersecurity/client'

export default function ArabicServicePage() {
  return <Client />
}
