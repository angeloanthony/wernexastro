# Wave 1 Utah Pest Knowledge Layer — Build Report

_Delivered Aug 27, 2026. All work is local and unpublished. Production remains 28 pages._

## 1. Executive Summary

Wave 1 is authored: **19 pest entities** (17 new + the 2 existing drafts), every one
`published: false`, building only under `PEST_PREVIEW=1`. Candidates were filtered through the
evidence and service gates rather than the original 18-page target — the result after QA is
16 treatable pages, 2 informational pages, and 1 myth page, each with a distinct search intent no
existing page serves. Fire ants, woodrats, mosquitoes, carpenter bees,
wolf spiders, and a bed-bug species page were held or excluded, with reasons recorded below.
Geographic honesty is the differentiator throughout: the bark scorpion page states the
Kane-County-not-St.-George evidence plainly; deer mouse and elm seed bug are Basin-first; roof
rat and Turkestan cockroach carry "emerging/watch" hedging.

A surgical correction plan for the legacy fire-ant / brown-recluse / bark-scorpion claims is
documented (not applied) in `docs/legacy-page-corrections.md` — 12 items with exact
current→proposed text.

## 2. Wave 1 Final Inventory

| Entity | Slug | Type | Region | Service link | Intent it captures | Priority |
|---|---|---|---|---|---|---|
| Black Widow | black-widow | A treatable | statewide | spider-control, pest-control-vernal | "black widow in garage" ID + risk | drafted earlier |
| Brown Recluse | brown-recluse | C myth | (statewide concern) | none (schema-enforced) | "brown recluse Utah" myth correction | drafted earlier |
| Carpenter Ants | carpenter-ant | A | statewide | ant-control, vernal | wood damage / big ants indoors | high |
| Pavement Ants | pavement-ant | A | statewide | ant-control, vernal | kitchen ant trails / slab homes | high |
| Harvester Ants | harvester-ant | A | statewide | ant-control | red mound ants / "fire ant" searches | high — absorbs fire-ant intent honestly |
| Termites (category) | termites | A category | statewide S>N | termite-control | "does Utah have termites" / mud tubes | high |
| German Cockroach | german-cockroach | A | statewide | southern-utah hub, vernal | kitchen roach infestations | high |
| Turkestan Cockroach | turkestan-cockroach | B informational | southwest-utah | none | emerging SW species, watch-framing | medium |
| Western Yellowjacket | yellow-jacket | A | statewide | wasp-removal, vernal | late-summer wasp/nest problems | high |
| European Paper Wasp | paper-wasp | A | statewide | wasp-removal | umbrella nests / yellowjacket confusion | high |
| Arizona Bark Scorpion | arizona-bark-scorpion | **B informational** (reclassified in QA) | southwest-utah | **none** — routes to desert-hairy | the accuracy flagship — real range + lookalikes | high |
| Desert Hairy Scorpion | desert-hairy-scorpion | A | southwest-utah | scorpion-control | "huge scorpion St. George" | high |
| Northern Scorpion | northern-scorpion | A | statewide (Basin-first) | pest-control-vernal | "scorpions in Vernal?" — zero-competition | high |
| Deer Mouse | deer-mouse | A | statewide (Basin-first) | rodent-control-vernal, vernal | hantavirus-safe cleanup + rural mice | highest |
| House Mouse | house-mouse | A | statewide | rodent-control-vernal | town mice / trap questions | medium |
| Roof Rat | roof-rat | A | southwest-utah | southern-utah hub | attic rats St. George — "emerging" hedged | medium |
| Hobo Spider | hobo-spider | A | uintah-basin/northern | pest-control-vernal | myth-corrected fall wanderer | high |
| Elm Seed Bug | elm-seed-bug | A | uintah-basin | pest-control-vernal | summer invader, Basin-documented | high — low competition |
| Boxelder Bug | boxelder-bug | A | statewide | pest-control-vernal | fall wall swarms | medium |

All 19: `published: false`.

## 3. Held / Excluded Candidates

