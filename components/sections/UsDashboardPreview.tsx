'use client'
import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import MockWindow from '@/components/ui/MockWindow'

/**
 * Example dashboard views for the US practice, shown inside a browser frame.
 *
 * Every figure here is invented, and the section says so on the page. This site
 * carries no client data and no permission to show any — the same rule that
 * keeps ClientProof empty rather than filled with a plausible quote. A dashboard
 * of invented numbers presented as a real client report would be that mistake
 * with more digits.
 *
 * The three views differ in *layout*, not just in data. That is deliberate: the
 * section claims the panels are built around the business rather than issued as
 * a template, and three differently-shaped screens demonstrate that where three
 * populations of the same grid would quietly contradict it.
 *
 * The date range control changes the figures. It is the smallest piece of real
 * behaviour that makes the frame read as an application rather than a picture of
 * one — a reader who clicks it and sees nothing move has been shown a screenshot.
 *
 * Charts are single-hue Signal at varying opacity, never a colour per series.
 * That is the right encoding for magnitude and it is also the only option inside
 * the six-colour palette. Values and labels wear the Paper text tokens.
 */

type Range = '1d' | '7d' | '30d'
const RANGES: { key: Range; label: string }[] = [
  { key: '1d', label: 'Today' },
  { key: '7d', label: '7 days' },
  { key: '30d', label: '30 days' },
]

type Bar = { label: string; value: number; hint: string }

// ── Charts ──────────────────────────────────────────────────────────────────

/** Bar with rounded top corners, base anchored flat to the axis. */
function barPath(x: number, y: number, w: number, baseline: number, r = 3) {
  const radius = Math.min(r, w / 2, Math.max(baseline - y, 0))
  return `M${x},${baseline} L${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + w - radius},${y} Q${x + w},${y} ${x + w},${y + radius} L${x + w},${baseline} Z`
}

