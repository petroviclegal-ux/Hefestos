import { type Locale, type NavKey } from './site';

/**
 * Bilingual dictionary (English + Serbian) for all chrome/UI copy that is not
 * part of the structured page content in `content.ts`.
 *
 * The English object defines the canonical shape; the Serbian object must match
 * it (enforced by the `Messages` type). Keep copy free of invented facts.
 */

export type Messages = typeof en;

const en = {
  localeName: 'English',
  otherLocaleName: 'Srpski',
  dir: 'ltr',

  nav: {
    about: 'Who We Are',
    services: 'What We Do',
    trackRecord: 'Track Record',
    sectors: 'Sectors',
    management: 'Team',
    insights: 'Insights',
    contact: 'Contact',
  } satisfies Record<NavKey, string>,

  header: {
    cta: 'Speak With Us',
    switchTo: 'Srpski',
    skipToContent: 'Skip to content',
  },

  footer: {
    firm: 'Firm',
    services: 'Services',
    contact: 'Contact',
    tagline:
      'An independent investment banking and M&A advisory firm building bridges across the emerging markets of Europe, Asia and Africa.',
    rights: 'All rights reserved.',
    disclaimer:
      'Hefestos Capital provides corporate finance and M&A advisory services. This website is for general information only and does not constitute investment, legal or tax advice, nor an offer or solicitation to buy or sell any security.',
  },

  common: {
    getInTouch: 'Get in touch',
    learnMore: 'Learn more',
    readMore: 'Read more',
    allInsights: 'All insights',
    talkToUs: 'Talk to our advisers',
    backToInsights: '← Back to insights',
    home: 'Home',
    since: 'Since',
    ourServices: 'Our services',
    ourSectors: 'Sectors we cover',
  },
};

const sr = {
  localeName: 'Srpski',
  otherLocaleName: 'English',
  dir: 'ltr',

  nav: {
    about: 'Ko smo mi',
    services: 'Čime se bavimo',
    trackRecord: 'Reference',
    sectors: 'Sektori',
    management: 'Članovi tima',
    insights: 'Analize',
    contact: 'Kontakt',
  } satisfies Record<NavKey, string>,

  header: {
    cta: 'Kontaktirajte nas',
    switchTo: 'English',
    skipToContent: 'Pređi na sadržaj',
  },

  footer: {
    firm: 'Kompanija',
    services: 'Usluge',
    contact: 'Kontakt',
    tagline:
      'Nezavisna investiciono-bankarska i M&A savetodavna firma koja gradi mostove na tržištima u razvoju Evrope, Azije i Afrike.',
    rights: 'Sva prava zadržana.',
    disclaimer:
      'Hefestos Capital pruža usluge korporativnih finansija i M&A savetovanja. Ovaj sajt je isključivo informativnog karaktera i ne predstavlja investicioni, pravni ili poreski savet, niti ponudu za kupovinu ili prodaju bilo koje hartije od vrednosti.',
  },

  common: {
    getInTouch: 'Kontaktirajte nas',
    learnMore: 'Saznajte više',
    readMore: 'Pročitajte više',
    allInsights: 'Sve analize',
    talkToUs: 'Razgovarajte sa našim savetnicima',
    backToInsights: '← Nazad na analize',
    home: 'Početna',
    since: 'Od',
    ourServices: 'Naše usluge',
    ourSectors: 'Sektori koje pokrivamo',
  },
} satisfies Messages;

const dictionaries: Record<Locale, Messages> = { en, sr };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

/**
 * Build a locale-prefixed, trailing-slash path. `href('en', 'about')` →
 * `/en/about/`; `href('sr')` → `/sr/`.
 */
export function href(locale: Locale, segment = ''): string {
  const clean = segment.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}
