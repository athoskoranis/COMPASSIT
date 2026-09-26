import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import DigitalMarketingPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing — Marketing that compounds · Compass ITS" },
  description: "Search, social, and email marketing for organisations in Qatar. Measured weekly, optimised monthly. SEM, SEO, inbound, and B2B communication strategies.",
  alternates: {
    canonical: '/services/digital-marketing',
    languages: { en: '/services/digital-marketing', ar: '/ar/services/digital-marketing', 'x-default': '/services/digital-marketing' },
  },
  openGraph: {
    title: 'Digital Marketing Agency in Qatar, GCC | Compass IT Solutions',
    description: 'Top digital marketing agency in Qatar. SEO, Google Ads, social media marketing, content marketing, and analytics for businesses in Doha and across the GCC.',
    url: '/services/digital-marketing',
  },
  keywords: ['digital marketing Qatar', 'digital marketing agency Doha', 'SEO Qatar', 'Google Ads Qatar', 'social media marketing Qatar', 'content marketing GCC', 'digital marketing services Qatar'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Digital Marketing Services in Qatar',
      description: 'Full-service digital marketing agency in Qatar offering SEO, Google Ads, social media marketing, content marketing, email automation, and analytics for businesses in Doha and across the GCC.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Doha' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Digital Marketing',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing Qatar' } },
        ],
      },
      url: 'https://compass-its.com/services/digital-marketing',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://compass-its.com/services/digital-marketing' },
      ],
    },
    ...faqNodes(serviceData['digital-marketing'].en.faq),
  ],
}

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DigitalMarketingPageClient />
    </>
  )
}
