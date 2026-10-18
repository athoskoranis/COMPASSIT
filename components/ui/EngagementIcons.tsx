// Line drawings for the six engagement steps on /how-we-work (Decision 160).
//
// Drawn for this site, not taken from an icon set: 1.5px strokes in Paper, with
// the one element that carries the step's meaning in Signal. Elements with the
// `draw` class trace themselves in when their step is shown (see
// .engagement-draw in globals.css); everything else fades in with the panel.
//
// All six share a 120 × 120 box and are decorative — the step's name and body
// sit beside them, so each SVG is aria-hidden.

const base = {
  viewBox: '0 0 120 120',
  fill: 'none',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  className: 'w-full h-full',
}

const P = 'stroke-paper/80'
const DIM = 'stroke-paper/35'
const S = 'stroke-signal draw'

// 01 — Discovery: a lens over contour lines. Reading the ground before anything else.
function Discovery() {
  return (
    <svg {...base}>
      <path className={DIM} d="M12 92c14-8 26 6 42-2s30-10 54-2" />
      <path className={DIM} d="M12 76c12-7 22 4 34-2" />
      <path className={DIM} d="M12 104c18-6 34 6 52 0s28-6 44-2" />
      <path className={DIM} d="M70 58c10-4 22 2 38-4" />
      <circle className={S} pathLength={1} cx="52" cy="50" r="26" />
      <path className={DIM} d="M36 52c6-4 12 3 18 0s10-4 14-1" />
      <path className={DIM} d="M40 62c5-3 10 2 16 0" />
      <path className={P} d="M71 69l22 22" strokeWidth={5} />
      <path className={P} d="M52 30v6M52 64v6M32 50h6M66 50h6" />
    </svg>
  )
}

// 02 — Strategy: one route from where you are, three ways it could go, one chosen.
function Strategy() {
  return (
    <svg {...base}>
      <circle className={P} cx="18" cy="100" r="5" />
      <path className={P} d="M22 96c14-14 22-18 36-34" strokeDasharray="3 5" />
      <circle className={P} cx="60" cy="60" r="4" />
      <path className={DIM} d="M64 62c14 4 26 2 38-2" strokeDasharray="3 5" />
      <circle className={DIM} cx="104" cy="60" r="4" />
      <path className={DIM} d="M62 64c10 12 20 22 34 30" strokeDasharray="3 5" />
      <circle className={DIM} cx="98" cy="96" r="4" />
      <path className={S} pathLength={1} d="M62 56c10-12 22-22 36-30" />
      <circle className="stroke-signal fill-signal" cx="100" cy="24" r="4" />
      <path className={S} pathLength={1} d="M100 22V6l13 5-13 5" />
    </svg>
  )
}

// 03 — Creativity: a page wireframe with a pen curve drawn across it.
function Creativity() {
  return (
    <svg {...base}>
      <rect className={P} x="12" y="16" width="96" height="76" rx="6" />
      <path className={P} d="M12 30h96" />
      <path className={DIM} d="M20 23h.01M27 23h.01M34 23h.01" strokeWidth={3} />
      <rect className={DIM} x="22" y="40" width="32" height="22" rx="2" />
      <path className={DIM} d="M64 42h34M64 51h26M64 60h18" />
      <path className={S} pathLength={1} d="M22 84c18-24 44 18 74-10" />
      <rect className="stroke-signal" x="19" y="81" width="6" height="6" />
      <rect className="stroke-signal" x="93" y="71" width="6" height="6" />
      <path className="stroke-signal" d="M96 74l12-12" />
      <circle className="stroke-signal fill-signal" cx="109" cy="61" r="2.5" />
      <path className={P} d="M60 104l-6-12 18 6-7 2z" />
    </svg>
  )
}

// 04 — Execution: built, deployed and checked on every device before go-live.
function Execution() {
  return (
    <svg {...base}>
      <rect className={P} x="8" y="24" width="70" height="48" rx="4" />
      <path className={P} d="M43 72v10M30 82h26" />
      <rect className={P} x="82" y="42" width="28" height="50" rx="5" />
      <path className={P} d="M92 48h8" />
      <circle className={S} pathLength={1} cx="43" cy="48" r="13" />
      <path className={S} pathLength={1} d="M37 48l4.5 4.5L50 44" />
      <path className={S} pathLength={1} d="M90 68l4 4 8-8" />
      <path className={DIM} d="M8 100h102" strokeDasharray="2 6" />
    </svg>
  )
}

// 05 — Optimisation: two variants tested, the better one carried forward.
function Optimisation() {
  return (
    <svg {...base}>
      <path className={DIM} d="M14 102h94M14 102V14" />
      <rect className={P} x="28" y="62" width="20" height="40" rx="2" />
      <rect className="stroke-signal" x="60" y="38" width="20" height="64" rx="2" />
      <path className={DIM} d="M38 56v-6M70 32v-6" />
      <path className={S} pathLength={1} d="M20 84l24-14 20-16 34-30" />
      <path className={S} pathLength={1} d="M88 24h10v10" />
    </svg>
  )
}

// 06 — Reporting: a scheduled report, with the KPI that matters called out.
function Reporting() {
  return (
    <svg {...base}>
      <path className={P} d="M22 10h48l16 16v74a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" />
      <path className={P} d="M70 10v16h16" />
      <path className={DIM} d="M30 34h30M30 43h40M30 52h22" />
      <path className={P} d="M32 90V76M44 90V66M56 90V80" strokeWidth={5} />
      <circle className="stroke-ink fill-ink" cx="88" cy="86" r="22" />
      <circle className={DIM} cx="88" cy="86" r="16" />
      <circle
        className="stroke-signal"
        cx="88"
        cy="86"
        r="16"
        pathLength={100}
        strokeDasharray="72 100"
        strokeWidth={3}
        transform="rotate(-90 88 86)"
      />
      <path className={S} pathLength={1} d="M82 86l4 4 8-8" />
    </svg>
  )
}

export const engagementIcons: Record<string, () => JSX.Element> = {
  '01': Discovery,
  '02': Strategy,
  '03': Creativity,
  '04': Execution,
  '05': Optimisation,
  '06': Reporting,
}
