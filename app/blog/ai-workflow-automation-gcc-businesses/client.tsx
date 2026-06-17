'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_DASHBOARD = '/images/blog/blog1-workflow-dashboard.jpg'
const IMG_WHITEBOARD = '/images/blog/blog1-whiteboard-meeting.jpg'
const IMG_CHART = '/images/blog/blog1-analytics-chart.jpg'

const toc = [
  { label: 'What AI workflow automation actually means in practice', id: 'what-it-means' },
  { label: 'Why momentum is building faster in Qatar', id: 'qatar-momentum' },
  { label: 'Where to start: picking the right first workflow', id: 'where-to-start' },
  { label: 'Measuring whether it is actually working', id: 'measuring' },
  { label: 'What to ask an AI automation partner', id: 'what-to-ask' },
]

const faqs = [
  {
    q: 'What is AI workflow automation?',
    a: 'AI workflow automation uses AI to handle repetitive, rules-based, or data-heavy tasks — routing customer requests, extracting data from documents, generating draft responses, and flagging anomalies — without building a custom AI model from scratch.',
  },
  {
    q: 'Which workflows should GCC businesses automate first?',
    a: 'Good first workflows are repetitive enough to quantify the time cost, well-defined enough that correct output is easy to check, and currently creating a bottleneck. Customer support triage, invoice processing, and lead qualification are common strong starting points.',
  },
  {
    q: 'How do you measure whether AI automation is working?',
    a: 'Establish a baseline before automating: time per task instance, error rate, and volume handled per month. Track the same metrics after automation. This surfaces ROI clearly and also catches early if an automated process starts drifting in quality.',
  },
]

