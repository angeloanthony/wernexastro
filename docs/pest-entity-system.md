# Wernex Utah Pest Entity System — Architecture & Wave 1 Plan

_Prepared Aug 27, 2026. Status: built locally, nothing published. The canonical-URL
consolidation measurement window is open — no new public URLs until explicitly authorized._

_Update, later Aug 27: Wave 1 authored — 19 drafts, all `published: false`. See
`docs/wave-1-report.md` (inventory, holds, validation) and `docs/legacy-page-corrections.md`
(exact fire-ant / brown-recluse / bark-scorpion corrections, not yet applied)._

_Update, Aug 27 (verification pass): all 19 drafts re-verified against fetched primary
sources. Evidence records with verbatim quotes now live in **`docs/pest-evidence.md`**; the
validator is now an in-repo artifact at **`scripts/validate-pests.mjs`**. The schema gained a
citation requirement and two intent guardrails (§1 below). Legacy corrections Groups A/B/C/D are
APPLIED in the working tree — the doc is now a record of what changed, not a plan. Recommended
publishable Wave 1 is 18: `turkestan-cockroach` is held (no Utah record)._

## 1. Architecture

Three layers, two of which live at `/pest-library/<slug>`:

- **Layer 1 — categories** (`ants`, `spiders`, `scorpions`, …): entry has no `speciesOf`.
- **Layer 2 — species/entities** (`black-widow`, `carpenter-ant`, …): `speciesOf` = its category slug.
  URLs stay flat (`/pest-library/black-widow`, not `/pest-library/spiders/black-widow`) — the
  hierarchy is expressed by breadcrumbs, `speciesOf`, and internal links, so slugs never need to
  move if the taxonomy is reorganized.
- **Layer 3 — commercial local intent**: the existing hand-authored `/*-control-*` pages. Pest
  pages link to them via `relatedServices`; they are never duplicated or replaced.

Sources of truth:

- `src/data/pests.ts` — the tile grid, ItemList JSON-LD, search index, and the excluded-pest
  decision record.
- `src/content/pest-library/*.md` — one file per pest page (schema in `src/content.config.ts`).
- `src/lib/pestIndex.ts` — builds the client-facing entity index consumed by the search box and
  (eventually) the Bug Identifier result mapping.
- `src/pages/pest-library/[slug].astro` — the dynamic route. Build-time guardrails throw if an
  excluded pest gains a page or a `parentCategory` points at nothing.

### Publishing gate

Every entry has `published: false` by default. Drafts build **only** in `astro dev` or a local
`PEST_PREVIEW=1 npm run build`. A normal production build (what Cloudflare Pages runs) generates
no route, no sitemap entry, nothing — so deploying unrelated work during the measurement window
cannot leak a pest URL. Verified: production build = 28 pages exactly; preview build = 28 + drafts.

### Intent model (enforced by zod)

- `treatable` — Wernex services it; commercial framing honest; `relatedServices` allowed.
- `informational` — real Utah pest, no service line; neutral CTA only. `relatedServices` is
  **rejected by schema** (added Aug 2026 — see below).
- `myth` — searched-for but not established in Utah; `relatedServices` is **rejected by schema**,
  and the route also refuses to let `relatedPests` fall through to a commercial tile href.

### Schema guardrails (all five earn their place — each closes a hole this project fell into)

1. `myth` may not set `relatedServices`.
2. `informational` may not set `relatedServices`. **This was the gap that produced the worst
   finding of the previous QA:** `arizona-bark-scorpion` reached a scorpion-service CTA for a
   species it had just argued is not documented in St. George, simply by declaring
   `intent: treatable`. The schema policed only `myth`, so nothing stopped it.
3. `treatment` may be set only on `treatable` — it renders under "How Wernex Treats X", so it is
   a service claim regardless of what the intent field says.
4. `published: true` requires **≥2 entries in `sources`**. A live URL asserting where a species
   lives in Utah and whether it can hurt you must be checkable.
5. `image` requires `imageAlt`; `title` ≤65 and `description` 110–165 characters so metadata
   cannot ship truncated.

### Fixed during this work

