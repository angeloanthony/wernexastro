// src/data/pests.ts
// SINGLE SOURCE OF TRUTH — the Pest Library inventory.
// Follows the same pattern as business.ts: one array drives the visible tile grid,
// the ItemList JSON-LD, and the pest search index. Before this file existed those
// three lived in three places and had drifted apart (20 tiles / 15 schema items /
// 15 search entries), so the structured data described a page that did not exist.
//
// `slug` is doing double duty: it is the on-page anchor today, and it is the URL
// segment the future /pest-library/<slug> route will use. Do not change a slug
// casually once its page is published.
//
// `status` gates what renders:
//   'listed'   — shown in the grid, the ItemList, and search.
//   'review'   — shown, but flagged: Utah presence or Wernex service line unconfirmed.
//                Nothing should sit here long. A 'review' entry is an open question,
//                not a resting state — resolve it to 'listed' or 'excluded'.
//   'excluded' — not rendered anywhere. Kept here with a reason so it stays a decision
//                on the record rather than a silent deletion.
//
// Eligibility gate every entry must clear to be 'listed':
//   1. documented in Utah   2. relevant to the service area
//   3. Wernex legitimately treats it   4. real search intent
//   5. we can say something authoritative   6. it does not duplicate another entry
// Utah presence alone is NOT sufficient — gate 3 has excluded aphids and borers.

export type PestStatus = 'listed' | 'review' | 'excluded';

export interface PestEntry {
  /** Anchor id today; URL segment for the future /pest-library/<slug> page. */
  slug: string;
  name: string;
  emoji: string;
  image: string;
  alt: string;
  /** Layer 1 grouping. Equals `slug` for a category-level tile. */
  category: string;
  /** Existing destination on the live site, or null until Wave 1 publishes. */
  href: string | null;
  /** Extra search terms so the box matches what people actually type. */
  aliases?: string[];
  status: PestStatus;
  /** Required for 'review' and 'excluded' — why it is flagged. */
  note?: string;
}

