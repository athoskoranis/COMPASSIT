import type { Metadata } from 'next'
import NetworkInfrastructurePageClient from './client'

export const metadata: Metadata = {
  title: 'Network Infrastructure Solutions in Qatar, GCC',
  description: 'Network infrastructure solutions in Qatar — routers, switches, LAN & WAN, firewall solutions, managed network services, and on-site support across the GCC.',
  alternates: { canonical: '/services/network-infrastructure' },
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
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
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
        { '@type': 'ListItem', position: 2, name: 'Network Infrastructure', item: 'https://compass-its.com/services/network-infrastructure' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is network infrastructure?',
          acceptedAnswer: { '@type': 'Answer', text: 'Network infrastructure includes all the hardware and software — routers, switches, firewalls, and cabling — that connects devices and enables communication within and between business locations. Proper network infrastructure is essential for business continuity and productivity.' },
        },
        {
          '@type': 'Question',
          name: 'How often should network infrastructure be upgraded?',
          acceptedAnswer: { '@type': 'Answer', text: 'Business networks should typically be reviewed every 3–5 years, or sooner if performance issues arise. Compass IT Solutions provides network assessments to identify when upgrades are needed and what improvements will deliver the best ROI.' },
        },
        {
          '@type': 'Question',
          name: 'Does Compass IT Solutions provide network support across Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, Compass IT Solutions provides network design, installation, and ongoing managed network services for businesses across Doha and the wider Qatar and GCC region, with both on-site and remote support available.' },
        },
      ],
    },
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
