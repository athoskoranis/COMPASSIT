/**
 * The stylesheet /sitemap.xml points at.
 *
 * Served from a route handler rather than /public so the Content-Type is
 * certain: Chrome refuses a stylesheet that does not arrive as an XML or XSL
 * media type, and a static .xsl file can be served as octet-stream depending
 * on the host. XSLT 1.0 because that is what browsers implement.
 *
 * Presents the sitemap as a tree rather than a flat list, because the point of
 * reading a sitemap by eye is seeing the shape of the site — which pages hang
 * off which, and where a section is thinner than expected. The nesting is
 * derived from the URLs themselves: a section is a one-segment path, and its
 * children are every URL whose path starts with it. Nothing is hardcoded, so a
 * new route appears in the right place on its own.
 *
 * XSLT 1.0 has no grouping construct, so depth is counted the long way round:
 * string-length minus string-length of the same string with slashes stripped.
 *
 * Palette and typefaces are the DESIGN.md tokens — Ink, Paper, Signal Cyan,
 * Archivo and JetBrains Mono — so an inspection surface still looks like the
 * site it describes.
 */
export const dynamic = 'force-static'

const stylesheet = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="s xhtml">

  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:variable name="base" select="'https://compass-its.com'" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap — Compass IT Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <style>
          :root { color-scheme: dark; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: #0B0E10;
            color: #F4F2EC;
            font-family: Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif;
            font-size: 15px;
            line-height: 1.5;
          }
          .wrap { max-width: 1280px; margin: 0 auto; padding: 56px 24px 80px; }
          .eyebrow {
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 12px; font-weight: 500; letter-spacing: 0.12em;
            text-transform: uppercase; color: #2BB3E6; margin: 0 0 20px;
          }
          h1 {
            font-weight: 300; font-size: 44px; line-height: 1.05;
            letter-spacing: -0.03em; margin: 0 0 16px;
          }
          .lede { color: rgba(244,242,236,0.6); max-width: 620px; margin: 0 0 8px; }
          .count {
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
            color: rgba(244,242,236,0.4); margin: 28px 0 12px;
          }
          table { width: 100%; border-collapse: collapse; }
          thead th {
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
            text-transform: uppercase; color: rgba(244,242,236,0.4);
            text-align: left; padding: 12px 16px 12px 0;
            border-bottom: 1px solid rgba(244,242,236,0.12);
            white-space: nowrap;
          }
          tbody td {
            padding: 10px 16px 10px 0;
            border-bottom: 1px solid rgba(244,242,236,0.06);
            vertical-align: middle;
          }
          tbody tr:hover td { background: rgba(244,242,236,0.03); }
          /* A section head and its children read as one block. */
          tbody tr.section td { border-top: 1px solid rgba(244,242,236,0.10); }
          tbody tr.section .tree a { color: #F4F2EC; font-weight: 500; }
          tbody tr.section:hover .tree a { color: #2BB3E6; }
          .tree { white-space: nowrap; }
          .indent {
            display: inline-block;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
          }
          .branch { color: rgba(244,242,236,0.28); margin-right: 8px; }
          a { color: #2BB3E6; text-decoration: none; }
          a:hover { text-decoration: underline; text-underline-offset: 4px; }
          .root a {
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            color: #F4F2EC;
          }
          .meta {
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 12px; color: rgba(244,242,236,0.45); white-space: nowrap;
          }
          .chip {
            display: inline-block;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
            color: rgba(244,242,236,0.55);
            border: 1px solid rgba(244,242,236,0.16);
            border-radius: 6px; padding: 2px 7px; margin: 0 4px 2px 0;
          }
          .dash { color: rgba(244,242,236,0.2); }
          .scroll { overflow-x: auto; }
          @media (max-width: 720px) {
            h1 { font-size: 32px; }
            .wrap { padding: 40px 20px 64px; }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <p class="eyebrow">COMPASS ITS · SITEMAP</p>
          <h1>XML Sitemap</h1>
          <p class="lede">
            This is a stylesheet applied to the sitemap for people reading it in a browser.
            Search engines read the underlying XML directly and ignore this presentation.
          </p>
          <p class="count">
            <xsl:value-of select="count(s:urlset/s:url)" /> URLs ·
            <xsl:value-of select="count(s:urlset/s:url[string-length(substring-after(s:loc, $base)) - string-length(translate(substring-after(s:loc, $base), '/', '')) = 1])" /> sections
          </p>

          <div class="scroll">
            <table>
              <thead>
                <tr>
                  <th>Path</th>
                  <th>Alternates</th>
                  <th>Last modified</th>
                  <th>Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>

                <!-- The home page: the one URL with nothing after the origin. -->
                <xsl:for-each select="s:urlset/s:url[substring-after(s:loc, $base) = '']">
                  <tr class="root">
                    <td class="tree">
                      <a href="{s:loc}" title="{s:loc}">/</a>
                    </td>
                    <td>
                      <xsl:for-each select="xhtml:link">
                        <span class="chip"><xsl:value-of select="@hreflang" /></span>
                      </xsl:for-each>
                    </td>
                    <td class="meta"><xsl:value-of select="substring(s:lastmod, 1, 10)" /></td>
                    <td class="meta"><xsl:value-of select="s:changefreq" /></td>
                    <td class="meta"><xsl:value-of select="s:priority" /></td>
                  </tr>
                </xsl:for-each>

                <!-- Sections: one path segment. Everything deeper hangs off one of
                     these by prefix, so the tree needs no hardcoded structure. -->
                <xsl:for-each select="s:urlset/s:url[string-length(substring-after(s:loc, $base)) - string-length(translate(substring-after(s:loc, $base), '/', '')) = 1]">
                  <xsl:variable name="path" select="substring-after(s:loc, $base)" />
                  <xsl:variable name="lastSection" select="position() = last()" />

                  <tr class="section">
                    <td class="tree">
                      <span class="indent">
                        <span class="branch">
                          <xsl:choose>
                            <xsl:when test="$lastSection">└─</xsl:when>
                            <xsl:otherwise>├─</xsl:otherwise>
                          </xsl:choose>
                        </span>
                      </span>
                      <a href="{s:loc}" title="{s:loc}"><xsl:value-of select="$path" /></a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="xhtml:link">
                          <xsl:for-each select="xhtml:link">
                            <span class="chip"><xsl:value-of select="@hreflang" /></span>
                          </xsl:for-each>
                        </xsl:when>
                        <xsl:otherwise><span class="dash">—</span></xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="meta"><xsl:value-of select="substring(s:lastmod, 1, 10)" /></td>
                    <td class="meta"><xsl:value-of select="s:changefreq" /></td>
                    <td class="meta"><xsl:value-of select="s:priority" /></td>
                  </tr>

                  <!-- Children of this section, in document order. -->
                  <xsl:for-each select="/s:urlset/s:url[starts-with(substring-after(s:loc, $base), concat($path, '/'))]">
                    <xsl:variable name="rest" select="substring-after(substring-after(s:loc, $base), concat($path, '/'))" />
                    <!-- A remaining slash means another level down, as with
                         /ar/services/cybersecurity under /ar. -->
                    <xsl:variable name="deeper" select="string-length($rest) - string-length(translate($rest, '/', ''))" />
                    <tr>
                        <td class="tree">
                        <span class="indent" style="padding-left: {22 + $deeper * 22}px">
                          <span class="branch">
                            <xsl:choose>
                              <xsl:when test="position() = last()">└─</xsl:when>
                              <xsl:otherwise>├─</xsl:otherwise>
                            </xsl:choose>
                          </span>
                        </span>
                        <a href="{s:loc}" title="{s:loc}"><xsl:value-of select="$rest" /></a>
                      </td>
                      <td>
                        <xsl:choose>
                          <xsl:when test="xhtml:link">
                            <xsl:for-each select="xhtml:link">
                              <span class="chip"><xsl:value-of select="@hreflang" /></span>
                            </xsl:for-each>
                          </xsl:when>
                          <xsl:otherwise><span class="dash">—</span></xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td class="meta"><xsl:value-of select="substring(s:lastmod, 1, 10)" /></td>
                      <td class="meta"><xsl:value-of select="s:changefreq" /></td>
                      <td class="meta"><xsl:value-of select="s:priority" /></td>
                    </tr>
                  </xsl:for-each>
                </xsl:for-each>

              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`

export function GET() {
  return new Response(stylesheet, {
    headers: {
      'Content-Type': 'text/xsl; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
