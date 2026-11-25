import type { Metadata } from 'next';
import { Container, Section, CTALink } from '@/components/ui';
import { PageHero, BreadcrumbBar } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ArticleBody, RichText, plainText } from '@/components/ArticleBlocks';
import { buildMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/structured-data';
import type { Block, ArticleFaq } from '@/lib/insights';
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
 * Pillar page for selling a company, the commercial query cluster with the
 * most search volume in Serbia: "prodaja firme", "prodaja firme u srbiji",
 * "savetnik za prodaju firme", "prodaja kompanije", "prodaja preduzeća".
 *
 * It answers the whole question at overview depth and hands each part to the
 * article that covers it in detail, with descriptive anchors, so the cluster
 * reads to a search engine as one body of work with this page at its head.
 *
 * ACCURACY: statutory statements are cited by article and were checked against
 * the consolidated texts on paragraf.rs on 25.11.2026 (see insights-sale.ts).
 * The valuation figures are invented and labelled as such. Timings and fee
 * structure match what the existing articles already publish.
 */

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Copy = {
  seoTitle: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lede: string;
  body: Block[];
  faq: ArticleFaq[];
  ctaHeading: string;
  ctaBody: string;
};

const COPY: Record<Locale, Copy> = {
  sr: {
    seoTitle: 'Prodaja firme u Srbiji: savetnik za prodaju kompanije',
    description:
      'Prodaja firme u Srbiji: koliko traje, šta košta, ko kupuje, kako se računa cena i koji porez se plaća. Hefestos Capital, savetnik za prodaju firmi od 2001.',
    keywords: [
      'prodaja firme',
      'prodaja firme u srbiji',
      'savetnik za prodaju firme',
      'prodaja kompanije',
      'prodaja preduzeća',
      'prodaja doo firme',
      'prodaja biznisa',
    ],
    eyebrow: 'Savetnik za prodaju firme',
    h1: 'Prodaja firme u Srbiji',
    lede:
      'Kako teče prodaja firme od odluke do uplate cene, koliko traje, šta košta, ko kupuje i šta određuje cenu. Za vlasnike koji razmišljaju o prodaji celog ili dela udela.',
    body: [
      { kind: 'p', text: 'Prodaja firme u Srbiji se u velikoj većini slučajeva sprovodi kao prenos udela u društvu sa ograničenom odgovornošću. Kupac time preuzima pravno lice sa svim ugovorima, zaposlenima, dozvolama i obavezama, a kupoprodajnu cenu prima vlasnik udela. Ređa varijanta je prodaja imovine ili dela poslovanja, kada firma ostaje prodavcu, a kupac preuzima pogon, robnu marku ili ugovore. Od tog izbora zavise porez, dokumentacija i odgovornost za stare obaveze, pa se on donosi pre prvog razgovora sa kupcem.' },
      { kind: 'h2', text: 'Tok prodaje, od odluke do uplate' },
      { kind: 'p', text: 'Pripremljena firma srednje veličine prođe put od odluke do zatvaranja za šest do dvanaest meseci. Raspored ispod je primer takvog procesa. Faze se delimično preklapaju: pregovori o ugovoru počinju dok dubinska analiza još traje, jer kupac nalaze odmah prevodi u zahteve za garancije i korekcije cene.' },
      {
        kind: 'timeline',
        title: 'Primer toka prodaje firme srednje veličine',
        unit: 'meseci',
        items: [
          { label: 'Priprema finansija, dokumentacije i materijala', start: 0, end: 3 },
          { label: 'Kontakt sa kupcima i indikativne ponude', start: 3, end: 5 },
          { label: 'Sastanci sa menadžmentom i obavezujuće ponude', start: 5, end: 6 },
          { label: 'Dubinska analiza', start: 6, end: 8 },
          { label: 'Pregovori o ugovoru o prenosu udela', start: 7, end: 9 },
          { label: 'Potpis, overa, plaćanje i registracija u APR', start: 9, end: 10 },
        ],
        note: 'Ilustracija. Rokovi zavise od pripremljenosti firme, broja kupaca u procesu i toga da li je potrebno odobrenje Komisije za zaštitu konkurencije.',
      },
      { kind: 'p', text: 'Najviše vremena se gubi u fazi pre kupca. Firma koja izađe na tržište bez urednih finansijskih izveštaja, sa usmenim ugovorima ili sa nekretninom na vlasniku koju koristi bez ugovora, dobija ta pitanja u dubinskoj analizi, kada kupac ima najveću pregovaračku moć. Detaljan raspored je u tekstu [koliko traje prodaja firme](insights/how-long-to-sell-a-company), a redosled pripreme u tekstu [kako pripremiti firmu za prodaju](insights/prepare-company-for-sale).' },
      { kind: 'h2', text: 'Šta radi savetnik za prodaju firme' },
      { kind: 'p', text: 'Savetnik za prodaju firme, u praksi M&A savetnik na strani prodavca, vodi ekonomski i pregovarački deo transakcije. Priprema procenu vrednosti i prodajne materijale, sastavlja listu kupaca, kontaktira ih bez otkrivanja imena firme, prikuplja i poredi ponude, vodi pregovore o ceni i koordinira advokate, revizore i poreske savetnike do zatvaranja. Vlasnik za to vreme vodi firmu. To je bitno, jer pad rezultata tokom procesa kupac koristi kao argument za nižu cenu.' },
      {
        kind: 'table',
        caption: 'Ko šta radi u prodaji firme',
        head: ['Učesnik', 'Zadatak', 'Kada ulazi'],
        rows: [
          ['M&A savetnik', 'Procena vrednosti, prodajni materijali, lista kupaca, vođenje procesa i pregovora o ceni', 'Od odluke o prodaji'],
          ['Advokat prodavca', 'Ugovor o prenosu udela, garancije, uslovi zatvaranja, korporativne saglasnosti', 'Od pisma o namerama, ranije ako struktura nije jednostavna'],
          ['Poreski savetnik', 'Struktura prodaje i poreske posledice za prodavca', 'Pre prvog kontakta sa kupcem'],
          ['Revizor ili računovođa', 'Finansijski izveštaji na nivou koji kupac prihvata, odgovori u dubinskoj analizi', 'U pripremi i tokom dubinske analize'],
          ['Javni beležnik', 'Overa potpisa na ugovoru o prenosu udela', 'Na zatvaranju'],
        ],
      },
      { kind: 'p', text: 'Biznis broker radi drugi posao: objavljuje oglas i spaja kupca i prodavca, najčešće kod malih firmi i radnji. Za firmu čija se vrednost računa iz novčanog toka, i za koju postoji više mogućih kupaca u zemlji i inostranstvu, potreban je vođen proces sa konkurencijom među ponuđačima. Kako se bira savetnik i šta ga pitati pre potpisa mandata, objašnjava tekst [kako izabrati savetnika za prodaju firme](insights/how-to-choose-an-ma-advisor).' },
      { kind: 'h2', text: 'Ko kupuje firme u Srbiji' },
      { kind: 'p', text: 'Kupci se dele u tri grupe i svaka drugačije računa cenu i drugačije je plaća.' },
      {
        kind: 'table',
        caption: 'Tipovi kupaca i šta ih razlikuje',
        head: ['Kupac', 'Šta traži', 'Kako plaća', 'Šta očekuje od vlasnika'],
        rows: [
          ['Strateški kupac, iz iste ili srodne delatnosti', 'Tržište, kupce, kapacitete, uštede iz spajanja', 'Najčešće veći deo na zatvaranju, ponekad uz earn-out', 'Prelazni period od nekoliko meseci do godinu dana'],
          ['Investicioni fond', 'Stabilan novčani tok i prostor za rast, izlaz posle četiri do sedam godina', 'Deo na zatvaranju, deo kroz zadržan udeo ili earn-out', 'Ostanak u upravi, često uz manjinski udeo'],
          ['Menadžment ili porodica', 'Kontinuitet poslovanja', 'Često u ratama ili uz kredit za kupovinu', 'Postepen izlazak'],
        ],
      },
      { kind: 'p', text: 'Za firmu srednje veličine iz Srbije domaćih kupaca koji mogu da plate punu cenu obično ima nekoliko. Proces koji ostane na domaćem tržištu zato retko proizvede konkurenciju među ponuđačima, a upravo ona podiže cenu. Razlike u načinu procene i u uslovima ugovora obrađuje tekst [fond ili strateški kupac](insights/fund-or-strategic-buyer-what-differs).' },
      { kind: 'h2', text: 'Koliko vredi firma' },
      { kind: 'p', text: 'Kupci firmu srednje veličine najčešće vrednuju kao višestruki iznos normalizovane EBITDA, pa od dobijene vrednosti preduzeća oduzimaju neto dug. Normalizovana EBITDA je rezultat iz poslovanja očišćen od stavki koje se posle prodaje neće ponoviti ili koje odstupaju od tržišnih uslova: lični troškovi vlasnika, zakup od povezanog lica, jednokratni troškovi spora. Svaka korekcija se dokumentuje, jer kupac prihvata samo onu koju može da proveri.' },
      {
        kind: 'bridge',
        title: 'Primer: od prijavljene do normalizovane EBITDA, u hiljadama evra',
        unit: 'hilj. €',
        items: [
          { label: 'Prijavljena EBITDA', value: 800, total: true },
          { label: 'Lični troškovi vlasnika koji prolaze kroz firmu', value: 90 },
          { label: 'Zakup prostora od vlasnika, sveden na tržišnu cenu', value: -40 },
          { label: 'Jednokratni trošak sudskog spora', value: 60 },
          { label: 'Zarada direktora koji zamenjuje vlasnika', value: -50 },
          { label: 'Normalizovana EBITDA', value: 860, total: true },
        ],
        note: 'Izmišljeni brojevi radi ilustracije. Korekcije idu u oba smera: zakup koji vlasnik firmi naplaćuje ispod tržišne cene i rad vlasnika bez zarade smanjuju EBITDA koju kupac priznaje.',
      },
      {
        kind: 'table',
        caption: 'Primer: od normalizovane EBITDA do cene udela',
        head: ['Stavka', 'Iznos, hilj. €'],
        rows: [
          ['Normalizovana EBITDA', '860'],
          ['Multiplikator, pretpostavka za primer', '× 5,5'],
          ['Vrednost preduzeća', '4.730'],
          ['Neto dug: krediti umanjeni za gotovinu', '− 1.200'],
          ['Vrednost kapitala, odnosno cena 100% udela', '3.530'],
        ],
        note: 'Multiplikator zavisi od delatnosti, rasta, zavisnosti od vlasnika i broja kupaca u procesu. Broj iz primera nije tržišni podatak.',
      },
      { kind: 'p', text: 'U ovom primeru korekcije od ukupno 60 hiljada evra pomeraju cenu za 330 hiljada, jer se množe sa 5,5. Zato se o korekcijama pregovara jednako uporno kao o multiplikatoru. Metode procene su u tekstu [procena vrednosti firme](insights/how-to-value-a-business), a korekcije koje kupci prihvataju u tekstu [normalizovana EBITDA](insights/normalised-ebitda-adjustments-buyers-accept).' },
      { kind: 'h2', text: 'Šta košta prodaja firme' },
      { kind: 'p', text: 'Naknada savetnika za prodaju se po pravilu deli na početni ili mesečni iznos koji pokriva pripremu i naknadu za uspeh, koja se plaća samo ako se transakcija zatvori, kao procenat ostvarene cene. Procenat opada sa veličinom transakcije. Uz to idu advokati, revizija ili dubinska analiza na strani prodavca, overa i registracija, i taksa za prijavu koncentracije kada je ona potrebna. Struktura i uobičajeni rasponi su u tekstu [koliko košta prodaja firme](insights/how-much-does-it-cost-to-sell-a-company).' },
      { kind: 'h2', text: 'Pravni koraci: pravo preče kupovine, ugovor, overa i APR' },
      { kind: 'p', text: 'Prenos udela je slobodan, osim ako zakon ili osnivački akt određuju drugačije (član 160 Zakona o privrednim društvima). Pre prodaje trećem licu udeo se nudi ostalim članovima društva, koji ga mogu prihvatiti u roku od 30 dana od prijema ponude. Osnivački akt može propisati duži rok, najviše 90 dana, ili pravo preče kupovine potpuno isključiti (članovi 161 i 162). Ako ga niko ne iskoristi, prodavac ima 90 dana da zaključi ugovor sa trećim licem, pod uslovima koji za kupca ne mogu biti povoljniji od onih iz ponude članovima, ako osnivački akt ne predviđa drugačije (član 165).' },
      { kind: 'p', text: 'Ugovor o prenosu udela se zaključuje u pisanoj formi sa overenim potpisima prodavca i kupca (član 175). Kupac postaje član društva danom registracije u registru privrednih subjekata (član 143), pa se plaćanje cene i registracija u ugovoru vezuju jedno za drugo. Prodavac ostaje solidarno odgovoran sa kupcem za neuplaćeni deo svog uloga, prema stanju na dan prenosa. Korake redom, sa rokovima, prikazuje tekst [prodaja doo firme: procedura prenosa udela](insights/selling-a-doo-share-transfer-procedure).' },
      { kind: 'h2', text: 'Porez pri prodaji udela' },
      { kind: 'p', text: 'Kada udeo prodaje fizičko lice, razlika između prodajne i nabavne cene je kapitalni dobitak i oporezuje se po stopi od 15% (članovi 72 i 77 Zakona o porezu na dohodak građana). Nabavna cena se uvećava za godišnji indeks potrošačkih cena od dana sticanja do dana prodaje (član 74). Za udeo u neprekidnom vlasništvu najmanje deset godina kapitalni dobitak ne nastaje (član 72a). Poreska prijava se podnosi u roku od 30 dana od dana kada je prodavac ostvario ili počeo da ostvaruje prihod od prodaje (član 95). Kada prodaje pravno lice, dobitak ulazi u osnovicu poreza na dobit, po stopi od 15%. Primer obračuna je u tekstu [porez pri prodaji firme](insights/tax-on-selling-a-company).' },
      { kind: 'h2', text: 'Prodaja firme sa dugovima ili u blokadi' },
      { kind: 'p', text: 'Prodajom udela prenosi se celo pravno lice, pa obaveze ostaju u firmi koju kupac preuzima, uključujući poreske i one koje se pojave posle zatvaranja a potiču iz ranijeg perioda. Kupac ih unosi u cenu i u ugovor, kroz garancije prodavca, zadržavanje dela cene ili odbitak duga od cene. Firma u dužoj blokadi računa ima uzak krug ozbiljnih kupaca, i prodaja često nije realna bez prethodnog dogovora sa poveriocima. O tome tekstovi [firma u blokadi](insights/company-account-frozen-what-happens-next) i [restrukturiranje ili prodaja](insights/restructuring-or-selling-a-company-under-pressure).' },
    ],
    faq: [
      {
        question: 'Koliko traje prodaja firme?',
        answer: 'Za pripremljenu firmu srednje veličine šest do dvanaest meseci od odluke do zatvaranja. Proces najviše produžavaju nesređena dokumentacija koja izađe na videlo tek u dubinskoj analizi i potreba za odobrenjem Komisije za zaštitu konkurencije.',
      },
      {
        question: 'Koliko košta savetnik za prodaju firme?',
        answer: 'Uobičajena je kombinacija početnog ili mesečnog iznosa za pripremu i naknade za uspeh, koja se plaća kao procenat ostvarene cene i samo ako se transakcija zatvori. Detalji su u tekstu [koliko košta prodaja firme](insights/how-much-does-it-cost-to-sell-a-company).',
      },
      {
        question: 'Da li moram da ponudim udeo ostalim članovima društva?',
        answer: 'Da, ako osnivački akt to pravo ne isključuje. Ostali članovi imaju 30 dana od prijema ponude da je prihvate, a osnivački akt može predvideti do 90 dana (članovi 161 i 162 Zakona o privrednim društvima).',
      },
      {
        question: 'Koliki je porez na prodaju udela u doo?',
        answer: 'Kada prodaje fizičko lice, 15% kapitalnog dobitka, uz nabavnu cenu uvećanu za indeks potrošačkih cena. Za udeo u neprekidnom vlasništvu najmanje deset godina kapitalni dobitak ne nastaje. Prijava se podnosi u roku od 30 dana.',
      },
      {
        question: 'Može li se prodati firma koja ima dugove?',
        answer: 'Može, ali obaveze ostaju u firmi koju kupac preuzima, pa ih kupac oduzima od cene ili traži garancije i zadržavanje dela cene. Kod duže blokade računa krug kupaca je uzak i često je potreban prethodni dogovor sa poveriocima.',
      },
    ],
    ctaHeading: 'Prvi razgovor o prodaji',
    ctaBody:
      'U prvom razgovoru procenjujemo da li je firma spremna za prodaju, koji je realan raspon vrednosti i ko su verovatni kupci. Razgovor je poverljiv i ne obavezuje. Hefestos Capital savetuje vlasnike pri prodaji firmi od 2001. godine.',
  },
  en: {
    seoTitle: 'Selling a Company in Serbia: Sell-Side M&A Adviser',
    description:
      'Selling a company in Serbia: how long it takes, what it costs, who buys, how the price is set and what tax is due. Hefestos Capital, adviser since 2001.',
    keywords: [
      'sell a company in Serbia',
      'selling a business in Serbia',
      'sell-side M&A adviser Serbia',
      'company sale Serbia',
      'M&A Serbia',
    ],
    eyebrow: 'Sell-side advisory',
    h1: 'Selling a Company in Serbia',
    lede:
      'How a company sale runs from decision to payment, how long it takes, what it costs, who buys and what sets the price. For owners considering the sale of all or part of their shareholding.',
    body: [
      { kind: 'p', text: 'Almost every company sale in Serbia is carried out as a transfer of the share in a limited liability company (d.o.o.). The buyer takes over the legal entity with all its contracts, employees, permits and liabilities, and the price is paid to the shareholder. The less common route is an asset sale, where the company stays with the seller and the buyer takes the plant, the brand or the contracts. Tax, documentation and liability for past obligations all follow from that choice, so it is made before the first conversation with a buyer.' },
      { kind: 'h2', text: 'The sale, from decision to payment' },
      { kind: 'p', text: 'A prepared mid-sized company gets from decision to completion in six to twelve months. The schedule below is an example of such a process. The phases overlap: negotiation of the agreement begins while due diligence is still running, because the buyer turns findings straight into requests for warranties and price adjustments.' },
      {
        kind: 'timeline',
        title: 'Example timeline for selling a mid-sized company',
        unit: 'months',
        items: [
          { label: 'Preparing financials, documents and materials', start: 0, end: 3 },
          { label: 'Buyer outreach and indicative offers', start: 3, end: 5 },
          { label: 'Management meetings and binding offers', start: 5, end: 6 },
          { label: 'Due diligence', start: 6, end: 8 },
          { label: 'Negotiating the share purchase agreement', start: 7, end: 9 },
          { label: 'Signing, certification, payment, APR registration', start: 9, end: 10 },
        ],
        note: 'Illustration. Timings depend on how prepared the company is, how many buyers are in the process and whether competition clearance is needed.',
      },
      { kind: 'p', text: 'Most time is lost before any buyer appears. A company that goes to market without clean financial statements, with oral contracts, or using property owned by the owner without a lease, meets those questions in due diligence, when the buyer has the most leverage. The detailed schedule is in [how long it takes to sell a company](insights/how-long-to-sell-a-company), and the order of preparation in [how to prepare a company for sale](insights/prepare-company-for-sale).' },
      { kind: 'h2', text: 'What a sell-side adviser does' },
      { kind: 'p', text: 'The sell-side M&A adviser runs the economic and negotiating side of the transaction. It prepares the valuation and the sale materials, builds the buyer list, approaches buyers without naming the company, collects and compares offers, negotiates price and coordinates lawyers, auditors and tax advisers through to completion. The owner meanwhile runs the business, which matters, because a dip in results during the process is the buyer’s argument for a lower price.' },
      {
        kind: 'table',
        caption: 'Who does what in a company sale',
        head: ['Participant', 'Task', 'When they join'],
        rows: [
          ['M&A adviser', 'Valuation, sale materials, buyer list, running the process and the price negotiation', 'From the decision to sell'],
          ['Seller’s counsel', 'Share purchase agreement, warranties, conditions to completion, corporate approvals', 'From the letter of intent, earlier if the structure is not simple'],
          ['Tax adviser', 'Sale structure and the seller’s tax position', 'Before the first buyer contact'],
          ['Auditor or accountant', 'Financial statements to a standard buyers accept, due diligence answers', 'During preparation and due diligence'],
          ['Public notary', 'Certifying signatures on the share transfer agreement', 'At completion'],
        ],
      },
      { kind: 'p', text: 'A business broker does a different job: it advertises and introduces buyer and seller, mostly for small firms and shops. A company valued on its cash flow, with several possible buyers at home and abroad, needs a managed process with competition between bidders. How to choose an adviser and what to ask before signing a mandate is covered in [how to choose an M&A adviser](insights/how-to-choose-an-ma-advisor).' },
      { kind: 'h2', text: 'Who buys companies in Serbia' },
      {
        kind: 'table',
        caption: 'Buyer types and what separates them',
        head: ['Buyer', 'Looking for', 'How it pays', 'What it expects of the owner'],
        rows: [
          ['Strategic buyer, same or adjacent sector', 'Market, customers, capacity, merger savings', 'Mostly at completion, sometimes with an earn-out', 'A transition of several months to a year'],
          ['Investment fund', 'Steady cash flow and room to grow, exit after four to seven years', 'Part at completion, part through a retained stake or earn-out', 'Staying in management, often with a minority stake'],
          ['Management or family', 'Continuity', 'Often in instalments or with acquisition finance', 'A gradual exit'],
        ],
      },
      { kind: 'p', text: 'For a mid-sized Serbian company there are usually only a handful of domestic buyers able to pay full value. A process that stays domestic therefore seldom produces competition between bidders, and competition is what lifts the price. Differences in valuation and in contract terms are covered in [fund or strategic buyer](insights/fund-or-strategic-buyer-what-differs).' },
      { kind: 'h2', text: 'What the company is worth' },
      { kind: 'p', text: 'Buyers usually value a mid-sized company as a multiple of normalised EBITDA and then deduct net debt from the resulting enterprise value. Normalised EBITDA is operating profit cleaned of items that will not recur after the sale or that depart from market terms: the owner’s personal costs, rent paid to a related party, the one-off cost of a lawsuit. Each adjustment is documented, because a buyer accepts only what it can verify.' },
      {
        kind: 'bridge',
        title: 'Example: from reported to normalised EBITDA, EUR thousand',
        unit: 'EUR k',
        items: [
          { label: 'Reported EBITDA', value: 800, total: true },
          { label: 'Owner’s personal costs run through the company', value: 90 },
          { label: 'Rent paid to the owner, restated at market rate', value: -40 },
          { label: 'One-off cost of a lawsuit', value: 60 },
          { label: 'Salary of a director replacing the owner', value: -50 },
          { label: 'Normalised EBITDA', value: 860, total: true },
        ],
        note: 'Invented figures for illustration. Adjustments run both ways: below-market rent charged by the owner and an owner working without salary both reduce the EBITDA a buyer recognises.',
      },
      {
        kind: 'table',
        caption: 'Example: from normalised EBITDA to the price of the shares',
        head: ['Item', 'EUR thousand'],
        rows: [
          ['Normalised EBITDA', '860'],
          ['Multiple, assumed for the example', '× 5.5'],
          ['Enterprise value', '4,730'],
          ['Net debt: borrowings less cash', '− 1,200'],
          ['Equity value, the price of 100% of the shares', '3,530'],
        ],
        note: 'The multiple depends on sector, growth, owner dependence and the number of buyers in the process. The figure in the example is not market data.',
      },
      { kind: 'p', text: 'Here adjustments totalling EUR 60 thousand move the price by EUR 330 thousand, because they are multiplied by 5.5. That is why adjustments are negotiated as hard as the multiple. Methods are in [how to value a business](insights/how-to-value-a-business), and the adjustments buyers accept in [normalised EBITDA](insights/normalised-ebitda-adjustments-buyers-accept).' },
      { kind: 'h2', text: 'What a sale costs' },
      { kind: 'p', text: 'A sell-side adviser’s fee is normally split between an initial or monthly amount that covers preparation and a success fee paid only on completion, as a percentage of the price achieved. The percentage falls as deal size rises. On top come lawyers, vendor audit or due diligence, certification and registration, and the merger filing fee where clearance is needed. Structure and usual ranges are in [what it costs to sell a company](insights/how-much-does-it-cost-to-sell-a-company).' },
      { kind: 'h2', text: 'Legal steps: pre-emption, agreement, certification, APR' },
      { kind: 'p', text: 'A share is freely transferable unless the law or the founding act says otherwise (Art. 160 of the Companies Act). Before a sale to a third party the share is offered to the other members, who may accept within 30 days of receiving the offer. The founding act may set a longer period, up to 90 days, or exclude pre-emption altogether (Arts. 161 and 162). If nobody takes it up, the seller has 90 days to sign with a third party, on terms no more favourable to that buyer than the offer to members, unless the founding act provides otherwise (Art. 165).' },
      { kind: 'p', text: 'The agreement is made in writing with the signatures of seller and buyer certified (Art. 175). The buyer becomes a member on registration (Art. 143), so payment and registration are tied together in the agreement. The seller stays jointly liable with the buyer for any unpaid part of its capital contribution as it stood on the transfer date. The steps in order are set out in [selling a Serbian d.o.o.: the share transfer procedure](insights/selling-a-doo-share-transfer-procedure).' },
      { kind: 'h2', text: 'Tax on the sale' },
      { kind: 'p', text: 'When an individual sells, the difference between sale and purchase price is a capital gain taxed at 15% (Arts. 72 and 77 of the Personal Income Tax Act). The purchase price is indexed for consumer prices from acquisition to sale (Art. 74). No capital gain arises on a share held continuously for at least ten years (Art. 72a). The return is filed within 30 days of first receiving proceeds (Art. 95). When a company sells, the gain falls into its corporate income tax at 15%. A worked example is in [tax on selling a company in Serbia](insights/tax-on-selling-a-company).' },
      { kind: 'h2', text: 'Selling a company with debts or a frozen account' },
      { kind: 'p', text: 'A share sale transfers the whole legal entity, so its liabilities stay in the company the buyer takes over, including tax liabilities and those that surface after completion but relate to earlier periods. The buyer prices them in and writes them into the agreement through warranties, a holdback or a deduction from the price. A company whose account has been frozen for long has few serious buyers, and a sale is often not realistic without first agreeing terms with creditors. See [a frozen company account](insights/company-account-frozen-what-happens-next) and [restructuring or selling under pressure](insights/restructuring-or-selling-a-company-under-pressure).' },
    ],
    faq: [
      {
        question: 'How long does it take to sell a company in Serbia?',
        answer: 'For a prepared mid-sized company, six to twelve months from decision to completion. Untidy documentation that only surfaces in due diligence, and the need for competition clearance, extend it most.',
      },
      {
        question: 'What does a sell-side adviser charge?',
        answer: 'Usually an initial or monthly amount for preparation plus a success fee, paid as a percentage of the price achieved and only on completion. See [what it costs to sell a company](insights/how-much-does-it-cost-to-sell-a-company).',
      },
      {
        question: 'Do I have to offer my share to the other members first?',
        answer: 'Yes, unless the founding act excludes the right. The other members have 30 days from receiving the offer to accept, and the founding act may allow up to 90 days (Arts. 161 and 162 of the Companies Act).',
      },
      {
        question: 'What is the tax on selling a share in a Serbian d.o.o.?',
        answer: 'For an individual seller, 15% of the capital gain, with the purchase price indexed for consumer prices. No gain arises on a share held continuously for at least ten years. The return is due within 30 days.',
      },
    ],
    ctaHeading: 'A first conversation about a sale',
    ctaBody:
      'In a first conversation we assess whether the company is ready to sell, the realistic range of value and the likely buyers. It is confidential and commits you to nothing. Hefestos Capital has advised owners on company sales since 2001.',
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const copy = COPY[locale];
  return buildMetadata({
    locale,
    segment: LANDING_PATHS.sellACompany,
    title: copy.seoTitle,
    absoluteTitle: true,
    description: copy.description,
    keywords: copy.keywords,
    ogImage: '/images/insights/sell-company.jpg',
  });
}

export default function SellACompanyPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const t = getMessages(locale);
  const copy = COPY[locale];

  return (
    <>
      <PageHero image="/images/insight-sell.jpg" alt="" eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} />
      <BreadcrumbBar>
        <Breadcrumbs
          items={[
            { name: t.common.home, path: href(locale) },
            { name: t.nav.services, path: href(locale, NAV_PATHS.services) },
            { name: copy.h1, path: href(locale, LANDING_PATHS.sellACompany) },
          ]}
        />
      </BreadcrumbBar>

      <Section>
        <Container>
          <article className="mx-auto max-w-prose">
            <div className="article-prose">
              <ArticleBody blocks={copy.body} locale={locale} />
              <h2>{t.common.faq}</h2>
              {copy.faq.map((f, i) => (
                <div key={i}>
                  <h3>{f.question}</h3>
                  <p className="mt-2">
                    <RichText text={f.answer} locale={locale} />
                  </p>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </Section>
      <JsonLd data={faqSchema(copy.faq.map((f) => ({ question: f.question, answer: plainText(f.answer) })))} />

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
