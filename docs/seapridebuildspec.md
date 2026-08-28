# SEA PRIDE LLC — WEBSITE BUILD SPECIFICATION

> **How to use this file:** paste this entire document into Claude Code as the project brief.
> Every string inside a `>` blockquote or a code fence is **final copy — reproduce it verbatim, do not rewrite, do not paraphrase, do not "improve" it.**
> Anything marked `[TODO]` is a genuine gap — ask before inventing content.
> Source of truth: https://www.seapridellc.com (extracted 27 Aug 2026).

---

## 0. BUILD BRIEF

**Project:** Corporate marketing website for Sea Pride LLC, a seafood processing and export company based in Sur, Sultanate of Oman.

**Type:** Static multi-page marketing site. No CMS, no backend except one contact form handler.

**Pages to build:** 8

```
index.html            Home
about.html            About Us
product.html          Our Products
suri.html             Suri Gold (brand page)
qurun.html            Qurun (brand page)
contact.php           Contact Us  (PHP only because of the mail handler)
privacy-policy.html   Privacy Policy
terms-conditions.html Terms & Conditions
```

**Default stack (replicates the original 1:1):**

```
HTML5 + CSS3 + vanilla JS
Bootstrap 5 grid
Swiper or Owl Carousel for the hero slider
AOS for scroll reveals
A counter library (purecounter / countUp.js) for the statistics
Font Awesome for social icons
Google Fonts
```

**If building in a framework instead** (Astro / Next / Nuxt): keep the same 8 routes and the same section order per page. Model the repeated blocks as components — `Header`, `HeroSlider`, `StatCounter`, `SectionHeading`, `ProductCard`, `ProcessStep`, `CertBadge`, `TimelineItem`, `SpecTable`, `Footer` — and drive the products, timeline and specification tables from data files rather than hardcoded markup.

**Required file structure:**

```
/
├── index.html
├── about.html
├── product.html
├── suri.html
├── qurun.html
├── contact.php
├── privacy-policy.html
├── terms-conditions.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    └── (see §9 Asset Manifest)
```

---

## 1. GLOBAL — DESIGN SYSTEM

The live site is a clean corporate seafood-export site: deep ocean blue as the primary, white sections alternating with pale blue-grey bands, generous section padding, rounded cards with soft shadows, and full-bleed photography.

**Design tokens** — these are a matched palette, not sampled hex values from the original stylesheet. If pixel-exact colour matching matters, pull the real values from the live site's CSS and replace this block.

```css
:root {
  /* Brand */
  --navy:        #0b3c5d;   /* primary — headings, header, footer */
  --ocean:       #1e6f9f;   /* secondary — links, accents */
  --aqua:        #2aa7c4;   /* highlight — icons, underlines */
  --gold:        #c9a227;   /* Suri Gold brand accent only */

  /* Neutrals */
  --ink:         #14202b;   /* body text */
  --slate:       #5a6b7a;   /* muted body text */
  --mist:        #f2f6f9;   /* alternating section background */
  --line:        #dfe7ed;   /* borders, dividers */
  --white:       #ffffff;

  /* Type */
  --font-head: 'Poppins', system-ui, sans-serif;   /* 600/700 weights */
  --font-body: 'Inter', system-ui, sans-serif;     /* 400/500 weights */

  /* Rhythm */
  --section-y: clamp(56px, 7vw, 104px);
  --radius: 12px;
  --shadow: 0 6px 24px rgba(11, 60, 93, .08);
}
```

**Section heading pattern** — used on almost every section across the site. Build it once as a reusable block:

```html
<div class="section-heading">
  <span class="eyebrow">EYEBROW TEXT</span>
  <h2>Heading Text</h2>
  <p class="lede">Optional intro paragraph.</p>
</div>
```

The eyebrow is a small uppercase label with letter-spacing in `--aqua`, sitting above the `h2`.

**Layout rules**

- Max content width 1200px, centered, 16px gutters.
- Alternate section backgrounds `--white` / `--mist` down each page.
- Breakpoints: 1200 / 992 / 768 / 576. Mobile-first CSS.
- Header is sticky on scroll with a compacted height and a shadow.
- Mobile nav is a hamburger drawer; "Our Brands" becomes a collapsible sub-list.
- All images `loading="lazy"` except the hero. Every `<img>` needs real descriptive `alt` text — the original site ships empty alts and that is a defect to fix, not to copy.

---

## 2. GLOBAL — HEADER

Logo left, navigation right.

**Logo:** `img/sea-pride-logo.png` → links to `index.html`, `alt="Sea Pride LLC"`

**Navigation:**

