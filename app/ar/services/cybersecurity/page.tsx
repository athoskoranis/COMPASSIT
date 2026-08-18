import type { Metadata } from 'next'

export const metadata: Metadata = {
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
