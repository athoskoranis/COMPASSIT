'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_PLANNING = '/images/blog/ai-challenges-and-solutions-qatar-businesses-1.jpg'
const IMG_REVIEW = '/images/blog/ai-challenges-and-solutions-qatar-businesses-2.jpg'

const toc = [
  { label: 'Why AI projects stall before they start', id: 'why-projects-stall' },
  { label: 'Data and governance come first', id: 'data-governance' },
  { label: 'Integration, language and people', id: 'integration-people' },
  { label: 'Choosing an AI platform and a first project', id: 'choosing-platform' },
]

const faqs = [
  {
    q: 'What are the biggest AI challenges for businesses in Qatar?',
    a: "The recurring ones are unclear ownership, scattered or poor quality data, data protection and governance questions, integration with older systems, and staff who are not sure how to use or check AI output. The technology itself is rarely the main obstacle.",
  },
  {
    q: 'How do we choose an AI platform?',
    a: "Ask about fit rather than features. Where is data stored and processed, can access be restricted by role, does it connect to the systems you already run, can you export your work, and does the vendor say plainly what happens to your inputs. Test it with your own Arabic and English documents.",
  },
  {
    q: 'Do companies working with government entities in Qatar face extra AI requirements?',
    a: "They should expect clients to ask detailed questions about data handling, hosting and access control in contracts and audits. Check the official Qatar government portal and the relevant regulator's own publications for current requirements rather than relying on third party summaries.",
  },
  {
    q: 'What is the safest way to start with AI?',
    a: "Pick one team, one task and one measurable outcome, record a baseline, and run a pilot of a few weeks. Keep a person reviewing the output and decide on extending it from the evidence. A small pilot also builds the governance groundwork for later projects.",
  },
]

export default function AIChallengesPostClient() {
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
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">AI & Managed IT</span>
          </nav>

          <EyebrowLabel className="mb-6 block">AI & MANAGED IT</EyebrowLabel>

          <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
            AI Challenges and Solutions for Businesses in Qatar
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
            Ask a business leader in Qatar about AI and the conversation usually starts with ambition and ends with a
            list of obstacles. National strategy points firmly toward digital transformation, and organisations in
            both the public and private sectors feel pressure to show progress. The gap between wanting an AI solution
            and running one that works is where most of the difficulty sits. This article covers the common AI
            challenges we see in Qatar and the GCC, and the practical ways to deal with them.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            None of the problems below are unique to this region, but several take a particular shape here: data
            residency expectations, regulated sectors, a mix of Arabic and English content, and organisations that
            work closely with government entities.
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
            id="why-projects-stall"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Why AI Projects Stall Before They Start
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The most common failure begins before any technology is chosen. A team buys an AI platform because it
            looks impressive in a demonstration, then goes looking for a problem to point it at. Months later the
            platform is running but nobody can say what it has improved. The fix is to reverse the order. Start with
            a process that costs real time or money, measure how it performs today, and only then decide what kind
            of AI solution fits.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            A second cause is unclear ownership. AI work sits between IT, operations and the business unit that will
            use it, and without one named owner it drifts. Someone has to decide what success looks like, approve the
            data the system may touch, and be accountable when the output is wrong. In practice the projects that
            finish are the ones where a single manager treats the result as their own.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_PLANNING}
                alt="Business team planning an AI project around a table"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Successful AI work starts with a real business problem and a named owner, not with a product.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="data-governance"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Data and Governance Come First
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Data is the next obstacle. Most AI tools are only as useful as the information they can reach, and in many
            organisations that information is scattered across file shares, email, older line-of-business systems and
            spreadsheets that one person maintains. Before any model is connected, someone needs to find out what
            exists, which of it is accurate and who is allowed to see it.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Governance matters just as much. Qatar has its own data protection law and national information assurance
            requirements, and businesses that handle customer, health or financial records have to be careful about
            where that data is processed. Sending sensitive material to a public AI service that retains inputs is a
            risk that is easy to take by accident, because staff will paste text into whatever tool is open in their
            browser. A sensible response pairs a clear policy on what may be shared with approved tools that keep data
            under your control. Banning AI outright rarely works, because people find workarounds.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="integration-people"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Integration, Language and People
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Integration is where schedules slip. Older systems may have no modern interface, which means an AI tool
            cannot read from them or write back without custom work. Budget for that plumbing from the start. Language
            is another practical point for the region. Many organisations hold documents in both Arabic and English,
            and a tool that handles one well may handle the other poorly, so test with your own real documents rather
            than vendor samples.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Then there are people. Staff worry about their roles, managers worry about mistakes, and neither group is
            helped by a rollout that arrives as an instruction from above. Training should cover what the tool does
            well, where it gets things wrong, and who reviews the output before it goes to a customer or a regulator.
            Teams that build the habit of checking AI output early avoid the expensive incident later.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_REVIEW}
                alt="Colleagues reviewing AI output on a laptop together"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Trained staff who check AI output before it goes out are the best protection against costly mistakes.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="choosing-platform"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Choosing an AI Platform and a First Project
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            When businesses ask which AI platform to choose, the useful questions are about fit rather than features.
            Where is data stored and processed? Can access be restricted by role? Does it work with the systems you
            already run? Can you export your work if you change supplier? Does the vendor explain what happens to your
            inputs? A platform that answers these plainly is usually safer than one with a longer feature list.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Companies that work with government-linked organisations in Qatar should expect those clients to ask the
            same questions in contracts and audits. For policy and regulatory expectations, rely on the official Qatar
            government portal and the relevant regulator&apos;s own publications rather than summaries from third
            parties, since requirements change and the source documents are what an auditor will read.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Our advice for a first project is modest. Pick one team, one task and one measurable outcome. Run a pilot
            of a few weeks, compare it against the baseline you recorded, and decide with evidence whether to extend
            it. If the pilot fails, you have learned something cheaply. If it succeeds, you have a template for the
            next one, along with the governance groundwork that makes it easier to repeat.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;The gap between wanting an AI solution and running one that works is mostly about data, ownership
              and people, not the model.&rdquo;
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

      <RelatedReading posts={relatedPosts('ai-challenges-and-solutions-qatar-businesses')} />
      <ContactCTA />
    </main>
  )
}