| Label | Href |
|---|---|
| Home | `index.html` |
| About Us | `about.html` |
| Our Products | `product.html` |
| Our Brands ▾ | *(dropdown, no link)* |
| — Suri Gold | `suri.html` |
| — Qurun | `qurun.html` |
| Contact Us | `contact.php` |

Mark the current page's nav item with an `active` class.

---

## 3. GLOBAL — FOOTER

Four columns on desktop, stacked on mobile.

**Column 1 — Brand**

Logo `img/sea-pride-logo.png`, then this paragraph verbatim:

> Sea Pride LLC, established in 2005 and formerly known as Al Muqalla Fisheries, has been a cornerstone of the seafood industry. We proudly serve the US, EU, and over 60 countries worldwide, upholding core values of sustainability, quality, honesty, and integrity in all we do.

Then social icons: Facebook, X (Twitter), Instagram, LinkedIn. `[TODO: real social profile URLs — the original links are placeholders]`

**Column 2 — Quick Links**

Home · About Us · Our Products · Suri · Qurun · Contact Us

**Column 3 — Info**

Privacy Policy · Terms & Conditions

**Column 4 — Contact** (each row prefixed with its icon)

| Icon | Content |
|---|---|
| `img/location.svg` | Plot No 132, Sur Industrial Estate, Post Box 627, Sur - 411, Sultanate of Oman |
| `img/phone.svg` | +968 2556 2323 · +968 2556 2626 |
| `img/mail.svg` | info@seapridellc.com |

Phone numbers must be `tel:` links, the email a `mailto:` link.

**Footer bar**

> © 2024 Copyright Sea Pride LLC

> Powered By SMACON ®

Render the year dynamically (`new Date().getFullYear()`) rather than hardcoding 2024 — the original is stale.

---

## 4. PAGE — index.html (Home)

Section order, top to bottom:

### 4.1 HERO — full-bleed slider, 2 slides

Background image: `img/about.jpg` `[TODO: the original reuses one image for both slides — supply two distinct hero photos]`

**Slide 1**
> ### Global Leader in Seafood Excellence
> With an annual turnover of $130 million and exporting 125,000 metric tons annually, we at Sea Pride LLC are dedicated to quality and sustainability across international markets.

**Slide 2**
> ### From Oman's Rich Waters to Your Plate
> Sea Pride LLC begins its journey with the finest seafood sourced from Oman's rich and pristine waters, ensuring unparalleled freshness and quality.

Dark gradient overlay over the photo so white text stays readable. Autoplay ~6s, pagination dots, pause on hover.

### 4.2 ABOUT — two column (text left, image right)

Eyebrow: `About Us`

> Sea Pride LLC, was established in 2005 by Sheikh Juma Muhammed Bin Khamis Al Farsi and Mohamed Ameen. With a proud history dating back to 1996, we have grown significantly, achieving an annual turnover of $130 million and a yearly growth rate of 25-35%.

> Our company collaborates with over 60 marketing companies and exports approximately 125,000 metric tons of seafood annually, with a daily transport capacity of 250 metric tons. Serving primarily the US and EU markets, we operate in over 60 countries worldwide.

CTA button: `Read More` → `about.html`

### 4.3 KEY STATISTICS — 4 animated counters

Eyebrow: `Leading with Top-Quality Seafood and Sustainability`
Heading: `Key Statistics That Define Us`

> We use modern machineries to ensure top-quality seafood, improve supply chain efficiency, and maintain environmental responsibility, ensuring satisfaction for all.

| Icon | Value | Label |
|---|---|---|
| `img/year-of-experience.svg` | 30+ | Years of Experience |
| `img/Employees.svg` | 400+ | Employees |
| `img/marketing-countries.svg` | 67+ | Marketing Countries |
| `img/daily-transport.svg` | 300 | Daily Transport Capacity |

> ⚠️ **Two bugs in the original to fix here.**
> **(1)** Three of the four home-page counters ship as literal `0+` in the HTML and only fill in via a scroll-triggered script — so crawlers, scrapers and AI search see zeros. Put the **real number in the HTML** and let the script animate *from* 0 *to* that value, reading the target from a `data-count` attribute. Never leave the truthful value out of the markup.
> **(2)** The home page says 200+ employees while the About page says 400+, and the body copy says 250 MT daily transport while the counter says 300. Use **one** set sitewide — the figures in the table above — and confirm them with the client.

### 4.4 OUR PRODUCTS — 8 cards, 4×2 grid

Eyebrow: `Our Products`
Heading: `Our Products`

> Our diverse range of seafood meets all your culinary needs.

Each card: product photo, common name, scientific name in italics.

