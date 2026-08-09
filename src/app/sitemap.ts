import type { MetadataRoute } from 'next';
import { SITE_URL, LOCALES, NAV_PATHS } from '@/lib/site';
import { allArticleSlugs } from '@/lib/insights';

// Generated automatically at build → /sitemap.xml (works with static export).
export const dynamic = 'force-static';

type Entry = { segment: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] };

function url(locale: string, segment: string): string {
  const clean = segment.replace(/^\/+|\/+$/g, '');
  const path = clean ? `/${locale}/${clean}/` : `/${locale}/`;
  return new URL(path, SITE_URL).toString();
}

// hreflang alternates map for a bare segment.
function altLanguages(segment: string): Record<string, string> {
  const langs: Record<string, string> = { 'x-default': url('en', segment) };
  for (const l of LOCALES) langs[l] = url(l, segment);
  return langs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: Entry[] = [
    { segment: '', priority: 1.0, changeFrequency: 'monthly' },
    { segment: NAV_PATHS.about, priority: 0.8, changeFrequency: 'yearly' },
    { segment: NAV_PATHS.services, priority: 0.9, changeFrequency: 'monthly' },
    { segment: NAV_PATHS.trackRecord, priority: 0.8, changeFrequency: 'yearly' },
    { segment: NAV_PATHS.sectors, priority: 0.7, changeFrequency: 'yearly' },
    { segment: NAV_PATHS.management, priority: 0.7, changeFrequency: 'yearly' },
    { segment: NAV_PATHS.insights, priority: 0.8, changeFrequency: 'weekly' },
    { segment: NAV_PATHS.contact, priority: 0.6, changeFrequency: 'yearly' },
  ];

  const articleSegments: Entry[] = allArticleSlugs().map((slug) => ({
    segment: `${NAV_PATHS.insights}/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  }));

  const all = [...pages, ...articleSegments];

  // One entry per locale × page, each declaring the hreflang alternate set.
  return all.flatMap((p) =>
    LOCALES.map((locale) => ({
      url: url(locale, p.segment),
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: { languages: altLanguages(p.segment) },
    })),
  );
}
