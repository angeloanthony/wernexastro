# Wernex Pest Library — Candidate Matrix

_Built Aug 28, 2026. Branch `pest-wave-1`, HEAD `7bbb744`, working tree clean at start and at finish
except for this file._

**This is a research inventory, not a publication plan.** No pest URL was created, no page was
authored or modified, no `published` flag was changed, no sitemap or canonical or metadata was
touched, and the Bug Identifier was not modified. Production remains **28 pages** (verified by
`npm run build` during this pass — see §18).

**There is no target entity count.** The number that falls out of the gates below is the number.
Nothing here was padded to reach 150, 105, or any other figure.

---

## 1. Repository state at start

| | |
|---|---|
| Branch | `pest-wave-1` |
| HEAD | `7bbb744` — _docs(evidence): record unresolved pavement-ant source discrepancy_ |
| Working tree | clean (`git status --porcelain` empty) |
| Uncommitted changes | none |
| Production page count | **28** (`npm run build`; no `/pest-library/<slug>` route emitted) |
| Published pest entities | **0** — all 19 drafts in `src/content/pest-library/` are `published: false` |

The publishing gate in `src/content.config.ts` + `src/pages/pest-library/[slug].astro` is intact:
drafts build only under `astro dev` or `PEST_PREVIEW=1`.

---

## 2. Method, and the order the gates were applied

The funnel was cost-ordered exactly as instructed. Cheap gates first, external research last, only
on survivors.

1. **Recount the universe** from the actual source, not from the previous "~105" estimate (§3).
2. **Gate 3 — does Wernex actually service this?** — answered from **first-party Wernex service
   copy in this repository only** (§4). `llms.txt` was deliberately excluded as a service source
   and used only as a cross-check (§5).
3. **Assign every entity a Gate-3 status** (§6), including honest non-answers.
4. **Research survivors** against authoritative sources (§7 onward).

### Research-depth convention (mandatory, §6 of the brief)

| Value | Meaning |
|---|---|
| `universe` | Entity exists in the starting universe and has been Gate-3 assessed. **External Utah evidence was NOT fetched or verified.** Never present these as researched. |
| `verified` | An authoritative source was actually fetched and reviewed, and it supports the specific claim recorded in that row. |

Two things this convention deliberately does **not** permit:

- A row is not `verified` merely because the entity appears in a Utah publication. Where the fetched
  USU page states no distribution finer than "USU documents this as a Utah structural/urban pest",
  the **Geographic scope** column says exactly that and nothing more.
- A search-result snippet is not a source. Two snippets encountered during this pass asserted things
  the fetched pages did not contain (see §16.4). Every quotation below came out of a page or PDF
  fetched in this session, or out of `docs/pest-evidence.md` (fetched Aug 27 and recorded there).

---

## 3. The universe, recounted

The previously-cited "~105" is **not** correct, and the nine category names in the brief come from a
real source: USU Extension's **Urban Pest Guide** (School IPM structural pest ID guide). The guide
moved — `extension.usu.edu/pests/schoolipm/...` now 307s to a `/planthealth/schoolipm/...` path that
404s. Its live location is:

> **USU Extension, _Urban Pest Guide_** —
> <https://extension.usu.edu/planthealth/ipm/structural-pest-id-guide/index.php>

All 95 entry pages were fetched from that index in this session and parsed locally.

### Universe A — USU Urban Pest Guide: **95 distinct entries**

| Category (verbatim heading) | Entries |
|---|---|
| Ants | 9 |
| Biting Insects | 5 |
| Cockroaches | 4 |
| Flies | 14 |
| Nuisance Pests | 20 |
| Stored Product Pests | 10 |
| Spiders | 12 |
| Stinging Insects | 9 |
| Vertebrate Pests | 12 |
| **Total** | **95** |

Full enumeration:

- **Ants (9):** Argentine Ant · Carpenter Ant · Field Ant · Harvester Ant · Pavement Ant · Odorous
  House Ant · Pharaoh Ant · Pyramid Ant · Velvety Tree Ant
- **Biting Insects (5):** Bed Bug · Bird Mites · Head Lice · Masked Hunter · Mosquitoes
- **Cockroaches (4):** American · Brown Banded · German · Oriental
- **Flies (14):** Blow Flies · Cluster Flies · Crane Flies · Drain Fly · Face Fly · Flesh Flies ·
  Fruit Flies · Fungus Gnats · Horse and Deer Flies · House Fly · Lesser House Flies · Phorid Flies ·
  Black Soldier Fly · Stable Fly
- **Nuisance Pests (20):** Army Cutworm & Miller Moth · Booklice & Psocids · Boxelder Bug · Brown
  Marmorated Stink Bug · Carpet Beetles · Clover Mite · Crickets · Elm Leaf Beetle · Elm Seed Bug ·
  False Chinch Bug · Ground Beetles · Isopods · Millipedes & Centipedes · Red Fire Bug · Root
  Weevils · Silverfish & Firebrats · Springtails · Subterranean Termite · Western Conifer Seed Bug ·
  Western Leaf-footed Bug
- **Stored Product Pests (10):** Bean & Cowpea Weevils · Cigarette Beetle · Dark & Yellow Mealworms ·
  Drugstore Beetle · Grain Beetle · Granary Weevil · Indian Meal Moth · Larder Beetle · Rice Weevil ·
  Warehouse Beetle
- **Spiders (12):** Black Widow · Cellar Spiders · Crevice Weaving Spider · Desert Recluse Spider ·
  Ground Spiders · Hacklemesh Weaver Spiders · Hobo & Grass Spiders · Jumping Spiders · Orb Weaver
  Spiders · Sac Spiders · Wolf Spiders · Woodlouse Spider
- **Stinging Insects (9):** Baldfaced Hornet · Bumble Bee · Honey Bee · Western Yellowjacket · Paper
  Wasps · Sand Wasps & Cicada Killers · Scorpions · Solitary & Ground Nesting Bees · Mason, Potter &
  Mud Dauber Wasps
- **Vertebrate Pests (12):** Bats · Deer Mouse · European Starling · Ground Squirrels · House/English
  Sparrow · House Mouse · Norway Rat · Pocket Gophers · Rock Pigeon · Skunks · Tree Squirrels · Voles

### Universe B — repo-side entities absent from the USU guide: **17**

These come from `src/data/pests.ts`, the Wave 1 drafts, and Wernex's own service copy. They are part
of the universe because the business or the site already treats them as entities, but their absence
from USU's Utah urban guide is itself evidence and is noted per row.

Earwigs · Fleas · Ticks · Roof Rat · Pack Rat / Woodrat · Carpenter Bee · Turkestan Cockroach ·
Brown Recluse (myth entity) · Arizona Bark Scorpion · Giant Desert Hairy Scorpion · Northern
Scorpion · Camel Spider (solifugid) · Fire Ants (recorded exclusion) · Drywood Termites · Emerald
Ash Borer (recorded exclusion) · Aphids (recorded exclusion) · Borers (recorded exclusion)

### **Total distinct universe: 112**

Of which 5 are pre-existing recorded exclusions carried forward unchanged (fire ants, EAB, aphids,
borers, drywood-termites-as-a-page).

### Redundancy found during the recount

| Apparent duplication | Resolution |
|---|---|
| USU "Scorpions" (1 entry) vs. the repo's 3 scorpion species | USU's single entry is the category; the 3 species are Universe-B rows beneath it. Not redundant. |
| USU "Desert Recluse Spider" vs. the repo's "Brown Recluse" | Different entities. Desert recluse is the real Utah animal; brown recluse is the search term. Both retained, one as a myth entity. |
| USU "Hobo & Grass Spiders" vs. "Hacklemesh Weaver" | USU already merges hobo+grass; hacklemesh is a separate lookalike. Merge candidate — see §9. |
| USU "Millipedes & Centipedes" (1 entry) vs. `pests.ts` `centipedes` tile | USU treats them as one entity. The tile should map to one page, not two. |
| `pests.ts` `beetles` tile | Not an entity — it spans carpet beetles + stored-product beetles + boxelder bug. Grab-bag; see §9. |
| `pests.ts` `fleas-ticks` tile | Two entities with opposite evidence pictures. Should not share a page. |
| USU "Subterranean Termite" vs. repo `termites` category page | Same entity at different altitude. Not redundant; drywood/dampwood stay as sections. |

---

## 4. Gate 3 — first-party Wernex service evidence

This is the whole Gate-3 lookup. Every row is a verbatim quotation from a file in this repository.
Nothing else was accepted as proof of a service relationship.

| ID | Source | Verbatim | Pests explicitly named |
|---|---|---|---|
| E1 | `src/pages/services.astro:104` | "…an invisible barrier against pests — including ants, spiders, scorpions, wasps, and cockroaches common in the St. George and Washington County area." | ants, spiders, scorpions, wasps, **cockroaches** |
| E2 | `src/pages/services.astro` JSON-LD | Four `serviceType` values: Residential Pest Control · Commercial Pest Control · Termite Control · Rodent Control | (the four documented service lines) |
| E3 | `src/pages/pest-control-southern-utah.astro:160`, `ant-control-st-george` | "Barrier treatments and colony elimination for harvester ants, pavement ants, and carpenter ants across St. George and Washington County." | harvester, pavement, carpenter ant |
| E4 | `src/pages/spider-control-st-george.astro:116`, `pest-control-southern-utah.astro:163` | "eliminate black widows, wolf spiders, and other…"; "Targeted treatments for black widows, wolf spiders, and desert spiders" | black widow, **wolf spider**, "desert spiders" |
| E5 | `src/pages/wasp-removal-st-george.astro:116` | "We handle paper wasps, yellow jackets, mud daubers, and carpenter bees — removing active nests…" | paper wasp, yellowjacket, **mud dauber**, **carpenter bee** |
| E6 | `src/pages/wasp-removal-st-george.astro:202` | "For honeybees, we coordinate with local beekeepers for live relocation when possible." | honey bee — **relocation, not treatment** |
| E7 | `src/pages/rodent-control-vernal.astro:132` | "Effective against deer mice, house mice, **voles**, and rats." | deer mouse, house mouse, **vole**, rats |
| E8 | `src/pages/rodent-control-vernal.astro:292` | "…the occasional **pack rat** in barns, shops, and outbuildings. House rats are less common in the Basin than mice but do turn up." | pack rat |
| E9 | `src/pages/pest-control-washington-ut.astro:130` | "Full exclusion sealing, snap-trap and bait-station programs, and ongoing monitoring to keep mice and **pack rats** out permanently." | pack rat |
| E10 | `src/pages/pest-control-vernal.astro:186–192` | "Box Elder Bugs…"; "**Cluster flies, earwigs, silverfish**, and other occasional invaders show up with the seasons. A prevention plan handles them as part of routine service…" | boxelder bug, cluster fly, **earwig**, **silverfish** + a generic clause |
| E11 | `src/pages/termite-control-st-george.astro` | Termidor liquid barrier, WDI inspections, subterranean termites | subterranean termite |
| E12 | `src/pages/bed-bug-treatment-southern-utah.astro` | heat + targeted bed bug treatment | bed bug |
| E13 | `src/pages/scorpion-control-st-george.astro:52` | "Southern Utah homeowners encounter several scorpion species, most commonly the giant desert ha[iry]…" | scorpions, **desert hairy**, **bark scorpion** |
| E14 | `public/script.js:64` | "both the St. George area and the Uintah Basin are served by public mosquito abatement districts that respond to service requests." | mosquito — **referral out** |
| E15 | `pest-control-washington-ut.astro:99`, `pest-control-near-zion-national-park.astro:99` | "**Mosquitoes** — Seasonal pressure near the Virgin River" (listed as a local pest the page addresses) | mosquito — **conflicts with E14** |
| E16 | `pest-control-ivins-ut.astro:142`, `pest-control-santa-clara-ut.astro:142` | "Mice and **roof rats** enter Ivins homes…"; "Mice and roof rats follow the river c[orridor]…" | roof rat |
| E17 | `pest-control-vernal.astro:172` | "From harmless **cellar** and **wolf spiders** to the occasional black widow in garages and woodpiles…" | cellar spider, wolf spider |
| E18 | `pest-control-vernal.astro:182` | "Paper wasps and **hornets** build nests under eaves, in sheds, and around play areas…" | hornets (generic) |
| E19 | `bed-bug-treatment-southern-utah.astro:161` | "many bites are blamed on bed bugs but caused by fleas, mites, or other pests" | fleas/mites — **identification only, not a treatment claim** |

**Nothing else was treated as service evidence.** Not competitor sites, not "what an exterminator
could treat", not marketing adjectives, not the pest-library tile grid (a tile is a content decision,
not a service claim).

---

## 5. `llms.txt` vs. the service pages — recorded, not resolved

Per §3 of the brief, `llms.txt` was not used as a primary service source. Cross-checking it against
the service pages surfaced **three disagreements**, all recorded here without silently resolving them.

| # | Disagreement | Detail |
|---|---|---|
| 5.1 | **Service-line count: 10 vs. 4** | `llms.txt` lists 10 "Core Services". `services.astro` JSON-LD declares exactly 4 `serviceType` values (Residential, Commercial, Termite, Rodent), and its own FAQ says "Wernex offers **four core services**". The other six llms.txt entries (Scorpion, Bed Bug, Ant, Spider, Wasp & Bee, Vacation Rental) are marketed as services on dedicated pages but are not schema service lines. **Consequence:** "Wernex service line" in the matrix below reports the *documented* line (one of the four) rather than the marketing label. |
| 5.2 | **`llms.txt` is _narrower_ than the service pages** | Seven pests with explicit service-page claims appear nowhere in `llms.txt`: **cockroaches** (E1), **voles** (E7), **pack rats** (E8/E9), **boxelder bugs**, **cluster flies**, **earwigs**, **silverfish** (E10). This is the opposite of the failure mode the Aug-2026 audit found (llms.txt over-claiming fire ants and brown recluse, since corrected). Under-representation is lower-risk, but it means llms.txt cannot be used to *bound* the service set either. |
| 5.3 | **"Desert spider" has no referent** | `llms.txt` ("Black widow, wolf spider, and desert spider elimination") and `spider-control-st-george` (title, description, JSON-LD, OG) both sell "desert spiders". **No such taxon exists in the USU guide or any source fetched.** It could plausibly mean the desert recluse, the crevice weaver, or a desert tarantula — three animals with very different risk profiles and geography. No page can be honestly built on the term until it is defined. → **Owner question Q6.** |

---

## 6. Gate-3 status values used

The brief's values, plus two the evidence forced. Every one of the 112 entities carries exactly one.

| Status | Definition | Count |
|---|---|---|
| `documented-service` | The pest is **named by name** in Wernex first-party service copy (§4). | **25** |
| `category-covered` | Not named, but sits inside a pest category Wernex explicitly names (ants, spiders, scorpions, wasps, cockroaches, termites, rodents). A weaker claim than `documented-service` and labelled as such. | **26** |
| `unclear` | Reachable only through a **generic** clause — E10's "and other occasional invaders", or the commercial program's unnamed pest scope. Not treated as proof of service. | **42** |
| `wildlife/no-service-line` | Vertebrate outside the documented Rodent Control line. | **7** |
| `beneficial/non-target` | Organism the site's own position, or USU's, is not to exterminate. | **5** |
| `owner-input-required` | Repository evidence genuinely conflicts or cannot settle it, **and** the answer changes the candidate set. | **2** |
| `not-documented` | No Wernex service evidence, and none plausible. | **5** |
| | **Total** | **112** |

`category-covered` and `unclear` exist because collapsing them into "yes"/"no" would have been the
exact failure the brief warns about. A German cockroach is not in the same evidentiary position as a
warehouse beetle, and neither is in the same position as a pavement ant.

---

## 7. The matrix

Two linked tables per category, joined on **Entity**. Table A carries the evidence fields; Table B
carries the business/SEO fields. Universe source is `USU-UPG` (USU Urban Pest Guide, §3) or `repo`
(`pests.ts` / Wave 1 draft / service copy).

**Source tier key:** `P` = primary (USU Extension, UDAF, Utah DHHS, USDA, CDC) · `S` = secondary
(other land-grant extension, museum) · `N` = news · `—` = none fetched.

**Blanket citation for every `USU-UPG` row:** USU Extension, _Urban Pest Guide_,
<https://extension.usu.edu/planthealth/ipm/structural-pest-id-guide/index.php> — individual entry
pages at `.../structural-pest-id-guide/<entry>.php`, all fetched 2026-08-28.

---

### 7.1 Ants

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| Carpenter Ant | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "damage wood, infest food and may bite". Wave 1 record: ~12 Utah spp., genuine structural pest (`docs/pest-evidence.md` §3) | Utah — USU documents as a Utah structural pest; no finer distribution stated | P | Strong |
| Pavement Ant | species | USU-UPG + repo (W1) | `verified` | **Two conflicting claims inside one USU fact sheet** — see §16.1 | northern Utah (conservative reading) | P | Moderate — superlative unresolved |
| Harvester Ant | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "inflict painful stings when disturbed…; **do not invade homes** but are occasional pests of lawns and playgrounds; swarm from June – October" | Utah — guide scope | P | Strong |
| Odorous House Ant | species | USU-UPG | `verified` | USU-UPG: "contaminate foods such as sweets, meats, dairy products and vegetables" | Utah — guide scope | P | Moderate |
| Field Ant | species | USU-UPG | `verified` | USU-UPG: "become a nuisance during swarming flights; can create mounds in turf areas" | Utah — guide scope | P | Moderate |
| Velvety Tree Ant | species | USU-UPG | `verified` | USU-UPG: "aggressive; inflict a painful bite and spray secretions…; **damage insulation and wood by tunneling**; workers/foragers may enter structures; structural infestations result in a foul-smelling odor" | Utah — guide scope | P | Strong |
| Pharaoh Ant | species | USU-UPG | `verified` | USU-UPG: "contaminate sweets and greases; **serious pest of dormitories, hospitals, schools and apartments**" | Utah — guide scope | P | Moderate |
| Pyramid Ant | species | USU-UPG | `verified` | USU-UPG: "occasionally invade buildings in search of food or moisture; can bite; can have unsightly mounds" | Utah — guide scope | P | Weak |
| Argentine Ant | species | USU-UPG | `verified` | USU-UPG: "**not a common pest in most of Utah**"; "form supercolonies" | Utah — explicitly uncommon in most of the state | P | Strong (negative) |
| Fire Ants | species | repo (excluded) | `verified` | Recorded exclusion: RIFA not established in Utah (`pests.ts`, Aug 2026 audit) | n/a | P | Strong (negative) |

**Table B — business**

| Entity | Gate-3 status | Service line | Beneficial/protected | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Carpenter Ant | `documented-service` (E3) | Residential + Termite (WDI) | no | High — vs. field ant, vs. termite swarmer | ID + treatment + damage | `/ant-control-st-george`; W1 draft | Low — service page is commercial-intent | — | both areas | **Candidate** | Named service, structural damage angle, real ID problem | Wave 1 (drafted) | — |
| Pavement Ant | `documented-service` (E3) | Residential | no | High — the spring kitchen ant | ID + treatment | W1 draft | Low | spring / early summer (USU) | both areas | **Candidate** | Named service; strongest everyday ant intent | Wave 1 (drafted) | Superlative blocked — §16.1 |
| Harvester Ant | `documented-service` (E3) | Residential | no | High — the "fire ant" people mean | ID + safety (sting) | W1 draft | Low | June–Oct swarms (USU) | St. George-first | **Candidate** | Named service; absorbs fire-ant intent honestly | Wave 1 (drafted) | — |
| Odorous House Ant | `category-covered` (E1) | Residential | no | High — coconut smell is a real test | ID + treatment | none | Medium vs. pavement ant | — | both areas | **Candidate** | Distinct ID test, distinct habits | Wave 2 candidate | — |
| Field Ant | `category-covered` (E1) | Residential | no | High — carpenter-ant lookalike | identification | none | Medium vs. carpenter ant | swarming flights | both areas | **Candidate** | Lookalike feeder page for carpenter ant | Wave 2 candidate | — |
| Velvety Tree Ant | `category-covered` (E1) | Residential + Termite (WDI) | no | High — bites, odor, wood tunneling | ID + damage + treatment | none | Medium vs. carpenter ant | — | both areas | **Candidate** | USU documents wood/insulation tunneling — a structural entity in its own right | Wave 2 candidate | — |
| Pharaoh Ant | `category-covered` (E1) | Commercial | no | Moderate | treatment (facility) | none | Low | — | commercial accounts | **Hold** | Real commercial entity, but consumer search in Vernal/St. George unmeasured | later | Q7 (commercial scope) |
| Pyramid Ant | `category-covered` (E1) | Residential | no | Low | identification | none | Medium vs. other ants | — | — | **Hold** | Thin unique content; USU significance is minimal | later | — |
| Argentine Ant | `category-covered` (E1) | Residential | no | Moderate | identification | none | Medium | — | — | **Exclude** | USU: "not a common pest in most of Utah". Fails geographic relevance | exclude | — |
| Fire Ants | `not-documented` | none | no | High (as a myth) | myth correction | absorbed by harvester-ant draft | High vs. harvester ant | — | — | **Hold** | Standing exclusion in `pests.ts`; a myth page reverses a recorded decision | hold | Pre-existing approval item |

