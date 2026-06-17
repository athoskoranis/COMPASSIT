import type { Metadata } from 'next'
import AppDevelopmentPageClient from './client'

export const metadata: Metadata = {
  title: 'App Development — iOS & Android · Compass ITS',
  description: 'Native and cross-platform mobile app development for businesses in Qatar. iOS and Android. Crash-free 99.5%+ before submission. 30-day post-launch support.',
  alternates: { canonical: '/services/app-development' },
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
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
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
        { '@type': 'ListItem', position: 2, name: 'App Development', item: 'https://compass-its.com/services/app-development' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to build a mobile app in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'A standard mobile application takes 10–16 weeks from discovery to App Store submission. Projects with complex backend integrations or custom hardware features may take longer. Compass IT Solutions provides a detailed timeline at the start of every project.' },
        },
        {
          '@type': 'Question',
          name: 'Do you build for both iOS and Android?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Compass IT Solutions builds native iOS (Swift), native Android (Kotlin), and cross-platform (React Native, Flutter) applications. The right technology choice depends on your budget, timeline, and performance requirements — we advise on this during the discovery phase.' },
        },
        {
          '@type': 'Question',
          name: 'What happens after the app launches?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every project includes a 30-day post-launch support window covering bug fixes, OS compatibility updates, and performance monitoring. Ongoing retained support is also available on a monthly basis.' },
        },
      ],
    },
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
