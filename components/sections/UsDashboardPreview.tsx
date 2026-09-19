'use client'
import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

/**
 * Example dashboard views for the US practice.
 *
 * These are illustrations, not screenshots of a client's dashboard, and the
 * section says so on the page. Nothing here is real trading data and none of it
 * belongs to anyone — inventing a named client's numbers and presenting them as
 * a real report would be the same mistake ClientProof exists to avoid.
 *
 * The tabs carry the argument the section is making: the panels are not a fixed
 * template, so showing three different configurations of the same service is the
 * demonstration. Switching tabs is the point, not decoration.
 *
 * Charts are single-hue Signal at varying opacity rather than a colour per
 * series. That is the right encoding for magnitude anyway, and it keeps the
 * section inside the six-colour palette — a series colour per bar would have
 * meant inventing hexes DESIGN.md does not carry. Values and labels wear the
 * Paper text tokens, never the mark colour.
 */

type Bar = { label: string; value: number; hint: string }

const REVENUE_BY_HOUR: Bar[] = [
  { label: '11a', value: 18, hint: '11:00 — $1,840' },
  { label: '12p', value: 42, hint: '12:00 — $4,290' },
  { label: '1p', value: 55, hint: '13:00 — $5,610' },
  { label: '2p', value: 31, hint: '14:00 — $3,160' },
  { label: '3p', value: 14, hint: '15:00 — $1,430' },
  { label: '4p', value: 12, hint: '16:00 — $1,220' },
  { label: '5p', value: 28, hint: '17:00 — $2,850' },
  { label: '6p', value: 61, hint: '18:00 — $6,220' },
  { label: '7p', value: 88, hint: '19:00 — $8,970' },
  { label: '8p', value: 79, hint: '20:00 — $8,050' },
  { label: '9p', value: 47, hint: '21:00 — $4,790' },
  { label: '10p', value: 22, hint: '22:00 — $2,240' },
]

const MARGIN_BY_ITEM: Bar[] = [
  { label: 'Burger', value: 71, hint: 'Burger — 71% margin' },
  { label: 'Fries', value: 64, hint: 'Fries — 64% margin' },
  { label: 'Pasta', value: 52, hint: 'Pasta — 52% margin' },
  { label: 'Steak', value: 34, hint: 'Steak — 34% margin' },
  { label: 'Specials', value: 21, hint: 'Specials — 21% margin' },
]

const SITES: Bar[] = [
  { label: 'Pearl', value: 82, hint: 'Pearl District — $82.4k' },
  { label: 'Alberta', value: 64, hint: 'Alberta — $64.1k' },
  { label: 'Division', value: 58, hint: 'Division — $58.3k' },
  { label: 'Hawthorne', value: 39, hint: 'Hawthorne — $39.7k' },
]

/** Bar with the top corners rounded and the base anchored flat to the axis. */
function barPath(x: number, y: number, w: number, baseline: number, r = 3) {
  const radius = Math.min(r, w / 2, baseline - y)
  return `M${x},${baseline} L${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + w - radius},${y} Q${x + w},${y} ${x + w},${y + radius} L${x + w},${baseline} Z`
}

