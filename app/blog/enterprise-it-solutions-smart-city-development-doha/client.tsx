'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_CITY = '/images/blog/enterprise-it-solutions-smart-city-development-doha-1.jpg'
const IMG_NETWORK = '/images/blog/enterprise-it-solutions-smart-city-development-doha-2.jpg'

const toc = [
  { label: 'What a smart city project means in practice', id: 'in-practice' },
  { label: 'The network and infrastructure foundation', id: 'foundation' },
  { label: 'Connecting data across systems', id: 'data-integration' },
  { label: 'Security and governance from day one', id: 'security-governance' },
  { label: 'Aligning with Qatar National Vision 2030', id: 'vision-2030' },
]

const faqs = [
  {
    q: 'What role do enterprise IT solutions play in a smart city project?',
    a: 'They provide the foundation everything else depends on: reliable networks, shared data platforms, identity and access control, monitoring, and security. Sensors and dashboards only deliver value when this layer is dependable and designed as one system rather than a collection of separate purchases.',
  },
  {
    q: 'Why does smart infrastructure fail to deliver in many projects?',
    a: 'Usually because systems are procured one at a time by different teams and never integrated. Data stays locked in separate platforms, nobody owns the whole picture, and security is added late. Agreeing standards, data ownership, and operating responsibilities up front prevents most of these problems.',
  },
  {
    q: 'How does Qatar National Vision 2030 relate to smart city development?',
    a: 'Qatar National Vision 2030 sets the long-term direction for human, social, economic, and environmental development. Smart city solutions support that direction by making services more efficient, resource use more visible, and operations easier to measure. Individual projects should be able to say which of those goals they serve.',
  },
  {
    q: 'Where should a company start on a smart city related IT project in Doha?',
    a: 'Start with an honest inventory of existing networks, systems, and data, then pick one bounded use case with a measurable outcome. Build it on foundations that can be reused, with security and data ownership agreed from the beginning, and expand once the first result is proven.',
  },
]

