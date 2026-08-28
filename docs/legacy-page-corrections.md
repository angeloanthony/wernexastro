# Legacy-Page Surgical Correction Plan — Fire Ant / Brown Recluse / Bark Scorpion Claims

_Prepared Aug 27, 2026. **Status update (verification pass): Groups A, B, C and D are APPLIED in the working tree on branch `pest-wave-1`.** This document is now the record of what changed and why, not a pending plan. Two items remain open and are listed at the end. Original text follows._

_Original status: PLAN ONLY — no edits applied. These corrections should land
before or with Wave 1 publication so the site never contradicts its own pest library.
Each item lists the exact current text and a proposed replacement; nothing else on these
pages changes. All page structure, URLs, canonicals, headings, and JSON-LD shape are preserved —
only the factual claims move._

Evidence base (see `docs/pest-entity-system.md` §2): USU Extension — red imported fire ants
not established in Utah; brown recluse does not occur in Utah (desert recluse = Washington
County, rarely indoors); Arizona bark scorpion established mainly Kane County / Colorado
River corridor, no authoritative record of an established St. George population.

## Group A — Fire ant claims (replace with harvester/pavement/carpenter ants)

### 1. `src/pages/ant-control-st-george.astro` (4 spots)
- **L5 + L8 (description + og:description):**
  - Now: “Wernex eliminates fire ants, harvester ants, and pavement ants with eco-friendly barrier treatments.”
  - Proposed: “Wernex eliminates harvester ants, pavement ants, and carpenter ants with eco-friendly barrier treatments.”
- **L71 (FAQ JSON-LD) + L209 (visible FAQ)** — same sentence in both places; change both:
  - Now: “The most common ant species in the St. George area include fire ants, harvester ants, pavement ants, and carpenter ants.”
  - Proposed: “The most common ant species in the St. George area include harvester ants, pavement ants, and carpenter ants. Harvester ants are often mistaken for fire ants, which are not established in Utah.”
- **L116 (AI summary block):** same fire-ant list; apply the same substitution.
- **L142–144 (species card):**
  - Now: “🔥 Fire Ants — Aggressive stinging ants that build large mound colonies in yards and around foundations. Painful stings can cause allergic reactions in children and pets.”
  - Proposed: “🌾 Harvester Ants — Utah’s big red mound-building ants, often mistaken for fire ants (which are not established in Utah). Their painful stings make mounds near play areas and pet runs a real hazard.”
  - At publish time, card links to `/pest-library/harvester-ant`.

### 2. `src/pages/pest-control-southern-utah.astro`
- **L158:** “…colony elimination for fire ants, harvester ants, and pavement ants…” → “…colony elimination for harvester ants, pavement ants, and carpenter ants…”

### 3. `src/pages/pest-control-hurricane-ut.astro`
- **L41 (FAQ JSON-LD) + L164 (visible FAQ):**
  - Now: “…hot spot for scorpions, black widows, bark scorpions, fire ants, subterranean termites, and mice.”
  - Proposed: “…hot spot for scorpions, black widows, harvester ants, subterranean termites, and mice.” (also removes the duplicated scorpion mention)
- **L94 (pest list row):** “Ants — Fire ants, harvester ants, and pavement ants year-round” → “Ants — Harvester ants, pavement ants, and carpenter ants year-round”

### 4. `src/pages/pest-control-santa-clara-ut.astro`
- **L79 (FAQ JSON-LD) + L186 (visible FAQ):** “Ants (especially fire ants and harvester ants), black widow spiders…” → “Ants (especially harvester ants and pavement ants), black widow spiders…”
- **L140 (card):** “Fire ants and harvester ants build large colonies in Santa Clara yards…” → “Harvester ants and pavement ants build large colonies in Santa Clara yards…”

### 5. `src/pages/pest-control-ivins-ut.astro`
- **L79 (FAQ JSON-LD) + L186 (visible FAQ):**
  - Now: “Bark scorpions, black widow spiders, fire ants, mice, and roof rats are the most common pest issues in Ivins.”
  - Proposed: “Scorpions, black widow spiders, harvester ants, and mice are the most common pest issues in Ivins.” (drops the fire-ant claim; also stops asserting roof rats as “most common” — they are an emerging, recently-reported species, see the roof-rat entity page)

### 6. `src/pages/pest-control-laverkin-ut.astro`
- **L140 (card):** “Fire ants and pavement ants are prolific in LaVerkin yards.” → “Pavement ants and harvester ants are prolific in LaVerkin yards.”

## Group B — Brown recluse claims (correct, don’t delete the topic)

The question “are brown recluses here?” has real search value — the fix is a corrected answer,
not removal. All corrected copy agrees with the `/pest-library/brown-recluse` myth page.

