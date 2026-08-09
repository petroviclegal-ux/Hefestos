import { type Locale } from './site';

/**
 * Bilingual "Insights" articles — the site's SEO content engine. Each article
 * exists in both locales under the same slug so hreflang alternates line up.
 *
 * Content is original, general-education advisory writing (no invented claims
 * about specific Hefestos deals or clients). Add new articles by appending to
 * both the `en` and `sr` arrays with matching slugs.
 */

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; text: string }
  | { kind: 'ul'; items: string[] };

export type Article = {
  slug: string;
  date: string; // ISO
  title: string;
  description: string;
  keywords: string[];
  body: Block[];
};

const en: Article[] = [
  {
    slug: 'how-to-sell-a-company',
    date: '2026-01-15',
    title: 'How to Sell a Company: The M&A Process Explained',
    description:
      'A step-by-step guide to selling a business — from preparation and valuation to running a competitive process and closing the deal.',
    keywords: [
      'how to sell a company',
      'selling a business',
      'M&A process',
      'sell-side advisory',
      'business sale',
    ],
    body: [
      { kind: 'p', text: 'Selling a company is one of the most significant financial events in an owner’s life. Done well, a structured sale process maximises value, protects confidentiality and gets the transaction across the line on the best available terms. Done poorly, it can destroy value and consume years. This guide sets out the core stages of a professionally-run sell-side process.' },
      { kind: 'h2', text: '1. Preparation and positioning' },
      { kind: 'p', text: 'Before approaching any buyer, a company should be prepared for sale. That means cleaning up financials, resolving legal and tax issues, documenting recurring revenue and margins, and building an equity story that explains why the business is valuable and where its growth comes from. Preparation typically begins six to twelve months before going to market.' },
      { kind: 'h2', text: '2. Valuation' },
      { kind: 'p', text: 'A credible valuation anchors the process. Advisers typically triangulate between comparable company multiples, precedent transactions and a discounted cash flow analysis to establish a defensible value range — and, just as importantly, to identify the levers that move it.' },
      { kind: 'h2', text: '3. Building the buyer universe' },
      { kind: 'p', text: 'The right buyer is rarely the first one to call. A good adviser maps the full universe of strategic acquirers, private equity funds and family offices — domestic and cross-border — and runs a disciplined, competitive process that creates tension between credible bidders.' },
      { kind: 'h2', text: '4. Marketing materials and outreach' },
      { kind: 'ul', items: [
        'A teaser — a short, anonymous summary used for first contact',
        'An information memorandum — the detailed sale document',
        'A non-disclosure agreement executed before any confidential information is shared',
      ] },
      { kind: 'h2', text: '5. Offers, due diligence and closing' },
      { kind: 'p', text: 'Indicative offers narrow the field; shortlisted buyers conduct due diligence and submit binding bids. The final stage is negotiating the sale and purchase agreement — price, structure, warranties, earn-outs and conditions — and moving to signing and completion. Experienced advice at this stage protects the seller from value leakage in the fine print.' },
      { kind: 'h2', text: 'The value of an independent adviser' },
      { kind: 'p', text: 'An independent M&A adviser runs the process so owners can keep running the business, maintains competitive tension, and brings the experience to anticipate where deals stall. If you are considering a sale, the earliest conversations are the most valuable — they cost nothing and shape everything that follows.' },
    ],
  },
  {
    slug: 'what-does-an-ma-advisor-do',
    date: '2026-02-10',
    title: 'What Does an M&A Advisor Do — and When Should You Hire One?',
    description:
      'M&A advisors guide companies through mergers, acquisitions and capital raises. Here is what they do and when engaging one pays for itself.',
    keywords: [
      'M&A advisor',
      'investment bank',
      'corporate finance advisor',
      'sell-side',
      'buy-side',
    ],
    body: [
      { kind: 'p', text: 'An M&A advisor (or investment bank) guides companies, shareholders and investors through mergers, acquisitions, capital raises and other strategic transactions. Their role is part strategist, part project manager and part negotiator — and a good one earns their fee many times over.' },
      { kind: 'h2', text: 'Core responsibilities' },
      { kind: 'ul', items: [
        'Advising on strategy: whether, when and how to transact',
        'Valuation and financial analysis',
        'Preparing marketing materials and the equity story',
        'Identifying and approaching counterparties',
        'Running a competitive, confidential process',
        'Negotiating price, structure and terms',
        'Coordinating due diligence, lawyers and closing',
      ] },
      { kind: 'h2', text: 'When to engage an advisor' },
      { kind: 'p', text: 'The best time to engage an advisor is earlier than most owners think — ideally well before a transaction is imminent. Early involvement allows time to prepare the business, optimise timing and approach the market from a position of strength rather than necessity.' },
      { kind: 'h2', text: 'Advisor vs. business broker' },
      { kind: 'p', text: 'For larger, more complex transactions, an M&A advisor differs from a business broker in the depth of analysis, the breadth of the buyer network, and the ability to run a competitive process across borders. The right choice depends on the size and complexity of the deal.' },
    ],
  },
  {
    slug: 'how-to-value-a-business',
    date: '2026-03-05',
    title: 'How to Value a Business: Methods That Matter',
    description:
      'The main business valuation methods explained — comparable multiples, precedent transactions and discounted cash flow — and how they work together.',
    keywords: [
      'business valuation',
      'how to value a company',
      'DCF',
      'EBITDA multiple',
      'company valuation methods',
    ],
    body: [
      { kind: 'p', text: 'Valuation is both an art and a science. There is no single "correct" number — instead, experienced advisers use several methods together to establish a defensible range and understand what drives value up or down.' },
      { kind: 'h2', text: 'Comparable company analysis' },
      { kind: 'p', text: 'This method values a business by reference to the trading multiples of similar listed companies — most commonly enterprise value to EBITDA. It is quick and market-based, but truly comparable public companies can be hard to find.' },
      { kind: 'h2', text: 'Precedent transactions' },
      { kind: 'p', text: 'Here, value is benchmarked against the multiples paid in recent acquisitions of similar businesses. Because these are real deals, they often capture a control premium that trading multiples do not.' },
      { kind: 'h2', text: 'Discounted cash flow (DCF)' },
      { kind: 'p', text: 'A DCF projects the company’s future free cash flows and discounts them to present value. It is the most fundamental method and the most sensitive to assumptions — small changes in growth or discount rate move the answer materially.' },
      { kind: 'h2', text: 'What actually moves value' },
      { kind: 'ul', items: [
        'Quality and predictability of earnings',
        'Growth rate and market position',
        'Customer concentration and recurring revenue',
        'Management depth and dependence on the owner',
        'The competitive tension in the sale process itself',
      ] },
      { kind: 'p', text: 'The last point matters most: in practice, the price achieved often depends less on the model than on how well the process is run. That is where an experienced adviser makes the difference.' },
    ],
  },
  {
    slug: 'prepare-company-for-sale',
    date: '2026-04-02',
    title: 'How to Prepare Your Company for Sale',
    description:
      'The preparation that happens before a company goes to market often determines the final price. Here is what to get right, and when to start.',
    keywords: [
      'prepare company for sale',
      'sell a business',
      'exit planning',
      'business readiness',
      'M&A preparation',
    ],
    body: [
      { kind: 'p', text: 'Most owners think about the sale process — the buyers, the negotiation, the price. But the work that most reliably increases value happens earlier, in the six to twelve months before a company goes to market. Preparation is where value is created; the process is where it is captured.' },
      { kind: 'h2', text: 'Put the financials in order' },
      { kind: 'p', text: 'Buyers pay for clarity. Clean, consistent management accounts, a credible budget, and a clear view of recurring versus one-off revenue all reduce perceived risk — and reduced risk is a higher price. Resolving accounting inconsistencies before diligence begins avoids surprises that erode trust later.' },
      { kind: 'h2', text: 'Reduce dependence on the owner' },
      { kind: 'p', text: 'A business that cannot run without its founder is worth less than one that can. Delegating key relationships, documenting processes and building a capable management team all make the company more transferable — and therefore more valuable.' },
      { kind: 'h2', text: 'Address the obvious risks' },
      { kind: 'ul', items: [
        'Customer concentration — a single client that is too large a share of revenue',
        'Unresolved legal, tax or regulatory issues',
        'Expiring contracts or key-supplier dependencies',
        'Gaps in intellectual property or ownership documentation',
      ] },
      { kind: 'h2', text: 'Build the equity story' },
      { kind: 'p', text: 'Finally, a company needs a clear narrative: why it is valuable, where growth comes from, and why it is the right asset for the right buyer. A well-prepared equity story lets a competitive process do its work. Starting these conversations early — even years ahead of a sale — is the single best investment an owner can make in the eventual outcome.' },
    ],
  },
  {
    slug: 'due-diligence-what-buyers-look-for',
    date: '2026-05-06',
    title: 'Due Diligence: What Buyers Look For',
    description:
      'Due diligence can make or break a deal. Understanding what buyers examine — and preparing for it — protects both value and timeline.',
    keywords: [
      'due diligence',
      'M&A due diligence',
      'selling a business',
      'data room',
      'deal process',
    ],
    body: [
      { kind: 'p', text: 'Once a buyer has been selected, due diligence begins — the detailed examination of a business before a binding offer is confirmed. It is often the most intensive phase of a transaction, and the point at which many deals stall or lose value. Sellers who understand what buyers look for can prepare, and protect both price and timeline.' },
      { kind: 'h2', text: 'The main areas of review' },
      { kind: 'ul', items: [
        'Financial — quality of earnings, working capital, and the sustainability of margins',
        'Commercial — market position, customer relationships and the pipeline',
        'Legal — contracts, litigation, ownership and corporate structure',
        'Tax — historical exposures and the structure of the transaction',
        'Operational — systems, people and key dependencies',
      ] },
      { kind: 'h2', text: 'Prepare the data room in advance' },
      { kind: 'p', text: 'A well-organised data room — the secure repository of company information — signals a well-run business and keeps the process moving. Assembling it before diligence begins, rather than scrambling under deadline, prevents delays that give buyers room to renegotiate.' },
      { kind: 'h2', text: 'Anticipate the difficult questions' },
      { kind: 'p', text: 'Every business has weak points. It is far better to identify them, prepare a clear explanation, and control how they are presented than to have a buyer discover them. Surprises during diligence damage trust and invite price reductions.' },
      { kind: 'h2', text: 'The adviser’s role' },
      { kind: 'p', text: 'An experienced adviser manages diligence so the owner can keep running the business, coordinates the specialists involved, and maintains momentum through what can be a demanding process. Managed well, diligence confirms value rather than eroding it.' },
    ],
  },
  {
    slug: 'sell-side-vs-buy-side',
    date: '2026-05-20',
    title: 'Sell-Side vs. Buy-Side M&A: What’s the Difference?',
    description:
      'Sell-side and buy-side advisory sit on opposite ends of a transaction. Understanding each clarifies what an adviser actually does for you.',
    keywords: ['sell-side', 'buy-side', 'M&A advisory', 'mergers and acquisitions', 'deal process'],
    body: [
      { kind: 'p', text: 'In every acquisition there are two sides — a seller and a buyer — and an adviser typically represents one of them. The distinction between sell-side and buy-side work shapes the entire mandate: the objectives, the process, and how success is measured.' },
      { kind: 'h2', text: 'Sell-side advisory' },
      { kind: 'p', text: 'On the sell-side, the adviser represents the company or its shareholders. The goal is to maximise value and certainty of completion. That means preparing the business, positioning the equity story, identifying and approaching the right buyers, and running a competitive process that creates tension between bidders.' },
      { kind: 'h2', text: 'Buy-side advisory' },
      { kind: 'p', text: 'On the buy-side, the adviser represents an acquirer looking to grow through acquisition. The work is different: defining acquisition criteria, mapping and approaching targets — often ones that are not for sale — assessing value, and structuring an offer that wins the deal without overpaying.' },
      { kind: 'h2', text: 'Why it matters to you' },
      { kind: 'p', text: 'Knowing which side an adviser sits on tells you whose interests they serve. A good adviser is transparent about their role and never on both sides of the same transaction. Whether you are selling or acquiring, the right representation is one of the most important decisions in the process.' },
    ],
  },
  {
    slug: 'how-long-to-sell-a-company',
    date: '2026-06-10',
    title: 'How Long Does It Take to Sell a Company?',
    description:
      'From preparation to completion, a company sale typically takes six to twelve months — sometimes longer. Here is what drives the timeline.',
    keywords: ['how long to sell a business', 'M&A timeline', 'company sale process', 'selling a company'],
    body: [
      { kind: 'p', text: 'One of the first questions owners ask is how long a sale will take. The honest answer is that it depends — but most well-run processes run from six to twelve months from the decision to sell through to completion, with preparation sometimes beginning much earlier.' },
      { kind: 'h2', text: 'Preparation: 1–3 months (or more)' },
      { kind: 'p', text: 'Getting the business ready — financials, legal clean-up, the information memorandum and the buyer list — takes time and is where value is protected. Rushing this stage almost always costs more than it saves.' },
      { kind: 'h2', text: 'Marketing and offers: 2–4 months' },
      { kind: 'p', text: 'Approaching buyers, holding management meetings and gathering indicative offers narrows the field to a shortlist of credible, motivated bidders.' },
      { kind: 'h2', text: 'Diligence and closing: 2–4 months' },
      { kind: 'p', text: 'The selected buyer conducts due diligence and the parties negotiate the sale agreement through to signing and completion. Complex structures, regulatory approvals or financing conditions can extend this stage.' },
      { kind: 'h2', text: 'What speeds it up' },
      { kind: 'p', text: 'The single biggest accelerator is preparation. A well-prepared business with a clean data room and a clear equity story moves faster, holds value better, and gives buyers fewer reasons to hesitate.' },
    ],
  },
  {
    slug: 'earn-outs-explained',
    date: '2026-06-24',
    title: 'Earn-Outs Explained: Bridging the Valuation Gap',
    description:
      'When buyer and seller disagree on value, an earn-out can bridge the gap — tying part of the price to future performance. Here is how they work.',
    keywords: ['earn-out', 'deferred consideration', 'valuation gap', 'M&A structuring', 'sale agreement'],
    body: [
      { kind: 'p', text: 'Buyers and sellers often disagree on value: the seller is confident about the future, the buyer is cautious. An earn-out is a common way to bridge that gap — a portion of the purchase price is deferred and paid only if the business hits agreed targets after completion.' },
      { kind: 'h2', text: 'How an earn-out works' },
      { kind: 'p', text: 'Part of the consideration is paid upfront; the remainder becomes payable over a defined period — usually one to three years — if the business achieves specified metrics, most often revenue or EBITDA. It lets the buyer pay for performance and the seller share in the upside they believe in.' },
      { kind: 'h2', text: 'Where earn-outs go wrong' },
      { kind: 'ul', items: [
        'Vague or poorly defined targets that invite disputes',
        'The seller losing control of the levers that drive the metric',
        'Accounting definitions that shift the goalposts',
        'Misaligned incentives during the earn-out period',
      ] },
      { kind: 'h2', text: 'Getting it right' },
      { kind: 'p', text: 'A well-drafted earn-out is precise about the metric, the measurement, and how the business will be run during the period. Experienced advice at the negotiation stage is what turns an earn-out from a source of future conflict into a fair bridge between two views of value.' },
    ],
  },
  {
    slug: 'growth-capital-equity-vs-debt',
    date: '2026-07-08',
    title: 'Financing Growth: Equity or Debt?',
    description:
      'Growing companies can raise equity, debt, or a mix of both. Each has a cost and a consequence. Here is how to think about the choice.',
    keywords: ['growth capital', 'equity vs debt', 'raising capital', 'company financing', 'capital structure'],
    body: [
      { kind: 'p', text: 'When a company needs capital to grow, acquire or expand, it broadly has two options: raise equity by bringing in investors, or raise debt by borrowing. Most companies use a mix. The right balance depends on the business, its stage and its appetite for risk.' },
      { kind: 'h2', text: 'Equity' },
      { kind: 'p', text: 'Raising equity means selling a stake in the business. There are no repayments and the capital is patient, which suits earlier-stage or higher-risk growth. The cost is dilution — the owner gives up a share of ownership and future value, and often a say in how the business is run.' },
      { kind: 'h2', text: 'Debt' },
      { kind: 'p', text: 'Debt is borrowed and repaid with interest. It does not dilute ownership, which is its main appeal, but it must be serviced regardless of performance and it adds financial risk. Debt suits businesses with stable, predictable cash flows.' },
      { kind: 'h2', text: 'Finding the right mix' },
      { kind: 'p', text: 'The best capital structure balances cost, control and risk against the company’s plans. An adviser helps model the options, approach the right investors and lenders, and negotiate terms — so growth is funded without compromising the business.' },
    ],
  },
  {
    slug: 'how-to-choose-an-ma-advisor',
    date: '2026-07-22',
    title: 'How to Choose an M&A Advisor',
    description:
      'The right adviser can add far more value than their fee. Here is what to look for when choosing who to trust with a transaction.',
    keywords: ['choose an M&A advisor', 'investment bank selection', 'corporate finance advisor', 'sell a business'],
    body: [
      { kind: 'p', text: 'A transaction is one of the most significant events in a company’s life, and the choice of adviser shapes the outcome. The right one earns their fee many times over; the wrong one can cost value and time. Here is what matters.' },
      { kind: 'h2', text: 'Relevant experience' },
      { kind: 'p', text: 'Look for a team with genuine experience in transactions like yours — your size, your sector, your market. Experience is what allows an adviser to anticipate where deals stall and to guide you around the pitfalls.' },
      { kind: 'h2', text: 'Senior involvement' },
      { kind: 'p', text: 'Ask who will actually run your transaction day to day. In some firms, senior people win the mandate and junior people execute it. The best outcomes come from senior attention throughout.' },
      { kind: 'h2', text: 'Independence and alignment' },
      { kind: 'p', text: 'An independent adviser, compensated largely on a successful outcome, is aligned with you. Understand how the adviser is paid and whether any other interests could influence their advice.' },
      { kind: 'h2', text: 'Trust' },
      { kind: 'p', text: 'Finally, you will work closely with this team on a confidential, high-stakes process. Choose people you trust, who communicate clearly, and who treat your business as carefully as you do.' },
    ],
  },
];

