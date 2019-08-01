// sitemapMiddleware.js
// https://www.npmjs.com/package/vue-router-sitemap

// highly opinionated for express.js 
 
import VueRouterSitemap      from 'vue-router-sitemap';
import path                  from 'path';
import { router }            from 'sample-router-sitemap.js';

export const sitemapMiddleware = () => {
  return (req, res) => {
    res.set('Content-Type', 'application/xml');
 
    const staticSitemap = path.resolve('dist/static', 'sitemap.xml');
    const filterConfig = {
      isValid: false,
      rules: [
        /\/example-page/,
        /\*/,
      ],
    };
 
    new VueRouterSitemap(router).filterPaths(filterConfig).build('http://example.com').save(staticSitemap);
 
    return res.sendFile(staticSitemap);
  };
};
 
app.get('/sitemap.xml', sitemapMiddleware());

