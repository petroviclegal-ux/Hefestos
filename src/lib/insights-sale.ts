import type { Article } from './insights';

/**
 * Sale-cluster articles that carry statutory detail: the share transfer
 * procedure and the tax on a sale.
 *
 * ACCURACY: every rule stated here was checked against the consolidated text
 * on paragraf.rs on 25.11.2026 and is cited by article: Zakon o privrednim
 * društvima (ZPD) čl. 143, 160, 161, 162, 165, 167, 175; Zakon o porezu na
 * dohodak građana (ZPDG) čl. 72, 72a, 74, 77, 95, 109; Zakon o porezu na
 * dobit pravnih lica čl. 27, 39. Re-check these citations whenever either law
 * is amended. Worked examples use invented figures and say so.
 */

export const saleEn: Article[] = [
  {
    slug: 'selling-a-doo-share-transfer-procedure',
    date: '2026-11-25',
    title: 'Selling a Serbian d.o.o.: The Share Transfer Procedure',
    description:
      'How a Serbian d.o.o. is sold: the founding act, the 30-day pre-emption right, a contract with certified signatures, registration with the APR and tax.',
    keywords: [
      'sell a company in Serbia',
      'share transfer Serbia',
      'd.o.o. share transfer',
      'Serbian companies act',
      'pre-emption right',
      'share purchase agreement Serbia',
    ],
    cover: { src: '/images/insights/sale-agreement.jpg', alt: '' },
    body: [
      { kind: 'p', text: 'Legally, selling a Serbian limited liability company (d.o.o.) means transferring a share in it. The company stays the same legal person, with the same registration number, bank accounts, contracts, employees and liabilities; what changes is its member. The procedure is set by the Companies Act (Zakon o privrednim društvima, ZPD) and is shorter than owners expect. What takes longer is everything before it: negotiating price and terms, and the due diligence a buyer runs before signing.' },
      { kind: 'p', text: 'This article follows the legal sequence. How a buyer and a price are found is covered on the page on [selling a company in Serbia](prodaja-firme).' },
      { kind: 'h2', text: '1. The founding act and the state of the share' },
      { kind: 'p', text: 'The first document to read is the founding act, or the memorandum of association where the company has several members. The Act starts from the position that a share is freely transferable (Art. 160), but the founding act can change that in two ways that bear directly on a sale. It can extend or exclude the other members’ pre-emption right, and it can require the company’s prior consent to a transfer to a non-member (Art. 167). In the second case the general meeting decides by a simple majority of all members unless the founding act sets another majority, and if the company does not refuse consent within 30 days of the request, the seller may transfer on the terms stated in it.' },
      { kind: 'p', text: 'Alongside the founding act, check the register: that the seller is recorded as holding the whole share being sold, whether the capital contribution has been paid in full, whether the share is pledged, and whether it forms part of marital property. An unpaid contribution concerns the seller too: under Art. 175 the transferor remains jointly liable with the buyer for the unpaid contribution and any additional payments attached to the share, as they stood on the transfer date.' },
      { kind: 'h2', text: '2. Offering the share to the other members' },
      { kind: 'p', text: 'Where the company has more than one member and the founding act does not exclude pre-emption, the seller must offer the share to all other members before selling to a third party (Art. 162). A member who wants to buy notifies the seller in writing within 30 days of receiving the offer, or within a longer period set by the founding act, which cannot exceed 90 days. If several members accept and do not agree otherwise, the share is split in proportion to their holdings.' },
      { kind: 'p', text: 'If nobody accepts, the seller has 90 days from the end of the acceptance period to sign with a third party, on terms no more favourable to that buyer than those offered to the members, unless the founding act provides otherwise (Art. 165). In practice the offer to the members is therefore made once the outside buyer and its price are known. Offer the members a lower price than the buyer will pay, and they can buy cheaper; offer a higher one, and the sale to the buyer at its actual price is not permitted.' },
      { kind: 'h2', text: '3. The share transfer agreement' },
      { kind: 'p', text: 'The agreement must be in writing with the signatures of seller and buyer certified (Art. 175), usually by a public notary. In a sale to an outside buyer it also carries the provisions that protect both sides: the seller’s warranties on the state of the company, a price adjustment mechanism, a holdback of part of the price, conditions to be met before completion and limits on the seller’s liability. Their economics are explained in the article on the [share purchase agreement: warranties, escrow and price adjustments](insights/sale-agreement-warranties-escrow-price-adjustments).' },
      { kind: 'p', text: 'Where the whole price is paid on signing, the mechanics are simple. More often signing and payment are separated, because before completion the parties need clearance from the Commission for Protection of Competition, the consent of a lending bank whose loan agreement requires it, or another authority’s approval. The agreement then lists the conditions for completion and the date by which they must be met.' },
      { kind: 'h2', text: '4. Registration and payment' },
      { kind: 'p', text: 'The buyer becomes a member on the day ownership of the share is registered (Art. 143). Until registration, legal acts taken towards the seller in respect of that share are treated as taken towards the buyer, unless that is incompatible with the nature of the act (Art. 175). The registration application is filed with the Business Registers Agency (APR) together with the certified agreement and the other documents the APR requires for that change.' },
      { kind: 'p', text: 'Payment and registration are therefore tied together in the agreement. The usual solutions are payment through a bank escrow account released to the seller on registration, or payment on signing with the registration application filed the same day, together with the resignation of the outgoing director where the legal representative also changes.' },
      { kind: 'h2', text: '5. Tax' },
      { kind: 'p', text: 'A seller who is an individual pays capital gains tax at 15% on the difference between the sale price and the purchase price indexed for consumer prices, and files a return within 30 days of first receiving proceeds from the sale. No capital gain arises on a share held continuously for at least ten years. A worked example is in the article on [tax on selling a company in Serbia](insights/tax-on-selling-a-company).' },
      {
        kind: 'table',
        caption: 'Steps in selling a share in a Serbian d.o.o.',
        head: ['Step', 'Who', 'Deadline or condition', 'Basis'],
        rows: [
          ['Check founding act, register entry, paid-in contribution, pledges', 'Seller and counsel', 'Before first contact with buyers', 'ZPD Arts. 160, 167, 175'],
          ['Request for company consent, if the founding act requires it', 'Seller', 'Consent deemed given after 30 days of silence', 'ZPD Art. 167'],
          ['Offer to the other members', 'Seller', '30 days to accept, up to 90 under the founding act', 'ZPD Arts. 161, 162'],
          ['Agreement with a third party if members do not buy', 'Seller and buyer', 'Within 90 days, on terms no better than the offer', 'ZPD Art. 165'],
          ['Signing and certification', 'Seller and buyer', 'At completion', 'ZPD Art. 175'],
          ['Registration of the new member', 'Company representative', 'Buyer becomes a member on registration', 'ZPD Art. 143'],
          ['Capital gains tax return', 'Seller, if an individual', '30 days from first receipt of proceeds', 'ZPDG Art. 95'],
        ],
        note: 'ZPD: Companies Act. ZPDG: Personal Income Tax Act. A summary, not a substitute for reading the founding act of the company in question.',
      },
    ],
    faq: [
      {
        question: 'Does the sale of a Serbian d.o.o. need a notary?',
        answer: 'The share transfer agreement must be in writing with the signatures of seller and buyer certified (Art. 175 of the Companies Act). Certification is usually done by a public notary.',
      },
      {
        question: 'When does the buyer become the owner?',
        answer: 'On the day ownership of the share is registered with the Business Registers Agency (Art. 143). Signing the agreement on its own does not make the buyer a member.',
      },
      {
        question: 'What if the other members do not respond to the offer?',
        answer: 'If nobody accepts within the acceptance period, the seller may sell to a third party within the next 90 days, on terms no more favourable to the buyer than those offered to the members (Art. 165).',
      },
    ],
  },
  {
    slug: 'tax-on-selling-a-company',
    date: '2026-11-25',
    title: 'Tax on Selling a Company in Serbia: Capital Gains on Shares',
    description:
      'Capital gains tax on selling a share in a Serbian company: 15%, an indexed purchase price, the ten-year exemption and a 30-day return. With an example.',
    keywords: [
      'capital gains tax Serbia',
      'tax on selling a company in Serbia',
      'share sale tax Serbia',
      'ten-year exemption capital gains Serbia',
      'Serbian personal income tax',
    ],
    cover: { src: '/images/insights/cost-of-sale.jpg', alt: '' },
    body: [
      { kind: 'p', text: 'When an owner sells a share in a d.o.o. or shares in an a.d., the tax turns on three things: whether the seller is an individual or a company, how long the share has been held, and whether the shares or the company’s assets are being sold. The rules sit in the Personal Income Tax Act (Zakon o porezu na dohodak građana, ZPDG) and the Corporate Income Tax Act.' },
      { kind: 'h2', text: 'Individual seller: 15% on the capital gain' },
      { kind: 'p', text: 'The difference between the sale price of a share and its purchase price is a capital gain (Art. 72 ZPDG) and is taxed at 15% (Art. 77). The purchase price is the price at which the seller acquired the share (Art. 74); for a founder that is normally the capital contributed, for a share bought later the price in the purchase agreement. The purchase price is increased by the annual consumer price index from acquisition to sale, using the official statistics (Art. 74).' },
      { kind: 'p', text: 'Indexation matters when the share was bought for a substantial amount a few years ago. For a founder with a small initial capital it changes little, because almost the whole sale price is gain.' },
      { kind: 'h2', text: 'Shares held for ten years or more' },
      { kind: 'p', text: 'No capital gain arises when the seller transfers a share held continuously for at least ten years before the sale (Art. 72a, item 5). If the percentage held changed during that period, the exemption applies only to the portion held continuously for ten years, in the percentage originally acquired at least ten years before the sale. The exemption does not apply where the company itself acquires the share as its own.' },
      { kind: 'p', text: 'For an owner who founded the company ten or more years ago and has not changed the holding since, a share sale is therefore outside capital gains tax. The period runs to the day of the transfer, so for a company nine years old it is worth checking whether completion can be timed to fall after it ends.' },
      { kind: 'p', text: 'The same article also exempts transfers between spouses and between relatives in the direct line, and transfers of shares acquired by inheritance in the first order of succession (Art. 72a, items 1 and 2).' },
      { kind: 'h2', text: 'The return: within 30 days' },
      { kind: 'p', text: 'An individual seller files the return personally, no later than 30 days from the day the proceeds of the sale were received or first began to be received (Art. 95). The return states the sale price, the purchase price and any right to exemption, and the tax authority assesses the tax on that basis (Art. 109). Where the price is paid in instalments or includes an earn-out, the period starts with the first payment.' },
      { kind: 'h2', text: 'Corporate seller' },
      { kind: 'p', text: 'When a company, holding or other legal entity sells the share, the capital gain is part of its corporate income tax base (Art. 27 of the Corporate Income Tax Act), taxed at 15% (Art. 39). The proceeds then stay in the selling company and reach its owner only as a distribution of profit, which is taxed separately.' },
      { kind: 'h2', text: 'Share sale or asset sale' },
      { kind: 'p', text: 'In an asset sale the seller is the company: it sells a plant, equipment, property or a business unit, and the gain goes into its corporate income tax. Transfers of some kinds of assets attract other taxes as well, so the structure is chosen after tax advice on the specific case. Buyers sometimes prefer to buy assets because they then take on none of the company’s historic liabilities. For an individual seller a share sale is usually simpler and lighter on tax, particularly after ten years of ownership.' },
      {
        kind: 'table',
        caption: 'Worked example (invented figures)',
        head: ['Item', 'Share bought 6 years ago', 'Founder’s share, held 12 years'],
        rows: [
          ['Sale price', '€2,000,000', '€2,000,000'],
          ['Purchase price', '€800,000', '€5,000'],
          ['Purchase price after indexation (assumed cumulative index 1.30)', '€1,040,000', 'not relevant'],
          ['Capital gain', '€960,000', 'none (Art. 72a)'],
          ['Tax at 15%', '€144,000', '€0'],
        ],
        note: 'The index in the example is an assumption; the actual index is taken from official statistics for the period from acquisition to sale.',
      },
      { kind: 'p', text: 'How the rest of a sale runs, from the first buyer contact to completion, is covered on the page on [selling a company in Serbia](prodaja-firme).' },
    ],
    faq: [
      {
        question: 'What is the tax on selling a share in a Serbian company?',
        answer: 'For an individual seller, 15% of the capital gain, which is the sale price less the purchase price indexed for consumer prices (Arts. 72, 74 and 77 of the Personal Income Tax Act).',
      },
      {
        question: 'Is there tax if I have owned the company for more than ten years?',
        answer: 'No capital gain arises on a share held continuously for at least ten years (Art. 72a). If the holding changed in that time, only the part held for ten years qualifies, and the exemption does not apply where the company buys back its own share.',
      },
      {
        question: 'When is the tax return due?',
        answer: 'Within 30 days of the day the seller received, or began to receive, the proceeds of the sale (Art. 95).',
      },
    ],
  },
];

