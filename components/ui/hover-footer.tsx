'use client'
import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string
  duration?: number
  automatic?: boolean
  className?: string
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Replay animation each time the SVG enters the viewport
  useEffect(() => {
    const el = svgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(false)
          requestAnimationFrame(() => setShouldAnimate(true))
        } else {
          setShouldAnimate(false)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100
      setMaskPosition({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` })
    }
  }, [cursor])

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn('select-none uppercase cursor-pointer', className)}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%"   stopColor="#2BB3E6" />
              <stop offset="40%"  stopColor="#E8A33D" />
              <stop offset="70%"  stopColor="#2BB3E6" />
              <stop offset="100%" stopColor="#E8A33D" />
            </>
          )}
        </linearGradient>

        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%"   stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Faint resting outline — appears on hover */}
      <text
        x="50%" y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="52"
        fontFamily="Archivo, Helvetica, sans-serif"
        fontWeight="700"
        strokeWidth="0.4"
        fill="transparent"
        style={{ stroke: 'rgba(244,242,236,0.10)', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s' }}
      >
        {text}
      </text>

      {/* Draw-on stroke — starts when scrolled into view */}
      <text
        x="50%" y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="52"
        fontFamily="Archivo, Helvetica, sans-serif"
        fontWeight="700"
        strokeWidth="0.4"
        fill="transparent"
        style={{
          stroke: '#2BB3E6',
          strokeDasharray: 3000,
          strokeDashoffset: shouldAnimate ? undefined : 3000,
          animation: shouldAnimate ? 'compass-trace 5s ease-in-out forwards' : 'none',
        }}
      >
        {text}
      </text>

      {/* Mouse-follow gradient reveal */}
      <text
        x="50%" y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="52"
        fontFamily="Archivo, Helvetica, sans-serif"
        fontWeight="700"
        strokeWidth="0.4"
        stroke="url(#textGradient)"
        fill="transparent"
        mask="url(#textMask)"
      >
        {text}
      </text>
    </svg>
  )
}

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(125% 125% at 50% 10%, rgba(11,14,16,0.4) 50%, rgba(43,179,230,0.10) 100%)',
      }}
    />
  )
}
