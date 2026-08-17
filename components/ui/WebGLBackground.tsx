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
#define CYAN   vec3(0.12, 0.54, 0.72)
#define INDIGO vec3(0.24, 0.13, 0.50)

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

  float Nc = 8.0;
  float vc = h * Nc;
  float wc = fwidth(vc);
  float lineDist = abs(fract(vc - 0.5) - 0.5);
  float lineMask = 1.0 - smoothstep(0.0, wc * 2.0, lineDist);
  col = mix(col, LINE, lineMask * 0.018);

  float d0=distance(p,a[0]); float w0=exp(-d0*d0*6.0)*1.00;
  float d1=distance(p,a[1]); float w1=exp(-d1*d1*2.6)*0.92;
  float d2=distance(p,a[2]); float w2=exp(-d2*d2*6.0)*1.00;
  float d3=distance(p,a[3]); float w3=exp(-d3*d3*6.0)*1.00;
  float d4=distance(p,a[4]); float w4=exp(-d4*d4*2.6)*0.92;
  float p0=w0*w0; float p1=w1*w1; float p2=w2*w2; float p3=w3*w3; float p4=w4*w4;
  float pSum=p0+p1+p2+p3+p4+0.0001;
  vec3 blobColor=(c[0]*p0+c[1]*p1+c[2]*p2+c[3]*p3+c[4]*p4)/pSum;
  float influence=min(w0+w1+w2+w3+w4,1.0)*0.52;
  col=mix(col,blobColor,influence);

  gl_FragColor = vec4(saturate3(col), 1.0);
}`

// The field is smooth gradients plus a contour line at 1.8% opacity. There is
// nothing in it a retina pixel grid resolves, so it renders at CSS resolution
// and the browser upscales. This used to run at min(devicePixelRatio, 2), which
// on a 2x display is four times the fragment work for no visible return -- and
// this shader is not cheap per fragment: two fbm() calls, five octaves each.
const RENDER_SCALE = 1

// The drift is uTime * 0.22 for the blobs and uTime * 0.012 for the contours.
// At that speed 30fps and 60fps are indistinguishable, and halving the frame
// rate halves the GPU time competing with scroll compositing.
const TARGET_FPS = 30
const FRAME_MS = 1000 / TARGET_FPS

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

    const uRes  = gl.getUniformLocation(prog, 'uRes')
    const uTime = gl.getUniformLocation(prog, 'uTime')

    // There were uMouse, uMouseIn and uClicks uniforms here, fed by three window
    // pointer listeners, an easing step and a four-slot click ring buffer -- and
    // main() referenced none of them. The shader has no pointer response at all.
    // The listeners were the part that mattered: pointermove on window without
    // {passive: true} is a scroll-blocking hazard, and it duplicated the one
    // PointerTracker already runs for the whole site.

    const resize = () => {
      const w = Math.max(2, Math.round(window.innerWidth * RENDER_SCALE))
      const h = Math.max(2, Math.round(window.innerHeight * RENDER_SCALE))
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h }
    }
    window.addEventListener('resize', resize, { passive: true })
    resize()

    const t0 = performance.now()
    let raf = 0
    let lastFrame = 0

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const draw = () => {
      const t = (performance.now() - t0) / 1000

      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)

      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      if (now - lastFrame < FRAME_MS) return
      lastFrame = now
      draw()
    }

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      if (raf) { cancelAnimationFrame(raf); raf = 0 }
    }

    // Reduced motion: render one static frame instead of animating.
    if (reducedMotion) {
      draw()
    } else {
      start()
    }

    // Don't burn CPU/GPU animating a field nobody is looking at.
    const onVisibility = () => {
      if (reducedMotion) return
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
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
