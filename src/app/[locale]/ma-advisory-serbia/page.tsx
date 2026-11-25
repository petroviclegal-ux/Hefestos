import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Eyebrow, CTALink } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/structured-data';
import { getArticle } from '@/lib/insights';
import { getMessages, href } from '@/lib/i18n';
import {
  LOCALES,
  NAV_PATHS,
  LANDING_PATHS,
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from '@/lib/site';

/**
 * Market-and-service landing page for Serbia.
 *
 * Why this page exists: the section pages describe what the firm does without
 * naming the market it does it in, so nothing on the site matched "M&A
 * advisory Serbia", "investment banking Serbia" or their Serbian equivalents.
 * Competitors holding a fraction of the content rank first on those phrases
 * because each of them has one page pointed at them.
 *
 * ACCURACY: the only firm facts asserted here are ones already published on the
 * site (independent advisory firm, Belgrade, operating since 2001, emerging
 * markets of Europe, Asia and Africa). No named deals, clients or results. The
 * completion mechanics describe procedural steps that exist; they state no
 * thresholds, rates or deadlines, and they are not legal advice.
 */

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const isSr = locale === 'sr';
  return buildMetadata({
    locale,
    segment: LANDING_PATHS.maAdvisorySerbia,
    title: isSr ? 'M&A savetovanje u Srbiji' : 'M&A Advisory in Serbia',
    description: isSr
      ? 'M&A savetnik u Beogradu od 2001. Vodimo prodaju i kupovinu firmi, dokapitalizaciju i prikupljanje kapitala u Srbiji i regionu.'
      : 'Independent M&A advisory and investment banking in Serbia since 2001. Sell-side and buy-side mandates, capital raising and special situations.',
    keywords: isSr
      ? [
          'M&A savetovanje Srbija',
          'M&A savetnik Beograd',
          'investiciono bankarstvo Srbija',
          'prodaja firme u Srbiji',
          'kupovina firme u Srbiji',
        ]
      : [
          'M&A advisory Serbia',
          'investment banking Serbia',
          'M&A advisor Belgrade',
          'sell a company in Serbia',
          'acquire a company in Serbia',
        ],
  });
}

/** Articles that carry this page's topics in depth. */
const READING = [
  'how-to-sell-a-company',
  'how-to-value-a-business',
  'normalised-ebitda-adjustments-buyers-accept',
  'due-diligence-what-buyers-look-for',
  'how-much-does-it-cost-to-sell-a-company',
  'ma-market-review-h1-2026',
] as const;

type Copy = {
  eyebrow: string;
  h1: string;
  lede: string;
  crumb: string;
  clientsHeading: string;
  clients: { title: string; body: string }[];
  mandateHeading: string;
  mandate: string[];
  sidesHeading: string;
  sides: { title: string; body: string }[];
  pricingHeading: string;
  pricing: string[];
  faqHeading: string;
  faq: { question: string; answer: string }[];
  readingHeading: string;
  ctaHeading: string;
  ctaBody: string;
};