| Image | Name | Scientific name |
|---|---|---|
| `img/tuna.png` | Tuna | Thunnus Albacares |
| `img/product-3.png` | Shrimps | Penaeus Semisulcatus |
| `img/lobster.png` | Lobster | Panulirus Homarus |
| `img/product-1.png` | Squid | Uroteuthis Duvauceli |
| `img/product-2.png` | Red Snapper | Lutjanus rivulatus |
| `img/emperor.png` | Emperor | Lethrinus nebulosus |
| `img/ribbon-fish.png` | Ribbon Fish | Trichiurus lepturus |
| `img/horse-mackerel.png` | Horse Mackerel | Selar Crumenophthalmus |

CTA button: `View All` → `product.html`

### 4.5 INTERNATIONAL QUALITY STANDARDS — certification strip

Heading: `International Quality Standards`

`[TODO: no intro paragraph exists on the original. Write one — this section is currently images-only, which is dead weight for SEO and unreadable to screen readers.]`

Badges, in this order:

`img/safe.png` · `img/iso.png` · `img/haccp.png` · `img/gmp.png` · `img/friend-of-the-sea.png` · `img/brc-food.png` · `img/fda-approved.png`

Decorative: `img/grunge-stamp.png`

Every badge needs an `alt` naming the certification.

### 4.6 OUR DIVISIONS — 3 cards

Heading: `Our Divisions`

1. Fish Products
2. Fish Meal & Fish Oil
3. Boat Manufacturing Unit

`[TODO: the original has bare labels with no description and no images. Write one short paragraph and supply one image per division — this is the weakest section on the live site.]`

Suggested links: card 2 → `qurun.html`; card 3 → `[TODO: no Marine Engineering page exists]`

### 4.7 OUR PROCESS — 5 steps, numbered horizontal flow

Heading: `Our Process`

> From the sea to your table, Sea Pride LLC ensures every step is handled with care and precision.

| # | Image | Title | Copy |
|---|---|---|---|
| 01 | `img/catch-store.jpg` | Catch and Store | Omani fishermen store their catch in refrigerated containers to keep the fish fresh. |
| 02 | `img/quality-control.png` | Quality Control | At our Suri factory, each fish undergoes rigorous quality checks. |
| 03 | `img/preparation.png` | Preparation | After quality checks, the fish are de-iced and washed with chlorinated water. |
| 04 | `img/handpacking.png` | Handpacking | Whether fillets or whole fish, every item is carefully handpacked to preserve its integrity. |
| 05 | `img/packagin.png` | Packaging | The fishes are packed and prepared to be sent to supermarkets. |

Note the original filename typo `packagin.png` — rename to `packaging.png` in the rebuild.

---

## 5. PAGE — about.html

### 5.1 PAGE BANNER

Heading `About Us`, breadcrumb `Home / About Us`, over a background image. `[TODO: banner image]`

### 5.2 ABOUT SEA PRIDE LLC

Eyebrow: `About Us`

> Sea Pride LLC, was established in 2005 by Sheikh Juma Muhammed Bin Khamis Al Farsi and Mohamed Ameen. With a proud history dating back to 1996, we have grown significantly, achieving an annual turnover of $130 million and a yearly growth rate of 25-35%.

> Our company collaborates with over 60 marketing companies and exports approximately 125,000 metric tons of seafood annually, with a daily transport capacity of 250 metric tons. Serving primarily the US and EU markets, we operate in over 60 countries worldwide.

### 5.3 VISION & VALUES

Eyebrow: `Vision & Values`

> At Sea Pride LLC, our vision is to be a global leader in the seafood industry, recognized for our commitment to quality, sustainability, and innovation. We aim to continuously improve our practices, support our communities, and set new standards in the industry, building trust with customers and partners worldwide.

### 5.4 MISSION

Eyebrow: `Mission`

> At Sea Pride LLC, our mission is to deliver the freshest and finest seafood products while ensuring sustainability and quality at every step. We strive for customer satisfaction, environmental responsibility, and a lasting positive impact on the seafood sector.

### 5.5 OUR COMMITMENT

Eyebrow: `Our Commitment`

> At Sea Pride LLC, we are dedicated to maintaining a highly talented and skilled team that ensures the production of high-quality guaranteed products. We prioritise employee welfare and socio-economic development, with particular emphasis on creating opportunities for Omani citizens and on women empowerment. We are committed to strictly following international quality procedures to secure the selection of premium fish and guaranteeing customer satisfaction without compromise.

### 5.6 KEY STATISTICS

Same component as §4.3, same four values:

30+ Years of Experience · 67+ Marketing Countries · 400+ Employees · 300 Daily Transport Capacity

