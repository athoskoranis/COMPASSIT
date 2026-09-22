'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_TEAM = '/images/blog/ai-solutions-qatar-transforming-businesses-1.jpg'
const IMG_LAPTOP = '/images/blog/ai-solutions-qatar-transforming-businesses-2.jpg'

const toc = [
  { label: 'Where AI solutions are already showing up', id: 'where-ai-shows-up' },
  { label: 'Moving from a pilot to something that scales', id: 'pilot-to-scale' },
  { label: 'What actually changes for the business', id: 'what-changes' },
  { label: 'Getting the foundations right before you scale', id: 'foundations' },
]

const faqs = [
  {
    q: 'What are AI solutions in Qatar businesses typically using them for?',
    a: 'Most usage clusters around a handful of tasks: demand forecasting and inventory in retail, document review and fraud flags in banking and insurance, route and delay prediction in logistics, and first-draft writing or data entry across nearly every sector. The pattern is repetitive, data-heavy work with a person still checking the result.',
  },
  {
    q: 'How does a business move from an AI pilot to something that scales?',
    a: 'By building the AI into a workflow people already use, assigning someone to own and check its output, and tracking whether it is still performing weeks after launch, then applying that same pattern to the next process one at a time rather than rolling out several at once.',
  },
  {
    q: 'What are the main risks when scaling AI solutions in Qatar?',
    a: "The two that cause the most damage are AI solutions built on messy or duplicated data, and sensitive data sent to systems without clear access controls, which risks breaching Qatar's data protection law and the NIA framework. Both are addressable if handled before scale, not after.",
  },
  {
    q: 'Do small and mid-sized businesses in Qatar need a data science team to use AI?',
    a: 'No. Most of the value available today comes from connecting an existing AI model to your own data through a scoped project, not from building models from scratch, which is what has made AI solutions practical for businesses without an in-house data science function.',
  },
]

export default function AISolutionsPostClient() {
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
            How AI Solutions in Qatar Are Transforming Businesses?
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">September 2026</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">7 min read</span>
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
            Qatar's businesses are past the stage of asking whether artificial intelligence in business is worth
            exploring. The national push, from the state's own AI models to the volume of local AI hiring, has
            already normalised the technology at a policy level. The live question for most companies now is
            narrower and more practical: which AI solutions actually change how a business runs day to day, and how
            do you move one from a working pilot to something the whole team relies on without the project quietly
            stalling.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The answer is rarely a single big platform. It is usually a handful of specific, well scoped tools
            applied to processes that already cost the business time, then scaled carefully once the first one
            proves itself.
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
            id="where-ai-shows-up"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Where AI Solutions Are Already Showing Up
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Across Doha and the wider GCC, AI solutions have moved out of the pilot deck and into daily operations.
            Retailers use them to forecast demand and manage stock across branches. Banks and insurers use them to
            flag unusual transactions and speed up document heavy processes like claims and onboarding. Logistics
            and trading firms use them to plan routes and flag delays before they cost money. None of this is
            exotic. It is mostly software that reads a pattern in data faster than a person can, and hands a
            recommendation to someone who still makes the call.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            What has changed recently is the entry cost. A few years ago, doing any of this meant hiring a data
            science team and building models from scratch. Now a business can get most of the same result by
            connecting an existing AI model to its own data through a well scoped project. That is why AI
            solutions in Qatar has become a live budget line for mid sized companies, not just a research topic
            for the largest ones.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_TEAM}
                alt="Business team in Doha reviewing an AI analytics dashboard in a meeting"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              AI solutions are already running inside everyday operations, not just innovation labs.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="pilot-to-scale"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Moving From a Pilot to Something That Scales
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Most companies do not fail at building a first AI pilot. They fail at turning it into something that
            runs every week without a consultant in the room. A pilot proves a model can do the task once, on a
            clean, curated dataset. Scaling means it has to keep working when the data is messy, someone updates a
            spreadsheet in a different format, or the volume triples.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Getting from one to the other usually means three things. First, the AI has to sit inside a workflow
            people already use, rather than a separate dashboard nobody opens. Second, someone in the business has
            to own it, checking outputs and adjusting the process. Third, you need a way to measure whether it is
            still doing the job weeks later, not just on launch day. Skip any of the three and a pilot quietly
            stops being used.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            For businesses scaling AI across more than one team or process, the sequencing matters. Prove the first
            use case, put ownership and monitoring around it, then move to the next. A parallel rollout across
            five departments at once is where most of the wasted AI budget in the region actually goes.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_LAPTOP}
                alt="Professional reviewing AI generated business data on a laptop in an office"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Scaling an AI solution means it has to keep working inside a real, messy workflow.
            </figcaption>
          </figure>

          {/* ── Section 3 ── */}
          <h2
            id="what-changes"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What Actually Changes for the Business
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The realistic shift is time, not headcount. Staff who spent hours on repetitive document review, data
            entry, or first draft writing get that time back for the judgment calls a machine cannot make. A
            claims team that used to spend a day per file on data entry can spend that day on the harder cases
            instead. A sales team gets a shortlist instead of a spreadsheet to sort through manually.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            There is also a quieter change in how decisions get made. When forecasts, risk flags, or anomaly
            detection run continuously instead of at the end of a quarter, problems surface while they are still
            small. That is a genuine advantage for businesses competing with regional and international firms
            that already run this way, and it is a large part of why artificial intelligence in business has
            stopped being optional for companies that want to stay competitive on cost and speed.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            None of this happens just by installing a tool. It happens when the output actually reaches someone's
            desk in a form they will use, with enough trust built up that they act on it.
          </p>

          {/* ── Section 4 ── */}
          <h2
            id="foundations"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Getting the Foundations Right Before You Scale
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Before scaling, three things are worth getting right. Data quality comes first: an AI solution built on
            inconsistent or duplicated records will scale the inconsistency along with everything else. Access
            and governance come second: deciding early who can see what, and where the data physically sits,
            saves a much harder retrofit later, especially given the requirements Qatar's data protection law and
            the NIA framework put on sensitive information. Ownership is third: without someone accountable for a
            model's output, accuracy tends to drift and nobody notices until a customer complains.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            None of this is a reason to slow down. It is a reason to sequence the work sensibly: pick one process
            with a clear, measurable baseline, build the AI solution around it with the right data and access
            controls from day one, and only then plan the next one. Businesses in Qatar that treat AI as a series
            of well run small projects tend to end up with more running in production a year later than those that
            launched one large transformation programme.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              "The businesses getting real value from AI in Qatar are not the ones with the biggest budget. They are
              the ones that scaled one working process before starting the next."
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

      <RelatedReading posts={relatedPosts('ai-solutions-qatar-transforming-businesses')} />
      <ContactCTA />
    </main>
  )
}
