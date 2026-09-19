/**
 * A browser-window frame for showing an application inside a marketing page.
 *
 * Chrome only — it holds no dashboard logic and knows nothing about what it
 * frames. The point is to signal "this is a screen, not a section of the
 * website", so a reader stops reading the page and starts reading a product.
 *
 * The window dots are Paper at low opacity rather than the usual red/amber/green.
 * Those three would put two off-palette hues on the page for pure decoration, and
 * Beacon Amber is a status colour here — a fake close button is not a status.
 */

export default function MockWindow({
  address,
  badge,
  children,
}: {
  /** Shown in the address pill. A plausible host, not a real one. */
  address: string
  /** Optional right-hand pill, e.g. a refresh time. */
  badge?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-paper/[0.12] bg-ink overflow-hidden shadow-[0_26px_64px_rgba(0,0,0,0.72)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-paper/[0.08] bg-paper/[0.03]">
        <div className="flex items-center gap-2 shrink-0" aria-hidden>
          <span className="w-[10px] h-[10px] rounded-full bg-paper/20" />
          <span className="w-[10px] h-[10px] rounded-full bg-paper/15" />
          <span className="w-[10px] h-[10px] rounded-full bg-paper/10" />
        </div>

        <div className="flex-1 min-w-0 flex justify-center">
          <span className="inline-flex items-center gap-2 max-w-full rounded-md bg-paper/[0.05] border border-paper/[0.08] px-3 py-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
              <path
                d="M6 10V8a6 6 0 1 1 12 0v2"
                stroke="rgba(244,242,236,0.35)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <rect x="4" y="10" width="16" height="11" rx="2" fill="rgba(244,242,236,0.35)" />
            </svg>
            <span className="font-jetbrains text-[10px] text-paper/40 truncate">{address}</span>
          </span>
        </div>

        <div className="shrink-0 w-[92px] flex justify-end">
          {badge && (
            <span className="font-jetbrains text-[9px] text-paper/30 uppercase tracking-eyebrow truncate">
              {badge}
            </span>
          )}
        </div>
      </div>

      {children}
    </div>
  )
}