export const PESTS: PestEntry[] = [
  {
    slug: 'ants',
    name: 'Ants',
    emoji: '🐜',
    image: '/images/Ant_CloseUp.webp',
    alt: 'Close-up of an ant',
    category: 'ants',
    href: '/ant-control-st-george',
    aliases: ['ant', 'carpenter ant', 'pavement ant', 'sugar ant', 'anthill'],
    status: 'listed',
  },
  {
    slug: 'termites',
    name: 'Termites',
    emoji: '🪵',
    image: '/images/Termite_home_invasion.webp',
    alt: 'Termite close-up on damaged wood',
    category: 'termites',
    href: '/termite-control-st-george',
    aliases: ['termite', 'swarmer', 'subterranean termite', 'wood damage', 'mud tube'],
    status: 'listed',
  },
  {
    slug: 'rodents',
    name: 'Mice & Rats',
    emoji: '🐀',
    image: '/images/Mouse_Home_Invasion.webp',
    alt: 'Mouse indoors beside a baseboard',
    category: 'rodents',
    href: '/rodent-control-vernal',
    aliases: ['mouse', 'mice', 'rat', 'rats', 'rodent', 'house mouse', 'deer mouse', 'vole'],
    status: 'listed',
  },
  {
    slug: 'bed-bugs',
    name: 'Bed Bugs',
    emoji: '🛏️',
    image: '/images/bed_bugs_invasion.webp',
    alt: 'Bed bug close-up on mattress fabric',
    category: 'bed-bugs',
    href: '/bed-bug-treatment-southern-utah',
    aliases: ['bed bug', 'bedbug', 'bedbugs', 'bites in bed', 'mattress bugs'],
    status: 'listed',
  },
  {
    slug: 'silverfish',
    name: 'Silverfish',
    emoji: '🐛',
    image: '/images/Silverfish_at_Home.webp',
    alt: 'Silverfish close-up on a household surface',
    category: 'silverfish',
    href: null,
    aliases: ['silverfish', 'firebrat', 'bathroom bug'],
    status: 'listed',
  },
  {
    slug: 'beetles',
    name: 'Beetles',
    emoji: '🪲',
    image: '/images/Beetle_CloseUp.webp',
    alt: 'Beetle close-up',
    category: 'beetles',
    href: null,
    aliases: ['beetle', 'carpet beetle', 'pantry beetle', 'boxelder bug'],
    status: 'listed',
  },
  {
    slug: 'scorpions',
    name: 'Scorpions',
    emoji: '🦂',
    image: '/images/Scorpion_Infestation.webp',
    alt: 'Scorpion close-up',
    category: 'scorpions',
    href: '/scorpion-control-st-george',
    aliases: ['scorpion', 'bark scorpion', 'arizona bark scorpion', 'sting'],
    status: 'listed',
  },
  {
    slug: 'black-widow',
    name: 'Black Widow',
    emoji: '🕷️',
    image: '/images/Black_Widow.webp',
    alt: 'Black widow spider showing the red hourglass marking',
    category: 'spiders',
    href: '/spider-control-st-george',
    aliases: ['black widow', 'widow spider', 'hourglass spider', 'venomous spider'],
    status: 'listed',
  },
  {
    slug: 'mosquitoes',
    name: 'Mosquitoes',
    emoji: '🦟',
    image: '/images/mosquitoe_closeup.webp',
    alt: 'Mosquito close-up',
    category: 'mosquitoes',
    href: null,
    aliases: ['mosquito', 'mosquitos', 'skeeter', 'standing water'],
    status: 'listed',
  },
  {
    slug: 'wasps',
    name: 'Wasps & Yellow Jackets',
    emoji: '🐝',
    // Image verified Aug 2026: orange antennae = European paper wasp (a yellowjacket
    // mimic), so the alt must not call it a yellowjacket.
    image: '/images/wasps_closeup.webp',
    alt: 'European paper wasp close-up on a leaf',
    category: 'wasps',
    href: '/wasp-removal-st-george',
    aliases: ['wasp', 'yellow jacket', 'hornet', 'paper wasp', 'mud dauber', 'bee', 'nest'],
    status: 'listed',
  },
  {
    slug: 'cockroaches',
    name: 'Cockroaches',
    emoji: '🪳',
    image: '/images/Cockroach_Infestation.webp',
    alt: 'Cockroach close-up',
    category: 'cockroaches',
    href: null,
    aliases: ['cockroach', 'roach', 'roaches', 'german cockroach', 'american cockroach'],
    status: 'listed',
  },
  {
    slug: 'spiders',
    name: 'Spiders',
    emoji: '🕷️',
    // Image verified Aug 2026: it is a jumping spider (large forward eyes, no web).
    image: '/images/Spider_Home_Infestation.webp',
    alt: 'Jumping spider close-up',
    category: 'spiders',
    href: '/spider-control-st-george',
    aliases: ['spider', 'spiders', 'web', 'hobo spider', 'wolf spider', 'recluse'],
    status: 'listed',
  },
  {
    slug: 'fleas-ticks',
    name: 'Fleas & Ticks',
    emoji: '🪳',
    image: '/images/Flea_on_Skin.webp',
    alt: 'Flea close-up on skin',
    category: 'fleas-ticks',
    href: null,
    aliases: ['flea', 'fleas', 'tick', 'ticks', 'pet bugs', 'dog bugs'],
    status: 'listed',
  },
  {
    slug: 'flies',
    name: 'Flies',
    emoji: '🪰',
    image: '/images/Fly_CloseUp.webp',
    alt: 'House fly close-up',
    category: 'flies',
    href: null,
    aliases: ['fly', 'flies', 'house fly', 'drain fly', 'fruit fly', 'cluster fly', 'gnat'],
    status: 'listed',
  },
  {
    slug: 'earwigs',
    name: 'Earwigs',
    emoji: '🐛',
    image: '/images/Earwig_CloseUp.webp',
    alt: 'Earwig close-up showing rear pincers',
    category: 'earwigs',
    href: null,
    aliases: ['earwig', 'earwigs', 'pincher bug'],
    status: 'listed',
  },
  {
    slug: 'centipedes',
    name: 'Centipedes',
    emoji: '🐛',
    image: '/images/Centipedes_CloseUp.webp',
    alt: 'Centipede close-up',
    category: 'centipedes',
    href: null,
    aliases: ['centipede', 'centipedes', 'millipede', 'house centipede', 'many legs'],
    status: 'listed',
  },

  // ── Excluded ────────────────────────────────────────────────────────────────
  // Each entry records the evidence that disqualified it, so the decision is on the
  // record and re-litigating it does not mean redoing the research.
  {
    slug: 'fire-ants',
    name: 'Fire Ants',
    emoji: '🐜',
    image: '/images/fire_ants_invasion.webp',
    alt: 'Fire ant close-up',
    category: 'ants',
    href: null,
    status: 'excluded',
    note: 'Red imported fire ants are not established in Utah and USU does not list them as a Utah structural pest. Search intent for "fire ant" is southeastern US. Fails eligibility gates 1 and 3. Image retained in /public/images if this is ever revisited. llms.txt Ant Control wording corrected Aug 2026; several service/location pages (ant-control-st-george, southern-utah hub, santa-clara, hurricane, ivins, laverkin) still name fire ants — documented for a future content-accuracy pass, do not mass-edit.',
  },
  {
    slug: 'emerald-ash-borer',
    name: 'Emerald Ash Borer',
    emoji: '🪲',
    image: '/images/Emerald_Ash_Borer.webp',
    alt: 'Emerald ash borer beetle close-up',
    category: 'beetles',
    href: null,
    status: 'excluded',
    note: 'Verified Aug 2026. USU Extension: "EAB has not been detected in Utah, so there is no current need for chemical control of this insect." Nearest established populations are Colorado and Forest Grove, Oregon; UDAF runs a 2021 preventive quarantine precisely because it is absent. Fails gate 1 (not present in Utah) and gate 3 (shade-tree pest — Wernex has no ornamental/tree service line). Utah EAB preventive treatment is an arborist market, not structural pest control. Revisit only on a confirmed Utah detection.',
  },
  {
    slug: 'aphids',
    name: 'Aphids',
    emoji: '🐛',
    image: '/images/aphid.webp',
    alt: 'Aphids clustered on a plant stem',
    category: 'landscape',
    href: null,
    status: 'excluded',
    note: 'Ornamental/landscape pest. Zero service evidence: the 10 services in llms.txt and the 4 serviceType values in services.astro contain no plant, tree, shrub or landscape line, and "aphid" appears nowhere in the site outside this file. Common in Utah, but Utah presence alone does not qualify a pest. Fails gate 3.',
  },
  {
    slug: 'borers',
    name: 'Borers',
    emoji: '🪲',
    image: '/images/Borers.webp',
    alt: 'Metallic wood-boring beetle on tree bark',
    category: 'landscape',
    href: null,
    status: 'excluded',
    note: 'Resolved: the tile image is a buprestid (metallic wood-boring / flatheaded borer) on tree bark — same family as EAB, i.e. a TREE borer, not a structural one. Grouped with aphids and EAB in the original grid, confirming landscape intent. No service evidence; "borer" appears nowhere in the site outside this file. Fails gate 3. NOT the same entity as the wood-boring beetles covered by the existing WDI inspection line — if that intent is ever wanted, author a distinct "Wood-Boring Beetles" entry under parentCategory "beetles" with intent "treatable", justified by the WDI service. Do not repurpose this tile to get there.',
  },
];

/** Everything that renders — grid, ItemList, and search all read this. */
export const VISIBLE_PESTS = PESTS.filter((p) => p.status !== 'excluded');

/** Flagged for a human decision before Wave 1 authoring. */
export const REVIEW_PESTS = PESTS.filter((p) => p.status === 'review');