### 7. `src/pages/spider-control-st-george.astro` (5 spots)
- **L5 + L8 (description + og):** “Wernex eliminates black widows, brown recluses, and desert spiders…” → “Wernex eliminates black widows, wolf spiders, and desert spiders…”
- **L76–79 (FAQ JSON-LD) + L212–213 (visible FAQ)** — keep the question, replace the answer:
  - Now: “Brown recluses are less common than black widows in the St. George area but are occasionally found in storage areas, closets, and boxes. Their bites can cause serious tissue damage…”
  - Proposed: “According to Utah State University Extension, brown recluse spiders do not occur in Utah. The state’s only recluse relative is the desert recluse, found in Washington County, which lives outdoors and is rarely encountered indoors. Most suspected ‘brown recluses’ in St. George homes turn out to be harmless funnel weavers or cellar spiders — send us a photo and we’ll identify it for free.”
- **L116 (AI summary block):** “…eliminate black widows, brown recluses, wolf spiders, and other desert spiders…” → “…eliminate black widows, wolf spiders, and other desert spiders…”
- **L145–146 (card):**
  - Now: “⚠️ Brown Recluse — Light brown with a violin-shaped marking. Hides in storage boxes, closets, and undisturbed areas. Bites can cause necrotic tissue damage. Less common but present in Southern Utah.”
  - Proposed: “🕸️ ‘Brown Recluse’ Sightings — Brown recluses do not occur in Utah (USU Extension). Nearly every reported recluse here is a harmless funnel weaver or cellar spider. We identify photos free — because knowing what you actually have matters.”
  - At publish time, card links to `/pest-library/brown-recluse`.
- **L153–154 (Desert Recluse card)** — keep the species, fix the framing:
  - Now: “Native to Southern Utah’s red rock terrain. Similar to brown recluse but more commonly found outdoors. Can enter homes through gaps around doors and windows.”
  - Proposed: “Utah’s only recluse relative, native to Washington County’s desert. It lives outdoors in native vegetation and rodent burrows and is rarely encountered indoors — respect it, but it is not the explanation for typical indoor sightings.”

### 8. `src/pages/pest-control-southern-utah.astro`
- **L163:** “Targeted treatments for black widows, brown recluses, and desert spiders…” → “Targeted treatments for black widows, wolf spiders, and desert spiders…”

## Group C — Bark scorpion marketing language (REQUIRES BUSINESS SIGN-OFF)

These are stronger marketing rewrites than Groups A/B; the owner should approve the positioning
change. All corrected copy agrees with `/pest-library/arizona-bark-scorpion`.

### 9. `src/pages/scorpion-control-st-george.astro`
- **L77:** “Originally concentrated in Arizona, bark scorpions have expanded throughout Washington County and the Zion corridor over the past two decades. They’re now a year-round reality for homeowners in St. George…”
  - Proposed: “In Utah, established bark scorpion populations are documented along the Colorado River corridor, mainly in Kane County. The scorpions St. George homeowners most often encounter are Utah natives — especially the giant desert hairy scorpion — and our protocol treats every species the same way.”
- **L161–162 (FAQ):** “…is well-established in Southern Utah…” → “…documented in Utah mainly in Kane County along the Colorado River corridor. Most scorpions found in St. George homes are other native species with much milder stings — but any scorpion sting on a small child deserves medical attention.”
- **L74 (section H2) — added on review:** if the body copy above is hedged, this heading must move with it or the page contradicts itself.
  - Now: “The Bark Scorpion Problem in Southern Utah”
  - Proposed: “The Scorpion Problem in Southern Utah”
- Title/description (L4–5) can keep “Bark Scorpion Removal” as a service keyword — the service is real (Wernex will remove them wherever they occur) and it is what people search. Flagging the tension honestly: a headline naming the species while the body says it is mainly a Kane County animal is defensible but not maximally consistent. The alternative — retitling to “Scorpion Control & Removal” — sacrifices a real keyword. **Owner’s call.**
- Residual references left intact by this plan (they describe bark scorpion behavior generically, not Utah prevalence, so they remain accurate): L78 (climbing/size description), L145 and L178 (1/16-inch entry gaps). Re-read them after editing L74/L77 to confirm the page still reads coherently.

### 10. `public/llms.txt`
- “Bark scorpion specialists for Southern Utah.” → “Scorpion control specialists for Southern Utah.”

### 11. `src/pages/pest-control-hurricane-ut.astro`
- **L81:** “Bark scorpions — the most venomous scorpion species in the U.S. — are regularly found in Hurricane neighborhoods near Sand Hollow and the lava fields.” → “Scorpions — including the giant desert hairy, Utah’s largest — are regularly found in Hurricane neighborhoods near Sand Hollow and the lava fields.”

### 11b. Additional bark-scorpion assertions found during QA review

The QA pass found the claim is more widespread than the original plan captured. **`scorpion-control-st-george.astro:52` is the strongest version on the site** and was missed in the first draft of this plan:

- **`scorpion-control-st-george.astro:52` (AI summary block):** “The Arizona bark scorpion — the most venomous scorpion in the United States — **is established throughout the St. George, Washington, Hurricane, Ivins, and Springdale areas**.”
  - Proposed: “Southern Utah homeowners encounter several scorpion species, most commonly the giant desert hairy scorpion. Wernex uses a three-phase approach…” (keep the rest of the sentence unchanged)
