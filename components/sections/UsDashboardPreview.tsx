'use client'
import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import MockWindow, { WindowTheme } from '@/components/ui/MockWindow'

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
  chrome: WindowTheme
  render: (r: Range) => React.ReactNode
}

const SANS = 'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif'
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace'
const SERIF = 'Georgia, Cambria, Times New Roman, serif'

const DASHBOARDS: Dash[] = [
  // 1 ── Neon violet, modern SaaS
  {
    key: 'aurora',
    name: 'Aurora',
    style: 'Neon violet · modern SaaS',
    address: 'app.aurorapos.io/venue/9812',
    badge: 'LIVE',
    chrome: {
      bar: '#1A1333', border: '#2C2352', pill: '#241B45', pillBorder: '#372B63',
      text: '#A79CD4', dots: ['#6D5BC7', '#4C3F8F', '#372B63'], radius: 16, font: SANS,
    },
    render: (r) => {
      const m = MULT[r]
      const series = [32, 38, 30, 45, 52, 71, 64, 58, 76, 88, 72, 91]
      return (
        <div style={{ background: '#120E24', padding: 20, fontFamily: SANS, color: '#E9E4FF' }}>
          <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
            <div>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Evening service</p>
              <p style={{ margin: '4px 0 0', fontSize: 11, color: '#8B7FC0' }}>Aurora POS · Venue 9812</p>
            </div>
            <div className="flex gap-1.5">
              {['Sales', 'Labor', 'Menu'].map((t, i) => (
                <span key={t} style={{ fontSize: 11, padding: '5px 12px', borderRadius: 999, background: i === 0 ? '#6D5BC7' : '#1E1738', color: i === 0 ? '#fff' : '#8B7FC0' }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            {[
              { k: 'Revenue', v: money(9120 * m), s: [30, 42, 38, 55, 61, 72], c: '#A78BFA' },
              { k: 'Covers', v: Math.round(238 * m).toLocaleString(), s: [40, 36, 48, 44, 60, 66], c: '#22D3EE' },
              { k: 'Avg spend', v: `$${wobble(38.4, r, 1.2)}`, s: [52, 48, 55, 50, 58, 62], c: '#F472B6' },
            ].map((x) => (
              <div key={x.k} style={{ background: 'linear-gradient(160deg,#1E1738,#181230)', border: '1px solid #2C2352', borderRadius: 14, padding: 14 }}>
                <p style={{ margin: 0, fontSize: 10, letterSpacing: '0.08em', color: '#8B7FC0', textTransform: 'uppercase' }}>{x.k}</p>
                <p style={{ margin: '8px 0 6px', fontSize: 24, fontWeight: 600 }}>{x.v}</p>
                <Spark pts={x.s} color={x.c} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3">
            <div style={{ background: '#1A1333', border: '1px solid #2C2352', borderRadius: 14, padding: 14 }}>
              <p style={{ margin: '0 0 10px', fontSize: 11, color: '#8B7FC0' }}>Revenue through service</p>
              <Area pts={series} color="#A78BFA" fill="#8B5CF6" h={96} />
            </div>
            <div style={{ background: '#1A1333', border: '1px solid #2C2352', borderRadius: 14, padding: 14, color: '#E9E4FF' }} className="flex flex-col items-center justify-center">
              <Donut pct={wobble(64, r, 3)} color="#22D3EE" track="#241B45" label={`${wobble(64, r, 3)}%`} sub="PRIME COST" />
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
    chrome: {
      bar: '#E8E6DF', border: '#CFCCC1', pill: '#FFFFFF', pillBorder: '#CFCCC1',
      text: '#6B6759', dots: ['#B9B5A7', '#C9C5B8', '#D6D3C7'], radius: 4, font: SANS,
    },
    render: (r) => {
      const m = MULT[r]
      const rows = [
        ['Food sales', 41200, 62.1],
        ['Beverage', 18600, 28.0],
        ['Retail', 4100, 6.2],
        ['Other', 2450, 3.7],
      ] as [string, number, number][]
      return (
        <div style={{ background: '#F4F3EF', padding: 22, fontFamily: SANS, color: '#2A2822' }}>
          <p style={{ margin: 0, fontSize: 10, color: '#8A8577', letterSpacing: '0.06em' }}>REPORTS / REVENUE / WEEKLY SUMMARY</p>
          <h4 style={{ margin: '8px 0 18px', fontFamily: SERIF, fontSize: 21, fontWeight: 400 }}>Revenue by category</h4>

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5">
            {/* Scrolls rather than clipping: four columns plus a sparkline does
                not fit 375px, and a trend column cut in half reads as broken. */}
            <div style={{ background: '#FFFFFF', border: '1px solid #DEDBD1', borderRadius: 3, overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: 380, borderCollapse: 'collapse', fontSize: 12 }}>
                <thead>
                  <tr style={{ background: '#FAF9F6' }}>
                    {['Category', 'Amount', 'Share', 'Trend'].map((h) => (
                      <th key={h} style={{ textAlign: h === 'Category' ? 'start' : 'end', padding: '9px 12px', fontSize: 9.5, letterSpacing: '0.07em', color: '#8A8577', fontWeight: 600, borderBottom: '1px solid #DEDBD1' }}>
                        {h.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, amt, share], i) => (
                    <tr key={label} style={{ borderBottom: i < rows.length - 1 ? '1px solid #EFEDE6' : 'none' }}>
                      <td style={{ padding: '9px 12px', fontFamily: SERIF }}>{label}</td>
                      <td style={{ padding: '9px 12px', textAlign: 'end', fontVariantNumeric: 'tabular-nums' }}>{money(amt * m)}</td>
                      <td style={{ padding: '9px 12px', textAlign: 'end', color: '#6B6759', fontVariantNumeric: 'tabular-nums' }}>{share}%</td>
                      <td style={{ padding: '4px 12px', textAlign: 'end', color: '#1F4E79' }}>
                        <span className="inline-block align-middle"><Spark pts={[30, 34, 31, 38, 36, 42].map((v) => v + i * 3)} color="#1F4E79" h={20} /></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr style={{ background: '#FAF9F6', borderTop: '2px solid #CFCCC1' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 600, fontFamily: SERIF }}>Total</td>
                    <td style={{ padding: '9px 12px', textAlign: 'end', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{money(66350 * m)}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'end', color: '#6B6759' }}>100%</td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #DEDBD1', borderRadius: 3, padding: 14, color: '#1F4E79' }}>
              <p style={{ margin: '0 0 12px', fontSize: 9.5, letterSpacing: '0.07em', color: '#8A8577', fontWeight: 600 }}>DAILY RECEIPTS</p>
              <Cols pts={[42, 48, 44, 57, 78, 92, 61]} labels={['M', 'T', 'W', 'T', 'F', 'S', 'S']} color="#1F4E79" radius={1} h={116} />
              <p style={{ margin: '14px 0 0', fontSize: 11, color: '#6B6759', fontFamily: SERIF }}>
                Variance to budget <strong style={{ color: '#1F4E79' }}>+{wobble(3.2, r, 1.4)}%</strong>
              </p>
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
    chrome: {
      bar: '#FFEFE2', border: '#F6D9C4', pill: '#FFFFFF', pillBorder: '#F6D9C4',
      text: '#B4643C', dots: ['#FF8A5B', '#FFB627', '#FFD79A'], radius: 22, font: SANS,
    },
    render: (r) => {
      const m = MULT[r]
      return (
        <div style={{ background: '#FFF8F1', padding: 22, fontFamily: SANS, color: '#3D2418' }}>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div className="flex gap-2">
              {['Kitchen', 'Front', 'Delivery'].map((t, i) => (
                <span key={t} style={{ fontSize: 12, fontWeight: 600, padding: '7px 16px', borderRadius: 999, background: i === 0 ? '#F2622E' : '#FFEFE2', color: i === 0 ? '#fff' : '#B4643C' }}>{t}</span>
              ))}
            </div>
            <span style={{ fontSize: 11, color: '#B4643C' }}>Updated just now</span>
          </div>

          <div style={{ background: 'linear-gradient(135deg,#F2622E,#FFB627)', borderRadius: 22, padding: '22px 24px', color: '#fff', marginBottom: 14 }}>
            <p style={{ margin: 0, fontSize: 12, opacity: 0.9 }}>Sales today</p>
            <p style={{ margin: '6px 0 0', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em' }}>{money(7840 * m)}</p>
            <p style={{ margin: '8px 0 0', fontSize: 12, opacity: 0.92 }}>
              {wobble(12.4, r, 4)}% ahead of the same period last month
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3">
            <div style={{ background: '#fff', borderRadius: 20, padding: 18, border: '1px solid #F6E3D3' }}>
              <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700 }}>Top sellers</p>
              {[
                ['Smash burger', 88], ['Loaded fries', 71], ['Chicken bowl', 54], ['Iced matcha', 37],
              ].map(([label, v]) => (
                <div key={label as string} className="flex items-center gap-3 mb-3">
                  <span style={{ fontSize: 12, width: 104, color: '#6B4A38' }}>{label}</span>
                  <span style={{ flex: 1, height: 12, background: '#FFEFE2', borderRadius: 999, overflow: 'hidden' }}>
                    <span style={{ display: 'block', height: '100%', width: `${v}%`, borderRadius: 999, background: 'linear-gradient(90deg,#FFB627,#F2622E)' }} />
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, width: 30, textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: 20, padding: 18, border: '1px solid #F6E3D3', color: '#3D2418' }} className="flex items-center justify-around">
              <Donut pct={wobble(72, r, 5)} color="#F2622E" track="#FFEFE2" label={`${wobble(72, r, 5)}%`} sub="KITCHEN ON TIME" />
              <div>
                <p style={{ margin: 0, fontSize: 11, color: '#B4643C' }}>Avg ticket time</p>
                <p style={{ margin: '4px 0 14px', fontSize: 22, fontWeight: 700 }}>{wobble(11.2, r, 1.1)} min</p>
                <p style={{ margin: 0, fontSize: 11, color: '#B4643C' }}>Refires</p>
                <p style={{ margin: '4px 0 0', fontSize: 22, fontWeight: 700 }}>{Math.max(1, Math.round(3 * (r === '1d' ? 1 : r === '7d' ? 5 : 19)))}</p>
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
    chrome: {
      bar: '#080D12', border: '#16232E', pill: '#0B1319', pillBorder: '#1B2B38',
      text: '#3F8F6B', dots: ['#1E7A52', '#155C3D', '#0F3F2A'], radius: 3, font: MONO,
    },
    render: (r) => {
      const m = MULT[r]
      const rows = [
        ['PEARL', 88, 58.1, 'OK'],
        ['ALBRT', 64, 60.4, 'OK'],
        ['DIVSN', 58, 61.7, 'WATCH'],
        ['HWTHN', 39, 64.9, 'ALERT'],
      ] as [string, number, number, string][]
      const bar = (v: number) => '█'.repeat(Math.round(v / 7)).padEnd(13, '·')
      return (
        <div style={{ background: '#04070A', padding: 18, fontFamily: MONO, color: '#7FE3B5', fontSize: 12 }}>
          <div style={{ borderBottom: '1px solid #16232E', paddingBottom: 10, marginBottom: 14 }} className="flex justify-between flex-wrap gap-2">
            <span style={{ color: '#22FF88' }}>OPS://group/all-sites</span>
            <span style={{ color: '#3F8F6B' }}>{RANGES.find((x) => x.key === r)?.label.toUpperCase()} · 4 NODES</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {[
              ['NET', money(66350 * m)], ['PRIME', `${wobble(61.0, r, 1)}%`],
              ['LABOR', `${wobble(28.9, r, 1)}%`], ['COVERS', Math.round(1180 * m).toLocaleString()],
            ].map(([k, v]) => (
              <div key={k} style={{ border: '1px solid #16232E', padding: '10px 12px', background: '#070C11' }}>
                <p style={{ margin: 0, fontSize: 9, color: '#3F8F6B', letterSpacing: '0.12em' }}>{k}</p>
                <p style={{ margin: '6px 0 0', fontSize: 18, color: '#22FF88' }}>{v}</p>
              </div>
            ))}
          </div>

          <div style={{ border: '1px solid #16232E', background: '#070C11', padding: 12, marginBottom: 12, overflowX: 'auto' }}>
            <pre style={{ margin: 0, fontSize: 11, lineHeight: 1.75, color: '#7FE3B5' }}>
{`SITE   SALES-IDX      PRIME    STATUS
`}
{rows.map(([site, v, prime, status]) =>
`${site}  ${bar(v)}  ${String(prime).padStart(5)}%   ${status}\n`
).join('')}
            </pre>
          </div>

          <div style={{ border: '1px solid #16232E', background: '#070C11', padding: 12 }} className="text-current">
            <p style={{ margin: '0 0 8px', fontSize: 9, color: '#3F8F6B', letterSpacing: '0.12em' }}>THROUGHPUT / HR</p>
            <div style={{ color: '#22FF88' }}>
              <Cols pts={[18, 42, 55, 31, 14, 12, 28, 61, 88, 79, 47, 22]} color="#22FF88" radius={0} h={80} />
            </div>
          </div>

          <p style={{ margin: '12px 0 0', fontSize: 10, color: '#2E6B4E' }}>
            {'>'} watch --interval 60s <span style={{ background: '#22FF88', color: '#04070A' }}>&nbsp;</span>
          </p>
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
    chrome: {
      bar: '#0E1729', border: '#1C2A44', pill: '#111C31', pillBorder: '#22334F',
      text: '#7C90B3', dots: ['#3B82F6', '#1E4E8C', '#15304F'], radius: 6, font: SANS,
    },
    render: (r) => {
      const m = MULT[r]
      const panel = { background: '#111A2E', border: '1px solid #1C2A44', borderRadius: 6, padding: 12 }
      return (
        <div style={{ background: '#0B1220', padding: 16, fontFamily: SANS, color: '#D6E0F0' }}>
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <p style={{ margin: 0, fontSize: 12, color: '#7C90B3' }}>boards / retail-ops / <span style={{ color: '#D6E0F0' }}>overview</span></p>
            <span style={{ fontSize: 10, color: '#F59E0B', border: '1px solid #4A3518', background: '#231a0c', padding: '3px 8px', borderRadius: 4 }}>
              2 ALERTS
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-2.5">
            {[
              ['net_sales', money(66350 * m), '#3B82F6'],
              ['prime_cost', `${wobble(61.0, r, 1)}%`, '#F59E0B'],
              ['labor_pct', `${wobble(28.9, r, 1)}%`, '#3B82F6'],
              ['void_rate', `${wobble(1.4, r, 0.4)}%`, '#EF4444'],
            ].map(([k, v, c]) => (
              <div key={k} style={panel}>
                <p style={{ margin: 0, fontSize: 9.5, color: '#7C90B3', fontFamily: MONO }}>{k}</p>
                <p style={{ margin: '7px 0 0', fontSize: 19, color: c as string, fontFamily: MONO }}>{v}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
            <div style={{ ...panel, gridColumn: 'span 2' }} className="lg:col-span-2">
              <p style={{ margin: '0 0 10px', fontSize: 9.5, color: '#7C90B3', fontFamily: MONO }}>sales_by_hour</p>
              <div style={{ color: '#7C90B3' }}>
                <Cols pts={[18, 42, 55, 31, 14, 12, 28, 61, 88, 79, 47, 22]} labels={['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']} color="#3B82F6" radius={2} h={122} />
              </div>
            </div>
            <div style={panel}>
              <p style={{ margin: '0 0 10px', fontSize: 9.5, color: '#7C90B3', fontFamily: MONO }}>margin_by_item</p>
              {[['burger', 71], ['fries', 64], ['pasta', 52], ['steak', 34]].map(([k, v]) => (
                <div key={k as string} className="flex items-center gap-2 mb-2.5">
                  <span style={{ fontSize: 10, fontFamily: MONO, color: '#9FB0CC', width: 46 }}>{k}</span>
                  <span style={{ flex: 1, height: 6, background: '#16233A', borderRadius: 2, overflow: 'hidden' }}>
                    <span style={{ display: 'block', height: '100%', width: `${v}%`, background: '#3B82F6' }} />
                  </span>
                  <span style={{ fontSize: 10, fontFamily: MONO, color: '#7C90B3', width: 26, textAlign: 'right' }}>{v}%</span>
                </div>
              ))}
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

        <MockWindow address={d.address} badge={d.badge} theme={d.chrome}>
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