---

### 7.2 Cockroaches

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| German Cockroach | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "prefer warm, moist areas near food preparation and/or storage (**primary kitchen-infesting roach in Utah**)"; "may carry disease; can cause allergic reactions or asthma symptoms" | Utah — named as the state's primary kitchen roach | P | Strong |
| American Cockroach | species | USU-UPG | `verified` | USU-UPG: "**largest species commonly found in Utah; up to 2 inches long**"; "may transmit disease pathogens; can be an asthma trigger" | Utah — explicitly "commonly found in Utah" | P | Strong |
| Oriental Cockroach | species | USU-UPG | `verified` | USU-UPG: "cause allergic reactions, similar to asthma, in some people; may transmit disease" | Utah — guide scope | P | Moderate |
| Brown Banded Cockroach | species | USU-UPG | `verified` | USU-UPG: "chew on nonfood materials such as fabric; feed on and harbor within food stored indoors; can transmit disease" | Utah — guide scope | P | Moderate |
| Turkestan Cockroach | species | repo (W1, held) | `verified` | `docs/pest-evidence.md` §5: no USU/.edu Utah establishment record. **This pass adds a second negative:** it is absent from USU's Utah Urban Pest Guide, which lists exactly four Utah structural cockroaches | not documented in Utah | P | Strong (negative) |

**Table B — business**

| Entity | Gate-3 status | Service line | Beneficial | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| German Cockroach | `category-covered` (E1) | Residential | no | High | ID + treatment + health | W1 draft | Low | — | St. George documented; **Vernal unconfirmed** | **Candidate** | USU's primary Utah kitchen roach; strongest roach intent | Wave 1 (drafted) | **Q2** — E1 names cockroaches for "St. George and Washington County" only, but the W1 draft links to the Vernal service page |
| American Cockroach | `category-covered` (E1) | Residential + Commercial | no | High — the 2-inch one people photograph | ID + reassurance + treatment | none | Low vs. german | — | St. George-first | **Candidate** | USU gives it an explicit Utah statement; distinct size/habitat story | Wave 2 candidate | Q2 |
| Oriental Cockroach | `category-covered` (E1) | Residential | no | Moderate | ID + treatment | none | Medium vs. american | — | both | **Candidate** | Distinct habitat (damp/basement/drains) | Wave 2 candidate | Q2 |
| Brown Banded Cockroach | `category-covered` (E1) | Residential | no | Moderate | identification | none | Medium | — | — | **Hold** | Thinnest of the four; fold into a cockroach category page unless demand appears | later | Q2 |
| Turkestan Cockroach | `category-covered` (E1) | none | no | Moderate | identification | W1 draft, `published: false` | Low | — | — | **Hold** | **This pass strengthens the existing hold** — absence from USU's four-species Utah list is now a second independent negative | hold | — |

---

