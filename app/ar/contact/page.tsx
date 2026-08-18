import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/ar/contact',
    languages: { en: '/contact', ar: '/ar/contact' },
  },
  openGraph: { url: '/ar/contact', locale: 'ar_QA' },
}

import ContactCTA from '@/components/sections/ContactCTA'

export default function ArabicContactPage() {
  return (
    <main>
      <ContactCTA headingLevel={1} />
    </main>
  )
}
