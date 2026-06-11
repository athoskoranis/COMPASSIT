import type { Metadata } from 'next'
import ITServicesPageClient from './client'

export const metadata: Metadata = {
  title: 'Managed IT Services in Qatar, GCC',
  description: 'End-to-end managed IT support, AMC, hardware supply, and network solutions for businesses in Qatar and the GCC.',
  alternates: { canonical: '/services/it-services' },
  openGraph: {
    title: 'Managed IT Services in Qatar, GCC | Compass IT Solutions',
    description: 'End-to-end managed IT support, AMC, hardware supply, and network solutions for businesses in Qatar and the GCC.',
    url: '/services/it-services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Managed IT Services',
      description: 'End-to-end managed IT support, Annual Maintenance Contracts (AMC), hardware and software supply, onsite and remote IT support, and network solutions for businesses in Qatar and the GCC.',
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Managed IT Services',
      url: 'https://compass-its.com/services/it-services',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'IT Services', item: 'https://compass-its.com/services/it-services' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a managed IT service?',
          acceptedAnswer: { '@type': 'Answer', text: 'A managed IT service means outsourcing your IT operations to a dedicated provider like Compass IT Solutions who monitors, manages, and supports your technology infrastructure for a fixed monthly fee — eliminating the need for a full in-house IT team.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer on-site IT support in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, Compass IT Solutions provides both on-site and remote IT support across Qatar and the GCC, with rapid response times. Simply submit a request and our team will get back to you without delay.' },
        },
        {
          '@type': 'Question',
          name: 'What is an IT Annual Maintenance Contract (AMC)?',
          acceptedAnswer: { '@type': 'Answer', text: 'An IT AMC is a service agreement where Compass IT Solutions provides scheduled maintenance, proactive monitoring, and priority support for your IT infrastructure throughout the year under one fixed annual agreement.' },
        },
      ],
    },
  ],
}

export default function ITServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ITServicesPageClient />
    </>
  )
}
