import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar/services/ai-workflows',
    languages: { en: '/services/ai-workflows', ar: '/ar/services/ai-workflows' },
  },
  openGraph: { url: '/ar/services/ai-workflows', locale: 'ar_QA' },
}

import Client from '@/app/services/ai-workflows/client'

export default function ArabicServicePage() {
  return <Client />
}
