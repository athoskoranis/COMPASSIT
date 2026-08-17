import React, { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  variant?: 'cyan' | 'amber' | 'indigo'
}

// Glow intensity sits at roughly half the original. The first reduction pass went
// too far and lost the sweep entirely. Border spot opacity is the main dial; the
// outer bloom (--outer) and the brightness filter in globals.css carry the rest.
const variants = {
  cyan: {
    base: 190, spread: 65, saturation: 55, lightness: 76,
    borderSpotOpacity: 0.6, borderLightOpacity: 0.4, bgSpotOpacity: 0.05,
    backupBorder: 'hsl(215 20% 22% / 0.9)',
  },
  amber: {
    base: 36, spread: 24, saturation: 88, lightness: 52,
    borderSpotOpacity: 0.6, borderLightOpacity: 0.4, bgSpotOpacity: 0.075,
    backupBorder: 'hsl(36 60% 35% / 0.9)',
  },
  indigo: {
    base: 258, spread: 12, saturation: 85, lightness: 32,
    borderSpotOpacity: 0.55, borderLightOpacity: 0.06, bgSpotOpacity: 0.12,
    backupBorder: 'hsl(258 70% 20% / 0.95)',
  },
}


// Pointer tracking is global (see components/layout/PointerTracker) and the CSS
// lives in globals.css, so this is a plain server component — no per-instance
// listener, no duplicated <style> tag.
//
// No backdrop-blur on the card. What sits behind it is the WebGL field: smooth
// gradients, and blurring a smooth gradient by 2px returns the same gradient. It
// cost ten composited layers on the home page, each re-running a backdrop filter
// per scroll frame, for an effect that cannot be seen. The .glass treatment on
// the hero card keeps its blur — 20px over the busiest part of the field is a
// real effect, and it is one element rather than ten.
export default function GlowCard({ children, className = '', variant = 'cyan' }: GlowCardProps) {
  const v = variants[variant]

  return (
    <div
      data-glowcard
      style={{
        '--base': v.base,
        '--spread': v.spread,
        '--saturation': v.saturation,
        '--lightness': v.lightness,
        '--border-spot-opacity': v.borderSpotOpacity,
        '--border-light-opacity': v.borderLightOpacity,
        '--bg-spot-opacity': v.bgSpotOpacity,
        '--backup-border': v.backupBorder,
        // Must match the card's own rounded-* class below (rounded-xl = 20px).
        // globals.css derives the glow's corner from this as (--radius + --border),
        // which keeps the spotlight arc concentric with the card edge it traces.
        // It was 12 while the card was 20, so the glow corner turned tighter than
        // the card's — visible as the glow cutting inside the corner.
        '--radius': '20',
        '--border': '1.5',
        '--size': '300',
        '--outer': '0.55',
        '--border-size': 'calc(var(--border, 2) * 1px)',
        '--spotlight-size': 'calc(var(--size, 150) * 1px)',
        '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
        backgroundImage: `radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
          hsl(var(--hue, 200) calc(var(--saturation, 72) * 1%) calc(var(--lightness, 58) * 1%) / var(--bg-spot-opacity, 0.07)),
          transparent
        )`,
        backgroundColor: 'hsl(0 0% 60% / 0.06)',
        backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed',
        border: 'var(--border-size) solid var(--backup-border)',
        boxShadow: '0 1rem 2rem -1rem rgba(0,0,0,0.8)',
        position: 'relative',
      } as unknown as React.CSSProperties}
      className={`rounded-xl ${className}`}
    >
      <div data-glowcard />
      {children}
    </div>
  )
}
