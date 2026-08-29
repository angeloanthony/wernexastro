# Wave 1 Utah Pest Entity Library — Build & Verification Report

_Rebuilt Aug 27, 2026. All work is local and unpublished. Production remains 28 pages._
_Branch: `pest-wave-1`. `main` untouched. Nothing deployed._

---

## 1. Executive Summary

Wave 1 exists as **19 drafts, all `published: false`**. This pass did not author them — it
audited them against the primary sources, and the audit found real errors that had survived
three previous QA rounds.

The most consequential finding is that **a USU quotation had been fabricated**. Three pages
attributed to Utah State University the phrase "Utah's only spider of major medical concern."
USU does not say that. It says black widows are "the most dangerous spiders to humans in Utah."
The sentiment was close, the attribution was not, and a library whose entire premise is that
it cites better than its competitors cannot invent quotes from its own headline source. Fixed
on all three pages, and the whole set was re-verified against fetched sources rather than
against the previous pass's notes.

Four other claims failed verification and were **removed rather than softened**: a north-to-south
termite pressure gradient (no authoritative Utah source measures one), a hantavirus case-fatality
figure (CDC pages returned 403 to every fetch, and the drafted "one in three" did not match the
figure a search snippet attributed to CDC anyway), a *Reticulitermes tibialis* range claim, and a
deer-mouse ear-size field mark that **contradicted USU's own description**. One geographic claim
was materially overstated: the elm seed bug's documented Utah range reaches Duchesne County — the
*western* Uintah Basin — not Vernal, and the page had used it to claim the Basin generally.

Structurally, the pass closed the schema hole that produced the previous QA's worst finding, added
a citation requirement that makes an uncited page unpublishable, and did the de-templating pass
the last report recommended but did not perform.

**Recommended publishable Wave 1: 18 entities.** `turkestan-cockroach` is recommended for hold —
an informational URL about a species with no Utah record is the one page here that does not clear
the "why does this deserve its own URL" test.

---

## 2. Final Entity Inventory

19 authored · 18 recommended for publication · all currently `published: false`.

| Entity | Slug | Intent | Regions | Service link | Query intent it owns |
|---|---|---|---|---|---|
| Black Widow | black-widow | treatable | statewide | spider-control, vernal | "how dangerous is a black widow" |
| Brown Recluse | brown-recluse | **myth** | statewide | none (schema-enforced) | "are brown recluses in Utah" |
| Hobo Spider | hobo-spider | treatable | uintah-basin | vernal | "hobo spider bite" myth correction |
| Arizona Bark Scorpion | arizona-bark-scorpion | **informational** | southwest-utah | none (schema-enforced) | "bark scorpions in St. George" — real range |
| Giant Desert Hairy Scorpion | desert-hairy-scorpion | treatable | southwest-utah | scorpion-control | "huge scorpion in my garage" |
| Northern Scorpion | northern-scorpion | treatable | statewide | vernal | "are there scorpions in Vernal" |
| Carpenter Ant | carpenter-ant | treatable | statewide | ant-control, vernal | "big black ants indoors" |
| Pavement Ant | pavement-ant | treatable | statewide | ant-control, vernal | "small ants in kitchen every spring" |
| Harvester Ant | harvester-ant | treatable | statewide | ant-control, vernal | "fire ants in Utah" — absorbed honestly |
| Termites | termites | treatable (category) | statewide | termite-control | "does Utah have termites" |
| German Cockroach | german-cockroach | treatable | statewide | southern-utah, vernal | "how to get rid of roaches" |
| Turkestan Cockroach | turkestan-cockroach | informational | southwest-utah | none | **HOLD — see §8** |
| Western Yellowjacket | yellow-jacket | treatable | statewide | wasp-removal, vernal | "wasps everywhere in August" |
| European Paper Wasp | paper-wasp | treatable | statewide | wasp-removal, vernal | "wasp nest under my eaves" |
| Deer Mouse | deer-mouse | treatable | statewide | rodent-control-vernal, vernal | "hantavirus / cleaning mouse droppings" |
| House Mouse | house-mouse | treatable | statewide | rodent-control-vernal, southern-utah | "how to get rid of mice" |
| Roof Rat | roof-rat | treatable | southwest-utah | southern-utah | "rats in St. George attic" |
| Elm Seed Bug | elm-seed-bug | treatable | uintah-basin | vernal | "what is this bug swarming in July" |
| Boxelder Bug | boxelder-bug | treatable | statewide | vernal | "black and red bugs on my wall" |

