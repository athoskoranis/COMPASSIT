import type { Metadata } from 'next'
import WebDevelopmentPageClient from './client'

export const metadata: Metadata = {
  title: 'Web Development Services in Qatar, GCC',
  description: 'Custom website design, web application development, ecommerce solutions, and WordPress development for businesses across Qatar and the GCC.',
  alternates: { canonical: '/services/web-development' },
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
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
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
        { '@type': 'ListItem', position: 2, name: 'Web Development', item: 'https://compass-its.com/services/web-development' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to build a business website in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'A standard business website takes 4–8 weeks from initial scoping to launch. More complex projects with custom features or e-commerce functionality may take 8–16 weeks. Compass IT Solutions provides a clear timeline at the start of every project.' },
        },
        {
          '@type': 'Question',
          name: 'Do you build mobile-friendly websites?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, all websites built by Compass IT Solutions are mobile-first and fully responsive, working seamlessly across all devices and screen sizes including smartphones, tablets, and desktops.' },
        },
        {
          '@type': 'Question',
          name: 'Can Compass IT Solutions take over and maintain an existing website?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, Compass IT Solutions offers website maintenance, support, and improvement services for existing websites regardless of the original developer or platform used.' },
        },
      ],
    },
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
