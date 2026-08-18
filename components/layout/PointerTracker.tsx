'use client'
import { useEffect } from 'react'

// One pointermove listener for the whole site.
//
// It writes two things per frame:
//
//   --x / --xp / --y / --yp on :root — viewport coordinates, still used for the
//   hue ramp and by anything that wants a global pointer position.
//
//   --gx / --gy on each glow surface — the same pointer position expressed in
//   that element's own coordinate space.
//
// The second one exists to get rid of background-attachment: fixed. The glow
// gradients are centred on the pointer, and they used to achieve that by
// painting into a viewport-sized positioning area, which is what fixed
// attachment does. That cannot be composited: the background is anchored to the
// viewport while the element moves under it, so every one of them repainted on
// every scroll frame — 47 of them on the home page.
//
// With element-local coordinates the gradient is painted in the element's own
// box, so scrolling changes nothing about what the element looks like and the
// compositor can just move it. Scrolling now does no work here at all: local
// coordinates are recomputed on pointer movement only. The visible consequence
// is that while you scroll without moving the mouse, the glow rides along with
// its card instead of staying put on screen, and corrects on the next movement.
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

      // Read every rect first, then write. Interleaving the two would force a
      // layout per element instead of one for the batch.
      const els = document.querySelectorAll<HTMLElement>('[data-glowcard], [data-glow]')
      const rects: DOMRect[] = []
      for (let i = 0; i < els.length; i++) rects.push(els[i].getBoundingClientRect())

      const vh = window.innerHeight
      for (let i = 0; i < els.length; i++) {
        const r = rects[i]
        // Offscreen surfaces are not painted, so their glow position is not
        // worth computing. content-visibility already skips most of them.
        if (r.bottom < 0 || r.top > vh) continue
        els[i].style.setProperty('--gx', (x - r.left).toFixed(1))
        els[i].style.setProperty('--gy', (y - r.top).toFixed(1))
      }
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
