'use client'

import React, { useEffect, useRef, ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  variant?: 'cyan' | 'amber' | 'indigo'
}

const variants = {
  cyan: {
    base: 190, spread: 65, saturation: 55, lightness: 76,
    borderSpotOpacity: 1, borderLightOpacity: 0.75, bgSpotOpacity: 0.06,
    backupBorder: 'hsl(215 20% 22% / 0.9)',
  },
  amber: {
    base: 36, spread: 24, saturation: 88, lightness: 52,
    borderSpotOpacity: 1, borderLightOpacity: 0.80, bgSpotOpacity: 0.10,
    backupBorder: 'hsl(36 60% 35% / 0.9)',
  },
  indigo: {
    base: 258, spread: 12, saturation: 85, lightness: 32,
    borderSpotOpacity: 1, borderLightOpacity: 0.08, bgSpotOpacity: 0.18,
    backupBorder: 'hsl(258 70% 20% / 0.95)',
  },
}

const glowCSS = `
  @media (hover: none) and (pointer: coarse) {
    [data-glowcard]::before,
    [data-glowcard]::after {
      display: none;
    }
  }

  [data-glowcard]::before,
  [data-glowcard]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc((var(--radius) + var(--border)) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }
  [data-glowcard]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)),
      transparent 100%
    );
    filter: brightness(2);
  }
  [data-glowcard]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
  }
  [data-glowcard] [data-glowcard] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc((var(--radius) + var(--border)) * 1px);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }
  [data-glowcard] > [data-glowcard]::before {
    inset: -10px;
    border-width: 10px;
  }
`

export default function GlowCard({ children, className = '', variant = 'cyan' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2))
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2))
        cardRef.current.style.setProperty('--y', y.toFixed(2))
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2))
      }
    }
    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  const v = variants[variant]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: glowCSS }} />
      <div
        ref={cardRef}
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
          '--radius': '12',
          '--border': '1.5',
          '--size': '300',
          '--outer': '1',
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
        className={`rounded-xl backdrop-blur-[2px] ${className}`}
      >
        <div ref={innerRef} data-glowcard />
        {children}
      </div>
    </>
  )
}
