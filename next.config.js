/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [{ protocol: 'https', hostname: 'placehold.co' }],
  },
  async headers() {
    return [
      {
        // Deterministic generated texture — never changes without a filename
        // change, so let it sit in the browser cache instead of revalidating.
        source: '/images/topo-contours.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // Same deal: the aurora contour tile, lifted out of globals.css so it
        // stops riding in a render-blocking stylesheet on pages that never
        // draw it. Fixed paths, so it caches on the same terms.
        source: '/images/topo-lines.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

module.exports = nextConfig
