'use client'
import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * What one point of prime cost is worth, on the reader's own numbers.
 *
 * This replaced a four-cell stat row — platforms supported, pricing tiers, from
 * $99, Portland. Those are facts about us in the strongest slot on the page, and
 * a location is not a statistic. A visitor scrolling past has no reason to stop
 * for any of them.
 *
 * The argument here makes itself. Prime cost is food and labor against sales, so
 * one point of it is one percent of revenue — the reader moves a slider to their
 * own monthly sales and reads what a single point is worth against what the
 * service costs. Nobody has to be persuaded of the ratio; they can see it.
 *
 * ── The honesty line ────────────────────────────────────────────────────────
 *
 * This deliberately does NOT promise a saving. It is multiplication of a number
 * the reader supplies, and the closing line says so: arithmetic, not a promise.
 * Claiming we will find someone a point would be a results guarantee nobody can
 * make, and VOICE.md bans fear-selling in the other direction for the same
 * reason. The section works because the arithmetic is unarguable, not because
 * the claim is big.
 *
 * Copy lives in CONTENT.md under the US Practice section.
 */

const MIN = 10_000
const MAX = 500_000
const STEP = 5_000
const PRESETS = [25_000, 50_000, 100_000, 250_000]

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

const compact = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${Math.round(n / 1000)}k`

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
  // Tier 1 floor, from the pricing table below on the same page.
  const tier1 = 99
  const multiple = perMonth / tier1

  return (
    <section className="py-16 lg:py-20 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="rounded-xl border border-paper/[0.12] bg-paper/[0.03] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">

            {/* Control */}
            <div className="p-7 lg:p-10 border-b lg:border-b-0 lg:border-e border-paper/[0.10]">
              <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>

              <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[28px] md:text-[36px] leading-[1.08] mb-5">
                {heading}
              </h2>

              <p className="font-barlow text-[16px] text-paper/60 leading-relaxed mb-9 max-w-[460px]">
                {intro}
              </p>

              <label
                htmlFor="us-monthly-sales"
                className="font-jetbrains text-[10px] text-paper/40 uppercase tracking-eyebrow block mb-4"
              >
                {sliderLabel}
              </label>

              <p className="font-archivo font-light text-paper text-[40px] leading-none tracking-[-0.03em] m-0 mb-5">
                {usd(monthly)}
                <span className="font-jetbrains text-[11px] text-paper/40 uppercase tracking-eyebrow ms-3 align-middle">
                  / month
                </span>
              </p>

              <input
                id="us-monthly-sales"
                type="range"
                min={MIN}
                max={MAX}
                step={STEP}
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                aria-valuetext={`${usd(monthly)} per month`}
                className="us-range w-full"
              />

              <div className="flex justify-between mt-2.5">
                <span className="font-jetbrains text-[10px] text-paper/30">{compact(MIN)}</span>
                <span className="font-jetbrains text-[10px] text-paper/30">{compact(MAX)}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setMonthly(p)}
                    aria-pressed={monthly === p}
                    className={`font-jetbrains text-[11px] px-3.5 py-2 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent ${
                      monthly === p
                        ? 'border-signal/50 bg-signal/10 text-signal'
                        : 'border-paper/[0.12] text-paper/50 hover:text-paper hover:border-paper/25'
                    }`}
                  >
                    {compact(p)}
                  </button>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="p-7 lg:p-10 flex flex-col justify-center">
              <p className="font-jetbrains text-[10px] text-paper/40 uppercase tracking-eyebrow m-0">
                One point of prime cost is worth
              </p>

              <p className="font-archivo font-light text-signal text-[56px] md:text-[72px] leading-[0.95] tracking-[-0.045em] mt-4 mb-0">
                {usd(perMonth)}
              </p>
              <p className="font-jetbrains text-[11px] text-paper/40 uppercase tracking-eyebrow mt-3 m-0">
                every month
              </p>

              <div className="grid grid-cols-2 gap-5 mt-9 pt-7 border-t border-paper/[0.10]">
                <div>
                  <p className="font-archivo font-light text-paper text-[28px] leading-none tracking-[-0.03em] m-0">
                    {usd(perYear)}
                  </p>
                  <p className="font-jetbrains text-[10px] text-paper/40 uppercase tracking-eyebrow mt-3 m-0">
                    Over a year
                  </p>
                </div>
                <div>
                  <p className="font-archivo font-light text-paper text-[28px] leading-none tracking-[-0.03em] m-0">
                    {multiple >= 1 ? `${Math.round(multiple)}×` : '—'}
                  </p>
                  <p className="font-jetbrains text-[10px] text-paper/40 uppercase tracking-eyebrow mt-3 m-0">
                    What Tier 1 costs
                  </p>
                </div>
              </div>

              <p className="font-barlow text-[14px] text-paper/45 leading-relaxed mt-7 m-0 max-w-[420px]">
                {footnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
