import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "خدمات الأمن السيبراني في قطر ودول الخليج · Compass ITS" },
  description: "خدمات استشارات أمن سيبراني متكاملة في قطر ودول الخليج تتوافق مع رؤيتك التجارية — تقييم المخاطر واختبار الاختراق والامتثال وتنفيذ الحلول الأمنية.",
  alternates: {
    canonical: '/ar/services/cybersecurity',
    languages: { en: '/services/cybersecurity', ar: '/ar/services/cybersecurity', 'x-default': '/services/cybersecurity' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/services/cybersecurity', locale: 'ar_QA', images: ['/services/cybersecurity/opengraph-image'] },
  twitter: { images: ['/services/cybersecurity/opengraph-image'] },
}

import Client from '@/app/services/cybersecurity/client'

export default function ArabicServicePage() {
  return <Client />
}
