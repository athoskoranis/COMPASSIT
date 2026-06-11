import type { Metadata } from 'next'
import CybersecurityPageClient from './client'

export const metadata: Metadata = {
  title: 'Top Cyber Security Service Provider in Qatar, GCC',
  description: 'Full-scale cybersecurity consulting in Qatar — risk assessment, VAPT, ISO compliance, and security implementations for businesses across the GCC.',
  alternates: { canonical: '/services/cybersecurity' },
  openGraph: {
    title: 'Top Cyber Security Service Provider in Qatar, GCC | Compass IT Solutions',
    description: 'Full-scale cybersecurity consulting in Qatar — risk assessment, VAPT, ISO compliance, and security implementations.',
    url: '/services/cybersecurity',
  },
}

export default function CybersecurityPage() {
  return <CybersecurityPageClient />
}
