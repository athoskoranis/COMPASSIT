import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import CloudSolutionsPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "Cloud Solutions — AWS, Azure & Hybrid · Compass ITS" },
  description: "Cloud architecture and migration for organisations in Qatar. AWS, Microsoft Azure, and hybrid environments — built for redundancy, performance, and security.",
  alternates: {
    canonical: '/services/cloud-solutions',
    languages: { en: '/services/cloud-solutions', ar: '/ar/services/cloud-solutions', 'x-default': '/services/cloud-solutions' },
  },
  openGraph: {
    title: 'Cloud Consulting Company in Qatar, GCC | Compass IT Solutions',
    description: 'End-to-end cloud computing services in Qatar — cloud migration, infrastructure management, security, and modernization.',
    url: '/services/cloud-solutions',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Cloud Solutions',
      description: 'End-to-end cloud computing services in Qatar including cloud migration, application development, infrastructure management, security, modernization, disaster management, and managed cloud services.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Cloud Computing',
      url: 'https://compass-its.com/services/cloud-solutions',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Cloud Solutions', item: 'https://compass-its.com/services/cloud-solutions' },
      ],
    },
    ...faqNodes(serviceData['cloud-solutions'].en.faq),
  ],
}

export default function CloudSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CloudSolutionsPageClient />
    </>
  )
}
