# Autoritet domena: šta stvarno pomera rangiranje

Stanje na dan 20.11.2026, iz Search Console izveštaja Veze.

## Tačna dijagnoza

Sajt ima **50 spoljnih linkova**. Izvori: gravatar.com (8), crunchbase.com (4),
creator-spring.com (3), linkedin.com (3), resita.ro (3). Tekst linkova je
„www hefcap com", „logo", „portfolio website".

To su ostaci iz profila i direktorijuma. Nijedan nije uredništvo koje je
odlučilo da vas pomene. Svih 50 vodi na `/en/`, nijedan na neki tekst.

Posledica se vidi u pozicijama. Isti tekstovi, prevedeni:

| Upit | Pozicija |
|---|---|
| firma u blokadi | 6,8 |
| kako prodati firmu | 6,7 |
| dokapitalizacija | 9,2 |
| m&a advisor | 50,7 |
| m&a advisory | 58,8 |

Na srpskim upitima, gde konkurencija nema sadržaj, prva strana. Na engleskim,
gde konkurencija ima hiljade linkova, pedeseta pozicija. Tekst je isti.

**Zaključak: tehnički i sadržinski deo je iscrpljen. Dalji rast zavisi
isključivo od toga ko spolja pominje hefcap.com.**

## Šta NE raditi

Ovo je deo gde se najlakše napravi nepopravljiva šteta.

- Kupovina linkova, bilo u kom obliku, uključujući „garantovane objave" i
  „PR pakete sa dofollow linkom"
- Masovno upisivanje u kataloge firmi
- Guest post mreže
- Linkovi u komentarima i forumima
- Zamena linkova sa nepovezanim sajtovima

Sajt trenutno **nema nijednu ručnu meru** od Google-a, što je proveravano
19.11.2026. Nabrojano gore je jedino što to može da promeni. Oporavak od ručne
mere traje mesecima i nije zagarantovan. Ne vredi rizika.

---

## Nivo 1: ispraviti postojeće zapise o firmi

Najbrže, besplatno, i trenutno je pogrešno.

### 1.1 Crunchbase, hitno

`crunchbase.com/organization/hefestos-capital` danas prikazuje firmu pod
imenom **Zvezdobrojci**, sa Milutinom Nikolićem kao osnivačem i sajtom
`milutinnikolic.co`. Google tu stranicu vodi kao jedan od izvora koji linkuju
na hefcap.com.

Dakle: adresa koja nosi vaše ime opisuje drugu firmu i upućuje na vas. Za
Google je to signal da hefcap.com i Hefestos Capital možda nisu isto.

Milutin Nikolić je na stranici tima hefcap.com-a naveden kao Senior Advisor,
pa ovo nije nepoznat nalog nego profil koji je najverovatnije prepravljen
unutar kruga firme. Prvi korak je razgovor sa njim, ne prijava Crunchbase-u.

Ishod treba da bude jedno od dva: zapis se vraća na Hefestos Capital, ili se
profil firme otvara pod drugom adresom a stari prestaje da linkuje na
hefcap.com. Dok traje jedno ili drugo, ta adresa ne ide u `site.profiles`.

### 1.2 Google Business Profile

Proveriti da li postoji zapis za adresu Bulevar Mihajla Pupina 115v. Ako ne
postoji, otvoriti ga. Ako postoji a nije preuzet, preuzeti ga.

Ovo je jedini besplatan zapis koji direktno ulazi u Google-ov indeks entiteta,
i za upit „M&A savetnik Beograd" ili „investiciono bankarstvo Beograd" je
presudan.

### 1.3 LinkedIn stranica firme

Pretraga `linkedin.com/company/hefestos-capital` i
`linkedin.com/company/hefestos-capital-doo` vraća 404. Search Console beleži
3 linka sa linkedin.com, što su verovatno lični profili zaposlenih, ne
stranica firme.

Ako stranica firme ne postoji, otvoriti je. Ako postoji pod nekim drugim
nazivom, poslati tačan URL.

### 1.4 Zatvoriti stari Weebly i WordPress

`hefestos-capital.weebly.com` i `hefestoscapital.wordpress.com` i dalje rade
(oba vraćaju 200) i drže pozicije za ime firme koje bi pripadale hefcap.com-u.

Ako WordPress.com nalog ima plaćeni plan, bolje je postaviti 301 preusmerenje
na hefcap.com nego obrisati sajt, jer preusmerenje prenosi težinu. Weebly na
besplatnom planu to ne dozvoljava, tamo ostaje gašenje.

### Kad se 1.1 do 1.3 završe

Poslati mi tačne URL-ove. Upisuju se u `site.profiles` u `src/lib/site.ts` i
izlaze kao `sameAs` na Organization entitetu. To je ono što Google-u kaže da
su hefcap.com i firma koju već poznaje odnekud drugde jedno isto.

