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

export default function WebDevelopmentPage() {
  return <WebDevelopmentPageClient />
}
