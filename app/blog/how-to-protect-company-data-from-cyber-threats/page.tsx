import type { Metadata } from 'next'
import DataSecurityPostClient from './client'

export const metadata: Metadata = {
  title: 'How to Protect Your Company Data from Cyber Threats',
  description: 'How to protect your company data from cyber threats in Qatar: know your data, control access, encrypt and back up, and prepare a breach response plan.',
  alternates: { canonical: '/blog/how-to-protect-company-data-from-cyber-threats' },
  openGraph: {
    title: 'How to Protect Your Company Data from Cyber Threats | Compass ITS',
    description: 'How to protect your company data from cyber threats in Qatar: know your data, control access, encrypt and back up, and prepare a breach response plan.',
    url: '/blog/how-to-protect-company-data-from-cyber-threats',
    images: ['/blog/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Protect Your Company Data from Cyber Threats?',
      description: 'How to protect your company data from cyber threats in Qatar: know your data, control access, encrypt and back up, and prepare a breach response plan.',
      author: { '@id': 'https://compass-its.com/#founder' },
      publisher: { '@id': 'https://compass-its.com/#organization' },
      datePublished: '2026-09-29',
      dateModified: '2026-09-29',
      url: 'https://compass-its.com/blog/how-to-protect-company-data-from-cyber-threats',
      mainEntityOfPage: 'https://compass-its.com/blog/how-to-protect-company-data-from-cyber-threats',
      image: 'https://compass-its.com/images/blog/how-to-protect-company-data-from-cyber-threats-1.jpg',
      inLanguage: 'en',
      keywords: ['data security', 'protect your data', 'data security solutions', 'company data', 'company data breach'],
      articleSection: 'Cybersecurity',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://compass-its.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Protect Your Company Data from Cyber Threats?',
          item: 'https://compass-its.com/blog/how-to-protect-company-data-from-cyber-threats',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the first step to protect company data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Find out what data you hold and where it lives. Most businesses have customer records, financial files and staff information spread across servers, laptops, cloud tools and email. You cannot protect what you have not listed, so a simple inventory ranked by sensitivity comes before any tool purchase.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which data security solutions matter most for a small or mid-sized business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Multi-factor authentication, least-privilege access, encryption, tested backups, and monitoring that alerts someone who will act on it. These cover the most common ways company data is lost or exposed, and they cost far less than a specialised platform that nobody has time to run.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should we do if we suspect a company data breach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contain it first by isolating affected accounts and devices, then preserve logs and evidence before anything is wiped. Work out what data was involved, and check your obligations under Qatar\'s data protection law and any sector rules that apply. A written response plan agreed in advance makes each of these steps faster.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does data security in Qatar involve legal requirements?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Qatar has a data protection law covering personal data, and the NIA framework sets expectations for many organisations, particularly in regulated and government-linked sectors. The exact obligations depend on your industry and the data you hold, so confirm them with your compliance adviser.',
          },
        },
      ],
    },
  ],
}

export default function DataSecurityBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DataSecurityPostClient />
    </>
  )
}
