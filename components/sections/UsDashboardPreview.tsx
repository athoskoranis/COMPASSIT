'use client'
import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import MockWindow from '@/components/ui/MockWindow'

/**
 * Five example dashboards, each designed as if it came from a different company.
 *
 * ── Why this ignores DESIGN.md ──────────────────────────────────────────────
 *
 * Everything inside the window frame is deliberately outside the Compass design
 * system: other palettes, other fonts, other corner radii, other densities.
 *
 * That is the point rather than an oversight. The frame is a window into the
 * reporting a client ends up with, and dashboards built in Ink and Signal would
 * read as five screenshots of one Compass product — which is the opposite of
 * what the section claims. The variety IS the argument: the work is shaped to
 * the business, so five businesses get five different screens.
 *
 * Logged as Decision 108. The exception stops at the window border — the section
 * heading, the copy, the cycle controls and the disclaimer are all Compass
 * tokens, because those are the site speaking rather than the product.
 *
 * ── Everything here is invented ─────────────────────────────────────────────
 *
 * No client data, no client permission, no real hosts. The disclaimer under the
 * frame says so and CONTENT.md marks it required. The same rule keeps
 * ClientProof empty rather than filled with a plausible quote.
 */

type Range = '1d' | '7d' | '30d'
const RANGES: { key: Range; label: string }[] = [
  { key: '1d', label: 'Today' },
  { key: '7d', label: '7 days' },
  { key: '30d', label: '30 days' },
]
const MULT: Record<Range, number> = { '1d': 1, '7d': 6.4, '30d': 26.5 }

