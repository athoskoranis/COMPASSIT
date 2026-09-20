'use client'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import UsDashboardPreview from '@/components/sections/UsDashboardPreview'
import UsOnePoint from '@/components/sections/UsOnePoint'
import UsSecondAccount from '@/components/sections/UsSecondAccount'
import UsTiers from '@/components/sections/UsTiers'
import UsPlatforms from '@/components/sections/UsPlatforms'
import UsContact from '@/components/sections/UsContact'
import SectionImage from '@/components/ui/SectionImage'

/**
 * The US practice page.
 *
 * Copy is the US Practice section of CONTENT.md, verbatim. It lives here rather
 * than in lib/translations.ts because this page has no Arabic counterpart and
 * never will — the practice is English only, which is also why the language
 * switcher is suppressed under /us.
 *
 * No CalloutBlock and no ContactCTA: both read their copy from the Gulf
 * translations. The callout is inline below and the contact block is UsContact.
 *
 * Every CTA points at #contact on this page. Sending a Portland reader to
 * /contact would land them on a page headed by a Doha address, which undoes the
 * work of giving /us its own footer.
 */

const tiers = [
  {
    name: 'Tier 1 — Standard',
    forWhom: 'One location, the standard measure set.',
    setup: '$1,000 to $1,500',
    monthly: '$99 to $149 / mo',
    scopeLabel: 'Includes',
    scope: [
      'Sales by day and daypart',
      'Revenue by hour',
      'Item and category mix',
      'Payment type breakdown',
      'Employee sales',
      'Order type split',
    ],
  },
  {
    name: 'Tier 2 — Custom Metrics',
    forWhom: 'One location, with the logic your business actually runs on.',
    setup: '$2,000 to $3,500',
    monthly: '$199 to $299 / mo',
    scopeLabel: 'Everything in Tier 1, plus',
    featured: true,
    scope: [
      'Labor cost as a percentage of sales by daypart',
      'Prime cost',
      'Item-level margin against your entered costs',
      'Tip pool and distribution logic',
      'Custom key performance indicator (KPI) definitions',
      'Scheduled email or WhatsApp reports',
    ],
  },
  {
    name: 'Tier 3 — Multi-Location',
    forWhom: 'Two to five sites, read as one business.',
    setup: '$3,500 to $6,000',
    monthly: '$150 to $250 / site / mo',
    scopeLabel: 'Everything in Tier 2, plus',
    scope: [
      'Cross-location roll-up',
      'Site-versus-site benchmarking',
      'Group-level profit and loss view',
      'Per-site user permissions',
      'Consolidated exports',
    ],
  },
]

const addOns = [
  { item: 'Additional data source — accounting, scheduling, delivery apps', price: '$400 to $900 setup' },
  { item: 'Additional location beyond five', price: '$500 setup · $125 / mo' },
  { item: 'Partner-gated POS onboarding', price: '$500 to $1,500 setup' },
  { item: 'New report or measure after launch', price: '$250 to $600' },
  { item: 'Development and consulting', price: '$120 to $150 / hour' },
  { item: 'Annual prepay', price: 'Two months free' },
]

const platformGroups = [
  {
    label: 'Connect directly',
    note: 'Inside the standard tiers',
    platforms: [
      'Square', 'Clover', 'Lightspeed Retail', 'Lightspeed Restaurant',
      'Shopify POS', 'Revel Systems', 'Epos Now', 'Loyverse',
      'Zettle by PayPal', 'SumUp', 'Erply', 'Odoo POS',
    ],
  },
  {
    label: 'Vendor approval required',
    note: 'Onboarding fee · two to six weeks',
    platforms: [
      'Toast', 'SpotOn', 'TouchBistro', 'PAR Brink', 'Oracle Simphony',
      'Oracle MICROS', 'NCR Voyix and Aloha', 'Lavu', 'GoTab',
      'Heartland Restaurant',
    ],
  },
]

