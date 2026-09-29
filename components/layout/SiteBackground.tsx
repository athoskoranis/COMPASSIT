'use client'
import { usePathname } from 'next/navigation'
import WebGLBackground from '@/components/ui/WebGLBackground'

// Routes that get the animated WebGL field on top. Everything else gets the
// static contour texture alone — same visual as the old canvas renderer, none of
// the cost.
const WEBGL_ROUTES = new Set(['/', '/contact'])

const CONTOURS = "url('/images/topo-contours.svg')"

// A still approximation of the field's resting state, painted underneath it.
//
// Decision 143 put the plain contour texture here, which closed the "bare ink"
// gap but swapped one visible change for another: the contour sheet is grey
// linework and the field is a colour wash, so the handover read as the page
// changing its mind. The fix is for the placeholder to look like the thing it is
// standing in for.
//
// These values are the shader's, not invented: FRAG mixes five drifting blobs
// over BG at BLOB_INTENSITY 0.25, where BG is vec3(0.0431, 0.0549, 0.0627) —
// ink #0B0E10 — CYAN is vec3(0.12, 0.54, 0.72) → #1F8AB8, and INDIGO is
// vec3(0.24, 0.13, 0.50) → #3D2180. The blob centres below are a[0..4] at t=0,
// rounded to viewport percentages, and the alphas land near that 0.25 mix. The
// shader draws its own contour lines from fbm, which is why the same contour
// sheet still sits on top of the wash.
//
// It will never match frame for frame — it is a still of a moving thing — but it
// puts the right colours in roughly the right places, so the field arriving reads
// as the picture starting to move rather than as a different picture.
const FIELD_AT_REST = [
  'radial-gradient(60% 55% at 27% 80%, rgba(31,138,184,0.20), transparent 70%)',
  'radial-gradient(55% 50% at 65% 33%, rgba(31,138,184,0.14), transparent 70%)',
  'radial-gradient(65% 60% at 80% 80%, rgba(61,33,128,0.24), transparent 72%)',
  'radial-gradient(70% 60% at 100% 90%, rgba(61,33,128,0.18), transparent 70%)',
  'radial-gradient(50% 45% at 64% 92%, rgba(31,138,184,0.10), transparent 70%)',
].join(', ')

export default function SiteBackground() {
  const pathname = usePathname()
  const animated = WEBGL_ROUTES.has(pathname)

  // Layering is safe because the shader writes alpha 1.0: once the canvas reaches
  // full opacity it covers this completely, so the two never fight.
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundColor: '#0B0E10',
          backgroundImage: animated ? `${CONTOURS}, ${FIELD_AT_REST}` : CONTOURS,
        }}
      />
      {animated ? <WebGLBackground /> : null}
    </>
  )
}
