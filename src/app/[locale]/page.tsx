import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';
import { StatBar } from '@/components/StatBar';
import { Reveal } from '@/components/Reveal';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { MonogramMark } from '@/components/MonogramMark';
import { BridgeSilhouette, AscendingRule } from '@/components/Decor';
import { ServiceIcon, SectorIcon } from '@/components/icons';
import { buildMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/structured-data';
import { getContent } from '@/lib/content';
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
    segment: '',
    title: isSr
      ? 'Investiciono bankarstvo i M&A savetovanje'
      : 'Investment Banking & M&A Advisory',
    description: isSr
      ? 'Hefestos Capital je nezavisna investiciono-bankarska firma. Savetujemo pri prodaji i kupovini kompanija, spajanjima i prikupljanju kapitala na tržištima u razvoju.'
      : 'Hefestos Capital is an independent investment banking firm advising on selling and buying companies, mergers and capital raising across emerging markets.',
    keywords: isSr
      ? ['investiciono bankarstvo', 'M&A savetnik', 'prodaja kompanije', 'prikupljanje kapitala', 'Beograd']
      : ['investment banking', 'M&A advisory', 'sell a company', 'capital raising', 'emerging markets'],
  });
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale);
  const t = getMessages(locale);
  const h = c.home;
  const isSr = locale === 'sr';
  const latest = getArticles(locale).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-ink-600/60">
          <BridgeSilhouette className="h-28 w-full sm:h-36" />
        </div>

        <Container className="relative">
          <div className="flex min-h-[86vh] flex-col justify-center py-28 text-center">
            <Reveal className="mx-auto max-w-4xl">
              <div className="mx-auto flex flex-col items-center">
                <MonogramMark className="h-14 w-14 sm:h-16 sm:w-16" title="Hefestos Capital" />
                <div className="mt-7 flex flex-col items-center leading-[1.05]">
                  <span className="font-display text-3xl font-medium uppercase tracking-[0.2em] text-bone sm:text-4xl lg:text-5xl">
                    Hefestos
                  </span>
                  <span className="mt-2 pl-[0.42em] font-display text-2xl font-light uppercase tracking-[0.42em] text-bone/85 sm:text-3xl lg:text-4xl">
                    Capital
                  </span>
                </div>
                <span className="mt-7 flex items-center gap-3 text-[0.7rem] font-sans uppercase tracking-[0.3em] text-maroon-light sm:text-xs">
                  <span aria-hidden="true" className="h-px w-6 bg-maroon-light/50" />
                  {h.heroKicker}
                  <span aria-hidden="true" className="h-px w-6 bg-maroon-light/50" />
                </span>
              </div>

              <h1 className="mt-12 font-serif text-3xl leading-[1.12] text-bone sm:text-4xl lg:text-5xl">
                {h.heroTitle}
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/70">
                {h.heroLead}
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTALink href={href(locale, NAV_PATHS.contact)} tone="light" variant="solid">
                  {h.heroPrimary}
                </CTALink>
                <CTALink href={href(locale, NAV_PATHS.services)} tone="light" variant="outline">
                  {h.heroSecondary}
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <Section>
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{h.servicesHeading}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              {h.servicesLead}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60} className="bg-bone">
                <Link
                  href={`${href(locale, NAV_PATHS.services)}#${service.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-bone-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-maroon">
                      <ServiceIcon slug={service.slug} className="h-8 w-8" />
                    </span>
                    <span className="font-serif text-sm text-maroon/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-ink group-hover:text-maroon">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.short}</p>
                </Link>
              </Reveal>
            ))}
            <div className="flex items-center justify-center bg-bone p-8">
              <CTALink href={href(locale, NAV_PATHS.services)} variant="ghost">
                {t.common.learnMore}
              </CTALink>
            </div>
          </div>
        </Container>
      </Section>

      {/* APPROACH */}
      <section className="bg-ink-800 text-bone">
        <Container>
          <div className="grid gap-14 py-24 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow className="text-maroon-light">{h.introHeading}</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                {c.about.title}
              </h2>
              {h.introBody.map((p, i) => (
                <p key={i} className="mt-5 leading-relaxed text-bone/70">
                  {p}
                </p>
              ))}
              <div className="mt-8">
                <CTALink href={href(locale, NAV_PATHS.about)} tone="light" variant="ghost">
                  {t.common.learnMore}
                </CTALink>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="divide-y divide-bone/15 border-y border-bone/15">
                {c.about.values.map((v) => (
                  <li key={v.title} className="flex gap-6 py-6">
                    <span className="mt-1 text-maroon-light">
                      <AscendingRule className="h-4 w-16" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg">{v.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-bone/65">{v.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <Section>
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{h.statsHeading}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              {c.trackRecord.title}
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <StatBar stats={c.stats} />
            <div className="mt-8">
              <CTALink href={href(locale, NAV_PATHS.trackRecord)} variant="ghost">
                {t.nav.trackRecord}
              </CTALink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* SECTORS */}
      <section className="bg-bone-200">
        <Container>
          <div className="py-24">
            <Reveal className="max-w-3xl">
              <Eyebrow>{h.sectorsHeading}</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {h.sectorsLead}
              </h2>
            </Reveal>
            <Reveal delay={80} className="mt-12">
              <ul className="flex flex-wrap gap-3">
                {c.sectors.items.map((sector) => (
                  <li key={sector.slug}>
                    <Link
                      href={`${href(locale, NAV_PATHS.sectors)}#${sector.slug}`}
                      className="group inline-flex items-center gap-3 border border-ink/15 px-5 py-3 text-sm text-ink/80 transition-colors hover:border-maroon hover:text-maroon"
                    >
                      <span className="text-maroon">
                        <SectorIcon slug={sector.slug} className="h-5 w-5" />
                      </span>
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* INSIGHTS */}
      {latest.length > 0 && (
        <Section>
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal className="max-w-2xl">
                <Eyebrow>{t.nav.insights}</Eyebrow>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  {isSr
                    ? 'Perspektive o M&A i korporativnim finansijama.'
                    : 'Perspectives on M&A and corporate finance.'}
                </h2>
              </Reveal>
              <Reveal>
                <CTALink href={href(locale, NAV_PATHS.insights)} variant="ghost">
                  {t.common.allInsights}
                </CTALink>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {latest.map((article, i) => (
                <Reveal key={article.slug} delay={i * 70}>
                  <Link
                    href={`${href(locale, NAV_PATHS.insights)}${article.slug}/`}
                    className="group flex h-full flex-col"
                  >
                    <div className="border-t border-ink/15 pt-6">
                      <p className="text-xs uppercase tracking-[0.14em] text-ink/45">
                        {new Date(article.date).toLocaleDateString(isSr ? 'sr-RS' : 'en-GB', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </p>
                      <h3 className="mt-4 font-serif text-xl leading-snug text-ink group-hover:text-maroon">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/65">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <section className="bg-bone-200">
        <Container>
          <div className="py-24">
            <Reveal className="max-w-3xl">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {c.faq.heading}
              </h2>
              <p className="mt-4 text-ink/65">{c.faq.lead}</p>
            </Reveal>
            <Reveal delay={80} className="mt-10">
              <FAQ items={c.faq.items} />
            </Reveal>
          </div>
        </Container>
      </section>
      <JsonLd data={faqSchema(c.faq.items)} />

      {/* CLOSING CTA */}
      <section className="bg-ink text-bone">
        <Container>
          <div className="flex flex-col items-center gap-8 py-24 text-center">
            <span className="text-maroon-light">
              <BridgeSilhouette className="h-12 w-64 opacity-80" />
            </span>
            <Reveal className="max-w-2xl">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">{h.ctaHeading}</h2>
              <p className="mt-5 leading-relaxed text-bone/70">{h.ctaBody}</p>
            </Reveal>
            <Reveal delay={80}>
              <CTALink href={href(locale, NAV_PATHS.contact)} tone="light" variant="solid">
                {h.ctaButton}
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
