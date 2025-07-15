const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/products/compute', changefreq: 'monthly', priority: 0.8 },
  { url: '/products/ai-models', changefreq: 'monthly', priority: 0.8 },
  { url: '/products/swarm', changefreq: 'monthly', priority: 0.8 },
  { url: '/products/agents', changefreq: 'monthly', priority: 0.8 },
  { url: '/token/overview', changefreq: 'monthly', priority: 0.7 },
  { url: '/token/tokenomics', changefreq: 'monthly', priority: 0.7 },
  { url: '/token/utility', changefreq: 'monthly', priority: 0.7 },
  { url: '/token/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/ecosystem/roadmap', changefreq: 'monthly', priority: 0.6 },
  { url: '/ecosystem/partners', changefreq: 'monthly', priority: 0.6 },
  { url: '/resources', changefreq: 'monthly', priority: 0.5 },
  { url: '/about/team', changefreq: 'monthly', priority: 0.5 },
  { url: '/about/mission', changefreq: 'monthly', priority: 0.5 },
  { url: '/about/contact', changefreq: 'monthly', priority: 0.5 },
  // Add more routes as needed
];

const sitemap = new SitemapStream({ hostname: 'https://neurolov.ai' });

streamToPromise(sitemap)
  .then((data) => {
    require('fs').writeFileSync('public/sitemap.xml', data.toString());
    console.log('sitemap.xml created in /public');
  })
  .catch(console.error);

links.forEach(link => sitemap.write(link));
sitemap.end();