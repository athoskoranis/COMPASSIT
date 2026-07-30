'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_FLOWCHART = '/images/blog/blog2-ai-agent-flowchart.jpg'
const IMG_CUSTOMER_SERVICE = '/images/blog/blog2-ai-customer-service.jpg'

const toc = [
  { label: 'What an AI agent actually is, compared to a chatbot', id: 'what-it-is' },
  { label: 'Where AI agents are working right now', id: 'where-working' },
  { label: 'The adoption gap nobody puts on the slide', id: 'adoption-gap' },
  { label: 'What this means for businesses in Qatar and the wider GCC', id: 'gcc-context' },
  { label: 'A sensible way to start', id: 'how-to-start' },
]

const faqs = [
  {
    q: 'What is the difference between an AI agent and a chatbot?',
    a: 'A chatbot waits for input and gives you one response. An AI agent is given a goal and a set of tools, then works through the steps to reach that goal autonomously — reading requests, checking records, applying policies, taking actions, and reporting back. Each step depends on the result of the previous one.',
  },
  {
    q: 'Which tasks are AI agents actually handling in production in 2026?',
    a: 'The deployments that hold up target high-volume, well-defined tasks: customer service resolution, document and invoice processing, internal IT support, inventory checks, and first-draft report generation. They handle the repetitive 60–70% of a workflow and escalate the rest to a person.',
  },
  {
    q: 'What governance do GCC businesses need before deploying an AI agent?',
    a: "An agent that can act needs clear limits on what it's allowed to do, an audit trail of what it did, and a human checkpoint on anything sensitive. Data residency and privacy also matter: if an agent touches customer data, you need to confirm where that data goes and whether it satisfies local NIA and data protection requirements.",
  },
  {
    q: 'How should a GCC business start with AI agents?',
    a: "Pick one workflow that is repetitive, well-documented, and currently eating staff time. Give the agent a narrow scope and a clear escalation path. Run it alongside the existing manual process for a few weeks and compare. If it holds up, widen it. Scope tightly and measure honestly.",
  },
]

export default function AIAgentsPostClient() {
  return (
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
            AI Agents for Business: What They Do, and What GCC Companies Should Expect
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">July 2026</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">5 min read</span>
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
            Most businesses in the GCC have now used generative AI in some form, usually a chatbot that answers a
            question or drafts a paragraph. AI agents are a different thing, and the gap matters. An agent doesn&apos;t
            just respond. It carries out a multi-step task on your behalf, deciding what to do next based on the
            result of the last step. That shift — from answering to acting — is what the term &ldquo;AI agents for
            business GCC&rdquo; actually points at, and it&apos;s where the budget conversations are heading in 2026.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The hype around this is loud, so it&apos;s worth being clear about what holds up in practice and what
            doesn&apos;t.
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
            id="what-it-is"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What an AI Agent Actually Is, Compared to a Chatbot
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            A chatbot waits for input and gives you one response. An AI agent is given a goal and a set of tools,
            then works through the steps to reach that goal. Picture the difference between asking &ldquo;what&apos;s
            our refund policy&rdquo; and telling a system &ldquo;handle this refund request end to end.&rdquo; The
            second one has to read the request, check the order against your records, apply the policy, issue the
            refund through the right system, and write back to the customer. Each step depends on the one before it.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Done well, that means an agent can own a whole workflow rather than a single reply. Done badly, it means
            an agent confidently takes three wrong steps before anyone notices. The technology is real. The judgement
            about where to point it is what separates a useful deployment from an expensive one.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_FLOWCHART}
                alt="Diagram showing an AI agent working through connected steps to complete a multi-step task"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Unlike a chatbot, an AI agent works through a sequence of steps — each depending on the result of the last.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="where-working"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Where AI Agents Are Working Right Now
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The deployments that hold up in production share a pattern. They target high-volume, well-defined tasks
            rather than open-ended judgement calls. Customer service resolution is the clearest example, where an
            agent handles common requests start to finish and escalates the rest. Document and invoice processing is
            another, pulling structured data out of messy inputs and validating it. Internal IT support, inventory
            checks, and first-draft report generation round out the list.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            None of these replace a department. They take the repetitive 60 to 70 percent of a workflow and let
            staff spend their time on the cases that genuinely need a person. Reported results in this category are
            consistent: teams claw back meaningful hours each month, and tasks that used to take days finish in
            minutes. That&apos;s the realistic prize, not a fully autonomous business.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_CUSTOMER_SERVICE}
                alt="Customer service agent working alongside an AI assistant interface"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              The best deployments pair an agent with a person — the agent handles volume, the person handles judgement.
            </figcaption>
          </figure>

          {/* ── Section 3 ── */}
          <h2
            id="adoption-gap"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            The Adoption Gap Nobody Puts on the Slide
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Here&apos;s the number that should shape expectations. Surveys through 2025 found that a large majority
            of enterprises said they had &ldquo;adopted&rdquo; AI agents, but only around one in ten were actually
            running them in production. Most of the rest were stuck in pilots. Gartner, meanwhile, expects roughly
            40 percent of enterprise applications to include task-specific AI agents by the end of 2026, up from
            under 5 percent a year earlier.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Read those two facts together and the lesson is plain. The capability is arriving fast, but getting an
            agent from a working demo to something you trust in daily operations is the hard part. The blockers are
            rarely the model itself. They&apos;re data access, permissions, error handling, and knowing what the
            agent should do when it isn&apos;t sure. Any GCC business evaluating agents should budget more time for
            that integration work than for the AI itself.
          </p>

          {/* ── Section 4 ── */}
          <h2
            id="gcc-context"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What This Means for Businesses in Qatar and the Wider GCC
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The regional market is growing quickly. The Middle East and Africa agentic AI market was valued at
            around 213 million US dollars in 2024 and is forecast to climb past 2 billion by 2030. Qatar&apos;s own
            AI maturity has been rising within the GCC, helped by national investment in cloud infrastructure and
            skills. The conditions for adoption are better here than they were even a year ago.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Two things deserve real attention before you deploy. The first is governance: an agent that can act needs
            clear limits on what it&apos;s allowed to do, an audit trail of what it did, and a human checkpoint on
            anything sensitive. The second is data residency and privacy, which matter more in this region than in
            many others. If an agent touches customer data, you need to know where that data goes and whether that
            satisfies local requirements. We cover this in our work on cybersecurity and managed IT, because an
            agent is only as safe as the systems it plugs into.
          </p>

          {/* ── Section 5 ── */}
          <h2
            id="how-to-start"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            A Sensible Way to Start
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Pick one workflow that is repetitive, well-documented, and currently eating staff time. Give the agent a
            narrow scope and a clear escalation path. Run it alongside the existing manual process for a few weeks
            and compare. If it holds up, widen it. If it doesn&apos;t, you&apos;ve spent a small amount to learn
            something specific rather than a large amount to learn that &ldquo;AI is hard.&rdquo;
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The companies getting value from agents in 2026 are not the ones that moved fastest. They&apos;re the
            ones that scoped tightly and measured honestly.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;The companies getting value from agents in 2026 are not the ones that moved fastest. They&apos;re
              the ones that scoped tightly and measured honestly.&rdquo;
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
  )
}
