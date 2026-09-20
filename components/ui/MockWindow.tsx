/**
 * A browser-window frame for showing someone else's application inside a page.
 *
 * The frame itself is Compass — Ink, Paper, the JetBrains address line, the
 * standard radius and the .raised shadow. It is the site's furniture, and the
 * boundary is the point: everything outside the viewport belongs to us, and
 * everything inside it belongs to whoever's software is being shown.
 *
 * The frame was briefly themed per dashboard. That was wrong — five differently
 * coloured browsers read as five screenshots rather than one page showing five
 * products, and the chrome ended up competing with the thing it was framing.
 *
 * `bodyHeight` fixes the viewport so the window does not resize as a reader
 * cycles through. A frame that grows and shrinks looks unstable, and the jump
 * pulls the rest of the page around with it. Dashboards fill the height rather
 * than being cropped by it; below the md breakpoint it releases, because a
 * fixed viewport on a phone would mean scrolling inside a scroll.
 */

export default function MockWindow({
  address,
  badge,
  children,
}: {
  /** Shown in the address pill. A plausible host, not a real one. */
  address: string
  /** Optional right-hand label, e.g. a refresh interval. */
  badge?: string
  children: React.ReactNode
}) {
  return (
    <div className="raised rounded-xl border border-paper/[0.12] bg-ink overflow-hidden">
      {/* Chrome bar */}
      <div className="flex items-center gap-4 px-4 py-2.5 border-b border-paper/[0.08] bg-paper/[0.03]">
        <div className="flex items-center gap-2 shrink-0" aria-hidden>
          <span className="w-[10px] h-[10px] rounded-full bg-paper/20" />
          <span className="w-[10px] h-[10px] rounded-full bg-paper/15" />
          <span className="w-[10px] h-[10px] rounded-full bg-paper/10" />
        </div>

        <div className="flex-1 min-w-0 flex justify-center">
          <span className="inline-flex items-center gap-2 max-w-full rounded-md bg-paper/[0.05] border border-paper/[0.08] px-3 py-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
              <path d="M6 10V8a6 6 0 1 1 12 0v2" stroke="rgba(244,242,236,0.35)" strokeWidth="2.5" strokeLinecap="round" />
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

      {/* Viewport. Fixed above md so cycling does not resize the window. */}
      <div className="md:h-[520px] lg:h-[560px] overflow-hidden">{children}</div>
    </div>
  )
}
