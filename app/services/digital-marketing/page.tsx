import type { Metadata } from 'next'
import DigitalMarketingPageClient from './client'

export const metadata: Metadata = {
  title: 'Digital Marketing — Compass IT Solutions',
  description: 'Search, social, and email marketing for organisations in Qatar. Measured weekly, optimised monthly. SEM, SEO, inbound, and B2B communication strategies.',
  alternates: { canonical: '/services/digital-marketing' },
  openGraph: {
    title: 'Digital Marketing — Compass IT Solutions',
    description: 'Search, social, and email marketing for organisations in Qatar. Measured weekly, optimised monthly. SEM, SEO, inbound, and B2B communication strategies.',
    url: '/services/digital-marketing',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Digital Marketing',
      description: 'Integrated digital marketing services for organisations in Qatar and the GCC — SEO, SEM, social media, content marketing, email automation, and analytics.',
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Digital Marketing',
      url: 'https://compass-its.com/services/digital-marketing',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Digital Marketing', item: 'https://compass-its.com/services/digital-marketing' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What digital marketing services does Compass IT Solutions offer in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Compass IT Solutions provides SEO, Google Ads (SEM), social media marketing, content marketing, email automation, B2B communication strategy, and analytics and attribution — all managed under a single integrated strategy.' },
        },
        {
          '@type': 'Question',
          name: 'How quickly can digital marketing show results?',
          acceptedAnswer: { '@type': 'Answer', text: 'Paid channels (SEM, paid social) can show results within the first month. SEO and content marketing compound over 3–6 months. We set realistic timelines at the start of every engagement and report weekly so you can see momentum building.' },
        },
        {
          '@type': 'Question',
          name: 'Do you work with B2B businesses in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Compass IT Solutions has experience with B2B digital marketing across professional services, technology, and industrial sectors in Qatar and the GCC. LinkedIn campaigns, account-based marketing, and sales enablement content are all in scope.' },
        },
      ],
    },
  ],
}

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DigitalMarketingPageClient />
    </>
  )
}
