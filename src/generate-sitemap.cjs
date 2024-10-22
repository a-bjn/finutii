const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

async function generateSitemap() {
   const sitemap = new SitemapStream({ hostname: 'https://www.reparatiitvbraila.com' });

   sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
   sitemap.write({ url: '/home', changefreq: 'monthly', priority: 0.80 });
   sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.80 });
   sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.80 });

   sitemap.end();

   const sitemapBuffer = await streamToPromise(sitemap);
   fs.writeFileSync('./public/sitemap.xml', sitemapBuffer);
   console.log('Sitemap generated successfully.');
}

generateSitemap().catch((error) => {
   console.error('Error generating sitemap:', error);
});
