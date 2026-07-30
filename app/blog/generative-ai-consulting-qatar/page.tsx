import type { Metadata } from 'next'
import GenAIPostClient from './client'

export const metadata: Metadata = {
  title: 'Generative AI Consulting in Qatar',
  description: 'What generative AI consulting should deliver for Qatar businesses in 2026: real use cases, data governance, and avoiding expensive dead ends.',
  alternates: { canonical: '/blog/generative-ai-consulting-qatar' },
  openGraph: {
    title: 'Generative AI Consulting in Qatar | Compass ITS',
    description: 'What generative AI consulting should deliver for Qatar businesses in 2026: real use cases, data governance, and avoiding expensive dead ends.',
    url: '/blog/generative-ai-consulting-qatar',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Generative AI Consulting in Qatar: Turning the Hype Into Something Useful',
      description: 'What generative AI consulting should deliver for Qatar businesses in 2026: real use cases, data governance, and avoiding expensive dead ends.',
      author: {
        '@type': 'Organization',
        name: 'Compass IT Solutions',
        url: 'https://compass-its.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Compass IT Solutions',
        logo: { '@type': 'ImageObject', url: 'https://compass-its.com/brand/compass-its-horizontal-dark.svg' },
      },
      datePublished: '2026-07-06',
      dateModified: '2026-07-06',
      url: 'https://compass-its.com/blog/generative-ai-consulting-qatar',
      inLanguage: 'en',
      keywords: ['generative AI consulting Qatar', 'AI consulting company Qatar', 'custom AI solutions Doha', 'enterprise AI adoption GCC'],
      articleSection: 'AI & Managed IT',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://compass-its.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Generative AI Consulting in Qatar: Turning the Hype Into Something Useful',
          item: 'https://compass-its.com/blog/generative-ai-consulting-qatar',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What should generative AI consulting cover for a Qatar business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The work should start with your processes, not a product. A useful engagement identifies where staff spend time on language-heavy tasks (drafting, summarising, searching documents, answering repetitive questions) and covers the unglamorous parts: how the model connects to your existing data, access controls, measurement, review steps, and data governance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which generative AI use cases deliver results first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Knowledge retrieval (staff asking questions against internal documents), drafting and summarising (first-version reports and emails a person refines), customer support (generated first-draft responses an agent reviews), and code assistance for technical teams. All share a human in the loop and a bounded, measurable task.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do Qatar businesses handle data governance with generative AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The workable answer is an architecture that keeps your data under your control: private deployments, models that don\'t retain your inputs, and clear rules about what categories of information are allowed near the system. Sending sensitive data to a public model that trains on inputs risks breaching Qatar\'s data protection law and the NIA framework.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should a business start a generative AI project in Qatar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with a specific problem, a baseline measurement, and a small pilot you can actually evaluate. Scope it to one team and one task — it can be running in weeks and judged on hard numbers. A company-wide programme tends to stall because nobody can say whether it worked.',
          },
        },
      ],
    },
  ],
}

export default function GenAIBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GenAIPostClient />
    </>
  )
}
