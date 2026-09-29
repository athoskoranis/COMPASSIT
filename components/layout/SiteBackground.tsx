'use client'
import { usePathname } from 'next/navigation'
import WebGLBackground from '@/components/ui/WebGLBackground'

// Routes that get the animated WebGL field on top. Everything else gets the
// static contour texture alone — same visual as the old canvas renderer, none of
// the cost.
const WEBGL_ROUTES = new Set(['/', '/contact'])

export default function SiteBackground() {
  const pathname = usePathname()

  // The contour texture paints on EVERY route, including the WebGL ones, and it
  // is the layer underneath rather than an alternative to the field.
  //
  // Decisions 136 and 137 moved the field off the critical path and then gave it
  // a fixed delay after load. That was right for the metrics and it left a
  // visible hole: on / and /contact the field was the ONLY background, so those
  // pages showed bare ink for the first few seconds and then something faded in.
  // Painting the contours immediately closes the gap without touching the
  // field's schedule — the page looks finished at first paint, and the field
  // becomes an enrichment that arrives when it is cheap to arrive.
  //
  // Layering is safe because the shader writes alpha 1.0: once the canvas
  // reaches full opacity it covers this completely, so the two never fight.
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/images/topo-contours.svg')" }}
      />
      {WEBGL_ROUTES.has(pathname) ? <WebGLBackground /> : null}
    </>
  )
}
