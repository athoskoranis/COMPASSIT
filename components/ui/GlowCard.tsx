'use client'

import React, { useEffect, useRef, ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  variant?: 'cyan' | 'amber' | 'indigo'
}

const variants = {
  cyan: {
    '--base': '190',
    '--spread': '65',
    '--saturation': '55',
    '--lightness': '76',
    '--border-spot-opacity': '1',
    '--border-light-opacity': '0.75',
    '--bg-spot-opacity': '0.06',
    '--backup-border': 'hsl(215 20% 22% / 0.9)',
  },
  amber: {
    '--base': '36',
    '--spread': '24',
    '--saturation': '88',
    '--lightness': '52',
    '--border-spot-opacity': '1',
    '--border-light-opacity': '0.80',
    '--bg-spot-opacity': '0.10',
    '--backup-border': 'hsl(36 60% 35% / 0.9)',
  },
  indigo: {
    '--base': '258',
    '--spread': '18',
    '--saturation': '72',
    '--lightness': '58',
    '--border-spot-opacity': '1',
    '--border-light-opacity': '0.85',
    '--bg-spot-opacity': '0.10',
    '--backup-border': 'hsl(258 50% 28% / 0.9)',
  },
}

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
    <div
      ref={cardRef}
      data-glow
      style={{
        ...v,
        '--radius': '12',
        '--border': '1.5',
        '--backdrop': 'hsl(0 0% 60% / 0.06)',
        '--size': '300',
        '--outer': '1',
        '--border-size': 'calc(var(--border, 2) * 1px)',
        '--spotlight-size': 'calc(var(--size, 150) * 1px)',
        '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
        backgroundImage: `radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
          hsl(var(--hue, 200) calc(var(--saturation, 72) * 1%) calc(var(--lightness, 58) * 1%) / var(--bg-spot-opacity, 0.07)), transparent
        )`,
        backgroundColor: 'var(--backdrop, transparent)',
        backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed',
        boxShadow: '0 0 0 var(--border-size) var(--backup-border), 0 1rem 2rem -1rem rgba(0,0,0,0.8)',
        position: 'relative',
        touchAction: 'auto',
      } as unknown as React.CSSProperties}
      className={`rounded-xl backdrop-blur-[2px] ${className}`}
    >
      <div ref={innerRef} data-glow />
      {children}
    </div>
  )
}
