# Hefestos Capital — SEO Action Plan

The new site is built for search from the ground up (fast static pages, clean
bilingual URLs, canonical + hreflang tags, XML sitemap, JSON-LD structured data,
unique titles/descriptions, an Insights content engine). **On-page SEO is done.**

But ranking #1 for competitive terms like "investment banking Serbia",
"M&A advisor", "prodaja kompanije" is 30% on-page and 70% off-page. The items
below are what actually move rankings — most require the client, not code.

---

## 1. Technical launch checklist (do once, at go-live)

- [ ] **Point the domain** `www.hefcap.com` at the new build (`out/` folder — any
      static host: Vercel, Netlify, Cloudflare Pages, S3+CloudFront, Nginx).
- [ ] Decide **www vs non-www** and 301-redirect one to the other. Update
      `SITE_URL` in `src/lib/site.ts` if it changes.
- [ ] **HTTPS** with auto-renewing certificate; redirect http→https.
- [ ] Register the site in **Google Search Console** (both `https://www.hefcap.com`
      and the domain property) and **Bing Webmaster Tools**. Submit `/sitemap.xml`.
- [ ] Verify the old URLs 301-redirect to the closest new page (avoid losing any
      existing link equity from the current hefcap.com).
- [ ] Point the contact form at a real inbox (see `TODO(client)` in
      `ContactForm.tsx`) or a form service (Formspree/Web3Forms).
- [ ] Add **Google Analytics 4** or a privacy-first analytics (Plausible/Fathom).

## 2. Google Business Profile (highest ROI for local/branded search)

- [ ] Create/claim the **Google Business Profile** for the Belgrade office
      (category: "Investment bank" / "Financial consultant"). This is the single
      biggest lever for showing up when someone searches the firm or "M&A advisor
      Belgrade". Add address, phone, hours, website, description (EN + SR), photos.
- [ ] Get the profile **verified** and keep NAP (Name, Address, Phone) identical
      to the site footer everywhere online.

## 3. Citations & directories (consistency signals)

List the firm — with **identical NAP** — on: LinkedIn (company page), Crunchbase,
PitchBook, Mergermarket/DealRoom if applicable, APR (Serbian Business Registers
Agency) profile, local business directories, and finance/M&A association pages.

## 4. Backlinks (the #1 ranking factor for competitive terms)

- [ ] **Deal announcements / press releases** for each closed transaction the
      client can disclose → picked up by financial press = high-authority links.
- [ ] Guest articles / expert commentary in Serbian & regional business media
      (Biznis.rs, Bloomberg Adria, Forbes Serbia, etc.).
- [ ] Partner/portfolio/association links; speaking engagements and conference
      profiles.
- [ ] LinkedIn thought-leadership from the team, linking back to Insights.

## 5. Content cadence (Insights)

The `Insights` section is the compounding SEO engine. Publish **2–4 articles per
month**, each targeting one real search query, in **both** languages. Add to
`src/lib/insights.ts` (same slug in `en` and `sr`).

High-intent topics to cover next:
- "How much does it cost to sell a company" / "Koliko košta prodaja firme"
- "Sell-side vs buy-side M&A" / "Prodaja vs kupovina — razlike"
- "How long does it take to sell a business" / "Koliko traje prodaja kompanije"
- "Due diligence checklist" / "Due diligence — kontrolna lista"
- "Earn-outs explained" / "Earn-out klauzule objašnjene"
- "Family business succession & sale" / "Prodaja porodične firme"
- Sector deep-dives (one per sector the firm covers)

Each article should be 800–1,500 words, answer the query directly, link to
relevant Services/Sectors pages, and end with a contact CTA (already templated).

## 6. Target keyword map (already reflected in page metadata)

| Page | English targets | Serbian targets |
|------|-----------------|-----------------|
| Home | investment banking, M&A advisory, emerging markets | investiciono bankarstvo, M&A savetnik |
| Services | sell-side / buy-side M&A, capital raising | prodaja kompanije, prikupljanje kapitala |
| Track Record | M&A track record | reference transakcije |
| Sectors | oil & gas / FMCG / financial services M&A | M&A po sektorima |
| Insights | how to sell a company, business valuation | kako prodati kompaniju, procena vrednosti |

---

**Bottom line:** the code gets Hefestos into the race and makes every page
indexable and attractive in search results. Getting to **#1** then depends on
Google Business Profile, a steady stream of Insights content, and authoritative
backlinks (especially deal PR). Those are ongoing marketing activities — I can
help draft the content and PR, but the profile/verification/link outreach must be
done from the client's own accounts.
