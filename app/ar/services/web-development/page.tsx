import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar/services/web-development',
    languages: { en: '/services/web-development', ar: '/ar/services/web-development' },
  },
  openGraph: { url: '/ar/services/web-development', locale: 'ar_QA' },
}

import Client from '@/app/services/web-development/client'

export default function ArabicServicePage() {
  return <Client />
}
