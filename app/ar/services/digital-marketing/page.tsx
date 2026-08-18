import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar/services/digital-marketing',
    languages: { en: '/services/digital-marketing', ar: '/ar/services/digital-marketing' },
  },
  openGraph: { url: '/ar/services/digital-marketing', locale: 'ar_QA' },
}

import Client from '@/app/services/digital-marketing/client'

export default function ArabicServicePage() {
  return <Client />
}
