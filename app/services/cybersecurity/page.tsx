import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import CybersecurityPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "Cybersecurity — Compass IT Solutions" },
  description: "Cybersecurity for businesses in Qatar. Fortinet-backed protection, risk registers, and 24/7 incident monitoring. No fear-selling — just clear assessment.",
  alternates: {
    canonical: '/services/cybersecurity',
    languages: { en: '/services/cybersecurity', ar: '/ar/services/cybersecurity', 'x-default': '/services/cybersecurity' },
  },
  openGraph: {
    title: 'Top Cyber Security Service Provider in Qatar, GCC | Compass IT Solutions',
    description: 'Full-scale cybersecurity consulting in Qatar — risk assessment, VAPT, ISO compliance, and security implementations.',
    url: '/services/cybersecurity',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Cybersecurity Services',
      description: 'Full-scale cybersecurity consulting in Qatar including risk assessment, vulnerability assessment and penetration testing (VAPT), ISO compliance, security implementations and trainings, and business continuity planning.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Cybersecurity',
      url: 'https://compass-its.com/services/cybersecurity',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Cybersecurity', item: 'https://compass-its.com/services/cybersecurity' },
      ],
    },
    ...faqNodes(serviceData['cybersecurity'].en.faq),
  ],
}

export default function CybersecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CybersecurityPageClient />
    </>
  )
}
