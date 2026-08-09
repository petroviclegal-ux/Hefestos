import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { buildMetadata } from '@/lib/seo';
import { getArticles } from '@/lib/insights';
import { getMessages, href } from '@/lib/i18n';
import { LOCALES, NAV_PATHS, DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const isSr = locale === 'sr';
  return buildMetadata({
    locale,
    segment: NAV_PATHS.insights,
    title: isSr ? 'Analize' : 'Insights',
    description: isSr
      ? 'Analize i saveti o prodaji kompanija, spajanjima i akvizicijama, procenama vrednosti i prikupljanju kapitala.'
      : 'Insights and guidance on selling companies, mergers and acquisitions, valuation and raising capital.',
  });
}

export default function InsightsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const t = getMessages(locale);
  const articles = getArticles(locale);
  const isSr = locale === 'sr';

  return (
    <>
      <PageHero
        image="/images/insight-sell.jpg"
        alt=""
        eyebrow={t.nav.insights}
        title={isSr ? 'Analize i saveti' : 'Insights & Guidance'}
        lede={
          isSr
            ? 'Praktični vodiči o prodaji i kupovini kompanija, procenama vrednosti i prikupljanju kapitala.'
            : 'Practical guides on selling and buying companies, valuation and raising capital.'
        }
      />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.insights, path: href(locale, NAV_PATHS.insights) },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60} className="bg-bone">
                <Link
                  href={`${href(locale, NAV_PATHS.insights)}${a.slug}/`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-bone-200/60"
                >
                  <time className="text-xs font-sans uppercase tracking-[0.16em] text-ink/45" dateTime={a.date}>
                    {new Date(a.date).toLocaleDateString(isSr ? 'sr-RS' : 'en-GB', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </time>
                  <h2 className="mt-4 font-serif text-xl leading-snug text-ink group-hover:text-maroon">
                    {a.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{a.description}</p>
                  <span className="mt-5 text-sm font-sans text-maroon">{t.common.readMore} →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