| Entity | Status | Reason | Trigger to revisit |
|---|---|---|---|
| Fire ants | excluded (unchanged) | Owner decision Aug 2026: no myth page for now; exclusion record stands in pests.ts. Harvester-ant page absorbs the lookalike intent | deliberate editorial decision |
| Woodrat / pack rat | HOLD | Needs business confirmation that Wernex traps them under the rodent line | owner confirms service |
| Mosquitoes | excluded from commercial | Both service areas inside taxpayer-funded abatement districts | never as commercial; optional referral page later |
| Carpenter bee | HOLD (Wave 2) | Legitimate but SW-only; Wave 2 per matrix; owner confirmed SW-only scope | Wave 2 |
| Wolf spider | HOLD (Wave 2) | Real entity, but lower priority and no usable image (spiders tile photo is a jumping spider); hobo + widow pages carry the spider-ID load | Wave 2 with imagery |
| Bed bug species page | HOLD | Would cannibalize /bed-bug-treatment-southern-utah | only with a distinct informational angle |
| EAB / aphids / tree borers | excluded (unchanged) | Standing exclusions, evidence recorded in pests.ts | EAB: confirmed Utah detection |
| Oriental/American/brown-banded roach, Norway rat, mud dauber, bald-faced hornet, flies, silverfish, earwigs, fleas, ticks, voles, camel spider, BMSB, honey bee | Wave 2 backlog | Matrix-classified, not Wave 1 | Wave 2 |

## 4. Content Architecture

Unchanged three-layer model (see `docs/pest-entity-system.md` §1). Wave 1 adds:

