'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_CLOUD = '/images/blog/it-services-trends-qatar-2026-1.jpg'
const IMG_MANAGED = '/images/blog/it-services-trends-qatar-2026-2.jpg'

const toc = [
  { label: 'Cloud becomes the default, not the project', id: 'cloud-default' },
  { label: 'Data protection shapes every buying decision', id: 'data-protection' },
  { label: 'Managed services replace break-fix', id: 'managed-services' },
  { label: 'Security and AI join the core conversation', id: 'security-and-ai' },
  { label: 'What this means for choosing a technology partner', id: 'choosing-partner' },
]

const faqs = [
  {
    q: 'What IT services trends should Qatar businesses expect in 2026?',
    a: 'Cloud as the default for new workloads, closer attention to data protection and data residency, a shift from break-fix support to managed services, and security and AI becoming part of every IT engagement rather than separate products.',
  },
  {
    q: 'Why does data protection matter when choosing a cloud IT services provider in Qatar?',
    a: 'The Qatar data protection law and the NIA framework make storage location, access control and supplier handling of data questions a business has to be able to answer. A provider should explain these in plain terms and show how they apply to your systems.',
  },
  {
    q: 'What do managed services usually include?',
    a: 'Typically continuous monitoring, patching, backup, user support and reporting for a predictable fee. Scope varies between providers, so get the inclusions, response expectations and reporting in writing.',
  },
  {
    q: 'How should a business choose a technology partner in Qatar?',
    a: 'Ask where your data will be stored, who can access it, what happens during an incident, and how the work is reported. Start with a small, defined engagement before committing to a long contract.',
  },
]

export default function ITTrendsPostClient() {
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
            IT Services Trends in Qatar: What to Expect in 2026
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
            Ask a Qatar business owner what they want from an IT services company and the answer has shifted. A few
            years ago it was mostly price and response time. Now the questions are about where data lives, how quickly
            the business can change direction, and whether one provider can talk about cloud, security and AI as a
            single conversation. This article covers the IT services trends in Qatar we expect to matter most
            through 2026, and what they mean for how you choose and manage a provider.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            None of these trends is exotic. They are the ordinary result of national digital ambitions, tighter data
            rules and tools that have matured. The businesses that benefit are usually the ones that plan for them
            early rather than react when a client or regulator asks a difficult question.
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
            id="cloud-default"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Cloud Becomes the Default, Not the Project
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            For a long time, cloud was something a company did once, as a migration with a start and an end. That
            framing is fading. More Qatar organisations now begin from the assumption that new workloads run in the
            cloud unless there is a reason they should not. The cloud IT services they buy reflect that: ongoing cost
            management, architecture reviews and capacity planning, rather than a single cutover weekend.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            The local infrastructure story supports this. Qatar data center capacity has grown, and in-country cloud
            regions from the major providers mean many businesses can keep workloads close to home without giving up
            modern tooling. The practical question is no longer whether to use cloud. It is which workloads belong
            where, and who is accountable for the bill and the configuration after go-live.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_CLOUD}
                alt="IT team reviewing cloud infrastructure plans on a screen in an office"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Cloud is moving from a one-off project to the normal home for new workloads.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="data-protection"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Data Protection Shapes Every Buying Decision
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Data protection has moved from a legal footnote to a line item in procurement. The Qatar data protection
            law and the NIA framework mean that where data is stored, who can access it, and how suppliers handle it
            are questions a business has to be able to answer. Expect clients, regulators and larger partners to ask
            for those answers more often, and to want them in writing.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            For IT services this changes the brief. A provider should be able to explain data classification, access
            control, backup and retention in plain terms, and show how each applies to your systems specifically.
            Residency matters too. Depending on your sector and your contracts, some data may need to stay in the
            country, and a good provider will tell you which, rather than defaulting to whichever region is cheapest.
            Treat a vendor who waves this away as a risk, not a bargain.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="managed-services"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Managed Services Replace Break-Fix
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The break-fix model, where you call someone when something stops working, is a poor fit for a business
            that depends on its systems all day. Managed services reverse it. The provider monitors, patches and
            maintains your environment continuously, and the aim is fewer incidents rather than faster repairs.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            The driver is simple economics. Hiring and keeping an in-house team across networking, cloud, security and
            support is hard for most small and mid-sized companies. A managed arrangement gives access to that range
            of skills at a predictable cost. The caveat is to look closely at what is actually included. Ask for the
            service scope, response expectations and reporting in writing, and check that one party owns the full
            picture instead of responsibility being split between several vendors.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_MANAGED}
                alt="Engineer monitoring managed IT systems on a dashboard"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Managed services aim for fewer incidents through continuous monitoring and maintenance.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="security-and-ai"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Security and AI Join the Core Conversation
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Security used to be sold as a separate product. It is now expected to be part of every IT engagement, from
            how laptops are configured to how cloud accounts are locked down. Businesses are also asking about
            generative AI, often before their data foundations are ready for it.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The two topics connect. An AI tool that reads your documents is only as safe as your permissions and your
            data classification. Providers who can handle both together will serve you better than ones who bolt AI
            onto an unprepared environment. The sensible first steps are modest: tidy up access rights, decide which
            data is off limits for AI tools, and pilot one bounded use case with a person checking the output.
          </p>

          {/* ── Section 5 ── */}
          <h2
            id="choosing-partner"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What This Means for Choosing a Technology Partner
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            A technology partner in 2026 is judged less on how many products they resell and more on how clearly they
            explain trade-offs. When you evaluate an IT services company, a few questions separate the useful from the
            merely busy.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Ask where your data will be stored and who can reach it. Ask what happens during an incident and who you
            call. Ask how the work is reported, and what a typical quarter looks like. Ask which parts of the service
            the provider delivers itself and which it subcontracts. Clear, specific answers are a good sign. Vague
            answers wrapped in jargon usually are not.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            It also helps to start small. A defined first engagement, such as an environment review or the move of a
            single workload, shows you how a provider works before you commit to a long contract. Good providers
            welcome that, because it lets the work speak for itself.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;Clear, specific answers about data, incidents and reporting are a good sign. Vague answers wrapped
              in jargon usually are not.&rdquo;
            </p>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
              / it services practice · compass-its
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

      <RelatedReading posts={relatedPosts('it-services-trends-qatar-2026')} />
      <ContactCTA />
    </main>
  )
}
