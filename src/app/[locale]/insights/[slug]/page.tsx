import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { CTALink } from '@/components/ui';
import { buildMetadata } from '@/lib/seo';
import { articleSchema, faqSchema } from '@/lib/structured-data';
import { getArticle, relatedArticles, allArticleSlugs } from '@/lib/insights';
import { ArticleBody, RichText, plainText } from '@/components/ArticleBlocks';
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
    ogImage: a.cover?.src,
  });
}

export default function ArticlePage({ params }: { params: { locale: string; slug: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const a = getArticle(locale, params.slug);
  if (!a) notFound();

  const t = getMessages(locale);
  const isSr = locale === 'sr';
  const path = `${href(locale, NAV_PATHS.insights)}${a.slug}/`;
  const related = relatedArticles(locale, a.slug, 4);

  /*
   * Every article carries a cover for the index grid and the share card, but
   * only a captioned one belongs in the body — a portrait of the person being
   * interviewed, say. The decorative architectural covers would just repeat
   * the page hero.
   */
  const bodyFigure = a.cover?.caption ? a.cover : undefined;

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
            <time
              className="text-xs font-sans uppercase tracking-[0.16em] text-ink/45"
              dateTime={a.updated ?? a.date}
            >
              {a.updated ? `${t.common.updated} ` : null}
              {new Date(a.updated ?? a.date).toLocaleDateString(isSr ? 'sr-RS' : 'en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {bodyFigure ? (
              <figure className="mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bodyFigure.src}
                  alt={bodyFigure.alt}
                  className="aspect-[3/2] w-full bg-bone-200/50 object-cover"
                  loading="eager"
                  decoding="async"
                />
                <figcaption className="mt-3 text-xs font-sans uppercase tracking-[0.14em] text-ink/45">
                  {bodyFigure.caption}
                </figcaption>
              </figure>
            ) : null}

            <div className="article-prose mt-6">
              <ArticleBody blocks={a.body} locale={locale} />
              {a.faq && a.faq.length > 0 ? (
                <>
                  <h2>{t.common.faq}</h2>
                  {a.faq.map((f, i) => (
                    <div key={i}>
                      <h3>{f.question}</h3>
                      <p className="mt-2">
                        <RichText text={f.answer} locale={locale} />
                      </p>
                    </div>
                  ))}
                </>
              ) : null}
            </div>

            <div className="mt-12 border-t border-ink/10 pt-8">
              <Link href={href(locale, NAV_PATHS.insights)} className="text-sm text-maroon hover:underline">
                {t.common.backToInsights}
              </Link>
            </div>
          </article>

          {related.length > 0 && (
            <div className="mx-auto mt-16 max-w-prose border-t border-ink/10 pt-10">
              <h2 className="font-serif text-xl text-ink">{t.common.relatedReading}</h2>
              <ul className="mt-6 space-y-6">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`${href(locale, NAV_PATHS.insights)}${r.slug}/`}
                      className="font-serif text-lg text-ink hover:text-maroon"
                    >
                      {r.title}
                    </Link>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{r.description}</p>
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
          dateModified: a.updated,
          locale,
          image: a.cover?.src,
          imageCaption: a.cover?.caption,
          about: a.about,
        })}
      />
      {a.faq && a.faq.length > 0 ? (
        <JsonLd
          data={faqSchema(a.faq.map((f) => ({ question: f.question, answer: plainText(f.answer) })))}
        />
      ) : null}
    </>
  );
}
