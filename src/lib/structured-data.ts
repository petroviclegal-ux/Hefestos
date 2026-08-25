import { site, type Locale } from './site';
import { absoluteUrl } from './seo';
import { getContent, type Faq } from './content';

/**
 * Central builders for JSON-LD structured data, keeping name, address and
 * contact details consistent with the verified company facts. Descriptions use
 * advisory/consulting language only.
 */

export function organizationSchema(locale: Locale) {
  const c = getContent(locale);
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'FinancialService'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl('/icon.svg'),
    image: absoluteUrl('/og/og-default.svg'),
    description: c.home.heroLead,
    foundingDate: String(site.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.streetAddress,
      postalCode: site.address.postalCode,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    email: site.contact.email,
    telephone: site.contact.phone,
    areaServed: [
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'Place', name: 'Asia' },
      { '@type': 'Place', name: 'Africa' },
    ],
    knowsAbout: [
      'Mergers and Acquisitions',
      'Investment Banking',
      'Corporate Finance',
      'Capital Raising',
      'Joint Ventures',
    ],
    ...(site.contact.linkedin ? { sameAs: [site.contact.linkedin] } : {}),
  };
}

export function professionalServiceSchema(locale: Locale) {
  const c = getContent(locale);
  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'FinancialService'],
    '@id': `${site.url}/#service`,
    name: site.name,
    url: site.url,
    image: absoluteUrl('/og/og-default.svg'),
    description: c.services.lead,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.streetAddress,
      postalCode: site.address.postalCode,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    telephone: site.contact.phone,
    email: site.contact.email,
    serviceType: c.services.items.map((s) => s.title),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  locale: Locale;
  /** Optional cover image path, e.g. '/images/insights/foo.jpg'. */
  image?: string;
  /** Caption for the cover image, if it has one. */
  imageCaption?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    inLanguage: input.locale,
    ...(input.image
      ? {
          image: [
            {
              '@type': 'ImageObject',
              contentUrl: absoluteUrl(input.image),
              url: absoluteUrl(input.image),
              ...(input.imageCaption ? { caption: input.imageCaption } : {}),
            },
          ],
        }
      : {}),
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.svg') },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(input.path) },
  };
}

/**
 * Person entries for the team page — one per named individual, each with the
 * portrait as `image`.
 *
 * Alt text describes a picture; it does not tell a search engine whose face is
 * in it. Naming the file as the `image` of a Person with this name and job
 * title is what lets the photograph be indexed as a picture *of that person*
 * rather than as decoration on a page that happens to mention them.
 */
export function personSchema(input: {
  people: { name: string; role: string; photo?: string; bio: string[] }[];
  /** Locale-prefixed path of the page the people appear on. */
  path: string;
}) {
  return input.people.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.role,
    description: p.bio[0],
    ...(p.photo ? { image: absoluteUrl(p.photo) } : {}),
    worksFor: { '@type': 'Organization', name: site.name, url: site.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(input.path) },
  }));
}
