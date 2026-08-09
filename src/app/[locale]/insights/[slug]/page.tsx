import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { CTALink } from '@/components/ui';
import { buildMetadata } from '@/lib/seo';
import { articleSchema } from '@/lib/structured-data';
import { getArticle, getArticles, allArticleSlugs, type Block } from '@/lib/insights';
import { getMessages, href } from '@/lib/i18n';
import { LOCALES, NAV_PATHS, DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => allArticleSlugs().map((slug) => ({ locale, slug })));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const a = getArticle(locale, params.slug);
  if (!a) return {};
  return buildMetadata({
    locale,
    segment: `${NAV_PATHS.insights}/${a.slug}`,
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    type: 'article',
    publishedTime: a.date,
  });
}

function renderBlock(block: Block, i: number) {
  if (block.kind === 'h2') return <h2 key={i}>{block.text}</h2>;
  if (block.kind === 'ul')
    return (
      <ul key={i}>
        {block.items.map((it, j) => (
          <li key={j}>{it}</li>
        ))}
      </ul>
    );
  return <p key={i}>{block.text}</p>;
}

export default function ArticlePage({ params }: { params: { locale: string; slug: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const a = getArticle(locale, params.slug);
  if (!a) notFound();

  const t = getMessages(locale);
  const isSr = locale === 'sr';
  const path = `${href(locale, NAV_PATHS.insights)}${a.slug}/`;
  const related = getArticles(locale).filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <PageHero image="/images/insight-advisor.jpg" alt="" eyebrow={t.nav.insights} title={a.title} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.insights, path: href(locale, NAV_PATHS.insights) },
            { name: a.title, path },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <article className="mx-auto max-w-prose">
            <time className="text-xs font-sans uppercase tracking-[0.16em] text-ink/45" dateTime={a.date}>
              {new Date(a.date).toLocaleDateString(isSr ? 'sr-RS' : 'en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className="article-prose mt-6">{a.body.map(renderBlock)}</div>

            <div className="mt-12 border-t border-ink/10 pt-8">
              <Link href={href(locale, NAV_PATHS.insights)} className="text-sm text-maroon hover:underline">
                {t.common.backToInsights}
              </Link>
            </div>
          </article>

          {related.length > 0 && (
            <div className="mx-auto mt-16 max-w-prose">
              <h2 className="font-serif text-xl text-ink">{t.common.allInsights}</h2>
              <ul className="mt-5 space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`${href(locale, NAV_PATHS.insights)}${r.slug}/`}
                      className="font-serif text-lg text-ink hover:text-maroon"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mx-auto mt-14 max-w-prose">
            <CTALink href={href(locale, NAV_PATHS.contact)}>{t.common.talkToUs}</CTALink>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={articleSchema({
          title: a.title,
          description: a.description,
          path,
          datePublished: a.date,
          locale,
        })}
      />
    </>
  );
}
