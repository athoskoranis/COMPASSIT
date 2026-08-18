import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar/services/it-services',
    languages: { en: '/services/it-services', ar: '/ar/services/it-services' },
  },
  openGraph: { url: '/ar/services/it-services', locale: 'ar_QA' },
}

import Client from '@/app/services/it-services/client'

export default function ArabicServicePage() {
  return <Client />
}
