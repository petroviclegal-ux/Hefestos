import type { Metadata } from 'next';
import { Container, Section, CTALink } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { buildMetadata } from '@/lib/seo';
import { getContent } from '@/lib/content';
import { getMessages, href } from '@/lib/i18n';
import { LOCALES, NAV_PATHS, DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).about;
  return buildMetadata({ locale, segment: NAV_PATHS.about, title: c.kicker, description: c.lead });
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).about;
  const t = getMessages(locale);

  return (
    <>
      <PageHero image="/images/about.jpg" alt="" eyebrow={c.kicker} title={c.title} lede={c.lead} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.about, path: href(locale, NAV_PATHS.about) },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="mx-auto max-w-prose">
            {c.body.map((p, i) => (
              <p key={i} className="mt-6 text-lg leading-relaxed text-ink/75 first:mt-0">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-bone-200/50">
        <Container className="py-20 sm:py-24">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">{c.valuesHeading}</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {c.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="bg-bone p-8">
                <h3 className="font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-ink/70">{v.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <CTALink href={href(locale, NAV_PATHS.contact)}>{t.common.getInTouch}</CTALink>
          </div>
        </Container>
      </section>
    </>
  );
}
