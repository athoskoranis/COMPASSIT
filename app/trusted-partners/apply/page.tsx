import type { Metadata } from 'next'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'

const FORM = '/compass-its-trusted-partner-application.pdf'

// PARTNER-FACING. Copy is verbatim from CONTENT.md "Become a Trusted Partner Page
// (/trusted-partners/apply)"; title and description verbatim from SEO.md. That
// copy is newly drafted and flagged in CONTENT.md as awaiting approval.
//
// Deliberately undiscoverable: noindex, absent from lib/sitemap-entries.ts,
// reached only from the quiet link at the foot of /trusted-partners. A client
// searching for Compass must land on the client-facing page, never on the terms
// we offer subcontractors.
//
// The process is an APPLICATION, not a registration. Completing the form does not
// put anyone on the roster: the form plus evidence goes to procurement,
// procurement decides, and the applicant is told either way. The PDF says the
// same thing — keep them in step.
export const metadata: Metadata = {
  title: { absolute: 'Become a Trusted Partner · Compass ITS' },
  description:
    'Apply to join the Compass IT Solutions partner roster. Send the form with evidence of comparable work and our procurement team will review it.',
  alternates: { canonical: '/trusted-partners/apply' },
  openGraph: { url: '/trusted-partners/apply' },
  robots: { index: false, follow: true },
}

const steps = [
  {
    n: '01',
    name: 'Complete the form',
    body: 'One page: your details, your disciplines, your certifications, and two references we can call.',
  },
  {
    n: '02',
    name: 'Send it with your evidence',
    body: 'Email the signed form to info@compass-its.com with photographs, drawings or job records from comparable work. This is the part that decides it.',
  },
  {
    n: '03',
    name: 'Procurement reviews it',
    body: 'We assess the evidence, call your references, and check trade licence, insurance and capacity against the jobs we run.',
  },
  {
    n: '04',
    name: 'We come back to you',
    body: 'You get an outcome either way. If you are accepted, you go on the roster and we brief you when a scope fits what you do.',
  },
]

const weBring = [
  'Scopes that arrive defined, priced and programmed. No bidding, no chasing.',
  'The technical standard the work is held to, and sign-off against it.',
  'The client relationship, site access and coordination, handled by us.',
  'Clear payment terms, set out in each purchase order.',
  'A listing on our Trusted Partners page, once you are accepted.',
]

const youBring = [
  'Specialist capability on a defined scope of works, to the agreed programme.',
  'Your own engineers, tools, trade licence, insurance and tax compliance.',
  'A written quote for each job. You are free to decline any scope.',
  'Evidence of comparable work and references we can call.',
  'Discretion. What you see on a client site stays between us.',
]

const questions = [
  {
    q: 'Does sending the form put me on the roster?',
    a: 'No. The form is an application, not an acceptance. It goes to our procurement team with your evidence, they review it against the jobs we run, and we come back to you either way. A form sent with nothing to look at will not be assessed.',
  },
  {
    q: 'What counts as evidence?',
    a: 'Photographs of finished work, as-built drawings, job records, or a reference site we can visit. Certifications and vendor partner status help. Pick the jobs closest to the work you want from us.',
  },
  {
    q: 'Does it cost anything to apply or to be listed?',
    a: 'No. There is no fee to apply, no fee to join the roster and no fee to stay on it. You are paid per job, for the scope you take on.',
  },
  {
    q: 'Is it exclusive?',
    a: 'No. Acceptance is not exclusive and guarantees no volume of work. You stay free to work with anyone else.',
  },
  {
    q: 'Who owns the client relationship?',
    a: 'Compass IT Solutions does. We hold the account, set the technical standard, and handle the scope, site access and invoicing. You work with us rather than with the client, and the form asks you not to approach clients we introduce directly for those services, during a job and for twelve months after it ends.',
  },
  {
    q: 'How and when am I paid?',
    a: 'Per job, on the terms set out in the purchase order you accept before work starts. Pricing comes from your own quote.',
  },
  {
    q: 'What do you do with the evidence I send?',
    a: 'We use it to assess the application and, if you are accepted, to match you to the right scope. As the form sets out, we may show relevant examples and references when we are putting a team together. Only ever what you give us. Tell us on the form if something is confidential.',
  },
  {
    q: 'Can I leave the roster?',
    a: 'Any time, by email. We remove your listing from the Trusted Partners page within 30 days. Material already printed or sent may take longer to withdraw.',
  },
]

export default function BecomeATrustedPartnerPage() {
  return (
    <>
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <EyebrowLabel dim>Trusted partners</EyebrowLabel>
          <h1 className="mt-6 max-w-4xl font-archivo text-heading-1 text-paper md:text-display-l">
            Become a trusted <span className="text-signal">partner</span>.
          </h1>
          <p className="mt-8 max-w-2xl font-barlow text-body-l text-paper/70">
            We work with a short list of specialist contractors across Qatar. If your work holds up and your
            process is reliable, we would like to see it. Our procurement team reviews every application —
            send the form and your evidence together.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={FORM}>Download the application form</Button>
            <Button href="mailto:info@compass-its.com?subject=Trusted%20Partner%20application" variant="ghost">
              info@compass-its.com
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <EyebrowLabel>How to apply</EyebrowLabel>
          <h2 className="mt-4 max-w-3xl font-archivo text-heading-1 text-ink">
            Four steps. The evidence decides it.
          </h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-ink/15 pt-6">
                <span className="font-jetbrains text-caption tracking-caption text-signal">{s.n}</span>
                <h3 className="mt-3 font-archivo text-heading-2 text-ink">{s.name}</h3>
                <p className="mt-3 font-barlow text-body text-ink/70">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Button href={FORM}>Download the application form</Button>
            <span className="font-jetbrains text-caption uppercase tracking-caption text-ink/50">
              PDF · one page · send it with your evidence
            </span>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <EyebrowLabel>How the arrangement works</EyebrowLabel>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg bg-ink p-8 md:p-10">
              <h2 className="font-archivo text-heading-2 text-paper">Compass IT Solutions brings</h2>
              <ul className="mt-6 space-y-4">
                {weBring.map((t) => (
                  <li key={t} className="flex gap-4 font-barlow text-body text-paper/75">
                    <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-sm bg-signal" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-8 md:p-10">
              <h2 className="font-archivo text-heading-2 text-ink">You bring</h2>
              <ul className="mt-6 space-y-4">
                {youBring.map((t) => (
                  <li key={t} className="flex gap-4 font-barlow text-body text-ink/70">
                    <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-sm bg-signal" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <EyebrowLabel>Questions</EyebrowLabel>
          <dl className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {questions.map((f) => (
              <div key={f.q} className="grid gap-4 py-8 md:grid-cols-12 md:gap-10">
                <dt className="font-archivo text-heading-2 text-ink md:col-span-5">{f.q}</dt>
                <dd className="font-barlow text-body text-ink/70 md:col-span-7">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 font-barlow text-body text-ink/70">
            Something not covered here?{' '}
            <Link href="/contact" className="text-signal underline underline-offset-4">
              Get in touch
            </Link>{' '}
            and we will come back to you.
          </p>
        </div>
      </section>
    </>
  )
}