**Totals:** 16 treatable · 2 informational · 1 myth.

---

## 3. Classification Decisions

**Two entries are deliberately not commercial**, and the schema now enforces that rather than
trusting the author:

- **`arizona-bark-scorpion` — informational.** The page's own argument is that USU documents this
  species in Kane County and not in the St. George area. Attaching a scorpion-service CTA to that
  argument would be selling treatment for a pest the page just said the reader probably does not
  have. The commercial St. George scorpion intent is carried honestly by `desert-hairy-scorpion`,
  which the bark-scorpion page reaches through `relatedPests`.
- **`brown-recluse` — myth.** Answers "are brown recluse spiders in Utah" with USU's verbatim "do
  not occur in Utah," and routes only to library destinations.

**Reclassification considered and rejected:** `hobo-spider` was reviewed for demotion to
informational, since USU places it in "northern Utah" and does not document the Uintah Basin
specifically. It stays treatable because the service claim on the page is ordinary Vernal
perimeter-and-exclusion work that Wernex demonstrably performs, and the page states the
distribution uncertainty in its own text rather than burying it.

---

## 4. Geographic Findings

| Entity | What the source actually says | What changed |
|---|---|---|
| Arizona bark scorpion | USU's Utah scorpion table gives one location: **Kane County** | Removed the "Colorado River drainage" framing (not in the source) and the claim that St. George scorpions are "overwhelmingly" other species (USU does not rank encounters) |
| Desert hairy scorpion | USU: **southwestern Utah**, largest size class (>100 mm) | Removed "USU identifies it among the scorpions St. George residents most commonly encounter" — USU says nothing of the kind |
| Northern scorpion | USU: **all of Utah**, medium class (50–100 mm) | Size corrected (page said 1.5–2 in, contradicting USU); "effectively the only scorpion" in the Basin softened |
| Elm seed bug | USU: reported to **Duchesne Co.**, Tooele Co., Grand Co. | **Largest geographic correction.** Page had claimed this "puts the Uintah Basin squarely in its range" and named Vernal. Duchesne is the western Basin; no Uintah County record exists. Now precise |
| Hobo spider | USU: "one of the most common indoor spiders found in **northern Utah**" | Basin hedge retained and tightened |
| Pavement ant | USU: "**northern Utah's** most common pest ant" | Kept scoped to northern Utah |
| Termites | USU: subterranean most common; drywood/dampwood "uncommon in Utah" | **Removed the unverifiable north–south pressure gradient** |
| Roof rat | No university/state record; local news since ~2021 | Named the outlets, and stated that their quantitative claims trace to pest-control operators |
| Turkestan cockroach | **No Utah record found anywhere** | Hold recommended |
| Fire ants | USU: "IFA are **NOT** known to occur in Utah"; separately, "Parts of Washington, Iron, and Kane Counties **may be** suitable for colony establishment, particularly in areas that have accessible water from irrigation or natural sources" | The caveat had been omitted site-wide; now on the harvester-ant page. Audit note: it was first added as a compressed quote reading "parts of southwestern Utah are suitable for IFA establishment", which dropped USU's hedge and its water qualifier — corrected to USU's own wording |

---

## 5. Business / Service Findings

Every `treatment` field was re-checked against `public/llms.txt`, `services.astro`, and the live
service pages. **No invented methods remain** — the seven the previous QA caught (gel baits, IGRs,
wall-void injection, wasp trapping programs, a June treatment window, glue-board monitoring, a
rodenticide policy, a "Basin scorpion program") have not returned, and nothing new was introduced.

