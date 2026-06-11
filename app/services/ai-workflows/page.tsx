import type { Metadata } from 'next'
import AIWorkflowsPageClient from './client'

export const metadata: Metadata = {
  title: 'AI Workflow Automation Services in Qatar, GCC',
  description: 'AI development and consulting services in Qatar — machine learning, AI chatbots, process automation, and data annotation for businesses across the GCC.',
  alternates: { canonical: '/services/ai-workflows' },
  openGraph: {
    title: 'AI Workflow Automation Services in Qatar, GCC | Compass IT Solutions',
    description: 'AI development and consulting services in Qatar — machine learning, AI chatbots, process automation, and data annotation.',
    url: '/services/ai-workflows',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Workflow Automation',
      description: 'AI development and consulting services in Qatar including AI workflow automation, machine learning, AI chatbots, process automation, data annotation, and AI integration for businesses across the GCC.',
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'AI Workflow Automation',
      url: 'https://compass-its.com/services/ai-workflows',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'AI Workflow Automation', item: 'https://compass-its.com/services/ai-workflows' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AI workflow automation?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI workflow automation uses artificial intelligence to handle repetitive business processes — such as invoice processing, lead qualification, WhatsApp and lead bots, and document handling — reducing manual work and improving efficiency for businesses in Qatar and the GCC.' },
        },
        {
          '@type': 'Question',
          name: 'Can AI automation work for small businesses in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, AI automation solutions are scalable and can be tailored for businesses of any size. Compass IT Solutions works with SMEs across Qatar to implement cost-effective automation that delivers measurable ROI.' },
        },
        {
          '@type': 'Question',
          name: 'What business processes can be automated with AI in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Common automation use cases for Gulf businesses include WhatsApp and lead bots, invoice and quote processing, document classification, customer support automation, reporting, and data entry — all implementable for businesses across Qatar, Saudi Arabia, and the UAE.' },
        },
      ],
    },
  ],
}

export default function AIWorkflowsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AIWorkflowsPageClient />
    </>
  )
}
