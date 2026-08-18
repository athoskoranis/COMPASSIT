import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar/services/app-development',
    languages: { en: '/services/app-development', ar: '/ar/services/app-development' },
  },
  openGraph: { url: '/ar/services/app-development', locale: 'ar_QA' },
}

import Client from '@/app/services/app-development/client'

export default function ArabicServicePage() {
  return <Client />
}