const money = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${Math.round(n)}`

/** Small deterministic wobble so each range looks measured rather than scaled. */
const wobble = (base: number, r: Range, spread = 1.8) =>
  +(base + (r === '1d' ? -spread : r === '30d' ? spread : 0)).toFixed(1)

// ── Generic chart primitives, coloured by whoever calls them ────────────────

function Area({ pts, color, fill, h = 90 }: { pts: number[]; color: string; fill: string; h?: number }) {
  const W = 300
  const max = Math.max(...pts) * 1.15
  const min = Math.min(...pts) * 0.8
  const x = (i: number) => (i * W) / (pts.length - 1)
  const y = (v: number) => h - ((v - min) / (max - min)) * (h - 10) - 4
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i)},${y(p)}`).join(' ')
  const id = `g${color.replace(/[^a-z0-9]/gi, '')}`
  return (
    <svg viewBox={`0 0 ${W} ${h}`} className="w-full h-auto" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} stopOpacity="0.45" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L${W},${h} L0,${h} Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Spark({ pts, color, h = 28 }: { pts: number[]; color: string; h?: number }) {
  const W = 90
  const max = Math.max(...pts)
  const min = Math.min(...pts)
  const d = pts
    .map((p, i) => `${i ? 'L' : 'M'}${(i * W) / (pts.length - 1)},${h - ((p - min) / (max - min || 1)) * (h - 6) - 3}`)
    .join(' ')
  return (
    <svg viewBox={`0 0 ${W} ${h}`} width={W} height={h} aria-hidden>
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cols({ pts, labels, color, h = 108, radius = 3 }: { pts: number[]; labels?: string[]; color: string; h?: number; radius?: number }) {
  const W = 300
  const max = Math.max(...pts)
  const step = W / pts.length
  const bw = step - 4
  const base = labels ? h - 14 : h
  return (
    <svg viewBox={`0 0 ${W} ${h}`} className="w-full h-auto" aria-hidden>
      {pts.map((p, i) => {
        const bh = (p / max) * (base - 4)
        return (
          <g key={i}>
            <rect x={i * step + 2} y={base - bh} width={bw} height={bh} rx={radius} fill={color} opacity={0.4 + (p / max) * 0.6} />
            {labels && (
              <text x={i * step + 2 + bw / 2} y={h - 2} textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.5">
                {labels[i]}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

function Donut({ pct, color, track, label, sub }: { pct: number; color: string; track: string; label: string; sub?: string }) {
  const r = 38
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 100 100" className="w-[104px] h-[104px]" aria-hidden>
      <circle cx="50" cy="50" r={r} fill="none" stroke={track} strokeWidth="10" />
      <circle
        cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * c} ${c}`} transform="rotate(-90 50 50)"
      />
      <text x="50" y="49" textAnchor="middle" fontSize="19" fill="currentColor" fontWeight="600">{label}</text>
      {sub && <text x="50" y="64" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.55">{sub}</text>}
    </svg>
  )
}

// ── The five dashboards ─────────────────────────────────────────────────────

type Dash = {
  key: string
  name: string
  style: string
  address: string
  badge: string
  render: (r: Range) => React.ReactNode
}

const SANS = 'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif'
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace'
const SERIF = 'Georgia, Cambria, Times New Roman, serif'

/**
 * Every dashboard carries at least one panel that states a conclusion with money
 * attached, not just a chart. That is the whole difference between this and the
 * reporting the POS already ships free: an owner does not pay a retainer to be
 * shown what happened, they pay to be told what it cost and what to do about it.
 */

function Delta({ v, good, mono }: { v: string; good: boolean; mono?: boolean }) {
  return (
    <span style={{ fontSize: 10.5, color: good ? '#34C48A' : '#E8735A', fontFamily: mono ? MONO : 'inherit' }}>
      {v}
    </span>
  )
}

/** A finding: what happened, what it costs, what to do. */
function Finding({
  text, amount, tone, muted, accent,
}: { text: string; amount: string; tone: 'good' | 'bad' | 'flat'; muted: string; accent: string }) {
  const c = tone === 'good' ? '#34C48A' : tone === 'bad' ? '#E8735A' : accent
  return (
    <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 9 }}>
      <span style={{ width: 3, alignSelf: 'stretch', background: c, borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.45, color: muted }}>{text}</p>
        <p style={{ margin: '3px 0 0', fontSize: 11.5, fontWeight: 600, color: c }}>{amount}</p>
      </div>
    </div>
  )
}

/** Prime cost split as one stacked bar — food, labor, headroom to target. */
function StackBar({ food, labor, target, colors }: { food: number; labor: number; target: number; colors: [string, string, string] }) {
  const used = food + labor
  const head = Math.max(target - used, 0)
  const over = Math.max(used - target, 0)
  return (
    <div>
      <div style={{ display: 'flex', height: 12, borderRadius: 3, overflow: 'hidden', gap: 2 }}>
        <span style={{ width: `${food}%`, background: colors[0] }} />
        <span style={{ width: `${labor}%`, background: colors[1] }} />
        {head > 0 && <span style={{ width: `${head}%`, background: colors[2] }} />}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 7, flexWrap: 'wrap' }}>
        {[['Food', food, colors[0]], ['Labor', labor, colors[1]]].map(([l, v, c]) => (
          <span key={l as string} style={{ fontSize: 10, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: c as string }} />
            {l} {v}%
          </span>
        ))}
        <span style={{ fontSize: 10, marginInlineStart: 'auto', opacity: 0.7 }}>
          {over > 0 ? `${over.toFixed(1)}pt over target` : `${head.toFixed(1)}pt under target`}
        </span>
      </div>
    </div>
  )
}

const DASHBOARDS: Dash[] = [
  // 1 ── Neon violet, modern SaaS
  {
    key: 'aurora',
    name: 'Aurora',
    style: 'Neon violet · modern SaaS',
    address: 'app.aurorapos.io/venue/9812',
    badge: 'LIVE',
    render: (r) => {
      const m = MULT[r]
      const series = [32, 38, 30, 45, 52, 71, 64, 58, 76, 88, 72, 91]
      const card = { background: 'linear-gradient(160deg,#1E1738,#181230)', border: '1px solid #2C2352', borderRadius: 14, padding: 13 }
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#120E24', padding: 18, fontFamily: SANS, color: '#E9E4FF' }}>
          <div className="flex items-center justify-between gap-3 mb-3.5 flex-wrap">
            <div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Evening service</p>
              <p style={{ margin: '3px 0 0', fontSize: 10.5, color: '#8B7FC0' }}>Aurora POS · Venue 9812 · vs 4-week average</p>
            </div>
            <div className="flex gap-1.5">
              {['Sales', 'Labor', 'Menu', 'Forecast'].map((t, i) => (
                <span key={t} style={{ fontSize: 10.5, padding: '4px 11px', borderRadius: 999, background: i === 0 ? '#6D5BC7' : '#1E1738', color: i === 0 ? '#fff' : '#8B7FC0' }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-2.5">
            {[
              { k: 'Revenue', v: money(9120 * m), d: '+6.1% vs fcst', g: true, s: [30, 42, 38, 55, 61, 72], c: '#A78BFA' },
              { k: 'Covers', v: Math.round(238 * m).toLocaleString(), d: '-3.4% vs fcst', g: false, s: [40, 36, 48, 44, 38, 36], c: '#22D3EE' },
              { k: 'Avg spend', v: `$${wobble(38.4, r, 1.2)}`, d: '+$2.10', g: true, s: [52, 48, 55, 50, 58, 62], c: '#F472B6' },
              { k: 'Prime cost', v: `${wobble(61, r, 1)}%`, d: '3.0pt over', g: false, s: [58, 59, 60, 61, 61, 62], c: '#FBBF24' },
            ].map((x) => (
              <div key={x.k} style={card}>
                <p style={{ margin: 0, fontSize: 9.5, letterSpacing: '0.08em', color: '#8B7FC0', textTransform: 'uppercase' }}>{x.k}</p>
                <p style={{ margin: '6px 0 3px', fontSize: 21, fontWeight: 600 }}>{x.v}</p>
                <div className="flex items-end justify-between gap-2">
                  <Delta v={x.d} good={x.g} />
                  <Spark pts={x.s} color={x.c} h={22} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-2.5" style={{ flex: 1, minHeight: 0 }}>
            <div style={{ ...card, display: 'flex', flexDirection: 'column' }}>
              <div className="flex items-baseline justify-between mb-1.5">
                <p style={{ margin: 0, fontSize: 10.5, color: '#8B7FC0' }}>Revenue through service</p>
                <p style={{ margin: 0, fontSize: 10, color: '#6D5BC7' }}>peak 19:00 · $8,970</p>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: 0 }}>
                <Area pts={series} color="#A78BFA" fill="#8B5CF6" h={96} />
              </div>
              <div style={{ borderTop: '1px solid #2C2352', paddingTop: 10, marginTop: 6 }}>
                <StackBar food={33.2} labor={27.8} target={58} colors={['#A78BFA', '#22D3EE', '#241B45']} />
              </div>
            </div>

            <div style={{ ...card, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <p style={{ margin: '0 0 10px', fontSize: 9.5, letterSpacing: '0.08em', color: '#8B7FC0', textTransform: 'uppercase' }}>
                Needs a decision
              </p>
              <div style={{ overflow: 'hidden', flex: 1 }}>
                <Finding tone="bad" muted="#C9C0EC" accent="#A78BFA"
                  text="Bar covers down 14% on Tue and Wed only. Kitchen covers flat."
                  amount="−$780 / week" />
                <Finding tone="bad" muted="#C9C0EC" accent="#A78BFA"
                  text="Section 12–16 turning 22% slower after 20:00 since the 6 Sep layout change."
                  amount="≈ 9 covers a night" />
                <Finding tone="good" muted="#C9C0EC" accent="#A78BFA"
                  text="Set menu lifted average spend $2.10 without hurting covers."
                  amount="+$1,340 / week" />
              </div>
            </div>
          </div>
        </div>
      )
    },
  },

  // 2 ── Light corporate BI
  {
    key: 'ledger',
    name: 'Ledger',
    style: 'Light corporate · accounting BI',
    address: 'ledger-reporting.com/reports/weekly',
    badge: 'WK 38',
    render: (r) => {
      const m = MULT[r]
      const pl: [string, number, number, boolean][] = [
        ['Net sales', 66350, 3.2, true],
        ['Cost of goods', -22180, -1.4, false],
        ['Gross profit', 44170, 2.1, true],
        ['Labor', -19120, -2.8, false],
        ['Overheads', -11340, 0.4, true],
        ['EBITDA', 13710, 5.6, true],
      ]
      const pane = { background: '#FFFFFF', border: '1px solid #DEDBD1', borderRadius: 3 }
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#F4F3EF', padding: 18, fontFamily: SANS, color: '#2A2822' }}>
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
            <div>
              <p style={{ margin: 0, fontSize: 9.5, color: '#8A8577', letterSpacing: '0.06em' }}>REPORTS / PERIOD SUMMARY</p>
              <h4 style={{ margin: '5px 0 0', fontFamily: SERIF, fontSize: 19, fontWeight: 400 }}>Trading summary</h4>
            </div>
            <p style={{ margin: 0, fontSize: 10.5, color: '#6B6759', fontFamily: SERIF }}>
              Prepared {RANGES.find((x) => x.key === r)?.label.toLowerCase()} · against budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-3" style={{ flex: 1, minHeight: 0 }}>
            <div style={{ ...pane, overflowX: 'auto', display: 'flex', flexDirection: 'column' }}>
              <table style={{ width: '100%', minWidth: 360, borderCollapse: 'collapse', fontSize: 11.5 }}>
                <thead>
                  <tr style={{ background: '#FAF9F6' }}>
                    {['Line', 'Actual', 'Budget', 'Var'].map((h, i) => (
                      <th key={h} style={{ textAlign: i === 0 ? 'start' : 'end', padding: '8px 11px', fontSize: 9, letterSpacing: '0.07em', color: '#8A8577', fontWeight: 600, borderBottom: '1px solid #DEDBD1' }}>
                        {h.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pl.map(([label, amt, varr, good], i) => {
                    const total = label === 'Gross profit' || label === 'EBITDA'
                    return (
                      <tr key={label} style={{ borderBottom: '1px solid #EFEDE6', background: total ? '#FBFAF7' : undefined }}>
                        <td style={{ padding: '7px 11px', fontFamily: SERIF, fontWeight: total ? 600 : 400 }}>{label}</td>
                        <td style={{ padding: '7px 11px', textAlign: 'end', fontVariantNumeric: 'tabular-nums', fontWeight: total ? 600 : 400 }}>
                          {amt < 0 ? `(${money(Math.abs(amt) * m).slice(1)})` : money(amt * m)}
                        </td>
                        <td style={{ padding: '7px 11px', textAlign: 'end', color: '#8A8577', fontVariantNumeric: 'tabular-nums' }}>
                          {money(Math.abs(amt) * m * 0.98)}
                        </td>
                        <td style={{ padding: '7px 11px', textAlign: 'end', fontVariantNumeric: 'tabular-nums' }}>
                          <Delta v={`${varr > 0 ? '+' : ''}${varr}%`} good={good} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              <div style={{ borderTop: '1px solid #DEDBD1', padding: '10px 11px', marginTop: 'auto', background: '#FBFAF7' }}>
                <p style={{ margin: 0, fontSize: 9, letterSpacing: '0.07em', color: '#8A8577', fontWeight: 600 }}>DAILY RECEIPTS</p>
                <div style={{ color: '#1F4E79', marginTop: 6 }}>
                  <Cols pts={[42, 48, 44, 57, 78, 92, 61]} labels={['M', 'T', 'W', 'T', 'F', 'S', 'S']} color="#1F4E79" radius={1} h={68} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3" style={{ minHeight: 0 }}>
              <div style={{ ...pane, padding: 13 }}>
                <p style={{ margin: '0 0 9px', fontSize: 9, letterSpacing: '0.07em', color: '#8A8577', fontWeight: 600 }}>WORTH READING</p>
                <Finding tone="bad" muted="#4A473E" accent="#1F4E79"
                  text="Labor ran 2.8% over budget, all of it Thursday and Sunday evening."
                  amount="$536 over" />
                <Finding tone="bad" muted="#4A473E" accent="#1F4E79"
                  text="Beef cost per kilo up 9% since 12 Sep. Menu price unchanged."
                  amount="−1.6pt gross margin" />
                <Finding tone="good" muted="#4A473E" accent="#1F4E79"
                  text="Beverage mix up to 28% of sales, the highest this quarter."
                  amount="+$1,180 gross profit" />
              </div>

              <div style={{ ...pane, padding: 13, flex: 1, minHeight: 0 }}>
                <p style={{ margin: '0 0 9px', fontSize: 9, letterSpacing: '0.07em', color: '#8A8577', fontWeight: 600 }}>RECONCILIATION</p>
                {[
                  ['Card settlements', 'Matched', true],
                  ['Cash declared vs counted', '−$18.40', false],
                  ['Voids over $50', '4 events', false],
                  ['Unclosed tabs', 'None', true],
                ].map(([k, v, ok]) => (
                  <div key={k as string} className="flex items-baseline justify-between gap-3" style={{ padding: '6px 0', borderBottom: '1px solid #EFEDE6' }}>
                    <span style={{ fontSize: 11.5, fontFamily: SERIF, color: '#4A473E' }}>{k}</span>
                    <span style={{ fontSize: 11, color: ok ? '#2F7D57' : '#A2503C', fontVariantNumeric: 'tabular-nums' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
  },

  // 3 ── Warm, rounded, consumer-app
  {
    key: 'citrus',
    name: 'Citrus',
    style: 'Warm coral · consumer app',
    address: 'citrus.app/kitchen/today',
    badge: 'AUTO-REFRESH',
    render: (r) => {
      const m = MULT[r]
      const pane = { background: '#fff', borderRadius: 18, padding: 15, border: '1px solid #F6E3D3' }
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#FFF8F1', padding: 18, fontFamily: SANS, color: '#3D2418' }}>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
            <div className="flex gap-2">
              {['Kitchen', 'Front', 'Delivery'].map((t, i) => (
                <span key={t} style={{ fontSize: 11.5, fontWeight: 600, padding: '6px 14px', borderRadius: 999, background: i === 0 ? '#F2622E' : '#FFEFE2', color: i === 0 ? '#fff' : '#B4643C' }}>{t}</span>
              ))}
            </div>
            <span style={{ fontSize: 10.5, color: '#B4643C' }}>Updated just now</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-3 mb-3">
            <div style={{ background: 'linear-gradient(135deg,#F2622E,#FFB627)', borderRadius: 18, padding: '16px 18px', color: '#fff' }}>
              <p style={{ margin: 0, fontSize: 11.5, opacity: 0.92 }}>Sales today</p>
              <p style={{ margin: '4px 0 0', fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>{money(7840 * m)}</p>
              <p style={{ margin: '6px 0 0', fontSize: 11.5, opacity: 0.94 }}>
                {wobble(12.4, r, 4)}% ahead of the same period last month
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                ['Tickets', Math.round(184 * m).toLocaleString(), '+9%', true],
                ['Avg time', `${wobble(11.2, r, 1.1)}m`, '−1.4m', true],
                ['Refires', String(Math.max(1, Math.round(3 * (r === '1d' ? 1 : r === '7d' ? 5 : 19)))), '+2', false],
              ].map(([k, v, d, g]) => (
                <div key={k as string} style={{ ...pane, padding: 12 }}>
                  <p style={{ margin: 0, fontSize: 10, color: '#B4643C' }}>{k}</p>
                  <p style={{ margin: '5px 0 3px', fontSize: 19, fontWeight: 700 }}>{v}</p>
                  <Delta v={d as string} good={g as boolean} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-3" style={{ flex: 1, minHeight: 0 }}>
            <div style={{ ...pane, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <p style={{ margin: '0 0 11px', fontSize: 12.5, fontWeight: 700 }}>Best sellers by profit, not volume</p>
              {[
                ['Smash burger', 88, '$4.90'], ['Iced matcha', 74, '$3.80'],
                ['Loaded fries', 62, '$2.40'], ['Chicken bowl', 47, '$3.10'],
              ].map(([label, v, per]) => (
                <div key={label as string} className="flex items-center gap-2.5 mb-2.5">
                  <span style={{ fontSize: 11.5, width: 92, color: '#6B4A38' }}>{label}</span>
                  <span style={{ flex: 1, height: 10, background: '#FFEFE2', borderRadius: 999, overflow: 'hidden' }}>
                    <span style={{ display: 'block', height: '100%', width: `${v}%`, borderRadius: 999, background: 'linear-gradient(90deg,#FFB627,#F2622E)' }} />
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 700, width: 38, textAlign: 'right' }}>{per}</span>
                </div>
              ))}
              <p style={{ margin: 'auto 0 0', fontSize: 10.5, color: '#B4643C', paddingTop: 8, borderTop: '1px solid #F6E3D3' }}>
                Profit per item sold, after entered food cost
              </p>
            </div>

            <div style={{ ...pane, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <p style={{ margin: '0 0 11px', fontSize: 12.5, fontWeight: 700 }}>Do this today</p>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <Finding tone="bad" muted="#6B4A38" accent="#F2622E"
                  text="Every refire after 19:30 came off the grill station. Same two shifts."
                  amount="14 covers remade this week" />
                <Finding tone="good" muted="#6B4A38" accent="#F2622E"
                  text="Thursday demand has beaten prep three weeks running. Prep 20% more chicken."
                  amount="≈ $310 of missed sales" />
                <Finding tone="flat" muted="#6B4A38" accent="#F2622E"
                  text="Matcha earns $3.80 a cup and sells half as often as fries. It is under-pushed."
                  amount="+$540 / week if matched" />
              </div>
            </div>
          </div>
        </div>
      )
    },
  },

  // 4 ── Data terminal
  {
    key: 'terminal',
    name: 'Terminal',
    style: 'Monospace · operations console',
    address: 'trm.internal:8443/ops',
    badge: 'SESSION 04',
    render: (r) => {
      const m = MULT[r]
      const rows: [string, number, number, string][] = [
        ['PEARL', 88, 58.1, 'OK'],
        ['ALBRT', 64, 60.4, 'OK'],
        ['DIVSN', 58, 61.7, 'WATCH'],
        ['HWTHN', 39, 64.9, 'ALERT'],
      ]
      const bar = (v: number) => '█'.repeat(Math.round(v / 7)).padEnd(13, '·')
      const pane = { border: '1px solid #16232E', background: '#070C11', padding: 11 }
      const statusColor = (s: string) => (s === 'OK' ? '#22FF88' : s === 'WATCH' ? '#E3C34F' : '#FF6B5B')
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#04070A', padding: 16, fontFamily: MONO, color: '#7FE3B5', fontSize: 11.5 }}>
          <div style={{ borderBottom: '1px solid #16232E', paddingBottom: 9, marginBottom: 11 }} className="flex justify-between flex-wrap gap-2">
            <span style={{ color: '#22FF88' }}>OPS://group/all-sites</span>
            <span style={{ color: '#3F8F6B' }}>{RANGES.find((x) => x.key === r)?.label.toUpperCase()} · 4 NODES · 1 ALERT</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-2.5">
            {[
              ['NET', money(66350 * m), '+3.2%', true], ['PRIME', `${wobble(61.0, r, 1)}%`, '+3.0pt', false],
              ['LABOR', `${wobble(28.9, r, 1)}%`, '+0.9pt', false], ['COVERS', Math.round(1180 * m).toLocaleString(), '-1.1%', false],
            ].map(([k, v, d, g]) => (
              <div key={k as string} style={{ ...pane, padding: '9px 11px' }}>
                <p style={{ margin: 0, fontSize: 8.5, color: '#3F8F6B', letterSpacing: '0.12em' }}>{k}</p>
                <p style={{ margin: '5px 0 3px', fontSize: 16, color: '#22FF88' }}>{v}</p>
                <Delta v={d as string} good={g as boolean} mono />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-2.5" style={{ flex: 1, minHeight: 0 }}>
            <div style={{ ...pane, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <p style={{ margin: '0 0 8px', fontSize: 8.5, color: '#3F8F6B', letterSpacing: '0.12em' }}>NODE STATUS</p>
              <div style={{ overflowX: 'auto' }}>
                <pre style={{ margin: 0, fontSize: 10.5, lineHeight: 1.85, color: '#7FE3B5' }}>
{'SITE   SALES-IDX      PRIME  LABOR\n'}
{rows.map(([site, v, prime]) => `${site}  ${bar(v)}  ${String(prime).padStart(5)}%  ${(prime / 2.1).toFixed(1)}%\n`).join('')}
                </pre>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 9, borderTop: '1px solid #16232E', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                {rows.map(([site, , , st]) => (
                  <span key={site} style={{ fontSize: 10, color: statusColor(st) }}>{site} {st}</span>
                ))}
              </div>
            </div>

            <div style={{ ...pane, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <p style={{ margin: '0 0 9px', fontSize: 8.5, color: '#3F8F6B', letterSpacing: '0.12em' }}>EXCEPTIONS — ACTION REQUIRED</p>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                {[
                  ['19:42', 'HWTHN prime 64.9% — 6.9pt over group', '$1,240/wk', '#FF6B5B'],
                  ['18:05', 'DIVSN labor breached 32% for 3rd shift running', '$380/wk', '#E3C34F'],
                  ['14:20', 'Void > $50 ×4, all one till, all pre-close', 'review', '#E3C34F'],
                  ['09:12', 'PEARL beat forecast 5 days straight', 'raise fcst', '#22FF88'],
                ].map(([t, msg, amt, c]) => (
                  <div key={t} style={{ display: 'flex', gap: 9, padding: '5px 0', borderBottom: '1px solid #0F1A22' }}>
                    <span style={{ fontSize: 10, color: '#2E6B4E', flexShrink: 0 }}>{t}</span>
                    <span style={{ fontSize: 10.5, color: '#7FE3B5', lineHeight: 1.4, flex: 1, minWidth: 0 }}>{msg}</span>
                    <span style={{ fontSize: 10, color: c, flexShrink: 0 }}>{amt}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: '8px 0 0', fontSize: 9.5, color: '#2E6B4E' }}>
                {'>'} watch --interval 60s <span style={{ background: '#22FF88', color: '#04070A' }}>&nbsp;</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
  },

  // 5 ── Dense engineering grid
  {
    key: 'meridian',
    name: 'Meridian',
    style: 'Dense grid · engineering console',
    address: 'meridian.grid/boards/retail-ops',
    badge: '30s REFRESH',
    render: (r) => {
      const m = MULT[r]
      const panel = { background: '#111A2E', border: '1px solid #1C2A44', borderRadius: 6, padding: 11 }
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#0B1220', padding: 14, fontFamily: SANS, color: '#D6E0F0' }}>
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2.5">
            <p style={{ margin: 0, fontSize: 11.5, color: '#7C90B3' }}>boards / retail-ops / <span style={{ color: '#D6E0F0' }}>overview</span></p>
            <span style={{ fontSize: 9.5, color: '#F59E0B', border: '1px solid #4A3518', background: '#231a0c', padding: '3px 8px', borderRadius: 4 }}>
              2 ALERTS FIRING
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
            {[
              ['net_sales', money(66350 * m), '#3B82F6', '+3.2%', true],
              ['prime_cost', `${wobble(61.0, r, 1)}%`, '#F59E0B', '+3.0pt', false],
              ['labor_pct', `${wobble(28.9, r, 1)}%`, '#3B82F6', '+0.9pt', false],
              ['void_rate', `${wobble(1.4, r, 0.4)}%`, '#EF4444', '2.1σ', false],
            ].map(([k, v, c, d, g]) => (
              <div key={k as string} style={panel}>
                <p style={{ margin: 0, fontSize: 9, color: '#7C90B3', fontFamily: MONO }}>{k}</p>
                <p style={{ margin: '5px 0 3px', fontSize: 17, color: c as string, fontFamily: MONO }}>{v}</p>
                <Delta v={d as string} good={g as boolean} mono />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2" style={{ flex: 1, minHeight: 0 }}>
            <div style={{ ...panel, display: 'flex', flexDirection: 'column', minHeight: 0 }} className="lg:col-span-2">
              <p style={{ margin: '0 0 8px', fontSize: 9, color: '#7C90B3', fontFamily: MONO }}>sales_by_hour · actual vs forecast</p>
              <div style={{ color: '#7C90B3', flex: 1, display: 'flex', alignItems: 'center', minHeight: 0 }}>
                <Cols pts={[18, 42, 55, 31, 14, 12, 28, 61, 88, 79, 47, 22]} labels={['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']} color="#3B82F6" radius={2} h={112} />
              </div>
              <div style={{ borderTop: '1px solid #1C2A44', paddingTop: 8, marginTop: 6, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[['peak', '19:00'], ['vs fcst', '+6.1%'], ['slowest', '16:00'], ['labor gap', '18 hrs']].map(([k, v]) => (
                  <span key={k} style={{ fontSize: 9.5, fontFamily: MONO, color: '#7C90B3' }}>
                    {k}=<span style={{ color: '#D6E0F0' }}>{v}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2" style={{ minHeight: 0 }}>
              <div style={panel}>
                <p style={{ margin: '0 0 8px', fontSize: 9, color: '#7C90B3', fontFamily: MONO }}>margin_by_item</p>
                {[['burger', 71], ['fries', 64], ['pasta', 52], ['steak', 34]].map(([k, v]) => (
                  <div key={k as string} className="flex items-center gap-2 mb-2">
                    <span style={{ fontSize: 9.5, fontFamily: MONO, color: '#9FB0CC', width: 42 }}>{k}</span>
                    <span style={{ flex: 1, height: 5, background: '#16233A', borderRadius: 2, overflow: 'hidden' }}>
                      <span style={{ display: 'block', height: '100%', width: `${v}%`, background: (v as number) < 40 ? '#F59E0B' : '#3B82F6' }} />
                    </span>
                    <span style={{ fontSize: 9.5, fontFamily: MONO, color: '#7C90B3', width: 24, textAlign: 'right' }}>{v}%</span>
                  </div>
                ))}
              </div>

              <div style={{ ...panel, flex: 1, minHeight: 0, overflow: 'hidden' }}>
                <p style={{ margin: '0 0 8px', fontSize: 9, color: '#7C90B3', fontFamily: MONO }}>anomalies</p>
                <Finding tone="bad" muted="#9FB0CC" accent="#3B82F6"
                  text="labor_pct over threshold 14:00–16:00, 9 days of 14."
                  amount="$412 / week" />
                <Finding tone="bad" muted="#9FB0CC" accent="#3B82F6"
                  text="steak margin −6.2pt since supplier change on 12 Sep."
                  amount="$1,840 annualised" />
              </div>
            </div>
          </div>
        </div>
      )
    },
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
  const d = DASHBOARDS[index]
  const go = (delta: number) => setIndex((i) => (i + delta + DASHBOARDS.length) % DASHBOARDS.length)

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

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            {[-1, 1].map((delta) => (
              <button
                key={delta}
                onClick={() => go(delta)}
                aria-label={delta < 0 ? 'Previous dashboard' : 'Next dashboard'}
                className="w-9 h-9 rounded-lg border border-paper/[0.12] text-paper/60 hover:text-signal hover:border-signal/40 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d={delta < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {DASHBOARDS.map((x, i) => (
              <button
                key={x.key}
                onClick={() => setIndex(i)}
                aria-current={i === index}
                className={`font-archivo text-[13px] px-4 py-2 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent ${
                  i === index
                    ? 'border-signal/50 bg-paper/[0.06] text-paper'
                    : 'border-paper/[0.12] text-paper/55 hover:text-paper hover:border-paper/25'
                }`}
              >
                {x.name}
              </button>
            ))}
          </div>

          {/* Range control lives outside the frame: it drives all five, and each
              dashboard styles its own chrome differently enough that a control
              inside would have to be restyled five times to mean one thing. */}
          <div className="flex items-center gap-1 rounded-lg border border-paper/[0.10] p-1 ms-auto">
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

        <MockWindow address={d.address} badge={d.badge}>
          {d.render(range)}
        </MockWindow>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mt-6">
          <p className="font-jetbrains text-[11px] text-paper/45 uppercase tracking-eyebrow m-0">
            {d.name} · {d.style}
          </p>
          <p className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow m-0">
            {index + 1} / {DASHBOARDS.length}
          </p>
        </div>

        <p className="font-jetbrains text-[11px] text-paper/35 uppercase tracking-eyebrow mt-5 m-0">
          {disclaimer}
        </p>
      </div>
    </section>
  )
}