### 7.3 Spiders (and the scorpions)

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| Black Widow | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "can be a serious health risk, especially to children and elderly people; bite can cause pain, nausea, cramping or death (rare)". Wave 1 record: USU's actual wording is "the most dangerous spiders to humans in Utah" | statewide | P | Strong |
| Wolf Spiders | species | USU-UPG + repo (E4/E17) | `verified` | USU-UPG: "can be a nuisance when they mistakenly enter buildings; **not known to be a health hazard**; **beneficial**" | Utah — guide scope | P | Strong |
| Cellar Spiders | species | USU-UPG + repo (E17) | `verified` | USU-UPG: "webs build up over time and collect dirt/dust making areas…unsightly; not known to be a health hazard; **beneficial**" | Utah — guide scope | P | Strong |
| Hobo & Grass Spiders | species (merged by USU) | USU-UPG + repo (W1) | `verified` | USU-UPG: "evidence suggests that hobo spiders **do not cause necrotic lesions** in humans"; "**very common indoors between August and October**"; "spiders should be considered beneficial" | Utah — guide scope | P | Strong |
| Desert Recluse Spider | species | USU-UPG | `verified` | USU-UPG: "**in Utah, only found in Washington County**"; "bites can result in a necrotic ulcer that can take several weeks to heal"; "these spiders are **rarely encountered indoors**" | **Washington County only** — inside the St. George service area | P | Strong |
| Crevice Weaving Spider | species | USU-UPG | `verified` | USU-UPG: "**more common in southern Utah**"; "can become a nuisance in and around buildings" | southern Utah | P | Strong |
| Jumping Spiders | species | USU-UPG | `verified` | USU-UPG: "**the most common jumping spider in Utah, the bold jumper**, has a black body with green chelicera and a white dot on the back of the abdomen"; "not known to be a health hazard; beneficial" | Utah — named as the state's most common jumping spider | P | Strong |
| Sac Spiders | species | USU-UPG | `verified` | USU-UPG: "can aggressively bite when trapped against the skin; painful bite; beneficial" | Utah — guide scope | P | Moderate |
| Orb Weaver Spiders | species | USU-UPG | `verified` | USU-UPG: "could be a nuisance pest outdoors, especially the webs; beneficial" | Utah — guide scope | P | Moderate |
| Hacklemesh Weaver Spiders | species | USU-UPG | `verified` | USU-UPG: "frequently found in damp basements and other areas in buildings during fall; not considered medically significant" | Utah — guide scope | P | Moderate |
| Ground Spiders | species | USU-UPG | `verified` | USU-UPG: "nuisance when indoors; not known to be a health hazard; beneficial" | Utah — guide scope | P | Weak |
| Woodlouse Spider | species | USU-UPG | `verified` | USU-UPG: "appear menacing because of their large, forward projecting mouthparts and fangs; not known to be a health hazard; beneficial" | Utah — guide scope | P | Weak |
| Brown Recluse | myth entity | repo (W1) | `verified` | `docs/pest-evidence.md` §2: USU is unambiguous that it does not occur in Utah. **Corroborated this pass:** absent from USU's 12-entry Utah spider list, which instead carries the desert recluse | not in Utah | P | Strong (negative) |
| Camel Spider (solifugid) | species | repo (architecture doc) | `universe` | **No source fetched this session.** Absent from USU's Urban Pest Guide spider list | unknown | — | — |
| Scorpions (category) | category | USU-UPG + repo (E13) | `verified` | **Two USU sources conflict** — see §16.2. Fact sheet: "only 9 are recognized in Utah"; "Most Utah scorpions are found in the southern part of the state; however, three species are occasionally found in northern Utah" | southern Utah concentrated; 3 spp. reach northern Utah | P | Moderate — conflict unresolved |
| Arizona Bark Scorpion | species | repo (W1) | `verified` | Fact sheet: Kane County. Urban Pest Guide: "southern Utah along the Colorado River". **Neither supports St. George** (Washington County's river is the Virgin, not the Colorado) | Kane County / Colorado River corridor — **not St. George** | P | Moderate — see §16.2 |
| Giant Desert Hairy Scorpion | species | repo (W1, E13) | `verified` | USU fact sheet: "Southwestern Utah", size class Large (>100 mm) | southwestern Utah | P | Strong |
| Northern Scorpion | species | repo (W1) | `verified` | USU fact sheet: "All of Utah", size class Medium (50–100 mm) | statewide incl. Uintah Basin | P | Strong |

**Table B — business**

| Entity | Gate-3 status | Service line | Beneficial/protected | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Black Widow | `documented-service` (E4) | Residential | no | High | ID + safety | `/spider-control-st-george`; W1 draft | Low | — | both | **Candidate** | Named service; highest-stakes spider intent | Wave 1 (drafted) | — |
| **Wolf Spiders** | `documented-service` (E4, E17) | Residential | **USU: beneficial** | High — the big scary one | ID + reassurance | service page names it; **no pest page** | Low | — | both | **Candidate** | **Strongest un-authored entity in the whole matrix** — named on three live pages and in llms.txt, real ID/reassurance intent, and no page exists | **Wave 2 priority** | — |
| Cellar Spiders | `documented-service` (E17) | Residential | **USU: beneficial**; Vernal page calls them "harmless" | High — feeds the recluse myth | ID + reassurance | named on `/pest-control-vernal`; no pest page | Medium vs. brown-recluse myth page | — | Vernal-first | **Candidate** | Named, honestly framed as harmless by Wernex's own copy; strong feeder for the recluse myth page | Wave 2 candidate | — |
| Hobo & Grass Spiders | `category-covered` (E1) | Residential | **USU: "should be considered beneficial"** | High | myth correction (necrotic bite) | W1 draft (`hobo-spider`) | Low | **Aug–Oct** (USU) | Vernal-first | **Candidate** | Confirms W1. **Qualification:** USU calls them beneficial and merges hobo with grass spiders — the page must not read as an extermination pitch | Wave 1 (drafted) | — |
| Desert Recluse Spider | `category-covered` (E1) | Residential | no | High | ID + safety | covered as a section inside the `brown-recluse` myth draft | **High** vs. brown-recluse page | — | **Washington County — in service area** | **Hold** | Genuinely strong (the only medically significant recluse in Utah, and it is in the St. George service area), but splitting it from the myth page would cannibalize the single best-argued draft. Revisit if the myth page shows recluse-ID demand | hold | — |
| Crevice Weaving Spider | `category-covered` (E1) | Residential | no | Moderate | identification | none | Low | — | **southern Utah (USU)** | **Candidate** | One of very few entities with an explicit USU southern-Utah statement | Wave 2 candidate | — |
| Jumping Spiders | `category-covered` (E1) | Residential | **USU: beneficial** | High | ID + reassurance | **the pest-library hub tile image is a jumping spider** | Low | — | both | **Candidate** | USU names the Utah species and its field marks; pure reassurance intent; the hub already shows one | Wave 2 candidate | — |
| Sac Spiders | `category-covered` (E1) | Residential | **USU: beneficial** | Moderate | ID + bite | none | Medium | — | — | **Hold** | Real but thin; fold into a spider category page first | later | — |
| Orb Weaver Spiders | `category-covered` (E1) | Residential | **USU: beneficial** | Moderate | ID + reassurance | none | Low | fall webs | both | **Hold** | Seasonal reassurance value; low commercial value | later | — |
| Hacklemesh Weaver | `category-covered` (E1) | Residential | no | Moderate | identification | none | **High** vs. hobo page | fall (USU) | — | **Exclude as a page** | USU's own framing makes it a lookalike; belongs as a section inside the hobo/grass page | exclude (as page) | — |
| Ground Spiders | `category-covered` (E1) | Residential | **USU: beneficial** | Low | identification | none | High | — | — | **Exclude as a page** | Thin; fold into spider category | exclude (as page) | — |
| Woodlouse Spider | `category-covered` (E1) | Residential | **USU: beneficial** | Low | identification | none | High | — | — | **Exclude as a page** | Thin; fold into spider category | exclude (as page) | — |
| Brown Recluse | `category-covered` (E1) | none (schema-enforced) | no | High | myth correction | W1 draft, `intent: myth` | Low | — | — | **Candidate** | Confirmed and strengthened by this pass | Wave 1 (drafted) | — |
| Camel Spider | `category-covered` (E1) | Residential | unknown | High (curiosity) | ID + reassurance | none | Low | — | St. George-first | **Hold** | `universe` depth — no source fetched. Cannot be assessed for Utah relevance yet | hold | — |
| Scorpions (category) | `documented-service` (E13) | Residential (marketed as Scorpion Control) | no | High | ID + safety + treatment | `/scorpion-control-st-george` | Medium | — | St. George | **Candidate** | Documented service line | Wave 1 (species drafted) | **Q1** — Uintah Basin scorpion service |
| Arizona Bark Scorpion | `documented-service` (E13) | none (draft is `informational`) | no | High | ID + safety | W1 draft, `informational` | Low | — | Kane County — **not** the service area | **Hold** | Named in marketing copy but **not documented in the service area by either USU source**. The `informational` classification remains correct | Wave 1 (drafted, informational) | See §16.2 |
| Desert Hairy Scorpion | `documented-service` (E13) | Residential | no | High | ID + reassurance | W1 draft | Low | — | **St. George-first** | **Candidate** | The scorpion Washington County residents actually meet | Wave 1 (drafted) | — |
| Northern Scorpion | `category-covered` (E13) | Residential | no | High | ID + safety | W1 draft, links to `/pest-control-vernal` | Low | — | **Vernal-first** | **Candidate** | USU: "All of Utah". The genuine Basin scorpion | Wave 1 (drafted) | **Q1** — the draft carries a Vernal service link but no Wernex copy documents scorpion service in the Basin |

---

### 7.4 Stinging insects and bees

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| Western Yellowjacket | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "nests pose a serious health risk to humans; **scavenge in fall making outdoor events dangerous**" | Utah — guide scope; W1 record: statewide | P | Strong |
| Paper Wasps | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "nests pose a health risk to humans; **not as aggressive as yellowjackets or hornets**" | Utah — guide scope; W1 record: European paper wasp statewide | P | Strong |
| Mason, Potter & Mud Dauber Wasps | species group | USU-UPG + repo (E5) | `verified` | USU-UPG: "nests pose a slight health risk to humans; **not aggressive**; **may be considered beneficial since they prey on many species of spiders**" | Utah — guide scope | P | Strong |
| Baldfaced Hornet | species | USU-UPG | `verified` | USU-UPG: "nests pose a **serious** health risk to humans" | Utah — guide scope | P | Moderate |
| Sand Wasps & Cicada Killers | species group | USU-UPG | `verified` | USU-UPG: "nests pose a **minimal** health risk to humans; can give a painful sting but wasps are **not aggressive**" | Utah — guide scope | P | Moderate |
| Honey Bee | species | USU-UPG + repo (E6) | `verified` | USU-UPG: "**Africanized honey bees do exist in Washington, Iron and San Juan counties in Utah**, and are more dangerous than European honey bees"; "genetic tests or precise morphological measurements are needed to distinguish between Africanized and European honey bees"; "Bees are a valuable resource; consider contacting your local beekeepers' association for hive or swarm extraction" | **Washington County named** — inside the St. George service area | P | Strong |
| Bumble Bee | species | USU-UPG | `verified` | USU-UPG: "nests pose a **minimal** health risk…; **bumble bees are important pollinators**" | Utah — guide scope | P | Strong |
| Solitary & Ground Nesting Bees | species group | USU-UPG | `verified` | USU-UPG: "nests pose a minimal health risk…; can sting, but sting is mild; **important pollinators**" | Utah — guide scope | P | Strong |
| Carpenter Bee | species | repo (E5) | `universe` | **Not verified this session** — USU's carpenter-bee fact sheet redirects to a DigitalCommons PDF that returned 403. The architecture doc's Washington/Kane/Garfield county claim has **no record in `docs/pest-evidence.md`** | unverified — treat as unknown until re-fetched | — | — |

**Table B — business**

| Entity | Gate-3 status | Service line | Beneficial/protected | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Western Yellowjacket | `documented-service` (E5) | Residential (Wasp & Bee Removal) | no | High | ID + safety + removal | `/wasp-removal-st-george`; W1 draft | Low | **late summer/fall scavenging (USU)** | both | **Candidate** | Named service; USU gives a genuine seasonal hook | Wave 1 (drafted) | — |
| Paper Wasps | `documented-service` (E5) | Residential | no | High | ID + nest removal | W1 draft | Low | summer nesting | both | **Candidate** | Named service | Wave 1 (drafted) | — |
| Mud Daubers | `documented-service` (E5) | Residential | **USU: "may be considered beneficial"** | High | ID + reassurance | named on wasp page; no pest page | Low | — | both | **Candidate** | Named service with a real honesty problem to solve: USU calls them non-aggressive spider predators. A page can carry both truthfully; the current service page cannot | Wave 2 candidate | — |
| Baldfaced Hornet | `category-covered` (E1, E18) | Residential | no | High — the big grey football nest | ID + safety + removal | "hornets" named generically on `/pest-control-vernal` | Low | summer/fall | both | **Candidate** | USU rates it a *serious* risk; distinctive nest = strong ID intent | Wave 2 candidate | — |
| Sand Wasps & Cicada Killers | `category-covered` (E1) | Residential | leaning non-target | High — "giant wasp in my yard" | ID + reassurance | none | Low | mid/late summer | both | **Candidate** | Pure reassurance intent; USU explicitly downgrades the threat | Wave 2 candidate | — |
| **Honey Bee** | `beneficial/non-target` (E6) | **none — relocation/referral only** | **Yes — pollinator; Wernex coordinates beekeeper relocation** | High | safety + what-to-do + swarm | E6 FAQ answer only | Low | swarm season (spring) | **Washington County named by USU** | **Candidate (informational/referral)** | Wernex's own documented position is relocation, and USU independently says to call a beekeepers' association. The Africanized-bee statement names Washington County — a real, geographically honest safety angle | Wave 2 candidate | **Q5** |
| Bumble Bee | `beneficial/non-target` | none | **Yes — "important pollinators" (USU)** | Moderate | ID + reassurance | none | Low | — | both | **Hold (informational only)** | No Wernex claim, and none should be made | later | Q5 |
| Solitary & Ground Nesting Bees | `beneficial/non-target` | none | **Yes — "important pollinators" (USU)** | High — "bees coming out of my lawn" | ID + reassurance | none | Low | spring | both | **Hold (informational only)** | Genuine search intent, zero service claim available | later | Q5 |
| Carpenter Bee | `documented-service` (E5) | Residential | no (wood-boring) | High | ID + damage + treatment | named on wasp page; no pest page | Low | spring | St. George (unverified) | **Hold** | Service is documented, but **Utah range is `universe` depth** — the Washington/Kane/Garfield claim is unverified. Must be re-fetched before any page | hold pending evidence | — |

---

### 7.5 Vertebrates

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| Deer Mouse | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "**known carrier of Hantavirus Pulmonary Syndrome**, a rare but potentially fatal lung disease found in mouse feces and urine" | Utah — guide scope; W1: rural Basin outbuildings | P | Strong |
| House Mouse | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "contaminate food, damage property and spread disease" | Utah — guide scope | P | Strong |
| Norway Rat | species | USU-UPG + repo (E7) | `verified` | USU-UPG: "can transmit disease; human health concern; ruin stored food products; nuisance in and around buildings" | Utah — guide scope | P | Moderate |
| **Voles** | species | USU-UPG + repo (E7) | `verified` | USU-UPG: "cause damage to turf and ornamental plantings; **occasionally enter buildings by accident, but do not become established indoors**" | Utah — guide scope | P | Strong — **and it conflicts with Wernex's own copy, §16.3** |
| Roof Rat | species | repo (W1, E16) | `verified` | `docs/pest-evidence.md` §8: documented only by St. George-area **news** since ~2021. **Corroborated this pass:** absent from USU's Utah vertebrate list, which carries only the Norway rat | Washington County — news-sourced only | N (+ P negative) | Moderate |
| Pack Rat / Woodrat | species | repo (E8, E9) | `universe` | **No authoritative source fetched.** Absent from USU's Urban Pest Guide. Appears once incidentally in `docs/pest-evidence.md` §2 as desert-recluse habitat ("found outdoors in native vegetation, pack rat dens, etc.") | unverified | — | — |
| Pocket Gophers | species | USU-UPG | `verified` | USU-UPG: "damage lawns, gardens and agricultural fields; damage underground utility cables and irrigation pipes; harm trees by stripping bark and chewing on roots" | Utah — guide scope | P | Moderate |
| Ground Squirrels | species | USU-UPG | `verified` | USU-UPG: "burrowing activity can destroy lawns…, undermine building foundations; carry a wide range of diseases" | Utah — guide scope | P | Moderate |
| Tree Squirrels | species | USU-UPG | `verified` | USU-UPG: "minor health concern…; can enter buildings and damage walls, wires and insulation" | Utah — guide scope | P | Moderate |
| Bats | species group | USU-UPG | `verified` | USU-UPG: "**18 species in Utah**; some live in Utah year-round; some are migratory"; "could transmit histoplasmosis and rabies" | Utah — 18 species stated | P | Strong |
| Skunks | species | USU-UPG | `verified` | USU-UPG: "known carriers of diseases, such as rabies…; odorous defensive spray" | Utah — guide scope | P | Moderate |
| Rock Pigeon | species | USU-UPG | `verified` | USU-UPG: "pigeon droppings may pose a health hazard when allowed to accumulate; infest unprotected ventilation ducts/exhaust units" | Utah — guide scope | P | Moderate |
| European Starling | species | USU-UPG | `verified` | USU-UPG: "associated with over 25 diseases and ectoparasites, including bird mites"; "**See Utah Administrative Code R657-3-7 for more information on legal issues surrounding starling control**" | Utah — with a state legal citation | P | Strong |
| House/English Sparrow | species | USU-UPG | `verified` | USU-UPG: "associated with over 29 diseases and ectoparasites, including bird mites" | Utah — guide scope | P | Moderate |

**Table B — business**

| Entity | Gate-3 status | Service line | Protected | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Deer Mouse | `documented-service` (E7) | **Rodent Control** | no | High | health + cleanup + treatment | `/rodent-control-vernal`; W1 draft | Low | fall push | **Vernal-first** | **Candidate** | Named service + the library's strongest health angle | Wave 1 (drafted) | — |
| House Mouse | `documented-service` (E7) | **Rodent Control** | no | High | ID + treatment | W1 draft | Low | fall push | both | **Candidate** | Named service; highest-volume rodent intent | Wave 1 (drafted) | — |
| Norway Rat | `documented-service` (E7, "rats") | **Rodent Control** | no | High — vs. roof rat | ID + treatment | none | Medium vs. roof rat | — | both | **Candidate** | The rat USU actually documents for Utah; the natural counterpart to the roof-rat draft | Wave 2 candidate | — |
| **Voles** | `documented-service` (E7) | **Rodent Control** | no | High — "is it a mouse or a vole" | ID + yard damage + treatment | named on `/rodent-control-vernal` + `/pest-control-vernal`; no pest page | Medium vs. rodent service page | **fall** (per Wernex copy) | **Vernal-first** | **Candidate** | Explicitly named service with genuinely distinct ID intent | Wave 2 candidate | **Q3** — USU says voles do not establish indoors; Wernex copy says they move into homes. §16.3 |
| Roof Rat | `documented-service` (E16) | **Rodent Control** | no | High | ID + treatment | W1 draft | Medium vs. norway rat | — | **St. George-first** | **Candidate** | Confirms W1, and this pass adds a reason the news-only hedge is correct: USU's Utah list has no roof rat | Wave 1 (drafted) | — |
| Pack Rat / Woodrat | `documented-service` (E8, E9) | **Rodent Control** | no | High | ID + treatment | named on 2 pages; no pest page | Low | — | **St. George / Zion corridor** | **Hold pending evidence** | **Resolves the architecture doc's open item §5.5: yes, the site does claim pack-rat service.** But depth is `universe` — no authoritative Utah source fetched. Get one before authoring | hold pending evidence | — |
| Pocket Gophers | `owner-input-required` | unknown | no | Moderate | yard damage | none | Low | — | both | **Hold** | Genuinely ambiguous: the same class of burrowing yard rodent as voles, which Wernex *does* service. Cannot be settled from the repo | hold | **Q4** |
| Ground Squirrels | `wildlife/no-service-line` | none | no | Moderate | damage | none | — | — | — | **Exclude** | Vertebrate outside the documented Rodent Control line | exclude | Q4 |
| Tree Squirrels | `wildlife/no-service-line` | none | no | Moderate | attic noise | none | — | — | — | **Exclude** | Same | exclude | Q4 |
| Bats | `wildlife/no-service-line` | none | **Yes — protected; 18 Utah species** | High | safety + exclusion | none | — | — | — | **Exclude** | No wildlife service line; bat exclusion is a regulated specialty | exclude | Q4 |
| Skunks | `wildlife/no-service-line` | none | no | Moderate | removal | none | — | — | — | **Exclude** | Same | exclude | Q4 |
| Rock Pigeon | `wildlife/no-service-line` | none | no | Moderate | exclusion | none | — | — | — | **Exclude** | Same | exclude | Q4 |
| European Starling | `wildlife/no-service-line` | none | **Regulated — Utah Admin. Code R657-3-7** | Moderate | legal + removal | none | — | — | — | **Exclude** | USU itself points at state law for control | exclude | Q4 |
| House/English Sparrow | `wildlife/no-service-line` | none | no | Low | removal | none | — | — | — | **Exclude** | Same | exclude | Q4 |

---

### 7.6 Flies

Fourteen USU entries. This is the clearest case in the matrix for §9 of the brief: **fourteen fly
species must not become fourteen pages.** Consolidation is in §9 below.

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| Cluster Flies | species | USU-UPG + repo (E10) | `verified` | USU-UPG: "adults seek sheltered areas to overwinter such as crevices and cavities in buildings in **late summer and early fall**; may become active during warm periods of winter" | Utah — guide scope | P | Strong |
| Face Fly | species | USU-UPG | `verified` | USU-UPG: "come from **farm/ranch areas with fresh cow manure**; congregate on south/southwest-facing walls in late summer – early fall; large numbers will congregate within wall voids during winter (**similar to cluster flies**)" | Utah — guide scope | P | Strong |
| House Fly | species | USU-UPG | `verified` | USU-UPG: "can spread disease from one food source to food preparation areas…; nuisance inside buildings" | Utah — guide scope | P | Moderate |
| Drain Fly | species | USU-UPG | `verified` | USU-UPG: "can spread disease through contact; bodies of dead flies may disintegrate to form allergens" | Utah — guide scope | P | Moderate |
| Fruit Flies | species | USU-UPG | `verified` | USU-UPG: "nuisance indoors; can transmit disease through contact" | Utah — guide scope | P | Moderate |
| Phorid Flies | species | USU-UPG | `verified` | USU-UPG: "nuisance pest indoors; can spread disease through contact" | Utah — guide scope | P | Moderate |
| Crane Flies | species | USU-UPG | `verified` | USU-UPG: "occasionally enter buildings when a door or window is left open; **cannot survive indoors for long**" | Utah — guide scope | P | Strong |
| Fungus Gnats | species | USU-UPG | `verified` | USU-UPG: "flies inside are a nuisance; when present in large numbers, **larvae can damage roots and stunt growth of seedlings and young plants**" | Utah — guide scope | P | Moderate |
| Blow Flies | species | USU-UPG | `verified` | USU-UPG: "can spread disease through contact; nuisance inside buildings" | Utah — guide scope | P | Weak |
| Flesh Flies | species | USU-UPG | `verified` | USU-UPG: "**infrequent** indoor pest" | Utah — guide scope | P | Weak |
| Lesser House Flies | species | USU-UPG | `verified` | USU-UPG: "hover around structures in large numbers…; rarely land on food; **not considered a disease vector**" | Utah — guide scope | P | Weak |
| Stable Fly | species | USU-UPG | `verified` | USU-UPG: "can inflict painful bites; nuisance inside buildings" | Utah — guide scope | P | Weak |
| Horse and Deer Flies | species group | USU-UPG | `verified` | USU-UPG: "inflict painful bites…; **rarely a significant problem inside structures**; can be a severe outdoor problem in areas near wetland habitats" | Utah — guide scope | P | Moderate |
| Black Soldier Fly | species | USU-UPG | `verified` | USU-UPG: "pupae often found in large numbers around dumpsters; **rarely breed indoors**" | Utah — guide scope | P | Weak |

**Table B — business**

| Entity | Gate-3 status | Service line | Beneficial | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cluster Flies | `documented-service` (E10) | Residential | no | High | ID + fall exclusion | named on `/pest-control-vernal`; `pests.ts` `flies` tile | Low | **late summer–fall + winter warm spells** | **Vernal-first** | **Candidate** | The only named fly. Strong seasonal exclusion story that pairs with boxelder bug | Wave 2 candidate | — |
| Face Fly | `unclear` | — | no | High — cluster-fly lookalike | identification | none | **High** vs. cluster fly | late summer–fall | **Vernal / ranch properties** | **Candidate (as a section)** | USU itself says "similar to cluster flies". Belongs *inside* the cluster-fly page, not beside it | fold into cluster fly | Q7 |
| House Fly | `unclear` | — | no | Moderate | treatment + prevention | `pests.ts` `flies` tile | Medium | summer | both | **Candidate (category page)** | The right entity is a **"House Flies"** category page per §9, not a species page | Wave 2 candidate | **Q7** |
| Drain Fly | `unclear` | — | no | High — "tiny flies in my bathroom" | ID + DIY + treatment | none | Low | — | both | **Candidate (with fruit fly)** | Distinct, high-intent small-fly ID problem | Wave 2 candidate | Q7 |
| Fruit Flies | `unclear` | — | no | High | ID + DIY | none | Medium vs. drain fly | late summer | both | **Candidate (with drain fly)** | Merge into one small-fly ID page — §9 | Wave 2 candidate | Q7 |
| Phorid Flies | `unclear` | Commercial (unnamed) | no | Moderate | commercial diagnosis | none | Medium | — | commercial | **Hold** | Real commercial value (broken sewer line indicator); little consumer intent | later | Q7 |
| Crane Flies | `unclear` | — | no | **High — "giant mosquito"** | myth correction | none | Low | spring/summer | both | **Candidate (informational)** | USU gives a clean myth correction; low competition; no service claim needed | Wave 2 candidate | — |
| Fungus Gnats | `unclear` | — | no | Moderate | houseplant DIY | none | Low | — | — | **Hold** | Houseplant/root pest — adjacent to the standing landscape exclusion | hold | Q7 |
| Blow Flies | `unclear` | — | no | Moderate | ID (dead-animal indicator) | none | High | — | — | **Exclude as a page** | Fold into the fly category page | exclude (as page) | — |
| Flesh Flies | `unclear` | — | no | Low | identification | none | High | — | — | **Exclude as a page** | USU: "infrequent indoor pest" | exclude (as page) | — |
| Lesser House Flies | `unclear` | — | no | Low | identification | none | High | — | — | **Exclude as a page** | Fold into House Flies | exclude (as page) | — |
| Stable Fly | `unclear` | — | no | Low | biting-fly ID | none | Medium | — | ranch | **Exclude as a page** | Thin | exclude (as page) | — |
| Horse and Deer Flies | `unclear` | — | no | Moderate | outdoor bites | none | Low | summer | — | **Exclude as a page** | USU: rarely an indoor structural problem | exclude (as page) | — |
| Black Soldier Fly | `unclear` | Commercial (unnamed) | no | Low | commercial ID | none | Low | — | commercial | **Exclude as a page** | Thin | exclude (as page) | — |

---

### 7.7 Nuisance pests

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| Boxelder Bug | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "congregate on exterior walls of buildings in spring and summer; can come indoors…; overwinter in cracks and crevices in buildings; may stain lightly colored materials…; **not a health threat**" | Utah — guide scope; W1: statewide | P | Strong |
| Elm Seed Bug | species | USU-UPG + repo (W1) | `verified` | USU fact sheet: "**Utah's newest nuisance pest**"; first Utah record July 2014 (Salt Lake Co.); "now widely distributed along the Wasatch Front and Cache Co., and has been reported **west to Duchesne Co., east to Tooele Co. and south to Grand Co.**"; peak activity mid-June–August | **Duchesne County** is the named extent. **No Uintah County record.** See §16.5 on the compass wording | P | Strong |
| Silverfish & Firebrats | species group | USU-UPG + repo (E10) | `verified` | USU-UPG significance is thin: "scrape surface of paper" | Utah — guide scope | P | Weak |
| Subterranean Termite | species | USU-UPG + repo (W1) | `verified` | USU-UPG: "can cause structural damage to wood and wood products". W1 record: USU — subterranean is "the most common type of termite in Utah"; dampwood and drywood "both uncommon in Utah" | statewide | P | Strong |
| Millipedes & Centipedes | merged group | USU-UPG | `verified` | USU-UPG: "can be a nuisance indoors; **presence of either indicates a moisture issue** inside or outside of the building; not a health risk" | Utah — guide scope | P | Moderate |
| Clover Mite | species | USU-UPG | `verified` | USU-UPG: "migrate indoors in the **late spring and fall**…; mites numbering in the hundreds or thousands can be a major nuisance; can stain fabric when smashed; not a health threat" | Utah — guide scope | P | Strong |
| Carpet Beetles | species group | USU-UPG | `verified` | USU-UPG: "can damage fabrics and furniture; can infest and destroy food items; larval hairs can cause throat irritation if consumed" | Utah — guide scope | P | Moderate |
| Western Conifer Seed Bug | species | USU-UPG | `verified` | USU-UPG: "common invader of homes…; seek overwintering sites indoors when cold fall weather begins (September – October); **resemble kissing bugs (_Triatoma_ spp.) but pose no threat to human health**" | Utah — guide scope | P | Strong |
| Springtails | species group | USU-UPG | `verified` | USU-UPG: "can migrate indoors in large numbers in late spring/early summer when soil starts to dry out, seeking moisture" | Utah — guide scope | P | Moderate |
| Crickets | species group | USU-UPG | `verified` | USU-UPG: "can cause damage to fabrics; typically a **minor** nuisance pest" | Utah — guide scope | P | Weak |
| Isopods (sowbugs/pillbugs) | group | USU-UPG | `verified` | USU-UPG: "occasionally come indoors under thresholds/doors; may be a nuisance indoors" | Utah — guide scope | P | Weak |
| Booklice & Psocids | group | USU-UPG | `verified` | USU-UPG: "nuisance pest indoors; **indicator of moisture issues**" | Utah — guide scope | P | Weak |
| Ground Beetles | group | USU-UPG | `verified` | USU-UPG: "nuisance indoors; **beneficial outdoors**" | Utah — guide scope | P | Moderate |
| Root Weevils | group | USU-UPG | `verified` | USU-UPG: "adults are common nuisance invaders of homes during late summer and fall" | Utah — guide scope | P | Weak |
| False Chinch Bug | species | USU-UPG | `verified` | USU-UPG: "invade buildings to escape **hot, dry weather** when host plants dry up or are removed; cannot survive indoors for long" | Utah — guide scope | P | Moderate |
| Elm Leaf Beetle | species | USU-UPG | `verified` | USU-UPG: "enter buildings in large numbers to overwinter…; larvae skeletonize leaves and defoliate elm trees" | Utah — guide scope | P | Moderate |
| Army Cutworm & Miller Moth | species | USU-UPG | `verified` | USU-UPG: "cutworms common in lawns in spring…; **moths can be a nuisance during migration in late spring (2 – 3 weeks long)**" | Utah — guide scope | P | Moderate |
| Brown Marmorated Stink Bug | species | USU-UPG | `verified` (biology) / `universe` (Utah range) | USU-UPG: "congregate indoors over winter…; not a health threat". **The guide states no Utah distribution**; the architecture doc's "Wasatch Front, not established in either service area" is **not verified here** | **unknown for the service areas** | P (biology only) | Weak on geography |
| Western Leaf-footed Bug | species | USU-UPG | `verified` | USU-UPG: "outbreaks may occur after mild winters; may overwinter on or in buildings or temporarily cluster on the sides of buildings" | Utah — guide scope | P | Weak |
| Red Fire Bug | species | USU-UPG | `verified` | USU-UPG: "may congregate in large numbers on structures or plants; can stain carpet and fabrics if crushed" | Utah — guide scope | P | Weak |
| Earwigs | species | repo (E10, `pests.ts`) | `universe` | **Not in USU's Urban Pest Guide and no source fetched this session** | unverified | — | — |

**Table B — business**

| Entity | Gate-3 status | Service line | Beneficial | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Boxelder Bug | `documented-service` (E10) | Residential | no | High | ID + fall exclusion | W1 draft; named on `/pest-control-vernal` | Low | fall | **Vernal-first** | **Candidate** | Named service, classic seasonal intent | Wave 1 (drafted) | — |
| Subterranean Termite | `documented-service` (E11) | **Termite Control** | no | High | ID + damage + inspection | `/termite-control-st-george`; W1 `termites` category draft | Medium vs. service page | spring swarms | both | **Candidate** | Documented service line | Wave 1 (drafted) | — |
| Silverfish & Firebrats | `documented-service` (E10) | Residential | no | High | ID + treatment | named on `/pest-control-vernal`; `pests.ts` `silverfish` tile | Low | — | both | **Candidate** | Named service + an existing tile with no destination. USU merges the two — one page, not two | Wave 2 candidate | Evidence gap §15 |
| Earwigs | `documented-service` (E10) | Residential | no | High — the pincer bug | ID + reassurance + treatment | named on `/pest-control-vernal`; `pests.ts` `earwigs` tile | Low | summer | both | **Candidate pending evidence** | Named service + existing tile, but `universe` depth — absent from USU's urban guide, no source fetched | Wave 2 pending evidence | — |
| Elm Seed Bug | **`unclear`** | — | no | High | ID + seasonal invasion | W1 draft, links to `/pest-control-vernal` | Low | **mid-June–August** (USU) | Duchesne Co. documented | **Candidate** | Strong Utah evidence and a genuinely low-competition topic — **but it is named in no Wernex service copy.** Reaches service only through E10's generic clause | Wave 1 (drafted) | **Q8** |
| Clover Mite | `unclear` | — | no | High — "tiny red dots on my windowsill" | ID + treatment | none | Low | **late spring + fall** (USU) | both | **Candidate** | Distinctive, seasonal, high-ID-value, real USU detail | Wave 2 candidate | Q8 |
| Millipedes & Centipedes | `unclear` | — | no | High | ID + moisture diagnosis | `pests.ts` `centipedes` tile | Low | — | both | **Candidate** | USU treats them as one entity — a single page satisfies the tile and both search terms | Wave 2 candidate | Q8 |
| Carpet Beetles | `unclear` | — | no | **High — routinely mistaken for bed bugs** | identification | `pests.ts` `beetles` tile | Medium vs. bed-bug page | — | both | **Candidate** | The bed-bug misidentification angle is real and connects to E19 | Wave 2 candidate | Q8 |
| Western Conifer Seed Bug | `unclear` | — | no | **High — kissing-bug scare** | myth correction | none | Medium vs. masked hunter | Sept–Oct | both | **Candidate (informational)** | USU explicitly names the _Triatoma_ confusion and refutes it | Wave 2 candidate | — |
| Crickets | `unclear` | — | no | Moderate | ID + treatment | none | Low | late summer | both | **Hold** | USU calls it minor; thin unique content | later | Q8 |
| Springtails | `unclear` | — | no | Moderate | ID + moisture | none | Medium vs. booklice | late spring/early summer | both | **Hold** | Better as a section of a moisture-pest page | later | Q8 |
| Booklice & Psocids | `unclear` | — | no | Moderate | ID + moisture | none | Medium vs. springtails | — | both | **Hold** | Same — merge candidate | later | Q8 |
| Isopods | `unclear` | — | no | Moderate | ID + reassurance | none | Low | — | both | **Hold** | Thin | later | Q8 |
| Ground Beetles | `beneficial/non-target` | — | **USU: "beneficial outdoors"** | Low | identification | none | High | — | — | **Exclude as a page** | Beneficial; no service framing available | exclude (as page) | — |
| Root Weevils | `unclear` | — | no | Low | identification | none | Medium | late summer/fall | — | **Exclude as a page** | Thin; landscape-adjacent | exclude (as page) | — |
| False Chinch Bug | `unclear` | — | no | Moderate | ID + seasonal | none | Medium | hot/dry spells | St. George-leaning | **Hold** | Plausible southern-Utah relevance but USU states no distribution | later | Q8 |
| Elm Leaf Beetle | `unclear` | — | no | Moderate | ID + overwintering | none | Medium vs. elm seed bug | fall | both | **Hold** | Half landscape (defoliation), half structural. Splitting risks the standing landscape exclusion | later | Q8 |
| Army Cutworm & Miller Moth | `unclear` | — | no | High (the moth half) | ID + seasonal nuisance | none | Low | late spring, 2–3 weeks | both | **Hold** | Real seasonal search spike, but the cutworm half is a lawn pest inside the excluded landscape line | later | Q8 |
| Brown Marmorated Stink Bug | `unclear` | — | no | High | ID + invasion | none | Low | fall | **unknown** | **Hold — geography unverified** | Must not be published until a Utah distribution is actually fetched. §15 | hold | — |
| Western Leaf-footed Bug | `unclear` | — | no | Low | identification | none | High vs. BMSB | fall | — | **Exclude as a page** | Thin lookalike | exclude (as page) | — |
| Red Fire Bug | `unclear` | — | no | Low | identification | none | Medium vs. boxelder | — | — | **Exclude as a page** | Obscure; boxelder bug owns the red-and-black intent | exclude (as page) | — |

---

### 7.8 Biting insects, stored product pests, and the remaining repo entities

**Table A — evidence**

| Entity | Cat/species | Universe source | Depth | Utah evidence (fetched) | Geographic scope | Tier | Strength |
|---|---|---|---|---|---|---|---|
| Bed Bug | species | USU-UPG + repo (E12) | `verified` | USU-UPG: "can be difficult and costly to eliminate; bites may result in redness, itching and swelling; infestations can cause sleeplessness and nervousness". W1 record: USU — "common in Utah" | statewide | P | Strong |
| Masked Hunter | species | USU-UPG | `verified` | USU-UPG: "occasionally found indoors and may bite, even if unprovoked; **considered a beneficial predatory insect**; **does NOT transmit Chagas disease**" | Utah — guide scope | P | Strong |
| Bird Mites | species group | USU-UPG | `verified` | USU-UPG: "can migrate from bird nests or poultry houses (in- and outdoors) or rodents onto structures and crawl onto people and bite, causing skin irritation or itching; can survive up to a month off a host" | Utah — guide scope | P | Moderate |
| Mosquitoes | category | USU-UPG + repo | `verified` | USU-UPG: "**some species can transmit West Nile Virus in Utah**; bites can cause itching" | Utah — WNV stated | P | Strong |
| Head Lice | species | USU-UPG | `verified` | USU-UPG: "bites result in small, red, itchy bumps on scalp and shoulders; will die within 2 days if they are not on a host" | Utah — guide scope | P | Strong |
| Indian Meal Moth | species | USU-UPG | `verified` | USU-UPG: "**very common in homes and food storage areas**; larvae feeding destroys stored food items" | Utah — guide scope | P | Strong |
| Other 9 stored-product pests | species | USU-UPG | `verified` | USU-UPG per entry — all describe stored-food/fabric/book damage; **none states a Utah distribution** | Utah — guide scope | P | Weak–Moderate |
| Ticks | category | repo (`pests.ts`) | `verified` | USU, _Ticks and Tickborne Diseases of Utah_ (July 2023): "The primary tick attaching to humans and pets in Utah is the **Rocky Mountain wood tick**"; "**Lyme disease has not been shown to occur endemically in Utah tick populations**"; Davis et al. (2015) surveyed 160 sites, collected only 119 western blacklegged ticks, 95% from the Sheeprock Mountains (Tooele County), and "All 119 WBLT DNA extracts tested negative for _B. burgderfori_" | statewide; WBLT concentrated in Tooele County | P | Strong |
| Fleas | category | repo (`pests.ts`) | `universe` | **Not verified this session** — USU's flea fact sheet redirects to a DigitalCommons PDF returning 403. The architecture doc's "not common in Utah" claim has no per-entity record in `docs/pest-evidence.md` | unverified | — | — |
| Drywood Termites | species | repo | `verified` | W1 record: USU — "dampwood and drywood termites are both uncommon in Utah". Corroborated: USU's urban guide lists only the subterranean termite | uncommon in Utah | P | Strong (negative) |
| Emerald Ash Borer / Aphids / Borers | — | repo (excluded) | `verified` | Standing exclusions recorded in `pests.ts` with reasons | — | P | Strong |

**Table B — business**

| Entity | Gate-3 status | Service line | Beneficial | ID value | Search intent | Existing coverage | Cannibalization | Seasonality | Local opportunity | Gate | Reason | Wave | Open Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bed Bug | `documented-service` (E12) | Residential + Commercial | no | High | ID + treatment + travel | `/bed-bug-treatment-southern-utah` (402-line page) | **High** | — | both | **Hold** | **Confirms the existing decision.** The service page already owns this intent thoroughly; a species page would compete with it | hold | — |
| Mosquitoes | **`owner-input-required`** | **conflicting** | no | Moderate | prevention + disease | `pests.ts` tile, `href: null`; E14 vs. E15 | Low | summer | both | **Hold** | E14 refers customers out to abatement districts; E15 lists mosquitoes as a pest Wernex's location pages address. Cannot be resolved from the repo | hold | **Q9** |
| Masked Hunter | `beneficial/non-target` | none | **USU: "beneficial predatory insect"** | High | myth correction (Chagas) | none | Medium vs. conifer seed bug | — | both | **Candidate (informational)** | USU explicitly refutes the Chagas fear. Honest, low-competition informational entity | Wave 2 candidate | — |
| Bird Mites | `unclear` | — | no | **High — the "mystery bites" cluster** | identification | E19 names "mites" as a bite cause Wernex distinguishes | Medium vs. bed-bug page | — | both | **Candidate (informational)** | Feeds the bed-bug service page by ruling things out. No treatment claim needed | Wave 2 candidate | — |
| Head Lice | `not-documented` | none | no | Low | medical | none | — | — | — | **Exclude** | A human parasite treated medically, not by structural pest control | exclude | — |
| Indian Meal Moth | `unclear` | Residential + Commercial (unnamed) | no | High | ID + pantry cleanout | `pests.ts` `beetles` tile (loosely) | Low | — | both | **Candidate (as the flagship of one pantry-pest page)** | USU: "very common in homes and food storage areas" — the only stored-product entry with a commonness statement | Wave 2 candidate | **Q7** |
| Other 9 stored-product pests | `unclear` | Commercial (unnamed) | no | Low–Moderate | identification | none | **High** — with each other | — | commercial | **Exclude as pages** | §9: one "Pantry & Stored-Product Pests" entity, not ten. USU publishes its own combined _Pantry Pests_ fact sheet | exclude (as pages) | Q7 |
| Ticks | `unclear` | — | no | High | safety + Lyme myth | `pests.ts` `fleas-ticks` tile | Low | **snowmelt–mid-July** (USU) | both | **Candidate (informational)** | Best-evidenced un-authored entity in the matrix. Corrects a real, widespread Lyme misconception with a named Utah study. **No service claim** | Wave 2 candidate | — |
| Fleas | `unclear` | — | no | Moderate | pets + treatment | `pests.ts` `fleas-ticks` tile | Low | — | both | **Hold pending evidence** | `universe` depth. Also: sharing a tile with ticks is wrong — opposite evidence pictures | hold pending evidence | — |
| Drywood Termites | `category-covered` (E11) | Termite Control | no | Moderate | ID + "do I have drywood" | section inside the `termites` W1 draft | **High** vs. termites page | — | — | **Exclude as a page** | USU: uncommon in Utah. Correctly handled as a section | exclude (as page) | — |
| Emerald Ash Borer / Aphids / Borers | `not-documented` | none | — | — | — | recorded exclusions in `pests.ts` | — | — | — | **Exclude** | Standing exclusions, carried forward unchanged | exclude | — |

---

## 8. Gate funnel

**Universe: 112** (95 USU Urban Pest Guide + 17 repo-side)

**Gate 3 — service relationship:**

| Status | Count |
|---|---|
| `documented-service` (named in Wernex service copy) | 25 |
| `category-covered` (inside a named Wernex category) | 26 |
| `unclear` (generic clause only) | 42 |
| `wildlife/no-service-line` | 7 |
| `beneficial/non-target` | 5 |
| `owner-input-required` | 2 |
| `not-documented` | 5 |
| **Total** | **112** |

**Research depth:**

| Depth | Count |
|---|---|
| `verified` (source fetched, supports the row's claim) | 106 |
| `universe` (Gate-3 assessed, external evidence NOT verified) | 6 |

The 6 `universe` rows: **Earwigs · Fleas · Carpenter Bee · Pack Rat/Woodrat · Camel Spider · Brown
Marmorated Stink Bug (geography only)**. None of these may be described as researched, and none
should be authored until a source is fetched.

**Gate status — the outcome:**

| Gate status | Count |
|---|---|
| **Candidate** | **41** |
| — already drafted as Wave 1 | 17 |
| — new Wave 2 candidates | 22 |
| — candidates pending evidence (`universe` depth) | 2 |
| **Hold** | 24 |
| **Exclude** | 24 |
| **Exclude as a page** (covered as a section of another entity) | 21 |
| **Owner-input / blocked** | 2 |
| **Total** | **112** |

Note that Wave 1 has 19 drafts but only 17 appear as **Candidate**: `turkestan-cockroach` and
`arizona-bark-scorpion` are Holds — the first because this pass added a second negative to its Utah
record, the second because it remains correctly `informational` with no service-area documentation.

---

## 9. Category vs. species — where splitting would be thin content

The single most important structural finding: **the universe's 112 entries do not map to 112 pages,
and three USU categories collapse dramatically.**

| USU entries | Recommended Wernex entities | Ratio | Why |
|---|---|---|---|
| **Flies (14)** | **4** — "House Flies" (category) · "Drain & Fruit Flies" (small-fly ID) · "Cluster Flies" (with face fly as a section) · "Crane Flies" (myth) | 14 → 4 | Identification and Wernex relevance are near-identical across blow/flesh/lesser-house/stable/soldier flies. USU itself says the face fly behaves "similar to cluster flies" — that is a section, not a page. |
| **Stored Product (10)** | **1** — "Pantry & Stored-Product Pests", Indian meal moth as flagship | 10 → 1 | Identical intent ("bugs in my flour"), identical treatment, identical Wernex relationship. USU publishes its own combined _Pantry Pests_ fact sheet. Ten pages here would be the definition of thin-content splitting. |
| **Spiders (12)** | **6** — black widow · wolf · cellar · hobo & grass (with hacklemesh) · jumping · crevice weaver | 12 → 6 | Ground/orb/sac/woodlouse spiders share one message ("harmless, beneficial, here's how to tell") and belong in a spider category page. |
| **Millipedes & Centipedes** | **1** | already merged | USU merges them; the `pests.ts` `centipedes` tile should resolve to that one page. |
| **Silverfish & Firebrats** | **1** | already merged | USU merges them; firebrat is the hot-climate variant, i.e. a section. |
| **Springtails + Booklice** | **1** (if authored at all) | 2 → 1 | Both are USU-documented *moisture indicators* with the same remedy. |

The reverse also applies — **do not split what is already working.** Bed bugs, termites, and
scorpions each have a functioning destination; the matrix recommends no new species pages that would
compete with them beyond the three scorpion species already drafted.

---

## 10. Beneficial, protected, and non-target organisms

Explicitly identified so none is silently converted into a treatment page.

| Organism | Status | Documented position | Hard rule |
|---|---|---|---|
| **Honey Bee** | Beneficial — pollinator | E6: "we coordinate with local beekeepers for live relocation when possible". USU: "Bees are a valuable resource; consider contacting your local beekeepers' association for hive or swarm extraction" | Relocation/referral framing only. **Never** "Wernex treats honey bees." |
| **Bumble Bee** | Beneficial — "important pollinators" (USU) | No Wernex claim exists | Informational only |
| **Solitary & Ground Nesting Bees** | Beneficial — "important pollinators" (USU) | No Wernex claim exists | Informational only |
| **Masked Hunter** | "considered a beneficial predatory insect" (USU) | No Wernex claim | Informational/myth only |
| **Ground Beetles** | "beneficial outdoors" (USU) | No Wernex claim | Not a page |
| **Mud Daubers** | Wernex sells removal (E5); USU says "may be considered beneficial since they prey on many species of spiders" | Both are true | A page may sell nest removal **and** must carry USU's framing. Do not omit one to sell the other. |
| **Wolf · Cellar · Jumping · Orb · Sac · Ground · Woodlouse spiders** | USU calls each "beneficial" and "not known to be a health hazard" | They sit inside Wernex's documented spider service line (E1/E4/E17) | Treatment framing is defensible **because the service line is documented**, but every page must carry USU's beneficial/harmless statement. `/pest-control-vernal` already models this: "harmless cellar and wolf spiders". |
| **Hobo & Grass Spiders** | USU: "spiders should be considered beneficial"; "do not cause necrotic lesions" | W1 draft is `treatable` | Keep the myth-correction tone. The page must not read as an extermination pitch for an animal USU calls beneficial. |
| **European Starling** | Regulated — Utah Admin. Code R657-3-7 | No service line | Excluded |
| **Bats** | Protected; 18 Utah species | No service line | Excluded |

Nothing in this matrix converts "Wernex helps identify/relocate this" into "Wernex treats this."

---

## 11. Wildlife

The evidence is unchanged and this pass confirms it: **Wernex has four documented service lines —
Residential, Commercial, Termite, Rodent (E2) — and no general wildlife line.**

USU's Vertebrate Pests category has 12 entries. They split cleanly:

- **Inside the documented Rodent line (4 of the 12, + 2 from Universe B):** deer mouse, house mouse,
  Norway rat, voles, plus roof rat and pack rat. All named in Wernex service copy.
- **Genuinely ambiguous (1):** pocket gophers — the same class of burrowing yard rodent as voles,
  which Wernex *does* service. → **Q4**.
- **Outside any documented line (7):** bats, skunks, ground squirrels, tree squirrels, rock pigeon,
  European starling, house sparrow. **Excluded.**

Being listed by USU as an urban pest is not a Wernex service relationship. Each of the seven was
tested against the service evidence individually and each failed. The single word "wildlife" appears
once in the entire site (`pest-control-washington-ut.astro:79`, describing development pushing
wildlife into neighborhoods) — that is scene-setting, not a service claim.

---

## 12. Existing Wave 1 entities — confirmed, qualified, or questioned

The 19 drafts are included so the inventory reads as a whole. **None was rewritten, reclassified, or
republished.**

| Entity | Verdict | Detail |
|---|---|---|
| Black Widow | **Confirmed** | Named service (E4); USU-UPG corroborates the risk framing |
| Brown Recluse (myth) | **Confirmed + strengthened** | Absent from USU's 12-entry Utah spider list, which carries the desert recluse instead — a second independent negative |
| Hobo Spider | **Qualified** | USU-UPG merges hobo *with grass spiders*, calls them beneficial, and gives a precise season (Aug–Oct). Consider the merged identity and add the season. |
| Arizona Bark Scorpion | **Confirmed as `informational`, new conflict** | A second USU source says "southern Utah along the Colorado River" — see §16.2. Still nothing supports St. George. The `informational` call holds. |
| Desert Hairy Scorpion | **Confirmed** | USU: southwestern Utah, largest size class |
| Northern Scorpion | **Confirmed on evidence, questioned on service** | USU: "All of Utah". But the draft links to `/pest-control-vernal` and **no Wernex copy documents scorpion service in the Uintah Basin** → **Q1** |
| Carpenter Ant | **Confirmed** | Named service (E3) |
| Pavement Ant | **Confirmed, discrepancy sharpened** | §16.1 — the conflict is now known to be *internal to a single USU fact sheet* |
| Harvester Ant | **Qualified** | USU-UPG: harvester ants "**do not invade homes**". The page must frame this as a yard/turf and sting entity, not a home invader. Also gives a real season: June–October. |
| Termites | **Confirmed** | Documented service line (E11); USU-UPG lists only the subterranean termite for Utah structures |
| German Cockroach | **Confirmed + geographic question** | USU: "primary kitchen-infesting roach in Utah". But E1 names cockroaches for "St. George and Washington County" while the draft links to Vernal → **Q2** |
| Turkestan Cockroach | **Hold reinforced** | Second negative: absent from USU's four-species Utah cockroach list |
| Western Yellowjacket | **Confirmed + seasonal detail** | Named service (E5); USU adds "scavenge in fall making outdoor events dangerous" |
| European Paper Wasp | **Confirmed** | Named service (E5) |
| Deer Mouse | **Confirmed** | Named service (E7); USU-UPG independently states the hantavirus carrier status |
| House Mouse | **Confirmed** | Named service (E7) |
| Roof Rat | **Confirmed, hedge validated** | Absence from USU's Utah vertebrate list is consistent with a recent arrival and supports keeping the news-sourced "recently reported" wording |
| Elm Seed Bug | **Questioned on service** | Utah evidence is strong, but the entity is **named in no Wernex service copy** — it reaches service only through E10's generic "other occasional invaders" clause → **Q8**. Geography confirmed as Duchesne County; see §16.5 on USU's compass wording |
| Boxelder Bug | **Confirmed** | Named service (E10) |

**Net: 15 confirmed, 3 qualified, 3 carrying a new open question (northern scorpion, german
cockroach, elm seed bug), 1 hold reinforced.** No classification was changed by this pass.

---

## 13. The candidate list

**41 candidates.** 17 already drafted, 22 new, 2 pending evidence.

### Already drafted (Wave 1) — 17
black-widow · brown-recluse · hobo-spider · desert-hairy-scorpion · northern-scorpion · carpenter-ant
· pavement-ant · harvester-ant · termites · german-cockroach · yellow-jacket · paper-wasp ·
deer-mouse · house-mouse · roof-rat · elm-seed-bug · boxelder-bug

### New candidates — 22

**Tier A — named in Wernex service copy, no page exists (highest confidence, 6)**

| Entity | Why it is Tier A |
|---|---|
| **Wolf Spider** | Named on `/spider-control-st-george`, `/pest-control-southern-utah`, `/pest-control-vernal`, and llms.txt. Genuine ID/reassurance intent. The clearest gap in the library. |
| **Voles** | Named twice in rodent service copy. Distinct ID intent ("mouse or vole"). Vernal-first. Carries a real USU/Wernex conflict a page can resolve honestly (§16.3). |
| **Cluster Fly** | The only fly Wernex names. Pairs with boxelder bug as the Vernal fall-exclusion story. |
| **Silverfish & Firebrats** | Named service **and** an existing `pests.ts` tile with `href: null`. |
| **Norway Rat** | "rats" named in E7; the counterpart the roof-rat draft implies. |
| **Mud Daubers** | Named service (E5) with a genuine honesty problem only a page can solve. |

**Tier B — category-covered, strong Utah evidence (10)**

Odorous House Ant · Field Ant · Velvety Tree Ant · American Cockroach · Oriental Cockroach ·
Cellar Spider · Jumping Spider · Crevice Weaving Spider · Baldfaced Hornet · Sand Wasps & Cicada
Killers

**Tier C — informational / myth-correction, no service claim needed (6)**

| Entity | The intent it owns |
|---|---|
| **Ticks** | "Do I need to worry about Lyme in Utah?" — answered by a named USU study. Best-evidenced un-authored entity here. |
| **Honey Bee** | Swarm safety + relocation, with USU's Washington County Africanized-bee statement. |
| **Masked Hunter** | "Is this a kissing bug?" — USU explicitly says no. |
| **Western Conifer Seed Bug** | The same fear, a different insect. |
| **Crane Flies** | "Giant mosquito" — USU-clean correction. |
| **Bird Mites** | The "mystery bites that aren't bed bugs" cluster; feeds E19. |

**Tier D — nuisance entities with real seasonal/ID hooks (4)**

Clover Mite · Millipedes & Centipedes · Carpet Beetles · Indian Meal Moth (as the one pantry-pest
page)

**Plus the "House Flies" and "Drain & Fruit Flies" consolidated entities**, both contingent on **Q7**.

### Candidates pending evidence — 2
**Earwigs** (named service + existing tile, but `universe` depth) · **Pack Rat / Woodrat** (named
service on two pages, but `universe` depth)

---

## 14. Owner questions

Nine. Each one changes the candidate set or blocks a page; nothing is asked for the sake of asking.

**Q1 — Does Wernex treat scorpions in the Uintah Basin?**
Scorpion service is documented for St. George only (E13, `/scorpion-control-st-george`).
`/pest-control-vernal` never mentions scorpions. The `northern-scorpion` draft carries a Vernal
service link. _Blocks:_ whether `northern-scorpion` can publish as `treatable` with that link, or must
become `informational`.

**Q2 — Is cockroach service offered in the Uintah Basin, or St. George only?**
E1 is the only cockroach service evidence and it is scoped to "the St. George and Washington County
area". The `german-cockroach` draft links to both southern-Utah and Vernal service pages.
_Blocks:_ the `relatedServices` on the German cockroach draft and the geography of any future
American/Oriental cockroach page.

**Q3 — How should vole service be described?**
Wernex's copy says voles "move in from yards and fields" toward homes and overwinter inside. USU says
voles "occasionally enter buildings by accident, **but do not become established indoors**" (§16.3).
Both cannot be written on the same page. _Blocks:_ the vole page, and it also affects existing copy on
two live pages.

**Q4 — What is the actual boundary of the Rodent Control line?**
Specifically: pocket gophers (in or out?), ground squirrels, tree squirrels. Voles and pack rats are
in; USU groups gophers and squirrels with them as burrowing vertebrates. _Blocks:_ whether pocket
gophers is a candidate or an exclusion.

**Q5 — Confirm the bee policy.**
E6 documents beekeeper relocation for honey bees and E5 documents carpenter-bee treatment. Nothing
documents a position on bumble bees or ground-nesting bees, which USU calls important pollinators.
_Blocks:_ the honey-bee informational page and whether bumble/solitary bees can be written at all.

**Q6 — What is a "desert spider"?**
The term appears in the `/spider-control-st-george` title, description, JSON-LD, OG tags, and
llms.txt, and matches no taxon in any source fetched. Candidates: desert recluse, crevice weaver,
desert tarantula. _Blocks:_ any page for the term, and it is a live accuracy exposure on an existing
page.

**Q7 — What does the Commercial program actually cover by pest?**
The commercial page names facility types but no pests. This gates the entire fly cluster, all 10
stored-product pests, phorid flies, and pharaoh ants — roughly a quarter of the universe.
_Blocks:_ House Flies, Drain & Fruit Flies, Pantry Pests.

**Q8 — Which "occasional invaders" does routine service actually include?**
E10 covers "cluster flies, earwigs, silverfish, and **other occasional invaders**". That generic
clause is the only service path for 42 entities, including the already-drafted **elm seed bug**. A
short list would convert many `unclear` rows into real candidates or real exclusions.
_Blocks:_ elm seed bug's service framing, clover mite, millipedes/centipedes, carpet beetles.

**Q9 — Mosquitoes: refer out, or service?**
`public/script.js` refers customers to public abatement districts; two location pages list mosquitoes
as local pest pressure Wernex addresses. _Blocks:_ the `pests.ts` mosquito tile, which currently has
`href: null`, and the chat widget's accuracy.

---

## 15. Evidence gaps

| Gap | Effect | To resolve |
|---|---|---|
| **USU fact sheets behind DigitalCommons return 403** — cockroaches, carpenter bees, clover mites, pantry pests, crickets, millipedes, springtails, booklice, fleas, spiders, carpenter ants, subterranean termites, boxelder bug | These redirect from `extension.usu.edu/planthealth/research/<slug>` to `digitalcommons.usu.edu/cgi/viewcontent.cgi?...` and refuse automated fetches. Wave 1 is unaffected (quotes recorded Aug 27 in `docs/pest-evidence.md`), but new candidates relying on them cannot reach `verified` | Fetch manually or via a different client |
| **web.archive.org unreachable from this environment** | The retired `/pests/schoolipm/` guide could not be compared against the current one | Not blocking — the live guide was located and used |
| **Carpenter bee Utah range unverified** | The Washington/Kane/Garfield county claim appears in `docs/pest-entity-system.md` §2 but has **no record in `docs/pest-evidence.md`** and could not be re-fetched. A live St. George service claim (E5) rests on it | Re-fetch the USU carpenter bee fact sheet before any page |
| **Earwigs** | Named service + existing tile, but absent from USU's urban guide and no source fetched | Fetch USU's European earwig material |
| **Pack rat / woodrat** | Named service on two live pages, no authoritative source | Fetch a USU/UDAF woodrat source |
| **Fleas** | `pests.ts` tile; "not common in Utah" is unverified | Fetch the USU flea fact sheet |
| **Camel spider** | In the architecture doc, absent from USU's guide, no source | Fetch or drop |
| **BMSB Utah distribution** | "Wasatch Front, not established in either service area" is unverified. Geography must be right before publication | Fetch a USU/UDAF distribution statement |
| **Odorous house ant "emerging"** | The architecture doc calls it emerging; the fetched USU guide page does not say so and the fact sheet 404'd | Re-source or drop the word |
| **No demand data of any kind** | The matrix ranks nothing by volume, because there is nothing to rank with | Wave 1 probe · Wernex call records · owner knowledge |

---

## 16. Open source discrepancies

Recorded, not resolved. Each is a small reconciliation task to be done deliberately before the
affected language reaches a published page.

### 16.1 Pavement ant — the conflict is *inside one fact sheet* (sharpens the existing record)

`docs/pest-evidence.md` §10 records this as a disagreement between two USU pages. Re-fetching the
fact sheet shows the disagreement is **internal to that single document**:

| Location in USU _Pavement Ants_ (June 2020) | Claim | Qualifier |
|---|---|---|
| **Quick Facts** box | "Pavement ants are the most common pest ant in and around structures **in Utah**." | **none — reads statewide** |
| **Introduction**, first sentence | "Pavement ants (Formicidae, _Tetramorium immigrans_) are **northern Utah's** most common pest ant in and around homes and structures." | **northern Utah** |

A **third** USU source adds a naming conflict: the Urban Pest Guide's pavement-ant page uses
_Tetramorium caespitum_ and makes **no commonness claim at all**, while the fact sheet explicitly
argues that _T. immigrans_ supersedes _T. caespitum_ on genetic grounds (Wagner et al. 2017; Zhang
et al. 2019).

- **Sources:** <https://extension.usu.edu/planthealth/research/pavement-ants> ·
  <https://extension.usu.edu/planthealth/ipm/structural-pest-id-guide/pavement-ant.php> ·
  USU _Top 20 Identified Insects_ (per the Aug 27 record)
- **Safest current interpretation:** unchanged — the draft's narrower claim (northern Utah, "most
  common pest ant") plus the newer binomial (_T. immigrans_) is the conservative reading of all
  three, and remains safe to leave in place.
- **Constraint:** the broader superlative ("Utah's most common household pest") must **not** appear
  on a published page.
- **To resolve:** USU would have to correct the internal inconsistency, or a separate Utah-wide
  survey would have to settle it. Not resolvable by us.

### 16.2 Arizona bark scorpion — two USU sources give two different Utah ranges (NEW)

| Source | Range statement | Danger wording |
|---|---|---|
| USU _Scorpions_ fact sheet (June 2008) | Species table: **Kane County** | "The only species in Utah that is **potentially harmful** to humans" |
| USU _Urban Pest Guide_ → Scorpions | "found only in **southern Utah along the Colorado River**" | "the only **deadly** scorpion in Utah" |

- **Nature of the disagreement:** the guide's range is broader and less precise than the fact sheet's
  single county, and its danger wording is materially stronger ("deadly" vs. "potentially harmful").
- **Note on repository history:** the Aug 27 pass removed a "Colorado River corridor" phrase as
  NOT FOUND in the fetched fact sheet. That removal was correct for the source it was checked
  against — but a **different USU source does use that phrasing.** The phrase was not invented; it
  had been attributed to the wrong USU page.
- **Safest current interpretation:** **neither source supports an established St. George
  population.** Kane County and the Colorado River corridor are both outside Washington County,
  whose river is the Virgin. The `arizona-bark-scorpion` draft's `informational` classification and
  the hedged copy on `/scorpion-control-st-george` are correct under both readings.
- **To resolve:** a current USU or Utah museum distribution record for _Centruroides_ in Washington
  County. Until then, do not use "deadly", and do not widen the range beyond what the *cited* page
  says.
- **Carried forward:** the unresolved _C. exilicauda_ vs. _C. sculpturatus_ naming split, already on
  the page.

### 16.3 Voles — USU contradicts Wernex's own service copy (NEW, and the most consequential)

| Source | Statement |
|---|---|
| USU _Urban Pest Guide_ → Voles | "cause damage to turf and ornamental plantings; **occasionally enter buildings by accident, but do not become established indoors**" |
| `rodent-control-vernal.astro:144` | "deer mice, house mice, and voles abandon the fields, ditch banks, and woodpiles… and head for the nearest warm, sheltered space" |
| `rodent-control-vernal.astro:307` | "mice **and voles** move from fields and yards toward the warmth, food, and shelter of homes, garages, and outbuildings, **and many will overwinter inside walls and attics**" |
| `pest-control-vernal.astro:167` | "Deer mice **and voles** are our number-one cold-weather call. They slip into homes, garages, barns, and outbuildings through gaps the width of a pencil." |

- **Nature of the disagreement:** Wernex's copy attributes indoor establishment and overwintering to
  voles. USU says specifically that voles do **not** become established indoors.
- **Safest current interpretation:** the two are reconcilable only if the Wernex sentences are
  describing *mice* and have swept voles along with them — which is what the sentence construction
  ("mice and voles… many will overwinter inside walls and attics") suggests. **A vole page must be
  written as a yard/perimeter and exclusion entity, not an indoor-infestation entity.**
- **Consequence:** this is not only a future-page issue. It affects wording already live on
  `/rodent-control-vernal` and `/pest-control-vernal`. **No change was made to either page** —
  flagged for a deliberate decision. → **Q3**
- **To resolve:** owner confirmation of what vole service actually consists of (yard/burrow work vs.
  indoor trapping), plus a wording pass on the two live pages if the answer is "yard".

### 16.4 Search snippets that contradicted the pages they cited (method note, NEW)

Two snippets returned during this pass asserted content the fetched page did not contain:

1. A snippet attributed "pavement ants are the most common pest ant in and around structures in
   Utah" to the **Urban Pest Guide** pavement-ant page. The fetched page contains no commonness
   claim at all; that sentence is in the *fact sheet's* Quick Facts (§16.1).
2. A snippet described the Urban Pest Guide's ant listing with a structure that only partly matched
   the fetched index.

Neither was used as evidence. Recorded because it is a concrete instance of the brief's rule that
snippets are not sources — and because the first one, if trusted, would have collapsed the
pavement-ant discrepancy in the wrong direction.

### 16.5 Elm seed bug — USU's compass directions are internally inconsistent (NEW)

USU _Elm Seed Bug_ (Oct 2018): "elm seed bug is now widely distributed along the Wasatch Front and
Cache Co., and has been reported **west to Duchesne Co., east to Tooele Co. and south to Grand Co.**"

- **The problem:** Duchesne County is **east** of the Wasatch Front; Tooele County is **west**; Grand
  County is **east/southeast**, not south. All three compass words are wrong relative to Utah
  geography.
- **Safest current interpretation:** the **county names** are the defensible facts; USU's directional
  words are not. The Wave 1 record's conclusion — the documented extent reaches **Duchesne County**
  and there is **no Uintah County record** — is correct and unaffected.
- **Constraint:** do not repeat USU's compass wording on a page. Name the counties.
- **To resolve:** a corrected USU edition, or a newer Utah distribution record.

### 16.6 `llms.txt` vs. service pages

Three disagreements, detailed in §5: the 10-vs-4 service-line count; llms.txt omitting seven pests
that service pages explicitly claim; and the undefined "desert spider". All recorded, none resolved.

### 16.7 On the USU _Top 20 Identified Insects_ list — rejected as a ranking source

Mentioned only to record why it is not used. It is a list of what is most frequently **submitted to
USU's diagnostic lab**, biased toward Extension's clientele and toward plant and landscape questions;
eleven of its twenty entries are landscape/ornamental and two are beneficial insects. It is not a
frequency survey of Utah pests and **was not used to rank anything in this matrix.** Nothing in this
document is ordered by commonness, because no authoritative commonness ranking exists.

---

## 17. Recommendation

**Do not publish anything new during the measurement window. The probe remains the governor.**

The matrix produced 41 candidates. That number is an *inventory*, not a publication plan, and it
should not be read as "41 pages." Here is what the evidence actually supports doing, in order.

**1. Nothing changes before the measurement window closes.** Wave 1's 19 drafts stay
`published: false`. The canonical-consolidation measurement is the reason this project has a
credible evidence culture at all; spending it to ship 22 more URLs would be the exact mistake the
project has already learned twice.

**2. Answer the nine owner questions first — they are cheaper than any research.** Q7 and Q8 alone
govern the 42 `unclear` entities, more than a third of the universe. Q1, Q2, and Q3 touch pages that
are *already drafted or already live*. A single conversation with the owner is worth more than
another week of source-fetching.

**3. Close the six `universe`-depth gaps before treating any of them as candidates.** Two of them —
carpenter bee and pack rat — support **live service claims on production pages today** with no
verified Utah evidence behind them. That is the highest-value research left, and it is small.

**4. When the window closes, publish Wave 1 as already recommended (18 entities), not more.** This
pass confirmed 15 of the 19 outright, qualified 3 on tone or framing rather than fact, and reinforced
the one existing hold. It found no reason to expand Wave 1 and three reasons to tighten it
(Q1, Q2, Q8).

**5. Let Wave 2 be chosen by measurement, not by this list.** If Wave 1 measures well, the Tier A
six are the natural next set — every one is named in Wernex's own service copy, has an identifiable
search intent, and has no page. **Wolf spider is the single strongest candidate in the entire
matrix** and should be first regardless of what else is chosen: it is named on three live pages and
in llms.txt, and has no destination.

**6. Treat the Tier C informational six as a separate, later experiment.** Ticks, honey bee, masked
hunter, crane flies, western conifer seed bug, and bird mites are genuinely useful and genuinely
low-competition, but they carry no commercial intent. They are a topical-authority play and should be
measured as one — not mixed into a commercial wave where their performance would be misread.

**7. Do not build the long tail.** 21 entities are marked *exclude as a page* precisely because they
belong inside other pages. Ten stored-product pests are one page. Fourteen flies are four. Twelve
spiders are six. The universe is 112; the defensible page count is a fraction of that, and the
fraction should be discovered by measurement rather than asserted here.

**What this recommendation deliberately does not say:** how many pages the Pest Library should
eventually have. The evidence does not support a number, and the brief is right that inventing one is
how this project has gone wrong before.

---

## 18. Validation performed

| Check | Result |
|---|---|
| Every `verified` row has fetched supporting evidence | Pass — 106 rows; USU Urban Pest Guide entry pages (95, fetched 2026-08-28), 4 USU research fact sheets (pavement ants, scorpions, ticks, elm seed bug, fetched 2026-08-28), and `docs/pest-evidence.md` (fetched 2026-08-27) |
| Every source correctly attributed | Pass — §16.1 and §16.2 exist *because* two claims had been attributed to the wrong USU page; both are now corrected and recorded |
| No fabricated quotations | Pass — every quotation was extracted programmatically from a fetched page |
| No `universe` row described as researched | Pass — 6 rows, each labelled and listed in §8 and §15 |
| No service relationship inferred from competitors | Pass — Gate 3 used only the 19 first-party quotes in §4 |
| No beneficial/wildlife entity silently classified as treatable | Pass — §10 and §11; 5 beneficial + 7 wildlife explicitly held out, and the beneficial spiders inside the service line carry the flag rather than having it hidden |
| Geographic claims match their evidence | Pass — "Utah — guide scope" is used wherever the source states no finer distribution; county-level claims (Washington, Kane, Duchesne, Tooele) name their county and are not widened |
| No existing page modified | Pass — `git status` shows only `docs/pest-candidate-matrix.md` |
| No pest URL created | Pass — no file added under `src/pages/` or `src/content/pest-library/` |
| No `published` flag changed | Pass — all 19 remain `published: false` |
| No sitemap changed | Pass — `public/sitemap.xml` untouched |
| No Bug Identifier code changed | Pass — `bug-identifier.astro` and `public/script.js` untouched |
| No deployment, push, or commit | Pass |
| Project build | Pass — `npm run build` → **28 pages**, unchanged |

---
---

# PART II — OWNER-TRUTH RESOLUTION PASS

_Added Aug 28, 2026, after the matrix above. Branch `pest-wave-1`, HEAD `7bbb744`._

**Purpose:** resolve the nine owner questions in §14 and the six `universe`-depth rows in §15
against the repository and against authoritative sources, so that the business truth — not the
research inventory — determines what can honestly be published.

**Nothing was published, no URL was created, no service-page copy was changed.** Where this pass
found that live copy is unsupported, it says so and stops (§19.3, §23).

**Branch note.** The task framing referred to `main`. Work was done on `pest-wave-1`, which is three
commits ahead of `main` and contains the hardened validator, the published-gated hub join, and the
pavement-ant discrepancy record that Part I cites. `main` (`42bd83d`) already carries all 19 drafts
and the other three docs. Switching would have discarded the tooling this pass validates against.

**Supersession notice.** This pass changes four conclusions reached in Part I. Each is marked
**SUPERSEDES** below, and the Part I text is left in place deliberately — the project's rule is that
disagreements are recorded, not silently reconciled, and that applies to disagreements with our own
earlier pass.

---

## 19. The nine owner questions, resolved

### Q1 — Basin scorpion service · **owner input required**

**Repository evidence, in full:**

| Source | Verbatim |
|---|---|
| `public/llms.txt:21` | "**Scorpion Control:** Three-phase protocol — UV blacklight detection sweeps, targeted barrier applications, and exclusion sealing. **Scorpion control specialists for Southern Utah.**" |
| `scorpion-control-st-george.astro` | Entire page is scoped to "St. George, Washington, Hurricane, and Southern Utah" |
| `pest-control-vernal.astro` | **Zero occurrences of "scorpion"** — the page's own pest list is rodents, spiders, ants, wasps/hornets, box elder bugs, cluster flies, earwigs, silverfish |
| `rodent-control-vernal.astro:265` | Customer testimonial: "Wernex has consistently kept the insects **and scorpions** under control at our home. Rodents too." |
| `northern-scorpion.md` | `intent: treatable`; `relatedServices: [/pest-control-vernal]`; treatment copy: "Wernex's Vernal service is built around the perimeter and the entry points, which is exactly what reduces scorpion encounters…" |

**What the repository establishes:** a Southern-Utah scorpion service line, and nothing else. No
Wernex-authored sentence anywhere offers scorpion service in the Uintah Basin.

**What remains unknown:** whether the Vernal residential program in practice addresses scorpions.

**On the testimonial.** It is the only Basin-adjacent scorpion evidence and it is *customer* speech,
not a service claim — the same standard that kept cockroaches out of the documented set until an
actual service sentence was found (§4 E1). A testimonial is evidence that a customer was satisfied,
not evidence of a defined service. It is recorded here and **not** counted as Gate-3 evidence.

**On the draft's careful wording.** `northern-scorpion.md` does not claim a Basin scorpion service
line. It says the *existing* Vernal perimeter-and-exclusion service is what reduces scorpion
encounters — which is true of any perimeter program and is not a new claim. That is a meaningfully
weaker assertion than "we do scorpion control in Vernal," and it is why this is a question rather
than a contradiction.

**Status: `owner input required`.** This determines whether `northern-scorpion` publishes as
`treatable` with `/pest-control-vernal`, or as `informational` with no service link. It cannot be
resolved from the repository. **Recommended default if the owner is unavailable:** publish as
`informational`, matching how `arizona-bark-scorpion` was handled when service-area documentation
was absent.

**Minor observation, not a blocker:** `northern-scorpion.md` lists *USU Top 20 Arachnids* as one of
its two required sources. That is a UPPDL diagnostic-lab submission list, the arachnid counterpart of
the *Top 20 Identified Insects* list this project rejected as a ranking source (§16.7). No claim on
the page appears to depend on it for commonness — the range and size claims come from the Scorpions
fact sheet — but it should not be used to support one.

---

### Q2 — Cockroach geography and service scope · **partially confirmed / owner input required on the Basin**

**Repository evidence, in full:**

| Source | Verbatim | Geographic scope |
|---|---|---|
| `services.astro:104` | "…an invisible barrier against pests — including ants, spiders, scorpions, wasps, and **cockroaches** common in **the St. George and Washington County area**." | St. George / Washington County |
| `public/script.js:60` | "**Cockroaches are covered under our residential and commercial pest control.** The first step is identifying the species, because a kitchen roach and an outdoor one need different work. Want a free inspection?" | **none stated** |
| `index.astro:461`, `testimonials.astro:50` | Customer review: "The cockroaches are awful here in Saint George and we never see any in our house since Wernex started spraying for us." | St. George (customer speech) |
| `public/llms.txt` | **No cockroach mention anywhere** — see §5.2 | — |
| `pest-control-vernal.astro` | **No cockroach mention anywhere** | — |

**What the repository establishes — confirmed:**

1. Cockroaches **are** covered, and covered under **both** the residential and the commercial line.
   The chat widget states this without qualification, and it is the only place in the repository that
   names a pest as commercial-line covered (see Q7).
2. For **St. George / Washington County**, coverage is documented twice and independently.
3. There is **no cockroach-specific service line**. Cockroaches sit inside Residential and Commercial.
   Nothing in the repository supports inventing one, and none was invented.

**What remains unknown:** whether the Vernal/Uintah Basin residential program includes cockroach
work. `/pest-control-vernal` names eight pest groups and cockroaches is not among them.

**Effect on the drafts.** `german-cockroach.md` sets `relatedServices: [/pest-control-southern-utah,
/pest-control-vernal]`. Its treatment copy — "German cockroaches are covered under Wernex's
residential and commercial pest control" — matches the chat widget almost verbatim and is
**supported**. Its `utahDistribution` line, "Vernal apartments and St. George restaurants face the
identical pest," is a *biological* claim (USU: the species is climate-independent and strictly
indoor), not a service claim, and is also supported. The only unsupported element is the
`/pest-control-vernal` service link.

**Status: `confirmed` for residential + commercial coverage and for St. George geography;
`owner input required` for whether the Basin program includes cockroaches.** If the answer is no,
the fix is to drop one entry from `relatedServices` — not to rewrite the page.

**Turkestan cockroach:** unaffected. It remains `informational`, `published: false`, and its
`utahDistribution` already says "We are not aware of a Utah State University or state agency record
establishing it in Utah." Part I added a second negative (absence from USU's four-species Utah
cockroach list). Hold stands.

