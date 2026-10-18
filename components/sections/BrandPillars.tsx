'use client'
import { useLanguage } from '@/context/LanguageContext'

// "Three things we don't compromise on." — on /about and /ar (Decision 163).
//
// The three brand pillars drawn as a fibre split: one trunk comes in from the
// top, passes through a splice box, and divides into three strands, each
// terminating in a port above its pillar. One partner, three commitments, all
// from the same source. Light travels down each strand.
//
// The strands are an SVG stretched to the grid's width (non-scaling strokes),
// ending at x = 1/6, 3/6 and 5/6 — the centres of the three columns below — so
// each strand lands on its port at any desktop width. The ports and splice box
// are HTML, so they stay crisp rather than stretching with the SVG. The drawing
// is symmetrical, so it needs no mirroring for Arabic; the columns reverse on
// their own under dir="rtl".
//
// Below md the split has no room, so the pillars stack along a single line on
// the inline-start edge, each with its port. Under prefers-reduced-motion the
// travelling light is hidden and the strands stay lit.
//
// Replaces the indigo GlowCards (DESIGN.md keeps Indigo out of product UI) and
// the fade-in from opacity 0. No copy changed: the ports carry the pillars'
// existing 01–03 numbers.

const TRUNK = 'M500 0 V100'
const SPLICE_BOTTOM = 134
const STRANDS = [
  `M500 ${SPLICE_BOTTOM} C500 190 166.67 180 166.67 240`,
  `M500 ${SPLICE_BOTTOM} V240`,
  `M500 ${SPLICE_BOTTOM} C500 190 833.33 180 833.33 240`,
]

function Port({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative block w-[52px] h-[44px] rounded-md border-2 border-signal bg-signal/[0.12] ${className}`}
    >
      <span className="absolute left-1/2 top-[8px] -translate-x-1/2 w-6 h-[9px] rounded-[1px] bg-paper/30" />
      <span className="absolute right-[6px] bottom-[6px] w-[7px] h-[7px] rounded-full bg-signal shadow-[0_0_8px_#2BB3E6]" />
    </span>
  )
}

export default function BrandPillars() {
  const { tr } = useLanguage()
  const pillars = tr.brandPillars.pillars

  return (
    <section id="about" className="py-20 lg:py-28 relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        {/* No eyebrow. The NETWORK · CLOUD · CONTINUITY label repeated the hero
            eyebrow directly above it, so the heading carries the section on its
            own. tr.brandPillars.eyebrow is left in translations — the hero
            still uses the same string. */}
        <h2 className="font-archivo font-normal text-paper text-[32px] leading-[36px] lg:text-heading-1 tracking-[-0.025em] mb-10 md:mb-6">
          {tr.brandPillars.heading}
        </h2>

        <div className="relative">
          {/* The split — desktop only */}
          <div aria-hidden className="hidden md:block relative h-[240px]">
            <svg
              viewBox="0 0 1000 240"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="pillars-trunk" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#2BB3E6" stopOpacity="0" />
                  <stop offset="1" stopColor="#2BB3E6" />
                </linearGradient>
              </defs>
              <path d={TRUNK} fill="none" stroke="rgba(244,242,236,0.12)" strokeWidth={14} vectorEffect="non-scaling-stroke" />
              <path d={TRUNK} fill="none" stroke="url(#pillars-trunk)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
              {STRANDS.map((d) => (
                <g key={d}>
                  <path d={d} fill="none" stroke="rgba(244,242,236,0.12)" strokeWidth={10} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d={d} fill="none" stroke="#2BB3E6" strokeWidth={3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </g>
              ))}
              <g className="motion-reduce:hidden">
                {STRANDS.map((d, i) => (
                  <circle key={d} r={4.5} fill="#F4F2EC">
                    <animateMotion dur="2.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={`M500 0 V${SPLICE_BOTTOM} ${d.split(' ').slice(2).join(' ')}`} />
                  </circle>
                ))}
              </g>
            </svg>

            {/* Splice box, centred where the trunk divides */}
            <span className="absolute left-1/2 top-[100px] -translate-x-1/2 w-[60px] h-[34px] rounded-md border-[1.5px] border-paper/50 bg-ink flex items-center justify-center">
              <span className="w-9 border-t border-dashed border-paper/40" />
            </span>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-10 border-s-2 border-signal ps-8 md:border-s-0 md:ps-0">
            {pillars.map((pillar) => (
              <li key={pillar.number} className="relative flex flex-col">
                {/* Desktop: the port the strand lands on, centred on the column */}
                <Port className="hidden md:block self-center mb-10" />
                {/* Mobile: the port sits on the single line at the inline-start edge */}
                <Port className="md:hidden absolute -start-[59px] top-0 scale-75 origin-center" />

                <span className="font-jetbrains text-xs font-medium tracking-eyebrow text-signal tabular-nums mb-3">
                  {pillar.number}
                </span>
                <h3 className="font-archivo font-light text-paper text-[40px] leading-[1] lg:text-[52px] tracking-[-0.04em] mb-5">
                  {pillar.heading}
                </h3>
                <p className="font-barlow text-body leading-[28px] text-paper/60">{pillar.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
