'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_MEETING = '/images/blog/blog5-ai-meeting-team.jpg'
const IMG_LAPTOP = '/images/blog/blog5-ai-laptop-draft.jpg'

const toc = [
  { label: 'What generative AI consulting should actually cover', id: 'what-it-covers' },
  { label: 'The use cases that pay off first', id: 'use-cases' },
  { label: 'The data governance question you can\'t skip', id: 'data-governance' },
  { label: 'Why 2026 is the year of "proof, not promise"', id: 'proof-not-promise' },
]

const faqs = [
  {
    q: 'What should generative AI consulting cover for a Qatar business?',
    a: "The work should start with your processes, not a product. A useful engagement identifies where staff spend time on language-heavy tasks and covers the unglamorous parts: how the model connects to your existing data, access controls, measurement, review steps, and data governance.",
  },
  {
    q: 'Which generative AI use cases deliver results first?',
    a: "Knowledge retrieval (staff asking questions against internal documents), drafting and summarising (first-version reports and emails a person refines), customer support (generated first-draft responses an agent reviews), and code assistance for technical teams. All share a human in the loop and a bounded, measurable task.",
  },
  {
    q: 'How do Qatar businesses handle data governance with generative AI?',
    a: "The workable answer is an architecture that keeps your data under your control: private deployments, models that don't retain your inputs, and clear rules about what categories of information are allowed near the system. Sending sensitive data to a public model that trains on inputs risks breaching Qatar's data protection law and the NIA framework.",
  },
  {
    q: 'How should a business start a generative AI project in Qatar?',
    a: "Start with a specific problem, a baseline measurement, and a small pilot you can actually evaluate. Scope it to one team and one task — it can be running in weeks and judged on hard numbers. A company-wide programme tends to stall because nobody can say whether it worked.",
  },
]

export default function GenAIPostClient() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="pt-[54px] relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
              <Link href="/blog" className="font-jetbrains text-xs text-paper/40 hover:text-signal transition-colors tracking-eyebrow uppercase">
                Blog
              </Link>
              <span className="font-jetbrains text-xs text-paper/20">/</span>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">AI & Managed IT</span>
            </nav>

            <EyebrowLabel className="mb-6 block">AI & MANAGED IT</EyebrowLabel>

            <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
              Generative AI Consulting in Qatar: Turning the Hype Into Something Useful
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">July 2026</span>
              <span className="font-jetbrains text-xs text-paper/20">·</span>
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">6 min read</span>
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
              Qatar is not short on AI ambition. The country launched its own large language model in 2024, stood up a
              national AI company at the end of 2025, and government bodies have been rolling out generative AI tools
              internally with reported adoption running well past half of eligible staff. The national direction is
              clear. What&apos;s less clear, for most private businesses, is how to turn that momentum into something
              that actually helps their operations. That gap is what generative AI consulting Qatar is meant to close.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              The honest problem isn&apos;t capability. The tools are good. The problem is that a lot of generative AI
              spending goes into projects that demo well and deliver little. Good consulting is mostly about avoiding
              that.
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
              id="what-it-covers"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              What Generative AI Consulting Should Actually Cover
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              If a consultant&apos;s first move is to recommend a flagship AI platform, be careful. The work should
              start with your processes, not a product. A useful engagement looks at where your staff spend time on
              language-heavy tasks — drafting, summarising, searching documents, answering repetitive questions — and
              identifies which of those a generative model could genuinely take on.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              From there it covers the unglamorous parts that decide whether a project survives contact with reality:
              how the model connects to your existing data, who&apos;s allowed to use it and for what, how you measure
              whether it&apos;s working, and what happens to the output before anyone relies on it. A consultant who
              only talks about the model and skips the plumbing is selling you a demo.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_MEETING}
                  alt="Team in a meeting room reviewing AI project plans on a screen"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                Useful AI consulting starts with your processes — identifying where generative models genuinely earn their place.
              </figcaption>
            </figure>

            {/* ── Section 2 ── */}
            <h2
              id="use-cases"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              The Use Cases That Pay Off First
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              The early wins are consistent across organisations. Knowledge retrieval is a strong one: letting staff
              ask questions in plain language against your own documents and policies, instead of hunting through
              folders. Drafting and summarising is another, where the model produces a first version of a report,
              email, or proposal that a person then refines. Customer support benefits from generated first-draft
              responses that an agent reviews. For technical teams, code assistance speeds up routine development.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              What these share is a human in the loop and a bounded task. The public-sector adoption reported in Qatar
              followed exactly this shape, with thousands of users completing routine tasks faster and freeing up large
              amounts of working time. That&apos;s the model to copy. Narrow tasks, measured results, a person
              checking the output.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_LAPTOP}
                  alt="Professional reviewing an AI-generated draft document on a laptop"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                The winning pattern: a person refines the AI&apos;s first draft rather than treating it as a final answer.
              </figcaption>
            </figure>

            {/* ── Section 3 ── */}
            <h2
              id="data-governance"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              The Data Governance Question You Can&apos;t Skip
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              This is where generative AI projects in this region succeed or quietly fail. The moment a model touches
              your business data, you have to answer where that data goes. Sending sensitive customer or financial
              information to a public model that trains on inputs is a real risk, and one that can put you on the wrong
              side of Qatar&apos;s data protection law and the NIA framework.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              The workable answer is usually an architecture that keeps your data under your control: private
              deployments, models that don&apos;t retain your inputs, and clear rules about what categories of
              information are allowed near the system at all. This is exactly the territory where AI and security work
              overlap, which is why generative AI consulting that ignores data governance is doing half the job. We
              treat it as part of the same engagement, not a separate afterthought.
            </p>

            {/* ── Section 4 ── */}
            <h2
              id="proof-not-promise"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              Why 2026 Is the Year of &ldquo;Proof, Not Promise&rdquo;
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              The mood around enterprise AI has shifted. If the previous couple of years were about talking up what AI
              might do, the question now is simpler and harder: is it working. That&apos;s a healthy change. It means
              the right way to start a generative AI project is with a specific problem, a baseline measurement, and a
              small pilot you can actually evaluate, rather than a broad transformation programme nobody can grade.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              For a business in Qatar, the supporting conditions are strong: national investment, local infrastructure,
              and a growing pool of expertise. The differentiator now is execution — choosing the right first use case
              and building it on solid data governance.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              There&apos;s also a people side that gets overlooked. The teams that get real value from generative AI
              are the ones whose staff understand what the tool is good at and where it lies. A model will produce a
              confident, well-written answer that is simply wrong, and a team that treats its output as gospel will
              eventually get burned. Part of any worthwhile rollout is teaching people to use the output as a starting
              draft to check, not a final answer to trust. That habit is cheap to build early and expensive to retrofit
              after a bad mistake.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              The other quiet success factor is starting small enough to actually finish. A pilot scoped to one team
              and one task can be running in weeks and judged on hard numbers. A company-wide programme announced with
              fanfare tends to stall, because nobody can say whether it worked. Pick the smaller thing, prove it, then
              expand from a position of evidence.
            </p>

            {/* Callout block */}
            <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
              <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
                &ldquo;A lot of generative AI spending goes into projects that demo well and deliver little. Good
                consulting is mostly about avoiding that.&rdquo;
              </p>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
                / ai workflows practice · compass-its
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
