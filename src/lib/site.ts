/**
 * Central site configuration and verified company facts for Hefestos Capital.
 *
 * ACCURACY POLICY: Every fact below is taken from Hefestos Capital's own
 * published materials (hefcap.com). Do NOT invent additional facts (named
 * deals, client names, team members, regulatory claims). Items that still need
 * the client to confirm are marked `TODO(client)`.
 */

// Canonical production domain — apex (non-www), matching the Netlify primary
// domain. `www.hefcap.com` redirects here.
export const SITE_URL = 'https://hefcap.com';

export const LOCALES = ['en', 'sr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Locale-neutral, verified company facts. */
export const site = {
  name: 'Hefestos Capital',
  legalName: 'Hefestos Capital',
  url: SITE_URL,
  foundedYear: 2001,

  // Headline metrics as published by the firm.
  stats: {
    professionals: '30+',
    projects: '600+',
    transactions: '400+',
    transactionValue: '$22bn+',
  },

  address: {
    line1: 'Bulevar Mihajla Pupina 115v',
    line2: '11070 Belgrade',
    city: 'Belgrade',
    country: 'Serbia',
    // Structured for JSON-LD PostalAddress.
    streetAddress: 'Bulevar Mihajla Pupina 115v',
    postalCode: '11070',
    addressLocality: 'Belgrade',
    addressRegion: 'Belgrade',
    addressCountry: 'RS',
    full: 'Bulevar Mihajla Pupina 115v, 11070 Belgrade, Serbia',
  },

  contact: {
    email: 'office@hefcap.com',
    phone: '+381 11 30 20 000',
    phoneHref: '+381113020000',
    // TODO(client): confirm official LinkedIn company page URL.
    linkedin: '',
  },

  // Google Maps embed centred on the New Belgrade (Novi Beograd) address.
  mapEmbedUrl:
    'https://www.google.com/maps?q=Bulevar%20Mihajla%20Pupina%20115v%2C%20Belgrade%2C%20Serbia&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?q=Bulevar+Mihajla+Pupina+115v,+11070+Belgrade,+Serbia',
} as const;

/** The order of primary navigation items (labels are localised in i18n.ts). */
export const NAV_KEYS = [
  'about',
  'services',
  'trackRecord',
  'sectors',
  'management',
  'insights',
  'contact',
] as const;
export type NavKey = (typeof NAV_KEYS)[number];

/** Maps a nav key to its (locale-prefixed) path segment. */
export const NAV_PATHS: Record<NavKey, string> = {
  about: 'about',
  services: 'services',
  trackRecord: 'track-record',
  sectors: 'sectors',
  management: 'management',
  insights: 'insights',
  contact: 'contact',
};
