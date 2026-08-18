'use client'
import { usePathname } from 'next/navigation'
import WebGLBackground from '@/components/ui/WebGLBackground'

// Routes that get the animated WebGL field. Everything else gets the static
// contour texture — same visual as the old canvas renderer, none of the cost.
const WEBGL_ROUTES = new Set(['/', '/contact'])

export default function SiteBackground() {
  const pathname = usePathname()

  if (WEBGL_ROUTES.has(pathname)) return <WebGLBackground />

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
      style={{ backgroundImage: "url('/images/topo-contours.svg')" }}
    />
  )
}
