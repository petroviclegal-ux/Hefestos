# Mapa ključnih reči

Jedna stranica, jedan primarni upit. Kada dve stranice ciljaju isti upit, Google
bira jednu i obe slabije rangiraju, pa u koloni „primarni" nema ponavljanja.

Provereno kroz Google autocomplete za Srbiju (`hl=sr`, `gl=rs`), 31. avgusta
2026. Autocomplete pokazuje da je upit dovoljno čest da ga Google ponudi, ali ne
daje volumen. Upiti bez ijedne dopune označeni su kao slabi i na njima se ne
grade naslovi.

## Glavne stranice

| Stranica | Primarni upit | Sekundarni | Naslov sada | Šta menjati |
|---|---|---|---|---|
| `/sr/` | kupoprodaja firme | prodaja kompanije, Hefestos Capital | Investiciono bankarstvo i M&A savetovanje | `investiciono bankarstvo` vodi na oglase za posao i fakultet. Zameniti pojmom koji koriste klijenti. |
| `/sr/services/` | M&A savetnik | finansijski konsalting, poslovno savetovanje Beograd | Čime se bavimo | Naslov nema nijednu ključnu reč. Komercijalno najvažnija stranica posle naslovne. |
| `/sr/insights/` | (bez cilja) | | Analize | Zadatak stranice je interno povezivanje, ne rangiranje. Naslov ipak treba da imenuje teme. |
| `/sr/management/` | Stefan Petrović | imena ostalih članova tima | Članovi tima | Entitetska stranica. Person shema je već postavljena. |
| `/sr/track-record/` | (bez cilja) | | Reference | Stranica poverenja, ne pretrage. |
| `/sr/sectors/` | (bez cilja) | | Sektori | Isto. Vredi tek kada svaki sektor dobije svoj tekst. |
| `/sr/about/` | Hefestos Capital | | Ko smo mi | Brend upit. |
| `/sr/contact/` | Hefestos Capital kontakt | investiciona banka Beograd | Kontakt | |

Slabi upiti, provereni i bez dopuna: `m&a savetovanje`, `korporativno
savetovanje`, `investiciono bankarstvo beograd`, `savetovanje pri prodaji
firme`, `konsultant za firme`, `vrednovanje firme`, `investitor za firmu`.
Na njima ne graditi naslove.

Pažnja kod `procena vrednosti`: bez reči „firme" upit pripada vozilima i
nekretninama.

### Predlog naslova za glavne stranice

Naslov stranice u `<title>` trenutno uzima `kicker` iz `content.ts`, isti tekst
koji se vidi kao nadnaslov iznad H1. Da bi se naslov za pretragu razlikovao od
onoga što stoji na stranici, `buildMetadata` treba da dobije zaseban naslov.
Vidljivi H1 se ne menja.

| Stranica | Sada | Predlog |
|---|---|---|
| `/sr/` | Investiciono bankarstvo i M&A savetovanje | Kupoprodaja firme i korporativne finansije |
| `/sr/services/` | Čime se bavimo | M&A savetnik: prodaja, kupovina i finansiranje firme |
| `/sr/insights/` | Analize | Analize: prodaja, kupovina i finansiranje firme |
| `/sr/management/` | Članovi tima | Tim: Stefan Petrović i partneri |
| `/sr/contact/` | Kontakt | Kontakt: investiciona banka u Beogradu |

Ostale stranice ostaju kako jesu.

## Objavljeni tekstovi

| Slug | Primarni upit | Sekundarni |
|---|---|---|
| how-to-sell-a-company | kako prodati firmu | prodaja firme procedura, prodaja firme u Srbiji |
| what-does-an-ma-advisor-do | šta radi M&A savetnik | posrednik u prodaji firme |
| how-to-value-a-business | procena vrednosti firme | procena vrednosti preduzeća, procena vrednosti firme cena |
| prepare-company-for-sale | priprema firme za prodaju | prodaja firme doo |
| due-diligence-what-buyers-look-for | dubinska analiza firme | due diligence na srpskom, provera firme pre kupovine |
| sell-side-vs-buy-side | prodaja ili kupovina firme | uloga savetnika |
| how-long-to-sell-a-company | koliko traje prodaja firme | |
| earn-outs-explained | earn-out klauzula | odloženo plaćanje |
| growth-capital-equity-vs-debt | dokapitalizacija firme | dokapitalizacija doo, kredit za firmu |
| how-to-choose-an-ma-advisor | izbor M&A savetnika | |
| ma-market-review-h1-2026 | spajanja i preuzimanja Srbija | NIS MOL, Addiko RBI NLB |
| selling-a-family-business | prodaja porodične firme | nasleđivanje firme |
| how-much-does-it-cost-to-sell-a-company | koliko košta prodaja firme | prodaja doo firme cena |
| restructuring-or-selling-a-company-under-pressure | prodaja firme u blokadi | firma u blokadi šta dalje, izlazak iz blokade |
| interview-stefan-petrovic-h1-2026-market-review | Stefan Petrović | intervju |
| sale-agreement-warranties-escrow-price-adjustments | ugovor o prodaji udela u doo | prodaja udela u doo, kupoprodaja firme |
| how-to-buy-a-company-acquisition-process | kako kupiti firmu | kako kupiti firmu u Srbiji, kupovina firme doo |
| corporate-finance-advisory-explained | korporativne finansije | struktura kapitala |

Do 31. avgusta 2026. šest tekstova je nosilo `prodaja firme` kao prvu ključnu
reč. Sada je nosi samo tekst o firmi u blokadi, u obliku `prodaja firme u
blokadi`, dok ostali imaju svoje upite.

## Upiti bez stranice

Redom po tome koliko brzo donose klijenta. Ovo je i redosled pisanja.

| Upit | Tekst koji ga preuzima |
|---|---|
| prodaja udela u doo porez, porez na prodaju firme | Porez pri prodaji firme (plan 2.1) |
| firma u blokadi šta dalje | zaseban tekst o blokadi (plan 6.1) |
| normalizovana EBITDA, korekcije EBITDA | Normalizovana EBITDA (plan 2.5) |
| restrukturiranje kredita pravnog lica, reprogram kredita | Reprogram i refinansiranje duga (plan 1.1) |
| kredit za kupovinu firme, akvizaciono finansiranje | Akvizaciono finansiranje (plan 3.1) |
| ugovor akcionara, manjinski investitor | Ulazak manjinskog investitora (plan 4.4) |
| kupovina firme u stečaju | Kupovina imovine iz stečaja (plan 3.5) |
| UPPR postupak | UPPR (plan 1.2) |
| spajanje uz pripajanje privrednih društava | nova tema, nije bila u planu |
| informacioni memorandum, virtuelna soba podataka | Memorandum i soba podataka (plan 2.4) |

## Šta ovo ne rešava

Glavni upiti oko prodaje firme u Srbiji pripadaju oglasnicima. Za `prodaja firme
savetnik` prvih osam rezultata čine KupujemProdajem, Njuškalo, Bizzy, Facebook
grupa i dva oglasa za posao. Takmičenje za te upite ne donosi klijente ni kada
uspe. Prostor koji se osvaja je stručni long tail iz tabele iznad, gde su
postojeći rezultati tanki, a onaj ko kuca zaista prodaje firmu.