function ColumnChart({ data, caption }: { data: Bar[]; caption: string }) {
  const max = Math.max(...data.map((d) => d.value))
  const W = 480
  const H = 170
  const baseline = 132
  const plot = 108
  // 2px of surface between fills, per the mark spec.
  const step = W / data.length
  const barW = step - 6

  return (
    <figure className="m-0">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={caption}>
        {/* Recessive baseline. No gridlines: the labels below carry the scale. */}
        <line x1="0" y1={baseline} x2={W} y2={baseline} stroke="rgba(244,242,236,0.14)" strokeWidth="1" />
        {data.map((d, i) => {
          const h = (d.value / max) * plot
          const x = i * step + 3
          const y = baseline - h
          // Opacity carries magnitude — one hue, light to dark, never a hue per bar.
          const opacity = 0.35 + (d.value / max) * 0.55
          return (
            <g key={d.label}>
              <path d={barPath(x, y, barW, baseline)} fill="#2BB3E6" fillOpacity={opacity}>
                <title>{d.hint}</title>
              </path>
              <text
                x={x + barW / 2}
                y={baseline + 16}
                textAnchor="middle"
                fill="rgba(244,242,236,0.40)"
                fontSize="10"
                fontFamily="monospace"
              >
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>
      <figcaption className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mt-3">
        {caption}
      </figcaption>
    </figure>
  )
}

function RowChart({ data, caption, unit }: { data: Bar[]; caption: string; unit: string }) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <figure className="m-0">
      <ul className="flex flex-col gap-3 m-0 p-0 list-none">
        {data.map((d) => (
          <li key={d.label} className="flex items-center gap-4" title={d.hint}>
            <span className="font-barlow text-[13px] text-paper/60 w-[72px] shrink-0 truncate">
              {d.label}
            </span>
            <span className="flex-1 h-[10px] rounded-sm bg-paper/[0.06] overflow-hidden">
              <span
                className="block h-full rounded-sm bg-signal"
                style={{ width: `${(d.value / max) * 100}%`, opacity: 0.4 + (d.value / max) * 0.5 }}
              />
            </span>
            {/* Value in a text token, not the mark colour. */}
            <span className="font-jetbrains text-[11px] text-paper/50 w-[48px] text-right shrink-0">
              {d.value}
              {unit}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mt-4">
        {caption}
      </figcaption>
    </figure>
  )
}

function Tile({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="rounded-lg border border-paper/[0.08] bg-paper/[0.03] px-5 py-4">
      <p className="font-archivo font-light text-paper text-[30px] leading-none tracking-[-0.02em] m-0">
        {value}
      </p>
      <p className="font-jetbrains text-[10px] text-paper/40 uppercase tracking-eyebrow mt-3 m-0">
        {label}
      </p>
      {note && (
        <p className="font-barlow text-[12px] text-paper/35 mt-2 m-0 leading-snug">{note}</p>
      )}
    </div>
  )
}

const VIEWS = [
  {
    key: 'service',
    tab: 'Daily service',
    heading: 'One location, the shift you just finished.',
    body: 'The view a single-site operator opens at close. Revenue by hour against who was on, with the two numbers that decide the week sitting above it.',
    render: () => (
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Tile value="$49.6k" label="Net sales" note="Week to date" />
          <Tile value="28.4%" label="Labor of sales" />
          <Tile value="61.2%" label="Prime cost" />
          <Tile value="$38.10" label="Average check" />
        </div>
        <ColumnChart data={REVENUE_BY_HOUR} caption="Revenue by hour · Friday" />
      </div>
    ),
  },
  {
    key: 'custom',
    tab: 'Custom metrics',
    heading: 'The measures your business runs on.',
    body: 'Tier 2 is where the panels stop being standard. Item-level margin against the costs you enter, labor split the way your dayparts actually fall, and any measure you can define.',
    render: () => (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <RowChart data={MARGIN_BY_ITEM} caption="Margin by item · against entered costs" unit="%" />
        <div className="grid grid-cols-2 gap-3">
          <Tile value="22.1%" label="Labor · lunch" />
          <Tile value="31.8%" label="Labor · dinner" />
          <Tile value="$4,120" label="Tip pool" note="Distributed by hours worked" />
          <Tile value="18" label="Items below target" />
        </div>
      </div>
    ),
  },
  {
    key: 'group',
    tab: 'Multi-location',
    heading: 'Four sites, read as one business.',
    body: 'Tier 3 rolls the sites up and sets them against each other, so a site drifting from the group shows as a number rather than a feeling.',
    render: () => (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <RowChart data={SITES} caption="Net sales by site · period to date" unit="k" />
        <div className="grid grid-cols-2 gap-3">
          <Tile value="$244k" label="Group net sales" />
          <Tile value="59.8%" label="Group prime cost" />
          <Tile value="+4.2%" label="Best site vs group" />
          <Tile value="-6.7%" label="Weakest vs group" />
        </div>
      </div>
    ),
  },
]

export default function UsDashboardPreview({
  eyebrow,
  heading,
  intro,
  disclaimer,
}: {
  eyebrow: string
  heading: string
  intro: string
  disclaimer: string
}) {
  const [active, setActive] = useState(VIEWS[0].key)
  const view = VIEWS.find((v) => v.key === active) ?? VIEWS[0]

  return (
    <section id="dashboards" className="py-20 lg:py-28 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>

        <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[32px] md:text-[44px] leading-none mb-6 max-w-[720px]">
          {heading}
        </h2>

        <p className="font-barlow text-[17px] text-paper/60 max-w-[680px] mb-10 leading-relaxed">
          {intro}
        </p>

        {/* Tabs. The switch is the argument: same service, three configurations. */}
        <div role="tablist" aria-label="Example dashboard views" className="flex flex-wrap gap-2 mb-8">
          {VIEWS.map((v) => {
            const selected = v.key === active
            return (
              <button
                key={v.key}
                role="tab"
                id={`tab-${v.key}`}
                aria-selected={selected}
                aria-controls={`panel-${v.key}`}
                onClick={() => setActive(v.key)}
                className={`font-archivo text-[14px] px-5 py-2.5 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent ${
                  selected
                    ? 'border-signal/50 bg-paper/[0.06] text-paper'
                    : 'border-paper/[0.12] text-paper/60 hover:text-paper hover:border-paper/25'
                }`}
              >
                {v.tab}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${view.key}`}
          aria-labelledby={`tab-${view.key}`}
          className="rounded-xl border border-paper/[0.10] bg-paper/[0.02] p-6 lg:p-9"
        >
          <h3 className="font-archivo font-medium text-paper text-[21px] tracking-[-0.02em] m-0">
            {view.heading}
          </h3>
          <p className="font-barlow text-[15px] text-paper/55 leading-relaxed mt-3 mb-8 max-w-[620px]">
            {view.body}
          </p>
          {view.render()}
        </div>

        <p className="font-jetbrains text-[11px] text-paper/35 uppercase tracking-eyebrow mt-5 m-0">
          {disclaimer}
        </p>
      </div>
    </section>
  )
}
