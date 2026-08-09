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
  const c = getContent(locale).sectors;
  return buildMetadata({ locale, segment: NAV_PATHS.sectors, title: c.kicker, description: c.lead });
}

export default function SectorsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).sectors;
  const t = getMessages(locale);

  return (
    <>
      <PageHero image="/images/sectors.jpg" alt="" eyebrow={c.kicker} title={c.title} lede={c.lead} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.sectors, path: href(locale, NAV_PATHS.sectors) },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50} className="bg-bone p-8">
                <h2 className="font-serif text-xl text-ink">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <CTALink href={href(locale, NAV_PATHS.contact)}>{t.common.talkToUs}</CTALink>
          </div>
        </Container>
      </Section>
    </>
  );
}