Claims now trace to evidence as follows: web/egg-sac removal and residual harborage treatment to
the spider page; baits carried to the queen and perimeter barriers to the ant page; Termidor
non-repellent liquid barrier, WDI inspections and monitoring to the termite page; trapping,
exclusion sealing and monitoring stations to the rodent page; UV detection, targeted barrier and
exclusion sealing to the scorpion page; nest location, removal with protective equipment and
residual eave treatment to the wasp page; fall barrier timing bundled with rodent exclusion to the
Vernal page.

Two service scopes remain genuinely unresolved and are owner questions, not writing problems —
see §12 items 1 and 2.

---

## 6. Research Sources

Full evidence records, with verbatim quotes and per-claim verdicts, are in
**`docs/pest-evidence.md`**. Sources are now also machine-checkable: every entry carries a
`sources` array in frontmatter, and the schema **refuses to let a page publish with fewer than
two**.

Primary sources used: USU Extension fact sheets (scorpions, top-20 arachnids, desert recluse,
pavement/carpenter/harvester/imported fire ants, termites, German cockroach, western yellowjacket,
social wasps, elm seed bug, boxelder bug, deer mouse), Utah DHHS hantavirus, CDC hantavirus,
Colorado State University (European paper wasp), UC IPM and *Journal of Economic Entomology*
(Turkestan cockroach), and — labeled as non-authoritative — St. George News, FOX 13 and KUTV for
the roof rat.

**Sources that could not be reached** (CDC case data 403, USU yellowjacket PDF 403, HUD TIP-zone
page silent on Utah) are listed in `docs/pest-evidence.md` §9. In every case the response was to
delete the claim, not to cite something weaker.

---

## 7. Content Decisions — the de-templating pass

The previous report's strongest unfixed finding: 19 pages shared one structural signature. That
has now been addressed rather than noted.

| Signal | Before | After |
|---|---|---|
| Pages ending in a bulleted checklist | 10 | 2 |
| H2 counts | 18 pages at 4 | 3 / 4 / 5 |
| Bodies opening "The [Name] (*Binomial*)…" | 11 | 6 |
| `treatment` fields following "[insight] — Wernex [verb, verb, verb]" | 16 | 9 |
| Long sentences shared across 2+ pages | — | **0** |
| 6-grams shared by 3+ pages (prose) | — | **0** |

Section order now follows query intent rather than a house template: `black-widow` opens with the
danger answer because its title asks a danger question; `deer-mouse` opens with the cleanup safety
rule because that is the one instruction that changes outcomes; `yellow-jacket` gained a standalone
section for USU's "Never plug entrance holes to nests!"; `paper-wasp` closes on a seasonal calendar;
`harvester-ant`'s treatment field opens by saying we would often rather not treat at all.

---

## 8. Pages Held or Rejected

| Entity | Status | Reason |
|---|---|---|
| **Turkestan cockroach** | **HOLD from Wave 1** | No USU, UDAF, university, museum or peer-reviewed record places it in Utah. USU's Utah structural-cockroach list is four species and excludes it. The page is honest and useful, but it is an informational URL about an absent species, and the `german-cockroach` lookalike section already gives readers the same value. Publish if a Utah record appears |
| Fire ants | Excluded (unchanged) | Owner decision stands. Harvester-ant page absorbs the intent, and now carries USU's full statement including the southwestern-Utah suitability caveat |
| Woodrat / pack rat | HOLD | Needs confirmation that Wernex traps them |
| Wolf spider | HOLD (Wave 2) | No verified image; widow and hobo pages carry the spider ID load |
| Carpenter bee | HOLD (Wave 2) | SW-only; confirm service scope first |
| Bed bug species page | HOLD | Would cannibalize `/bed-bug-treatment-southern-utah` |
| Mosquitoes | Excluded from commercial | Both service areas sit inside taxpayer-funded abatement districts |
| EAB / aphids / borers | Excluded (unchanged) | Recorded in `pests.ts` |

---