export const saleSr: Article[] = [
  {
    slug: 'selling-a-doo-share-transfer-procedure',
    date: '2026-11-25',
    title: 'Prodaja DOO firme: procedura prenosa udela korak po korak',
    description:
      'Kako se prodaje doo firma: osnivački akt, pravo preče kupovine od 30 dana, ugovor sa overenim potpisima, registracija u APR i porez. Sa tabelom koraka.',
    keywords: [
      'prodaja doo firme',
      'prodaja firme procedura',
      'prodaja udela u doo',
      'prenos udela',
      'kako prodati firmu doo',
      'ugovor o prenosu udela',
    ],
    cover: { src: '/images/insights/sale-agreement.jpg', alt: '' },
    body: [
      { kind: 'p', text: 'U pravnom smislu prodaja doo firme je prenos udela. Firma ostaje isto pravno lice, sa istim matičnim brojem, računima, ugovorima, zaposlenima i obavezama, a menja se njen član. Postupak uređuje Zakon o privrednim društvima i kraći je nego što vlasnici očekuju. Duže traje ono što mu prethodi: pregovori o ceni i uslovima i dubinska analiza koju kupac sprovodi pre potpisa.' },
      { kind: 'p', text: 'Ovaj tekst prati pravni tok. Kako se dolazi do kupca i do cene, opisuje stranica [prodaja firme u Srbiji](prodaja-firme).' },
      { kind: 'h2', text: '1. Osnivački akt i stanje udela' },
      { kind: 'p', text: 'Prvi dokument koji se čita je osnivački akt, odnosno ugovor o osnivanju kada društvo ima više članova. Zakon polazi od toga da je prenos udela slobodan (član 160), ali osnivački akt to može promeniti na dva načina koja direktno utiču na prodaju. Može produžiti ili isključiti pravo preče kupovine ostalih članova, i može propisati da je za prenos udela licu koje nije član potrebna prethodna saglasnost društva (član 167). U drugom slučaju skupština odlučuje običnom većinom glasova svih članova, osim ako je osnivačkim aktom određena druga većina. Ako društvo u roku od 30 dana od prijema zahteva ne uskrati saglasnost, prodavac može preneti udeo pod uslovima iz zahteva.' },
      { kind: 'p', text: 'Uz osnivački akt proverava se registar: da li je prodavac upisan kao vlasnik celog udela koji prodaje, da li je ulog uplaćen u celosti, da li na udelu postoji zaloga i da li udeo ulazi u zajedničku imovinu supružnika. Neuplaćen ulog se tiče i prodavca. Po članu 175 on ostaje solidarno odgovoran sa kupcem za obavezu po osnovu neuplaćenog uloga i za dodatne uplate u pogledu tog udela, prema stanju na dan prenosa.' },
      { kind: 'h2', text: '2. Ponuda ostalim članovima' },
      { kind: 'p', text: 'Kada društvo ima više članova a osnivački akt ne isključuje pravo preče kupovine, prodavac pre prodaje trećem licu mora udeo ponuditi svim ostalim članovima (član 162). Član koji želi da kupi obaveštava prodavca pisano, u roku od 30 dana od prijema ponude, ili u dužem roku koji predviđa osnivački akt, a koji ne može biti duži od 90 dana. Ako ponudu prihvati više članova i ne dogovore se drugačije, udeo se deli srazmerno njihovom učešću.' },
      { kind: 'p', text: 'Ako niko ne prihvati, prodavac ima 90 dana od isteka roka za prihvat da zaključi ugovor sa trećim licem, pod uslovima koji za kupca ne mogu biti povoljniji od onih ponuđenih članovima, osim ako osnivački akt određuje drugačije (član 165). U praksi se zato ponuda članovima šalje tek kada su spoljni kupac i njegova cena poznati. Ako je cena u ponudi članovima niža od one koju kupac nudi, članovi mogu da kupe jeftinije. Ako je viša, prodaja kupcu po stvarnoj ceni nije dozvoljena.' },
      { kind: 'h2', text: '3. Ugovor o prenosu udela' },
      { kind: 'p', text: 'Ugovor se zaključuje u pisanoj formi sa overenim potpisima prodavca i kupca (član 175), najčešće kod javnog beležnika. Kod prodaje spoljnom kupcu ugovor nosi i odredbe koje štite obe strane: garancije prodavca o stanju firme, mehanizam korekcije cene, zadržavanje dela cene, uslove koji moraju biti ispunjeni pre zatvaranja i ograničenje odgovornosti prodavca. Njihovu ekonomiju objašnjava tekst [ugovor o prodaji udela u doo: garancije i cena](insights/sale-agreement-warranties-escrow-price-adjustments).' },
      { kind: 'p', text: 'Kada se cela cena isplaćuje na dan potpisa, posao je jednostavan. Češće se potpis i plaćanje razdvajaju, jer pre zatvaranja treba pribaviti odobrenje Komisije za zaštitu konkurencije, saglasnost banke kada je ugovor o kreditu traži, ili odobrenje drugog organa. Ugovor tada navodi uslove za zatvaranje i rok do kog moraju biti ispunjeni.' },
      { kind: 'h2', text: '4. Registracija u APR i plaćanje' },
      { kind: 'p', text: 'Kupac postaje član društva danom registracije vlasništva nad udelom (član 143). Potpis ugovora sam po sebi ga ne čini članom. Do registracije se pravne radnje preduzete prema prodavcu u pogledu tog udela smatraju preduzetim prema kupcu, osim ako to nije spojivo sa prirodom radnje (član 175). Registraciona prijava se podnosi Agenciji za privredne registre uz overen ugovor i ostalu dokumentaciju koju APR traži za tu promenu.' },
      { kind: 'p', text: 'Zato se plaćanje i registracija u ugovoru vezuju jedno za drugo. Uobičajena rešenja su isplata preko escrow računa kod banke, koji se prodavcu oslobađa po registraciji, ili isplata na dan potpisa uz istovremeno podnošenje registracione prijave i ostavku direktora koji odlazi, kada se menja i zastupnik.' },
      { kind: 'h2', text: '5. Porez' },
      { kind: 'p', text: 'Prodavac fizičko lice plaća porez na kapitalni dobitak po stopi od 15%, na razliku između prodajne cene i nabavne cene uvećane za indeks potrošačkih cena, i podnosi poresku prijavu u roku od 30 dana od dana kada je ostvario ili počeo da ostvaruje prihod od prodaje. Za udeo koji je imao u neprekidnom vlasništvu najmanje deset godina kapitalni dobitak ne nastaje. Obračun sa primerom je u tekstu [porez pri prodaji firme](insights/tax-on-selling-a-company).' },
      {
        kind: 'table',
        caption: 'Koraci pri prodaji udela u doo',
        head: ['Korak', 'Ko', 'Rok ili uslov', 'Osnov'],
        rows: [
          ['Provera osnivačkog akta, upisa u APR, uplaćenosti uloga i zaloge', 'Prodavac i advokat', 'Pre prvog kontakta sa kupcima', 'ZPD čl. 160, 167, 175'],
          ['Zahtev za saglasnost društva, ako je osnivački akt propisuje', 'Prodavac', 'Saglasnost se smatra datom posle 30 dana ćutanja', 'ZPD čl. 167'],
          ['Ponuda ostalim članovima', 'Prodavac', '30 dana za prihvat, do 90 po osnivačkom aktu', 'ZPD čl. 161 i 162'],
          ['Ugovor sa trećim licem ako članovi ne kupe', 'Prodavac i kupac', 'U roku od 90 dana, pod uslovima ne povoljnijim od ponude', 'ZPD čl. 165'],
          ['Potpis i overa ugovora', 'Prodavac i kupac', 'Na zatvaranju', 'ZPD čl. 175'],
          ['Registracija novog člana', 'Zastupnik društva', 'Kupac postaje član danom registracije', 'ZPD čl. 143'],
          ['Poreska prijava za kapitalni dobitak', 'Prodavac fizičko lice', '30 dana od ostvarivanja prihoda', 'ZPDG čl. 95'],
        ],
        note: 'ZPD: Zakon o privrednim društvima. ZPDG: Zakon o porezu na dohodak građana. Pregled ne zamenjuje čitanje osnivačkog akta konkretnog društva.',
      },
    ],
    faq: [
      {
        question: 'Da li prodaja doo firme mora da se overi kod notara?',
        answer: 'Ugovor o prenosu udela mora biti u pisanoj formi sa overenim potpisima prodavca i kupca (član 175 Zakona o privrednim društvima). Overu najčešće obavlja javni beležnik.',
      },
      {
        question: 'Kada kupac postaje vlasnik firme?',
        answer: 'Danom registracije vlasništva nad udelom u Agenciji za privredne registre (član 143). Potpis ugovora sam po sebi ne čini kupca članom društva.',
      },
      {
        question: 'Šta ako ostali članovi ne odgovore na ponudu?',
        answer: 'Ako u roku za prihvat niko ne prihvati ponudu, prodavac u narednih 90 dana može prodati udeo trećem licu, pod uslovima koji za kupca nisu povoljniji od ponuđenih članovima (član 165).',
      },
      {
        question: 'Koliko traje pravni deo prodaje udela?',
        answer: 'Zavisi pre svega od roka za pravo preče kupovine, koji je 30 dana ako osnivački akt ne predviđa duži. Kod društva sa jednim članom tog roka nema. Prodaja u celini, sa traženjem kupca i dubinskom analizom, traje šest do dvanaest meseci.',
      },
    ],
  },
  {
    slug: 'tax-on-selling-a-company',
    date: '2026-11-25',
    title: 'Porez pri prodaji firme: kapitalni dobitak na prodaju udela',
    description:
      'Koliki je porez na prodaju udela u doo: 15% kapitalnog dobitka, indeksacija nabavne cene, oslobođenje posle 10 godina, prijava u roku od 30 dana. Sa primerom.',
    keywords: [
      'prodaja firme porez',
      'porez na prodaju udela',
      'prodaja udela porez',
      'porez na kapitalni dobitak',
      'kapitalni dobitak udeo',
      'porez pri prodaji firme',
    ],
    cover: { src: '/images/insights/cost-of-sale.jpg', alt: '' },
    body: [
      { kind: 'p', text: 'Kada vlasnik prodaje udeo u doo ili akcije, porez zavisi od tri stvari: da li prodaje kao fizičko ili pravno lice, koliko dugo je udeo imao, i da li se prodaje udeo ili imovina firme. Pravila su u Zakonu o porezu na dohodak građana i Zakonu o porezu na dobit pravnih lica.' },
      { kind: 'h2', text: 'Prodavac fizičko lice: 15% na kapitalni dobitak' },
      { kind: 'p', text: 'Razlika između prodajne cene udela i njegove nabavne cene je kapitalni dobitak (član 72 Zakona o porezu na dohodak građana) i oporezuje se po stopi od 15% (član 77). Nabavna cena je cena po kojoj je prodavac udeo stekao (član 74); kod osnivača je to po pravilu uloženi kapital, kod kupljenog udela cena iz ugovora o kupovini. Nabavna cena se uvećava godišnjim indeksom potrošačkih cena od dana sticanja do dana prodaje, prema zvaničnim statističkim podacima (član 74).' },
      { kind: 'p', text: 'Indeksacija je bitna kada je udeo kupljen za značajan iznos pre nekoliko godina. Kod osnivača sa malim početnim kapitalom ona malo menja, jer je gotovo cela prodajna cena dobitak.' },
      { kind: 'h2', text: 'Udeo u vlasništvu deset godina i duže' },
      { kind: 'p', text: 'Kapitalni dobitak ne nastaje kada prodavac prenese udeo koji je pre prodaje imao u svom vlasništvu neprekidno najmanje deset godina (član 72a, tačka 5). Ako se procenat učešća tokom tog perioda menjao, izuzimanje važi samo za deo udela koji je neprekidno držan deset godina, u procentu koji je inicijalno stečen najmanje deset godina pre prodaje. Izuzimanje se ne primenjuje kada udeo stiče samo društvo, kao sopstveni udeo.' },
      { kind: 'p', text: 'Za vlasnika koji je firmu osnovao pre deset i više godina i od tada nije menjao učešće, prodaja udela je time izvan poreza na kapitalni dobitak. Rok se računa do dana prenosa, pa kod firme stare devet godina vredi proveriti da li zatvaranje transakcije može da se vremenski uskladi sa istekom roka.' },
      { kind: 'p', text: 'Isti član izuzima i prenos između bračnih drugova i krvnih srodnika u pravoj liniji, kao i prenos udela stečenog nasleđem u prvom naslednom redu (član 72a, tačke 1 i 2).' },
      { kind: 'h2', text: 'Poreska prijava u roku od 30 dana' },
      { kind: 'p', text: 'Prodavac fizičko lice sam podnosi poresku prijavu, najkasnije u roku od 30 dana od dana kada je ostvario ili započeo ostvarivanje prihoda od prodaje udela (član 95). U prijavi iskazuje prodajnu cenu, nabavnu cenu i pravo na poresko oslobođenje, a porez utvrđuje poreski organ na osnovu tih podataka (član 109). Kada se cena plaća u ratama ili uz earn-out, rok počinje da teče od prve uplate.' },
      { kind: 'h2', text: 'Prodavac pravno lice' },
      { kind: 'p', text: 'Kada udeo prodaje firma, holding ili drugo pravno lice, kapitalni dobitak ulazi u osnovicu poreza na dobit (član 27 Zakona o porezu na dobit pravnih lica), po stopi od 15% (član 39). Novac tada ostaje u firmi prodavcu, a do njenog vlasnika stiže tek isplatom dobiti, koja se posebno oporezuje.' },
      { kind: 'h2', text: 'Prodaja udela ili prodaja imovine' },
      { kind: 'p', text: 'Kod prodaje imovine prodavac je firma: ona prodaje pogon, opremu, nekretnine ili poslovnu celinu, a dobitak ulazi u njen porez na dobit. Prenos pojedinih vrsta imovine nosi i druge poreze, pa se struktura bira posle poreske analize konkretnog slučaja. Kupci ponekad više vole kupovinu imovine jer tada ne preuzimaju istorijske obaveze firme. Za prodavca fizičko lice prodaja udela je po pravilu jednostavnija i poreski povoljnija, naročito posle deset godina vlasništva.' },
      {
        kind: 'table',
        caption: 'Primer obračuna (izmišljeni brojevi)',
        head: ['Stavka', 'Udeo kupljen pre 6 godina', 'Udeo osnivača, 12 godina'],
        rows: [
          ['Prodajna cena', '2.000.000 €', '2.000.000 €'],
          ['Nabavna cena', '800.000 €', '5.000 €'],
          ['Nabavna cena posle indeksacije (pretpostavljen kumulativni indeks 1,30)', '1.040.000 €', 'nije relevantno'],
          ['Kapitalni dobitak', '960.000 €', 'ne nastaje (član 72a)'],
          ['Porez 15%', '144.000 €', '0 €'],
        ],
        note: 'Indeks u primeru je pretpostavka; stvarni indeks se uzima prema zvaničnim statističkim podacima za period od sticanja do prodaje.',
      },
      { kind: 'p', text: 'Kako teče ostatak prodaje, od prvog kontakta sa kupcem do zatvaranja, opisuje stranica [prodaja firme u Srbiji](prodaja-firme), a pravne korake tekst [prodaja doo firme: procedura prenosa udela](insights/selling-a-doo-share-transfer-procedure).' },
    ],
    faq: [
      {
        question: 'Koliki je porez na prodaju udela u doo?',
        answer: 'Za prodavca fizičko lice 15% kapitalnog dobitka, odnosno razlike između prodajne cene i nabavne cene uvećane za indeks potrošačkih cena (članovi 72, 74 i 77 Zakona o porezu na dohodak građana).',
      },
      {
        question: 'Da li se plaća porez ako sam firmu imao više od deset godina?',
        answer: 'Za udeo u neprekidnom vlasništvu najmanje deset godina kapitalni dobitak ne nastaje (član 72a). Ako se učešće u tom periodu menjalo, oslobođen je samo deo držan deset godina, a izuzimanje ne važi kada udeo otkupljuje samo društvo.',
      },
      {
        question: 'U kom roku se podnosi poreska prijava za prodaju udela?',
        answer: 'U roku od 30 dana od dana kada je prodavac ostvario ili započeo ostvarivanje prihoda od prodaje (član 95). Prijava se podnosi i kada prodavac ima pravo na oslobođenje, jer se to pravo iskazuje u njoj.',
      },
      {
        question: 'Ko plaća porez na prodaju firme, kupac ili prodavac?',
        answer: 'Porez na kapitalni dobitak plaća prodavac, jer on ostvaruje dobitak. Kada prodaje pravno lice, dobitak ulazi u njegov porez na dobit.',
      },
    ],
  },
];
