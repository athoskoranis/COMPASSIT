import type { Metadata } from 'next'
import CybersecurityPageClient from './client'

export const metadata: Metadata = {
  title: 'Top Cyber Security Service Provider in Qatar, GCC',
  description: 'Full-scale cybersecurity consulting in Qatar — risk assessment, VAPT, ISO compliance, and security implementations for businesses across the GCC.',
  alternates: { canonical: '/services/cybersecurity' },
  openGraph: {
    title: 'Top Cyber Security Service Provider in Qatar, GCC | Compass IT Solutions',
    description: 'Full-scale cybersecurity consulting in Qatar — risk assessment, VAPT, ISO compliance, and security implementations.',
    url: '/services/cybersecurity',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Cybersecurity Services',
      description: 'Full-scale cybersecurity consulting in Qatar including risk assessment, vulnerability assessment and penetration testing (VAPT), ISO compliance, security implementations and trainings, and business continuity planning.',
      provider: { '@type': 'Organization', name: 'Compass IT Solutions', url: 'https://compass-its.com' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Cybersecurity',
      url: 'https://compass-its.com/services/cybersecurity',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Cybersecurity', item: 'https://compass-its.com/services/cybersecurity' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What cybersecurity services does Compass IT Solutions offer?',
          acceptedAnswer: { '@type': 'Answer', text: 'Compass IT Solutions provides a wide range of cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT), Risk Assessment, Security Assessment, Security Implementations and Training, Data Privacy and Security, ISO Compliance, and Business Continuity Planning.' },
        },
        {
          '@type': 'Question',
          name: 'Why should businesses in Qatar choose Compass IT Solutions for cybersecurity?',
          acceptedAnswer: { '@type': 'Answer', text: 'Compass IT Solutions combines certified cybersecurity professionals (CISSP, OSCP, CEH), advanced tools such as SIEM and SOAR, and risk-based security frameworks to help organisations across Qatar and the GCC build strong and scalable security infrastructures.' },
        },
        {
          '@type': 'Question',
          name: 'What is VAPT and why is it important for businesses in Qatar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Vulnerability Assessment and Penetration Testing (VAPT) identifies security weaknesses in systems, networks, and applications. It helps organisations detect vulnerabilities before hackers exploit them and is essential for any business operating in Qatar and the GCC.' },
        },
      ],
    },
  ],
}

export default function CybersecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CybersecurityPageClient />
    </>
  )
}
