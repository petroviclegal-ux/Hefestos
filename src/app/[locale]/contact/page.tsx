import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { buildMetadata } from '@/lib/seo';
import { getContent } from '@/lib/content';
import { getMessages, href } from '@/lib/i18n';
import { site, LOCALES, NAV_PATHS, DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).contact;
  return buildMetadata({ locale, segment: NAV_PATHS.contact, title: c.kicker, description: c.lead });
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).contact;
  const t = getMessages(locale);

  return (
    <>
      <PageHero image="/images/contact.jpg" alt="" eyebrow={c.kicker} title={c.title} lede={c.lead} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.contact, path: href(locale, NAV_PATHS.contact) },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">{c.formHeading}</h2>
              <div className="mt-8">
                <ContactForm locale={locale} />
              </div>
            </div>

            <aside className="lg:border-l lg:border-ink/10 lg:pl-14">
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">{c.detailsHeading}</h2>
              <dl className="mt-8 space-y-6 text-ink/80">
                <div>
                  <dt className="text-xs font-sans uppercase tracking-[0.16em] text-ink/50">
                    {c.addressLabel}
                  </dt>
                  <dd className="mt-2 leading-relaxed">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.country}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-sans uppercase tracking-[0.16em] text-ink/50">
                    {c.phoneLabel}
                  </dt>
                  <dd className="mt-2">
                    <a href={`tel:${site.contact.phoneHref}`} className="hover:text-maroon">
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-sans uppercase tracking-[0.16em] text-ink/50">
                    {c.emailContactLabel}
                  </dt>
                  <dd className="mt-2">
                    <a href={`mailto:${site.contact.email}`} className="hover:text-maroon">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 overflow-hidden border border-ink/10">
                <iframe
                  title="Map"
                  src={site.mapEmbedUrl}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