### 5.7 OUR HISTORY — text left, image right

Eyebrow: `Our History`
Image: `img/history-img.jpg`

> Our company traces its origins to 1996 with the founding of Al Muqalla Fisheries. By 1998 we became Oman's first EU-approved seafood exporter. Following our establishment in 2005 under visionary leadership, we have maintained an impressive average annual growth rate of 25-35%.

### 5.8 TIMELINE — 9 milestones, alternating vertical timeline

> Explore Sea Pride LLC's journey through key milestones and achievements that have shaped our growth and leadership in Oman's seafood industry.

| Year | Milestone |
|---|---|
| 1996 | Al Muqalla Fisheries was founded. |
| 1998 | Achieved the first EU-approved seafood export in Oman. |
| 2005 | SeaPride LLC was established. |
| 2013 | Built Oman's largest modern fish processing plant. |
| 2014 | Launched the largest fishmeal and fish oil production unit, Qurun Fish Meal. |
| 2019 | Established SeaPride Marine Engineering, the first fishing boat manufacturing unit in Oman. |
| 2021 | Opened Pride Packaging, one of the biggest carton manufacturing units. |
| 2022 | Added a modern fishing fleet of six vessels. |
| 2023 | Reached a total turnover of $130 million. |

Each milestone animates in on scroll.

### 5.9 CERTIFICATIONS

Heading: `Certifications`

Same badge set as §4.5, in this order: `haccp` · `gmp` · `iso` · `friend-of-the-sea` · `safe` · `brc-food` · `fda-approved`, plus `grunge-stamp.png`.

---

## 6. PAGE — product.html

### 6.1 PAGE BANNER

Heading `Our Products`, breadcrumb `Home / Our Products`. `[TODO: banner image]`

### 6.2 TABBED CATALOGUE

Heading: `Our Products`

Five tabs. Tab 1 active by default. On mobile, collapse to an accordion or a horizontally scrollable tab bar.

```
Value Added | Fishes | Crustaceans | Cephalopods | Smoked Products
```

---

#### TAB 1 — Value Added

Card layout: product name + scientific name, a **Sizes** row, and a **Forms** row where each form is a small photo tile with a caption.

**Tuna** — *Thunnus Albacares*
- Sizes: `20/30 kg` `30/50 kg` `50+ kg`
- Forms:

| Image | Caption |
|---|---|
| `img/tuna-treated-loin.png` | CO-treated Loin |
| `img/treated-saku.png` | CO-treated Saku |
| `img/Tuna-loin.png` | Steak |
| `img/tuna-cubes.png` | Cubes |
| `img/tuna-ground.png` | Ground Meat |

**Mahi Mahi** — *Coryphaena Hippurus*
- Sizes: `2/3 kg` `3/5 kg` `5+ kg`
- Forms:

| Image | Caption |
|---|---|
| `img/mahi.png` | Frozen Whole |
| `img/mahi-portions.png` | Portions |
| `img/mahi-fillet.png` | Skin-on Fillet |
| `img/mahi-steaks.png` | Steaks |

**Cuttle Fish** — *Sepia Pharanois*
- Sizes: `0.5/1 kg` `1/2 kg` `2/3 kg` `3+ kg`
- Forms:

| Image | Caption |
|---|---|
| `img/cuttle-fish.png` | Whole Round |
| `img/cuttle-fish-cleaned.png` | Cleaned |
| `img/cuttle-fillet.png` | Fillet |

**Sardine** — *Sardinella Longiceps*
- Sizes: `8/10 pcs` `10/12 pcs` `15/20 pcs` `20/30 pcs`
- Forms:

| Image | Caption |
|---|---|
| `img/sardine.png` | Whole Round |
| `img/hgt.png` | HGT |
| `img/sardine-steak.png` | Steak |

**Vannamei Shrimps** — *Litopenaeus Vannamei*
- Sizes: `30/40` `40/50` `50/60` `60/80` `80/100 pcs`
- Forms:

| Image | Caption |
|---|---|
| `img/vannamei-shrimp.png` | HOSO |
| `img/shrimps-hlso.png` | HLSO |
| `img/fs-pto.png` | PTO |
| `img/shrimp-cooked.png` | Cooked |

**Wild Shrimps** — *Penaeus Semisulcatus*
- Sizes: `U10` `U15` `10/20` `20/30` `30/40`
- Forms:

| Image | Caption |
|---|---|
| `img/wild-shrimp.png` | HOSO |
| `img/wild-shrimp-hlso.png` | HLSO |
| `img/wild-PUD.png` | PUD |