---

### Q3 — Vole framing · **CONTRADICTED**

This is the most consequential finding of the pass, and it now rests on **two** USU sources rather
than one.

**Source A — USU Urban Pest Guide → Voles:**
> "cause damage to turf and ornamental plantings; **occasionally enter buildings by accident, but do
> not become established indoors**"

**Source B — USU Extension, _Utah Vertebrate Animal Pest Control_ (Category 12 applicator manual),
Voles chapter (pp. 26–30)** —
<https://extension.usu.edu/forestry/files/publications/other-publications/vertebrate-animal-pest-control.pdf>
(fetched and text-extracted 2026-08-28):
> "Five species of voles live in Utah." (prairie, meadow, long-tailed, montane, water)
> "Voles occupy a wide variety of habitats. They prefer areas with heavy ground cover of grasses,
> grass-like plants or litter."
> "**Voles are active day and night, year round. They do not hibernate.**"
> "Voles construct many tunnels and surface runways with numerous burrow entrances."
> Damage identification covers **only** orchards, forests, field crops, lawns and golf courses —
> girdling, runways, tunnel systems. **There is no indoor damage category, and no mention of voles
> entering, nesting in, or overwintering in structures anywhere in the chapter.**

**Wernex's current live copy:**

| Location | Verbatim | Verdict |
|---|---|---|
| `rodent-control-vernal.astro:81`/`:292` | "voles (often called field or meadow mice) that **move in from yards and fields**" | **Supported** — describes origin, matches USU |
| `rodent-control-vernal.astro:5` | "Wernex removes mice, **voles** & rats with trapping, exclusion, and sealing of entry points" | **Supported** — service claim, no indoor-biology claim |
| `pest-control-vernal.astro:241` | "mice, voles, box elder bugs, and cluster flies all **push toward** the warmth of your home" | **Borderline** — "toward" is defensible |
| `rodent-control-vernal.astro:144` | "deer mice, house mice, and voles abandon the fields, ditch banks, and woodpiles… and **head for** the nearest warm, sheltered space" | **Borderline** — "head for" is defensible |
| `rodent-control-vernal.astro:105` / `:307` | "mice **and voles** move from fields and yards toward the warmth… of homes, garages, and outbuildings, **and many will overwinter inside walls and attics**" | **CONTRADICTED** |
| `rodent-control-vernal.astro:38` (JSON-LD) | "ongoing monitoring for mice, **voles**, and rats **in homes**, businesses, barns, and outbuildings" | **CONTRADICTED** |
| `pest-control-vernal.astro:167` | "Deer mice **and voles** are our number-one cold-weather call. They **slip into homes**, garages, barns, and outbuildings through gaps the width of a pencil." | **CONTRADICTED** |

