import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * Pricing tiers and add-ons for the US practice.
 *
 * Prices are on the page deliberately. The $99 floor exists to filter the buyer
 * looking for a $30 do-it-yourself dashboard, and a published price does that
 * filtering before a call rather than during one. Copy and figures come from the
 * US Practice section of CONTENT.md — do not edit them here.
 *
 * Tier 2 is marked as the common one rather than "most popular", which would be
 * a claim nobody has measured yet.
 */

type Tier = {
  name: string
  forWhom: string
  setup: string
  monthly: string
  scopeLabel: string
  scope: string[]
  featured?: boolean
}

type AddOn = { item: string; price: string }

export default function UsTiers({
  eyebrow,
  heading,
  intro,
  tiers,
  addOnsHeading,
  addOns,
}: {
  eyebrow?: string
  heading: string
  intro?: string
  tiers: Tier[]
  addOnsHeading: string
  addOns: AddOn[]
}) {
  return (
    <section id="pricing" className="py-20 lg:py-28 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {eyebrow && <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>}

        <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[32px] md:text-[44px] leading-none mb-6 max-w-[720px]">
          {heading}
        </h2>

        {intro && (
          <p className="font-barlow text-[17px] text-paper/60 max-w-[680px] mb-12 leading-relaxed">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-xl p-7 border ${
                tier.featured
                  ? 'border-signal/40 bg-paper/[0.05]'
                  : 'border-paper/[0.10] bg-paper/[0.03]'
              }`}
            >
              {/* Fixed header height so the three prices sit on one line across
                  the row. "Tier 2 — Custom Metrics" wraps where the other two
                  names do not, and without this its price drops about 24px below
                  its neighbours, which reads as a mistake rather than a
                  difference. Collapses on mobile, where the cards stack and
                  there is nothing to align to. */}
              <div className="lg:min-h-[132px]">
                <h3 className="font-archivo font-medium text-paper text-[21px] tracking-[-0.02em]">
                  {tier.name}
                </h3>

                <p className="font-barlow text-[15px] text-paper/55 leading-relaxed mt-2 mb-6">
                  {tier.forWhom}
                </p>
              </div>

              <div className="pb-6 mb-6 border-b border-paper/[0.08]">
                <p className="font-archivo font-light text-paper text-[30px] leading-none tracking-[-0.02em] m-0">
                  {tier.monthly}
                </p>
                <p className="font-jetbrains text-[11px] text-paper/40 uppercase tracking-eyebrow mt-3 m-0">
                  {tier.setup} setup
                </p>
              </div>

              <p className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mb-4">
                {tier.scopeLabel}
              </p>

              <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                {tier.scope.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-[7px] shrink-0 w-[3px] h-4 rounded-full bg-signal"
                    />
                    <span className="font-barlow text-[15px] text-paper/70 leading-relaxed">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="font-archivo font-medium text-paper text-[24px] tracking-[-0.03em] mb-6">
          {addOnsHeading}
        </h3>

        <div className="rounded-xl border border-paper/[0.10] overflow-hidden">
          {addOns.map((addOn, i) => (
            <div
              key={addOn.item}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 px-6 py-4 ${
                i > 0 ? 'border-t border-paper/[0.08]' : ''
              }`}
            >
              <span className="font-barlow text-[15px] text-paper/70 leading-relaxed">
                {addOn.item}
              </span>
              <span className="font-jetbrains text-[12px] text-paper/50 uppercase tracking-eyebrow shrink-0">
                {addOn.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