> Note: the original markup reuses `img/tuna.png` as a fourth tile under Wild Shrimps. That is a copy-paste error — drop it.

---

#### TAB 2 — Fishes

Simple grid of name + scientific name cards. `[TODO: product photos for these 15 species — the original has none]`

| Common name | Scientific name |
|---|---|
| Grouper | Epinephelus Diacanthus |
| Red Snapper | Lutjanus rivulatus |
| Red Mullet | Parupeneus Indicus |
| Emperor | Lethrinus nebulosus |
| Ribbon Fish | Trichiurus lepturus |
| Sweet Lips | Plectorhinchus pictus |
| Spotted Grunt | Pomadasys Opecularis |
| Trevally | Carangoides Caeruleopinnatus |
| Parrot Fish | Scarus Persicus |
| Crocker | Attractoscion Aequidens |
| Barracuda | Sphyraena jello |
| Cat Fish | Arius Tenuispinis |
| Hilsa | Nemetalosa Nasus |
| Indian Mackerel | Rastrelliger Kanagurta |
| Horse Mackerel | Selar Crumenophthalmus |

#### TAB 3 — Crustaceans

| Name | Scientific name | Sizes | Forms |
|---|---|---|---|
| Vannamei Shrimp | Litopenaeus Vannamei | 30/40, 40/50, 50/60, 60/80, 80/100 pcs | HOSO, HLSO, PTO, Cooked |
| Wild Shrimp | Penaeus Semisulcatus | U10, U15, 10/20, 20/30, 30/40 | HOSO, HLSO, PUD |
| Lobster | Panulirus Homarus | `[TODO]` | `[TODO]` |

#### TAB 4 — Cephalopods

| Name | Scientific name | Sizes | Forms |
|---|---|---|---|
| Cuttle Fish | Sepia Pharanois | 0.5/1 kg, 1/2 kg, 2/3 kg, 3+ kg | Whole Round, Cleaned, Fillet |
| Squid | Uroteuthis Duvauceli | `[TODO]` | `[TODO]` |
| Octopus | Octopus Vulgaris | `[TODO]` | `[TODO]` |

#### TAB 5 — Smoked Products

- Cold Smoked Herring
- Cold Smoked Mackerel
- Cold Smoked Eel
- Cold Smoked Salmon

`[TODO: photos and specs for all smoked products]`

---

## 7. PAGE — suri.html (Suri Gold)

Retail brand for the Omani domestic market — premium frozen seafood in supermarkets and hypermarkets. Use `--gold` as the accent colour on this page only.

### 7.1 BRAND HERO

Logo: `img/suri-logo.png`
Heading: `Suri Gold`

`[TODO: brand hero image and a one-line brand tagline — the original has neither]`

### 7.2 STEP-BY-STEP PROCESS — 6 numbered steps

> At Sea Pride LLC, we take great pride in ensuring that our seafood is of the highest quality and freshness. Here's a detailed look at our meticulous process.

**01 — Catch and Store**
> Omani fishermen catch fish at sea and store them in insulated/refrigerated containers to ensure the freshness of their catch.

**02 — Quality Check at Suri Factory**
> Our Suri factory, located close to the shores, receives and checks the edible quality of the fishes to ensure they meet our high standards.

**03 — De-Icing and Washing**
> After the quality check, the fishes are de-iced and washed with chlorinated water to ensure they are clean and safe.

**04 — Hand Packing with Care**
> From fillets to whole fish, all items are hand packed with care to preserve their quality and freshness.

**05 — Packaging with Advanced Technology**
> Using flaked ice and Suri's indigenous freeze technology, the fishes are packed and prepared to be sent to supermarkets and hypermarkets across Oman.

**06 — Delivery to Your Nearest Market**
> Suri's trucks, which ensure sub-zero temperatures, bring the packets to your nearest hypermarket or supermarket for you to pick up.

`[TODO: one image per step — the original ships this section without step imagery]`

### 7.3 OUR FACILITIES — text + image

Heading: `Our Facilities`
Image: `img/facilities.jpg`

> At Sea Pride LLC, our cutting-edge facilities are meticulously designed to manage every stage of the fish processing cycle with unmatched efficiency and precision. From the moment our skilled crews catch the highest-quality fish, they are swiftly transported to our factory, where advanced technology ensures thorough cleaning, precise cutting, and careful preparation to meet rigorous industry standards. Our state-of-the-art processing lines are engineered to handle each fish with the utmost care, preserving its freshness and maximizing its nutritional value, so that our customers receive a product that is both healthy and flavorful.

