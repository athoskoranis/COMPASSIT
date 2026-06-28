import type { Metadata } from 'next'
import DigitalMarketingPageClient from './client'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Qatar, GCC | Compass IT Solutions',
  description: 'Top digital marketing agency in Qatar. SEO, Google Ads, social media marketing, content marketing, and analytics for businesses in Doha and across the GCC.',
  alternates: { canonical: '/services/digital-marketing' },
  openGraph: {
    title: 'Digital Marketing Agency in Qatar, GCC | Compass IT Solutions',
    description: 'Top digital marketing agency in Qatar. SEO, Google Ads, social media marketing, content marketing, and analytics for businesses in Doha and across the GCC.',
    url: '/services/digital-marketing',
  },
  keywords: ['digital marketing Qatar', 'digital marketing agency Doha', 'SEO Qatar', 'Google Ads Qatar', 'social media marketing Qatar', 'content marketing GCC', 'digital marketing services Qatar'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Digital Marketing Services in Qatar',
      description: 'Full-service digital marketing agency in Qatar offering SEO, Google Ads, social media marketing, content marketing, email automation, and analytics for businesses in Doha and across the GCC.',
      provider: {
        '@type': 'Organization',
        name: 'Compass IT Solutions',
        url: 'https://compass-its.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Doha', addressRegion: 'West Bay', addressCountry: 'QA' },
      },
      areaServed: [
        { '@type': 'City', name: 'Doha' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Digital Marketing',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing Qatar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing Qatar' } },
        ],
      },
      url: 'https://compass-its.com/services/digital-marketing',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://compass-its.com/services/digital-marketing' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What digital marketing services does Compass IT Solutions offer in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Compass IT Solutions provides a full suite of digital marketing services in Qatar including SEO, Google Ads (SEM), social media marketing on LinkedIn and Instagram, content marketing, email automation, B2B communication strategy, and analytics and attribution — all managed under one integrated strategy from our Doha base.' },
        },
        {
          '@type': 'Question',
          name: 'How long does SEO take to show results in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'SEO in Qatar typically shows meaningful movement in 3–6 months depending on competition, current site health, and keyword targets. We establish a baseline audit in month one, begin technical and content improvements in month two, and report progress weekly so you can track rankings and organic traffic as they build.' },
        },
        {
          '@type': 'Question',
          name: 'Do you run Google Ads campaigns in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Compass IT Solutions manages Google Ads and Bing Ads campaigns for businesses in Qatar and across the GCC. We handle keyword research, ad copy, bid strategy, landing page alignment, and monthly optimisation — reporting on what actually moved the number, not just impressions and clicks.' },
        },
        {
          '@type': 'Question',
          name: 'How much does digital marketing cost in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Digital marketing costs in Qatar vary by channel mix, competition level, and scope. Compass IT Solutions offers both project-based and retained engagement models. We recommend starting with a defined scope — typically a digital audit plus a 90-day programme — before committing to a longer retainer, so you can see results before scaling.' },
        },
        {
          '@type': 'Question',
          name: 'Do you work with B2B businesses in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Compass IT Solutions has experience with B2B digital marketing across professional services, technology, and industrial sectors in Qatar and the GCC. LinkedIn campaigns, account-based marketing, lead nurturing sequences, and sales enablement content are all in scope.' },
        },
        {
          '@type': 'Question',
          name: 'Can you handle Arabic and English digital marketing in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Compass IT Solutions delivers digital marketing campaigns in both English and Arabic, covering bilingual SEO, Arabic ad copy, and localised content for the Qatar and GCC market. Bilingual strategy is particularly important for businesses targeting both expatriate and local Qatari audiences.' },
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
