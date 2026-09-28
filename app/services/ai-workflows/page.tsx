import type { Metadata } from 'next'
import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'
import AIWorkflowsPageClient from './client'

export const metadata: Metadata = {
  title: { absolute: "AI Workflows — Automate the manual middle · Compass ITS" },
  description: "AI agent deployment for business workflows across Qatar. Triage, drafting, reconciliation, and reporting — automated. Humans stay in the loop where it matters.",
  alternates: {
    canonical: '/services/ai-workflows',
    languages: { en: '/services/ai-workflows', ar: '/ar/services/ai-workflows', 'x-default': '/services/ai-workflows' },
  },
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
      provider: { '@id': 'https://compass-its.com/#organization' },
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
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'AI Workflow Automation', item: 'https://compass-its.com/services/ai-workflows' },
      ],
    },
    ...faqNodes(serviceData['ai-workflows'].en.faq),
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
