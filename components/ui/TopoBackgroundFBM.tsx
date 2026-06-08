'use client'
import { useEffect, useRef } from 'react'

function createNoise(seed: number) {
  const S = 256
  const table: number[] = []
  let s = seed
  for (let i = 0; i < S * S; i++) {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    table[i] = (s >>> 0) / 0xffffffff
  }
  function smooth(t: number) { return t * t * (3 - 2 * t) }
  return function (x: number, y: number) {
    const xi = Math.floor(x) & (S - 1), yi = Math.floor(y) & (S - 1)
    const xf = x - Math.floor(x), yf = y - Math.floor(y)
    const u = smooth(xf), v = smooth(yf)
    const xi1 = (xi + 1) & (S - 1), yi1 = (yi + 1) & (S - 1)
    const a = table[yi * S + xi],   b = table[yi * S + xi1]
    const c = table[yi1 * S + xi],  d = table[yi1 * S + xi1]
    return a + u * (b - a) + v * ((c + u * (d - c)) - (a + u * (b - a)))
  }
}

function fbm(noise: (x: number, y: number) => number, x: number, y: number, octaves = 5) {
  let val = 0, amp = 0.5, freq = 1, max = 0
  for (let i = 0; i < octaves; i++) {
    val += noise(x * freq, y * freq) * amp
    max += amp; amp *= 0.5; freq *= 2.1
  }
  return val / max
}

export default function TopoBackgroundFBM() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const noise = createNoise(42)

    function draw() {
      const W = canvas!.width = window.innerWidth
      const H = canvas!.height = window.innerHeight
      ctx!.clearRect(0, 0, W, H)

      const cell = 6, scale = 0.0028, levels = 28
      const cols = Math.ceil(W / cell) + 2
      const rows = Math.ceil(H / cell) + 2

      const field: number[] = new Array(rows * cols)
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          field[r * cols + c] = fbm(noise, c * cell * scale, r * cell * scale)

      function lerp(a: number, b: number, t: number) { return (t - a) / (b - a) }

      for (let lv = 0; lv < levels; lv++) {
        const threshold = lv / levels
        const isMajor = lv % 4 === 0
        ctx!.beginPath()
        ctx!.strokeStyle = isMajor ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.055)'
        ctx!.lineWidth = isMajor ? 0.9 : 0.5

        for (let r = 0; r < rows - 1; r++) {
          for (let c = 0; c < cols - 1; c++) {
            const x = c * cell, y = r * cell
            const v00 = field[r * cols + c],   v10 = field[r * cols + c + 1]
            const v01 = field[(r+1) * cols + c], v11 = field[(r+1) * cols + c + 1]
            const idx =
              (v00 >= threshold ? 8 : 0) | (v10 >= threshold ? 4 : 0) |
              (v11 >= threshold ? 2 : 0) | (v01 >= threshold ? 1 : 0)
            if (idx === 0 || idx === 15) continue
            const top    = { x: x + lerp(v00, v10, threshold) * cell, y }
            const right  = { x: x + cell, y: y + lerp(v10, v11, threshold) * cell }
            const bottom = { x: x + lerp(v01, v11, threshold) * cell, y: y + cell }
            const left   = { x, y: y + lerp(v00, v01, threshold) * cell }
            type Pt = { x: number; y: number }
            const segs: [Pt, Pt][] = []
            if      (idx === 1 || idx === 14) segs.push([left, bottom])
            else if (idx === 2 || idx === 13) segs.push([bottom, right])
            else if (idx === 3 || idx === 12) segs.push([left, right])
            else if (idx === 4 || idx === 11) segs.push([top, right])
            else if (idx === 5)  { segs.push([top, left]);  segs.push([bottom, right]) }
            else if (idx === 6 || idx === 9)  segs.push([top, bottom])
            else if (idx === 7 || idx === 8)  segs.push([top, left])
            else if (idx === 10) { segs.push([top, right]); segs.push([left, bottom]) }
            for (const [a, b] of segs) { ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y) }
          }
        }
        ctx!.stroke()
      }
    }

    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
