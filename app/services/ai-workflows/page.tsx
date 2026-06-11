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

export default function AIWorkflowsPage() {
  return <AIWorkflowsPageClient />
}
