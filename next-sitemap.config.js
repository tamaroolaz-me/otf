/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.opentofeedback.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/course': 0.9,
      '/workshop': 0.9,
      '/quiz': 0.9,
      '/how-to': 0.8,
      '/what-is-feedback': 0.8,
      '/about': 0.7,
      '/services': 0.7,
      '/blog': 0.7,
      '/resources': 0.7,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
