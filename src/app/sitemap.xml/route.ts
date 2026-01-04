
import { bailMatterServices } from '@/lib/data/bail-matter-services';
import { civilLawServices } from '@/lib/data/civil-law-services';
import { consumerLawServices } from '@/lib/data/consumer-law-services';
import { courtMarriageServices } from '@/lib/data/court-marriage-services';
import { criminalLawServices } from '@/lib/data/criminal-law-services';
import { cyberLawServices } from '@/lib/data/cyber-law-services';
import { familyLawServices } from '@/lib/data/family-law-services';

const URL = 'https://www.LegalSolutionsJaipur.com';

function generateSitemap(services: any[], basePath: string) {
  return services
    .map(({ id }) => {
      // This logic needs to be robust to handle your routing structure
      const path = id.replace(/ /g, '-').toLowerCase();
      return `
        <url>
          <loc>${URL}/${basePath}/${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `;
    })
    .join('');
}

export async function GET() {
  const staticRoutes = [
    '', 
    '/bail-matters', 
    '/civil-law', 
    '/consumer-law', 
    '/court-marriage', 
    '/criminal-law', 
    '/family-law', 
    '/cyber-law'
  ];

  const staticUrls = staticRoutes.map(route => `
    <url>
      <loc>${URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join('');

  const bailMatterUrls = generateSitemap(bailMatterServices, 'bail-matters');
  const civilLawUrls = generateSitemap(civilLawServices, 'civil-law');
  const consumerLawUrls = generateSitemap(consumerLawServices, 'consumer-law');
  const courtMarriageUrls = generateSitemap(courtMarriageServices, 'court-marriage');
  const criminalLawUrls = generateSitemap(criminalLawServices, 'criminal-law');
  const cyberLawUrls = generateSitemap(cyberLawServices, 'cyber-law');
  const familyLawUrls = generateSitemap(familyLawServices, 'family-law');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${bailMatterUrls}
      ${civilLawUrls}
      ${consumerLawUrls}
      ${courtMarriageUrls}
      ${criminalLawUrls}
      ${cyberLawUrls}
      ${familyLawUrls}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