## 9. Cannibalization Analysis

Every new URL was tested against the 28 live pages. The split is informational-entity vs.
commercial-local in every case; no location × pest pages were created, and no pest page uses a
service page's title pattern.

| New URL | Nearest live page | Why both exist |
|---|---|---|
| carpenter-ant, pavement-ant, harvester-ant | /ant-control-st-george | Species ID and biology vs. St. George service conversion. Harvester-ant additionally owns the "fire ant" query the service page can no longer answer wrongly |
| termites | /termite-control-st-george | "Do I have termites / does Utah have them" vs. "hire termite control". The entity page carries the drywood-is-rare accuracy content and the risk-factor reasoning; the service page keeps the transaction |
| black-widow, hobo-spider | /spider-control-st-george | Danger and ID vs. service. Hobo is northern-Utah content the St. George page never covered |
| brown-recluse | /spider-control-st-george | Myth correction vs. service — and after the applied corrections the two pages now agree |
| arizona-bark-scorpion, desert-hairy-scorpion, northern-scorpion | /scorpion-control-st-george | Range accuracy and species ID vs. service. Northern-scorpion targets Vernal intent no live page touches |
| deer-mouse, house-mouse, roof-rat | /rodent-control-vernal | Disease safety / method / species vs. Vernal trapping service. Roof-rat is SW-specific and routes to the southern-Utah hub, not the Vernal-branded page |
| german-cockroach | (no live roach page) | Fills a genuine gap |
| yellow-jacket, paper-wasp | /wasp-removal-st-george | Species and seasonality vs. removal service |
| elm-seed-bug, boxelder-bug | /pest-control-vernal | Dedicated ID and timing vs. local service intent |

**Risk: low.** The one pair worth watching post-publication is `termites` vs.
`/termite-control-st-george`, since both answer "termites in Utah" to some degree; the entity page
is deliberately national-myth-correcting and non-transactional to keep them apart.

---

## 10. Internal-Link Architecture

- **Confusion pairs are bidirectional:** carpenter-ant ↔ termites, elm-seed-bug ↔ boxelder-bug,
  yellow-jacket ↔ paper-wasp, german ↔ turkestan, house-mouse ↔ deer-mouse ↔ roof-rat, the three
  scorpions to each other, hobo → black-widow and brown-recluse.
- **Regional honesty:** SW pests link to St. George pages, Basin pests to Vernal pages. `roof-rat`
  routes to the southern-Utah hub rather than the Vernal-branded rodent page.
- **Myth and informational pages carry no service links** — now enforced by the schema, by the
  route, and by the validator against the *rendered HTML*, not just frontmatter.
- **Deferred to publish time:** `pests.ts` tile `href` updates, "pests covered" blocks on service
  pages, and location-page links (see `docs/pest-entity-system.md` §6).
- **Bug Identifier readiness:** all 19 slugs resolve through `matchPest()` once tile hrefs flip.
  No Worker dependency was taken.

---

## 11. Image Decisions

Policy applied: **accurate image > no image > wrong image.** Every candidate file was opened and
looked at, not judged by filename.

**Two hero images removed this pass:**

