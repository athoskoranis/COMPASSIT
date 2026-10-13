import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import HardwareSupplyPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: 'Hardware Supply — Compass IT Solutions' },
  description: 'PCs, laptops, monitors, printers, servers and meeting-room AV for businesses in Qatar. Dell, HP, Lenovo and Apple — imaged, installed and tagged.',
  alternates: {
    canonical: '/services/hardware-supply',
    languages: { en: '/services/hardware-supply', ar: '/ar/services/hardware-supply', 'x-default': '/services/hardware-supply' },
  },
  openGraph: {
    title: 'Hardware Supply and Installation in Qatar, GCC | Compass IT Solutions',
    description: 'IT hardware supply in Qatar — PCs, laptops, monitors, printers, servers and meeting-room AV, imaged, installed and asset-tagged.',
    url: '/services/hardware-supply',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Hardware Supply and Installation',
      description: 'IT hardware supply in Qatar: PCs, laptops, monitors, printers, scanners, servers, storage and meeting-room AV from Dell, HP, HPE, Lenovo and Apple, with imaging, installation, asset tagging, warranty handling and disposal of old devices.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'IT Hardware Supply',
      url: 'https://compass-its.com/services/hardware-supply',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Hardware Supply', item: 'https://compass-its.com/services/hardware-supply' },
      ],
    },
    ...faqNodes(serviceData['hardware-supply'].en.faq),
  ],
}

export default function HardwareSupplyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HardwareSupplyPageClient />
    </>
  )
}