**What the repository establishes:** the **service relationship is confirmed** — voles are named in
Wernex's rodent service copy four times, including in the page description and the JSON-LD service
description. Wernex treats voles. That is not in doubt.

**What is contradicted** is the *behavioral* framing, in three specific places. USU's "they do not
hibernate" and "active year round" statements cut directly against the "voles push indoors for winter
warmth" narrative, and the applicator manual's damage taxonomy has no indoor category at all.

**Safest reading:** the contradicting sentences are constructions in which voles are swept along with
mice — "mice **and voles**… many will overwinter inside walls and attics." The indoor behavior is
true of the mice and has been extended to the voles by proximity. A vole page must be written as a
**yard, perimeter and burrow entity**, not an indoor-infestation entity.

**Status: `contradicted`. Live copy affected. NOT changed by this pass** — per the task's instruction
to report rather than opportunistically correct. See §23 for the content-risk register.

---

### Q4 — Rodent-line boundary · **substantially confirmed, with a new legal dimension**

**Repository evidence:**

| Source | Verbatim | Species named |
|---|---|---|
| `services.astro:46` (JSON-LD, the corporate service definition) | "Three-step rodent control: removal of existing **mice and rats**, exclusion sealing of all entry points, and ongoing monitoring stations." | mice, rats **only** |
| `services.astro:218` | "remove existing rodents, seal all entry points… Effective for homes and commercial properties across Southern Utah." | generic |
| `rodent-control-vernal.astro:38` (JSON-LD, the Vernal service definition) | "…monitoring for **mice, voles, and rats** in homes, businesses, barns, and outbuildings." | + voles |
| `rodent-control-vernal.astro:132` | "Effective against **deer mice, house mice, voles, and rats**." | deer mouse, house mouse, vole, rats |
| `rodent-control-vernal.astro:292` | "…the occasional **pack rat** in barns, shops, and outbuildings." | pack rat |
| `pest-control-washington-ut.astro:128–130` — a service card headed **"Rodent Exclusion"** | "Full exclusion sealing, snap-trap and bait-station programs, and ongoing monitoring to keep mice and **pack rats** out permanently." | pack rat — **a service claim, not a pest-pressure note** |
| `pest-control-ivins-ut.astro:142`, `pest-control-santa-clara-ut.astro:142` | "Mice and **roof rats** enter Ivins homes…" | roof rat |
| `src/data/pests.ts` `rodents` tile | `aliases: [… 'house mouse', 'deer mouse', 'vole']` | + vole |

