'use client'
import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }`

const FRAG = `
#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;
uniform float uMouseIn;
uniform vec4  uClicks[4];

float hash21(vec2 p){ vec3 p3=fract(vec3(p.xyx)*0.1031); p3+=dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
float vnoise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  float a=hash21(i), b=hash21(i+vec2(1,0)), c=hash21(i+vec2(0,1)), d=hash21(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}
float fbm(vec2 p){
  float v=0., a=0.5;
  for(int i=0;i<5;i++){ v += a*vnoise(p); p *= 2.02; a *= 0.5; }
  return v;
}
vec3 saturate3(vec3 v){ return clamp(v,0.0,1.0); }

#define BG     vec3(0.0431, 0.0549, 0.0627)
#define CYAN   vec3(0.1686, 0.7020, 0.9020)
#define INDIGO vec3(0.2078, 0.1490, 0.4784)

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float ar = uRes.x / uRes.y;
  vec2 p = vec2(uv.x*ar, uv.y);

  float t = uTime * 0.22;
  vec2 a[5];
  a[0] = vec2(0.15*ar + 0.40*ar*sin(t*0.9 + 0.3), 0.45 + 0.35*cos(t*0.7));
  a[1] = vec2(0.10*ar + 0.55*ar*sin(t*0.6 + 1.7), 0.15 + 0.40*cos(t*0.8 + 1.1));
  a[2] = vec2(0.50*ar + 0.45*ar*sin(t*0.5 + 2.4), 0.55 + 0.30*cos(t*1.0 + 0.6));
  a[3] = vec2(0.90*ar + 0.45*ar*cos(t*0.8 + 0.9), 0.50 + 0.40*sin(t*0.6 + 1.4));
  a[4] = vec2(0.85*ar + 0.50*ar*cos(t*0.7 + 2.0), 0.85 + 0.35*sin(t*0.9 + 0.2));

  vec3 c[5];
  c[0] = CYAN;
  c[1] = INDIGO;
  c[2] = CYAN;
  c[3] = CYAN;
  c[4] = INDIGO;

  vec3 col = BG;

  vec3 LINE = vec3(0.9255, 0.9294, 0.9373);
  float wt = uTime * 0.012;
  vec2 wq = p * 0.9;
  float h = fbm(wq + vec2(wt*0.5, 0.0));
  h += 0.08 * fbm(wq * 1.7 + vec2(-wt*0.3, wt*0.4));

  vec2 k1 = vec2(0.25*ar + 0.008*sin(wt*0.9), 0.55 + 0.008*cos(wt*0.7));
  vec2 k2 = vec2(0.55*ar + 0.008*cos(wt*0.8), 0.48 + 0.008*sin(wt*1.0));
  vec2 k3 = vec2(0.80*ar + 0.008*sin(wt*1.1), 0.40 + 0.008*cos(wt*0.9));
  float dk1 = distance(p, k1); dk1 *= dk1;
  float dk2 = distance(p, k2); dk2 *= dk2;
  float dk3 = distance(p, k3); dk3 *= dk3;
  h += 0.75 * exp(-dk1*6.0);
  h += 0.60 * exp(-dk2*9.0);
  h += 0.70 * exp(-dk3*7.5);

  float Nc = 13.0;
  float vc = h * Nc;
  float wc = fwidth(vc);
  float lineDist = abs(fract(vc - 0.5) - 0.5);
  float lineMask = 1.0 - smoothstep(0.0, wc * 1.2, lineDist);
  col = mix(col, LINE, lineMask * 0.035);

  float d0=distance(p,a[0]); float w0=exp(-d0*d0*7.1)*1.00;
  float d1=distance(p,a[1]); float w1=exp(-d1*d1*3.8)*0.48;
  float d2=distance(p,a[2]); float w2=exp(-d2*d2*7.1)*1.00;
  float d3=distance(p,a[3]); float w3=exp(-d3*d3*7.1)*1.00;
  float d4=distance(p,a[4]); float w4=exp(-d4*d4*3.8)*0.48;
  float p0=w0*w0; float p1=w1*w1; float p2=w2*w2; float p3=w3*w3; float p4=w4*w4;
  float pSum=p0+p1+p2+p3+p4+0.0001;
  vec3 blobColor=(c[0]*p0+c[1]*p1+c[2]*p2+c[3]*p3+c[4]*p4)/pSum;
  float influence=min(w0+w1+w2+w3+w4,1.0)*0.36;
  col=mix(col,blobColor,influence);

  gl_FragColor = vec4(saturate3(col), 1.0);
}`

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false })
    if (!gl) return
    gl.getExtension('OES_standard_derivatives')

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(sh))
      return sh
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes     = gl.getUniformLocation(prog, 'uRes')
    const uTime    = gl.getUniformLocation(prog, 'uTime')
    const uMouse   = gl.getUniformLocation(prog, 'uMouse')
    const uMouseIn = gl.getUniformLocation(prog, 'uMouseIn')
    const uClicks  = gl.getUniformLocation(prog, 'uClicks')

    let tx = 0.5, ty = 0.5, mx = 0.5, my = 0.5
    let targetIn = 0, easedIn = 0
    const clicks: number[][] = [[0, 0, -99, 0], [0, 0, -99, 0], [0, 0, -99, 0], [0, 0, -99, 0]]
    let nextSlot = 0

    const local = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      return [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height]
    }

    const onMove = (e: PointerEvent) => { const [x, y] = local(e); tx = x; ty = y; targetIn = 1 }
    const onLeave = () => { targetIn = 0 }
    const onDown = (e: PointerEvent) => {
      const [x, y] = local(e)
      clicks[nextSlot] = [x, y, performance.now() / 1000, 1.0]
      nextSlot = (nextSlot + 1) % 4
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('pointerdown', onDown)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      const w = Math.max(2, Math.round(window.innerWidth * dpr))
      const h = Math.max(2, Math.round(window.innerHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h }
    }
    window.addEventListener('resize', resize)
    resize()

    const t0 = performance.now()
    const clicksFlat = new Float32Array(16)
    let raf: number

    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = (performance.now() - t0) / 1000
      mx += (tx - mx) * 0.12
      my += (ty - my) * 0.12
      easedIn += (targetIn - easedIn) * 0.08

      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)
      gl.uniform2f(uMouse, mx, my)
      gl.uniform1f(uMouseIn, easedIn)

      for (let i = 0; i < 4; i++) {
        const c = clicks[i]
        const age = t - c[2]
        clicksFlat[i * 4 + 0] = c[0]
        clicksFlat[i * 4 + 1] = c[1]
        clicksFlat[i * 4 + 2] = age < 0 ? -1 : age
        clicksFlat[i * 4 + 3] = c[3]
      }
      gl.uniform4fv(uClicks, clicksFlat)

      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