- **1 category deep-dive** (`termites`) — Layer 1, breadcrumbs Home → Pest Library → Termites.
- **16 species pages** — Layer 2 (`speciesOf` = category), flat URLs.
- **2 standalone entities** (`elm-seed-bug`, `boxelder-bug`) — they are true bugs, not beetles,
  so rather than mis-file them under the "beetles" tile their `parentCategory` is self-referential
  (allowed by the route's knownCategories check). The route template got one cosmetic tweak:
  standalone pages label as "Utah Pest Guide" instead of "Pest Category".

Every page carries the schema-enforced substance: `utahDistribution` (≥80 chars of real
geography), `regions`, `intent`, ≥3 FAQs, seasonality, and a body written per-species (no
shared boilerplate; each page's sections differ).

## 5. Internal Link Graph

- Confusion pairs are bidirectional: carpenter-ant↔termites, elm-seed-bug↔boxelder-bug,
  yellow-jacket↔paper-wasp, german↔turkestan, house-mouse↔deer-mouse↔roof-rat, the three
  scorpions to each other, hobo→black-widow/brown-recluse.
- Treatable pages link services via `relatedServices` (verified real pages only). Regional
  honesty: SW pests → St. George pages; Basin pests → Vernal pages; roof-rat → southern-utah hub
  (not the Vernal-branded rodent page).
- Myth page (brown-recluse) links only library destinations — schema + route double-enforced;
  verified in built HTML (no commercial links present).
- Deferred to publish time (documented in strategy doc §6): pests.ts tile `href` updates,
  "pests covered" blocks on service pages, location-page links.
- Bug Identifier readiness: all 19 slugs will resolve through `matchPest()` once tile hrefs
  flip at publish; no Worker dependency taken.

## 6. Existing-Page Conflicts

Documented with exact text in **`docs/legacy-page-corrections.md`** (12 items):
Group A fire-ant corrections (6 pages), Group B brown-recluse corrections (2 pages),
Group C bark-scorpion positioning (scorpion-control page, llms.txt, hurricane page — needs
business sign-off), Group D chat-widget mosquito reply. Not applied — plan only, per scope.

## 7. SEO / Cannibalization Audit

| New URL | Nearest existing URL | Why both exist |
|---|---|---|
| /pest-library/carpenter-ant, pavement-ant, harvester-ant | /ant-control-st-george | Species ID/education vs. St. George service conversion; species pages feed the service page |
| /pest-library/termites | /termite-control-st-george | "Do I have termites / does Utah have them" vs. "hire termite control in St. George"; entity page carries the drywood-is-rare accuracy content the service page shouldn't |
| /pest-library/black-widow, hobo-spider | /spider-control-st-george | Species risk/ID vs. service; hobo is northern-Utah content the St. George page never covered |
| /pest-library/arizona-bark-scorpion, desert-hairy-scorpion, northern-scorpion | /scorpion-control-st-george | Range-accuracy + species ID vs. service; northern-scorpion targets Vernal intent no existing page touches |
| /pest-library/deer-mouse, house-mouse, roof-rat | /rodent-control-vernal | Disease-safety/ID/species vs. trapping-exclusion service; roof-rat is SW-specific and new |
| /pest-library/german-cockroach, turkestan-cockroach | (none — no roach page exists) | Fills a genuine gap; general pest-control pages get the service link |
| /pest-library/yellow-jacket, paper-wasp | /wasp-removal-st-george | Species/season education vs. removal service |
| /pest-library/elm-seed-bug, boxelder-bug | /pest-control-vernal (mentions box elder bugs) | Dedicated ID/timing content; Vernal page keeps local-service intent |
| /pest-library/brown-recluse | /spider-control-st-george | Myth correction vs. service — after Group B corrections they agree |

Risk level: low across the board — every pair splits informational vs. commercial-local intent,
titles share no pattern with service pages, and no location-x-pest pages were created.

## 8. Technical Changes

- **New:** 17 drafts in `src/content/pest-library/`; `docs/legacy-page-corrections.md`; this report.
- **Edited:** `src/pages/pest-library/[slug].astro` (standalone-entity label only);
  `src/data/pests.ts` (two alt-text accuracy fixes: wasps tile is a European paper wasp, spiders
  tile is a jumping spider — same class of fix as the earlier fire-ant photo correction);
  `src/content/pest-library/brown-recluse.md` (+hobo-spider relatedPest).
- **No new dependencies. No Cloudflare, canonical, sitemap, or URL changes.**
- Image verification: every hero image was visually inspected. Where no species-accurate photo
  exists, pages use honest comparison alts (deer-mouse shows a labeled house mouse for contrast;
  bark-scorpion alt states the pictured scorpion's pincers differ) or no image (elm-seed-bug).

## 9. Validation

- `npm run build` → **28 pages**, no pest-library routes, sitemap unchanged. dist left in production state.
- `PEST_PREVIEW=1 npm run build` → **47 pages** = 28 + exactly the 19 drafts.
- Assertion script (scratchpad `validate-pests.mjs`) — ALL PASSED: no excluded pest builds; all
  19 sources `published: false`; unique slugs; canonicals exact, extensionless, no trailing
  slash; og:url = canonical; JSON-LD parses with FAQPage and zero `.html` URLs; draft banner on
  every page; all internal links resolve in-build; myth page links no commercial pages; all
  referenced images exist; static sitemap = 28 extensionless URLs with no pest species entries.
- Route guardrails (excluded-slug, orphaned parentCategory) exercised by both builds.

## 10. Production Safety

Confirmed: production build 28 pages · all pest URLs unpublished (`published: false`, gate
intact) · `public/sitemap.xml` untouched at 28 URLs · canonical system untouched · Cloudflare
untouched · no existing page deleted or mass-rewritten (legacy corrections are a plan document).

## 11. Business Decisions Required

1. **Woodrat/pack rat** — does Wernex trap them? (A-class page vs. B/hold.)
2. **Group C bark-scorpion positioning** — approve the hedged marketing wording in
   `docs/legacy-page-corrections.md` §9–11 before it's applied.
3. **Legacy corrections Groups A/B/D** — factual; approve to apply as a batch.
4. **Bug Identifier Worker** — still a separate infrastructure project; entity mapping is ready.
5. **Fire-ant myth page** — remains off the table until deliberately revisited.
6. **Carpenter bee** (SW-only) — confirm the service claim scope before its Wave 2 page.

New questions raised by the QA review:

7. **Does Wernex offer cockroach control as a service line?** The site has no cockroach service
   page, no cockroach `serviceType`, and no cockroach entry in `llms.txt` — cockroaches appear
   only as an incidental noun and in one testimonial. The draft now scopes roach work under the
   residential/commercial line, which is defensible, but if roaches are a real service the site
   should say so somewhere.
8. **Does Wernex treat scorpions in the Uintah Basin?** `llms.txt` scopes scorpion control to
   "Southern Utah," and the Vernal page's pest list omits scorpions entirely. The
   `northern-scorpion` page has been reworded to describe Basin perimeter service rather than a
   scorpion program, but this needs a yes/no — it affects both the page and the Vernal page.
9. **Deer mouse hantavirus citation.** Attach a live Utah DHHS source to the fatality figure
   before publishing; it is the most consequential number in the library.
10. **Pest photography budget.** See the image debt noted in §12 — at minimum, correct photos for
    the deer mouse, roof rat, hobo spider, bark scorpion, and the three ant species.

## 12. QA Pass (post-authoring review)

Three independent adversarial reviews were run over all 19 drafts — claim-checking against the
evidence base, editorial quality/boilerplate, and service-claim + cannibalization auditing against
the live site. They found real problems. Fixes applied:

### Integrity fixes (highest severity)

- **Intent misclassification — `arizona-bark-scorpion`.** The page argued the species is not
  documented in the St. George area while being tagged `intent: treatable` with
  `relatedServices: /scorpion-control-st-george` — i.e. it routed readers to a sales page for a
  pest it had just told them they probably don't have. That is precisely the bait-and-switch the
  intent gate exists to prevent, reached by declaring the wrong intent (the schema only blocks
  `myth`). Now `intent: informational`, no `relatedServices`, neutral CTA verified in the built
  HTML. `desert-hairy-scorpion` remains the honest commercial St. George scorpion page, and the
  bark-scorpion page routes to it through `relatedPests`, so the funnel still works — truthfully.
- **Invented service claims, 7 pages.** I had written treatment methods with no evidence anywhere
  on the site: gel baits / insect growth regulators / sticky-trap monitoring / multi-unit programs
  (german-cockroach — note there is *no* cockroach service line at all), a "Basin scorpion
  program" (northern-scorpion — the Vernal page lists six pests and scorpions is not among them),
  nighttime trail-tracing and wall-void injection (carpenter-ant), a trapping/lure program
  (yellow-jacket), a June-scheduled treatment window (elm-seed-bug), glue-board monitoring as a
  service (hobo-spider), and an implied rodenticide policy (roof-rat). All seven rewritten to stay
  inside what `llms.txt`, `services.astro`, and the service pages actually evidence.
- **Bark-scorpion page offered service in Kane County**, which is not a Wernex service area
  anywhere else in the repo. Removed.

### Factual corrections

- **`brown-recluse`: cellar spiders were described as having six eyes.** They have eight; six is
  the recluse's diagnostic. As written, the page handed readers a false confirmation of the exact
  misidentification it exists to correct — the worst possible error on that page. Fixed.
- **`black-widow`: "spiky" egg sacs** are the brown widow's diagnostic; western black widow sacs
  are smooth and pear-shaped. Fixed in the `signs` list, where it was offered as a field ID.
- **`northern-scorpion`: "widest range of any scorpion in North America"** — contestable, and the
  em-dash construction made USU appear to be its source. Corrected to "ranges farther north than
  any other," which is the actual claim. Unhedged "the only scorpion" softened to "effectively"
  in three places across two pages.
- **`pavement-ant`**: USU's *northern Utah* finding had been stretched to statewide superlatives in
  the title, description, summary, and an FAQ while the `utahDistribution` field was correctly
  hedged. All four scoped to northern Utah.
- **`carpenter-ant`**: color variation is between Utah's ~12 species, not within one. Fixed.
- **`roof-rat`**: an unsupported claim that Norway rats are "uncommon in most of Utah" (which also
  pre-contradicted the planned Wave 2 Norway rat page) removed; a `signs` line contradicting the
  page's own FAQ about mice in attics fixed; and the evidence standard made explicit — the page
  now states plainly that local reporting is not a university distribution record, matching the
  standard `turkestan-cockroach` applies.
- **`deer-mouse`**: the hantavirus fatality figure was stated more precisely in the FAQ than the
  body supported and carried an internally inconsistent date. Reworded; **a live Utah DHHS citation
  must be attached before this page publishes** — it is the one number here that could change a
  reader's behavior.
- **`elm-seed-bug`**: "Ten-Year-Old Pest Problem" — 2014 to 2026 is twelve years. Retitled.
- **`black-widow` / `brown-recluse` conflict**: "Utah's only medically significant spider" vs. the
  desert recluse's "medically significant" venom. Now uses USU's formulation, "only spider of
  major medical concern," consistently.

### Tone and quality fixes

- Removed sales closes from inside FAQ answers (`desert-hairy`), competitor jabs dressed as
  epistemics (`turkestan-cockroach`, and the `arizona-bark-scorpion` meta description, which put
  "narrower than most St. George marketing suggests" into the SERP snippet), and unearned puffery
  ("advanced" Termidor → the actual reason it works: it is non-repellent and transfers through
  the colony).
- Replaced four weak FAQs that restated the page body or dodged their own question, with
  questions people actually search: how to safely clear a widow from a window well; what to do
  after multiple yellowjacket stings; whether hobo spiders can climb into a bed; what happens if
  a pet is bitten; whether elm seed bugs return next year; and a WDI-inspection question for
  home buyers.
- Rewrote `house-mouse`'s signs section, which had reproduced the live `rodent-control-vernal`
  copy nearly verbatim ("fresh droppings are dark and soft; old ones gray and crumbly").
- De-duplicated the carpenter-ant/termites swarmer-ID checklist (kept on `termites`, which owns
  that query; carpenter-ant keeps the gallery comparison and links across).
- Added geographically-honest second service links where `regions: statewide` pointed at only one
  branded page (harvester-ant, paper-wasp → Vernal; house-mouse → Southern Utah hub).

### Known remaining debt (not fixed — recommend a dedicated pass)

The editorial reviewer's strongest finding is systemic and I have only partly addressed it: the
19 pages share a template signature — nearly all had exactly four FAQs and four H2 sections in
the same order, 16 closed with a bulleted checklist, the `treatment` field follows one
"[aphorism] + Wernex [verbs] a, b, c" formula, 11 titles use the identical
`[Pest] in [Place] — [Noun], [Noun] & [Noun]` construction, and the prose leans hard on em dashes
and on "genuinely/honestly/actually." Five scorpion/spider pages share one detect→barrier→
prey-base→seal treatment paragraph, and the UV-flashlight explainer appears four times on each of
three scorpion pages. I varied FAQ counts, cut the worst duplications, and rewrote the most
templated answers, but **a deliberate de-templating pass before publication would materially
improve this set** — the fix is to move shared content (the UV explainer, the shared scorpion
protocol) onto category pages and let species pages carry only what differs.

Also unresolved: the shared-stock-photo problem. Three ant pages share one ant photo, three
scorpion pages one scorpion photo, three rodent pages one mouse photo, and four pages carry alt
text conceding the animal shown is a different species. The alts are honest, but a library whose
premise is accurate identification should not illustrate ID pages with the wrong animal.
**Recommend commissioning or licensing correct photos for at least deer-mouse, roof-rat,
hobo-spider, arizona-bark-scorpion, and the three ant pages before publication.**

### Mechanical fixes

- **Image honesty, 3 pages.** `turkestan-cockroach` and `brown-recluse` were silently falling
  back to their category tile photo with a generic alt — on those pages an unlabeled photo reads
  as "this is the species," which is the misrepresentation the image rule exists to prevent. Both
  now carry explicit disclaiming alts. `hobo-spider`'s alt claimed jumping spiders are "regularly
  mistaken for hobo spiders," which overstated a real confusion pattern (the actual lookalikes are
  funnel weavers and giant house spiders); reworded. This also resolves an inconsistency — wolf
  spider was held partly for lacking an honest image while hobo used that same image.
- **Prose artifacts, 9 spots.** Mid-sentence hyphens left behind by the YAML colon fixes
  (`the science has moved - USU notes…`) restored to em dashes across 4 files.
- **Metadata truncation, 7 fields.** Two titles (86 and 82 chars) and five descriptions
  (205–217 chars) would have truncated in results; trimmed to ~55–70 and ~165–195.
- **Silent-failure check.** `relatedPests` slugs that resolve to nothing are dropped by the route
  without erroring. Verified all resolve — 19 to draft pages, 12 to live category tiles by design.

Publish-risk ranking for staged rollout (lowest risk first): deer-mouse, northern-scorpion,
elm-seed-bug (the Basin probe — no existing page competes) → house-mouse, boxelder-bug,
paper-wasp, hobo-spider → pavement-ant, carpenter-ant, german-cockroach, yellow-jacket,
desert-hairy-scorpion, termites, house-mouse → **blocked until the legacy corrections land**:
harvester-ant, brown-recluse, arizona-bark-scorpion (each directly contradicts a live page; the
drafts are correct and the live pages are wrong, so fix the live pages, not the drafts)
→ roof-rat, turkestan-cockroach (weakest evidence base; see below).

**Standing recommendation on turkestan-cockroach:** it is the weakest of the 19 against the
"why does this deserve its own URL" test — an informational page about a species with no Utah
record. It is honest and useful as an ID resource, but it is the one page I would be comfortable
holding entirely. Suggest publishing it last or not at all in Wave 1.

## 13. Recommended Next Step

Human QA of the 19 drafts in a `PEST_PREVIEW=1` build (or `astro dev`), focusing on the
geographic claims and the commercial/informational classifications. On approval: apply legacy
corrections (A/B/D, then C after sign-off), then publish in two waves — a small probe first
(suggest: deer-mouse, northern-scorpion, elm-seed-bug — Basin-first, zero-cannibalization
pages) once the canonical measurement window closes, following the publish-time checklist in
`docs/pest-entity-system.md` §6, then the remainder after the probe pages index cleanly.
