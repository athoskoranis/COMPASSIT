import type { Metadata } from 'next'
import BlogPostClient from './client'

export const metadata: Metadata = {
  title: 'AI Workflow Automation for GCC Businesses | Compass ITS',
  description: 'How AI workflow automation is helping Qatar and GCC businesses cut manual work, and what to evaluate before adopting it.',
  alternates: { canonical: '/blog/ai-workflow-automation-gcc-businesses' },
  openGraph: {
    title: 'AI Workflow Automation for GCC Businesses | Compass ITS',
    description: 'How AI workflow automation is helping Qatar and GCC businesses cut manual work, and what to evaluate before adopting it.',
    url: '/blog/ai-workflow-automation-gcc-businesses',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How AI Workflow Automation Is Changing the Way GCC Businesses Operate',
      description: 'How AI workflow automation is helping Qatar and GCC businesses cut manual work, and what to evaluate before adopting it.',
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
      datePublished: '2026-06-01',
      dateModified: '2026-06-17',
      url: 'https://compass-its.com/blog/ai-workflow-automation-gcc-businesses',
      inLanguage: 'en',
      keywords: ['AI workflow automation', 'AI consulting Qatar', 'intelligent automation GCC', 'AI agents business GCC'],
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
          name: 'AI Workflow Automation for GCC Businesses',
          item: 'https://compass-its.com/blog/ai-workflow-automation-gcc-businesses',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AI workflow automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI workflow automation uses AI to handle repetitive, rules-based, or data-heavy tasks — routing customer requests, extracting data from documents, generating draft responses, and flagging anomalies — without building a custom AI model from scratch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which workflows should GCC businesses automate first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Good first workflows are repetitive enough to quantify the time cost, well-defined enough that correct output is easy to check, and currently creating a bottleneck. Customer support triage, invoice processing, and lead qualification are common strong starting points.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you measure whether AI automation is working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Establish a baseline before automating: time per task instance, error rate, and volume handled per month. Track the same metrics after automation. This surfaces ROI clearly and also catches early if an automated process starts drifting in quality.',
          },
        },
      ],
    },
  ],
}

export default function BlogPostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClient />
    </>
  )
}
