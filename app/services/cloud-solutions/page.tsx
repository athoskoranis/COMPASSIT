import type { Metadata } from 'next'
import CloudSolutionsPageClient from './client'

export const metadata: Metadata = {
  title: 'Cloud Consulting Company in Qatar, GCC',
  description: 'End-to-end cloud computing services in Qatar — cloud migration, infrastructure management, security, modernization, and managed cloud services across the GCC.',
  alternates: { canonical: '/services/cloud-solutions' },
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
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
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
        { '@type': 'ListItem', position: 2, name: 'Cloud Solutions', item: 'https://compass-its.com/services/cloud-solutions' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which cloud platforms does Compass IT Solutions support in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Compass IT Solutions supports AWS, Microsoft Azure, and hybrid cloud environments, providing migration, management, and optimization services across Qatar and the GCC.' },
        },
        {
          '@type': 'Question',
          name: 'How long does cloud migration take for a business in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Cloud migration timelines vary by complexity — small businesses typically take 2–4 weeks, while enterprise migrations may take 2–3 months. Compass IT Solutions provides a detailed roadmap before any work begins.' },
        },
        {
          '@type': 'Question',
          name: 'Is cloud hosting secure for businesses in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, cloud hosting with proper security controls is highly secure. Compass IT Solutions implements encryption, access controls, and continuous monitoring to protect your data in compliance with Qatar\'s data regulations.' },
        },
      ],
    },
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
