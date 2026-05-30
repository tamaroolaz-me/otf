/** @type {import('next').NextConfig} */
const CANONICAL_HOST = "opentofeedback.com";

const nextConfig = {
  reactStrictMode: true,

  // Belt-and-suspenders: Vercel also redirects www → apex at the edge.
  // Ensures www URLs consolidate to the canonical host used in SeoHead/sitemap.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${CANONICAL_HOST}` }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