export default function SmartCityPostClient() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="pt-[54px] relative z-[1] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link href="/blog" className="font-jetbrains text-xs text-paper/50 hover:text-signal transition-colors tracking-eyebrow uppercase">
              Blog
            </Link>
            <span className="font-jetbrains text-xs text-paper/20">/</span>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">IT Services</span>
          </nav>

          <EyebrowLabel className="mb-6 block">IT SERVICES</EyebrowLabel>

          <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
            Enterprise IT Solutions for Smarter City Development in Doha
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">October 2026</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">6 min read</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">By Adam Sahli</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <article className="bg-paper relative z-[1]">
        <div className="max-w-[740px] mx-auto px-6 lg:px-8 py-16 lg:py-24">

          {/* Lead paragraphs */}
          <p className="font-barlow text-body-l text-ink leading-[34px] mb-6">
            Qatar National Vision 2030 set out to turn Qatar into an advanced society capable of sustaining its own
            development. Almost every large urban project in Doha now sits under that umbrella, and technology is the
            thread running through all of it. A smart city project sounds like something only government bodies
            undertake, but the IT decisions inside it land on developers, operators, contractors, and service
            providers too. That is where enterprise IT solutions come in.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The honest problem is rarely the sensors or the dashboards. It is that systems get bought one at a time, by
            different teams, and never talk to each other. Good smart city solutions are mostly about preventing that.
          </p>

          {/* Table of contents */}
          <div className="mb-12 p-6 bg-mist rounded-lg bracketed bracketed-light">
            <p className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase mb-4">In this article</p>
            <ol className="space-y-3">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex gap-4 font-barlow text-body text-ink/70 hover:text-signal transition-colors leading-snug"
                  >
                    <span className="font-jetbrains text-xs text-signal/50 mt-[4px] shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Section 1 ── */}
          <h2
            id="in-practice"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What a Smart City Project Means in Practice
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Strip away the branding and a smart city is a set of physical services that produce data and respond to it.
            Traffic, utilities, building management, public safety, waste, and transport all generate information that
            can make the city run better, provided someone can collect it, trust it, and act on it.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            For an enterprise, that translates into very ordinary IT work. Networks have to reach new districts and
            buildings. Platforms have to store and process the data. Staff need secure access, and someone has to keep
            it all running. The word &ldquo;smart&rdquo; describes the outcome. The work itself is infrastructure,
            integration, and operations done properly.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_CITY}
                alt="Doha city skyline with modern towers representing smart city development"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Behind every smart city service sits ordinary, well-run IT infrastructure.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="foundation"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            The Network and Infrastructure Foundation
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Everything starts with connectivity. Smart infrastructure is only as dependable as the network carrying its
            data, and in a climate like Qatar&apos;s, equipment placed outdoors or in plant rooms faces conditions that
            office hardware never sees. Designing for heat, power quality, and physical access is part of the job, not
            an afterthought.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Redundancy matters as much as speed. A building management system or a traffic controller that loses its
            connection is not a minor inconvenience. Good design plans for failure: alternative paths, sensible
            segmentation between systems, and monitoring that tells the operations team something is wrong before a
            resident or tenant does. Our guide to{' '}
            <Link href="/blog/how-to-build-network-infrastructure-qatar" className="text-signal hover:underline underline-offset-4">
              building network infrastructure in Qatar
            </Link>{' '}
            covers the fundamentals in more detail.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_NETWORK}
                alt="Network equipment in a data room supporting connected city systems"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Dependable connectivity and sensible segmentation come before any smart application.
            </figcaption>
          </figure>

          {/* ── Section 3 ── */}
          <h2
            id="data-integration"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Connecting Data Across Systems
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            This is where most smart city solutions either pay off or stall. Each vendor ships its own platform, its own
            data format, and its own dashboard. Left alone, you end up with ten screens and no single view of how a
            district is actually performing.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The fix is unglamorous. Agree on data standards before procurement, not after. Decide who owns each data set
            and who is allowed to use it. Put a shared platform in the middle so that new systems plug into something
            that already exists, rather than each one demanding a custom connection. Cloud infrastructure often plays
            a part here, and the questions around where data is hosted deserve early answers. Our notes on{' '}
            <Link href="/blog/cloud-migration-services-qatar" className="text-signal hover:underline underline-offset-4">
              cloud migration in Qatar
            </Link>{' '}
            explain how to approach them.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Once data is connected, analysis becomes worthwhile. Patterns in energy use, equipment faults, or movement
            through a facility become visible, and teams can plan maintenance rather than react to breakdowns. None of
            that is possible while information sits in separate silos.
          </p>

          {/* ── Section 4 ── */}
          <h2
            id="security-governance"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Security and Governance From Day One
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Connecting physical systems to networks widens the attack surface. A building controller, a camera, or a
            sensor gateway is a computer, and it needs to be treated like one: inventoried, patched, and restricted to
            what it genuinely needs to reach. Security added after launch is always more expensive and less effective
            than security designed in.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Governance matters just as much. Projects that touch personal or operational data in Qatar need to respect
            national data protection requirements and, where relevant, the NIA framework. That means clear rules on
            who can see what, how long data is kept, and what happens when something goes wrong. Our overview of{' '}
            <Link href="/blog/how-cyber-security-reduces-business-risks" className="text-signal hover:underline underline-offset-4">
              how cyber security reduces business risk
            </Link>{' '}
            is a useful companion to this part of the work.
          </p>

          {/* ── Section 5 ── */}
          <h2
            id="vision-2030"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Aligning With Qatar National Vision 2030
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Qatar National Vision 2030 rests on four pillars: human, social, economic, and environmental development.
            A useful way to judge any smart city project is to ask which of those it serves, and how you would know.
            Better building efficiency speaks to the environmental pillar. Reliable digital services for residents and
            businesses support the social and economic ones. Training local teams to run the systems supports the
            human one.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            That last point is easy to overlook. A system that only its installer can operate is a dependency, not an
            asset. Good enterprise IT solutions include documentation, handover, and capable people on the client side,
            so the investment keeps working long after the project team has moved on.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            For a company working in this space, the practical advice is to start small and build on reusable
            foundations. Take stock of what you already have, choose one use case with a number you can measure, and
            deliver it on a network, data platform, and security model that the next project can share. Expansion then
            comes from evidence, not from a promise on a slide.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;The word smart describes the outcome. The work itself is infrastructure, integration, and operations
              done properly.&rdquo;
            </p>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
              / enterprise it practice · compass-its
            </span>
          </div>

          {/* FAQ */}
          <div className="border-t border-ink/10 pt-12 mb-12">
            <h3 className="font-archivo font-medium text-ink text-[20px] tracking-[-0.02em] mb-8">
              Common questions
            </h3>
            <div className="space-y-8">
              {faqs.map(({ q, a }) => (
                <div key={q}>
                  <h4 className="font-archivo font-medium text-ink text-[17px] mb-3">{q}</h4>
                  <p className="font-barlow text-body text-ink/65 leading-[28px]">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related services */}
          <div className="p-6 bg-mist rounded-lg">
            <p className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase mb-4">Related services</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/it-services"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                IT Services: the team behind your IT team
              </Link>
              <Link
                href="/services/ai-workflows"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                AI Workflows: map your first automation
              </Link>
            </div>
          </div>

        </div>
      </article>

      <RelatedReading posts={relatedPosts('enterprise-it-solutions-smart-city-development-doha')} />
      <ContactCTA />
    </main>
  )
}