- **`content.config.ts` was never being loaded.** Astro 5/6 read the content config from
  `src/content.config.ts`; the file sat at the project root, so every schema and guardrail in it
  was inert. Moved (`git mv`) — collections now actually load and validate.
- `llms.txt` no longer claims fire ants (Ant Control) or brown recluse (Spider Control).
- Pest Library "Featured Pest" section showed the fire-ant photo labeled as carpenter ants;
  now uses the ant close-up image with accurate alt text.

## 2. Research summary (verified against USU Extension / UDAF / USDA / state .gov)

Key accuracy findings that shape the content:

- **Brown recluse**: USU is unambiguous — does not occur in Utah. Utah's only recluse is the
  desert recluse (*Loxosceles deserta*), Washington County only, seldom indoors. → myth page.
- **Fire ants**: red imported fire ant NOT in Utah (USU). Most Utah "fire ant" reports are
  harvester or field ants; native southern fire ant possibly marginal at the Mojave edge. → myth
  page candidate (see §5 approval item).
- **Arizona bark scorpion**: USU's Utah scorpion fact sheet recognizes 9 Utah species and gives
  this one a single Utah location — **Kane County**. **No .gov/.edu source confirms an established
  St. George population.** Note the "Colorado River corridor" phrasing used in earlier drafts was
  *not* in the fetched source and has been removed. USU also names the species
  *Centruroides exilicauda*; current usage calls the Arizona bark scorpion *C. sculpturatus*.
  Site copy ("bark scorpion specialists for Southern Utah") is now hedged; the page title keyword
  remains an owner decision.
- **Hobo spider**: USU — no significant evidence of necrotic bites; write with myth-correction
  framing.
