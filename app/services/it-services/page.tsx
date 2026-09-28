import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import ITServicesPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "IT Services — The IT team behind your IT team · Compass ITS" },
  description: "Managed IT services for Qatar-based organisations. 24/7 on-call, 99.9% uptime SLA, onsite and remote coverage. Starts with a 30-day diagnostic.",
  alternates: {
    canonical: '/services/it-services',
    languages: { en: '/services/it-services', ar: '/ar/services/it-services', 'x-default': '/services/it-services' },
  },
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
      provider: { '@id': 'https://compass-its.com/#organization' },
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
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'IT Services', item: 'https://compass-its.com/services/it-services' },
      ],
    },
    ...faqNodes(serviceData['it-services'].en.faq),
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
