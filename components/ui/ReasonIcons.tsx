// Line drawings for the six reasons in WhyCompass (Decision 162).
//
// Same hand as the engagement icons in EngagementIcons.tsx: 1.5px strokes in
// Paper on a 120 × 120 box, with the element that carries the reason in Signal.
// Decorative — each reason's heading and body sit beside its drawing — so every
// SVG is aria-hidden. Ordered to match tr.whyCompass.reasons, which is the same
// in both languages.

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
const S = 'stroke-signal'
const DOT = 'stroke-signal fill-signal'

// Wired right — first time: a labelled lead, terminated into its port.
function WiredRight() {
  return (
    <svg {...base}>
      <rect className={P} x="14" y="62" width="40" height="30" rx="3" />
      <path className={DIM} d="M22 70h24M22 78h16" />
      <path className={P} d="M54 72h10a6 6 0 0 1 6 6a6 6 0 0 0 6 6h10" />
      <rect className={S} x="86" y="76" width="20" height="16" rx="2" />
      <path className={S} d="M90 92v4M96 92v4M102 92v4" />
      <path className={P} d="M30 62V40l10-10h28" />
      <rect className={S} x="68" y="24" width="30" height="12" rx="2" />
      <path className={S} d="M74 30h18" />
    </svg>
  )
}

// Plain-spoken expertise: a speech bubble holding a signed note.
function PlainSpoken() {
  return (
    <svg {...base}>
      <path className={P} d="M16 22h76a6 6 0 0 1 6 6v44a6 6 0 0 1-6 6H50L32 94V78H16a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z" />
      <path className={DIM} d="M24 38h48M24 48h56M24 58h30" />
      <path className={S} d="M62 64c6-8 10 6 16-2s8 2 12-2" />
    </svg>
  )
}

// In it for the long run: a year's loop with its four quarterly reviews.
function LongRun() {
  return (
    <svg {...base}>
      <circle className={DIM} cx="60" cy="60" r="40" />
      <path className={S} d="M60 20a40 40 0 1 1-34 19" />
      <path className={S} d="M20 30l6 9 9-6" />
      <circle className={DOT} cx="60" cy="20" r="4" />
      <circle className={P} cx="100" cy="60" r="4" />
      <circle className={P} cx="60" cy="100" r="4" />
      <circle className={P} cx="20" cy="60" r="4" />
      <path className={P} d="M60 44v16l11 7" />
    </svg>
  )
}

// Data-driven decisions: a gauge, read off its scale.
function DataDriven() {
  return (
    <svg {...base}>
      <path className={P} d="M16 84a44 44 0 0 1 88 0" />
      <path className={DIM} d="M24 84h8M88 84h8M60 40v8M29 53l6 6M91 53l-6 6" />
      <path className={S} d="M60 84l22-26" />
      <circle className={DOT} cx="60" cy="84" r="5" />
      <path className={DIM} d="M30 100h60" />
      <path className={P} d="M44 100v-4M60 100v-8M76 100v-6" />
    </svg>
  )
}

// Cloud-native capability: one cloud, redundant paths down to two regions.
function CloudNative() {
  return (
    <svg {...base}>
      <path className={P} d="M34 56a18 18 0 0 1 4-35 24 24 0 0 1 45 6 15 15 0 0 1 3 29z" />
      <path className={S} d="M48 56v14L30 84M72 56v14l18 14" />
      <path className={DIM} d="M48 70h24" />
      <rect className={P} x="16" y="84" width="28" height="18" rx="3" />
      <rect className={P} x="76" y="84" width="28" height="18" rx="3" />
      <circle className={DOT} cx="30" cy="93" r="2.5" />
      <circle className={DOT} cx="90" cy="93" r="2.5" />
    </svg>
  )
}

// Full-stack delivery: three layers, one line of accountability through them.
function FullStack() {
  return (
    <svg {...base}>
      <path className={P} d="M60 18l42 18-42 18-42-18z" />
      <path className={P} d="M18 56l42 18 42-18" />
      <path className={P} d="M18 76l42 18 42-18" />
      <path className={S} d="M60 10v100" />
      <circle className={DOT} cx="60" cy="10" r="3.5" />
      <circle className={DOT} cx="60" cy="110" r="3.5" />
    </svg>
  )
}

export const reasonIcons = [WiredRight, PlainSpoken, LongRun, DataDriven, CloudNative, FullStack]
