import type { Metadata } from 'next';
import { site, SITE_URL, LOCALES, type Locale } from './site';

type PageSeoInput = {
  locale: Locale;
  title: string; // ≤60 chars; the brand suffix is appended here
  description: string; // ≤155 chars, ideally with a call to action
  /** Path segment WITHOUT locale prefix or slashes, e.g. 'about' or '' for home. */
  segment?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  keywords?: string[];
};

const DEFAULT_OG = '/og/og-default.svg';

/** Map our locale codes to OpenGraph locale strings. */
const OG_LOCALE: Record<Locale, string> = { en: 'en_US', sr: 'sr_RS' };

/** Build the locale-prefixed absolute URL for a bare segment. */
function localizedUrl(locale: Locale, segment = ''): string {
  const clean = segment.replace(/^\/+|\/+$/g, '');
  const path = clean ? `/${locale}/${clean}/` : `/${locale}/`;
  return new URL(path, SITE_URL).toString();
}

/**
 * Build a complete, unique Metadata object for a page: title, description,
 * canonical URL, hreflang alternates (en, sr, x-default), Open Graph and
 * Twitter cards. Keep raw titles short — the brand suffix is added here.
 */
export function buildMetadata(input: PageSeoInput): Metadata {
  const { locale, segment = '' } = input;
  const url = localizedUrl(locale, segment);
  const ogImage = new URL(input.ogImage ?? DEFAULT_OG, SITE_URL).toString();
  const fullTitle = `${input.title} | ${site.name}`;
  // Only the default card has known 1200×630 dimensions. For a page-supplied
  // image we omit width/height rather than declare the wrong aspect ratio,
  // which would make crawlers crop the card badly.
  const images = input.ogImage
    ? [{ url: ogImage, alt: `${site.name}` }]
    : [{ url: ogImage, width: 1200, height: 630, alt: `${site.name}` }];

  // hreflang map: one entry per locale + x-default pointing at English.
  const languages: Record<string, string> = {
    'x-default': localizedUrl('en', segment),
  };
  for (const l of LOCALES) languages[l] = localizedUrl(l, segment);

  const openGraph: Metadata['openGraph'] =
    input.type === 'article'
      ? {
          type: 'article',
          publishedTime: input.publishedTime,
          title: fullTitle,
          description: input.description,
          url,
          siteName: site.legalName,
          locale: OG_LOCALE[locale],
          images,
        }
      : {
          type: 'website',
          title: fullTitle,
          description: input.description,
          url,
          siteName: site.legalName,
          locale: OG_LOCALE[locale],
          images,
        };

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url, languages },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: input.description,
      images: [ogImage],
    },
  };
}

/** Absolute URL helper for structured data. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