- **`carpenter-ant`** — the alt text taught a field diagnostic ("the smoothly arched, evenly
  rounded top of the midsection is the profile that separates carpenter ants…") that the pictured
  ant does not clearly show, and the species could not be verified. An identification page must not
  manufacture confidence from an unverified photo.
- **`boxelder-bug`** — `boxelder.webp` is a synthetic render with visible chromatic fringing on
  every edge. Same rule already applied to `Black_Widow.webp`.

**Three hero images retained,** each verified against the species: `house-mouse`
(`Mouse_Home_Invasion.webp` — uniform gray-brown, large ears, near-hairless tail), `paper-wasp`
(`wasps_closeup.webp` — orange antennae visible, the diagnostic the page teaches), `yellow-jacket`
(`Yellow_Jackets.webp` — Vespula on exposed comb; the alt makes no claim beyond that).

**Sixteen species pages now carry no hero image at all.** That is the correct outcome under the
policy and a real content gap: the validator has a `BANNED_IMAGES` list so the known-bad files
cannot be reintroduced by a future editor. **Commissioning correct photography — deer mouse, roof
rat, hobo spider, the three scorpions, the three ants, German cockroach — is the single highest-value
remaining investment in this library.**

One live-page fix: `/pest-library`'s Featured Pest photo was captioned "Carpenter ant close-up
showing body segments." The alt now reads "Close-up of an ant," since the species is unverified.

---

## 12. Remaining Owner Decisions

1. **Does Wernex offer cockroach control as a service line?** No cockroach service page, no
   `serviceType`, no llms.txt entry. The draft scopes roach work under the residential/commercial
   line, which is defensible — but if roaches are a real service the site should say so somewhere.
2. **Does Wernex treat scorpions in the Uintah Basin?** `llms.txt` scopes scorpion control to
   "Southern Utah" and the Vernal page's pest list omits scorpions. `northern-scorpion` is worded
   as Basin perimeter service rather than a scorpion program, but this needs a yes/no.
3. **Deer-mouse hantavirus citation.** All numbers were removed because none could be verified.
   Before this page publishes, attach a live CDC citation and decide whether to state a
   case-fatality figure at all. **This is the highest-stakes open item in the library.**
4. **Scorpion-control page title keyword.** The page still reads "Bark Scorpion Removal" in its
   title/description while its body correctly says USU documents the species in Kane County. The
   service is real; the keyword is what people search; the tension is honest but not maximally
   consistent. Owner's call — unchanged from the previous report.
5. **Woodrat / pack rat** — does Wernex trap them?
6. **Carpenter bee** (SW-only) — confirm scope before its Wave 2 page.
7. **Pest photography budget** — see §11.
8. **Bug Identifier Worker** — still a separate infrastructure project; entity mapping is ready.

---

## 13. QA Results

**Structural.** `scripts/validate-pests.mjs` (new, in-repo — the previous validator existed only
in a scratchpad and would not have survived to publish day). Run in both modes:

```
--mode=production   14 checks   ALL PASSED
--mode=preview      13 checks   ALL PASSED
```

Covered: slug uniqueness · publishing gate · intent guardrails (myth and informational carry no
service links; `treatment` only on treatable) · citation floor · SERP title/description limits and
uniqueness · image existence and banned-image list · excluded-pest protection · `relatedPests` and
`relatedServices` resolution · in-body internal link resolution · myth pages linking no commercial
page **in rendered HTML** · page counts · canonical exactness · `og:url` match · JSON-LD parse plus
no `.html` URLs · FAQPage presence · draft banner · static sitemap integrity.

**Schema.** `src/content.config.ts` gained five refinements, each closing a hole this project has
actually fallen into: informational entries may not set `relatedServices` (the exact route by which
the previous QA's worst finding reached a sales CTA — the schema only policed `myth`); `treatment`
only on treatable; publishing requires ≥2 sources; `image` requires `imageAlt`; and title/description
length caps. The caps failed the build on first run and caught a 67-character title — working as
intended.

**Editorial.** All 19 read end to end. Zero long sentences shared between pages; zero prose 6-grams
shared by 3+ pages (the only cross-page repetition is the source URLs themselves). British spellings
introduced during rewriting were normalized.

**Production safety.** Verified after every change.

---

## 14. Production Safety Confirmation

- Production build: **28 pages**, unchanged.
- `PEST_PREVIEW=1` build: **47 pages** = 28 + 19 drafts.
- All 19 entries `published: false`; gate intact and independently asserted by the validator.
- `public/sitemap.xml`: **28 clean URLs**, no pest species entries.
- Canonical URL strategy untouched. No production URL changed, added, or removed.
- Cloudflare untouched. Nothing deployed. `main` untouched. Branch: `pest-wave-1`.

---

## 15. Recommended Publication Sequence

Publication is still gated on the owner's approval and on the canonical measurement window.

**Blocked until resolved:** `deer-mouse` (item 3 — attach the CDC citation first).

**Probe wave — lowest risk, zero cannibalization, Basin-first:**
`northern-scorpion` → `elm-seed-bug` → `boxelder-bug`.
No live page competes with any of them, and they test the template in a low-stakes corner.

**Wave 1b — after the probe indexes cleanly:**
`house-mouse`, `paper-wasp`, `hobo-spider`, `pavement-ant`, `carpenter-ant`, `german-cockroach`,
`yellow-jacket`, `desert-hairy-scorpion`, `termites`, `roof-rat`, `black-widow`.

**Wave 1c — already unblocked, but publish deliberately:** `harvester-ant`, `brown-recluse`,
`arizona-bark-scorpion`. These three contradict claims that used to be live; the legacy corrections
have now been applied in the working tree, so they are safe — but they are the pages a reader is
most likely to compare against cached copies of the old ones.

**Hold:** `turkestan-cockroach`.

Per-page publish steps are unchanged — `docs/pest-entity-system.md` §6. Re-run
`node scripts/validate-pests.mjs --mode=production` after every flip; it will fail the moment a
published entry lacks citations or the sitemap falls out of sync.


---

## 16. Pre-Publication Audit — 2026-08-27

Adversarial review of the whole Wave 1 system before the probe. Production safety re-verified
(28 pages, no entity routes, both sitemaps clean). Twelve of the fourteen source URLs that could be
fetched were checked quote-by-quote; every direct quotation on the black widow, brown recluse, hobo
spider, desert recluse, elm seed bug, yellowjacket, termite, deer mouse, pavement ant, German
cockroach and harvester-ant mound passages verified verbatim against USU. Independent n-gram scan
reproduced §12's finding: **zero prose 6-grams or 8-grams shared by three or more pages** — every
repeated string is a source URL or a `relatedServices` path.

### Corrected in this pass

| Area | Finding | Fix |
|---|---|---|
| **Geography (structural)** | Quick Facts rendered the `regions` enum as the "Where in Utah" fact. Six pages therefore asserted presence their own prose denies — `brown-recluse` read "Found throughout Utah", `turkestan-cockroach` and `arizona-bark-scorpion` both read "Southwest Utah — St. George & Washington County", and `hobo-spider`, `elm-seed-bug` and `roof-rat` overstated their documented ranges. The intent gate policed commerce; nothing policed geography | Added optional `rangeNote`, which overrides the rendered fact; required on `myth` by schema refine; set on all six pages; validator now fails a myth page that renders a presence label |
| **Preview leak** | A `PEST_PREVIEW=1` build emitted all 19 draft URLs into the generated `sitemap-0.xml`, with production canonicals and no `noindex`. The DRAFT banner is a human signal, not a crawler signal | `noindex,nofollow` on every unpublished entity page (via a new `BaseLayout` prop); sitemap `filter` excludes entity URLs in preview mode; validator checks both |
| **Citation accuracy** | `boxelder-bug` quoted three different USU pages while citing one that contains none of the quoted text; the "sunning"/"southern-facing walls" fragment traces to a fact sheet whose URL now 302s to an inaccessible PDF | Cited the two live USU pages that carry the binomial and the overwintering quote; dropped the unverifiable fragment, kept the verifiable one |
| **Strengthened quote** | `harvester-ant` quoted USU as saying "parts of southwestern Utah are suitable for IFA establishment" — USU says "may be suitable ... particularly in areas that have accessible water" | Replaced with USU's wording in both the FAQ and the body |
| **Unsupported superlative** | `desert-hairy-scorpion` credited USU with calling it "the biggest scorpion on USU's nine-species Utah list". USU's table puts three species in the same >100 mm class | Reworded to "alongside two other Utah species" |
| **Wrong field mark** | `brown-recluse` told readers cellar spiders have eight eyes "rather than the recluse's six" — the cited USU page says cellar spiders have "6 eyes and a 'violin' pattern behind their eyes" | Replaced with USU's actual wording; eye count dropped as a homeowner field mark |
| **Sibling contradiction** | `northern-scorpion` placed the bark scorpion "along the Colorado River corridor"; `arizona-bark-scorpion` says Kane County | Aligned to Kane County |
| **Dead citation** | `extension.usu.edu/planthealth/research/carpenter-ants` 302s to a DigitalCommons PDF that returns 403. Cited by three entries | Repointed to the live structural-pest-id-guide URL |
| **Geographic overreach** | `pavement-ant` extended USU's "northern Utah's most common pest ant" to "throughout the state ... St. George neighborhoods equally well" | Scoped to what USU says, with the gap stated |
| **Legacy contradiction** | `/scorpion-control-st-george` answered "Can scorpions climb into upper floors?" with "Yes. Bark scorpions are excellent climbers" — on a page that already says USU places bark scorpions only in Kane County, and against `desert-hairy-scorpion`, which says the local species is a poor climber | Answer made species-honest; the hand-written FAQPage JSON-LD on that page was synced to match (legacy pages duplicate FAQ text in two places and drift silently) |
| **Stale records** | `pests.ts` fire-ant note listed six pages still naming fire ants; only `ant-control-st-george` does, and correctly. `pestIndex.ts` claimed `matchPest()` backs the search box; nothing calls it | Both comments corrected |

### Not fixed — carried forward

1. **The hub does not link the entity pages.** `pest-library.astro` renders tiles from `pests.ts`;
   only `black-widow` and `termites` share a slug with an entry. At publish time the other 17 URLs
   would be orphaned. Fix before the probe: give `boxelder-bug`, `elm-seed-bug` and
   `northern-scorpion` tiles/hrefs and add them to the ItemList.
2. **The Bug Identifier — SEE THE OWNER DETERMINATION BELOW BEFORE READING THIS.** The original
   static-analysis finding was that `identifyBug*`, `handleFileSelect*`,
   `handleDrop*` and `switchTab` have no definitions. On `/pest-library` the upload tab is the
   default panel and `switchTab` is the only way to reach the Galaxy iframe, so that iframe is
   unreachable there; `/bug-identifier` has no iframe at all. Meanwhile five entity pages and
   every informational CTA promise free photo ID, and `llms.txt` advertises the feature.
   **OWNER DETERMINATION, 2026-08-28 — SUPERSEDES THE ABOVE. DO NOT ACT ON IT.**
   The owner has confirmed from real-world use that the Bug Identifier is a **working production
   AI feature**: users can upload or take a photo and get an identification. `/bug-identifier` is
   therefore **explicitly out of scope** — do not remove or rewrite its upload UI, its AI claims,
   its `WebApplication` schema, or its navigation entry, and do not convert it to a static guide
   or retire the URL.

   The static analysis that produced the note above is retained only to explain why the feature
   is not reconstructable from this repository. Its findings were: the `identifyBug*`,
   `handleFileSelect*`, `handleDrop*` and `switchTab` handlers have no definitions in any commit;
   `public/script.js` has never defined them at any revision; no `wrangler.*`, `_worker*`,
   `functions/` or env file has ever existed here; and the `image.galaxy.ai` embed on
   `/pest-library` returns 404. Live production was also checked and matches what this repo
   builds, so **deploying this repository does not alter `/bug-identifier`.**

   The correct conclusion is therefore NOT that the feature is broken. It is that
   **`/bug-identifier` depends on something that lives outside this repository**, which is
   precisely why source-tree inference must not be used as grounds to "clean it up". Verified
   behaviour outranks repository inference. Leave it alone.

3. **Source padding.** `black-widow` and `hobo-spider` each satisfy the two-source floor with a
   fact sheet that does not address their species (scorpions and desert recluse respectively).
   Needs a real second source before either publishes.
4. **`hobo-spider` classification.** It is `treatable` with a Vernal service link while its own
   prose says Basin establishment is undocumented and that most Vernal brown spiders are not hobos.
   Editorial call, not a mechanical fix.
5. **`northern-scorpion` service claim.** `/pest-control-vernal` lists rodents, spiders, ants,
   wasps, boxelder bugs and cluster flies — not scorpions. The probe's inclusion of this page is
   blocked on owner confirmation.

---

## 17. Hub Wiring Checkpoint — 2026-08-28

Joins the Pest Library hub to the `pestLibrary` content collection. Before this, the hub built
its tile grid, ItemList JSON-LD and search index from `src/data/pests.ts` while the entity route
built from the collection — two systems that never met, leaving 17 of 19 entity pages with no
inbound link from anywhere on the site.

### The invariant

`published` in the content collection is the only publication state. `buildPestCatalog()` is the
single join; the hub grid, ItemList, `#pest-index` search JSON and `PEST_COUNT` all read that one
catalog, so they cannot disagree with each other or with the routes the build emitted.

**Publishing a pest is exactly one boolean flip.** No `pests.ts` href, no hub edit, no ItemList
edit, no search-index edit, no sitemap edit, no validator constant.

### Verified round trip

| | unpublished | both probe entities published |
|---|---|---|
| production pages | 28 | 30 |
| hub tiles | 16 | 18 |
| `numberOfItems` / ListItems | 16 | 18 |
| search index entries | 16 | 18 |
| meta description count | 16 | 18 |
| entity URLs in served sitemap | 0 | 2 |
| banned/synthetic images rendered | 0 | 0 |
| emoji-only tiles | 0 | 2 |

Reverting both booleans returned the build to 28 pages with no entity routes, no hub links, no
ItemList entries, no search entries and no sitemap entries. Hub HTML with nothing published is
byte-identical to the pre-wiring output apart from the CSS asset hash.

### Two frozen constants that would have forced manual edits

Found while proving the flip, and fixed:

1. **`public/sitemap.xml` is hand-curated and is the only sitemap `robots.txt` advertises.** The
   Astro-generated `sitemap-0.xml` gained the entity URLs on publish; the advertised one did not.
   Publishing would have shipped two live pages that no sitemap pointed at — quietly compromising
   the measurement the probe exists to produce. The static file keeps its tuned per-page
   `lastmod`/`changefreq`/`priority` for the 28 static pages (regenerating it wholesale would have
   rewritten all 28 live entries mid-measurement), and a build hook now **appends** entity URLs to
   `dist/sitemap.xml`, derived from the entity pages the build actually emitted. Output with
   nothing published is byte-identical to the curated file.
2. **`EXPECTED_PROD_PAGES = 28` in the validator.** Now `STATIC_PROD_PAGES + published count`.
   The publish tripwire is preserved rather than softened: any `published: true` still **fails** a
   production validation run unless it is acknowledged with `--allow-published`.

### Image-free tiles

Neither probe entity has an image verified to depict its species, and both candidate files are on
the banned list — `elmsee_bug.webp` does not even depict an elm seed bug. The grid previously
rendered `<img>` unconditionally. It now has an intentional image-free state reusing the existing
`.pest-item .placeholder` hook: emoji at photo-tile height, `aria-hidden` so the accessible name
comes from the tile text rather than an alt claiming an animal is pictured. No stock or synthetic
photography was added, and the image standard was not relaxed.

### Guardrails added

Validator now fails on: a hub link to an entity URL the build did not emit (a 404 on a live page);
an unpublished entity appearing as a hub link, ItemList item, search entry or new tile; a published
entity orphaned from any of those surfaces; the five catalog surfaces disagreeing; a published
entity missing from the served sitemap; and a banned image rendered on the hub.

### Bug Identifier — out of scope

No identifier change was made, and none should be. The owner has confirmed `/bug-identifier` is a
**working production AI feature** (see §16 item 2, which supersedes the earlier static-analysis
note). Its upload UI, AI claims, `WebApplication` schema and navigation entry all stay as they are.

Live production was verified to match what this repository builds — same title, H1, inline handlers
and `script.js` — so **publishing the Pest Library probe carries no risk to the identifier.** The
feature depends on something outside this repo; do not infer from the source tree that it is broken.
