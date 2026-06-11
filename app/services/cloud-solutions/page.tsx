import type { Metadata } from 'next'
import CloudSolutionsPageClient from './client'

export const metadata: Metadata = {
  title: 'Cloud Consulting Company in Qatar, GCC',
  description: 'End-to-end cloud computing services in Qatar — cloud migration, infrastructure management, security, modernization, and managed cloud services across the GCC.',
  alternates: { canonical: '/services/cloud-solutions' },
  openGraph: {
    title: 'Cloud Consulting Company in Qatar, GCC | Compass IT Solutions',
    description: 'End-to-end cloud computing services in Qatar — cloud migration, infrastructure management, security, and modernization.',
    url: '/services/cloud-solutions',
  },
}

export default function CloudSolutionsPage() {
  return <CloudSolutionsPageClient />
}
