import type { Metadata } from 'next';
import { Container, Section, CTALink } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TeamPhoto } from '@/components/TeamPhoto';
import { MonogramMark } from '@/components/MonogramMark';
import { buildMetadata } from '@/lib/seo';
import { getContent } from '@/lib/content';
import { getMessages, href } from '@/lib/i18n';
import { LOCALES, NAV_PATHS, DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).management;
  return buildMetadata({ locale, segment: NAV_PATHS.management, title: c.kicker, description: c.lead });
}

export default function ManagementPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const c = getContent(locale).management;
  const t = getMessages(locale);

  return (
    <>
      <PageHero image="/images/about.jpg" alt="" eyebrow={c.kicker} title={c.title} lede={c.lead} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.management, path: href(locale, NAV_PATHS.management) },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {c.people.map((person) => (
              <article key={person.slug} className="flex flex-col bg-bone p-8 sm:p-10">
                <div className="w-full max-w-[15rem]">
                  <TeamPhoto src={person.photo} name={person.name} />
                </div>
                <h2 className="mt-6 font-serif text-2xl text-ink">{person.name}</h2>
                <p className="mt-1 text-sm font-sans uppercase tracking-[0.16em] text-maroon">
                  {person.role}
                </p>
                {person.bio.length > 0 && (
                  <div className="mt-5 space-y-4">
                    {person.bio.map((p, i) => (
                      <p key={i} className="leading-relaxed text-ink/75">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Clickable disclosure: the rest of the team */}
          <details className="group mt-12 border-t border-ink/10 pt-6">
            <summary className="flex cursor-pointer list-none items-center gap-3 text-lg font-serif text-ink transition-colors hover:text-maroon">
              <span
                aria-hidden="true"
                className="text-maroon transition-transform duration-200 group-open:rotate-45"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              {c.teamToggle}
            </summary>

            <div className="mt-8 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {c.team.map((member) => (
                <div key={member.name} className="flex items-center gap-4 bg-bone p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/10 bg-bone-200/60">
                    <MonogramMark className="h-6 w-6" title={member.name} />
                  </span>
                  <div>
                    <p className="font-serif text-lg text-ink">{member.name}</p>
                    <p className="text-sm text-maroon">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </details>

          <div className="mt-12">
            <CTALink href={href(locale, NAV_PATHS.contact)}>{t.common.getInTouch}</CTALink>
          </div>
        </Container>
      </Section>
    </>
  );
}