const COPY: Record<Locale, Copy> = {
  sr: {
    eyebrow: 'Srbija i Jugoistočna Evropa',
    h1: 'M&A savetovanje u Srbiji',
    lede:
      'Hefestos Capital savetuje vlasnike, kupce i investitore pri prodaji i kupovini firmi, spajanjima i prikupljanju kapitala u Srbiji i regionu. Iz Beograda radimo od 2001.',
    crumb: 'M&A savetovanje u Srbiji',
    clientsHeading: 'Za koga radimo',
    clients: [
      {
        title: 'Vlasnici firmi u Srbiji',
        body: 'Prodaja celog udela, izlaz jednog suvlasnika ili ulazak manjinskog investitora koji finansira rast, dok kontrola ostaje vlasniku.',
      },
      {
        title: 'Kupci iz inostranstva',
        body: 'Strateški kupci i fondovi koji preuzimaju firmu u Srbiji i kojima treba savetnik koji proces vodi na terenu i čita drugu stranu.',
      },
      {
        title: 'Firme koje prikupljaju kapital',
        body: 'Kapital za rast i proširenje, finansiranje akvizicije i refinansiranje postojećeg duga, kroz vlasnički ulog ili kroz kredit.',
      },
      {
        title: 'Situacije sa rokom',
        body: 'Pritisak poverilaca, spor između suvlasnika i restrukturiranje, kada tempo određuju poverioci, sud ili drugi suvlasnik.',
      },
    ],
    mandateHeading: 'Kako mandat u Srbiji izgleda u praksi',
    mandate: [
      'Procena počinje od normalizovanih brojeva. Kroz bilanse privatnih firmi u Srbiji redovno prolaze troškovi vlasnika, zakup od povezanog lica i imovina koja nije u funkciji poslovanja. Kupac će svaku od tih stavki izdvojiti, pa to radimo prvi, pre nego što materijal izađe iz kancelarije.',
      'Krug kupaca je uzak. Za firmu srednje veličine u Srbiji postoji nekoliko domaćih i regionalnih kupaca sposobnih da plate cenu koja odgovara vrednosti. Proces koji se zadrži na njima nije konkurentan, pa ga vodimo i prema strateškim kupcima i fondovima iz Evrope i šire, gde se cena zaista formira.',
      'U malom tržištu vest da je firma na prodaju stiže do konkurenata, dobavljača i zaposlenih brže nego do kupca, i po pravilu pre nego što prodavac stigne da je objasni. Podaci se zato otvaraju u fazama, uz ugovor o poverljivosti, a u prvom kontaktu kupac dobija profil firme bez njenog imena.',
      'Zatvaranje nosi korake koje kupac iz inostranstva po pravilu ne poznaje: overu ugovora o prenosu udela kod javnog beležnika, registraciju promene u APR-u, saglasnost Komisije za zaštitu konkurencije kada su prihodi strana iznad zakonskih pragova, i mehaniku plaćanja preko dve valute. Rokovi za ovo ulaze u vremenski okvir transakcije i planiraju se od početka procesa.',
    ],
    sidesHeading: 'Dve strane istog procesa',
    sides: [
      {
        title: 'Prodaja firme',
        body: 'Priprema poslovanja i dokumentacije, procena vrednosti, lista kupaca, informacioni memorandum, vođenje konkurentnog procesa, pregovori o ugovoru i zatvaranje. Vlasnik tokom celog procesa razgovara sa istim partnerom.',
      },
      {
        title: 'Kupovina firme',
        body: 'Definisanje kriterijuma, pretraga i kontakt sa ciljnim firmama, procena vrednosti i strukture, koordinacija dubinske analize i pregovori o ceni i garancijama. Za kupca iz inostranstva ovo uključuje i procenu koliko je ono što je prikazano moguće potvrditi.',
      },
    ],
    pricingHeading: 'Zašto se firme u Srbiji cene drugačije',
    pricing: [
      'Zavisnost od vlasnika najviše obara cenu. Firma u kojoj vlasnik lično drži odnose sa najvećim kupcima i sam donosi svaku odluku vredi manje od iste firme čiji menadžment posao vodi bez njega. Taj popust se meri u višestrukoj EBITDA i smanjuje se pripremom koja traje mesecima.',
      'Razlika u očekivanjima je druga stalna tema. Prodavac cenu gradi na onome što zna o firmi, kupac na onome što može da proveri. Ta razlika se premošćuje earn-outom, zadržavanjem dela cene do ispunjenja uslova ili korekcijom cene po obrtnom kapitalu na dan zatvaranja.',
    ],
    faqHeading: 'Česta pitanja',
    faq: [
      {
        question: 'Koliko traje prodaja firme u Srbiji?',
        answer:
          'Za pripremljenu firmu srednje veličine od odluke do zatvaranja realno je šest do dvanaest meseci. Priprema je deo koji se najčešće potceni: firma koja na tržište izađe bez urednog knjigovodstva, rešenih ugovora i razdvojenih troškova vlasnika gubi vreme u dubinskoj analizi i cenu u pregovorima.',
      },
      {
        question: 'Koliko košta angažovanje M&A savetnika?',
        answer:
          'Uobičajena struktura je kombinacija mesečne naknade koja pokriva rad na pripremi i provizije na uspeh vezane za ostvarenu cenu. Odnos ta dva dela zavisi od veličine i složenosti mandata. Naknada se dogovara na početku, pre nego što počne rad na materijalu.',
      },
      {
        question: 'Može li proces da ostane poverljiv u tako malom tržištu?',
        answer:
          'Može, ako je tako postavljen od prvog dana. Kupci se kontaktiraju sa anonimnim profilom firme, podaci se otvaraju u fazama posle potpisanog ugovora o poverljivosti, a pristup dokumentaciji ide kroz kontrolisani data room. Broj ljudi koji unutar firme zna za proces drži se na minimumu dok je to moguće.',
      },
      {
        question: 'Savetujete li i kupce, ne samo prodavce?',
        answer:
          'Da. Radimo i mandate na strani kupca: definisanje kriterijuma, pretragu ciljnih firmi, procenu vrednosti i strukture, koordinaciju dubinske analize i pregovore. Na jednoj transakciji zastupamo samo jednu stranu.',
      },
      {
        question: 'Radite li samo u Srbiji?',
        answer:
          'Srbija i region Jugoistočne Evrope su nam baza, ali transakcije vodimo na tržištima u razvoju Evrope, Azije i Afrike. Kod prodaje firme iz Srbije to je prednost, jer kupac koji plaća najvišu cenu najčešće nije iz Srbije.',
      },
    ],
    readingHeading: 'Detaljnije o pojedinim fazama',
    ctaHeading: 'Razgovor pre odluke',
    ctaBody:
      'Prvi razgovor je poverljiv i bez obaveze. Ako prodaja ili prikupljanje kapitala u ovom trenutku nema smisla, reći ćemo vam to.',
  },
  en: {
    eyebrow: 'Serbia & South East Europe',
    h1: 'M&A Advisory in Serbia',
    lede:
      'Hefestos Capital advises owners, buyers and investors on company sales and acquisitions, mergers and capital raising in Serbia and the wider region. We have worked from Belgrade since 2001.',
    crumb: 'M&A Advisory in Serbia',
    clientsHeading: 'Who we act for',
    clients: [
      {
        title: 'Owners of Serbian companies',
        body: 'A full sale, the exit of one shareholder, or the entry of a minority investor who funds growth without taking control.',
      },
      {
        title: 'Buyers from abroad',
        body: 'Strategic buyers and funds acquiring a Serbian business who need an adviser running the process on the ground and reading the other side.',
      },
      {
        title: 'Companies raising capital',
        body: 'Growth and expansion capital, acquisition finance and the refinancing of existing debt, through equity or through lenders.',
      },
      {
        title: 'Situations with a clock on them',
        body: 'Creditor pressure, shareholder disputes and restructurings, where creditors, a court or another shareholder set the pace.',
      },
    ],
    mandateHeading: 'What a Serbian mandate involves in practice',
    mandate: [
      'Valuation starts from normalised figures. The accounts of private Serbian companies routinely carry owner costs, rent paid to a related party and assets that do nothing for the business. A buyer will strip each of those out, so we do it first, before any material leaves the office.',
      'The buyer universe is narrow. For a mid-sized Serbian company there are a handful of domestic and regional buyers able to pay what the business is worth. A process confined to them is not competitive, so we also run it to strategic buyers and funds across Europe and beyond, where the price is actually set.',
      'In a small market, word that a company is for sale reaches competitors, suppliers and staff faster than it reaches a buyer, and usually before the seller has had a chance to explain it. Information is released in stages under a confidentiality agreement, and a buyer first sees a profile of the business without its name.',
      'Completion carries local steps a buyer from abroad rarely expects: notarial certification of the share transfer agreement, registration of the change with the Business Registers Agency, competition clearance where the revenues of the parties exceed the statutory thresholds, and payment mechanics across two currencies. The time these take belongs in the transaction timetable from the start.',
    ],
    sidesHeading: 'Two sides of the same process',
    sides: [
      {
        title: 'Selling a company',
        body: 'Preparing the business and its documentation, valuation, the buyer list, the information memorandum, running a competitive process, negotiating the agreement and closing. The owner speaks to the same partner throughout.',
      },
      {
        title: 'Buying a company',
        body: 'Setting criteria, searching for and approaching targets, valuation and structure, coordinating due diligence and negotiating price and warranties. For a buyer from abroad this also means judging how much of what has been presented can be verified.',
      },
    ],
    pricingHeading: 'Why Serbian companies price differently',
    pricing: [
      'Owner dependency costs the most. A company where the owner personally holds the relationships with the largest customers and makes every decision is worth less than the same company whose management runs it without them. That discount is measured in turns of EBITDA and it narrows through preparation measured in months.',
      'The gap in expectations is the other constant. A seller prices on what they know about the business, a buyer on what they can verify. That gap is bridged with an earn-out, with part of the price held back against conditions, or with a working capital adjustment at completion.',
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      {
        question: 'How long does it take to sell a company in Serbia?',
        answer:
          'For a prepared mid-sized business, six to twelve months from decision to completion is realistic. Preparation is the part most often underestimated: a company that goes to market without clean accounts, settled contracts and owner costs separated out loses time in due diligence and price in negotiation.',
      },
      {
        question: 'What does an M&A adviser charge?',
        answer:
          'The usual structure combines a monthly retainer covering the preparation work with a success fee tied to the price achieved. How the two are weighted depends on the size and complexity of the mandate. Fees are agreed at the outset, before work on the material begins.',
      },
      {
        question: 'Can a process stay confidential in a market this small?',
        answer:
          'It can, if it is built that way from day one. Buyers are approached with an anonymous profile, information is released in stages after a confidentiality agreement is signed, and access to documents runs through a controlled data room. The number of people inside the company who know is kept to a minimum for as long as that is possible.',
      },
      {
        question: 'Do you advise buyers as well as sellers?',
        answer:
          'Yes. We take buy-side mandates: setting criteria, searching for targets, valuation and structure, coordinating due diligence and negotiating. On any one transaction we act for one side only.',
      },
      {
        question: 'Do you work only in Serbia?',
        answer:
          'Serbia and South East Europe are our base, but we run transactions across the emerging markets of Europe, Asia and Africa. When selling a Serbian company that reach matters, because the buyer who pays the most is usually not Serbian.',
      },
    ],
    readingHeading: 'The individual stages in more depth',
    ctaHeading: 'A conversation before the decision',
    ctaBody:
      'The first conversation is confidential and carries no obligation. If a sale or a capital raise makes no sense at this point, we will say so.',
  },
};

export default function MaAdvisorySerbiaPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const t = getMessages(locale);
  const copy = COPY[locale];
  const reading = READING.map((slug) => getArticle(locale, slug)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );

  return (
    <>
      <PageHero
        image="/images/track-record.jpg"
        alt=""
        eyebrow={copy.eyebrow}
        title={copy.h1}
        lede={copy.lede}
      />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.services, path: href(locale, NAV_PATHS.services) },
            { name: copy.crumb, path: href(locale, LANDING_PATHS.maAdvisorySerbia) },
          ]}
        />
      </BreadcrumbBar>

      {/* WHO WE ACT FOR */}
      <Section>
        <Container>
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">{copy.clientsHeading}</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {copy.clients.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="bg-bone p-8">
                <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHAT A MANDATE INVOLVES */}
      <Section className="bg-bone-200/50">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">{copy.mandateHeading}</h2>
            <div className="mt-8 space-y-6">
              {copy.mandate.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SELL-SIDE / BUY-SIDE */}
      <Section>
        <Container>
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">{copy.sidesHeading}</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-2">
            {copy.sides.map((side) => (
              <div key={side.title} className="bg-bone p-8 sm:p-10">
                <h3 className="font-serif text-xl text-ink sm:text-2xl">{side.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{side.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <CTALink href={href(locale, LANDING_PATHS.sellACompany)} variant="ghost">
              {t.common.sellACompany}
            </CTALink>
            <CTALink href={href(locale, NAV_PATHS.services)} variant="ghost">
              {t.common.ourServices}
            </CTALink>
          </div>
        </Container>
      </Section>

      {/* PRICING DYNAMICS */}
      <Section className="bg-ink text-bone">
        <Container>
          <div className="max-w-prose">
            <Eyebrow className="text-maroon-light">{copy.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-2xl text-bone sm:text-3xl">
              {copy.pricingHeading}
            </h2>
            <div className="mt-8 space-y-6">
              {copy.pricing.map((p, i) => (
                <p key={i} className="leading-relaxed text-bone/75">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="max-w-prose">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">{copy.faqHeading}</h2>
            <div className="mt-10">
              <FAQ items={copy.faq} />
            </div>
          </div>
        </Container>
      </Section>
      <JsonLd data={faqSchema(copy.faq)} />

      {/* RELATED READING */}
      {reading.length > 0 ? (
        <Section className="bg-bone-200/50">
          <Container>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">{copy.readingHeading}</h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reading.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`${href(locale, NAV_PATHS.insights)}${a.slug}/`}
                    className="font-serif text-lg text-ink transition-colors hover:text-maroon"
                  >
                    {a.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{a.description}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {/* CTA */}
      <Section className="bg-ink text-bone">
        <Container>
          <div className="max-w-prose">
            <h2 className="font-serif text-3xl text-bone">{copy.ctaHeading}</h2>
            <p className="mt-5 leading-relaxed text-bone/75">{copy.ctaBody}</p>
            <div className="mt-10">
              <CTALink href={href(locale, NAV_PATHS.contact)} tone="light" variant="solid">
                {t.common.getInTouch}
              </CTALink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