> After processing, our fishes are expertly packaged using the latest techniques, guaranteeing that they are stored and transported in a manner that maintains their peak quality. Our commitment to sustainability and excellence drives us to use eco-friendly practices throughout our operations, ensuring that every product not only meets but exceeds the highest standards of safety and quality. At Sea Pride LLC, we take pride in delivering only the best to our customers, from the ocean to your table.

### 7.4 QUALITY CONTROL

Heading: `Quality Control`

> Quality control is integral to our operations. We conduct rigorous inspections and maintain critical limits for temperature and moisture content throughout the processing stages to prevent microbial activity and ensure the highest quality standards. Our facilities are certified by HACCP, GMP+, and FSMS (Feed Safety Management System), reflecting our commitment to adhering to the highest industry standards.

### 7.5 SURI GOLD PRODUCTS — 14 pack shots

Heading: `Suri Gold Products`
Every card carries the identical subtitle: `Premium Frozen Product`

| # | Image | Product |
|---|---|---|
| 1 | `img/suri-product-1.png` | Mahi Mahi Portion |
| 2 | `img/suri-product-2.png` | Barracuda Steak |
| 3 | `img/suri-product-3.png` | Tuna Steak |
| 4 | `img/suri-product-4.png` | Squid Whole Cleaned |
| 5 | `img/suri-product-5.png` | Emperor Steak |
| 6 | `img/suri-product-6.png` | King Fish Steak |
| 7 | `img/suri-product-7.png` | Emperor Whole Fish |
| 8 | `img/suri-product-8.png` | Cuttle Fish |
| 9 | `img/suri-product-9.png` | Trevally Cubes |
| 10 | `img/suri-product-10.png` | Seafood Mix |
| 11 | `img/suri-product-11.png` | Tuna Meat |
| 12 | `img/suri-product-12.png` | Ribbon Fish Steak |
| 13 | `img/suri-product-13.png` | Cat Fish Steak |
| 14 | `img/suri-product-14.png` | Squid Rings |

> Verify the image-number ↔ product-name pairing against the live site before shipping — the mapping above follows source order and one mismatch would put the wrong pack shot on the wrong product.

---

## 8. PAGE — qurun.html

Fishmeal and fish oil production division.

### 8.1 BRAND HERO

Logo: `img/qurun-logo.png`
Heading: `Qurun`
Images: `img/qurun-1.png`, `img/qurun-2.png`

`[TODO: brand intro paragraph — the original jumps straight from the heading into the process with no description of what Qurun is]`

### 8.2 FISHMEAL PRODUCTION — 6 steps

Heading: `Qurun Fishmeal Production`

**Cooking**
> The process begins with the raw fish being cooked in a cylindrical cooker with a spiral axis and steam heating device.

**Pressing**
> Once cooked, the fish is transferred to a screw press. The press separates the liquid (fish oil and water) from the solid material (press cake).

**Separation**
> The press liquid, which contains a mixture of fish oil and protein water, is processed through a tri-canter.

**Drying**
> The press cake is then moved to a dryer, which consists of a horizontal crust, rotor, and disc type with steam coils. Moisture is reduced to 6-10%.

**Pulverizing**
> After drying, the fishmeal is pulverized in a grinder to produce a fine fishmeal powder. The powder is then cooled.

**Packing**
> The cooled fishmeal is weighed according to specifications using a calibrated weigh balance, then packed into specified bags.

`[TODO: bag size / packing specification is not stated on the original]`

### 8.3 FISH MEAL SPECIFICATIONS — table

Heading: `Fish Meal Specification`
Columns: `Parameter` | `Specification`

| Parameter | Specification |
|---|---|
| Protein | 65-67% MIN |
| Fat | 10% MAX |
| Moisture | 6%-10% |
| FFA | 10% MAX |
| TVN | 120 mg/100 gr MAX |
| Histamine | 500 ppm MAX |
| Antioxidant | 200 ppm MIN |

### 8.4 FISH OIL PRODUCTION

Heading: `Fish Oil Production`

**Extraction**
> During the pressing and separation stages, fish oil is extracted from the press liquid.

**Storage**
> The fish oil is stored in stainless steel tanks at ambient temperature.

### 8.5 FISH OIL SPECIFICATIONS — table

Heading: `Fish Oil Specification`
Columns: `Parameter` | `Specification`

| Parameter | Specification |
|---|---|
| FFA | MAX 4% |
| Moisture + Impurities | MAX 1.0% |
| Peroxid Index | `[TODO: the original prints "MAX" with no number — get the real value]` |
| Anisidine Value | MAX 20% |
| EPA & DHA | 23%-25% |

Both tables must sit inside `overflow-x: auto` wrappers so they scroll rather than break the layout on mobile.