- **`pest-control-santa-clara-ut.astro:79 + 141 + 186`:** “Bark scorpions are common in Santa Clara homes…” → “Scorpions are common in Santa Clara homes…”
- **`pest-control-laverkin-ut.astro:79 + 185`:** “…black widow spiders, bark scorpions, and mice…” → “…black widow spiders, scorpions, and mice…”
- **`pest-control-washington-ut.astro:90`:** “Scorpions — Bark scorpions in neighborhoods near the lava fields” → “Scorpions — Desert scorpions in neighborhoods near the lava fields”
- **`pest-control-ivins-ut.astro:140`** and **`pest-control-near-zion-national-park.astro:79, 87, 162`** and **`pest-control-vacation-rentals-southern-utah.astro:154`**: same substitution — replace the species assertion with the generic “scorpions,” leaving the service claims intact.

The pattern throughout: **the service is real and stays; only the species-prevalence assertion changes.** Wernex treats scorpions in these communities either way.

### 11c. Termite drywood wording (low priority, for consistency)
- `termite-control-st-george.astro` states drywood termites are “less common in St. George but present in some older homes”; the new `/pest-library/termites` page says USU calls them “uncommon in Utah.” These are close but not identical. Align the service page to “uncommon in Utah, and rarely the species involved here” so the two pages agree.

## Group D — Chat widget (separate small fix)

### 12. `public/script.js` L64
- Now: `'mosquito': "Our mosquito abatement program treats breeding sites and applies barrier sprays. Want details?"`
- Proposed: `'mosquito': "Good news: both the St. George area and the Uintah Basin are served by public mosquito abatement districts that respond to service requests. For other biting or invading pests, we can help — want a free quote?"`
- Rationale: Wernex has no mosquito service page, and both service areas sit inside taxpayer-funded abatement districts (see strategy doc §2).

## Execution notes

- Groups A, B, D are factual corrections with no business judgment needed — apply on approval.
- Group C changes marketing positioning; get the owner’s sign-off on the wording first.
- Every FAQ correction must be applied to BOTH the JSON-LD block and the visible FAQ so
  structured data continues to describe the page.
- No URLs, canonicals, page structure, or headings change. This is copy surgery only.
- After applying: `npm run build` (expect 28 pages) and re-run the pest validation script.

---

## Status at the close of the verification pass (Aug 27, 2026)

**Applied in the working tree** (branch `pest-wave-1`, not deployed):

- **Group A — fire ants.** All six pages corrected. `ant-control-st-george` now reads
  "harvester ants, pavement ants, and carpenter ants" in the description, og:description, FAQ
  JSON-LD, visible FAQ, AI summary block, and species card. Southern-Utah hub, Hurricane,
  Santa Clara, Ivins and LaVerkin corrected as specified.
- **Group B — brown recluse.** `spider-control-st-george` corrected in all five places; the
  answer now cites USU directly and the Desert Recluse card is reframed. Southern-Utah hub
  corrected.
- **Group C — bark scorpion positioning.** Applied, including the item the original plan
  missed (`scorpion-control-st-george.astro:52`, the strongest version of the claim on the
  site) and the same-pattern lines on the Washington, LaVerkin, Santa Clara, Ivins, Zion and
  vacation-rental pages. `llms.txt` line 22 corrected earlier; **line 60 ("Bark scorpion
  detection and elimination") corrected during this pass** — it had been left behind and
  contradicted the page it described.
- **Group D — chat widget.** The mosquito reply now points to the public abatement districts.
  **Additionally corrected this pass:** the `'roach'` reply promised "targeted gel baits and
  barrier sprays for cockroaches." There is no cockroach service line, no `serviceType`, and no
  gel-bait claim anywhere in the repo — an invented method of exactly the kind this project
  bans. It now describes cockroach work under the residential/commercial line and leads with
  identification.
- **Termite drywood wording (11c).** `termite-control-st-george` now reads "uncommon in Utah,
  and rarely the species involved here," matching USU and the `/pest-library/termites` page.

**Also corrected during this pass, not in the original plan:**

- `src/pages/pest-library.astro` — the Featured Pest photo was captioned "Carpenter ant
  close-up showing body segments." The species in that photo could not be verified, so the alt
  now reads "Close-up of an ant." The section heading and copy still say Carpenter Ants; if the
  owner wants that section to keep its species framing, it needs a verified carpenter ant photo.

**Still open — owner decisions, not factual corrections:**

1. **`scorpion-control-st-george` title and meta description** still contain "Bark Scorpion
   Removal" as a service keyword while the page body correctly limits the species to USU's
   Kane County record. The service is real and the keyword is what people search; the tension
   is defensible but not maximally consistent. Retitling to "Scorpion Control & Removal"
   sacrifices a real keyword. **Owner's call — unchanged.**
2. **Cockroach service scope.** The rewritten chat reply assumes roach work falls under the
   residential/commercial line. If that is right, the site should say so somewhere; if it is
   wrong, the reply needs changing again. See `docs/wave-1-report.md` §12.
