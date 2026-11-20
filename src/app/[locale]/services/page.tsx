import type { Metadata } from 'next';
import { Container, Section, CTALink } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { getContent } from '@/lib/content';
import { getMessages, href } from '@/lib/i18n';
import {
  LOCALES,
  NAV_PATHS,
  LANDING_PATHS,
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const isSr = locale === 'sr';
  // The on-page kicker ("What We Do" / "Čime se bavimo") is a label, not a
  // phrase anyone searches for. The commercial pages carry the service name
  // owners actually type, and their own description rather than the visible
  // lede, which runs past what a search result shows.
  return buildMetadata({
    locale,
    segment: NAV_PATHS.services,
    title: isSr ? 'M&A savetovanje i prodaja firme' : 'M&A Advisory & Corporate Finance',
    description: isSr
      ? 'Savetujemo pri prodaji i kupovini firme, spajanjima, dokapitalizaciji i restrukturiranju. Investiciono bankarstvo iz Beograda.'
      : 'Sell-side and buy-side M&A, joint ventures, equity and debt raising and special situations advisory for companies in emerging markets.',
    keywords: isSr
      ? ['M&A savetovanje', 'prodaja firme', 'kupovina firme', 'dokapitalizacija', 'korporativne finansije']
      : ['M&A advisory', 'corporate finance', 'sell-side M&A', 'buy-side M&A', 'capital raising'],
  });
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).services;
  const t = getMessages(locale);

  return (
    <>
      <PageHero image="/images/services.jpg" alt="" eyebrow={c.kicker} title={c.title} lede={c.lead} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.services, path: href(locale, NAV_PATHS.services) },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="space-y-px overflow-hidden border border-ink/10 bg-ink/10">
            {c.items.map((s, i) => (
              <article key={s.slug} id={s.slug} className="scroll-mt-28 bg-bone p-8 sm:p-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
                  <div>
                    <span className="font-serif text-5xl text-maroon/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-4 font-serif text-2xl text-ink sm:text-3xl">{s.title}</h2>
                    <p className="mt-3 text-ink/60">{s.short}</p>
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed text-ink/75">{s.body}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.points.map((point) => (
                        <li key={point} className="flex items-baseline gap-3 text-ink/80">
                          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-1.5 bg-maroon" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <CTALink href={href(locale, NAV_PATHS.contact)}>{t.common.talkToUs}</CTALink>
            <CTALink href={href(locale, LANDING_PATHS.maAdvisorySerbia)} variant="ghost">
              {t.common.maInSerbia}
            </CTALink>
          </div>
        </Container>
      </Section>
    </>
  );
}
