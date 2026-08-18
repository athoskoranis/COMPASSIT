import type { Metadata } from 'next'

export const metadata: Metadata = {
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
