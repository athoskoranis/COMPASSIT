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
    ]
  },
}

module.exports = nextConfig