const sr: Article[] = [
  {
    slug: 'how-to-sell-a-company',
    date: '2026-01-15',
    title: 'Kako prodati kompaniju: proces M&A objašnjen',
    description:
      'Vodič korak po korak kroz prodaju kompanije — od pripreme i procene vrednosti do vođenja konkurentnog procesa i zatvaranja transakcije.',
    keywords: [
      'kako prodati kompaniju',
      'prodaja firme',
      'M&A proces',
      'prodaja preduzeća',
      'savetovanje pri prodaji',
    ],
    body: [
      { kind: 'p', text: 'Prodaja kompanije je jedan od najznačajnijih finansijskih događaja u životu vlasnika. Dobro vođen, strukturiran proces prodaje maksimizuje vrednost, štiti poverljivost i dovodi transakciju do cilja pod najboljim mogućim uslovima. Loše vođen, može uništiti vrednost i potrošiti godine. Ovaj vodič opisuje osnovne faze profesionalno vođenog procesa prodaje.' },
      { kind: 'h2', text: '1. Priprema i pozicioniranje' },
      { kind: 'p', text: 'Pre kontaktiranja bilo kog kupca, kompaniju treba pripremiti za prodaju. To znači srediti finansije, rešiti pravna i poreska pitanja, dokumentovati ponavljajuće prihode i marže i izgraditi priču o vrednosti koja objašnjava zašto je posao vredan i odakle dolazi rast. Priprema obično počinje šest do dvanaest meseci pre izlaska na tržište.' },
      { kind: 'h2', text: '2. Procena vrednosti' },
      { kind: 'p', text: 'Verodostojna procena vrednosti je temelj procesa. Savetnici obično kombinuju multiplikatore uporedivih kompanija, prethodne transakcije i analizu diskontovanih novčanih tokova kako bi utvrdili branjiv raspon vrednosti — i, jednako važno, prepoznali poluge koje ga pomeraju.' },
      { kind: 'h2', text: '3. Mapiranje kruga kupaca' },
      { kind: 'p', text: 'Pravi kupac retko je onaj koji se prvi javi. Dobar savetnik mapira ceo krug strateških kupaca, private equity fondova i porodičnih kancelarija — domaćih i inostranih — i vodi disciplinovan, konkurentan proces koji stvara tenziju između ozbiljnih ponuđača.' },
      { kind: 'h2', text: '4. Marketing materijali i kontaktiranje' },
      { kind: 'ul', items: [
        'Teaser — kratak, anoniman rezime za prvi kontakt',
        'Informacioni memorandum — detaljan prodajni dokument',
        'Ugovor o poverljivosti (NDA) potpisan pre deljenja poverljivih informacija',
      ] },
      { kind: 'h2', text: '5. Ponude, dubinska analiza i zatvaranje' },
      { kind: 'p', text: 'Indikativne ponude sužavaju krug; odabrani kupci sprovode dubinsku analizu (due diligence) i podnose obavezujuće ponude. Poslednja faza je pregovaranje ugovora o kupoprodaji — cena, struktura, garancije, earn-out i uslovi — i prelazak na potpisivanje i realizaciju. Iskusan savet u ovoj fazi štiti prodavca od gubitka vrednosti u sitnim slovima.' },
      { kind: 'h2', text: 'Vrednost nezavisnog savetnika' },
      { kind: 'p', text: 'Nezavisni M&A savetnik vodi proces kako bi vlasnici mogli da nastave da vode posao, održava konkurentnu tenziju i donosi iskustvo da predvidi gde transakcije zapinju. Ako razmišljate o prodaji, najraniji razgovori su najvredniji — ne koštaju ništa, a oblikuju sve što sledi.' },
    ],
  },
  {
    slug: 'what-does-an-ma-advisor-do',
    date: '2026-02-10',
    title: 'Šta radi M&A savetnik — i kada ga angažovati?',
    description:
      'M&A savetnici vode kompanije kroz spajanja, akvizicije i prikupljanje kapitala. Evo šta rade i kada se njihov angažman isplati.',
    keywords: [
      'M&A savetnik',
      'investiciona banka',
      'savetnik za korporativne finansije',
      'prodaja kompanije',
      'akvizicija',
    ],
    body: [
      { kind: 'p', text: 'M&A savetnik (ili investiciona banka) vodi kompanije, akcionare i investitore kroz spajanja, akvizicije, prikupljanje kapitala i druge strateške transakcije. Njegova uloga je delom strateg, delom vođa projekta, a delom pregovarač — i dobar savetnik višestruko opravda svoju naknadu.' },
      { kind: 'h2', text: 'Osnovne odgovornosti' },
      { kind: 'ul', items: [
        'Savetovanje o strategiji: da li, kada i kako sprovesti transakciju',
        'Procena vrednosti i finansijska analiza',
        'Priprema marketing materijala i priče o vrednosti',
        'Identifikacija i kontaktiranje druge strane',
        'Vođenje konkurentnog, poverljivog procesa',
        'Pregovaranje cene, strukture i uslova',
        'Koordinacija dubinske analize, advokata i zatvaranja',
      ] },
      { kind: 'h2', text: 'Kada angažovati savetnika' },
      { kind: 'p', text: 'Najbolji trenutak za angažovanje savetnika je ranije nego što većina vlasnika misli — idealno mnogo pre nego što transakcija postane neizbežna. Rano uključivanje ostavlja vremena da se posao pripremi, optimizuje tajming i tržištu pristupi sa pozicije snage, a ne nužde.' },
      { kind: 'h2', text: 'Savetnik naspram posrednika' },
      { kind: 'p', text: 'Za veće i složenije transakcije, M&A savetnik se razlikuje od poslovnog posrednika po dubini analize, širini mreže kupaca i sposobnosti da vodi konkurentan proces preko granica. Pravi izbor zavisi od veličine i složenosti transakcije.' },
    ],
  },
  {
    slug: 'how-to-value-a-business',
    date: '2026-03-05',
    title: 'Kako proceniti vrednost kompanije: metode koje su bitne',
    description:
      'Glavne metode procene vrednosti kompanije — uporedivi multiplikatori, prethodne transakcije i diskontovani novčani tok — i kako funkcionišu zajedno.',
    keywords: [
      'procena vrednosti kompanije',
      'kako proceniti firmu',
      'DCF',
      'EBITDA multiplikator',
      'metode procene vrednosti',
    ],
    body: [
      { kind: 'p', text: 'Procena vrednosti je i umetnost i nauka. Ne postoji jedan „tačan" broj — umesto toga, iskusni savetnici kombinuju nekoliko metoda kako bi utvrdili branjiv raspon i razumeli šta podiže ili spušta vrednost.' },
      { kind: 'h2', text: 'Analiza uporedivih kompanija' },
      { kind: 'p', text: 'Ova metoda procenjuje vrednost prema trgovinskim multiplikatorima sličnih kompanija koje kotiraju na berzi — najčešće odnos vrednosti preduzeća prema EBITDA. Brza je i tržišno zasnovana, ali istinski uporedive javne kompanije je ponekad teško pronaći.' },
      { kind: 'h2', text: 'Prethodne transakcije' },
      { kind: 'p', text: 'Ovde se vrednost upoređuje sa multiplikatorima plaćenim u nedavnim akvizicijama sličnih preduzeća. Pošto su to stvarne transakcije, one često obuhvataju i premiju za kontrolu koju trgovinski multiplikatori ne prikazuju.' },
      { kind: 'h2', text: 'Diskontovani novčani tok (DCF)' },
      { kind: 'p', text: 'DCF projektuje buduće slobodne novčane tokove kompanije i diskontuje ih na sadašnju vrednost. To je najfundamentalnija metoda i najosetljivija na pretpostavke — male promene u rastu ili diskontnoj stopi značajno menjaju rezultat.' },
      { kind: 'h2', text: 'Šta zaista pomera vrednost' },
      { kind: 'ul', items: [
        'Kvalitet i predvidljivost dobiti',
        'Stopa rasta i tržišna pozicija',
        'Koncentracija kupaca i ponavljajući prihodi',
        'Snaga menadžmenta i zavisnost od vlasnika',
        'Konkurentna tenzija u samom procesu prodaje',
      ] },
      { kind: 'p', text: 'Poslednja stavka je najvažnija: u praksi, postignuta cena često zavisi manje od modela, a više od toga koliko je dobro vođen proces. Tu iskusan savetnik čini razliku.' },
    ],
  },
  {
    slug: 'prepare-company-for-sale',
    date: '2026-04-02',
    title: 'Kako pripremiti kompaniju za prodaju',
    description:
      'Priprema koja prethodi izlasku na tržište često određuje konačnu cenu. Šta treba urediti na vreme i kada početi.',
    keywords: [
      'priprema kompanije za prodaju',
      'prodaja firme',
      'planiranje izlaska',
      'spremnost za prodaju',
      'M&A priprema',
    ],
    body: [
      { kind: 'p', text: 'Većina vlasnika razmišlja o samom procesu prodaje — o kupcima, pregovorima i ceni. Međutim, posao koji najpouzdanije podiže vrednost odvija se ranije, šest do dvanaest meseci pre izlaska na tržište. Vrednost se stvara u pripremi, a u procesu se samo realizuje.' },
      { kind: 'h2', text: 'Uredite finansije' },
      { kind: 'p', text: 'Kupci plaćaju jasnoću. Uredni i dosledni upravljački izveštaji, verodostojan plan poslovanja i jasan pregled ponavljajućih naspram jednokratnih prihoda smanjuju percepciju rizika — a niži rizik znači višu cenu. Otklanjanje računovodstvenih nedoslednosti pre početka dubinske analize sprečava neprijatna iznenađenja.' },
      { kind: 'h2', text: 'Smanjite zavisnost od vlasnika' },
      { kind: 'p', text: 'Kompanija koja ne može da funkcioniše bez osnivača vredi manje od one koja može. Prenošenje ključnih odnosa, dokumentovanje procesa i izgradnja sposobnog menadžmenta čine kompaniju lakšom za prenos — a time i vrednijom.' },
      { kind: 'h2', text: 'Rešite očigledne rizike' },
      { kind: 'ul', items: [
        'Koncentracija kupaca — jedan klijent koji čini prevelik udeo u prihodu',
        'Nerešena pravna, poreska ili regulatorna pitanja',
        'Ugovori pred istekom ili zavisnost od ključnih dobavljača',
        'Nedostaci u dokumentaciji o vlasništvu ili intelektualnoj svojini',
      ] },
      { kind: 'h2', text: 'Izgradite priču o vrednosti' },
      { kind: 'p', text: 'Na kraju, kompaniji je potrebna jasna priča: zašto je vredna, odakle dolazi rast i zašto je pravi izbor za pravog kupca. Dobro pripremljena priča o vrednosti omogućava da konkurentan proces odradi svoje. Započinjanje ovih priprema na vreme — i godinama pre prodaje — najbolja je investicija u konačan ishod.' },
    ],
  },
  {
    slug: 'due-diligence-what-buyers-look-for',
    date: '2026-05-06',
    title: 'Dubinska analiza: šta kupci proveravaju',
    description:
      'Dubinska analiza može da odluči sudbinu transakcije. Razumevanje onoga što kupci ispituju — i priprema za to — štiti i vrednost i rokove.',
    keywords: [
      'dubinska analiza',
      'due diligence',
      'prodaja kompanije',
      'data room',
      'proces transakcije',
    ],
    body: [
      { kind: 'p', text: 'Kada je kupac izabran, počinje dubinska analiza (due diligence) — detaljno ispitivanje poslovanja pre nego što se obavezujuća ponuda potvrdi. To je često najintenzivnija faza transakcije i trenutak u kome mnoge transakcije zastanu ili izgube na vrednosti. Prodavci koji razumeju šta kupci proveravaju mogu se pripremiti i zaštititi i cenu i rokove.' },
      { kind: 'h2', text: 'Glavne oblasti provere' },
      { kind: 'ul', items: [
        'Finansijska — kvalitet dobiti, obrtni kapital i održivost marži',
        'Komercijalna — tržišna pozicija, odnosi sa kupcima i prodajni tok',
        'Pravna — ugovori, sporovi, vlasništvo i korporativna struktura',
        'Poreska — istorijske izloženosti i struktura transakcije',
        'Operativna — sistemi, ljudi i ključne zavisnosti',
      ] },
      { kind: 'h2', text: 'Pripremite data room unapred' },
      { kind: 'p', text: 'Dobro organizovan data room — bezbedno spremište informacija o kompaniji — signalizira dobro vođeno poslovanje i održava tempo procesa. Njegova priprema pre početka analize, umesto u žurbi pod rokom, sprečava kašnjenja koja kupcima daju prostor za ponovne pregovore.' },
      { kind: 'h2', text: 'Predvidite teška pitanja' },
      { kind: 'p', text: 'Svako poslovanje ima slabe tačke. Mnogo je bolje prepoznati ih, pripremiti jasno objašnjenje i upravljati načinom na koji se predstavljaju nego dopustiti da ih kupac sam otkrije. Iznenađenja tokom analize narušavaju poverenje i pozivaju na snižavanje cene.' },
      { kind: 'h2', text: 'Uloga savetnika' },
      { kind: 'p', text: 'Iskusan savetnik vodi proces dubinske analize kako bi se vlasnik i dalje bavio poslovanjem, koordinira uključene stručnjake i održava tempo kroz zahtevan proces. Kada se dobro vodi, dubinska analiza potvrđuje vrednost umesto da je umanjuje.' },
    ],
  },
  {
    slug: 'sell-side-vs-buy-side',
    date: '2026-05-20',
    title: 'Prodaja i kupovina u M&A: u čemu je razlika?',
    description:
      'Savetovanje na strani prodavca i na strani kupca nalaze se na suprotnim krajevima transakcije. Razumevanje razlike pojašnjava šta savetnik zaista radi za vas.',
    keywords: ['sell-side', 'buy-side', 'M&A savetovanje', 'spajanja i akvizicije', 'proces transakcije'],
    body: [
      { kind: 'p', text: 'U svakoj akviziciji postoje dve strane — prodavac i kupac — a savetnik po pravilu zastupa jednu od njih. Razlika između rada na strani prodavca (sell-side) i na strani kupca (buy-side) oblikuje ceo mandat: ciljeve, proces i način na koji se meri uspeh.' },
      { kind: 'h2', text: 'Savetovanje na strani prodavca' },
      { kind: 'p', text: 'Na strani prodavca, savetnik zastupa kompaniju ili njene vlasnike. Cilj je maksimizovati vrednost i izvesnost realizacije. To podrazumeva pripremu poslovanja, uobličavanje priče o vrednosti, identifikaciju i kontaktiranje pravih kupaca i vođenje konkurentnog procesa koji stvara tenziju među ponuđačima.' },
      { kind: 'h2', text: 'Savetovanje na strani kupca' },
      { kind: 'p', text: 'Na strani kupca, savetnik zastupa kupca koji želi da raste kroz akvizicije. Posao je drugačiji: definisanje kriterijuma za akviziciju, mapiranje i pristup ciljnim kompanijama — često onima koje nisu na prodaju — procena vrednosti i strukturiranje ponude koja obezbeđuje transakciju bez preplaćivanja.' },
      { kind: 'h2', text: 'Zašto je to važno za vas' },
      { kind: 'p', text: 'To koju stranu savetnik zastupa govori vam čije interese štiti. Dobar savetnik je transparentan u pogledu svoje uloge i nikada nije na obe strane iste transakcije. Bilo da prodajete ili kupujete, izbor pravog zastupnika jedna je od najvažnijih odluka u procesu.' },
    ],
  },
  {
    slug: 'how-long-to-sell-a-company',
    date: '2026-06-10',
    title: 'Koliko traje prodaja kompanije?',
    description:
      'Od pripreme do realizacije, prodaja kompanije obično traje od šest do dvanaest meseci — ponekad i duže. Evo šta određuje rokove.',
    keywords: ['koliko traje prodaja firme', 'M&A rokovi', 'proces prodaje kompanije', 'prodaja preduzeća'],
    body: [
      { kind: 'p', text: 'Jedno od prvih pitanja koje vlasnici postave jeste koliko će prodaja trajati. Iskren odgovor je — zavisi, ali većina dobro vođenih procesa traje od šest do dvanaest meseci, od odluke o prodaji do realizacije, pri čemu priprema ponekad počinje mnogo ranije.' },
      { kind: 'h2', text: 'Priprema: 1–3 meseca (ili više)' },
      { kind: 'p', text: 'Pripremanje poslovanja — finansije, pravno sređivanje, informacioni memorandum i lista kupaca — traje i upravo se tu čuva vrednost. Žurba u ovoj fazi gotovo uvek košta više nego što uštedi.' },
      { kind: 'h2', text: 'Marketing i ponude: 2–4 meseca' },
      { kind: 'p', text: 'Kontaktiranje kupaca, sastanci sa menadžmentom i prikupljanje indikativnih ponuda sužavaju krug na uži izbor ozbiljnih i motivisanih ponuđača.' },
      { kind: 'h2', text: 'Dubinska analiza i zatvaranje: 2–4 meseca' },
      { kind: 'p', text: 'Izabrani kupac sprovodi dubinsku analizu, a strane pregovaraju ugovor o prodaji do potpisivanja i realizacije. Složene strukture, regulatorna odobrenja ili uslovi finansiranja mogu produžiti ovu fazu.' },
      { kind: 'h2', text: 'Šta ubrzava proces' },
      { kind: 'p', text: 'Najveći ubrzivač je priprema. Dobro pripremljena kompanija, sa urednim data room-om i jasnom pričom o vrednosti, kreće se brže, bolje čuva vrednost i daje kupcima manje razloga za oklevanje.' },
    ],
  },
  {
    slug: 'earn-outs-explained',
    date: '2026-06-24',
    title: 'Earn-out klauzule: kako premostiti razliku u proceni',
    description:
      'Kada se kupac i prodavac ne slažu oko vrednosti, earn-out može da premosti razliku — vezujući deo cene za buduće rezultate. Evo kako funkcioniše.',
    keywords: ['earn-out', 'odloženo plaćanje', 'razlika u proceni', 'M&A strukturiranje', 'ugovor o prodaji'],
    body: [
      { kind: 'p', text: 'Kupci i prodavci se često ne slažu oko vrednosti: prodavac je siguran u budućnost, kupac je oprezan. Earn-out je čest način da se ta razlika premosti — deo kupoprodajne cene se odlaže i plaća samo ako poslovanje ostvari dogovorene ciljeve nakon realizacije.' },
      { kind: 'h2', text: 'Kako earn-out funkcioniše' },
      { kind: 'p', text: 'Deo naknade se plaća odmah; ostatak postaje plativ tokom određenog perioda — obično jedne do tri godine — ako poslovanje ostvari definisane pokazatelje, najčešće prihod ili EBITDA. To omogućava kupcu da plati za rezultat, a prodavcu da učestvuje u vrednosti u koju veruje.' },
      { kind: 'h2', text: 'Gde earn-out može da zapne' },
      { kind: 'ul', items: [
        'Nejasno ili loše definisani ciljevi koji vode sporovima',
        'Prodavac gubi kontrolu nad polugama koje pokreću pokazatelj',
        'Računovodstvene definicije koje pomeraju kriterijume',
        'Neusklađeni podsticaji tokom earn-out perioda',
      ] },
      { kind: 'h2', text: 'Kako ga dobro postaviti' },
      { kind: 'p', text: 'Dobro sastavljen earn-out precizan je u pogledu pokazatelja, načina merenja i toga kako će se poslovanje voditi tokom perioda. Iskusno savetovanje u fazi pregovora pretvara earn-out iz izvora budućih sporova u pravednu premoštavajuću strukturu između dva viđenja vrednosti.' },
    ],
  },
  {
    slug: 'growth-capital-equity-vs-debt',
    date: '2026-07-08',
    title: 'Finansiranje rasta: vlasnički ili dužnički kapital?',
    description:
      'Kompanije u rastu mogu da prikupe vlasnički, dužnički ili kombinovani kapital. Svaki ima svoju cenu i posledicu. Evo kako razmišljati o izboru.',
    keywords: ['kapital za rast', 'vlasnički vs dužnički', 'prikupljanje kapitala', 'finansiranje kompanije', 'struktura kapitala'],
    body: [
      { kind: 'p', text: 'Kada je kompaniji potreban kapital za rast, akviziciju ili ekspanziju, u osnovi ima dve opcije: prikupiti vlasnički kapital uvođenjem investitora ili prikupiti dužnički kapital zaduživanjem. Većina kompanija koristi kombinaciju. Prava ravnoteža zavisi od poslovanja, njegove faze i sklonosti riziku.' },
      { kind: 'h2', text: 'Vlasnički kapital' },
      { kind: 'p', text: 'Prikupljanje vlasničkog kapitala znači prodaju udela u kompaniji. Nema otplata i kapital je „strpljiv", što odgovara ranijim fazama ili rastu sa višim rizikom. Cena je razvodnjavanje — vlasnik ustupa deo vlasništva i buduće vrednosti, a često i deo uticaja na vođenje poslovanja.' },
      { kind: 'h2', text: 'Dužnički kapital' },
      { kind: 'p', text: 'Dug se pozajmljuje i otplaćuje sa kamatom. Ne razvodnjava vlasništvo, što je njegova glavna prednost, ali se mora servisirati bez obzira na rezultate i povećava finansijski rizik. Dug odgovara poslovanjima sa stabilnim i predvidivim novčanim tokovima.' },
      { kind: 'h2', text: 'Pronalaženje prave kombinacije' },
      { kind: 'p', text: 'Najbolja struktura kapitala balansira cenu, kontrolu i rizik u odnosu na planove kompanije. Savetnik pomaže da se opcije modeliraju, pristupi pravim investitorima i kreditorima i ispregovaraju uslovi — kako bi rast bio finansiran bez ugrožavanja poslovanja.' },
    ],
  },
  {
    slug: 'how-to-choose-an-ma-advisor',
    date: '2026-07-22',
    title: 'Kako izabrati M&A savetnika',
    description:
      'Pravi savetnik može doneti daleko više vrednosti od svoje naknade. Evo na šta obratiti pažnju pri izboru onoga kome poveravate transakciju.',
    keywords: ['izbor M&A savetnika', 'izbor investicione banke', 'savetnik za korporativne finansije', 'prodaja firme'],
    body: [
      { kind: 'p', text: 'Transakcija je jedan od najznačajnijih događaja u životu kompanije, a izbor savetnika oblikuje ishod. Pravi višestruko opravda svoju naknadu; pogrešan može da vas košta vrednosti i vremena. Evo šta je bitno.' },
      { kind: 'h2', text: 'Relevantno iskustvo' },
      { kind: 'p', text: 'Tražite tim sa stvarnim iskustvom u transakcijama poput vaše — vaše veličine, vašeg sektora, vašeg tržišta. Iskustvo je ono što savetniku omogućava da predvidi gde transakcije zapinju i da vas provede oko zamki.' },
      { kind: 'h2', text: 'Uključenost iskusnih ljudi' },
      { kind: 'p', text: 'Pitajte ko će zaista voditi vašu transakciju iz dana u dan. U nekim firmama iskusni ljudi osvoje mandat, a mlađi ga sprovode. Najbolji rezultati dolaze iz posvećenosti iskusnih savetnika kroz ceo proces.' },
      { kind: 'h2', text: 'Nezavisnost i usklađenost interesa' },
      { kind: 'p', text: 'Nezavisan savetnik, čija naknada najvećim delom zavisi od uspešnog ishoda, usklađen je sa vama. Razumejte kako se savetnik naplaćuje i da li bi neki drugi interesi mogli da utiču na njegov savet.' },
      { kind: 'h2', text: 'Poverenje' },
      { kind: 'p', text: 'Na kraju, sa ovim timom ćete blisko sarađivati u poverljivom procesu sa visokim ulozima. Izaberite ljude kojima verujete, koji komuniciraju jasno i koji se prema vašem poslovanju odnose jednako pažljivo kao i vi.' },
    ],
  },
];

const byLocale: Record<Locale, Article[]> = { en, sr };

export function getArticles(locale: Locale): Article[] {
  return [...byLocale[locale]].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(locale: Locale, slug: string): Article | undefined {
  return byLocale[locale].find((a) => a.slug === slug);
}

/** All slugs (shared across locales) for generateStaticParams. */
export function allArticleSlugs(): string[] {
  return en.map((a) => a.slug);
}
