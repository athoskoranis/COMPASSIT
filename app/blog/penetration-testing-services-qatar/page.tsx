import type { Metadata } from 'next'
import PenTestPostClient from './client'

export const metadata: Metadata = {
  title: 'Penetration Testing Services in Qatar',
  description: 'Why penetration testing matters for Qatar businesses, how it supports NCSA NIA compliance, and what a proper engagement should actually cover.',
  alternates: { canonical: '/blog/penetration-testing-services-qatar' },
  openGraph: {
    title: 'Penetration Testing Services in Qatar | Compass ITS',
    description: 'Why penetration testing matters for Qatar businesses, how it supports NCSA NIA compliance, and what a proper engagement should actually cover.',
    url: '/blog/penetration-testing-services-qatar',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Penetration Testing in Qatar: What It Is and Why NIA Compliance Increasingly Expects It',
      description: 'Why penetration testing matters for Qatar businesses, how it supports NCSA NIA compliance, and what a proper engagement should actually cover.',
      author: { '@id': 'https://compass-its.com/#organization' },
      publisher: { '@id': 'https://compass-its.com/#organization' },
      datePublished: '2026-07-06',
      dateModified: '2026-07-06',
      url: 'https://compass-its.com/blog/penetration-testing-services-qatar',
      inLanguage: 'en',
      keywords: ['penetration testing services Qatar', 'cybersecurity company Doha', 'NIA compliance Qatar', 'vulnerability assessment GCC', 'NCSA NISCF'],
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
          name: 'Penetration Testing in Qatar: What It Is and Why NIA Compliance Increasingly Expects It',
          item: 'https://compass-its.com/blog/penetration-testing-services-qatar',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between a penetration test and a vulnerability scan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A vulnerability scan is automated — it lists known weaknesses across your systems but stops at "here is a list." A penetration test is an ethical attack carried out by people. Testers try to exploit those weaknesses the way a real attacker would, including chaining several small flaws into one serious breach that no scan would flag.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does penetration testing support NIA compliance in Qatar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Qatar\'s National Information Assurance policy sets out the security controls organisations must implement to protect information assets. Penetration testing proves those controls hold up under attack. The NCSA also accredits penetration testing providers through the NISCF, creating a recognised national standard for who is qualified to carry this work out.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should a proper penetration test engagement include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A thorough engagement covers external testing (internet-facing systems), internal testing (assuming a compromised insider), web and mobile application testing, and social engineering where agreed. The report must be actionable and prioritised by real business risk. A retest after fixes confirms the remediation actually worked.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should businesses in Qatar run penetration tests?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Annual testing is a reasonable baseline, but you should also test after any significant change — a new application, a major infrastructure shift, or a move to the cloud. Those are exactly the moments new gaps appear. Mature organisations pair periodic testing with continuous monitoring and a regular patching routine.',
          },
        },
      ],
    },
  ],
}

export default function PenTestBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PenTestPostClient />
    </>
  )
}
