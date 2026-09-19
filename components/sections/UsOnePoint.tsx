'use client'
import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * What 1% of the reader's takings is worth, walked through in three steps.
 *
 * ── The wording ─────────────────────────────────────────────────────────────
 *
 * Deliberately plain. The first version said "one point of prime cost", which is
 * the correct term and the wrong words: it asks a reader to know an industry
 * phrase, then translate "a point" into a percentage, before they can care about
 * the figure. Anyone who had to do that had already scrolled. It says 1% now,
 * and names food and labor rather than naming the ratio.
 *
 * ── The three steps ─────────────────────────────────────────────────────────
 *
 * The argument has an order — what you take, what 1% of it is, what we charge —
 * and the layout now carries that order instead of leaving a reader to assemble
 * it from a two-column split. Numbered, with chevrons between, reading left to
 * right on desktop and top to bottom on a phone. The last step is the one that
 * lands, so it gets the Signal border and sits at the end of the sentence.
 *
 * ── The honesty line ────────────────────────────────────────────────────────
 *
 * This does NOT promise a saving. It multiplies a number the reader supplies and
 * sets it beside a published price, and the closing line says so. Claiming we
 * will find an operator 1% would be a results guarantee nobody can make. The
 * footnote is the safeguard and CONTENT.md marks it required.
 */

const MIN = 10_000
const MAX = 500_000
const STEP = 5_000
const PRESETS = [25_000, 50_000, 100_000, 250_000]
const TIER1 = 99

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const compact = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${Math.round(n / 1000)}k`

function StepLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="font-jetbrains text-[10px] uppercase tracking-eyebrow m-0 mb-5 flex items-center gap-2.5">
      <span className="text-signal">{n}</span>
      <span aria-hidden className="w-4 h-px bg-paper/25" />
      <span className="text-paper/55">{children}</span>
    </p>
  )
}

/** Points right between columns, down between stacked rows. */
function Chevron() {
  return (
    <div aria-hidden className="flex lg:flex-col items-center justify-center text-paper/25 py-2 lg:py-0 lg:px-1">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="rotate-90 lg:rotate-0">
        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function UsOnePoint({
  eyebrow,
  heading,
  intro,
  sliderLabel,
  footnote,
}: {
  eyebrow: string
  heading: string
  intro: string
  sliderLabel: string
  footnote: string
}) {
  const [monthly, setMonthly] = useState(80_000)

  const perMonth = monthly * 0.01
  const perYear = perMonth * 12
  const multiple = perMonth / TIER1

  return (
    <section className="py-16 lg:py-20 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">

        <div className="max-w-[680px] mb-10">
          <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>
          <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[30px] md:text-[40px] leading-[1.1] mb-5">
            {heading}
          </h2>
          <p className="font-barlow text-[17px] text-paper/70 leading-[1.65] m-0">
            {intro}
          </p>
        </div>

        <div className="rounded-xl border border-paper/[0.12] bg-paper/[0.03] p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-stretch">

            {/* 01 — the reader's own number */}
            <div className="flex-1 min-w-0">
              <StepLabel n="01">What you take</StepLabel>

              <label htmlFor="us-monthly-sales" className="font-barlow text-[14px] text-paper/60 block mb-3">
                {sliderLabel}
              </label>

              {/* Unit on its own line rather than trailing the figure. Inline,
                  "$100,000 a month" breaks between "a" and "month" once the
                  column narrows, and it matches step 02 this way. */}
              <p className="font-archivo font-light text-paper text-[38px] leading-none tracking-[-0.03em] m-0">
                {usd(monthly)}
              </p>
              <p className="font-jetbrains text-[11px] text-paper/55 uppercase tracking-eyebrow mt-2.5 mb-5 m-0">
                a month
              </p>

              <input
                id="us-monthly-sales"
                type="range"
                min={MIN}
                max={MAX}
                step={STEP}
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                aria-valuetext={`${usd(monthly)} a month`}
                className="us-range w-full"
              />

              <div className="flex justify-between mt-2.5">
                <span className="font-jetbrains text-[10px] text-paper/45">{compact(MIN)}</span>
                <span className="font-jetbrains text-[10px] text-paper/45">{compact(MAX)}</span>
              </div>

              {/* Tight enough that all four sit on one row inside the step
                  column. At the previous padding the last one dropped to a
                  second line, which read as an afterthought rather than a set. */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setMonthly(p)}
                    aria-pressed={monthly === p}
                    className={`font-jetbrains text-[11px] px-2.5 py-1.5 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent ${
                      monthly === p
                        ? 'border-signal/50 bg-signal/10 text-signal'
                        : 'border-paper/[0.12] text-paper/60 hover:text-paper hover:border-paper/25'
                    }`}
                  >
                    {compact(p)}
                  </button>
                ))}
              </div>
            </div>

            <Chevron />

            {/* 02 — the sum */}
            <div className="flex-1 min-w-0 lg:px-8 py-6 lg:py-0 border-y lg:border-y-0 border-paper/[0.08]">
              <StepLabel n="02">1% of that is</StepLabel>

              <p className="font-archivo font-light text-signal text-[54px] md:text-[64px] leading-[0.95] tracking-[-0.045em] m-0">
                {usd(perMonth)}
              </p>
              <p className="font-jetbrains text-[11px] text-paper/55 uppercase tracking-eyebrow mt-3 m-0">
                a month
              </p>

              <p className="font-archivo font-light text-paper text-[26px] leading-none tracking-[-0.03em] mt-7 m-0">
                {usd(perYear)}
              </p>
              <p className="font-jetbrains text-[10px] text-paper/55 uppercase tracking-eyebrow mt-2.5 m-0">
                a year
              </p>
            </div>

            <Chevron />

            {/* 03 — the comparison, which is the point */}
            <div className="flex-1 min-w-0 lg:ps-8">
              <StepLabel n="03">What we charge</StepLabel>

              <p className="font-archivo font-light text-paper text-[38px] leading-none tracking-[-0.03em] m-0">
                ${TIER1}
              </p>
              <p className="font-jetbrains text-[11px] text-paper/55 uppercase tracking-eyebrow mt-2.5 m-0">
                a month
              </p>

              <div className="mt-7 rounded-lg border border-signal/30 bg-signal/[0.07] px-5 py-4">
                <p className="font-archivo font-light text-paper text-[30px] leading-none tracking-[-0.03em] m-0">
                  {multiple >= 1 ? `${Math.round(multiple)}×` : '—'}
                </p>
                <p className="font-barlow text-[14px] text-paper/70 leading-snug mt-2.5 m-0">
                  {multiple >= 1
                    ? 'bigger than what this costs you'
                    : 'below what this costs at your size'}
                </p>
              </div>

              <p className="font-barlow text-[14px] text-paper/60 leading-[1.55] mt-5 m-0">
                Tier 1, one location. The other tiers are priced further down the page.
              </p>
            </div>
          </div>
        </div>

        <p className="font-barlow text-[15px] text-paper/65 leading-[1.6] mt-6 m-0 max-w-[620px]">
          {footnote}
        </p>
      </div>
    </section>
  )
}
