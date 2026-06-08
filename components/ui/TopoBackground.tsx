'use client'
import { useEffect, useRef } from 'react'
import { noise } from '@chriscourses/perlin-noise'

// ── Editable values (matching reference exactly) ─────────────────────────────
const thresholdIncrement      = 5
const thickLineThresholdMultiple = 3
const res                     = 8
const baseZOffset             = 0.0001
const lineColor               = '#EDEDED80'
// ─────────────────────────────────────────────────────────────────────────────

export default function TopoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let cols = 0
    let rows = 0
    let zOffset = 0
    let currentThreshold = 0
    let noiseMin = 100
    let noiseMax = 0
    let inputValues: number[][] = []
    let rafId = 0
    let alive = true

    function canvasSize() {
      canvas!.width  = window.innerWidth  * window.devicePixelRatio
      canvas!.height = window.innerHeight * window.devicePixelRatio
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas!.style.width  = window.innerWidth  + 'px'
      canvas!.style.height = window.innerHeight + 'px'
      cols = Math.floor(window.innerWidth  / res) + 1
      rows = Math.floor(window.innerHeight / res) + 1
    }

    function generateNoise() {
      for (let y = 0; y < rows; y++) {
        inputValues[y] = []
        for (let x = 0; x <= cols; x++) {
          inputValues[y][x] = noise(x * 0.02, y * 0.02, zOffset) * 100
          if (inputValues[y][x] < noiseMin) noiseMin = inputValues[y][x]
          if (inputValues[y][x] > noiseMax) noiseMax = inputValues[y][x]
        }
      }
    }

    function renderAtThreshold() {
      ctx!.beginPath()
      ctx!.strokeStyle = lineColor
      ctx!.lineWidth = currentThreshold % (thresholdIncrement * thickLineThresholdMultiple) === 0 ? 2 : 1

      for (let y = 0; y < inputValues.length - 1; y++) {
        for (let x = 0; x < inputValues[y].length - 1; x++) {
          if (
            inputValues[y][x] > currentThreshold &&
            inputValues[y][x + 1] > currentThreshold &&
            inputValues[y + 1][x + 1] > currentThreshold &&
            inputValues[y + 1][x] > currentThreshold
          ) continue
          if (
            inputValues[y][x] < currentThreshold &&
            inputValues[y][x + 1] < currentThreshold &&
            inputValues[y + 1][x + 1] < currentThreshold &&
            inputValues[y + 1][x] < currentThreshold
          ) continue

          const gridValue = binaryToType(
            inputValues[y][x]         > currentThreshold ? 1 : 0,
            inputValues[y][x + 1]     > currentThreshold ? 1 : 0,
            inputValues[y + 1][x + 1] > currentThreshold ? 1 : 0,
            inputValues[y + 1][x]     > currentThreshold ? 1 : 0,
          )
          placeLines(gridValue, x, y)
        }
      }
      ctx!.stroke()
    }

    function placeLines(gridValue: number, x: number, y: number) {
      const nw = inputValues[y][x]
      const ne = inputValues[y][x + 1]
      const se = inputValues[y + 1][x + 1]
      const sw = inputValues[y + 1][x]
      let a, b, c, d

      switch (gridValue) {
        case 1: case 14:
          c = [x * res + res * linInterpolate(sw, se), y * res + res]
          d = [x * res, y * res + res * linInterpolate(nw, sw)]
          line(d, c); break
        case 2: case 13:
          b = [x * res + res, y * res + res * linInterpolate(ne, se)]
          c = [x * res + res * linInterpolate(sw, se), y * res + res]
          line(b, c); break
        case 3: case 12:
          b = [x * res + res, y * res + res * linInterpolate(ne, se)]
          d = [x * res, y * res + res * linInterpolate(nw, sw)]
          line(d, b); break
        case 4: case 11:
          a = [x * res + res * linInterpolate(nw, ne), y * res]
          b = [x * res + res, y * res + res * linInterpolate(ne, se)]
          line(a, b); break
        case 5:
          a = [x * res + res * linInterpolate(nw, ne), y * res]
          b = [x * res + res, y * res + res * linInterpolate(ne, se)]
          c = [x * res + res * linInterpolate(sw, se), y * res + res]
          d = [x * res, y * res + res * linInterpolate(nw, sw)]
          line(d, a); line(c, b); break
        case 6: case 9:
          a = [x * res + res * linInterpolate(nw, ne), y * res]
          c = [x * res + res * linInterpolate(sw, se), y * res + res]
          line(c, a); break
        case 7: case 8:
          a = [x * res + res * linInterpolate(nw, ne), y * res]
          d = [x * res, y * res + res * linInterpolate(nw, sw)]
          line(d, a); break
        case 10:
          a = [x * res + res * linInterpolate(nw, ne), y * res]
          b = [x * res + res, y * res + res * linInterpolate(ne, se)]
          c = [x * res + res * linInterpolate(sw, se), y * res + res]
          d = [x * res, y * res + res * linInterpolate(nw, sw)]
          line(a, b); line(c, d); break
      }
    }

    function line(from: number[], to: number[]) {
      ctx!.moveTo(from[0], from[1])
      ctx!.lineTo(to[0], to[1])
    }

    function linInterpolate(x0: number, x1: number, y0 = 0, y1 = 1) {
      if (x0 === x1) return 0
      return y0 + ((y1 - y0) * (currentThreshold - x0)) / (x1 - x0)
    }

    function binaryToType(nw: number, ne: number, se: number, sw: number) {
      return [nw, ne, se, sw].reduce((res: number, x: number) => (res << 1) | x, 0)
    }

    function animate() {
      if (!alive) return
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight)
      zOffset += baseZOffset
      noiseMin = 100; noiseMax = 0
      generateNoise()

      const roundedNoiseMin = Math.floor(noiseMin / thresholdIncrement) * thresholdIncrement
      const roundedNoiseMax = Math.ceil(noiseMax  / thresholdIncrement) * thresholdIncrement

      for (let threshold = roundedNoiseMin; threshold < roundedNoiseMax; threshold += thresholdIncrement) {
        currentThreshold = threshold
        renderAtThreshold()
      }

      rafId = requestAnimationFrame(animate)
    }

    canvasSize()
    animate()
    window.addEventListener('resize', canvasSize)

    return () => {
      alive = false
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', canvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
