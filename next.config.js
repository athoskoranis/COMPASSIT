/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [{ protocol: 'https', hostname: 'placehold.co' }],
  },
  async redirects() {
    return [
      {
        // The blog bot writes every new post with
        // publisher.logo = /brand/compass-its-horizontal-dark.svg, a filename
        // BRAND.md documents but that has never existed in /public/brand — so
        // all eight existing posts pointed their publisher logo at a 404. Those
        // now reference #organization instead and inherit its logo, but the bot
        // template lives outside this repo and cannot be changed from here, so
        // the URL itself has to resolve or every future post reintroduces the
        // break. Target is the same asset #organization declares.
        source: '/brand/compass-its-horizontal-dark.svg',
        destination: '/brand/Monogram Transparent.svg',
        permanent: true,
      },
    ]
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
