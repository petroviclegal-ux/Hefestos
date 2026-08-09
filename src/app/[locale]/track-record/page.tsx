import type { Metadata } from 'next';
import { Container, Section, CTALink } from '@/components/ui';
import { StatBar } from '@/components/StatBar';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { getContent } from '@/lib/content';
import { getMessages, href } from '@/lib/i18n';
import { LOCALES, NAV_PATHS, DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).trackRecord;
  return buildMetadata({ locale, segment: NAV_PATHS.trackRecord, title: c.kicker, description: c.lead });
}

export default function TrackRecordPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).trackRecord;
  const t = getMessages(locale);

  return (
    <>
      <PageHero image="/images/track-record.jpg" alt="" eyebrow={c.kicker} title={c.title} lede={c.lead} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.trackRecord, path: href(locale, NAV_PATHS.trackRecord) },
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

          <h2 className="mt-16 font-serif text-2xl text-ink sm:text-3xl">{c.highlightsHeading}</h2>
          <div className="mt-8">
            <StatBar stats={c.highlights} />
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">{c.clientsHeading}</h2>
              <p className="mt-3 text-ink/65">{c.clientsLead}</p>
            </div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {c.clients.map((client) => (
                <li key={client} className="flex items-baseline gap-3 border-b border-ink/10 pb-3 text-ink/80">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-1.5 bg-maroon" />
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 text-sm italic text-ink/55">{c.note}</p>

          <div className="mt-10">
            <CTALink href={href(locale, NAV_PATHS.contact)}>{t.common.talkToUs}</CTALink>
          </div>
        </Container>
      </Section>
    </>
  );
}