**What the repository establishes — confirmed.** The rodent line covers: **house mouse, deer mouse,
Norway/house rats, voles, pack rats, roof rats.** Six entities, each named. Note the tiering: the
corporate service schema says "mice and rats"; voles and pack rats appear only at the *page* level
(Vernal and Washington respectively). That is not a contradiction — a local page elaborating the
national definition is normal — but the elaboration exists in exactly one place each, so it is thin.

**What is NOT in the line — confirmed by absence:** pocket gophers, ground squirrels, tree squirrels,
bats, skunks, pigeons, starlings, sparrows. None is named in any Wernex service sentence. The seven
wildlife exclusions in §11 stand.

**Pocket gophers** were the one genuinely ambiguous case. They remain unnamed in Wernex copy, so
Gate 3 is unchanged (`owner-input-required` → **hold**). USU's manual confirms they are a burrowing
*yard* animal — "damage lawns, gardens and agricultural fields… underground utility cables and
irrigation pipes" — i.e. adjacent to voles, which is why the ambiguity was real. Still not resolvable
from the repository.

#### NEW — Utah legal status of the serviced rodents

USU's Category 12 manual states the legal status of each vertebrate. This was not in Part I and it
materially affects how three already-serviced entities must be written:

| Entity | USU Extension, verbatim | Effect on Wernex |
|---|---|---|
| **Voles** | "Voles are classified as **non-game mammals and are protected by Utah state law**. They can be controlled when causing damage." | Service is lawful (damage). Page must carry the status. |
| **Deer mouse** (and white-footed mouse) | "White-footed and deer mice are considered native, **non-game mammals and are protected under Utah State law**. They can be controlled when they are causing damage or posing a public health threat." | Service is lawful — hantavirus is squarely a public-health threat. **`deer-mouse` is a Wave 1 draft; this is a new qualification.** |
| **Woodrat / pack rat** | "**Woodrats are protected by Utah state law.** They can be controlled when causing property damage or creating a public health concern. Check with local UDWR or Agricultural Department Office prior to implementing any large scale control programs." | Service is lawful. Exclusion — exactly what `/pest-control-washington-ut` advertises — is USU's own first recommendation. |
| **House mouse** | "House mice are **not protected** in Utah." | No constraint |
| **Norway rat** | "Norway rats are **not protected** by Utah state law." | No constraint |
| **Pocket gophers** | "Pocket gophers are **not protected** by Utah state law." | No constraint |
| **European starling** | "European starlings are **not protected** by federal law or state law because they are an introduced species." | **SUPERSEDES §7.5 and §10**, which flagged starlings as the legally-constrained bird on the strength of USU's pointer to Utah Admin. Code R657-3-7. The pointer is real; the *implication* Part I drew from it was backwards. |
| **Rock pigeon** | "Feral pigeons are **not protected** by federal law or state law." | No constraint |
| **House sparrow** | "The house sparrow is not protected by federal law. Utah law protects them but they can be controlled throughout the year without a permit." | Minimal constraint |

**The correction worth stating plainly:** Part I assumed the legal friction sat with the birds. It
does not. It sits with **three animals Wernex already services** — voles, deer mice and pack rats —
all of which are protected Utah non-game mammals controllable only when causing damage or a public
health concern. All three qualify. None of this blocks service. But any published page for them must
carry the status rather than read as open-season extermination, and that is now a content rule
alongside the beneficial-organism rules in §10.

**Status: `confirmed`** for the six-entity rodent line and the seven wildlife exclusions;
**`owner input required`** for pocket gophers only.

---

### Q5 — Bee policy · **confirmed**

**Repository evidence, in full — this is the complete set:**

| Source | Verbatim |
|---|---|
| `wasp-removal-st-george.astro:116` | "We handle paper wasps, yellow jackets, mud daubers, and **carpenter bees** — removing active nests, treating harborage areas…" |
| `wasp-removal-st-george.astro:202` (and `:87` JSON-LD), FAQ "Can Wernex remove bee nests without killing the bees?" | "**For honeybees, we coordinate with local beekeepers for live relocation when possible.** For carpenter bees, wasps, and yellow jackets, we use targeted treatments to eliminate the nest safely." |
| `public/llms.txt:25` | "**Wasp & Bee Removal:** Safe professional nest removal for paper wasps, yellow jackets, mud daubers, and carpenter bees." |
| Everywhere else | "Wasp & Bee Removal" as a service *name* only — no additional bee species |

**Bumble bees: zero occurrences in the repository. Solitary / ground-nesting bees: zero occurrences.**

**What the repository establishes — confirmed, and the policy is coherent:**

- **Honey bee → relocation/referral.** Wernex's own position, stated in an FAQ that exists precisely
  to answer the question. Independently matched by USU: "Bees are a valuable resource; consider
  contacting your local beekeepers' association for hive or swarm extraction."
- **Carpenter bee → treatment.** Named twice. This is a wood-boring structural pest, not a
  pollinator-protection case, and treating it is not in tension with the honey-bee position.
- **Bumble bees and solitary/ground-nesting bees → no claim exists, and none may be made.** USU calls
  both "important pollinators." They remain `beneficial/non-target`, informational only.

**The one caveat worth carrying to a page:** "when possible" is doing real work in the honey-bee
sentence. A page must not upgrade it to an unconditional promise of live relocation.

**Status: `confirmed`.** §14 Q5 is answered by the repository and requires no owner input.
**SUPERSEDES §14 Q5**, which listed this as an open question. It was not — the evidence was already
sufficient; Part I under-read it.

---

### Q6 — "Desert spider" · **partially confirmed — a descriptor, not a taxon**

**Every occurrence in the repository (7):**

| Source | Verbatim |
|---|---|
| `spider-control-st-george.astro:4` | title: "Spider Control in St. George UT — Black Widow & **Desert Spider** Removal \| Wernex" |
| `spider-control-st-george.astro:5` | description: "…eliminates black widows, wolf spiders, and **desert spiders** with targeted treatments." |
| `spider-control-st-george.astro:8` | OG title + description, same wording |
| `spider-control-st-george.astro:33` | JSON-LD `name`, same wording |
| `spider-control-st-george.astro:116` | body: "Our licensed technicians eliminate black widows, wolf spiders, and **other desert spiders** using targeted treatments…" |
| `pest-control-southern-utah.astro:163` | "Targeted treatments for black widows, wolf spiders, and **desert spiders** common in Southern Utah homes and garages." |
| `public/llms.txt:24`, `:64` | "Black widow, wolf spider, and **desert spider** elimination…" |

**The decisive line is `:116`: "black widows, wolf spiders, and _other_ desert spiders."** The word
*other* establishes that "desert spider" is an **umbrella descriptor** that already includes the
black widow and the wolf spider — i.e. "spiders of the Southern Utah desert" — and not a claim about
a distinct species.

**What the page actually covers.** Its four species cards are: **Black Widow · "Brown Recluse"
Sightings · Wolf Spider · Desert Recluse.** The desert-recluse card is notably careful and makes no
treatment claim: "It lives outdoors in native vegetation and rodent burrows and is **rarely
encountered indoors** — respect it, but it is not the explanation for typical indoor sightings."

**What the repository establishes — confirmed:** "desert spider" is a marketing descriptor, not a
species claim, and the page's substantive content is accurate and honestly framed. **No factual error
exists.**

**SUPERSEDES §5.3 and §14 Q6**, which characterised this as "a live accuracy exposure on an existing
page." That was too strong. The term asserts no false fact; it is imprecise metadata, not a
misstatement. Downgraded from accuracy exposure to **naming imprecision**.

**What remains unknown:** whether the owner intends "desert spider" to denote any specific animal
(the desert recluse and the crevice weaver — USU: "more common in southern Utah" — are the two
candidates with real southern-Utah standing). This matters only for whether the metadata should
eventually name a real entity.

**Status: `partially confirmed` — not a factual error; `owner input required` only for whether to
replace the descriptor with a named entity in title/metadata.** No page can be built for "desert
spider" itself, because it is not an entity. Priority: low. **No change made.**

---

### Q7 — Commercial pest scope · **partially confirmed — thinner than expected**

**Repository evidence — the complete set of pest-specific commercial statements:**

| Source | Verbatim | Pests named |
|---|---|---|
| `public/script.js:60` | "Cockroaches are covered under our **residential and commercial** pest control." | **cockroaches** |
| `commercial-pest-control-southern-utah.astro` service card | "🏗️ **Warehouses & Industrial** — **Rodent exclusion**, inventory protection" | **rodents** |
| `public/llms.txt:22` | "**Bed Bug Treatment:** …for residential **and commercial** properties." | bed bugs (secondary source) |
| `services.astro:218` | Rodent control "Effective for homes **and commercial properties** across Southern Utah." | rodents |
| `commercial-pest-control-southern-utah.astro` — everything else | Facility types (restaurants, hotels, warehouses, retail, vacation rentals), compliance documentation, IPM plans, scheduling, emergency response | **no pests named** |

**What the repository establishes — confirmed:** exactly **three** pest entities are documented as
commercial-covered — **cockroaches, rodents, and bed bugs** — and only cockroaches and rodents come
from primary sources. The commercial page itself names **no pest at all**; it sells facility-type
programs, compliance, and scheduling.

**What remains unknown, and it is a lot:** flies (all 14 USU entries), stored-product pests (all 10),
phorid flies, pharaoh ants. The entire restaurant/warehouse pest vocabulary that a commercial program
would normally cover is simply absent from the repository.

**Status: `partially confirmed` (cockroaches, rodents, bed bugs) / `owner input required` for
everything else.** Q7 remains the highest-leverage unanswered question in the matrix: it gates the
fly cluster and all ten stored-product pests. **Do not** infer that a residential pest is
automatically commercial-covered; the repository gives no basis for that and none was assumed.

---

### Q8 — "Occasional invaders" · **partially confirmed**

**The phrase occurs exactly once in the entire repository:**

> `src/pages/pest-control-vernal.astro:192` — under the heading **"Cluster Flies & Others"**:
> "Cluster flies, earwigs, silverfish, and **other occasional invaders** show up with the seasons. A
> prevention plan handles them as part of routine service instead of one emergency at a time."

**What the repository establishes — confirmed:**

1. Three pests are **named**: cluster flies, earwigs, silverfish. All three are `documented-service`
   and remain so.
2. Coverage is via the **Vernal residential prevention plan** — "as part of routine service," not a
   separate line. No extra charge, no separate service.
3. The phrase is scoped to **Vernal**. No equivalent clause exists on any Southern Utah page.

**What remains unknown:** the membership of "other." The phrase is open-ended by construction and the
repository never enumerates it.

**A useful external anchor — not an answer.** USU's print edition of the Urban Pest Guide
(*Common Structural and Health-Related Pests of Utah*, Davis et al.,
<https://extension.usu.edu/planthealth/files/pubs/common-struc-health-pests.pdf>, fetched and
text-extracted 2026-08-28) titles its 20-entry nuisance category **"Nuisance Pests/Occasional
Invaders"** — the same term Wernex uses. That establishes "occasional invaders" as a recognised
category term in Utah structural pest management whose USU membership is knowable, which makes the
owner question answerable in one sentence ("yes, that category" / "no, just these five").

**It does not establish that Wernex means USU's twenty.** Mapping the phrase onto that list would be
exactly the inference this task forbids, and it was not done. All 42 `unclear` rows stay `unclear`.

**Status: `partially confirmed` (three named pests, Vernal-scoped, routine-service delivery) /
`owner input required` for the membership of "other."** Unchanged in impact: still gates elm seed
bug's service framing, clover mite, millipedes/centipedes and carpet beetles.

---

### Q9 — Mosquitoes · **confirmed — referral only, no service**

Part I recorded E14 and E15 as a conflict. Re-reading the location pages **in context** dissolves it.

**The headings above the bullet lists are the whole point:**

| Page | Heading | Mosquito bullet |
|---|---|---|
| `pest-control-washington-ut.astro:82` | "**Washington's Top Pest Threats**" | "🦟 Mosquitoes — Seasonal pressure near the Virgin River" |
| `pest-control-near-zion-national-park.astro:82` | "**Zion Corridor — Pest Hotspots**" | "🦟 Mosquitoes — Along the Virgin River and irrigation areas" |
| `pest-control-hurricane-ut.astro` | "**Common Hurricane Pests**" | **no mosquito bullet** |

These are **local pest-pressure lists**, not service menus. They say mosquitoes are present; they do
not say Wernex treats them.

**The FAQ wording is even more careful.** `pest-control-santa-clara-ut.astro:79`:
> "Ants (especially harvester ants and pavement ants), black widow spiders, scorpions, and mice are
> the **most frequently treated pests** in Santa Clara. The river corridor **also supports mosquito
> breeding** during warmer months."

Mosquitoes are deliberately excluded from the "most frequently treated" list and appended as a
separate breeding observation. `pest-control-hurricane-ut.astro:164` does the same: "also **increases
mosquito activity**." `pest-control-washington-ut.astro:161` lists "seasonal mosquitoes" among what
residents "frequently **encounter**" — encounter, not receive treatment for.

**The only service-adjacent statement refers customers out:**
> `public/script.js:64` — "Good news: both the St. George area and the Uintah Basin are served by
> **public mosquito abatement districts** that respond to service requests. For other biting or
> invading pests, we can help — want a free quote?"

**What the repository establishes — confirmed: there is no Wernex mosquito service claim anywhere.**
Every mosquito mention is either a pest-pressure observation or an explicit referral out. The chat
widget and the location pages agree.

**SUPERSEDES §7.8, §14 Q9 and §16.6**, which classified mosquitoes as `owner-input-required` on an
E14-vs-E15 conflict. **There is no conflict.** Part I misread pest-pressure lists as service lists.
Mosquito Gate-3 status is corrected to **`not-documented` (referral out)**.

**Residual note, not a question:** whether Wernex *wants* a mosquito offering is a business-direction
decision, not an evidence question, and is not asked here. The `pests.ts` mosquito tile
(`href: null`) is consistent with the referral posture and needs no change.

---

## 20. The six `universe`-depth rows — three resolved, three not

| Row | Outcome | Evidence |
|---|---|---|
| **Brown marmorated stink bug** | **`universe` → `verified`** | USU Extension, *Brown Marmorated Stink Bug* (July 2017), <https://extension.usu.edu/planthealth/research/brown-marmorated-stink-bug>, fetched 2026-08-28: "BMSB was first detected in Utah in 2012; it is now **established in four counties (Weber, Davis, Salt Lake, and Utah)** and has been **detected in two other counties (Cache and Box Elder)**." · "At present, Salt Lake County hosts the bulk of Utah's BMSB populations." |
| **Earwigs** | **`universe` → `verified`** | USU Extension, *European Earwig* (Aug 2011, Alston & Terbeau), <https://extension.usu.edu/planthealth/research/european-earwig>, fetched 2026-08-28: "The European earwig was first introduced into Utah in the early 1900s. Establishment and population growth have been remarkably successful in **northern Utah**." · "they can be a nuisance pest by entering buildings" · "Earwigs are active at night and seek protected shelter during the daytime." · omnivorous behaviours "make it both a **pest and beneficial insect**." |
| **Pack rat / woodrat** | **`universe` → `verified`** | USU Extension, *Utah Vertebrate Animal Pest Control* (Category 12 manual), Woodrats chapter pp. 23–25, fetched and text-extracted 2026-08-28: "**Five species of woodrats occur in Utah.** The Bushytail woodrat (*Neotoma cinera*), Desert woodrat (*N. lepida*), Stephens woodrat (*N. stephensi*), Whitethroat woodrat (*N. albigula*) and the Mexican woodrat (*N. mexicana*)." · "Woodrats are a **nuisance around cabins, outbuildings, and other infrequently used structures**." · "They have a tendency to pack away small objects… This is why they are commonly referred to as **packrats**." · "Woodrats are a vector in the transmission of certain diseases, most notably **sylvatic plague**." · "**Woodrats are protected by Utah state law.** They can be controlled when causing property damage or creating a public health concern." · "Woodrats **can be permanently excluded from buildings**. Since woodrats are agile climbers, all entrances to buildings, including those at the attic level, must be closed." |
| **Carpenter bee** | **remains `universe`** | Not obtainable. `extension.usu.edu/planthealth/research/carpenter-bees` 302s to `digitalcommons.usu.edu/cgi/viewcontent.cgi?...article=1869`, which returns **403 to both curl and WebFetch** (Cloudflare block on bepress). The USU *Beginner's Guide to Common Native Bees* PDF and *Common Structural and Health-Related Pests of Utah* were fetched and **neither covers carpenter bees**. A search result asserted the Washington/Kane/Garfield distribution; **it was not used** — snippets are not sources (§16.4). |
| **Fleas** | **remains `universe`** | Not obtainable. Same DigitalCommons 403 (`article=1903`). Absent from both USU urban-pest guides. |
| **Camel spider (solifugid)** | **remains `universe`** | Not obtainable. Absent from the USU Urban Pest Guide's 12-entry spider list and from the print edition's spider section. No authoritative Utah source located. |

