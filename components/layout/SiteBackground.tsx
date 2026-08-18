'use client'
import { usePathname } from 'next/navigation'
import AuroraBackground from '@/components/ui/AuroraBackground'

// Routes that get the animated field. Everything else gets the static contour
// texture — same visual, none of the cost.
//
// This was WebGLBackground until the aurora replaced it. The shader drew a
// fullscreen field from two 5-octave fbm() calls per fragment, every frame,
// forever; the aurora is five gradient layers the compositor translates and
// nothing else. Same role, a fraction of the GPU. The shader is gone from the
// tree entirely; git history has it if the old look is ever wanted back.
const AURORA_ROUTES = new Set(['/', '/contact'])

export default function SiteBackground() {
  const pathname = usePathname()

  if (AURORA_ROUTES.has(pathname)) return <AuroraBackground />

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
      style={{ backgroundImage: "url('/images/topo-contours.svg')" }}
    />
  )
}
