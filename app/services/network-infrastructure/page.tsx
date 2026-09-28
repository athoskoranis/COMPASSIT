import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import NetworkInfrastructurePageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "Network Infrastructure — Compass IT Solutions" },
  description: "Network design, installation, and management for businesses in Qatar. Every cable labelled, every config documented. On-call support included.",
  alternates: {
    canonical: '/services/network-infrastructure',
    languages: { en: '/services/network-infrastructure', ar: '/ar/services/network-infrastructure', 'x-default': '/services/network-infrastructure' },
  },
  openGraph: {
    title: 'Network Infrastructure Solutions in Qatar, GCC | Compass IT Solutions',
    description: 'Network infrastructure solutions in Qatar — routers, switches, LAN & WAN, firewall solutions, and managed network services.',
    url: '/services/network-infrastructure',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Network Infrastructure Solutions',
      description: 'Network infrastructure solutions in Qatar including network assessment, design and architecture, LAN and WAN implementation, firewall solutions, managed network services, and on-site support.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Network Infrastructure',
      url: 'https://compass-its.com/services/network-infrastructure',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Network Infrastructure', item: 'https://compass-its.com/services/network-infrastructure' },
      ],
    },
    ...faqNodes(serviceData['network-infrastructure'].en.faq),
  ],
}

export default function NetworkInfrastructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NetworkInfrastructurePageClient />
    </>
  )
}
