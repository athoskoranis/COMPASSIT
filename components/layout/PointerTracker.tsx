'use client'
import { useEffect } from 'react'

// One pointermove listener for the whole site. GlowCard and the orbit ring read
// --x / --xp / --y / --yp off the root element, so they all share these writes
// instead of each registering its own listener. Their glow gradients use
// background-attachment: fixed, so viewport coordinates are what they want.
export default function PointerTracker() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0
    let x = 0
    let y = 0

    const flush = () => {
      frame = 0
      root.style.setProperty('--x', x.toFixed(2))
      root.style.setProperty('--xp', (x / window.innerWidth).toFixed(3))
      root.style.setProperty('--y', y.toFixed(2))
      root.style.setProperty('--yp', (y / window.innerHeight).toFixed(3))
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      // Coalesce to one write per frame — pointermove can fire far more often.
      if (!frame) frame = requestAnimationFrame(flush)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
