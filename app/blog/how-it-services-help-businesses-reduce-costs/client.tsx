'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_TICKETING = '/images/blog/how-it-services-help-businesses-reduce-costs-1.jpg'
const IMG_ASSETS = '/images/blog/how-it-services-help-businesses-reduce-costs-2.jpg'

const toc = [
  { label: 'Where the hidden IT costs actually come from', id: 'hidden-costs' },
  { label: 'How a ticketing system cuts wasted time', id: 'ticketing-system' },
  { label: 'IT asset management: knowing what you own', id: 'asset-management' },
  { label: 'Why IT consulting often costs less than going it alone', id: 'consulting-value' },
]

const faqs = [
  {
    q: 'How do IT services actually reduce business costs?',
    a: "IT services reduce costs mainly by replacing unplanned, reactive spending with predictable, managed spending. A ticketing system stops the same issue being fixed three times by three different people, asset management stops you paying for licenses and hardware nobody uses, and structured IT service management catches small problems before they become expensive outages.",
  },
  {
    q: 'What does an IT ticketing system have to do with cost savings?',
    a: "A ticketing system turns scattered requests sent over calls, chats, and hallway conversations into a single queue with a record. That record shows which issues repeat, how long they take to resolve, and which ones are quietly costing the business hours of staff time every week, which is the information needed to fix the underlying cause instead of paying to patch it repeatedly.",
  },
  {
    q: 'Why does IT asset management matter for cost control?',
    a: "Most businesses without an asset register are paying for more software and hardware than they use. Duplicate licenses, unused subscriptions, and ageing devices that should have been retired all sit unnoticed on the bill. A proper inventory tied to renewal dates and usage gives a clear list of what to cut, what to renew, and what to replace before it fails.",
  },
  {
    q: 'Is outsourced IT consulting cheaper than an in-house team?',
    a: "For most small and mid-sized businesses in Qatar, yes, because it means paying for a team with broad coverage rather than one or two salaries, benefits, training, and the risk of losing all IT knowledge when someone resigns. Outsourced IT consulting also scales up or down with the business, so there is no fixed headcount to carry through a slow quarter.",
  },
]

export default function ITCostsPostClient() {
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
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">IT Services</span>
          </nav>

          <EyebrowLabel className="mb-6 block">IT SERVICES</EyebrowLabel>

          <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
            How IT Services Help Businesses Reduce Costs?
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">August 2026</span>
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
            Every business running on computers is already paying for IT, whether that shows up as a clean line item
            or not. The real question is whether the spending is visible and under control, or scattered across
            overtime spent fixing the same problem twice, software renewals nobody remembers agreeing to, and
            hardware sitting unused in a cupboard. IT services exist to turn the second kind of spending into the
            first kind, and a ticketing system, an asset register, and proper IT service management are cost-control
            tools before they are technical ones.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            None of this needs exotic technology. It needs knowing what is broken, what the business owns, and who
            is responsible for fixing it before a small annoyance turns into an expensive outage.
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
            id="hidden-costs"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Where the Hidden IT Costs Actually Come From
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Most IT cost in a growing business never appears on an invoice. It shows up as an employee losing forty
            minutes to a printer that will not connect, a laptop that freezes twice a week and slowly wears down the
            person using it, or a software renewal nobody remembers signing up for and nobody uses anymore. None of
            that gets booked as an IT expense, but it is one all the same, paid in lost hours and frustration instead
            of a line item. Add it up across a month, and the real IT budget is considerably larger than what shows
            up in the finance system.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            The businesses that get this under control tend to share one habit: they measure it. Once you can see
            how often the same fault recurs, how long a machine has been struggling on, or how many licenses are
            sitting idle, the cost becomes obvious, and so does the fix. That visibility is what a ticketing system
            and an asset register are actually for.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_TICKETING}
                alt="IT support technician reviewing a support ticket queue on a monitor"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              A visible queue of tickets turns guesswork about recurring IT problems into a list you can actually fix.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="ticketing-system"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            How a Ticketing System Cuts Wasted Time
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Without a ticketing system, IT requests travel through phone calls, chat messages, and hallway
            conversations, and most of them leave no record at all. Nobody can say how many times the same printer
            issue came up this month, or how long staff actually waited for a fix, because nothing was ever written
            down. That absence of a record is expensive on its own, since the same problem gets solved from scratch
            every time instead of being recognised and closed off for good.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            A proper ticketing system fixes that by turning every request into a tracked, timestamped record. Once
            requests are logged in one place, patterns become obvious: which issue keeps coming back, which
            department is losing the most hours, and which fixes are quick wins versus which point to a deeper
            problem worth spending on. That is the difference between IT that reacts to noise and IT that is
            actually managed, and it is usually the fastest cost saving a business can make.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="asset-management"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            IT Asset Management: Knowing What You Own
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Ask most businesses how many software licenses they are paying for, or how old their laptops actually
            are, and the answer is a guess. That gap is where money quietly leaks out: duplicate subscriptions
            bought by two different people, tools nobody uses anymore but nobody cancelled, and machines that should
            have been retired two years ago still running critical work on borrowed time.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            IT asset management closes that gap with a straightforward inventory: what the business owns, what it
            costs, when it needs renewing, and when it needs replacing. With that list in hand, cutting unused
            subscriptions and consolidating overlapping tools is a simple decision rather than a guessing game, and
            hardware replacement becomes a planned cost instead of an emergency purchase after something fails
            during a busy week. It also gives whoever manages the budget a single source of truth instead of relying
            on memory or scattered spreadsheets.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_ASSETS}
                alt="IT staff member auditing hardware and licenses in an office server room"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              A clear inventory of hardware and licenses turns replacement and renewal into planned costs, not emergencies.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="consulting-value"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Why IT Consulting Often Costs Less Than Going It Alone
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Hiring a full in-house IT department is a fixed cost that has to be carried every month, busy or quiet.
            One or two salaries also means one or two points of failure: when that person is on leave, or leaves the
            company entirely, the business is left without the knowledge that kept its systems running. IT
            consulting spreads that risk across a team with wider coverage, and the cost scales with what the
            business actually needs rather than sitting fixed on the books.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Good IT consulting also brings a service management structure that most in-house setups never get around
            to building: agreed response times, a documented process for handling requests, and regular review of
            where the budget is actually going. That structure is what turns IT spending from a string of surprise
            bills into a predictable line item that can be planned for.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            For a business in Qatar weighing whether to build an internal team or bring in outside support, the
            calculation usually comes down to volume and predictability. A business with steady, well-understood
            needs may do fine with a small internal team. A business that is growing, changing its tools, or dealing
            with unpredictable request volume tends to get more consistent cost control from a consulting
            relationship that can flex with it.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;Most IT cost in a growing business never appears on an invoice. It is paid in lost hours,
              and the fix starts with simply measuring where those hours go.&rdquo;
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

      <ContactCTA />
    </main>
  )
}