export default function UsPageClient() {
  return (
    <main className="us-page">
      <ServiceHero
        eyebrow="POINT-OF-SALE ANALYTICS · PORTLAND"
        title="The numbers your POS won't show you."
        subtitle="Every point-of-sale (POS) system ships with a dashboard, and they all tell you what you sold. Very few tell you what it cost you to sell it."
        primaryCta="See a live dashboard"
        secondaryCta="Check your POS"
        ctaHref="#contact"
      />

      {/* The slot under the hero. Held a four-cell stat row, then the 1%
          arithmetic; both argued value before a reader had a reason to want it.
          This states the reason: when you are not there, you get one account of
          the week, and this is the other one. */}
      <UsSecondAccount
        eyebrow="WHEN YOU ARE NOT IN THE ROOM"
        heading="A second account of the week."
        intro="Most of what you know about a shift you missed comes from the people who worked it. That is usually right, and it is always partial — a closing manager knows their own Friday, not the Tuesday lunch they were off for. This is the other account, assembled from what the tills, the schedule and the invoices already recorded."
        heardLabel="What you hear"
        recordedLabel="What the week recorded"
        footnote="Neither account is wrong, and you want both. Only one of them saw every shift — and where something moved, it says what moved, what it cost, and what to do next."
      />

      <ServiceSubServices
        eyebrow="THE GAP"
        heading="Your POS counts sales. It doesn't count cost."
        intro="Sales reporting answers one question: what went out the door. It leaves the questions that decide whether the month works — what the food and labor cost together, which items earn their place on the menu, which hours are overstaffed and which are quietly losing you covers. Those numbers exist. They sit across the POS, the invoices and the schedule, and nothing joins them up."
        items={[
          { title: 'Prime cost', description: 'Food and labor together, against sales, for the period you choose rather than the one the POS defaults to.' },
          { title: 'Labor by daypart', description: 'Cost as a percentage of sales, hour by hour, so an overstaffed Tuesday lunch shows up as a number instead of a feeling.' },
          { title: 'Item-level margin', description: 'Measured against the costs you enter, so the menu can be read by what it earns rather than by what it sells.' },
          { title: 'Staffing signal', description: 'Revenue by hour set against who was on, which is the same data your schedule should be built from.' },
        ]}
      />

      {/* Sits between the problem and the price. A reader who has just been told
          what their POS omits should see what the answer looks like before being
          asked what it costs. */}
      <UsDashboardPreview
        eyebrow="WHAT YOU SEE"
        heading="Your dashboard, not a template."
        intro="Five builds, five businesses, five different screens. We do not ship one layout with your logo on it — the measures, the density and the look all follow how you actually run, which is why none of these resemble each other."
        disclaimer="Example builds · illustrative figures, not a client's data"
      />

      {/* Sits against the price rather than under the hero. "Is this worth it"
          is a question a reader asks when they see the number, not before. */}
      <UsOnePoint
        eyebrow="THE MATH"
        heading="1% of your sales is worth more than we charge."
        intro="Move the slider to what you sell in a month. If better numbers help you save or earn just 1% more, that is the middle figure — and the one on the right is what the reporting costs."
        sliderLabel="Monthly sales"
        footnote="We are not promising you that 1%. We are showing you how big it is, and what it costs to see where it is hiding."
      />

      <UsTiers
        eyebrow="PRICING"
        heading="Three tiers."
        intro="Setup covers the build and the connection to your POS. The monthly covers hosting, the connection staying up, and the repairs nobody can schedule in advance."
        tiers={tiers}
        addOnsHeading="Add-ons"
        addOns={addOns}
      />

      {/* Callout. Inline because CalloutBlock reads the Gulf translations. */}
      <section className="py-16 lg:py-20 relative z-[1] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-[720px] mx-auto border-l-4 border-signal px-8 py-7 bg-paper/[0.04] rounded-r-lg shadow-glow-signal-sm">
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              Sales reporting tells you what left the kitchen. It takes a second system
              to tell you what it cost to put it there.
            </p>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
              / practice note · compass-its
            </span>
          </div>
        </div>
      </section>

      <UsPlatforms
        eyebrow="COVERAGE"
        heading="Twenty-two platforms, and a way in for most of the rest."
        groups={platformGroups}
        footnote="Running something else? If it exports on a schedule or holds its data somewhere we can reach, we can usually work with it. Ask, and we'll tell you either way."
      />

      {/* The one photograph on this page. Everything above it is screens and
          figures; the business being sold to is a room with people in it, and
          the page had stopped saying so. Below the fold, lazy. */}
      <section className="relative z-[1] pb-4">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <SectionImage
            src="/images/site/us-bar-interior.jpg"
            alt="A bar counter with glassware, lit for evening service"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>

      <ServiceWhyUs
        eyebrow="WHY US"
        heading="Built by people who read profit and loss statements."
        intro="A finance degree from Portland State, financial reporting for an Oregon senior living operator, and a stretch at the Port of Portland — then a technology firm. The reports come from someone who has had to explain a variance to a board, not from a template."
        points={[
          'We build the report we would want to read, which is not the one the POS ships with.',
          'Our build team runs nine hours ahead of Oregon. You send a change at the end of service, and it is usually waiting when you open.',
          'That is also why this costs less than a US agency for the same output, and we would rather say so here than have you find out later.',
          'Point-of-sale vendors change their plans and their interfaces. When a report stops running, fixing it is our job, not yours.',
        ]}
      />

      <UsContact
        eyebrow="START HERE"
        heading="Tell us what you run."
        intro="Tell us which POS you run and how many locations. That is enough for us to say whether this works for you."
      />
    </main>
  )
}
