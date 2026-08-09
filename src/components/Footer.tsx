import * as React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from './ui';
import { site, NAV_KEYS, NAV_PATHS, type Locale } from '@/lib/site';
import { getMessages, href } from '@/lib/i18n';
import { getContent } from '@/lib/content';

/**
 * Site footer: brand, navigation, contact and the informational disclaimer.
 */
export function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const c = getContent(locale);
  const year = 2026;

  return (
    <footer className="bg-ink text-bone/80">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo locale={locale} variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/60">
              {t.footer.tagline}
            </p>
          </div>

          <nav aria-label={t.footer.firm}>
            <h2 className="text-xs font-sans uppercase tracking-[0.24em] text-maroon-light">
              {t.footer.firm}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <Link
                    href={href(locale, NAV_PATHS[key])}
                    className="text-bone/70 transition-colors hover:text-bone"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.services}>
            <h2 className="text-xs font-sans uppercase tracking-[0.24em] text-maroon-light">
              {t.footer.services}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {c.services.items.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`${href(locale, NAV_PATHS.services)}#${s.slug}`}
                    className="text-bone/70 transition-colors hover:text-bone"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-sans uppercase tracking-[0.24em] text-maroon-light">
              {t.footer.contact}
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-bone/70">
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-bone">
                  {site.contact.email}
                </a>
                <br />
                <a href={`tel:${site.contact.phoneHref}`} className="transition-colors hover:text-bone">
                  {site.contact.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-bone/15 pt-8">
          <p className="text-xs leading-relaxed text-bone/45">{t.footer.disclaimer}</p>
          <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-bone/40 sm:flex-row">
            <p>
              © {year} {site.legalName}. {t.footer.rights}
            </p>
            <p>{site.address.full}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