- **Mosquitoes**: both service areas sit inside taxpayer-funded abatement districts (Uintah MAD,
  Southwest MAD) that take free service requests → no commercial mosquito page; informational
  only. (The chat widget's "mosquito abatement program" reply overclaims — see §5.)
- **Carpenter bees**: *Xylocopa californica* occurs in Washington/Kane/Garfield counties, rare
  northward — the existing "carpenter bee" service claim is sound for St. George only.
- **Turkestan cockroach**: dominant across the urban Southwest, but zero USU/.edu Utah
  establishment record — frame as "emerging, watch for it," never "dominant in St. George."
- **Roof rat**: real, recent St. George expansion, but documented only by local news — word as
  "recently reported in Washington County."
- **Termites**: USU says three types occur in Utah and the "subterranean termite is the most
  common type of termite in Utah"; "dampwood and drywood termites are both uncommon in Utah."
  **Corrected Aug 2026:** the south > north pressure gradient and the *R. tibialis* Interior-West
  range claim were **not** supported by any authoritative Utah source we could fetch, and have
  been removed from the page rather than hedged.
- **Deer mouse**: USU calls it a "known carrier of Hantavirus Pulmonary Syndrome"; Utah DHHS
  describes spread by "inhaling the virus, which is in the droppings, urine and saliva of infected
  rodents." Rural Uintah Basin outbuildings are classic exposure sites — the strongest
  disease-angle page in the library and a genuinely Vernal-first entity. **Corrected Aug 2026: the
  "~36% case fatality since 1987, Utah DHHS" figure could not be verified** — epi.utah.gov
  publishes no case count or CFR, and CDC case pages returned 403. All numbers were removed from
  the page. Attach a live CDC citation before publishing. Also corrected: USU describes deer-mouse
  ears as *smaller* than a house mouse's, contradicting the "larger eyes and ears" field mark the
  draft had used.
- Other confirmations: black widow statewide — USU's actual wording is "the most dangerous
  spiders to humans in Utah", **not** "the only spider of major medical concern", which three
  drafts had wrongly quoted;
  northern scorpion statewide incl. Uintah Basin; desert hairy scorpion Washington County;
  European paper wasp + western yellowjacket + bald-faced hornet statewide; pavement ant = northern
  Utah's most common pest ant; odorous house ant "emerging"; carpenter ants ~12 Utah spp.,
  genuine structural pests; German/Oriental/American cockroaches established; bed bugs "common in
  Utah" (USU); elm seed bug invasive since 2014, documented **to Duchesne County — the western
  Uintah Basin, not Vernal** (no Uintah County record found; the draft had overstated this),
  peaks in summer heat unlike boxelder's fall; boxelder bug classic fall invader;
  carpet beetles among Utah's most common indoor pests; Indian meal moth = Utah's top stored-food
  pest; fleas "not common in Utah" (dry climate — honest framing); Lyme risk in Utah very low
  (USU: 119 western blacklegged ticks tested, all negative).

Full per-species evidence records — verbatim quotes, per-claim verdicts, and the list of sources
that could not be reached — are in **`docs/pest-evidence.md`**. Each entry also carries its own
`sources` array in frontmatter, and the schema will not let it publish with fewer than two.

## 3. Candidate matrix (classification: A commercial · B informational · C myth · D exclude)

| Entity | Class | Regions | Notes |
|---|---|---|---|
| Black widow | A | statewide | drafted |
| Brown recluse | C | (statewide concern) | drafted; desert recluse nuance inside |
| Carpenter ant | A | statewide | WDI/structural tie |
| Pavement ant | A | statewide | most common Utah pest ant |
| Harvester ant | A | statewide | sting pest; fire-ant lookalike |
| Odorous house ant | A | statewide | Wave 2 |
| Field ants | B | statewide | Wave 2; lookalike feeder page |
| Velvety tree ant | B | statewide | Wave 2 or fold into carpenter ant |
| Fire ants | C | (SW concern) | needs pests.ts status decision — §5 |
| Termites (category, subterranean-deep) | A | statewide, S>N | drywood-is-rare section inside |
| Drywood termites | D as page | — | covered as section, not page |
| Desert subterranean termite (H. aureus) | D | — | not in Utah |
| Arizona bark scorpion | A | southwest-utah | hedged range copy required |
| Northern scorpion | A | statewide/basin | the Vernal scorpion |
| Desert hairy scorpion | A | southwest-utah | the St. George scorpion |
| Hobo spider | A | statewide | myth-correction tone |
| Wolf spider | A | statewide | reassurance tone |
| Camel spider / solifugid | B | statewide | Wave 2 |
| Cellar spiders / funnel weavers | B | statewide | Wave 2; feeds recluse myth page |
| German cockroach | A | statewide | |
| Oriental cockroach | A | statewide | Wave 2 |
| American cockroach | A | statewide | Wave 2, commercial angle |
| Turkestan cockroach | B | southwest-utah | hedged; no USU record |
| Brown-banded cockroach | B | statewide | Wave 2 low priority |
| Bed bug | A | statewide | service page exists — species page deferred to avoid cannibalization |
| Paper wasp (European) | A | statewide | |
| Yellowjacket (western) | A | statewide | |
| Bald-faced hornet | A | statewide | Wave 2 |
| Mud dauber | A (low-threat framing) | statewide | Wave 2 |
| Carpenter bee | A | southwest-utah only | Wave 2 |
| Honey bee swarm | B (referral) | statewide | Wave 2; beekeeper referral per UDAF |
| Tarantula hawk / velvet ant | B | southwest-utah | Wave 2+ curiosity/reassurance |
| House fly | A | statewide | Wave 2 |
| Cluster fly | A | statewide | Wave 2; fall exclusion |
| Drain / fruit flies | B | statewide | Wave 2 |
| Mosquitoes | B only | statewide | abatement-district referral; no commercial page |
| House mouse | A | statewide | |
| Deer mouse | A | statewide, basin-first | hantavirus angle |
| Norway rat | A | statewide | Wave 2 |
| Roof rat | A | southwest-utah | "recently reported" hedging |
| Voles | B | statewide | yard pest, adjacent to excluded landscape line |
| Rock squirrel | D (refer out) | — | no wildlife service line |
| Woodrat / pack rat | B pending | — | A only if Wernex will trap them — §5 |
| Boxelder bug | A | statewide | |
| Elm seed bug | A | statewide incl. basin | invasive, low-competition topic |
| BMSB | B | Wasatch Front | not established in either service area |
| Earwig / crickets / centipedes / millipedes | A | statewide | Wave 2 |
| Silverfish & firebrat | A | statewide | Wave 2; firebrat = the hot-climate one |
| Carpet beetle / Indian meal moth / clover mite | A | statewide | Wave 2 |
| Fleas | A (honest: uncommon in Utah) | statewide | Wave 2 |
| Ticks | B w/ Lyme-myth correction | statewide | Wave 2 |
| Emerald ash borer / aphids / tree borers | D | — | standing exclusions, unchanged |

## 4. Wave 1 (recommended ~18, conservative)

Tier 1 (author first): black-widow ✔ drafted, brown-recluse ✔ drafted, carpenter-ant,
pavement-ant, german-cockroach, yellow-jacket, paper-wasp, termites (category deep-dive),
deer-mouse, house-mouse, arizona-bark-scorpion, northern-scorpion.

Tier 2: harvester-ant, hobo-spider, wolf-spider, desert-hairy-scorpion, roof-rat, elm-seed-bug,
boxelder-bug, fire-ants (myth — pending §5 decision).

Geographic honesty is the differentiator: northern-scorpion and deer-mouse are Vernal-first
pages; bark scorpion / desert hairy / roof rat are St. George-first; nothing pretends to be both.

### Internal link graph (each link needs a semantic reason)

- Hub grid tile → its page (update `href` in pests.ts at publish time).
- Category page ↔ its species (`speciesOf` renders the species list automatically).
- Species → service pages via `relatedServices` (treatable only).
- Myth pages → real lookalike pest pages only — never services (double-enforced).
- Service pages → pest pages: add a short "Pests covered" link block to
  `/spider-control-st-george`, `/ant-control-st-george`, `/scorpion-control-st-george`,
  `/termite-control-st-george`, `/rodent-control-vernal`, `/wasp-removal-st-george` at publish
  time (small addition, not a rewrite).
- Location pages → only geographically true pests (Vernal → northern scorpion, deer mouse,
  elm seed bug; St. George → bark scorpion, roof rat, desert hairy).

## 5. Items requiring human approval

1. **Fire-ants myth page vs. the excluded record.** `pests.ts` marks `fire-ants` excluded and the
   route guardrail (correctly) refuses to build a page for an excluded slug. Authoring the myth
   page requires deliberately re-classing that entry (excluded → myth entity, still no grid tile,
   no commercial framing). Recommended, but it reverses a recorded decision — human call.
2. **Existing-copy contradictions (do NOT publish conflicting pest pages before fixing).**
   Fire ants are asserted as local pests on: `ant-control-st-george` (heading, FAQ, JSON-LD),
   `pest-control-southern-utah`, `pest-control-santa-clara-ut`, `pest-control-hurricane-ut`,
   `pest-control-ivins-ut`, `pest-control-laverkin-ut`. Brown recluse is asserted on
   `spider-control-st-george` (card, FAQ, JSON-LD) and `pest-control-southern-utah`. These
   directly contradict USU and would contradict our own myth pages. Recommend a focused
   accuracy pass on those pages before or with Wave 1 publication.
3. **Bark-scorpion marketing claim** ("bark scorpion specialists" for St. George) — hedge to
   match USU range data when scorpion pages publish.
4. **Chat widget mosquito reply** in `public/script.js` claims a "mosquito abatement program"
   Wernex has no service page for.
5. **Woodrats/pack rats**: A-class only if Wernex actually traps them under the rodent line.
6. **Bug Identifier upload flow is dead code**: `identifyBug*`/`handleFileSelect*`/`switchTab`
   are referenced by onclick attributes on `/bug-identifier` and `/pest-library` but defined
   nowhere in the repo or its git history — the buttons throw. Restoring it needs the Cloudflare
   Worker endpoint (not in repo). When rebuilt, map results through `matchPest()` in
   `src/lib/pestIndex.ts` → pest page → service CTA, instead of dumping users at /contact.

## 6. Publish-time checklist (per page, when authorized)

1. Flip `published: true`.
2. Update the entity's `href` in `src/data/pests.ts` to `/pest-library/<slug>` (tile + search +
   ItemList follow automatically); add aliases if needed.
3. Add the URL to **`public/sitemap.xml`** (the static file robots.txt points at) — the
   auto-generated `sitemap-index.xml` picks it up on its own.
4. Consider an llms.txt "Pest Library" line for flagship pages.
5. Verify: clean URL 200, `.html` 308, trailing-slash 308, canonical self-referencing.
