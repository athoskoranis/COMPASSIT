/**
 * A browser-window frame for showing someone else's application inside a
 * marketing page.
 *
 * Chrome only — it holds no dashboard logic and knows nothing about what it
 * frames. Everything visual is passed in, because the whole point of this
 * component is that the thing inside it does NOT belong to Compass. A frame
 * hard-coded to Ink and Signal would make every screen look like our product.
 *
 * Deliberately outside the DESIGN.md palette. See the note in
 * UsDashboardPreview and Decision 108 in CHANGELOG.md.
 */

export type WindowTheme = {
  /** Chrome bar background. */
  bar: string
  /** Border around the window and under the chrome bar. */
  border: string
  /** Address pill background and border. */
  pill: string
  pillBorder: string
  /** Address and badge text. */
  text: string
  /** The three window dots, left to right. */
  dots: [string, string, string]
  /** Corner radius of the whole window. */
  radius: number
  /** Font stack for the address pill. */
  font: string
}

export default function MockWindow({
  address,
  badge,
  theme,
  children,
}: {
  address: string
  badge?: string
  theme: WindowTheme
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        borderRadius: theme.radius,
        border: `1px solid ${theme.border}`,
        overflow: 'hidden',
        boxShadow: '0 26px 64px rgba(0,0,0,0.72)',
      }}
    >
      <div
        className="flex items-center gap-4 px-4 py-2.5"
        style={{ background: theme.bar, borderBottom: `1px solid ${theme.border}` }}
      >
        <div className="flex items-center gap-[6px] shrink-0" aria-hidden>
          {theme.dots.map((c, i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: 999, background: c }} />
          ))}
        </div>

        <div className="flex-1 min-w-0 flex justify-center">
          <span
            className="inline-flex items-center gap-2 max-w-full px-3 py-[3px]"
            style={{
              background: theme.pill,
              border: `1px solid ${theme.pillBorder}`,
              borderRadius: 6,
            }}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
              <path d="M6 10V8a6 6 0 1 1 12 0v2" stroke={theme.text} strokeWidth="2.5" strokeLinecap="round" />
              <rect x="4" y="10" width="16" height="11" rx="2" fill={theme.text} />
            </svg>
            <span className="truncate" style={{ color: theme.text, fontSize: 10, fontFamily: theme.font }}>
              {address}
            </span>
          </span>
        </div>

        <div className="shrink-0 w-[96px] flex justify-end">
          {badge && (
            <span
              className="truncate"
              style={{ color: theme.text, fontSize: 9, fontFamily: theme.font, letterSpacing: '0.1em' }}
            >
              {badge}
            </span>
          )}
        </div>
      </div>

      {children}
    </div>
  )
}
