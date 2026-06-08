'use client'
import { useEffect, useRef } from 'react'

// ─── Ken Perlin's improved noise (inline, no package) ───────────────────────
const PERM = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,
103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,
252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,
68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,
230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,
76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,
186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,
59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,
70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,
178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,
241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,
176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,
128,195,78,66,215,61,156,180]
const p: number[] = new Array(512)
for (let i = 0; i < 256; i++) { p[i] = PERM[i]; p[256 + i] = PERM[i] }

function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10) }
function lrp(t: number, a: number, b: number) { return a + t * (b - a) }
function grad(hash: number, x: number, y: number, z: number) {
  const h = hash & 15
  const u = h < 8 ? x : y
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z
  return ((h & 1) ? -u : u) + ((h & 2) ? -v : v)
}
function perlin(x: number, y: number, z: number) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255
  x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z)
  const u = fade(x), v = fade(y), w = fade(z)
  const A = p[X]+Y, AA = p[A]+Z, AB = p[A+1]+Z
  const B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z
  return lrp(w,
    lrp(v, lrp(u, grad(p[AA],   x,   y,   z), grad(p[BA],   x-1, y,   z)),
           lrp(u, grad(p[AB],   x,   y-1, z), grad(p[BB],   x-1, y-1, z))),
    lrp(v, lrp(u, grad(p[AA+1], x,   y,   z-1), grad(p[BA+1], x-1, y,   z-1)),
           lrp(u, grad(p[AB+1], x,   y-1, z-1), grad(p[BB+1], x-1, y-1, z-1))))
}
// Map [-1,1] → [0,100] matching the reference scale
function noise(x: number, y: number, z: number) { return (perlin(x, y, z) + 1) * 50 }
// ────────────────────────────────────────────────────────────────────────────

const thresholdIncrement         = 5
const thickLineThresholdMultiple = 3
const res                        = 8
const baseZOffset                = 0.0001
const lineColorMinor             = '#EDEDED45'
const lineColorMajor             = '#EDEDEEB0'

