import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * The second account of the week.
 *
 * ── The argument, and the line it must not cross ────────────────────────────
 *
 * An owner who was not in the building learns what happened from the people who
 * were. That is the normal way a business runs and it is usually right. It is
 * also always partial: a closing manager knows their own Friday, not the Tuesday
 * lunch they were off for, and nobody holds fourteen shifts in their head.
 *
 * The section says the reporting is the *other* account, not the correct one.
 * That distinction is the whole tone. It must never imply staff are careless or
 * dishonest — the reader's team is the reader's team, and a page that nudges an
 * owner to distrust them would be both insulting and bad business. VOICE.md bans
 * fear-selling and this is the shape fear-selling would take here.
 *
 * The closing line carries it: neither account is wrong, and you want both. Only
 * one of them saw every shift.
 *
 * ── Why a row-by-row contrast ───────────────────────────────────────────────
 *
 * Two independent lists would leave a reader to pair them up. Aligned in rows,
 * the same event appears twice and the difference is the point — especially the
 * third pair, where "the steak sells well" and "the steak earns least" are both
 * true and only the numbers hold both at once.
 *
 * Static by design. There is nothing to interact with, and a section whose point
 * is quiet objectivity should not be the flashiest thing on the page.
 */

type Pair = { heard: string; recorded: React.ReactNode }

const N = ({ children }: { children: React.ReactNode }) => (
  <span className="text-signal">{children}</span>
)

const PAIRS: Pair[] = [
  {
    heard: 'Friday was busy. We got slammed around seven.',
    recorded: (
      <>
        Friday peaked at <N>19:00</N> on <N>$8,970</N>, about <N>6%</N> above forecast. The queue built
        because two of the five tables in section 12&ndash;16 were still turning from the 18:30 sitting.
      </>
    ),
  },
  {
    heard: 'Tuesday was quiet. Nothing out of the ordinary.',
    recorded: (
      <>
        Tuesday lunch ran <N>18 labor hours</N> above forecast, and has done on <N>nine of the last
        fourteen</N> days. Quiet is the pattern, not the exception.
      </>
    ),
  },
  {
    heard: 'The steak has been selling really well.',
    recorded: (
      <>
        It has. It also earns the least of anything on the menu &mdash; margin fell <N>6.2 points</N> after
        the supplier changed on 12 September, and the price has not moved since.
      </>
    ),
  },
]

export default function UsSecondAccount({
  eyebrow,
  heading,
  intro,
  heardLabel,
  recordedLabel,
  footnote,
}: {
  eyebrow: string
  heading: string
  intro: string
  heardLabel: string
  recordedLabel: string
  footnote: string
}) {
  return (
    <section className="py-16 lg:py-20 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">

        <div className="max-w-[720px] mb-10">
          <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>
          <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[30px] md:text-[40px] leading-[1.1] mb-5">
            {heading}
          </h2>
          <p className="font-barlow text-[17px] text-paper/70 leading-[1.65] m-0">
            {intro}
          </p>
        </div>

        <div className="rounded-xl border border-paper/[0.12] bg-paper/[0.03] overflow-hidden">

          {/* Column headings. Hidden on mobile, where each pair carries its own. */}
          <div className="hidden lg:grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] border-b border-paper/[0.10]">
            <p className="font-jetbrains text-[10px] text-paper/45 uppercase tracking-eyebrow m-0 px-7 py-4">
              {heardLabel}
            </p>
            <p className="font-jetbrains text-[10px] text-signal uppercase tracking-eyebrow m-0 px-7 py-4 border-s border-paper/[0.10]">
              {recordedLabel}
            </p>
          </div>

          {PAIRS.map((pair, i) => (
            <div
              key={pair.heard}
              className={`grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] ${
                i > 0 ? 'border-t border-paper/[0.10]' : ''
              }`}
            >
              {/* What a person said. Set as speech, and deliberately quieter. */}
              <div className="px-7 py-6 lg:py-7">
                <p className="font-jetbrains text-[9px] text-paper/40 uppercase tracking-eyebrow m-0 mb-3 lg:hidden">
                  {heardLabel}
                </p>
                <p className="font-barlow text-[17px] text-paper/55 italic leading-[1.5] m-0">
                  &ldquo;{pair.heard}&rdquo;
                </p>
              </div>

              {/* What the week recorded. Same event, with the detail nobody holds
                  in their head. */}
              <div className="px-7 pb-6 lg:py-7 lg:border-s border-paper/[0.10]">
                <p className="font-jetbrains text-[9px] text-signal uppercase tracking-eyebrow m-0 mb-3 lg:hidden">
                  {recordedLabel}
                </p>
                <p className="font-barlow text-[16px] text-paper/85 leading-[1.6] m-0">
                  {pair.recorded}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-barlow text-[15px] text-paper/65 leading-[1.6] mt-6 m-0 max-w-[640px]">
          {footnote}
        </p>
      </div>
    </section>
  )
}