---

## 9. PAGE — contact.php

### 9.1 PAGE BANNER

Heading `Contact Us`, breadcrumb `Home / Contact Us`.

### 9.2 OFFICE CARDS — 2 columns

**Sur Office (Head Office / Factory)**

> Plot no. 132, Sur Industrial City, Sur 411, P.O. box 627 Sur, Sultanate of Oman

- Phone: +968 2556 2323 / +968 2556 2626
- Email: info@seapridellc.com

**Muscat Office**

> Room 101, Floor M, Baith Khaled Building, Near Al Riffa Hospital, AL Gubrah, Muscat

- Phone: +968 2556 2323 / +968 2556 2626
- Email: info@seapridellc.com

### 9.3 ENQUIRY FORM

`[TODO: the live page has no form — it is contact details plus a map only. Recommended to add one:]`

Fields: Name (required) · Email (required) · Phone · Country · Subject · Message (required)
Submit label: `Send Enquiry`

Server side: PHP `mail()` or PHPMailer to `info@seapridellc.com`. Validate and sanitise every field, add a honeypot field and a rate limit. Show inline success and error states without a page reload.

### 9.4 MAP

Google Maps iframe centred on the Sur Industrial City address, lazy-loaded, `title` attribute set for accessibility.

---

## 10. PAGES — privacy-policy.html & terms-conditions.html

Both are plain long-form legal pages: page banner, then a single readable column max 800px wide, numbered `h2` headings and body paragraphs. Add a sticky in-page table of contents on desktop.

### 10.1 Privacy Policy — section headings

```
1.  Your Privacy - Our Promise
2.  Updates to the Policy
3.  Clear Terms and Conditions
4.  Information We Collect from Users
5.  Cookie Usage
6.  Purpose of Collected Information
7.  Sharing of Information
8.  User Choices Regarding Information
9.  Security of Information
10. Additional Information
      – Links to Other Websites
      – Advertisements
      – Children's Privacy
```

> ⚠️ Section 3 duplicates section 2 word for word, and the "Children's Privacy" block repeats the external-links disclaimer instead of saying anything about children. Both need rewriting, not copying.

### 10.2 Terms & Conditions — section headings

```
1.  Website Ownership and Content
2.  User Registration and Account Profile
3.  Use of SMS, Email, and Other Communications
4.  Scope of Service
5.  Your Representations and Warranties
6.  Privacy Policy
7.  Security Practices
8.  Cookies and Tracking
9.  Policy Updates
10. Limited Liability
11. Indemnity
12. Modification, Updating, and Termination
13. Governing Laws, Jurisdiction, and Dispute Resolution
14. Disclaimer
15. Perishable Products Disclaimer
16. Important
```

> 🔴 **Do not copy the existing Terms & Conditions text.** It is an Indian direct-to-consumer e-commerce template that was never adapted. It refers throughout to the domain **www.SeaPride.in**, quotes a **Rs. 30 delivery fee**, gives an Indian SMS opt-out shortcode (**9020022222**), references a mobile app that does not exist, and sets governing law as **India** with exclusive jurisdiction at **Ernakulam** and arbitration at **Kochi**.
>
> Sea Pride LLC is an Omani B2B seafood exporter with no online ordering. Carrying this document forward is a live legal exposure, not a cosmetic issue. Build the page shell and the section structure, insert a clearly-marked placeholder, and flag to the client that they need counsel-drafted terms under Omani law. The full original text is available in the source extract if they want to see what is currently published.

---

## 11. ASSET MANIFEST

All under `img/`. Download the originals from `https://www.seapridellc.com/img/<filename>`.

**Brand & UI**
```
sea-pride-logo.png   suri-logo.png   qurun-logo.png
location.svg   phone.svg   mail.svg
year-of-experience.svg   Employees.svg   marketing-countries.svg   daily-transport.svg
```

**Certifications**
```
safe.png   iso.png   haccp.png   gmp.png
friend-of-the-sea.png   brc-food.png   fda-approved.png   grunge-stamp.png
```

**Photography**
```
about.jpg   history-img.jpg   facilities.jpg
catch-store.jpg   quality-control.png   preparation.png   handpacking.png   packagin.png
```

**Home product cards**
```
tuna.png   product-1.png   product-2.png   product-3.png
lobster.png   emperor.png   ribbon-fish.png   horse-mackerel.png
```

