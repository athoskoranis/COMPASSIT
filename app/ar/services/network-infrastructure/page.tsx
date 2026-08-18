import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar/services/network-infrastructure',
    languages: { en: '/services/network-infrastructure', ar: '/ar/services/network-infrastructure' },
  },
  openGraph: { url: '/ar/services/network-infrastructure', locale: 'ar_QA' },
}

import Client from '@/app/services/network-infrastructure/client'

export default function ArabicServicePage() {
  return <Client />
}