function ColumnChart({ data, height = 150 }: { data: Bar[]; height?: number }) {
  const max = Math.max(...data.map((d) => d.value))
  const W = 520
  const baseline = height - 22
  const step = W / data.length
  const barW = step - 6

  return (
    <svg viewBox={`0 0 ${W} ${height}`} className="w-full h-auto" role="img" aria-label="Revenue by hour">
      <line x1="0" y1={baseline} x2={W} y2={baseline} stroke="rgba(244,242,236,0.14)" strokeWidth="1" />
      {data.map((d, i) => {
        const h = (d.value / max) * (baseline - 8)
        const x = i * step + 3
        const y = baseline - h
        return (
          <g key={d.label}>
            <path d={barPath(x, y, barW, baseline)} fill="#2BB3E6" fillOpacity={0.35 + (d.value / max) * 0.55}>
              <title>{d.hint}</title>
            </path>
            <text x={x + barW / 2} y={baseline + 15} textAnchor="middle" fill="rgba(244,242,236,0.38)" fontSize="9" fontFamily="monospace">
              {d.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function TrendChart({ data }: { data: Bar[] }) {
  const W = 520
  const H = 170
  const pad = { t: 12, b: 24, l: 4, r: 4 }
  const max = Math.max(...data.map((d) => d.value)) * 1.12
  const min = Math.min(...data.map((d) => d.value)) * 0.85
  const x = (i: number) => pad.l + (i * (W - pad.l - pad.r)) / (data.length - 1)
  const y = (v: number) => pad.t + (1 - (v - min) / (max - min)) * (H - pad.t - pad.b)

  const line = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(d.value)}`).join(' ')
  const area = `${line} L${x(data.length - 1)},${H - pad.b} L${x(0)},${H - pad.b} Z`
  const peak = data.reduce((a, b) => (b.value > a.value ? b : a))
  const peakIndex = data.indexOf(peak)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Sales trend">
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2BB3E6" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2BB3E6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1={H - pad.b} x2={W} y2={H - pad.b} stroke="rgba(244,242,236,0.14)" strokeWidth="1" />
      <path d={area} fill="url(#trendFill)" />
      <path d={line} fill="none" stroke="#2BB3E6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {/* One direct label, on the peak. Never a number on every point. */}
      <circle cx={x(peakIndex)} cy={y(peak.value)} r="4.5" fill="#0B0E10" stroke="#2BB3E6" strokeWidth="2" />
      <text x={x(peakIndex)} y={y(peak.value) - 12} textAnchor="middle" fill="rgba(244,242,236,0.75)" fontSize="10" fontFamily="monospace">
        {peak.hint}
      </text>
      {data.map((d, i) => (
        <g key={d.label}>
          <circle cx={x(i)} cy={y(d.value)} r="9" fill="transparent">
            <title>{`${d.label} — ${d.hint}`}</title>
          </circle>
          {i % Math.ceil(data.length / 7) === 0 && (
            <text x={x(i)} y={H - pad.b + 15} textAnchor="middle" fill="rgba(244,242,236,0.38)" fontSize="9" fontFamily="monospace">
              {d.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}

function RingGauge({ value, target, label }: { value: number; target: number; label: string }) {
  const r = 46
  const c = 2 * Math.PI * r
  const pct = Math.min(value / 100, 1)
  return (
    <div className="flex flex-col items-center justify-center h-full py-2">
      <svg viewBox="0 0 120 120" className="w-[124px] h-[124px]" role="img" aria-label={`${label}: ${value}%`}>
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(244,242,236,0.08)" strokeWidth="9" />
        <circle
          cx="60" cy="60" r={r} fill="none" stroke="#2BB3E6" strokeWidth="9" strokeLinecap="round"
          strokeDasharray={`${pct * c} ${c}`} transform="rotate(-90 60 60)"
        />
        <text x="60" y="58" textAnchor="middle" fill="#F4F2EC" fontSize="24" fontFamily="sans-serif" fontWeight="300">
          {value}%
        </text>
        <text x="60" y="76" textAnchor="middle" fill="rgba(244,242,236,0.40)" fontSize="9" fontFamily="monospace">
          TARGET {target}%
        </text>
      </svg>
      <p className="font-jetbrains text-[10px] text-paper/40 uppercase tracking-eyebrow mt-3 m-0">{label}</p>
    </div>
  )
}

function RowBars({ data, unit }: { data: Bar[]; unit: string }) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <ul className="flex flex-col gap-3 m-0 p-0 list-none">
      {data.map((d) => (
        <li key={d.label} className="flex items-center gap-3" title={d.hint}>
          <span className="font-barlow text-[13px] text-paper/60 w-[76px] shrink-0 truncate">{d.label}</span>
          <span className="flex-1 h-[9px] rounded-sm bg-paper/[0.06] overflow-hidden">
            <span className="block h-full rounded-sm bg-signal" style={{ width: `${(d.value / max) * 100}%`, opacity: 0.4 + (d.value / max) * 0.5 }} />
          </span>
          <span className="font-jetbrains text-[11px] text-paper/50 w-[46px] text-right shrink-0">
            {d.value}{unit}
          </span>
        </li>
      ))}
    </ul>
  )
}

// ── Panel furniture ─────────────────────────────────────────────────────────

function Panel({ title, action, children, className = '' }: { title: string; action?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-paper/[0.08] bg-paper/[0.02] p-4 ${className}`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="font-jetbrains text-[10px] text-paper/40 uppercase tracking-eyebrow m-0">{title}</p>
        {action && <span className="font-jetbrains text-[9px] text-paper/25 uppercase tracking-eyebrow">{action}</span>}
      </div>
      {children}
    </div>
  )
}

function Kpi({ value, label, delta }: { value: string; label: string; delta?: string }) {
  return (
    <div className="rounded-lg border border-paper/[0.08] bg-paper/[0.03] px-4 py-3.5">
      <p className="font-archivo font-light text-paper text-[26px] leading-none tracking-[-0.02em] m-0">{value}</p>
      <div className="flex items-baseline gap-2 mt-2.5">
        <p className="font-jetbrains text-[9px] text-paper/40 uppercase tracking-eyebrow m-0">{label}</p>
        {delta && <span className="font-jetbrains text-[9px] text-signal m-0">{delta}</span>}
      </div>
    </div>
  )
}

// ── Mock data, by range ─────────────────────────────────────────────────────

const HOURS = ['11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p']
const hourly = (vals: number[], scale: number): Bar[] =>
  HOURS.map((h, i) => ({ label: h, value: vals[i], hint: `${h} — $${(vals[i] * scale).toLocaleString()}` }))

const DAILY: Record<Range, { kpis: { value: string; label: string; delta?: string }[]; bars: Bar[]; staff: Bar[] }> = {
  '1d': {
    kpis: [
      { value: '$8.4k', label: 'Net sales', delta: '+6.1%' },
      { value: '27.9%', label: 'Labor of sales' },
      { value: '60.4%', label: 'Prime cost' },
      { value: '$37.20', label: 'Average check' },
    ],
    bars: hourly([18, 42, 55, 31, 14, 12, 28, 61, 88, 79, 47, 22], 102),
    staff: [
      { label: 'M. Reyes', value: 92, hint: 'M. Reyes — $2,140 in sales' },
      { label: 'J. Okafor', value: 74, hint: 'J. Okafor — $1,720 in sales' },
      { label: 'T. Lindqvist', value: 58, hint: 'T. Lindqvist — $1,350 in sales' },
      { label: 'A. Duarte', value: 41, hint: 'A. Duarte — $950 in sales' },
    ],
  },
  '7d': {
    kpis: [
      { value: '$49.6k', label: 'Net sales', delta: '+3.4%' },
      { value: '28.4%', label: 'Labor of sales' },
      { value: '61.2%', label: 'Prime cost' },
      { value: '$38.10', label: 'Average check' },
    ],
    bars: hourly([22, 48, 61, 34, 17, 13, 31, 66, 94, 83, 52, 25], 604),
    staff: [
      { label: 'M. Reyes', value: 88, hint: 'M. Reyes — $12,480 in sales' },
      { label: 'J. Okafor', value: 79, hint: 'J. Okafor — $11,200 in sales' },
      { label: 'T. Lindqvist', value: 61, hint: 'T. Lindqvist — $8,640 in sales' },
      { label: 'A. Duarte', value: 47, hint: 'A. Duarte — $6,670 in sales' },
    ],
  },
  '30d': {
    kpis: [
      { value: '$211k', label: 'Net sales', delta: '+8.9%' },
      { value: '29.1%', label: 'Labor of sales' },
      { value: '62.0%', label: 'Prime cost' },
      { value: '$36.80', label: 'Average check' },
    ],
    bars: hourly([25, 51, 58, 37, 19, 16, 34, 69, 91, 86, 55, 29], 2410),
    staff: [
      { label: 'M. Reyes', value: 84, hint: 'M. Reyes — $52,900 in sales' },
      { label: 'J. Okafor', value: 81, hint: 'J. Okafor — $51,000 in sales' },
      { label: 'T. Lindqvist', value: 66, hint: 'T. Lindqvist — $41,500 in sales' },
      { label: 'A. Duarte', value: 52, hint: 'A. Duarte — $32,700 in sales' },
    ],
  },
}

const MARGIN: Record<Range, Bar[]> = {
  '1d': [
    { label: 'Burger', value: 73, hint: 'Burger — 73% margin' },
    { label: 'Fries', value: 66, hint: 'Fries — 66% margin' },
    { label: 'Pasta', value: 54, hint: 'Pasta — 54% margin' },
    { label: 'Steak', value: 36, hint: 'Steak — 36% margin' },
    { label: 'Specials', value: 24, hint: 'Specials — 24% margin' },
  ],
  '7d': [
    { label: 'Burger', value: 71, hint: 'Burger — 71% margin' },
    { label: 'Fries', value: 64, hint: 'Fries — 64% margin' },
    { label: 'Pasta', value: 52, hint: 'Pasta — 52% margin' },
    { label: 'Steak', value: 34, hint: 'Steak — 34% margin' },
    { label: 'Specials', value: 21, hint: 'Specials — 21% margin' },
  ],
  '30d': [
    { label: 'Burger', value: 69, hint: 'Burger — 69% margin' },
    { label: 'Fries', value: 63, hint: 'Fries — 63% margin' },
    { label: 'Pasta', value: 49, hint: 'Pasta — 49% margin' },
    { label: 'Steak', value: 31, hint: 'Steak — 31% margin' },
    { label: 'Specials', value: 18, hint: 'Specials — 18% margin' },
  ],
}

const PRIME: Record<Range, number> = { '1d': 60, '7d': 61, '30d': 62 }
const LABOR: Record<Range, { lunch: string; dinner: string; tips: string; flagged: string }> = {
  '1d': { lunch: '21.4%', dinner: '30.9%', tips: '$610', flagged: '4' },
  '7d': { lunch: '22.1%', dinner: '31.8%', tips: '$4,120', flagged: '18' },
  '30d': { lunch: '23.0%', dinner: '32.6%', tips: '$17,340', flagged: '61' },
}

const SITE_ROWS: Record<Range, { site: string; sales: string; prime: string; labor: string; vs: string; bar: number }[]> = {
  '1d': [
    { site: 'Pearl District', sales: '$11.9k', prime: '58.1%', labor: '26.9%', vs: '+5.2%', bar: 88 },
    { site: 'Alberta', sales: '$9.2k', prime: '60.4%', labor: '28.8%', vs: '+1.1%', bar: 68 },
    { site: 'Division', sales: '$8.4k', prime: '61.7%', labor: '29.6%', vs: '-0.8%', bar: 62 },
    { site: 'Hawthorne', sales: '$5.6k', prime: '64.9%', labor: '33.1%', vs: '-7.4%', bar: 41 },
  ],
  '7d': [
    { site: 'Pearl District', sales: '$82.4k', prime: '58.6%', labor: '27.2%', vs: '+4.2%', bar: 82 },
    { site: 'Alberta', sales: '$64.1k', prime: '60.1%', labor: '28.5%', vs: '+0.9%', bar: 64 },
    { site: 'Division', sales: '$58.3k', prime: '61.4%', labor: '29.9%', vs: '-1.2%', bar: 58 },
    { site: 'Hawthorne', sales: '$39.7k', prime: '65.2%', labor: '33.4%', vs: '-6.7%', bar: 39 },
  ],
  '30d': [
    { site: 'Pearl District', sales: '$344k', prime: '59.2%', labor: '27.9%', vs: '+3.6%', bar: 79 },
    { site: 'Alberta', sales: '$271k', prime: '60.8%', labor: '29.0%', vs: '+0.4%', bar: 62 },
    { site: 'Division', sales: '$249k', prime: '62.0%', labor: '30.4%', vs: '-1.9%', bar: 57 },
    { site: 'Hawthorne', sales: '$168k', prime: '66.0%', labor: '34.0%', vs: '-8.1%', bar: 38 },
  ],
}

const TREND: Record<Range, Bar[]> = {
  '1d': ['6a', '9a', '12p', '3p', '6p', '9p', '12a'].map((l, i) => {
    const v = [4, 12, 34, 22, 61, 48, 14][i]
    return { label: l, value: v, hint: `$${(v * 210).toLocaleString()}` }
  }),
  '7d': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((l, i) => {
    const v = [28, 31, 36, 44, 68, 79, 52][i]
    return { label: l, value: v, hint: `$${(v * 620).toLocaleString()}` }
  }),
  '30d': Array.from({ length: 15 }, (_, i) => {
    const v = [30, 34, 31, 39, 46, 71, 58, 33, 37, 35, 42, 49, 76, 64, 41][i]
    return { label: `${i * 2 + 1}`, value: v, hint: `$${(v * 1180).toLocaleString()}` }
  }),
}

// ── The three screens ───────────────────────────────────────────────────────

const VIEWS = [
  {
    key: 'service',
    tab: 'Daily service',
    title: 'Service — Pearl District',
    address: 'reports.compass-its.com/pearl-district',
    nav: ['Overview', 'Service', 'Labor', 'Items', 'Exports'],
    activeNav: 'Service',
    heading: 'One location, the shift you just finished.',
    body: 'The view a single-site operator opens at close. Revenue by hour against who was on, with the two numbers that decide the week sitting above it.',
    render: (r: Range) => {
      const d = DAILY[r]
      return (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {d.kpis.map((k) => <Kpi key={k.label} {...k} />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.9fr_1fr] gap-3">
            <Panel title="Revenue by hour" action="Hover for detail">
              <ColumnChart data={d.bars} />
            </Panel>
            <Panel title="Sales by server">
              <RowBars data={d.staff} unit="" />
            </Panel>
          </div>
        </div>
      )
    },
  },
  {
    key: 'custom',
    tab: 'Custom metrics',
    title: 'Cost control — custom',
    address: 'reports.compass-its.com/cost-control',
    nav: ['Overview', 'Prime cost', 'Margin', 'Tips', 'Definitions'],
    activeNav: 'Prime cost',
    heading: 'The measures your business runs on.',
    body: 'Tier 2 is where the panels stop being standard. Item-level margin against the costs you enter, labor split the way your dayparts actually fall, and any measure you can define.',
    render: (r: Range) => {
      const l = LABOR[r]
      return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-3">
          <div className="flex flex-col gap-3">
            <Panel title="Prime cost vs target">
              <RingGauge value={PRIME[r]} target={58} label="Food plus labor" />
            </Panel>
            <div className="grid grid-cols-2 gap-3">
              <Kpi value={l.lunch} label="Labor · lunch" />
              <Kpi value={l.dinner} label="Labor · dinner" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Panel title="Margin by item" action="Against entered costs">
              <RowBars data={MARGIN[r]} unit="%" />
            </Panel>
            <div className="grid grid-cols-2 gap-3">
              <Kpi value={l.tips} label="Tip pool" />
              <Kpi value={l.flagged} label="Items below target" />
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'group',
    tab: 'Multi-location',
    title: 'Group — four sites',
    address: 'reports.compass-its.com/group',
    nav: ['Group', 'Sites', 'Benchmarks', 'Roll-up', 'Permissions'],
    activeNav: 'Sites',
    heading: 'Four sites, read as one business.',
    body: 'Tier 3 rolls the sites up and sets them against each other, so a site drifting from the group shows as a number rather than a feeling.',
    render: (r: Range) => (
      <div className="flex flex-col gap-3">
        <Panel title="Group sales trend" action="Peak labelled">
          <TrendChart data={TREND[r]} />
        </Panel>
        <Panel title="Site comparison" action="Sorted by net sales">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[460px] border-collapse">
              <thead>
                <tr>
                  {['Site', 'Net sales', 'Prime', 'Labor', 'vs group'].map((h) => (
                    <th key={h} className="text-start font-jetbrains text-[9px] text-paper/30 uppercase tracking-eyebrow font-medium pb-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SITE_ROWS[r].map((row) => (
                  <tr key={row.site} className="border-t border-paper/[0.06]">
                    <td className="py-2.5 pe-3">
                      <div className="flex items-center gap-2.5">
                        <span aria-hidden className="h-[6px] rounded-sm bg-signal shrink-0" style={{ width: `${Math.max(row.bar * 0.34, 8)}px`, opacity: 0.4 + row.bar / 220 }} />
                        <span className="font-barlow text-[13px] text-paper/75 whitespace-nowrap">{row.site}</span>
                      </div>
                    </td>
                    <td className="py-2.5 pe-3 font-jetbrains text-[11px] text-paper/65">{row.sales}</td>
                    <td className="py-2.5 pe-3 font-jetbrains text-[11px] text-paper/50">{row.prime}</td>
                    <td className="py-2.5 pe-3 font-jetbrains text-[11px] text-paper/50">{row.labor}</td>
                    <td className="py-2.5 font-jetbrains text-[11px] text-paper/65">{row.vs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    ),
  },
]

// ── Section ─────────────────────────────────────────────────────────────────

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
  const [index, setIndex] = useState(0)
  const [range, setRange] = useState<Range>('7d')
  const view = VIEWS[index]

  const go = (delta: number) => setIndex((i) => (i + delta + VIEWS.length) % VIEWS.length)

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

        {/* Cycle control. Arrows for moving through, names for going straight to
            one — the arrows carry the "there are more of these" signal that a
            row of tabs alone does not. */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous dashboard"
              className="w-9 h-9 rounded-lg border border-paper/[0.12] text-paper/60 hover:text-signal hover:border-signal/40 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next dashboard"
              className="w-9 h-9 rounded-lg border border-paper/[0.12] text-paper/60 hover:text-signal hover:border-signal/40 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {VIEWS.map((v, i) => (
              <button
                key={v.key}
                onClick={() => setIndex(i)}
                aria-current={i === index}
                className={`font-archivo text-[13px] px-4 py-2 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent ${
                  i === index
                    ? 'border-signal/50 bg-paper/[0.06] text-paper'
                    : 'border-paper/[0.12] text-paper/55 hover:text-paper hover:border-paper/25'
                }`}
              >
                {v.tab}
              </button>
            ))}
          </div>

          <span className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow ms-auto">
            {index + 1} / {VIEWS.length}
          </span>
        </div>

        <MockWindow address={view.address} badge="Synced 2 min ago">
          <div className="flex">
            {/* Sidebar. The items change per screen — the sections a group
                operator needs are not the ones a single site needs, which is the
                same argument the section is making in miniature. */}
            <aside className="hidden md:flex flex-col gap-1 w-[164px] shrink-0 border-e border-paper/[0.08] bg-paper/[0.02] p-3">
              <div className="flex items-center gap-2 px-2 pb-3 mb-1 border-b border-paper/[0.06]">
                <span aria-hidden className="w-[18px] h-[18px] rounded bg-signal/25 border border-signal/40" />
                <span className="font-archivo text-[12px] text-paper/70 truncate">Compass</span>
              </div>
              {view.nav.map((item) => (
                <span
                  key={item}
                  className={`font-barlow text-[12.5px] rounded-md px-2.5 py-[7px] ${
                    item === view.activeNav ? 'bg-signal/10 text-signal' : 'text-paper/45'
                  }`}
                >
                  {item}
                </span>
              ))}
            </aside>

            <div className="flex-1 min-w-0 p-4 lg:p-5">
              {/* App header: title left, working range control right. */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="min-w-0">
                  <p className="font-archivo font-medium text-paper text-[15px] m-0 truncate">{view.title}</p>
                  <p className="font-jetbrains text-[9px] text-paper/35 uppercase tracking-eyebrow mt-1.5 m-0">
                    {RANGES.find((x) => x.key === range)?.label} · all dayparts
                  </p>
                </div>

                <div className="flex items-center gap-1 rounded-lg border border-paper/[0.10] p-1">
                  {RANGES.map((x) => (
                    <button
                      key={x.key}
                      onClick={() => setRange(x.key)}
                      aria-pressed={range === x.key}
                      className={`font-jetbrains text-[10px] uppercase tracking-eyebrow px-2.5 py-1.5 rounded-md transition-colors ${
                        range === x.key ? 'bg-signal/15 text-signal' : 'text-paper/40 hover:text-paper/70'
                      }`}
                    >
                      {x.label}
                    </button>
                  ))}
                </div>
              </div>

              {view.render(range)}
            </div>
          </div>
        </MockWindow>

        {/* The screen's own caption, outside the frame. */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mt-6">
          <div className="max-w-[680px]">
            <h3 className="font-archivo font-medium text-paper text-[19px] tracking-[-0.02em] m-0">
              {view.heading}
            </h3>
            <p className="font-barlow text-[15px] text-paper/55 leading-relaxed mt-2 m-0">
              {view.body}
            </p>
          </div>
        </div>

        <p className="font-jetbrains text-[11px] text-paper/35 uppercase tracking-eyebrow mt-6 m-0">
          {disclaimer}
        </p>
      </div>
    </section>
  )
}
