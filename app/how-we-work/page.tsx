import type { Metadata } from 'next'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import WhyCompass from '@/components/sections/WhyCompass'
import ContactCTA from '@/components/sections/ContactCTA'

// Copy is verbatim from CONTENT.md "How We Work Page (/how-we-work)"; title and
// description verbatim from SEO.md.
//
// SITEMAP.md also lists "Ongoing support" and "Technology stack" for this page.
// CONTENT.md provides no copy for either, and CLAUDE.md forbids inventing it, so
// they are absent rather than filled in. Everything the spec does supply is here.
export const metadata: Metadata = {
  title: { absolute: 'How We Work — Six steps, nothing skipped · Compass ITS' },
  description:
    'Every Compass engagement runs on the same six-step model — Discovery through Reporting. Weekly checkpoints, documented deliverables, and we stay after go-live.',
  alternates: { canonical: '/how-we-work' },
  openGraph: { url: '/how-we-work' },
}

const stats = [
  { value: 'Day 1 — diagnostic', label: 'Kickoff' },
  { value: 'Weekly', label: 'Checkpoints' },
  { value: 'Documented', label: 'Deliverables' },
  { value: 'We stay', label: 'After go-live' },
]

const steps = [
  {
    n: '01',
    name: 'Discovery',
    body: 'We immerse in your environment — goals, challenges, competitive landscape, and digital footprint — to define the right problem.',
  },
  {
    n: '02',
    name: 'Strategy',
    body: 'With objectives clear, we identify the optimal approach: lead generation, infrastructure rollout, or product launches.',
  },
  {
    n: '03',
    name: 'Creativity',
    body: 'Our team shapes the user experience — copywriting, UX/UI, design, and any multimedia requirements.',
  },
  {
    n: '04',
    name: 'Execution',
    body: 'We build, deploy, and test. Every deliverable is optimised for every device and channel before go-live.',
  },
  {
    n: '05',
    name: 'Optimisation',
    body: 'A/B testing, performance monitoring, rework and variations, forecast analysis, and budget optimisation.',
  },
  {
    n: '06',
    name: 'Reporting',
    body: 'Scheduled transparent reports tied to your KPIs — quantitative metrics, conversion rates, and advanced analytics.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HowTo',
      '@id': 'https://compass-its.com/how-we-work#howto',
      name: 'How Compass IT Solutions runs an engagement',
      description:
        'Every Compass engagement runs on the same six-step model — Discovery through Reporting.',
      publisher: { '@id': 'https://compass-its.com/#organization' },
      step: steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.body,
        url: `https://compass-its.com/how-we-work#step-${s.n}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'How We Work', item: 'https://compass-its.com/how-we-work' },
      ],
    },
  ],
}

export default function HowWeWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <section className="pt-[54px] relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
            <EyebrowLabel className="mb-6 block">COMPASS ITS · HOW WE WORK</EyebrowLabel>

            <h1 className="font-archivo font-light text-paper leading-none tracking-[-0.04em] text-[44px] md:text-[60px] lg:text-[72px] max-w-[720px] mb-8">
              Six steps, nothing skipped.
            </h1>

            <p className="font-barlow text-body-l text-paper/60 max-w-[600px] leading-relaxed mb-10">
              The same engagement model on every project — whether it&apos;s a website, an
              infrastructure rollout, or a quarterly marketing programme. Predictable for us,
              predictable for you.
            </p>

            <Button href="/contact" variant="primary">Start with step one</Button>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-20 relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-paper/10">
              {stats.map((stat) => (
                <div key={stat.label} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                  <p className="font-archivo font-light text-paper text-[26px] lg:text-[30px] leading-tight tracking-[-0.02em] mb-3">
                    {stat.value}
                  </p>
                  <p className="font-jetbrains text-xs text-paper/40 uppercase tracking-eyebrow">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six steps */}
        <section className="bg-paper py-20 lg:py-28 relative z-[1]">
          <div className="max-w-content mx-auto px-6 lg:px-20">
            <div className="mb-14">
              <EyebrowLabel className="mb-4 block">THE ENGAGEMENT MODEL</EyebrowLabel>
              <h2 className="font-archivo text-heading-2 font-medium text-ink tracking-[-0.02em]">
                Six steps, nothing skipped.
              </h2>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {steps.map((step) => (
                <li key={step.n} id={`step-${step.n}`}>
                  <p className="font-jetbrains text-xs text-signal tracking-eyebrow mb-4">{step.n}</p>
                  <h3 className="font-archivo font-medium text-ink text-[22px] tracking-[-0.02em] mb-3">
                    {step.name}
                  </h3>
                  <p className="font-barlow text-body text-ink/60 leading-[28px]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <WhyCompass />
        <ContactCTA />
      </main>
    </>
  )
}
