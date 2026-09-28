import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import AppDevelopmentPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "App Development — iOS & Android · Compass ITS" },
  description: "Native and cross-platform mobile app development for businesses in Qatar. iOS and Android. Crash-free 99.5%+ before submission. 30-day post-launch support.",
  alternates: {
    canonical: '/services/app-development',
    languages: { en: '/services/app-development', ar: '/ar/services/app-development', 'x-default': '/services/app-development' },
  },
  openGraph: {
    title: 'App Development — iOS & Android · Compass ITS',
    description: 'Native and cross-platform mobile app development for businesses in Qatar. iOS and Android. Crash-free 99.5%+ before submission. 30-day post-launch support.',
    url: '/services/app-development',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development for businesses in Qatar and the GCC. iOS and Android apps built for performance, usability, and long-term maintainability.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Mobile App Development',
      url: 'https://compass-its.com/services/app-development',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'App Development', item: 'https://compass-its.com/services/app-development' },
      ],
    },
    ...faqNodes(serviceData['app-development'].en.faq),
  ],
}

export default function AppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AppDevelopmentPageClient />
    </>
  )
}
