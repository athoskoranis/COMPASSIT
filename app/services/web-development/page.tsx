import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import WebDevelopmentPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "Website Development — Sites that keep earning · Compass ITS" },
  description: "End-to-end website development for organisations in Qatar. Lighthouse 95+, Core Web Vitals green at launch, 30-day post-launch support. Next.js and WordPress.",
  alternates: {
    canonical: '/services/web-development',
    languages: { en: '/services/web-development', ar: '/ar/services/web-development', 'x-default': '/services/web-development' },
  },
  openGraph: {
    title: 'Web Development Services in Qatar, GCC | Compass IT Solutions',
    description: 'Custom website design, web application development, ecommerce solutions, and WordPress development for businesses across Qatar and the GCC.',
    url: '/services/web-development',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Web Development Services',
      description: 'Custom website design, web application development, ecommerce solutions, WordPress development, PSD to HTML conversion, and website testing and QA for businesses across Qatar and the GCC.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Web Development',
      url: 'https://compass-its.com/services/web-development',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://compass-its.com/services/web-development' },
      ],
    },
    ...faqNodes(serviceData['web-development'].en.faq),
  ],
}

export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WebDevelopmentPageClient />
    </>
  )
}
