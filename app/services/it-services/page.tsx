import type { Metadata } from 'next'
import ITServicesPageClient from './client'

export const metadata: Metadata = {
  title: 'Managed IT Services in Qatar, GCC',
  description: 'End-to-end managed IT support, AMC, hardware supply, and network solutions for businesses in Qatar and the GCC.',
  alternates: { canonical: '/services/it-services' },
  openGraph: {
    title: 'Managed IT Services in Qatar, GCC | Compass IT Solutions',
    description: 'End-to-end managed IT support, AMC, hardware supply, and network solutions for businesses in Qatar and the GCC.',
    url: '/services/it-services',
  },
}

export default function ITServicesPage() {
  return <ITServicesPageClient />
}
