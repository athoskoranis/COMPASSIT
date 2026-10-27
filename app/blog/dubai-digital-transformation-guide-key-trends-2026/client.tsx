'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_1 = '/images/blog/dubai-digital-transformation-guide-key-trends-2026-1.jpg'
const IMG_2 = '/images/blog/dubai-digital-transformation-guide-key-trends-2026-2.jpg'

const toc = [
  { label: 'What digital transformation actually means', id: 'what-is-digital-transformation' },
  { label: 'Automation and digitalization: where to start', id: 'automation-digitalization' },
  { label: 'Digital assist tools and the human in the loop', id: 'digital-assist' },
  { label: 'What Qatar and the GCC can take from Dubai', id: 'gcc-takeaways' },
]

const faqs = [
  {
    q: 'What is digital transformation for a Gulf business?',
    a: "It is the work of changing how a business operates by building technology into its processes, data and customer experience, not just buying new software. A digital business can answer questions from live data, serves customers through online channels and has removed manual steps that slow its teams down.",
  },
  {
    q: 'What is the difference between automation and digitalization?',
    a: "Digitalization turns paper and manual records into structured digital data. Automation uses that data to run repeatable steps without someone doing them by hand. Digitalization usually has to come first, because a process cannot be automated while its inputs live in inboxes and printed forms.",
  },
  {
    q: 'What is a digital assist tool and where does it help?',
    a: "A digital assist tool is software, often AI-based, that helps staff complete a task: drafting a reply, summarising a document, finding an answer in internal files or routing a request. It works best on bounded tasks where a person reviews the result before it is used.",
  },
  {
    q: 'What can Qatar businesses learn from Dubai digital transformation?',
    a: "Dubai shows the value of clear priorities, digital customer services and steady execution. Qatar businesses can copy the approach of choosing specific processes, measuring results and building on sound data governance, while making sure every project meets Qatar data protection requirements and the NIA framework.",
  },
]

export default function DubaiDigitalPostClient() {
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
            Dubai Digital Transformation Guide: Key Trends for 2026
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
            Dubai has spent years presenting itself as a city that runs on digital services, and businesses across the
            Gulf pay attention to what happens there. Companies in Doha and the wider GCC read the headlines about
            smart services and AI adoption and ask a fair question: what does that mean for us? This Dubai digital
            transformation guide answers it in practical terms, with a focus on what a Qatar business can actually
            do in 2026.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The short version is that the trends are less exotic than the marketing suggests. Most of the value comes
            from fixing ordinary processes, connecting data and using new tools with care.
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
            id="what-is-digital-transformation"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What Digital Transformation Actually Means
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            If you are asking what is digital transformation, start by ignoring the software list. It is the work of
            changing how a business operates so that technology sits inside its processes, its data and its customer
            experience. Buying a new system is one step. Transformation is when the way people work, approve, sell and
            report has genuinely changed because of it.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            A digital business tends to share a few traits. Its information lives in connected systems rather than in
            personal inboxes and spreadsheets. Customers can do routine things online without calling anyone. Managers
            can see how the operation is performing without waiting for someone to compile a report. None of this
            requires a flagship budget. It requires choosing which processes matter most and fixing them in order.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_1}
                alt="Business team reviewing a digital transformation roadmap in a meeting room"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Transformation starts with choosing which processes matter most, not with a shopping list of tools.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="automation-digitalization"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Automation and Digitalization: Where to Start
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The two terms get used as if they were the same thing, and the difference matters. Digitalization turns
            paper forms, scanned documents and manual records into structured data. Automation then uses that data to
            run repeatable steps without a person doing them by hand. Automation digitalization projects work in that
            order. You cannot automate an approval that depends on a signed printout and a phone call.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The best first candidates are dull and frequent. Purchase approvals, onboarding paperwork, invoice
            matching, service requests and routine reporting all follow rules, happen often and waste staff time when
            handled manually. Pick one, write down the current steps, measure how long it takes today, and rebuild it
            digitally. That baseline is what lets you say later whether the change worked.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            A word of caution: automating a bad process only produces bad results faster. Before you build anything,
            ask whether each step still needs to exist. Often the most useful outcome of the exercise is removing
            steps, not speeding them up.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_2}
                alt="Professional using a laptop dashboard to monitor automated business workflows"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Digitalize the inputs first, then automate the repeatable steps that depend on them.
            </figcaption>
          </figure>

          {/* ── Section 3 ── */}
          <h2
            id="digital-assist"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Digital Assist Tools and the Human in the Loop
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The most visible trend in 2026 is the spread of the digital assist: software, usually AI-based, that helps
            a member of staff complete a task. It might draft a reply, summarise a long document, find an answer in
            internal files or route a request to the right team. Used well, it removes the slow, repetitive part of
            knowledge work and leaves the judgement to a person.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The pattern that works is narrow and checked. Give the tool one bounded task, keep a person reviewing what
            it produces, and track whether the task now takes less time. The pattern that fails is a broad rollout with
            no owner and no measurement, where staff are told to use AI and nobody can say what changed.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            There is also a people side. Staff need to understand that these tools can produce confident answers that
            are wrong. Teaching teams to treat the output as a first draft to check, rather than a final answer to
            trust, is cheap to do early and expensive to fix after a mistake reaches a customer.
          </p>

          {/* ── Section 4 ── */}
          <h2
            id="gcc-takeaways"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What Qatar and the GCC Can Take From Dubai
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Dubai&apos;s example is useful for its approach more than its specifics. Priorities are stated clearly,
            customer-facing services are built to be used online, and the work is sustained over years rather than
            announced once. A Qatar business can borrow that discipline at its own scale: choose a handful of
            priorities, assign an owner to each and review progress regularly.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Local conditions still shape the work. Any project that touches customer or financial data in Qatar has to
            respect the national data protection law and, for many organisations, the NIA framework. That affects where
            data is stored, which tools are acceptable and who can see what. It is far easier to design these rules
            into a project at the start than to retrofit them after launch, and it is why digital transformation and
            security planning belong in the same conversation.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            For 2026, the practical checklist is short. Pick one process and baseline it. Digitalize its inputs. Automate
            the repeatable steps. Add a digital assist where a person can review the output. Put data governance in
            place before any of it goes live. Then measure, and expand only from evidence. That sequence works in
            Dubai, in Doha and anywhere else in the Gulf.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;You cannot automate an approval that depends on a signed printout and a phone call. Digitalize
              first, then automate.&rdquo;
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

      <RelatedReading posts={relatedPosts('dubai-digital-transformation-guide-key-trends-2026')} />
      <ContactCTA />
    </main>
  )
}