---

## Nivo 2: članstva koja nose javni zapis

Svako od ovih ima javni spisak članova sa linkom. Jedno učlanjenje je jedan
trajan link sa domena koji Google tretira ozbiljno, plus pristup ljudima.

- **AmCham Srbija**, spisak članica je javan
- **Savet stranih investitora (FIC)**
- **Privredna komora Srbije**, Udruženje za finansijske usluge
- **Savez ekonomista Srbije**
- Preko PGP Legal strane: **Legal 500** i **Chambers Europe**, profili
  partnera su indeksirani i jako citirani

Ovo nije SEO trošak, to su članstva koja firma ovog profila ionako ima razloga
da ima. Link je sporedna korist.

---

## Nivo 3: struka, ovde je stvarni rast

Ovaj deo nosi najviše i jedini je koji se ne može kupiti.

### Polazna tačka koju već imate

Hefestos objavljuje polugodišnji pregled tržišta M&A za Jugoistočnu Evropu sa
imenovanim transakcijama. Za srpske poslovne redakcije to je retkost:
Mergermarket i slične baze Srbiju pokrivaju loše ili uz pretplatu koju
redakcije nemaju.

Novinaru koji piše o preuzimanju treba izvor koji sme da citira. Ako taj izvor
postoji i dostupan je, citiraće ga. Tako se zarađuje uredničko pominjanje.

### Kako to izgleda u praksi

Dva puta godišnje, kad izađe pregled, poslati ga kao kratku belešku na poslovne
redakcije. Ne kao saopštenje za javnost, nego kao podatak.

Redakcije: **Bloomberg Adria**, **Nova ekonomija**, **Biznis.rs**,
**Forbes Srbija**, **Ekonomist**, poslovne rubrike **Politike** i **Danasa**.

Nacrt mejla:

> Predmet: Pregled tržišta M&A u Jugoistočnoj Evropi, prva polovina 2026.
>
> Poštovani,
>
> Hefestos Capital je objavio polugodišnji pregled tržišta spajanja i
> preuzimanja u Jugoistočnoj Evropi. Pregled obrađuje transakcije NIS i Addiko,
> makroekonomski okvir i kretanje vrednosti u regionu.
>
> Materijal je slobodan za korišćenje uz navođenje izvora:
> https://hefcap.com/sr/insights/ma-market-review-h1-2026/
>
> Ako vam za tekst treba komentar o nekoj konkretnoj transakciji, dostupan sam.
>
> Stefan Petrović
> Partner, Hefestos Capital
> [telefon]

Ključno je poslednja rečenica. Jednom kad novinar zna koga da zove, zvaće
ponovo, i svaki sledeći tekst nosi pominjanje bez ikakvog slanja.

### Komentar na aktuelne transakcije

Kad se desi velika transakcija u regionu, javiti se redakciji istog dana sa
dve do tri rečenice komentara. To je ono što razlikuje izvor koji se citira od
firme koja šalje saopštenja.

Partner koji je i advokat ima prednost: može da komentariše i pravnu i
finansijsku stranu, a većina sagovornika može samo jednu.

---

## Nivo 4: baze transakcija

- **Dealroom.co**, besplatan unos profila
- **Mergermarket**, profil savetnika
- **PitchBook**, zahtev za unos firme kao advisora
- **Preqin**, ako radite sa fondovima

Ovo su spori i administrativni koraci, ali su trajni i Google ih tretira kao
potvrdu da firma postoji u struci.

---

## Redosled

| Prioritet | Šta | Ko | Rok |
|---|---|---|---|
| 1 | Crunchbase zapis, utvrditi i ispraviti | klijent | odmah |
| 2 | Google Business Profile | klijent | ove nedelje |
| 3 | LinkedIn stranica firme | klijent | ove nedelje |
| 4 | Weebly i WordPress ugasiti ili preusmeriti | klijent | ove nedelje |
| 5 | URL-ovi u `site.profiles` | ja, čim stignu | isti dan |
| 6 | AmCham i PKS učlanjenje | klijent | ovaj kvartal |
| 7 | Slanje pregleda tržišta redakcijama | klijent | uz svaki pregled |
| 8 | Dealroom i Mergermarket profili | klijent | ovaj kvartal |

## Šta meriti i kada

Za devedeset dana, u Search Console:

- **Veze, ukupno spoljnih**: sa 50 na preko 80, i to sa domena koji imaju veze
  sa strukom, ne sa gravatar.com
- **Prosečna pozicija na engleskim M&A upitima**: sa 50 na ispod 30
- **Klikovi koji nisu na ime firme**: trenutno 3 od 213 prikazanih. Ovo je
  jedini broj koji zaista govori da li strategija radi.

Sve ostalo na sajtu je već urađeno i ne treba mu ništa.
