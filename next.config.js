/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first, WebP behind it. The default is WebP only, so every
    // photograph on the site was shipping at WebP weight when most browsers
    // would have taken an AVIF appreciably smaller from the same source.
    // Next negotiates on the Accept header and falls back along this list, so
    // a browser without AVIF still gets WebP and one without either still gets
    // the original JPEG — nothing regresses. Largest Contentful Paint is a
    // ranking signal, and this is the cheapest place to buy it.
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [{ protocol: 'https', hostname: 'placehold.co' }],
  },
  async redirects() {
    // The brand assets arrived from the vendor under these names and were
    // renamed to the ones BRAND.md specifies. Two reasons these have to keep
    // resolving rather than 404:
    //
    //   1. An earlier commit shipped a 308 from compass-its-horizontal-dark.svg
    //      to "Monogram Transparent.svg" as a stopgap for the blog bot. 308 is
    //      cached hard by browsers and crawlers, so anyone who loaded that URL
    //      while it was live still follows it to the old path. That stopgap is
    //      gone now the real file exists under the right name, but the cached
    //      redirects outlive it.
    //   2. Anything external that already links a vendor-named asset.
    return [
      { source: '/brand/Secondary%20Transparent.svg', destination: '/brand/compass-its-horizontal-dark.svg', permanent: true },
      { source: '/brand/Primary%20Transparent.svg', destination: '/brand/compass-its-stacked-dark.svg', permanent: true },
      { source: '/brand/Monogram%20Transparent.svg', destination: '/brand/compass-its-monogram-dark.svg', permanent: true },
      { source: '/brand/Monogram%20Hero.svg', destination: '/brand/compass-its-monogram-dark-hero.svg', permanent: true },
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
