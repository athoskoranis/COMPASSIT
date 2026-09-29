import type { Metadata } from 'next'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import ContactCTA from '@/components/sections/ContactCTA'
import { getPartners } from '@/lib/partners'

// CLIENT-FACING. Copy is verbatim from CONTENT.md "Trusted Partners Page
// (/trusted-partners)"; title and description verbatim from SEO.md. That copy is
// newly drafted and flagged in CONTENT.md as awaiting approval.
//
// This page argues why a vetted roster is a reason to trust Compass. It must
// never read as an admission that work is handed off: partners add capability to
// a scope we hold, brief and sign off. Everything a prospective PARTNER needs
// lives on /trusted-partners/apply, reached from the quiet link near the foot.
export const metadata: Metadata = {
  title: { absolute: 'Trusted Partners — Vetted before they touch your network · Compass ITS' },
  description:
    'Compass IT Solutions works with a short roster of specialist contractors, each cleared by procurement before they reach a client site. The standard stays ours.',
  alternates: { canonical: '/trusted-partners' },
  openGraph: { url: '/trusted-partners' },
}

const meaning = [
  {
    heading: 'One point of accountability',
    body: 'You deal with us. We hold the scope, the programme and the standard, whoever is on site. One contract, one number to call.',
  },
  {
    heading: 'Capability without a hiring lead time',
    body: 'A cabling crew, a security engineer, a field team for a rollout — available for the window you need them, not the quarter it takes to recruit them.',
  },
  {
    heading: 'Vetted, not sourced on the day',
    body: 'Every partner clears a procurement review before they go near a client site: past work, references we call, trade licence, insurance and capacity.',
  },
]

const vetting = [
  {
    n: '01',
    name: 'They apply',
    body: 'A written application with evidence of comparable work. A form on its own is not an application.',
  },
  {
    n: '02',
    name: 'Procurement reviews it',
    body: 'We check the work, call the references, and verify trade licence, insurance and capacity against the jobs we run.',
  },
  {
    n: '03',
    name: 'Terms in writing',
    body: 'Confidentiality, our technical standard and the commercial terms, agreed and signed before anything starts.',
  },
  {
    n: '04',
    name: 'Reviewed every job',
    body: 'The roster is not a permanent pass. We brief, supervise and sign off the work job by job.',
  },
]

/** Renders nothing until content/partners.json holds real, accepted partners. */
function Roster() {
  const partners = getPartners()
  if (!partners.length) return null

  return (
    <section className="bg-paper py-20 md:py-28 relative z-[1]">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <EyebrowLabel>The roster</EyebrowLabel>
        <h2 className="mt-4 font-archivo text-heading-1 text-ink">Who we work with.</h2>
        <p className="mt-4 max-w-2xl font-barlow text-body text-ink/70">
          Contractors who have cleared the review above, and whose work we put our name to.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <li key={p.name} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="font-archivo text-heading-2 text-ink">{p.name}</h3>
              <p className="mt-2 font-jetbrains text-caption uppercase tracking-caption text-ink/50">
                {p.city}
                {p.since ? ` · Partner since ${p.since}` : ''}
              </p>
              {p.blurb ? <p className="mt-4 font-barlow text-body text-ink/70">{p.blurb}</p> : null}
              {p.disciplines.length ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.disciplines.map((d) => (
                    <li
                      key={d}
                      className="rounded-sm border border-ink/15 px-3 py-1 font-jetbrains text-[12px] uppercase tracking-caption text-ink/60"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function TrustedPartnersPage() {
  return (
    <main>
      <section className="bg-ink py-24 md:py-32 relative z-[1]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <EyebrowLabel dim>Trusted partners</EyebrowLabel>
          <h1 className="mt-6 max-w-4xl font-archivo text-heading-1 text-paper md:text-display-l">
            Vetted before they touch your <span className="text-signal">network</span>.
          </h1>
          <p className="mt-8 max-w-2xl font-barlow text-body-l text-paper/70">
            Some work needs a specialist — a cabling crew for a fit-out, a security engineer for an audit,
            extra hands to hold a programme. We keep a short roster of contractors who have been through our
            procurement review. The scope, the standard and the accountability stay with us.
          </p>
          <div className="mt-10">
            <Button href="/contact">Talk to us</Button>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28 relative z-[1]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <EyebrowLabel>What that means for you</EyebrowLabel>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {meaning.map((c, i) => (
              <li key={c.heading} className="rounded-lg border border-ink/10 bg-white p-8">
                <span className="font-jetbrains text-caption tracking-caption text-signal">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-4 font-archivo text-heading-2 text-ink">{c.heading}</h2>
                <p className="mt-4 font-barlow text-body text-ink/70">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The vetting itself. The reassurance a client wants, and the same process
          the partner-facing page describes from the other side. */}
      <section className="bg-mist py-20 md:py-28 relative z-[1]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <EyebrowLabel>How a partner earns the name</EyebrowLabel>
          <h2 className="mt-4 max-w-3xl font-archivo text-heading-1 text-ink">
            Nobody joins the roster by asking.
          </h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {vetting.map((s) => (
              <li key={s.n} className="border-t border-ink/15 pt-6">
                <span className="font-jetbrains text-caption tracking-caption text-signal">{s.n}</span>
                <h3 className="mt-3 font-archivo text-heading-2 text-ink">{s.name}</h3>
                <p className="mt-3 font-barlow text-body text-ink/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Roster />

      {/* The partner-facing door. Deliberately quiet: a contractor looking for it
          will find it, a client reading the page is not pulled into it. */}
      <section className="border-t border-ink/10 bg-paper relative z-[1]">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p className="font-jetbrains text-caption uppercase tracking-caption text-ink/50">
            Run a contracting or engineering practice?
          </p>
          <Link
            href="/trusted-partners/apply"
            className="font-jetbrains text-caption uppercase tracking-caption text-ink/50 underline underline-offset-4 transition-colors hover:text-signal"
          >
            Become a trusted partner
          </Link>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
