import { type Locale } from './site';

/**
 * Structured, bilingual page content for Hefestos Capital.
 *
 * ACCURACY: All facts derive from the firm's published materials. `TODO(client)`
 * marks copy the client should confirm or expand (e.g. additional team members,
 * representative transactions). The English shape is canonical; Serbian matches.
 */

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  points: string[];
};

export type Sector = {
  slug: string;
  name: string;
  body: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  /** Path under /public, e.g. '/images/team/name.jpg'. Falls back to the mark. */
  photo?: string;
};

export type Stat = { value: string; label: string };

export type Faq = { question: string; answer: string };

export type SiteContent = {
  home: {
    heroKicker: string;
    heroTitle: string;
    heroLead: string;
    heroPrimary: string;
    heroSecondary: string;
    introHeading: string;
    introBody: string[];
    statsHeading: string;
    servicesHeading: string;
    servicesLead: string;
    sectorsHeading: string;
    sectorsLead: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
  };
  stats: Stat[];
  about: {
    kicker: string;
    title: string;
    lead: string;
    body: string[];
    valuesHeading: string;
    values: { title: string; body: string }[];
  };
  services: {
    kicker: string;
    title: string;
    lead: string;
    items: Service[];
  };
  sectors: {
    kicker: string;
    title: string;
    lead: string;
    items: Sector[];
  };
  trackRecord: {
    kicker: string;
    title: string;
    lead: string;
    body: string[];
    highlightsHeading: string;
    highlights: { value: string; label: string }[];
    clientsHeading: string;
    clientsLead: string;
    clients: string[];
    note: string;
  };
  management: {
    kicker: string;
    title: string;
    lead: string;
    people: Person[];
    teamToggle: string;
    team: { name: string; role: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    formHeading: string;
    detailsHeading: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    messageLabel: string;
    submit: string;
    fallbackNote: string;
    addressLabel: string;
    phoneLabel: string;
    emailContactLabel: string;
  };
  faq: {
    heading: string;
    lead: string;
    items: Faq[];
  };
};

const en: SiteContent = {
  home: {
    heroKicker: 'Independent Investment Banking · Since 2001',
    heroTitle: 'Building bridges in emerging markets',
    heroLead:
      'Hefestos Capital is an independent investment banking and M&A advisory firm. We help owners, companies and institutions sell, buy, merge and raise capital across the emerging markets of Europe, Asia and Africa.',
    heroPrimary: 'Discuss a transaction',
    heroSecondary: 'What we do',
    introHeading: 'A trusted adviser on the transactions that define a business',
    introBody: [
      'Named after Hephaestus, the Greek god of fire and craftsmanship, Hefestos Capital combines a passion for creating value with the craft of designing and executing complex, industry-defining transactions.',
      'Since 2001 our multinational team has advised governments, public and private companies, family-owned businesses, private equity funds, family offices and sovereign wealth funds — acting as a single, senior point of contact from first conversation to closing.',
    ],
    statsHeading: 'Two decades of results',
    servicesHeading: 'What we do',
    servicesLead:
      'End-to-end corporate finance advisory across the full lifecycle of a transaction.',
    sectorsHeading: 'Sectors we know',
    sectorsLead:
      'Deep, hands-on experience across the industries that drive emerging-market growth.',
    ctaHeading: 'Considering a sale, acquisition or capital raise?',
    ctaBody:
      'Every engagement begins with a confidential, no-obligation conversation about your objectives.',
    ctaButton: 'Speak with our advisers',
  },
  stats: [
    { value: '30+', label: 'Dedicated professionals' },
    { value: '600+', label: 'Projects advised since 2002' },
    { value: '400+', label: 'Transactions closed' },
    { value: '$22bn+', label: 'In closed transaction value' },
  ],
  about: {
    kicker: 'Who We Are',
    title: 'An independent partner for defining transactions',
    lead:
      'Hefestos Capital is an independent, employee-owned investment banking firm founded in 2001, advising clients on mergers, acquisitions and capital raising across emerging markets.',
    body: [
      'Named after Hephaestus — the Greek god of fire and craftsmanship — the firm was built on a simple idea: combine a genuine passion for creating value for clients and investors with the care and craft required to design and execute complex, industry-defining transactions.',
      'Our team brings together experienced, multinational professionals with on-the-ground expertise across emerging European, Asian and African markets. We advise a broad base of clients — from governments and large corporates to family-owned businesses and financial sponsors — and we stay senior and hands-on at every stage of a mandate.',
      'Independence shapes everything we do. With no products of our own to sell and no lending balance sheet behind us, we are free to focus on a single question: what creates the most value for our client.',
    ],
    valuesHeading: 'How we work',
    values: [
      {
        title: 'Senior attention on every mandate',
        body: 'The experienced people who earn your trust are the ones who run your transaction, from first conversation to close.',
      },
      {
        title: 'Deep emerging-markets expertise',
        body: 'Local relationships and first-hand understanding of opportunities across Europe, Asia and Africa.',
      },
      {
        title: 'A proven track record',
        body: 'Two decades of experience and hundreds of completed transactions stand behind every recommendation we make.',
      },
      {
        title: 'A long-term partnership',
        body: 'We measure success by results and lasting client relationships — not by the number of transactions we close.',
      },
    ],
  },
  services: {
    kicker: 'What We Do',
    title: 'Full-lifecycle corporate finance advisory',
    lead:
      'From first strategic conversation to signing and completion, we advise on the transactions that shape a company’s future.',
    items: [
      {
        slug: 'mergers-acquisitions',
        title: 'Mergers & Acquisitions',
        short: 'Sell-side and buy-side M&A advisory, from strategy to closing.',
        body: 'We advise owners and management on the sale of a company or division, and corporate and financial buyers on acquisitions. We run disciplined, competitive processes designed to maximise value, protect confidentiality and get transactions closed on the best available terms.',
        points: [
          'Sell-side / disposals and carve-outs',
          'Buy-side acquisitions and target search',
          'Valuation, positioning and process design',
          'Negotiation and completion support',
        ],
      },
      {
        slug: 'joint-ventures-alliances',
        title: 'Joint Ventures & Strategic Alliances',
        short: 'Structuring partnerships that create durable value.',
        body: 'We help clients identify partners and structure joint ventures and strategic alliances — balancing control, contribution and governance so that partnerships are built to last.',
        points: [
          'Partner identification and screening',
          'Deal structuring and governance',
          'Contribution and valuation analysis',
          'Negotiation of JV terms',
        ],
      },
      {
        slug: 'equity-debt-raising',
        title: 'Equity & Debt Raising',
        short: 'Access to growth, acquisition and refinancing capital.',
        body: 'We raise equity and debt capital for companies and shareholders — from growth and acquisition financing to recapitalisations — connecting clients with the right institutional, strategic and financial investors.',
        points: [
          'Growth and expansion capital',
          'Acquisition and leveraged financing',
          'Debt raising and refinancing',
          'Investor identification and outreach',
        ],
      },
      {
        slug: 'special-situations',
        title: 'Special Situations',
        short: 'Advisory for complex, time-sensitive and distressed situations.',
        body: 'We advise on complex and time-sensitive situations — including restructurings, distressed transactions and shareholder disputes — where experience, discretion and speed are decisive.',
        points: [
          'Restructuring and turnaround advisory',
          'Distressed M&A',
          'Shareholder and stakeholder situations',
          'Complex, time-critical mandates',
        ],
      },
      {
        slug: 'principal-investments',
        title: 'Principal Investments',
        short: 'Investing our own capital alongside clients and partners.',
        body: 'Beyond advisory, we selectively invest our own capital in opportunities where our sector knowledge and network can add value — aligning our interests with those of our partners.',
        points: [
          'Selective principal investing',
          'Co-investment alongside partners',
          'Alignment of interest',
          'Sector-led opportunities',
        ],
      },
    ],
  },
  sectors: {
    kicker: 'Sectors',
    title: 'Where we bring depth',
    lead:
      'We combine broad transaction experience with focused sector knowledge across the industries that drive emerging-market growth.',
    items: [
      {
        slug: 'retail',
        name: 'Retail',
        body: 'Advisory across retail formats and consumer-facing businesses, from expansion capital to full exits.',
      },
      {
        slug: 'oil-gas',
        name: 'Oil & Gas',
        body: 'Transactions across the upstream, midstream and downstream value chain in emerging energy markets.',
      },
      {
        slug: 'fmcg',
        name: 'FMCG',
        body: 'Fast-moving consumer goods — brand, production and distribution businesses seeking growth or exit.',
      },
      {
        slug: 'financial-services',
        name: 'Financial Services',
        body: 'Banks, insurers and specialty finance — M&A, capital raising and strategic partnerships.',
      },
      {
        slug: 'industrials',
        name: 'Industrials',
        body: 'Manufacturing and industrial businesses across the emerging European, Asian and African markets.',
      },
      {
        slug: 'energy',
        name: 'Energy & Power',
        body: 'Power generation, utilities and the energy transition — from development capital to consolidation.',
      },
    ],
  },
  trackRecord: {
    kicker: 'Track Record',
    title: 'A record measured in results',
    lead:
      'Since 2002, Hefestos Capital has advised on hundreds of transactions across emerging markets — for clients ranging from sovereign entities to family-owned businesses.',
    body: [
      'Our experience spans sell-side and buy-side M&A, capital raising, joint ventures and special situations across Europe, Asia and Africa. We have advised governments, public and private companies, family-owned businesses, private equity funds, family offices and sovereign wealth funds.',
      'The figures below reflect the cumulative experience of the firm and its professionals.',
    ],
    highlightsHeading: 'By the numbers',
    highlights: [
      { value: '600+', label: 'Projects advised' },
      { value: '400+', label: 'Transactions closed' },
      { value: '$22bn+', label: 'Aggregate transaction value' },
      { value: '20+', label: 'Years of advisory' },
    ],
    clientsHeading: 'Who we advise',
    clientsLead: 'A broad base of clients across the public and private sectors.',
    clients: [
      'Governments',
      'Public companies',
      'Private companies',
      'Family-owned businesses',
      'Private equity funds',
      'Family offices',
      'Sovereign wealth funds',
    ],
    // TODO(client): confirm which specific transactions may be listed publicly
    // (sector, size, role) so we can add a representative deal list for SEO.
    note: 'Selected representative transactions available on request.',
  },
  management: {
    kicker: 'Team',
    title: 'Senior people, senior attention',
    lead:
      'Our leadership brings decades of investment banking experience across Europe, the Middle East and the emerging markets we serve.',
    people: [
      {
        slug: 'alexey-kichaykin',
        name: 'Alexey Kichaykin',
        role: 'Chief Executive Officer',
        photo: '/images/team/alexey-kichaykin.jpg',
        bio: [
          'Alexey Kichaykin has more than 20 years of investment banking experience across Europe and the Middle East.',
          'Prior to Hefestos Capital, he held senior roles at Seagull Capital, Renaissance Capital and PwC, advising clients on mergers, acquisitions and capital markets transactions.',
        ],
      },
      {
        slug: 'stefan-petrovic',
        name: 'Stefan Petrović',
        role: 'Partner',
        photo: '/images/team/stefan-petrovic.jpg',
        bio: [
          'Stefan Petrović is a Partner at Hefestos Capital, focusing on mergers and acquisitions and special situations.',
          'He advises clients across the full transaction lifecycle — from origination and structuring through negotiation and closing — with particular experience in complex, time-sensitive mandates.',
        ],
      },
      {
        slug: 'ivana-simic',
        name: 'Ivana Simić',
        role: 'Business Development Manager',
        photo: '/images/team/ivana-simic.jpg',
        bio: [],
      },
    ],
    teamToggle: 'The rest of our team',
    team: [
      { name: 'Pavle Kavran', role: 'Senior Advisor' },
      { name: 'Milutin Nikolić', role: 'Senior Advisor' },
      { name: 'Anja Đokić', role: 'Financial Advisor' },
      { name: 'Igor Golubović', role: 'Legal Advisor' },
      { name: 'Igor Protić', role: 'Analyst' },
      { name: 'Samir Shalabi', role: 'Middle East Representative' },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s talk',
    lead:
      'Every engagement begins with a confidential, no-obligation conversation. Tell us about your objectives and we will come back to you promptly.',
    formHeading: 'Send us a message',
    detailsHeading: 'Our office',
    nameLabel: 'Full name',
    emailLabel: 'Email',
    companyLabel: 'Company',
    messageLabel: 'How can we help?',
    submit: 'Send message',
    fallbackNote:
      'This opens your email client with the message pre-filled. Alternatively, email us directly at',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailContactLabel: 'Email',
  },
  faq: {
    heading: 'Frequently asked questions',
    lead: 'Common questions from owners and management teams considering a transaction.',
    items: [
      {
        question: 'What does an M&A advisory firm do?',
        answer:
          'An M&A advisory firm guides companies and shareholders through mergers, acquisitions, sales and capital raises — from strategy and valuation to running a competitive process, negotiating terms and closing the transaction. Hefestos Capital acts as a single, senior point of contact throughout.',
      },
      {
        question: 'How do I sell my company?',
        answer:
          'Selling a company typically involves preparing the business, establishing a valuation, identifying the right buyers, running a confidential and competitive process, and negotiating the sale agreement through to completion. Engaging an adviser early — often 6–12 months before going to market — usually produces the best outcome.',
      },
      {
        question: 'How is a business valued?',
        answer:
          'Advisers usually triangulate several methods — comparable company multiples, precedent transactions and a discounted cash flow analysis — to establish a defensible value range. In practice, how well the sale process is run often influences the final price as much as the model.',
      },
      {
        question: 'Is my enquiry confidential?',
        answer:
          'Yes. Confidentiality is fundamental to how we work. Every conversation and engagement is treated in strict confidence, at every stage, and information is shared only under a signed non-disclosure agreement.',
      },
      {
        question: 'Which markets and sectors do you cover?',
        answer:
          'We advise across the emerging markets of Europe, Asia and Africa, with focused sector experience in retail, oil & gas, FMCG, financial services, industrials and energy.',
      },
    ],
  },
};

const sr: SiteContent = {
  home: {
    heroKicker: 'Nezavisno investiciono bankarstvo · Od 2001.',
    heroTitle: 'Gradimo mostove na tržištima u razvoju',
    heroLead:
      'Hefestos Capital je nezavisna investiciono-bankarska i M&A savetodavna firma. Pomažemo vlasnicima, kompanijama i institucijama da prodaju, kupe, spoje kompanije i prikupe kapital na tržištima u razvoju Evrope, Azije i Afrike.',
    heroPrimary: 'Razgovarajmo o transakciji',
    heroSecondary: 'Čime se bavimo',
    introHeading: 'Pouzdan savetnik za transakcije koje oblikuju budućnost kompanije',
    introBody: [
      'Nazvan po Hefestu, grčkom bogu vatre i zanatstva, Hefestos Capital spaja strast za stvaranjem vrednosti sa umećem osmišljavanja i sprovođenja složenih transakcija koje oblikuju čitave industrije.',
      'Od 2001. godine naš multinacionalni tim savetuje vlade, javna i privatna preduzeća, porodične firme, private equity fondove, porodične kancelarije i suverene investicione fondove — kao jedinstvena, iskusna tačka kontakta od prvog razgovora do zatvaranja transakcije.',
    ],
    statsHeading: 'Dve decenije rezultata',
    servicesHeading: 'Čime se bavimo',
    servicesLead:
      'Sveobuhvatno savetovanje u korporativnim finansijama kroz ceo životni ciklus transakcije.',
    sectorsHeading: 'Sektori koje poznajemo',
    sectorsLead:
      'Duboko, praktično iskustvo u industrijama koje pokreću rast tržišta u razvoju.',
    ctaHeading: 'Razmišljate o prodaji, akviziciji ili prikupljanju kapitala?',
    ctaBody:
      'Svaki angažman počinje poverljivim i neobavezujućim razgovorom o vašim ciljevima.',
    ctaButton: 'Razgovarajte sa našim savetnicima',
  },
  stats: [
    { value: '30+', label: 'Posvećenih profesionalaca' },
    { value: '600+', label: 'Projekata od 2002. godine' },
    { value: '400+', label: 'Zatvorenih transakcija' },
    { value: '$22 mlrd+', label: 'Vrednosti zatvorenih transakcija' },
  ],
  about: {
    kicker: 'Ko smo mi',
    title: 'Nezavisni partner za prelomne transakcije',
    lead:
      'Hefestos Capital je nezavisna investiciono-bankarska firma u vlasništvu zaposlenih, osnovana 2001. godine, koja savetuje klijente o spajanjima, akvizicijama i prikupljanju kapitala na tržištima u razvoju.',
    body: [
      'Nazvan po Hefestu — grčkom bogu vatre i zanatstva — firma je izgrađena na jednostavnoj ideji: spojiti iskrenu strast za stvaranjem vrednosti za klijente i investitore sa pažnjom i umećem potrebnim za osmišljavanje i sprovođenje složenih transakcija koje oblikuju čitave industrije.',
      'Naš tim okuplja iskusne, multinacionalne profesionalce sa praktičnim poznavanjem tržišta u razvoju Evrope, Azije i Afrike. Savetujemo širok krug klijenata — od vlada i velikih korporacija do porodičnih firmi i finansijskih investitora — i ostajemo neposredno i iskusno uključeni u svakoj fazi mandata.',
      'Nezavisnost oblikuje sve što radimo. Bez sopstvenih proizvoda koje bismo plasirali i bez kreditnog bilansa iza sebe, u potpunosti se posvećujemo jednom pitanju — šta donosi najveću vrednost našem klijentu.',
    ],
    valuesHeading: 'Kako radimo',
    values: [
      {
        title: 'Iskusan tim na svakom projektu',
        body: 'Isti iskusni ljudi koji steknu vaše poverenje vode i vašu transakciju — od prvog razgovora do zatvaranja.',
      },
      {
        title: 'Temeljno poznavanje tržišta u razvoju',
        body: 'Lokalni odnosi i neposredno razumevanje prilika u Evropi, Aziji i Africi.',
      },
      {
        title: 'Dokazani rezultati',
        body: 'Dve decenije iskustva i stotine realizovanih transakcija stoje iza svake naše preporuke.',
      },
      {
        title: 'Dugoročno partnerstvo',
        body: 'Uspeh merimo rezultatima i trajnim odnosima sa klijentima — a ne brojem zatvorenih transakcija.',
      },
    ],
  },
  services: {
    kicker: 'Čime se bavimo',
    title: 'Savetovanje kroz ceo životni ciklus transakcije',
    lead:
      'Od prvog strateškog razgovora do potpisivanja i realizacije, savetujemo o transakcijama koje oblikuju budućnost kompanije.',
    items: [
      {
        slug: 'mergers-acquisitions',
        title: 'Spajanja i akvizicije (M&A)',
        short: 'Savetovanje pri prodaji i kupovini kompanija — od strategije do zatvaranja transakcije.',
        body: 'Savetujemo vlasnike i menadžment pri prodaji kompanije ili poslovne celine, kao i strateške i finansijske kupce pri akvizicijama. Vodimo disciplinovan i konkurentan proces koji maksimizuje vrednost, čuva poverljivost i dovodi transakciju do zatvaranja pod najpovoljnijim uslovima.',
        points: [
          'Prodaja kompanije (sell-side) i izdvajanje poslovnih celina',
          'Akvizicije (buy-side) i identifikacija ciljnih kompanija',
          'Procena vrednosti, pozicioniranje i koncept procesa',
          'Vođenje pregovora i podrška u realizaciji',
        ],
      },
      {
        slug: 'joint-ventures-alliances',
        title: 'Zajednička ulaganja i strateška partnerstva',
        short: 'Strukturiranje partnerstava koja stvaraju dugoročnu vrednost.',
        body: 'Pomažemo klijentima da pronađu prave partnere i uobliče zajednička ulaganja i strateška partnerstva — pažljivo balansirajući kontrolu, uloge partnera i model upravljanja kako bi partnerstvo bilo održivo na duži rok.',
        points: [
          'Pronalaženje i procena partnera',
          'Strukturiranje transakcije i model upravljanja',
          'Analiza uloga partnera i procena vrednosti',
          'Pregovaranje uslova zajedničkog ulaganja',
        ],
      },
      {
        slug: 'equity-debt-raising',
        title: 'Prikupljanje vlasničkog i dužničkog kapitala',
        short: 'Obezbeđivanje izvora finansiranja za rast, akvizicije i refinansiranje.',
        body: 'Obezbeđujemo vlasnički (equity) i dužnički (debt) kapital za kompanije i njihove vlasnike — od finansiranja rasta i akvizicija do rekapitalizacije — povezujući klijente sa odgovarajućim institucionalnim, strateškim i finansijskim investitorima.',
        points: [
          'Kapital za rast i ekspanziju',
          'Akvizaciono i leveridž finansiranje',
          'Dužničko finansiranje i refinansiranje',
          'Identifikacija i pristup investitorima',
        ],
      },
      {
        slug: 'special-situations',
        title: 'Specijalne situacije',
        short: 'Savetovanje u složenim i vremenski osetljivim okolnostima.',
        body: 'Savetujemo u složenim i vremenski osetljivim okolnostima — uključujući restrukturiranja, transakcije u otežanim finansijskim uslovima i sporove među akcionarima — gde su iskustvo, brzina i pouzdana procena od presudnog značaja.',
        points: [
          'Savetovanje pri restrukturiranju i finansijskom oporavku',
          'Transakcije u otežanim finansijskim uslovima (distressed M&A)',
          'Situacije sa akcionarima i zainteresovanim stranama',
          'Složeni mandati sa kratkim rokovima',
        ],
      },
      {
        slug: 'principal-investments',
        title: 'Sopstvena ulaganja',
        short: 'Ulažemo sopstvena sredstva zajedno sa klijentima i partnerima.',
        body: 'Pored savetovanja, selektivno ulažemo sopstvena sredstva u prilike u kojima naše poznavanje sektora i mreža kontakata donose dodatnu vrednost — čime usklađujemo svoje interese sa interesima partnera.',
        points: [
          'Selektivna sopstvena ulaganja',
          'Zajednička ulaganja sa partnerima (ko-investiranje)',
          'Usklađenost interesa sa partnerima',
          'Prilike zasnovane na poznavanju sektora',
        ],
      },
    ],
  },
  sectors: {
    kicker: 'Sektori',
    title: 'Sektori u kojima imamo dubinsko iskustvo',
    lead:
      'Spajamo široko transakciono iskustvo sa fokusiranim poznavanjem sektora koji pokreću rast tržišta u razvoju.',
    items: [
      {
        slug: 'retail',
        name: 'Maloprodaja',
        body: 'Savetovanje u maloprodajnim formatima i potrošački orijentisanim preduzećima, od kapitala za rast do potpunog izlaska.',
      },
      {
        slug: 'oil-gas',
        name: 'Nafta i gas',
        body: 'Transakcije duž celog lanca vrednosti — upstream, midstream i downstream — na energetskim tržištima u razvoju.',
      },
      {
        slug: 'fmcg',
        name: 'Roba široke potrošnje (FMCG)',
        body: 'Brendovi, proizvodnja i distribucija robe široke potrošnje u potrazi za rastom ili izlaskom.',
      },
      {
        slug: 'financial-services',
        name: 'Finansijske usluge',
        body: 'Banke, osiguravajuća društva i specijalizovane finansijske institucije — M&A, prikupljanje kapitala i strateška partnerstva.',
      },
      {
        slug: 'industrials',
        name: 'Industrija',
        body: 'Proizvodna i industrijska preduzeća na tržištima u razvoju Evrope, Azije i Afrike.',
      },
      {
        slug: 'energy',
        name: 'Energetika',
        body: 'Proizvodnja električne energije, komunalne usluge i energetska tranzicija — od razvojnog kapitala do konsolidacije.',
      },
    ],
  },
  trackRecord: {
    kicker: 'Reference',
    title: 'Rezultati koji govore',
    lead:
      'Od 2002. godine Hefestos Capital je savetovao u stotinama transakcija na tržištima u razvoju — za klijente od državnih institucija do porodičnih firmi.',
    body: [
      'Naše iskustvo obuhvata prodaju i kupovinu (sell-side i buy-side M&A), prikupljanje kapitala, zajednička ulaganja i specijalne situacije širom Evrope, Azije i Afrike. Savetovali smo vlade, javna i privatna preduzeća, porodične firme, private equity fondove, porodične kancelarije i suverene investicione fondove.',
      'Brojke ispod odražavaju kumulativno iskustvo firme i njenih profesionalaca.',
    ],
    highlightsHeading: 'U brojkama',
    highlights: [
      { value: '600+', label: 'Projekata savetovanja' },
      { value: '400+', label: 'Zatvorenih transakcija' },
      { value: '$22 mlrd+', label: 'Ukupne vrednosti transakcija' },
      { value: '20+', label: 'Godina savetovanja' },
    ],
    clientsHeading: 'Koga savetujemo',
    clientsLead: 'Širok krug klijenata u javnom i privatnom sektoru.',
    clients: [
      'Vlade',
      'Javna preduzeća',
      'Privatna preduzeća',
      'Porodične firme',
      'Private equity fondovi',
      'Porodične kancelarije',
      'Suvereni investicioni fondovi',
    ],
    note: 'Odabrane reprezentativne transakcije dostupne su na zahtev.',
  },
  management: {
    kicker: 'Članovi tima',
    title: 'Iskusni ljudi, iskusna pažnja',
    lead:
      'Naše rukovodstvo donosi decenije iskustva u investicionom bankarstvu širom Evrope, Bliskog istoka i tržišta u razvoju na kojima poslujemo.',
    people: [
      {
        slug: 'alexey-kichaykin',
        name: 'Alexey Kichaykin',
        role: 'Izvršni direktor (CEO)',
        photo: '/images/team/alexey-kichaykin.jpg',
        bio: [
          'Alexey Kichaykin ima više od 20 godina iskustva u investicionom bankarstvu širom Evrope i Bliskog istoka.',
          'Pre Hefestos Capital-a, obavljao je rukovodeće funkcije u Seagull Capital-u, Renaissance Capital-u i PwC-u, savetujući klijente o spajanjima, akvizicijama i transakcijama na tržištima kapitala.',
        ],
      },
      {
        slug: 'stefan-petrovic',
        name: 'Stefan Petrović',
        role: 'Partner',
        photo: '/images/team/stefan-petrovic.jpg',
        bio: [
          'Stefan Petrović je Partner u Hefestos Capital-u, sa fokusom na spajanja i akvizicije (M&A) i specijalne situacije.',
          'Savetuje klijente kroz ceo životni ciklus transakcije — od iniciranja i strukturiranja, preko pregovaranja do zatvaranja — sa posebnim iskustvom u složenim, vremenski osetljivim mandatima.',
        ],
      },
      {
        slug: 'ivana-simic',
        name: 'Ivana Simić',
        role: 'Business Development Manager',
        photo: '/images/team/ivana-simic.jpg',
        bio: [],
      },
    ],
    teamToggle: 'Ostali članovi tima',
    team: [
      { name: 'Pavle Kavran', role: 'Viši savetnik' },
      { name: 'Milutin Nikolić', role: 'Viši savetnik' },
      { name: 'Anja Đokić', role: 'Finansijski savetnik' },
      { name: 'Igor Golubović', role: 'Pravni savetnik' },
      { name: 'Igor Protić', role: 'Analitičar' },
      { name: 'Samir Shalabi', role: 'Predstavnik za Bliski istok' },
    ],
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Razgovarajmo',
    lead:
      'Svaki angažman počinje poverljivim, neobavezujućim razgovorom. Recite nam nešto o svojim ciljevima i javićemo vam se u najkraćem roku.',
    formHeading: 'Pošaljite nam poruku',
    detailsHeading: 'Naša kancelarija',
    nameLabel: 'Ime i prezime',
    emailLabel: 'Email',
    companyLabel: 'Kompanija',
    messageLabel: 'Kako možemo da pomognemo?',
    submit: 'Pošalji poruku',
    fallbackNote:
      'Ovo otvara vaš email klijent sa unapred popunjenom porukom. Alternativno, pišite nam direktno na',
    addressLabel: 'Adresa',
    phoneLabel: 'Telefon',
    emailContactLabel: 'Email',
  },
  faq: {
    heading: 'Često postavljana pitanja',
    lead: 'Uobičajena pitanja vlasnika i menadžmenta koji razmatraju transakciju.',
    items: [
      {
        question: 'Čime se bavi M&A savetodavna firma?',
        answer:
          'M&A savetodavna firma vodi kompanije i akcionare kroz spajanja, akvizicije, prodaje i prikupljanje kapitala — od strategije i procene vrednosti, preko vođenja konkurentnog procesa, do pregovaranja uslova i zatvaranja transakcije. Hefestos Capital je jedinstvena, iskusna tačka kontakta tokom celog procesa.',
      },
      {
        question: 'Kako da prodam svoju kompaniju?',
        answer:
          'Prodaja kompanije obično podrazumeva pripremu poslovanja, utvrđivanje vrednosti, identifikaciju pravih kupaca, vođenje poverljivog i konkurentnog procesa i pregovaranje ugovora o prodaji do realizacije. Angažovanje savetnika na vreme — često 6–12 meseci pre izlaska na tržište — obično daje najbolji rezultat.',
      },
      {
        question: 'Kako se procenjuje vrednost kompanije?',
        answer:
          'Savetnici obično kombinuju nekoliko metoda — multiplikatore uporedivih kompanija, prethodne transakcije i analizu diskontovanih novčanih tokova — da bi utvrdili branjiv raspon vrednosti. U praksi, koliko je dobro vođen proces prodaje često utiče na konačnu cenu jednako koliko i sam model.',
      },
      {
        question: 'Da li je moj upit poverljiv?',
        answer:
          'Da. Poverljivost je temelj našeg rada. Svaki razgovor i angažman tretiramo strogo poverljivo, u svakoj fazi, a informacije se dele isključivo uz potpisan ugovor o poverljivosti (NDA).',
      },
      {
        question: 'Koja tržišta i sektore pokrivate?',
        answer:
          'Savetujemo na tržištima u razvoju Evrope, Azije i Afrike, sa fokusiranim iskustvom u sektorima maloprodaje, nafte i gasa, robe široke potrošnje (FMCG), finansijskih usluga, industrije i energetike.',
      },
    ],
  },
};

const content: Record<Locale, SiteContent> = { en, sr };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
