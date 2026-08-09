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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    inLanguage: input.locale,
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
