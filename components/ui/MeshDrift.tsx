'use client'
import { useEffect, useRef } from 'react'

export default function MeshDrift() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    window.addEventListener('resize', onResize)

    let mx = w / 2
    let my = h / 2
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const N = 58
    const CONNECT = 200
    const PULL_DIST = 240
    const PULL_STRENGTH = 0.014

    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      phase: Math.random() * Math.PI * 2,
    }))

    let raf: number

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      // Indigo bloom following cursor
      const bloom = ctx.createRadialGradient(mx, my, 0, mx, my, 300)
      bloom.addColorStop(0, 'rgba(95,38,185,0.68)')
      bloom.addColorStop(0.35, 'rgba(95,38,185,0.26)')
      bloom.addColorStop(1, 'rgba(95,38,185,0)')
      ctx.fillStyle = bloom
      ctx.fillRect(0, 0, w, h)

      // Move and draw nodes
      for (const p of pts) {
        p.phase += 0.007
        p.x += p.vx + Math.sin(p.phase * 0.6) * 0.12
        p.y += p.vy + Math.cos(p.phase * 0.5) * 0.12

        if (p.x < -30) p.x = w + 30
        else if (p.x > w + 30) p.x = -30
        if (p.y < -30) p.y = h + 30
        else if (p.y > h + 30) p.y = -30

        const dx = mx - p.x
        const dy = my - p.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < PULL_DIST) {
          const f = (1 - d / PULL_DIST) * PULL_STRENGTH
          p.x += dx * f
          p.y += dy * f
        }

        const pulse = 0.55 + 0.3 * Math.sin(p.phase)
        const r = 2.2 + 0.8 * Math.sin(p.phase)

        // Outer glow halo
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r + 8)
        halo.addColorStop(0, `rgba(43,179,230,${pulse * 0.35})`)
        halo.addColorStop(1, 'rgba(43,179,230,0)')
        ctx.beginPath()
        ctx.arc(p.x, p.y, r + 8, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(43,179,230,${pulse})`
        ctx.fill()
      }

      // Mesh lines
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i]
          const b = pts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT) {
            const alpha = (1 - d / CONNECT) * 0.22
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(43,179,230,${alpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
