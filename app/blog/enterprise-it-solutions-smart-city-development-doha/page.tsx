import type { Metadata } from 'next'
import SmartCityPostClient from './client'

export const metadata: Metadata = {
  title: 'Enterprise IT Solutions for Smarter City Development in Doha',
  description: 'How enterprise IT solutions support smart city projects in Doha: network, data integration, security, and alignment with Qatar National Vision 2030.',
  alternates: { canonical: '/blog/enterprise-it-solutions-smart-city-development-doha' },
  openGraph: {
    title: 'Enterprise IT Solutions for Smarter City Development in Doha | Compass ITS',
    description: 'How enterprise IT solutions support smart city projects in Doha: network, data integration, security, and alignment with Qatar National Vision 2030.',
    url: '/blog/enterprise-it-solutions-smart-city-development-doha',
    images: ['/blog/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Enterprise IT Solutions for Smarter City Development in Doha',
      description: 'How enterprise IT solutions support smart city projects in Doha: network, data integration, security, and alignment with Qatar National Vision 2030.',
      author: { '@id': 'https://compass-its.com/#founder' },
      publisher: { '@id': 'https://compass-its.com/#organization' },
      datePublished: '2026-10-20',
      dateModified: '2026-10-20',
      url: 'https://compass-its.com/blog/enterprise-it-solutions-smart-city-development-doha',
      mainEntityOfPage: 'https://compass-its.com/blog/enterprise-it-solutions-smart-city-development-doha',
      image: 'https://compass-its.com/images/blog/enterprise-it-solutions-smart-city-development-doha-1.jpg',
      inLanguage: 'en',
      keywords: ['Enterprise IT Solutions', 'smart city solutions Qatar', 'smart city project Doha', 'Qatar National Vision 2030', 'smart infrastructure Qatar'],
      articleSection: 'IT Services',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://compass-its.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Enterprise IT Solutions for Smarter City Development in Doha',
          item: 'https://compass-its.com/blog/enterprise-it-solutions-smart-city-development-doha',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What role do enterprise IT solutions play in a smart city project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'They provide the foundation everything else depends on: reliable networks, shared data platforms, identity and access control, monitoring, and security. Sensors and dashboards only deliver value when this layer is dependable and designed as one system rather than a collection of separate purchases.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does smart infrastructure fail to deliver in many projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usually because systems are procured one at a time by different teams and never integrated. Data stays locked in separate platforms, nobody owns the whole picture, and security is added late. Agreeing standards, data ownership, and operating responsibilities up front prevents most of these problems.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Qatar National Vision 2030 relate to smart city development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Qatar National Vision 2030 sets the long-term direction for human, social, economic, and environmental development. Smart city solutions support that direction by making services more efficient, resource use more visible, and operations easier to measure. Individual projects should be able to say which of those goals they serve.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where should a company start on a smart city related IT project in Doha?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with an honest inventory of existing networks, systems, and data, then pick one bounded use case with a measurable outcome. Build it on foundations that can be reused, with security and data ownership agreed from the beginning, and expand once the first result is proven.',
          },
        },
      ],
    },
  ],
}

export default function SmartCityBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SmartCityPostClient />
    </>
  )
}