export default function BlogPostClient() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="pt-[54px] relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
              <Link href="/blog" className="font-jetbrains text-xs text-paper/40 hover:text-signal transition-colors tracking-eyebrow uppercase">
                Blog
              </Link>
              <span className="font-jetbrains text-xs text-paper/20">/</span>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">AI & Managed IT</span>
            </nav>

            <EyebrowLabel className="mb-6 block">AI & MANAGED IT</EyebrowLabel>

            <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
              How AI Workflow Automation Is Changing the Way GCC Businesses Operate
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">June 2026</span>
              <span className="font-jetbrains text-xs text-paper/20">·</span>
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">4 min read</span>
              <span className="font-jetbrains text-xs text-paper/20">·</span>
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">Compass ITS</span>
            </div>
          </div>
        </section>

        {/* ── ARTICLE ── */}
        <article className="bg-paper relative z-[1]">
          <div className="max-w-[740px] mx-auto px-6 lg:px-8 py-16 lg:py-24">

            {/* Lead paragraphs */}
            <p className="font-barlow text-body-l text-ink leading-[34px] mb-6">
              Qatar&apos;s businesses are no longer treating AI as an experiment confined to the IT department.
              Recent regional research shows Qatar&apos;s AI maturity climbing within the GCC, with a meaningful share
              of organisations now classified as AI Leaders rather than early-stage adopters. Across the wider Gulf,
              the large majority of organisations are already investing in AI in some form. The conversation has shifted
              from &ldquo;should we look at AI&rdquo; to &ldquo;which workflows should we automate first.&rdquo;
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              For mid-sized and growing businesses, that second question is the more useful one. AI workflow
              automation — using AI to handle repetitive, rules-based, or data-heavy tasks that currently eat up
              staff time — tends to deliver faster, more measurable returns than broader, more ambitious AI initiatives.
            </p>

            {/* Table of contents */}
            <div className="mb-12 p-6 bg-mist rounded-lg" style={{ borderLeft: '3px solid #2BB3E6' }}>
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
              id="what-it-means"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              What AI Workflow Automation Actually Means in Practice
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Strip away the buzzwords and AI workflow automation usually comes down to a few concrete patterns:
              routing and triaging incoming customer requests automatically, extracting and validating data from
              documents and invoices, generating first-draft responses or reports that a human then reviews and
              approves, and flagging anomalies in operational data that would otherwise require someone to spot them
              manually.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              None of this requires building a custom AI model from scratch. Most of it comes down to connecting
              existing large language model capabilities to a business&apos;s existing systems — its CRM, its document
              management, its ERP — through carefully designed automation workflows, and increasingly, AI agents that
              can carry out multi-step tasks instead of just answering a single question.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_DASHBOARD}
                  alt="Dashboard showing an automated workflow pipeline with AI processing steps highlighted"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                An automated workflow pipeline — routing, extraction, and review steps handled without manual intervention.
              </figcaption>
            </figure>

            {/* ── Section 2 ── */}
            <h2
              id="qatar-momentum"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              Why Momentum Is Building Faster in Qatar Specifically
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Qatar&apos;s national digital investment is projected to grow substantially through 2026, reflecting a
              multi-year push to build the infrastructure and talent base AI adoption depends on. That national-level
              investment tends to filter down in practical ways: better cloud infrastructure availability, more local
              expertise, and a growing willingness among decision-makers to back AI projects with real budget instead
              of pilot-stage curiosity.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              Part of this push specifically targets small and medium businesses, through programmes designed to give
              SMEs access to shared data infrastructure and AI tools that would otherwise be out of reach for a
              smaller IT budget. That is relevant for any GCC business wondering whether AI automation is only a
              large-enterprise option. Increasingly, it is not.
            </p>

            {/* ── Section 3 ── */}
            <h2
              id="where-to-start"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              Where to Start: Picking the Right First Workflow
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              The businesses that get the most value from AI automation tend to start narrow. A good first workflow
              has three characteristics: it is repetitive enough that staff time spent on it is easy to quantify, it
              is well-defined enough that &ldquo;correct&rdquo; output is easy to check, and it currently creates a
              bottleneck — a queue of work that builds up faster than people can clear it.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              Customer support triage, invoice and document processing, and lead qualification are common starting
              points precisely because they meet all three criteria. Trying to automate judgment-heavy, ambiguous
              decisions first is usually where AI automation projects struggle — not because the technology cannot do
              it, but because measuring success gets much harder.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_WHITEBOARD}
                  alt="Business meeting with a whiteboard mapping out a workflow before automation"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                Mapping the workflow before automating — specificity at this stage determines how measurable the outcome will be.
              </figcaption>
            </figure>

            {/* ── Section 4 ── */}
            <h2
              id="measuring"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              Measuring Whether It Is Actually Working
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              A common mistake with early AI automation projects is rolling them out without a clear before-and-after
              measurement in place. Before automating a workflow, it is worth establishing a baseline: how long does
              the task currently take per instance, how often does it produce errors that need correcting, and what
              does that cost in staff hours over a month. Without that baseline, demonstrating the value of the
              automation to leadership later gets difficult, even if it is genuinely working well.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              Once a workflow is automated, the same metrics — time per instance, error rate, volume handled — should
              keep being tracked. This also surfaces early if an automated process starts drifting in quality, which
              can happen as the underlying data or business rules change over time.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_CHART}
                  alt="Simple before and after chart showing time saved on a manual task after automation"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                Without a pre-automation baseline, demonstrating ROI later gets harder — even when the automation is genuinely working.
              </figcaption>
            </figure>

            {/* Callout block */}
            <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
              <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
                &ldquo;AI workflow automation is not about replacing teams. It is about removing the repetitive work
                that keeps them from focusing on what actually needs human judgment.&rdquo;
              </p>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
                / engagement model · compass-its
              </span>
            </div>

            {/* ── Section 5 ── */}
            <h2
              id="what-to-ask"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              What to Ask an AI Automation Partner
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Before committing budget, it is worth pressing on a few specifics. How is the system&apos;s output
              checked or reviewed before it reaches a customer or feeds into another process? What happens to the
              business&apos;s data — is it used to train external models, or kept inside a controlled environment?
              And can the workflow be adjusted as the business&apos;s processes change, without a full rebuild each
              time?
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              A partner who can speak concretely about data governance and review steps — not just about what the AI
              can technically do — is generally the safer choice, particularly for businesses in regulated sectors
              like finance or healthcare.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              With AI adoption accelerating across Qatar and the GCC, the businesses moving first on well-scoped
              automation projects are building an operational efficiency advantage that gets harder to close over time.
            </p>

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
                  href="/services/ai-workflows"
                  className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
                >
                  AI Workflows — map your first automation
                </Link>
                <Link
                  href="/services/it-services"
                  className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
                >
                  IT Services — the team behind your IT team
                </Link>
              </div>
            </div>

          </div>
        </article>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
