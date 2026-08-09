import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Jost, Inter } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema, professionalServiceSchema } from '@/lib/structured-data';
import { getMessages } from '@/lib/i18n';
import { LOCALES, DEFAULT_LOCALE, isLocale, site, SITE_URL, type Locale } from '@/lib/site';

// Display / headings font — Jost (matches hefcap.com's brand typeface).
const display = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

// Body / UI font — Inter (also used on hefcap.com).
const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const isSr = locale === 'sr';

  const defaultTitle = isSr
    ? 'Hefestos Capital — Investiciono bankarstvo i M&A savetovanje'
    : 'Hefestos Capital — Investment Banking & M&A Advisory';
  const description = isSr
    ? 'Nezavisna investiciono-bankarska i M&A savetodavna firma. Savetujemo pri prodaji i kupovini kompanija, spajanjima i prikupljanju kapitala na tržištima u razvoju.'
    : 'Independent investment banking and M&A advisory firm. We advise on selling and buying companies, mergers and capital raising across emerging markets.';

  return {
    title: { default: defaultTitle, template: `%s | ${site.name}` },
    description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    formatDetection: { telephone: true, address: true, email: true },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/icon.svg' }],
    },
    manifest: '/site.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/`,
      languages: {
        en: `${SITE_URL}/en/`,
        sr: `${SITE_URL}/sr/`,
        'x-default': `${SITE_URL}/en/`,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#7A1F35',
  width: 'device-width',
  initialScale: 1,
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getMessages(locale);

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationSchema(locale), professionalServiceSchema(locale)]} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          {t.header.skipToContent}
        </a>

        <Header locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