export default function TopoBackgroundStatic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let cols = 0, rows = 0, zOffset = 0, currentThreshold = 0
    let noiseMin = 100, noiseMax = 0
    let inputValues: number[][] = []
    let rafId = 0, alive = true

    function canvasSize() {
      const dpr = window.devicePixelRatio || 1
      const W = window.innerWidth, H = window.innerHeight
      canvas!.width  = W * dpr
      canvas!.height = H * dpr
      canvas!.style.width  = W + 'px'
      canvas!.style.height = H + 'px'
      ctx!.scale(dpr, dpr)
      cols = Math.floor(W / res) + 1
      rows = Math.floor(H / res) + 1
    }

    function generateNoise() {
      noiseMin = 100; noiseMax = 0
      for (let y = 0; y < rows; y++) {
        inputValues[y] = []
        for (let x = 0; x <= cols; x++) {
          const v = noise(x * 0.02, y * 0.02, zOffset)
          inputValues[y][x] = v
          if (v < noiseMin) noiseMin = v
          if (v > noiseMax) noiseMax = v
        }
      }
    }

    function linInterpolate(x0: number, x1: number, y0 = 0, y1 = 1) {
      if (x0 === x1) return 0
      return y0 + ((y1 - y0) * (currentThreshold - x0)) / (x1 - x0)
    }

    function binaryToType(nw: number, ne: number, se: number, sw: number) {
      return [nw, ne, se, sw].reduce((res: number, x: number) => (res << 1) | x, 0)
    }

    function line(from: number[], to: number[]) {
      ctx!.moveTo(from[0], from[1]); ctx!.lineTo(to[0], to[1])
    }

    function placeLines(gridValue: number, x: number, y: number) {
      const nw = inputValues[y][x], ne = inputValues[y][x+1]
      const se = inputValues[y+1][x+1], sw = inputValues[y+1][x]
      let a, b, c, d
      switch (gridValue) {
        case 1: case 14:
          c = [x*res + res*linInterpolate(sw,se), y*res+res]
          d = [x*res, y*res + res*linInterpolate(nw,sw)]
          line(d,c); break
        case 2: case 13:
          b = [x*res+res, y*res + res*linInterpolate(ne,se)]
          c = [x*res + res*linInterpolate(sw,se), y*res+res]
          line(b,c); break
        case 3: case 12:
          b = [x*res+res, y*res + res*linInterpolate(ne,se)]
          d = [x*res, y*res + res*linInterpolate(nw,sw)]
          line(d,b); break
        case 4: case 11:
          a = [x*res + res*linInterpolate(nw,ne), y*res]
          b = [x*res+res, y*res + res*linInterpolate(ne,se)]
          line(a,b); break
        case 5:
          a = [x*res + res*linInterpolate(nw,ne), y*res]
          b = [x*res+res, y*res + res*linInterpolate(ne,se)]
          c = [x*res + res*linInterpolate(sw,se), y*res+res]
          d = [x*res, y*res + res*linInterpolate(nw,sw)]
          line(d,a); line(c,b); break
        case 6: case 9:
          a = [x*res + res*linInterpolate(nw,ne), y*res]
          c = [x*res + res*linInterpolate(sw,se), y*res+res]
          line(c,a); break
        case 7: case 8:
          a = [x*res + res*linInterpolate(nw,ne), y*res]
          d = [x*res, y*res + res*linInterpolate(nw,sw)]
          line(d,a); break
        case 10:
          a = [x*res + res*linInterpolate(nw,ne), y*res]
          b = [x*res+res, y*res + res*linInterpolate(ne,se)]
          c = [x*res + res*linInterpolate(sw,se), y*res+res]
          d = [x*res, y*res + res*linInterpolate(nw,sw)]
          line(a,b); line(c,d); break
      }
    }

    function renderAtThreshold() {
      const isMajor = currentThreshold % (thresholdIncrement * thickLineThresholdMultiple) === 0
      ctx!.beginPath()
      ctx!.strokeStyle = isMajor ? lineColorMajor : lineColorMinor
      ctx!.lineWidth   = isMajor ? 1.5 : 0.7
      for (let y = 0; y < inputValues.length - 1; y++) {
        for (let x = 0; x < inputValues[y].length - 1; x++) {
          if (inputValues[y][x] > currentThreshold && inputValues[y][x+1] > currentThreshold &&
              inputValues[y+1][x+1] > currentThreshold && inputValues[y+1][x] > currentThreshold) continue
          if (inputValues[y][x] < currentThreshold && inputValues[y][x+1] < currentThreshold &&
              inputValues[y+1][x+1] < currentThreshold && inputValues[y+1][x] < currentThreshold) continue
          const gv = binaryToType(
            inputValues[y][x]         > currentThreshold ? 1 : 0,
            inputValues[y][x+1]       > currentThreshold ? 1 : 0,
            inputValues[y+1][x+1]     > currentThreshold ? 1 : 0,
            inputValues[y+1][x]       > currentThreshold ? 1 : 0,
          )
          placeLines(gv, x, y)
        }
      }
      ctx!.stroke()
    }

    function animate() {
      if (!alive) return
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight)
      zOffset += baseZOffset
      noiseMin = 100; noiseMax = 0
      generateNoise()
      const lo = Math.floor(noiseMin / thresholdIncrement) * thresholdIncrement
      const hi = Math.ceil(noiseMax  / thresholdIncrement) * thresholdIncrement
      for (let t = lo; t < hi; t += thresholdIncrement) {
        currentThreshold = t
        renderAtThreshold()
      }
      rafId = requestAnimationFrame(animate)
    }

    canvasSize()
    animate()
    window.addEventListener('resize', canvasSize)
    return () => { alive = false; cancelAnimationFrame(rafId); window.removeEventListener('resize', canvasSize) }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
