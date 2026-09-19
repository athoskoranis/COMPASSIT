'use client'
import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * Contact block for the US practice.
 *
 * Not ContactCTA. That section is the right one everywhere else, but its service
 * picker lists the Gulf managed-services lines — a Portland operator choosing
 * between "Network Infrastructure" and "Cybersecurity" to ask about prime cost
 * is the wrong question asked twice. This asks the two things that actually
 * decide whether the service fits: which POS, and how many sites.
 *
 * It posts to the same /api/contact endpoint, so enquiries land in the same
 * mailbox as everything else. That mailbox is SMTP_USER and the repository
 * cannot say who reads it — HANDOVER.md item 06 and the service handover's open
 * item 5 both want that confirmed.
 *
 * The endpoint's payload is fixed, so rather than change it, the POS and the
 * location count are composed into `message` and `services` carries a single
 * label. Without that the subject line reads "New enquiry from <name>" and a US
 * enquiry is indistinguishable from a Doha one in the inbox.
 *
 * Copy is from the US Practice section of CONTENT.md.
 */

const POS_OPTIONS = [
  'Square',
  'Clover',
  'Lightspeed',
  'Shopify POS',
  'Toast',
  'SpotOn',
  'TouchBistro',
  'Oracle / MICROS',
  'NCR / Aloha',
  'Something else',
  'Not sure',
]

const LOCATION_OPTIONS = ['One location', 'Two to five', 'More than five']

export default function UsContact({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string
  heading: string
  intro: string
}) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    pos: '',
    locations: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const details = [
        form.pos && `POS: ${form.pos}`,
        form.locations && `Locations: ${form.locations}`,
      ]
        .filter(Boolean)
        .join('\n')

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          services: ['POS Analytics — US practice'],
          message: [details, form.message].filter(Boolean).join('\n\n'),
        }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('That did not send. Try again, or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const fieldClass =
    'w-full bg-paper/[0.04] border border-paper/[0.12] rounded-lg px-4 py-3 font-barlow text-[15px] text-paper placeholder:text-paper/35 focus:outline-none focus:border-signal/50 transition-colors'

  return (
    <section id="contact" className="py-20 lg:py-28 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Centred. This is the last thing on the page and the only ask on it,
            so it sits in the middle of the column rather than hanging off the
            left edge under a full-width section above it. The header is centred;
            the fields are not, because a centred label over a full-width input
            reads as a mistake. */}
        <div className="max-w-[640px] mx-auto">
          <div className="text-center">
            <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>

            <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[32px] md:text-[44px] leading-none mb-6">
              {heading}
            </h2>

            <p className="font-barlow text-[17px] text-paper/60 mb-10 leading-relaxed">
              {intro}
            </p>
          </div>

          {submitted ? (
            <p className="font-barlow text-[17px] text-signal m-0 text-center">
              Message sent. We&rsquo;ll be in touch within one business day.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="us-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="us-name"
                    required
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="us-company" className="sr-only">
                    Business name
                  </label>
                  <input
                    id="us-company"
                    value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="Business name (optional)"
                    className={fieldClass}
                  />
                </div>
              </div>

              <label htmlFor="us-email" className="sr-only">
                Email address
              </label>
              <input
                id="us-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="Email address"
                className={fieldClass}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="us-pos"
                    className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mb-2 block"
                  >
                    Which POS do you run
                  </label>
                  <select
                    id="us-pos"
                    value={form.pos}
                    onChange={(e) => set('pos', e.target.value)}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="">Select</option>
                    {POS_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="us-locations"
                    className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mb-2 block"
                  >
                    How many locations
                  </label>
                  <select
                    id="us-locations"
                    value={form.locations}
                    onChange={(e) => set('locations', e.target.value)}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="">Select</option>
                    {LOCATION_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label htmlFor="us-message" className="sr-only">
                What you are trying to work out
              </label>
              <textarea
                id="us-message"
                rows={4}
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                placeholder="What are you trying to work out? (optional)"
                className={`${fieldClass} resize-y`}
              />

              {error && (
                <p className="font-barlow text-[15px] text-beacon m-0">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="self-center inline-flex items-center justify-center leading-none font-archivo text-[15px] font-medium uppercase tracking-cta liquid-fill px-7 py-[14px] rounded-xl disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {loading ? 'One moment' : 'Send your message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