**Net: `verified` 106 → 109 · `universe` 6 → 3.**

### Impact on the two live production claims

**Pack rat — resolved, and the live claim is supported.** `/pest-control-washington-ut`'s "Rodent
Exclusion" card advertises exclusion sealing and monitoring "to keep mice and pack rats out
permanently." Exclusion is precisely USU's first recommended method, and property damage/public
health is precisely the lawful trigger. **No content risk. New requirement:** any pack-rat page must
carry the protected-species status.

**Carpenter bee — unresolved, and the live claim is unsupported.** `/wasp-removal-st-george` and
`llms.txt` both sell carpenter-bee treatment. Nothing in this repository or in any source obtainable
this session establishes that carpenter bees occur in Wernex's service area. This is **not** evidence
that they do not — the only authoritative source is simply behind a block. Logged as a content risk
in §23. **No change made.**

---

## 21. Impact on the 41-candidate funnel

| Change | Effect |
|---|---|
| Mosquitoes `owner-input-required` → `not-documented` (Q9) | `owner-input-required` **2 → 1**; `not-documented` **5 → 6** |
| Pocket gophers remain `owner-input-required` (Q4) | the sole remaining member |
| Pack rat `hold pending evidence` → **Candidate** (§20) | Candidates **41 → 42**; "pending evidence" **2 → 1** |
| BMSB `hold — geography unverified` → **Exclude** (§20) | Verified absent from both service areas: established only in Weber/Davis/Salt Lake/Utah, detected in Cache/Box Elder. Excludes **24 → 25**; holds **24 → 23** |
| Earwigs `Candidate pending evidence` → **Candidate**, geographically qualified (§20) | USU documents establishment in **northern Utah**. Vernal (northeastern) is a closer fit than St. George (southwestern); the page must not claim statewide. Also: USU calls earwigs "both a pest and beneficial insect" → §10 flag |
| Carpenter bee, fleas, camel spider | unchanged — still `hold`, still `universe` |
| Q5 resolved without owner input | Honey bee stays a Tier C informational candidate; bumble/solitary bees stay informational-only holds |
| Q6 downgraded to naming imprecision | No candidate change |

**Revised funnel:** Universe **112** · Candidates **42** (17 Wave 1 drafted · 24 new · 1 pending
evidence) · Holds **23** · Excludes **25** · Exclude-as-a-page **21** · Owner-input/blocked **1**.

**Gate-3 revised:** `documented-service` 25 · `category-covered` 26 · `unclear` 42 ·
`wildlife/no-service-line` 7 · `beneficial/non-target` 5 · `owner-input-required` **1** ·
`not-documented` **6** = 112.

**Research depth revised:** `verified` **109** · `universe` **3**.

The 42 `unclear` rows are **unchanged**. Q7 and Q8 were the only questions that could have moved them
and both returned `owner input required` on the decisive part. That is the honest outcome: this pass
resolved five of nine questions but did not shrink the largest bucket, because the evidence to shrink
it does not exist in the repository.

---

## 22. The three probe candidates

### `boxelder-bug` — **CLEAN TO PUBLISH** once the window closes

Re-verified in the current tree. `/pest-control-vernal:186–187` still carries a dedicated **"Box
Elder Bugs"** section: "Each fall, box elder bugs swarm sunny south- and west-facing walls and work
their way inside to overwinter. **Exterior treatment timed to the season** keeps them out before they
get in." Named again at `:89`, `:241`, `:307` and in the page description and JSON-LD.

The draft's treatment copy matches the service copy rather than exceeding it, and is unusually
candid: "exterior treatment applied to the sunny staging walls in September… meaningfully reduces how
many overwinter in your walls, while **treatment applied after they are already inside mostly is not
worth doing**."

Gate 3 `documented-service`; depth `verified`; geography statewide-with-both-service-areas; no open
question touches it. **The only unblocked probe page of the three.**

### `elm-seed-bug` — **CONDITIONALLY PUBLISHABLE**, blocked by Q8

**Geography: already correct, and better than Part I credited.** The draft states plainly:
> "Duchesne County is the record that matters here: it is the western Uintah Basin, so
> **Roosevelt-area properties sit inside the documented range. Vernal does not** — we have found no
> published Uintah County record, so for Vernal itself this is a species to watch for rather than one
> the literature places there."

It also already avoids USU's inverted compass wording (§16.5), rendering the range as "reported as
far as Duchesne, Tooele and Grand counties" — county names only. Judged on documented geography, not
on expected Vernal rankings, it is honest. Roosevelt is inside Wernex's stated service area
(`llms.txt`: "the Uintah Basin (Vernal, Naples, Maeser, **Roosevelt**)"), so the
`/pest-control-vernal` service link is defensible.

**The blocker is Gate 3, not geography.** Elm seed bug is named in **no** Wernex service copy. Its
only service path is E10's "and other occasional invaders" — the open half of Q8. It is currently
`intent: treatable` with a service link, resting on a generic clause.

**Blocked pending Q8.** If the owner confirms the routine Vernal prevention plan covers seasonal
invaders generally, it is clean. If not, it should become `informational`.

### `northern-scorpion` — **BLOCKED** by Q1

Evidence is strong and unaffected: USU gives the Utah range as "All of Utah," and the draft's size
class, sting severity and window-well framing all trace to the fetched fact sheet.

The block is entirely a business question. `intent: treatable` + `relatedServices:
[/pest-control-vernal]` asserts a service relationship for scorpions in the Basin that no
Wernex-authored sentence supports. Its treatment copy is carefully worded — it describes the existing
Vernal perimeter service rather than claiming a Basin scorpion line — which is why this is a question
and not a contradiction. But the `relatedServices` link makes the commercial claim regardless of how
the prose is phrased, which is exactly the hole schema guardrail #2 was added to close
(`docs/pest-entity-system.md` §1).

**Blocked pending Q1.** Default if unanswered: publish as `informational`, mirroring
`arizona-bark-scorpion`.

**Probe summary: 1 clean · 1 conditional · 1 blocked.** Both blockers are business questions, not
evidence gaps — which is the outcome this task was designed to surface.

---

## 23. Content-risk register — live copy, reported not changed

Per the task instruction to stop and report rather than correct opportunistically. **None of these
was modified.**

| # | Risk | Location | Severity | What would resolve it |
|---|---|---|---|---|
| ~~R1~~ | ~~Voles described as overwintering indoors, contradicting two USU sources~~ | ~~`rodent-control-vernal.astro:38` (JSON-LD), `:105`, `:307`; `pest-control-vernal.astro:167`~~ | **RESOLVED 2026-08-28** | Corrected — see §26 |
| R2 | Carpenter-bee treatment sold with no obtainable Utah distribution evidence | `wasp-removal-st-george.astro:116`, `:202`; `llms.txt:25` | **Medium** — likely true, simply unverifiable this session | Fetch the USU carpenter-bee fact sheet by another route |
| R3 | Voles, deer mice and pack rats are protected Utah non-game mammals; no page says so | future pest pages; not currently asserted incorrectly anywhere | **Low now, Medium at publication** | Add the status to those pages before publishing |
| R4 | "Desert spider" metadata names no real entity | `spider-control-st-george.astro:4,5,8,33`; `llms.txt:24,64` | **Low** — imprecise, not false (§19 Q6) | Q6 owner answer |
| R5 | `northern-scorpion` cites *USU Top 20 Arachnids*, a diagnostic-submission list | `northern-scorpion.md` sources | **Low** — no claim currently depends on it | Swap for a distribution source before publishing |

---

## 24. Revised owner-question status

| Q | Subject | Status after this pass |
|---|---|---|
| Q1 | Basin scorpion service | **owner input required** — blocks `northern-scorpion` |
| Q2 | Cockroach scope | **partially confirmed** — residential + commercial confirmed; **owner input required** on Basin geography |
| Q3 | Vole framing | **contradicted** — service confirmed, indoor framing unsupported; owner input required on wording |
| Q4 | Rodent-line boundary | **confirmed** (6 entities) — **owner input required** for pocket gophers only |
| Q5 | Bee policy | **confirmed** — no owner input needed |
| Q6 | "Desert spider" | **partially confirmed** — not an error; low-priority owner input |
| Q7 | Commercial pest scope | **partially confirmed** (cockroaches, rodents, bed bugs) — **owner input required** for flies and stored-product pests |
| Q8 | "Occasional invaders" | **partially confirmed** (3 named, Vernal-scoped) — **owner input required** for the membership of "other" |
| Q9 | Mosquitoes | **confirmed** — referral only; no conflict existed |

**Fully resolved without owner input: Q5, Q9.** **Resolved in part: Q2, Q4, Q6, Q7, Q8.**
**Requiring owner input to close: Q1, Q2 (Basin), Q3, Q4 (gophers), Q6 (low), Q7, Q8.**

Two questions are now retired. Q3 changed from a question into a **finding**. The rest are narrower
than they were, and Q1 and Q8 are the two that actually gate publication.

---

## 25. Validation — Part II

| Check | Result |
|---|---|
| `npm run build` | Pass — **28 pages** |
| `node scripts/validate-pests.mjs` | Pass — **16 checks, 0 notes** |
| Production page count unchanged | Pass — 28, as before |
| Published pest entities | Pass — **0**; all 19 drafts `published: false` |
| Sitemap unchanged | Pass — `public/sitemap.xml` untouched; generated `sitemap-0.xml` still 28 URLs |
| No new URLs introduced | Pass — no additions to `src/pages/` or `src/content/pest-library/` |
| Bug Identifier untouched | Pass — `src/pages/bug-identifier.astro` and `public/script.js` unmodified; not investigated, not altered |
| No service-page copy changed | Pass — all findings routed to §23 instead |
| `git diff --check` | Pass — no whitespace errors |
| `git status` | Only `docs/pest-candidate-matrix.md` |
| Snippets used as sources | None — the carpenter-bee snippet was explicitly declined (§20) |
| Fabricated quotations | None — every quotation programmatically extracted from a fetched page or PDF |

---

## 26. Vole correction — APPLIED 2026-08-28

Q3 was reclassified from an owner question to a **finding** in §19: Wernex demonstrably services
voles (named four times in rodent service copy, including the page description and the JSON-LD
service description), but the *behavioural* explanation attached to them — winter warmth-seeking,
overwintering in walls and attics — is contradicted by two USU sources:

- USU *Urban Pest Guide* → Voles: "occasionally enter buildings by accident, but **do not become
  established indoors**"
- USU *Utah Vertebrate Animal Pest Control* (Category 12 manual), Voles chapter: "**Voles are active
  day and night, year round. They do not hibernate.**" — and a damage taxonomy covering only
  orchards, forests, field crops, lawns and golf courses, with no indoor category anywhere.

Because the contradiction is established rather than speculative, the correction was applied. **The
service claim was preserved in every instance; only the unsupported behaviour was removed.**

### Edits made (5 locations, 2 files)

| File · line | Before | After |
|---|---|---|
| `rodent-control-vernal.astro:38` (JSON-LD `Service.description`) | "…ongoing monitoring for mice, **voles**, and rats **in homes**, businesses, barns, and outbuildings." | "…ongoing monitoring for mice and rats in homes, businesses, barns, and outbuildings, **plus vole control in the yards and landscaping around them**." |
| `rodent-control-vernal.astro:105` (JSON-LD FAQ) and `:307` (visible FAQ — kept in sync) | "…mice **and voles** move from fields and yards toward the warmth… **and many will overwinter inside walls and attics**." | "…mice move from fields and yards toward the warmth… and many will overwinter inside walls and attics. **Voles work differently — they stay active outdoors all winter rather than nesting indoors, but they press in against foundations, lawns, and landscaping, which is where we deal with them.**" |
| `rodent-control-vernal.astro:144` (body) | "…deer mice, house mice, **and voles** abandon the fields… and head for the nearest warm, sheltered space… usually a home, garage, shop, or barn." | "…deer mice and house mice abandon the fields… **Voles don't follow them in. They stay outside and active straight through winter, working runways under the lawn, the mulch, and the snow right up against the foundation.**" |
| `pest-control-vernal.astro:167` (service card) | "Deer mice and voles are our number-one cold-weather call. **They slip into homes**, garages, barns, and outbuildings through gaps the width of a pencil." | "Deer mice and voles are our number-one cold-weather call. **Mice** slip into homes, garages, barns, and outbuildings through gaps the width of a pencil; **voles stay outside, tunnelling through lawn and landscaping against the foundation.**" |
| `pest-control-vernal.astro:241` (fall seasonal card) | "As nights cool, mice, **voles**, box elder bugs, and cluster flies all push toward the warmth of your home." | "As nights cool, mice, box elder bugs, and cluster flies all push toward the warmth of your home, **and voles move in tight against foundations and lawns**." |

`:144` and `:241` had been logged in §19 as *borderline* rather than contradicted. They were included
because leaving them would have left the same unsupported claim standing in softer wording on the
same pages — a half-correction reading worse than either the original or the fix.

### Deliberately left unchanged (supported by USU)

| Location | Wording | Why it stands |
|---|---|---|
| `rodent-control-vernal.astro:5` (meta description) | "Wernex removes mice, **voles** & rats with trapping, exclusion, and sealing of entry points" | Service claim. USU's Category 12 manual covers vole trapping; no indoor-biology claim is made. |
| `rodent-control-vernal.astro:81` / `:292` (FAQ) | "voles (often called field or meadow mice) that **move in from yards and fields**" | Describes origin, matches USU exactly. |
| `rodent-control-vernal.astro:132` | "Effective against deer mice, house mice, **voles**, and rats." | Service claim, no behavioural claim. |
| `pest-control-vernal.astro:89` / `:307` (FAQ) | "rodents (deer mice **and voles**, especially as the weather cools)" | Describes call volume and timing, not vole biology. |

### Verification

| Check | Result |
|---|---|
| Build | Pass — **28 pages**, unchanged |
| `validate-pests.mjs` | Pass — 16 checks, 0 notes |
| Rendered JSON-LD | **28 of 28 blocks parse**, 0 invalid; `—` escapes resolve to real em dashes |
| FAQ schema/visible parity | `rodent-control-vernal` 5/5 and `pest-control-vernal` 5/5 answers still match visible text — the `:105`/`:307` pair was edited together |
| Voles still named as a serviced pest | Yes — 9 occurrences across the two pages, service claims intact |
| Published pest entities | 0 — unchanged |
| Sitemap / URLs / Bug Identifier | Unchanged |

**Q3 is now closed.** It is no longer an owner question and no longer a content risk. §19 Q3 is
retained as the evidence record for why the change was made.

---

# PART III — OWNER ANSWERS APPLIED

_2026-08-28. Classification pass only. **No new research was performed**, no source was fetched, no
page was created or published, no service copy was changed._

Four business answers were supplied by the owner. They are recorded here as **owner testimony** —
the strongest evidence class available for a service question, and the only one that can settle
Gate 3 where the repository is silent.

| Q | Answer |
|---|---|
| **Q1 — Basin scorpions** | **Yes — Wernex treats scorpions in the Uintah Basin.** |
| **Q2 — Basin cockroaches** | **Yes — same residential and commercial coverage as St. George.** |
| **Q7 — Commercial scope** | **Essentially the same pests as residential.** |
| **Q8 — "Occasional invaders"** | **Just the three named (cluster flies, earwigs, silverfish) plus a handful like them.** |

**Supersedes §19 Q1, Q2, Q7, Q8 and the §24 status table.** Those sections are retained as the
record of what the repository could and could not establish on its own.

---

## 27. What the answers change

### 27.1 Q1 — scorpions in the Basin · **resolved yes**

- `northern-scorpion` **stays `intent: treatable`** and keeps `relatedServices: [/pest-control-vernal]`.
  **Probe blocker cleared.**
- Gate-3 status: `category-covered` → **`documented-service`** (owner-confirmed).
- Geographic scope of the scorpion service line widens from "Southern Utah" to **both service areas**.
- `desert-hairy-scorpion` and `arizona-bark-scorpion` are unaffected — their classifications rest on
  USU distribution, not on service geography. `arizona-bark-scorpion` **stays `informational`**: the
  reason it is not commercial is that USU documents it in Kane County and not in the service area,
  which this answer does not touch.

**New observation — a marketing gap, not an error.** Two places now *under-represent* a real service:

| Location | Current wording | Nature |
|---|---|---|
| `pest-control-vernal.astro` | **No mention of scorpions anywhere** on the page | Under-representation |
| `public/llms.txt:21` | "Scorpion control **specialists for Southern Utah**" | Under-representation |

This is the same pattern as §5.2, where `llms.txt` omitted seven pests the service pages claim.
Nothing here is false. But if `northern-scorpion` publishes as `treatable` linking to
`/pest-control-vernal`, it will point at a page that never mentions scorpions — a thin link.
**Not changed.** Logged as **R6** in §28; the fix is an addition to the Vernal page, which is an
owner-approved content decision, not a correction.

### 27.2 Q2 — cockroaches in the Basin · **resolved yes**

- `german-cockroach` **keeps both** `/pest-control-southern-utah` and `/pest-control-vernal`.
  Its `utahDistribution` line — "Vernal apartments and St. George restaurants face the identical
  pest" — is now supported on the service side as well as the biological side.
- Cockroach service geography widens to **both service areas**.
- The four USU cockroach species stay **`category-covered`** — Q2 confirms the *category's* geography,
  it does not name individual species. American and Oriental cockroach become viable in both areas
  rather than St. George-first.
- `turkestan-cockroach` **unaffected — hold stands.** Its hold has never been about service; it is
  about the absence of any Utah establishment record, now doubly evidenced.

**Same under-representation:** `/pest-control-vernal` names no cockroaches, and `llms.txt` names
cockroaches nowhere at all. Logged as **R6**.

### 27.3 Q7 — commercial scope · **resolved, and it narrows rather than widens**

"Essentially the same pests as residential" means the commercial line **adds no pest vocabulary**.
Residential's documented pests are ants, spiders, scorpions, wasps and cockroaches (E1), plus the
Vernal set (boxelder bug, cluster flies, earwigs, silverfish, E10), alongside the separate termite,
rodent and bed-bug lines.

This was the outcome that most reduced the candidate set:

| Group | Was | Now | Effect |
|---|---|---|---|
| **Stored-product pests (10)** | `unclear`, pending Q7 | **`not-documented`** | The single "Pantry & Stored-Product Pests" page proposed in §9 is **withdrawn**. Indian meal moth drops from Candidate to exclude-as-a-page. |
| **Sanitation flies** — house, drain, fruit, phorid, blow, flesh, lesser house, black soldier, stable, horse & deer, fungus gnats, crane | `unclear`, pending Q7/Q8 | **`not-documented`** | The proposed **"House Flies"** and **"Drain & Fruit Flies"** consolidated entities are **withdrawn as commercial candidates**. |
| **Pharaoh ant** | hold, pending Q7 (commercial) | **stays `category-covered`** | Loses its commercial rationale but keeps ant-line coverage. Remains a hold on thin consumer intent. |

**This is the answer that killed the food-facility pest cluster.** It was the largest single block of
speculative candidates in the matrix, and it is now gone on the owner's word rather than on a guess.

### 27.4 Q8 — "occasional invaders" · **resolved narrow**

The answer explicitly rejects the broad reading. It is **not** USU's 20-entry nuisance category; it is
the three named pests plus a small set of close analogues.

**Confirmed `documented-service`, unchanged:** cluster flies, earwigs, silverfish & firebrats.

**Resolved to `not-documented`** — outside both the three-named class and residential's named
categories: army cutworm/miller moth, elm leaf beetle, red fire bug, root weevils, western
leaf-footed bug, carpet beetles, BMSB, fleas, ticks, bird mites, all 10 stored-product pests, and
the 12 sanitation flies above.

**Held as `unclear (narrowed)`** — the plausible membership of "a handful like them," pending one
line from the owner. Each is a seasonal structural invader or indoor moisture nuisance of the same
behavioural class as the three named:

| Entity | Why it is a plausible analogue |
|---|---|
| **Elm seed bug** | Seasonal wall-massing invader; the closest analogue in the matrix. See §27.6. |
| **Clover mite** | Migrates indoors in large numbers, late spring and fall (USU) |
| **Millipedes & centipedes** | Indoor nuisance, moisture-indicator (USU) |
| **Springtails** | Migrates indoors seeking moisture, late spring/early summer (USU) |
| **Booklice & psocids** | Indoor nuisance, moisture indicator (USU) |
| **Isopods** | "Occasionally come indoors under thresholds/doors" (USU) |
| **Crickets** | Minor indoor nuisance invader (USU) |
| **Face fly** | USU: overwinters in wall voids "**similar to cluster flies**" — a named-pest analogue |
| **Western conifer seed bug** | "Common invader of homes… seek overwintering sites indoors" (USU) |
| **False chinch bug** | "Invade buildings to escape hot, dry weather" (USU) |