**Product page — value added**
```
tuna-treated-loin.png   treated-saku.png   Tuna-loin.png   tuna-cubes.png   tuna-ground.png
mahi.png   mahi-portions.png   mahi-fillet.png   mahi-steaks.png
cuttle-fish.png   cuttle-fish-cleaned.png   cuttle-fillet.png
sardine.png   hgt.png   sardine-steak.png
vannamei-shrimp.png   shrimps-hlso.png   fs-pto.png   shrimp-cooked.png
wild-shrimp.png   wild-shrimp-hlso.png   wild-PUD.png
```

**Suri Gold**
```
qurun-1.png   qurun-2.png
suri-product-1.png … suri-product-14.png
```

**Housekeeping for the rebuild:** normalise the filenames to lowercase-kebab-case (`Employees.svg` → `employees.svg`, `Tuna-loin.png` → `tuna-loin.png`, `wild-PUD.png` → `wild-pud.png`, `packagin.png` → `packaging.png`), and convert the photography to WebP with the original as fallback.

---

## 12. SEO & METADATA

One unique `<title>` and `<meta name="description">` per page.

| Page | Title | Description |
|---|---|---|
| index | Sea Pride LLC \| Premium Seafood Exporter from Oman | Sea Pride LLC exports 125,000 metric tons of premium seafood annually from Sur, Oman to the US, EU and over 60 countries. HACCP, BRC and FDA certified. |
| about | About Us \| Sea Pride LLC | Founded in 2005 with roots to 1996, Sea Pride LLC is one of Oman's largest seafood processors and exporters, with $130 million in annual turnover. |
| product | Our Products \| Sea Pride LLC | Tuna, mahi mahi, shrimp, cephalopods and smoked seafood — full export range with sizes, grades and processing forms. |
| suri | Suri Gold \| Sea Pride LLC | Suri Gold premium frozen seafood, hand packed and delivered fresh to supermarkets and hypermarkets across Oman. |
| qurun | Qurun Fishmeal & Fish Oil \| Sea Pride LLC | Qurun produces premium fishmeal (65-67% protein) and fish oil (23-25% EPA & DHA) at Oman's largest production unit. |
| contact | Contact Us \| Sea Pride LLC | Reach Sea Pride LLC at our Sur head office or Muscat office. Phone +968 2556 2323. |

Also add sitewide:

- Open Graph and Twitter card tags with a share image
- `Organization` JSON-LD on the home page — legal name, founding date 2005, both addresses, both phone numbers, email, logo, social profiles
- `Product` JSON-LD on the product page
- `BreadcrumbList` JSON-LD on inner pages
- `sitemap.xml` and `robots.txt`
- Canonical URL on every page

---

## 13. BUILD ORDER

1. Scaffold the folder structure and download every asset in §11.
2. Write `css/style.css` — tokens, reset, typography scale, grid, then the shared components from §1.
3. Build `Header` (§2) and `Footer` (§3) as includes/partials. Every page consumes them.
4. Build `index.html` section by section in the order given in §4.
5. Build `about.html` (§5), then `product.html` with its tab logic (§6).
6. Build `suri.html` (§7) and `qurun.html` (§8).
7. Build `contact.php` (§9) with the form handler.
8. Build the two legal page shells (§10) — placeholder text for the T&C, flagged.
9. Add `js/main.js`: sticky header, mobile nav, hero slider, scroll counters, AOS init, product tabs, form validation.
10. Add all SEO metadata and JSON-LD from §12.
11. Test: 320 / 768 / 1024 / 1440 widths, keyboard navigation, Lighthouse ≥ 90 on all four scores, every image has alt text, every link resolves.

---

## 14. OPEN ITEMS FOR THE CLIENT

Everything marked `[TODO]` above, consolidated:

1. **Terms & Conditions must be replaced** — the published document is for an Indian e-commerce business under Indian law. Highest priority.
2. **Confirm the statistics** — employees (200+ or 400+?), daily transport capacity (250 MT or 300?), countries (60+ or 67?).
3. **Division descriptions and images** — Fish Products, Fish Meal & Fish Oil, Boat Manufacturing Unit are bare labels today.
4. **Second hero image** — one photo currently serves both slides.
5. **Page banner images** for About, Products, Contact and the two legal pages.
6. **Product photography** for the 15 fish species, lobster, squid, octopus, and the 4 smoked products.
7. **Sizes and forms** for Lobster, Squid and Octopus.
8. **Peroxide index value** for the fish oil specification.
9. **Fishmeal bag/packing sizes.**
10. **Brand intro copy** for both Suri Gold and Qurun — neither brand page explains what the brand is.
11. **Real social media profile URLs.**
12. **Intro paragraph** for the certifications section.
13. **Confirm whether an enquiry form is wanted** on the contact page.
14. **Marine Engineering and Pride Packaging** are named in the timeline but have no pages — decide whether they need them.
