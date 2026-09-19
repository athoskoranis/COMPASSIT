import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * Platform coverage for the US practice.
 *
 * Two groups, because the difference matters to the buyer before the first call:
 * one connects directly inside the standard tiers, the other needs vendor
 * approval and carries an onboarding fee and a wait.
 *
 * Foodics is deliberately absent. It is a MENA and Gulf platform, and section 5
 * of the service handover says keep it in the internal list and out of US-facing
 * marketing. The lists and the "22 platforms" figure in the hero stats are
 * counted together — if you add a platform here, check that figure.
 */

export default function UsPlatforms({
  eyebrow,
  heading,
  groups,
  footnote,
}: {
  eyebrow?: string
  heading: string
  groups: { label: string; note: string; platforms: string[] }[]
  footnote: string
}) {
  return (
    <section id="platforms" className="py-20 lg:py-28 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {eyebrow && <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>}

        <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[32px] md:text-[44px] leading-none mb-12 max-w-[720px]">
          {heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {groups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-paper/[0.10] bg-paper/[0.03] p-7"
            >
              <h3 className="font-archivo font-medium text-paper text-[19px] tracking-[-0.02em] m-0">
                {group.label}
              </h3>

              <p className="font-jetbrains text-[11px] text-paper/40 uppercase tracking-eyebrow mt-3 mb-6 m-0">
                {group.note}
              </p>

              <ul className="flex flex-wrap gap-2 m-0 p-0 list-none">
                {group.platforms.map((platform) => (
                  <li
                    key={platform}
                    className="font-barlow text-[14px] text-paper/70 border border-paper/[0.12] rounded-lg px-3 py-1.5"
                  >
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="font-barlow text-[16px] text-paper/60 max-w-[680px] leading-relaxed m-0">
          {footnote}
        </p>
      </div>
    </section>
  )
}
