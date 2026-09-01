import type { Metadata } from 'next'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ContactCTA from '@/components/sections/ContactCTA'

// Copy is verbatim from CONTENT.md "Custom Solutions Page"; title and
// description verbatim from SEO.md.
//
// Unlike the other eight service pages, this one holds its own copy instead of
// reading lib/serviceTranslations.ts. That file is typed Record<Lang, ...>, so
// adding an entry would require an Arabic block, and there is no Arabic for
// this route — putting the English text in the `ar` slot would be a lie in the
// data. The section components take plain props, so composing them directly
// gives the same page without inventing a translation. This is the pattern
// /about, /how-we-work and /services already use.
export const metadata: Metadata = {
  title: { absolute: 'Custom Solutions — Web Platforms & Tools · Compass ITS' },
  description:
    'Bespoke web platforms, internal tools, and data analytics products for organisations in Qatar. Built, tested, documented, and handed over with full runbooks.',
  alternates: { canonical: '/services/custom-solutions' },
  openGraph: { url: '/services/custom-solutions' },
}

const process = [
  {
    title: 'Problem definition',
    description: 'What the tool has to do, who uses it, and what it replaces.',
  },
  {
    title: 'Success measures',
    description:
      'Agreed before the first line is written, so "done" is not a matter of opinion.',
  },
  {
    title: 'Data model',
    description: 'Entities, relationships, and where the source of truth lives.',
  },
  {
    title: 'Workflow and interface',
    description:
      'Screens mapped to the job, reviewed with the people who will use them.',
  },
  {
    title: 'Development',
    description: 'Built in sprints with a working version at the end of each.',
  },
  {
    title: 'Integrations',
    description:
      'Connections to the systems you already run, with the failure cases handled.',
  },
  {
    title: 'Documentation and runbooks',
    description: 'How it works, how to operate it, what to do when it breaks.',
  },
  {
    title: 'Training and support',
    description:
      'Your team walked through it, then a 30-day window while it settles.',
  },
]

const whatWeBuild = [
  { title: 'Internal tools', description: 'The systems your team uses to do the work, built around how the work actually happens.' },
  { title: 'Client portals', description: 'A place for your customers to see their own data, without an email thread.' },
  { title: 'Booking and scheduling', description: 'Availability, reservations, and the rules that govern them.' },
  { title: 'Data dashboards', description: 'The numbers you run on, in one place, refreshed without anyone exporting a spreadsheet.' },
  { title: 'System integrations', description: 'Two systems that were never designed to talk to each other, made to.' },
  { title: 'Workflow automation', description: 'The steps that happen the same way every time, handled without a person in the loop.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Custom Solutions',
      description:
        'Bespoke web platforms, internal tools, and data analytics products. Built, tested, documented, and handed over with full runbooks.',
      provider: { '@id': 'https://compass-its.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      serviceType: 'Custom Software Development',
      url: 'https://compass-its.com/services/custom-solutions',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Custom Solutions',
          item: 'https://compass-its.com/services/custom-solutions',
        },
      ],
    },
  ],
}

export default function CustomSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <ServiceHero
          eyebrow="CUSTOM SOLUTIONS · QATAR · GCC"
          title="Custom Solutions"
          subtitle="For the part nobody sells off the shelf. Some problems do not have a product — when the workflow is yours alone, or the systems that need to talk to each other were never designed to, the answer is something built."
          primaryCta="Start with a scoping call"
        />

        <ServiceSubServices
          eyebrow="WHAT WE BUILD"
          heading="What we build"
          intro="Web platforms, internal tools, and data products — handed over documented, so they outlast the engagement."
          items={whatWeBuild}
        />

        <ServiceSubServices
          eyebrow="HOW WE WORK"
          heading="Scope, design, build, hand over"
          items={process}
        />

        <ServiceWhyUs
          eyebrow="WHY COMPASS ITS"
          heading="What You Get at Handover"
          intro="If it only runs while we are in the room, it is not finished. Every build is handed over with the documentation to run it without us."
          points={[
            'Documented handover — how it works, how to operate it, what to do when it breaks',
            'Full runbooks for the people who will keep it running',
            '30-day support window after launch, while it settles',
            'Project or retained engagement — start with a defined scope before committing to anything longer',
            'Built on the same stack as our web work: Next.js, React, TypeScript, Node, Postgres',
            'Integrations over REST and GraphQL, deployed to Vercel or AWS',
          ]}
        />

        <ContactCTA />
      </main>
    </>
  )
}