**These ten were not assigned to the "handful" — they are the shortlist the owner would pick from.**
Enumerating on the owner's behalf is precisely the inference this project forbids.

### 27.5 Revised counts

**Gate-3 status:**

| Status | Was (§21) | Now | Change |
|---|---|---|---|
| `documented-service` | 25 | **26** | +1 northern scorpion (Q1) |
| `category-covered` | 26 | **25** | −1 northern scorpion |
| `unclear` | 42 | **10** | −32 (Q7 + Q8) |
| `not-documented` | 6 | **38** | +32 |
| `wildlife/no-service-line` | 7 | 7 | — |
| `beneficial/non-target` | 5 | 5 | — |
| `owner-input-required` | 1 | **1** | pocket gophers only |
| **Total** | 112 | **112** | — |

**The `unclear` bucket fell from 42 to 10.** That was the stated purpose of Q7 and Q8, and it worked —
but it worked by *excluding*, not by unlocking. Both answers were narrower than the optimistic
reading Part I had entertained.

**Research depth unchanged: `verified` 109 · `universe` 3** (carpenter bee, fleas, camel spider).

### 27.6 Candidate set — recounted

Part I and §21 carried a small arithmetic drift (cellar spider was listed as documented-service in
the tables but placed in Tier B; the "pending evidence" count was not decremented after §20 resolved
both rows). The tier lists below are recounted from the tables and are **authoritative**.

**Already drafted — Wave 1 (17)**
black-widow · brown-recluse · hobo-spider · desert-hairy-scorpion · **northern-scorpion** ·
carpenter-ant · pavement-ant · harvester-ant · termites · german-cockroach · yellow-jacket ·
paper-wasp · deer-mouse · house-mouse · roof-rat · elm-seed-bug · boxelder-bug
_(turkestan-cockroach and arizona-bark-scorpion remain holds, not candidates.)_

**Tier A — named in Wernex service copy, no page exists (9)**
wolf spider · cellar spider · voles · Norway rat · pack rat · cluster fly · silverfish & firebrats ·
earwigs · mud daubers

**Tier B — category-covered, strong Utah evidence (9)**
odorous house ant · field ant · velvety tree ant · American cockroach · Oriental cockroach ·
jumping spider · crevice weaving spider · baldfaced hornet · sand wasps & cicada killers

**Tier C — informational, no service claim required (6)**
ticks · honey bee · masked hunter · western conifer seed bug · crane flies · bird mites
_Gate 3 is `not-documented` for these by design — an `informational` page makes no service claim, the
same basis on which `arizona-bark-scorpion` was drafted._

**Tier D — conditional on the Q8 "handful" list (2)**
clover mite · millipedes & centipedes

### **Candidates: 43** (17 drafted · 26 new)
Holds **24** · Excludes **26** · Exclude-as-a-page **18** · Owner-input **1**

**Withdrawn from the candidate set by these answers (4):** House Flies · Drain & Fruit Flies ·
Pantry & Stored-Product Pests (Indian meal moth) · carpet beetles.

### 27.7 Probe status

| Page | Status | Detail |
|---|---|---|
| `boxelder-bug` | ✅ **Clean** | Unchanged. Named service, verified evidence, no open question. |
| `northern-scorpion` | ✅ **Clean — unblocked by Q1** | Stays `treatable` with the Vernal service link. One caveat: that link points at a page that does not mention scorpions (R6). |
| `elm-seed-bug` | 🟡 **One word away** | See below. |

**`elm-seed-bug` is the only remaining probe blocker, and it is now a single yes/no.** Under the
narrow Q8 answer, its service path depends on whether elm seed bug is one of the "handful like them."
It is the strongest analogue in the matrix — a seasonal wall-massing invader that behaves like the
boxelder bug named in the adjacent section of the same page.

- **If yes:** it stays `intent: treatable` with `/pest-control-vernal` and is clean to publish. Its
  geography is already honest (the draft states outright that Roosevelt is inside the documented
  Duchesne County range and *"Vernal does not"*).
- **If no:** it becomes `informational`, drops `relatedServices`, and is still publishable — just
  non-commercial.

**Default if unanswered: `informational`.** That is the conservative reading of a narrow Q8 answer
and mirrors how `arizona-bark-scorpion` was handled.

---

## 28. Content-risk register — updated

| # | Risk | Location | Severity | Status |
|---|---|---|---|---|
| ~~R1~~ | ~~Voles described as overwintering indoors~~ | — | — | **RESOLVED** — corrected, §26 |
| R2 | Carpenter-bee treatment sold with no obtainable Utah distribution evidence | `wasp-removal-st-george.astro:116`, `:202`; `llms.txt:25` | Medium | Open — `universe` depth (§20) |
| R3 | Voles, deer mice and pack rats are protected Utah non-game mammals; no page says so | future pest pages | Medium at publication | Open — content rule for §10 |
| R4 | "Desert spider" metadata names no real entity | `spider-control-st-george` title/meta/JSON-LD; `llms.txt` | Low | Open — imprecise, not false |
| R5 | `northern-scorpion` cites *USU Top 20 Arachnids*, a diagnostic-submission list | `northern-scorpion.md` sources | Low | Open — swap before publishing |
| **R6** | **Vernal page and `llms.txt` under-represent two confirmed services** — scorpions and cockroaches are both serviced in the Basin (Q1, Q2) but appear nowhere on `/pest-control-vernal`, and `llms.txt` scopes scorpion control to "Southern Utah" and omits cockroaches entirely | `pest-control-vernal.astro`; `public/llms.txt:21` | **Medium** | **New.** Not an error — an omission. Blocks nothing, but makes `northern-scorpion` and `german-cockroach` service links thin. Fix is an *addition*, which is an owner content decision. **Not changed.** |

---

## 29. Where this leaves the library

Every question that could be answered has been. What remains is a judgment call, not a research task.

- **The `unclear` bucket is effectively closed** — 42 down to 10, and those 10 are one line from the
  owner away from resolution.
- **Two of the three probe pages are clean.** The third needs one word.
- **Three `universe` rows remain** (carpenter bee, fleas, camel spider), only one of which — carpenter
  bee — backs a live claim.
- **43 candidates** is the honest ceiling of what the evidence and the owner's answers support. It is
  not a target. The next decision is which of the 43 earn a page, and the answer will be smaller than
  43 — Tier D is conditional, Tier C carries no commercial intent and should be measured separately,
  and several Tier B entities are lookalike feeders that may serve better as sections.

**The 150 figure is now definitively unsupported.** Not rejected on taste — arithmetically excluded.
The universe holds 112 distinct entities; 38 have no service relationship, 7 are wildlife outside any
service line, 5 are beneficial organisms, and 18 belong inside other pages as sections. The number of
pages Wernex can substantiate is in the tens, and the two narrow owner answers (Q7 and Q8) moved it
down, not up.

---

## 30. `elm-seed-bug` converted to informational — APPLIED 2026-08-28

Per the Q8 narrow answer (§27.4), elm seed bug was **not** confirmed as one of the "handful like
them." The conservative default was applied rather than inventing a service relationship.

**Changes to `src/content/pest-library/elm-seed-bug.md` (3 fields, still `published: false`):**

| Field | Before | After |
|---|---|---|
| `intent` | `treatable` | **`informational`** |
| `relatedServices` | `[/pest-control-vernal]` | **removed** (schema guardrail #2 forbids it on `informational`) |
| `treatment` | Wernex-specific treatment paragraph | **removed** (schema guardrail #3 — it renders as "How Wernex Treats X", a service claim regardless of the intent field) |

**Nothing substantive was lost.** Every homeowner-actionable point in the deleted `treatment:` field
was already present in the body's "Living Downwind of a Seeding Elm" list — window-track sealing,
weatherstripping and soffit checks, reducing seed litter, vacuuming rather than crushing, and timing
exterior work early in summer rather than after the bugs are indoors. The only content that did not
survive was the Wernex-branded framing, which is precisely what an `informational` page must not
carry. The body, `utahDistribution`, `signs`, FAQs and sources are untouched.

The route handles the rest automatically: `src/pages/pest-library/[slug].astro:228` renders the
"How Wernex Treats" block only for `intent === 'treatable' && d.treatment`, and the CTA at `:241`
switches from "Get a Free Quote →" to "Ask an Expert →".

**Reversible.** If the owner later confirms elm seed bug belongs in the "handful," restoring the
three fields returns it to `treatable`.

### Probe design after this change

| Page | Intent | What it tests |
|---|---|---|
| `boxelder-bug` | treatable | Commercial intent, Vernal-first, named service |
| `northern-scorpion` | treatable | Commercial intent, Vernal-first, owner-confirmed service (Q1) |
| `elm-seed-bug` | **informational** | **Informational intent with no service claim** |

Two commercial tests and one informational control, rather than three pages making the same kind of
claim — a better experiment, and it costs nothing to run.

**Validation:** validator 16/16 · production build 28 pages · preview build 47 pages
(28 + 19 drafts) · all 19 entries still `published: false`.

---

## 31. Wave 1 probe PUBLISHED — 2026-08-28

Authorized by the owner. **Two entities published; the other 17 remain `published: false`.**

| Entity | Intent | Role in the probe |
|---|---|---|
| `boxelder-bug` | `treatable` | Commercial test — Vernal-first, named service (E10) |
| `northern-scorpion` | `treatable` | Commercial test — Vernal-first, owner-confirmed service (Q1) |
| `elm-seed-bug` | `informational` | **Held unpublished.** Converted per §30; available as the informational control when the window allows |

**Production: 28 → 30 pages.** New URLs:

- `https://www.wernexpestcontrol.com/pest-library/boxelder-bug`
- `https://www.wernexpestcontrol.com/pest-library/northern-scorpion`

### What the publish actually required

Less than the checklist in `docs/pest-entity-system.md` §6 implies — that checklist predates two
pieces of automation added in commit `23d460f` and the `astro.config.mjs` build hook:

| Checklist step | Still needed? |
|---|---|
| 1. Flip `published: true` | **Yes** — done for the two entities |
| 2. Update the entity's `href` in `src/data/pests.ts` | **No longer needed.** `buildPestCatalog()` in `src/lib/pestIndex.ts` joins the hub to the collection automatically: a tile whose slug matches a published entity relinks to `/pest-library/<slug>`, and a published entity with no tile of its own is appended to the catalog as an extra. Neither of these two entities has a tile, and both appeared correctly (18 tiles, up from 16). |
| 3. Add the URL to `public/sitemap.xml` | **No — and doing it is actively wrong.** See below. |
| 4. Consider an `llms.txt` Pest Library line | Optional; not done |
| 5. Verify clean URL / canonical | Covered by the validator's per-page check |

### Correction: checklist step 3 is stale and produces a duplicate

`astro.config.mjs` defines a `pestSitemapSync` build hook that appends published entity URLs to
`dist/sitemap.xml` at `astro:build:done`, derived from `dist/pest-library/*.html` — the build's own
output rather than a hand-maintained list. Its own comment says: *"Without this, publishing a pest
meant hand-editing public/sitemap.xml."*

Hand-editing `public/sitemap.xml` during this publish produced **32 URLs in the served sitemap
instead of 30** — each probe URL listed twice. The validator caught it
(`served sitemap.xml has 32 URLs, expected 30`), and the manual edit was reverted. `public/sitemap.xml`
is unchanged at its curated 28 static URLs; the hook supplies the other two.

**`docs/pest-entity-system.md` §6 step 3 should be corrected** to say that the sitemap is generated
and must not be hand-edited. Not changed here — flagged so it is a deliberate edit rather than a
side effect of this publish.

### Verification

| Check | Result |
|---|---|
| `validate-pests.mjs --allow-published` | **16 checks pass, 1 note** (`AUTHORIZED PUBLISH: boxelder-bug, northern-scorpion`) |
| Production build | **30 pages** — 28 static + 2 entity routes, no drafts emitted |
| Per-page checks | canonical/`og:url` exact, JSON-LD parses, FAQPage present, no `.html` URLs, images exist |
| Hub join | 18 tiles = ItemList = search index = meta count; 2 published linked, 17 drafts absent |
| Served `sitemap.xml` | 30 clean URLs, both published entities listed, no draft leak |
| Generated `sitemap-0.xml` | 30 URLs, no unpublished pest entries |
| `public/sitemap.xml` | **unchanged** — still the curated 28 |
| Remaining drafts | 17 still `published: false` |
| Bug Identifier | untouched |
| Deployed | **No at the time §31 was written.** ~~The repository is ready; the deploy is the owner's call.~~ **Superseded:** the owner committed this work as `c1a7163` and deployed later the same day. The probe is live — see §32. |

### R6 accepted knowingly

`northern-scorpion` links to `/pest-control-vernal`, which does not mention scorpions. The owner
confirmed the service is real (Q1) and chose to publish as-is to keep the measurement baseline clean.
The Vernal-page addition is deferred until after the window rather than introducing a second variable
mid-probe. R6 stays open in §28.

---

# PART IV — PROBE LIVE

## 32. Deployment and probe status — measurement window OPEN

_Recorded 2026-08-28. **Documentation only.** No site behavior, content, route, schema, sitemap
logic, service page, entity file, or deployment configuration was changed by this checkpoint._

### 32.1 Deployment record

| | |
|---|---|
| Status | **Deployed and live** |
| Date | 2026-08-28 |
| Branch | `pest-wave-1` |
| Commit | `c1a7163` |
| Production URLs | **30** |
| Published pest entities | **2** |
| Unpublished drafts | **17** |

**Published (live):**

- `https://www.wernexpestcontrol.com/pest-library/boxelder-bug` — `intent: treatable`
- `https://www.wernexpestcontrol.com/pest-library/northern-scorpion` — `intent: treatable`

**`elm-seed-bug` remains unpublished.** It was converted to `intent: informational` in §30 and is
deliberately held back so that the current test is not contaminated by a third page making a
different kind of claim. It stays available as an informational control if one is later needed.

The remaining 16 drafts are likewise unpublished and unchanged.

### 32.2 URL verification methodology — canonical, not HTTP status

**This site returns HTTP 200 with the homepage for nonexistent URLs.** A 200 therefore proves
nothing about whether a route exists, and any future verification of this probe that relies on
status codes alone will produce a false positive on every URL it tests.

**The authoritative test for this probe is the canonical tag:**

| Result | Meaning |
|---|---|
| Canonical is **self-referencing** | The entity route is **real** |
| Canonical is `https://www.wernexpestcontrol.com/` | **Soft 404** — the route does not exist |

Verified 2026-08-28 against production:

| URL | HTTP | Canonical | Verdict |
|---|---|---|---|
| `/pest-library/boxelder-bug` | 200 | self | **REAL** |
| `/pest-library/northern-scorpion` | 200 | self | **REAL** |
| `/pest-library/elm-seed-bug` | 200 | `/` | soft 404 |
| `/pest-library/completely-made-up-xyz123` | 200 | `/` | soft 404 |
| `/this-page-does-not-exist-98765` | 200 | `/` | soft 404 |

**Integrity of the two live pages, confirmed:**

- Both serve their own content — `Boxelder Bugs in Utah — Fall Wall Swarms & Prevention | Wernex`
  and `Northern Scorpion: The Scorpion Vernal Actually Sees | Wernex`
- Both carry self-referencing canonicals
- Both contain 2 JSON-LD blocks including a `FAQPage`
- `/pest-library/boxelder-bug.html` → **308** → clean URL
- `/pest-library/boxelder-bug/` → **308** → clean URL
- Live `sitemap.xml`: **30 URLs**, containing only these two entity pages
- Generated `sitemap-0.xml`: agrees
- **No unpublished draft is advertised in any sitemap**

### 32.3 Correction — the "all 19 live" misreading

During the post-deploy check, an initial test reported that **all 19 entity URLs returned HTTP 200**
and concluded that the deploy had shipped a `PEST_PREVIEW=1` build leaking every draft.

**That conclusion was wrong.** It relied on HTTP status alone, on a site where every nonexistent URL
returns 200. Re-testing by canonical showed 2 real pages and 17 soft 404s. The error was corrected
within the same session, before any action was taken on it.

**To be unambiguous: the drafts were never published.** The publishing gate held exactly as designed —
`published: false` produced no route, no sitemap entry, and no hub link. The 17 draft URLs return the
homepage because *nothing exists at those paths*, which is the correct outcome expressed through an
incorrect status code.

This is recorded because the same trap will catch the next person who verifies this probe. **Check
canonicals, not status codes.**

### 32.4 Pre-existing soft-404 condition — DOCUMENTED, NOT FIXED

| Fact | Detail |
|---|---|
| Cause | There is no `src/pages/404.astro`, so Astro emits no `404.html`. Cloudflare Pages falls back to `index.html` for unmatched URLs and serves it with HTTP 200. |
| Verified | `curl` of arbitrary paths returns `HTTP/1.1 200 OK`, `Server: cloudflare`, homepage body, canonical `/`. |
| Age | **Predates this probe.** Not caused by the pest entity system, the publish, or the deployment. |
| Nature | Soft-404 / masked-404. The canonical-to-homepage behavior means search engines consolidate these responses to `/` rather than indexing them as separate URLs, which materially limits the harm. |
| Effect on the probe | **None.** The two real probe pages resolve correctly and self-canonicalize. |
| Possible future fix | A dedicated `src/pages/404.astro`, which Cloudflare Pages would then serve with a proper 404 status. |
| Status | **OUT OF SCOPE. Backlog item. Do not fix during the measurement window.** |

Fixing this mid-probe would change site-wide crawl behavior while the experiment is running and
introduce a variable the probe was not designed to isolate. It is a real issue and it can wait.

### 32.5 Pre-registered measurement criteria

**These criteria are pre-registered.** They were set before any data arrived and **must not be
revised later because the observed results are inconvenient.** The purpose of writing them down now
is to make post-hoc rationalization visible if it is ever attempted.

**The question the probe exists to answer:**

> Do individual, well-researched pest entity pages produce search visibility that the existing broad
> service pages do not already capture?

**Primary success signal:**

- **New non-branded search queries attributable to the entity pages** — particularly pest-specific
  queries and local/Basin identification or service-intent queries.

**Secondary signals:**

- impressions
- average position
- clicks
- whether Google associates the entity URL with treatment/service intent
- whether the queries represent **genuinely new coverage** rather than queries the broad service
  pages already received

**Clicks are explicitly NOT the primary measure.** At this volume and this stage they are noise.

**Interpretation principle:**

| Observation | Reading |
|---|---|
| Many **new** relevant queries, modest clicks | **Meaningful success.** The architecture is reaching intent the service pages were not reaching. |
| Many impressions, but queries largely duplicate coverage already owned by `/pest-control-vernal` and the other broad pages | **Much weaker.** Volume without new coverage means the entity page is competing with our own pages rather than expanding reach. |

### 32.6 Confounds — both must be applied when reading the results

**1. Boxelder bug seasonality.** `boxelder-bug` was published **28 August**. The page's own content
places the swarm in **September** — "Each fall, box elder bugs swarm sunny south- and west-facing
walls." Rising impressions through September and October will partly, and possibly mostly, reflect
normal seasonal search demand. **Do not read boxelder-bug growth as evidence that the entity-page
architecture caused it.** Seasonality is a confounding variable and must be stated in any conclusion
drawn from this page. `northern-scorpion` is much flatter seasonally (USU: active spring through
fall), so the two pages are **not** directly comparable head-to-head.

**2. Geographic scope.** Both probe pages are **Vernal/Uintah Basin-first** by design —
`northern-scorpion` is the Basin scorpion and `boxelder-bug` is named on the Vernal service page.
The probe therefore tests whether entity pages can earn **Basin/local intent**. It establishes
**nothing** about Washington County / southern Utah, where the majority of the site's service and
location pages sit. **Do not generalize the result to the full Utah service territory.** A separate
St. George-first test would be required for that, and it is not what is running.

### 32.7 Governing rule until the probe is evaluated

**No new pest entity may be published until this probe has been evaluated.** This includes
`elm-seed-bug`, the 16 other drafts, and every candidate in the matrix above.

- The existence of 43 defensible candidates is **not** a reason to publish them.
- The candidate matrix is a **research inventory, not a publishing quota or a page-count commitment**.
- **The 150 figure is not a target and never was a finding** — see §29.
- The next publishing decision must be informed by **observed search behavior from these two pages**,
  not by the size of the candidate pool.

The likely outcomes are three, and the probe exists to distinguish them: **more entity pages**
(deeper coverage), **fewer entity pages and stronger existing pages** (broader optimization), or a
mixture. Nothing in this document predicts which.

**The probe is the governor. Leave it alone and let it collect data.**
