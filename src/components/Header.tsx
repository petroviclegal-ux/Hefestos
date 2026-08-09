'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NAV_KEYS, NAV_PATHS, isLocale, type Locale } from '@/lib/site';
import { getMessages, href } from '@/lib/i18n';

/**
 * Sticky top navigation with a language switcher. Server-rendered links stay
 * crawlable; the mobile menu and scroll-state are progressive enhancements.
 */
export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const t = getMessages(locale);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = NAV_KEYS.map((key) => ({
    label: t.nav[key],
    href: href(locale, NAV_PATHS[key]),
  }));

  const isActive = (itemHref: string) => pathname === itemHref;

  // Build the equivalent path in the other locale, preserving the sub-path.
  const other: Locale = locale === 'en' ? 'sr' : 'en';
  const otherHref = React.useMemo(() => {
    const parts = pathname.split('/').filter(Boolean); // e.g. ['en','about']
    if (parts.length && isLocale(parts[0])) {
      parts[0] = other;
      return `/${parts.join('/')}/`;
    }
    return href(other);
  }, [pathname, other]);

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-bone/95 backdrop-blur border-b border-ink/10'
          : 'bg-bone/80 backdrop-blur border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-8 px-6 py-4 sm:px-8 lg:gap-12 lg:px-12">
        <Logo locale={locale} />

        <nav aria-label="Primary" className="hidden lg:block lg:pl-4">
          <ul className="flex items-center gap-5 xl:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'whitespace-nowrap text-sm font-sans tracking-wide transition-colors duration-200 hover:text-maroon',
                    isActive(item.href) ? 'text-maroon' : 'text-ink/80',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li aria-hidden="true" className="h-4 w-px bg-ink/15" />
            <li>
              <Link
                href={otherHref}
                hrefLang={other}
                aria-label={other === 'sr' ? 'Prebaci na srpski' : 'Switch to English'}
                className="text-sm font-sans uppercase tracking-[0.12em] text-ink/60 transition-colors hover:text-maroon"
              >
                {other.toUpperCase()}
              </Link>
            </li>
            <li>
              <Link
                href={href(locale, NAV_PATHS.contact)}
                className="ml-1 inline-flex items-center border border-ink/25 px-4 py-2 text-xs font-sans uppercase tracking-[0.16em] text-ink transition-colors hover:border-maroon hover:text-maroon"
              >
                {t.header.cta}
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'lg:hidden overflow-hidden border-t border-ink/10 bg-bone transition-[max-height] duration-300 ease-luxe',
          open ? 'max-h-[32rem]' : 'max-h-0 border-t-transparent',
        ].join(' ')}
      >
        <nav aria-label="Mobile" className="px-6 py-4">
          <ul className="flex flex-col divide-y divide-ink/10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'block py-3 text-base font-sans',
                    isActive(item.href) ? 'text-maroon' : 'text-ink/85',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={otherHref}
                hrefLang={other}
                className="block py-3 text-base font-sans uppercase tracking-[0.12em] text-ink/70"
              >
                {t.header.switchTo}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
