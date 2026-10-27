import type { Metadata } from 'next'
import DubaiDigitalPostClient from './client'

export const metadata: Metadata = {
  title: 'Dubai Digital Transformation Guide: Key Trends for 2026',
  description: 'A practical Dubai digital transformation guide for 2026: what digital transformation is, where to start with automation, and what Qatar and GCC firms can apply.',
  alternates: { canonical: '/blog/dubai-digital-transformation-guide-key-trends-2026' },
  openGraph: {
    title: 'Dubai Digital Transformation Guide: Key Trends for 2026 | Compass ITS',
    description: 'A practical Dubai digital transformation guide for 2026: what digital transformation is, where to start with automation, and what Qatar and GCC firms can apply.',
    url: '/blog/dubai-digital-transformation-guide-key-trends-2026',
    images: ['/blog/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Dubai Digital Transformation Guide: Key Trends for 2026',
      description: 'A practical Dubai digital transformation guide for 2026: what digital transformation is, where to start with automation, and what Qatar and GCC firms can apply.',
      author: { '@id': 'https://compass-its.com/#founder' },
      publisher: { '@id': 'https://compass-its.com/#organization' },
      datePublished: '2026-10-27',
      dateModified: '2026-10-27',
      url: 'https://compass-its.com/blog/dubai-digital-transformation-guide-key-trends-2026',
      mainEntityOfPage: 'https://compass-its.com/blog/dubai-digital-transformation-guide-key-trends-2026',
      image: 'https://compass-its.com/images/blog/dubai-digital-transformation-guide-key-trends-2026-1.jpg',
      inLanguage: 'en',
      keywords: ['Dubai digital transformation guide', 'what is digital transformation', 'digital business', 'automation digitalization', 'digital assist'],
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
          name: 'Dubai Digital Transformation Guide: Key Trends for 2026',
          item: 'https://compass-its.com/blog/dubai-digital-transformation-guide-key-trends-2026',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is digital transformation for a Gulf business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is the work of changing how a business operates by building technology into its processes, data and customer experience, not just buying new software. A digital business can answer questions from live data, serves customers through online channels and has removed manual steps that slow its teams down.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between automation and digitalization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Digitalization turns paper and manual records into structured digital data. Automation uses that data to run repeatable steps without someone doing them by hand. Digitalization usually has to come first, because a process cannot be automated while its inputs live in inboxes and printed forms.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a digital assist tool and where does it help?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A digital assist tool is software, often AI-based, that helps staff complete a task: drafting a reply, summarising a document, finding an answer in internal files or routing a request. It works best on bounded tasks where a person reviews the result before it is used.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can Qatar businesses learn from Dubai digital transformation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dubai shows the value of clear priorities, digital customer services and steady execution. Qatar businesses can copy the approach of choosing specific processes, measuring results and building on sound data governance, while making sure every project meets Qatar data protection requirements and the NIA framework.',
          },
        },
      ],
    },
  ],
}

export default function DubaiDigitalBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DubaiDigitalPostClient />
    </>
  )
}
