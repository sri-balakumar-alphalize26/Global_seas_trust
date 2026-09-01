# Arabic review sheet — Global Seas Trust

**For:** a native Arabic speaker familiar with the Omani / Gulf seafood trade
**Prepared:** 1 September 2026

The site is fully bilingual. English lives at `globalseastrust.com`, Arabic at `globalseastrust.com/ar/`. All Arabic was drafted in Modern Standard Arabic with the Gulf trade name in parentheses where one is in common use, and **has not yet been reviewed by a native speaker**.

Please correct anything that reads wrong to a buyer in the region. **Write your correction in the last column** — no need to open any code. Each row maps to one entry in `src/data/catalogue.ar.ts`, so applying your changes is mechanical.

The priority is the **name** column. A buyer searching for fish in Arabic will use the market name, not a literal translation of the English.

---

## Confidence key

| | Meaning |
|---|---|
| ✅ | Believed to be the standard Gulf/Omani trade name — please confirm |
| ⚠️ | **Needs your attention** — descriptive phrase, literal translation, or a transliteration standing in for a real market name |

---

## Species names (21)

| # | English | Scientific | Current Arabic | | Your correction |
|---|---|---|---|---|---|
| 1 | Yellowfin Tuna | *Thunnus albacares* | تونة صفراء الزعانف | ✅ | |
| 2 | Frigate Tuna | *Auxis thazard* | تونة الفرقاطة (صدة) | ⚠️ | |
| 3 | Queenfish | *Scomberoides commersonnianus* | سمك الملكة (خبّاط) | ✅ | |
| 4 | Trevally | *Carangoides caeruleopinnatus* | تريفالي (جِش) | ⚠️ | |
| 5 | Grouper | *Epinephelus diacanthus* | هامور | ✅ | |
| 6 | Spangled Emperor | *Lethrinus nebulosus* | شعري | ✅ | |
| 7 | Pinjalo Snapper | *Pinjalo pinjalo* | نهّاش بنجالو | ⚠️ | |
| 8 | Croaker | *Atractoscion aequidens* | سمك الطبّال (كروكر) | ⚠️ | |
| 9 | Spotted Grunt | *Pomadasys opercularis* | النهّاق المرقّط | ⚠️ | |
| 10 | Barracuda | *Sphyraena jello* | باراكودا (عقام) | ✅ | |
| 11 | Needlefish | *Belonidae* | سمك الإبرة (حاقول) | ✅ | |
| 12 | Ribbon Fish | *Trichiurus lepturus* | سمك الشريط (سيف) | ✅ | |
| 13 | Indian Mackerel | *Rastrelliger kanagurta* | ماكريل هندي | ✅ | |
| 14 | Horse Mackerel | *Selar crumenophthalmus* | ماكريل الحصان (بغلة) | ✅ | |
| 15 | Yellowtail Scad | *Atule mate* | بغلة صفراء الذيل | ⚠️ | |
| 16 | Yellowstripe Scad | *Selaroides leptolepis* | بغلة صفراء الشريط | ⚠️ | |
| 17 | Pony Fish | *Leiognathus equulus* | سمك المهر | ⚠️ | |
| 18 | Grey Mullet | *Mugil cephalus* | بوري (بياح) | ✅ | |
| 19 | Catfish | *Arius tenuispinis* | سمك السلور | ⚠️ | |
| 20 | Moonfish | *Lampris guttatus* | سمك القمر (أوبا) | ⚠️ | |
| 21 | Vannamei Shrimp | *Litopenaeus vannamei* | روبيان فانامي | ✅ | |

### Specific doubts

- **4 Trevally** — `جِش` is believed to be the real Gulf trade name, while `تريفالي` is only a transliteration of the English. Should the order be reversed, or the transliteration dropped?
- **8 Croaker, 9 Spotted Grunt** — `الطبّال` (drummer) and `النهّاق` (grunter) describe the sound each fish makes, following the English. Is either actually used in the trade?
- **17 Pony Fish, 20 Moonfish** — literal translations of the English names. Almost certainly wrong as market names.
- **19 Catfish** — `السلور` usually reads as freshwater catfish. Does marine *Arius* have its own name in Oman?
- **15, 16 Scads** — built on `بغلة`, which is right for the group, but the colour compounds may not be how they are sold.

---

## Shared strings

| Where | Current Arabic | | Your correction |
|---|---|---|---|
| Product forms (all 20 fish) | كاملة / مجمّدة تجميداً سريعاً | ✅ | |
| Product forms (shrimp) | كامل / مجمّد تجميداً سريعاً | ✅ | |
| Category — Fish | الأسماك | ✅ | |
| Category — Crustaceans | القشريات | ✅ | |

**Note on "blast freezing":** rendered throughout as `التجميد السريع`. The client asked on 29 Aug to drop "IQF" and "block freezing" in favour of blast freezing everywhere. Please confirm `التجميد السريع` is how the trade says it, rather than e.g. `التجميد اللحظي`.

---

## Interface strings (added 1 Sep)

Tapping a photo now opens it full size, and the Contact email card asks which address to write to.

| Where | English | Current Arabic | Your correction |
|---|---|---|---|
| Photo popup — open | View {subject} full size | عرض {subject} بالحجم الكامل | |
| Photo popup — close | Close image | إغلاق الصورة | |
| Email card hint | Choose an address → | اختر العنوان ← | |
| Chooser title | Which address? | إلى أي عنوان؟ | |
| Chooser option 1 | General enquiries | الاستفسارات العامة | |
| Chooser option 2 | Sales | المبيعات | |
| Chooser option 3 | Both addresses | كلا العنوانين | |
| Chooser option 3 hint | Send one message to both | رسالة واحدة إلى العنوانين معاً | |
| Chooser cancel | Cancel | إلغاء | |
| Working hours | Open 24 hours, 7 days a week | مفتوح 24 ساعة، 7 أيام في الأسبوع | |

`{subject}` is replaced with the photo's caption — please keep it exactly as written, and place it wherever the sentence needs it in Arabic.

---

## Also worth your eye

Beyond the species names, these were drafted the same way and would benefit from a read:

| File | Contains |
|---|---|
| `src/data/catalogue.ar.ts` | the 21 product descriptions (2–3 sentences each) |
| `src/i18n/ui.ts` (`ar` object) | all page headings, buttons, form labels, meta descriptions |
| `src/data/home.ts` | home page copy, `{ en, ar }` pairs |
| `src/data/site.ts` | `*Ar` fields — company description, facilities, packing, certifications |

The Infrastructure page (`/ar/infrastructure/`) is the newest and has had the least review.

---

## How to return this

Fill in the right-hand column and send the file back — or simply reply with a list like `4 → الجش`, `17 → …`. Either works.
