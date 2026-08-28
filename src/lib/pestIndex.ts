// src/lib/pestIndex.ts
// The one place the client-facing pest catalog and entity index are built.
//
// buildPestCatalog() is the JOIN between the two systems that used to be
// disconnected: the tile inventory in src/data/pests.ts and the pestLibrary
// content collection. The collection's `published` flag is the ONLY publication
// state that exists — the hub grid, the ItemList JSON-LD, the search index, and
// (via the route itself) the entity pages all derive from it. Publishing a pest
// is exactly one boolean flip in its markdown frontmatter; nothing here or in
// pests.ts is edited at publish time.
//
//   - a tile whose slug matches a published entity links to /pest-library/<slug>
//     (its own page beats its old service-page href);
//   - a published entity with no tile of its own is appended to the catalog as a
//     new tile. If its frontmatter sets no verified `image`, the tile renders
//     emoji-only — accurate real image > no image > inaccurate/synthetic image.
//   - unpublished entities appear NOWHERE. No href, no ItemList item, no search
//     entry — a URL the build did not emit must never be linked.
//
// The search box consumes the #pest-index JSON that pest-library.astro emits
// from buildPestIndex(). NOTE: public/script.js consumes that JSON but runs its
// own substring filter — it does not import matchPest().
//
// matchPest() therefore has NO caller today. It is the resolver the identifier is meant
// to use; it is not currently load-bearing, and nothing breaks if it is wrong. Test it
// before trusting it.

import { PESTS, VISIBLE_PESTS } from '../data/pests';

/** The minimal shape of a published pestLibrary collection entry the catalog needs. */
export interface PublishedPestEntity {
  slug: string;
  name: string;
  emoji?: string;
  /** Only set when verified to depict the exact species (schema enforces imageAlt). */
  image?: string;
  imageAlt?: string;
}

/** One tile in the hub grid — also one ItemList item and one search-index entry. */
export interface PestCatalogEntry {
  slug: string;
  name: string;
  emoji: string;
  /** Absent = intentional image-free (emoji-only) tile state. */
  image?: string;
  alt?: string;
  /** /pest-library/<slug> for published entities; else service href or null. */
  href: string | null;
  /** True when a published entity page backs this tile. */
  isEntity: boolean;
  aliases: string[];
}

/**
 * Merge the static tile inventory with the PUBLISHED entity pages.
 * Callers pass the already-filtered published entries (the hub does
 * `getCollection('pestLibrary').filter(e => e.data.published)`), so this stays
 * a pure function with a single source of publication state upstream.
 */
export function buildPestCatalog(published: PublishedPestEntity[]): PestCatalogEntry[] {
  const excluded = new Set(PESTS.filter((p) => p.status === 'excluded').map((p) => p.slug));
  for (const e of published) {
    if (excluded.has(e.slug)) {
      throw new Error(
        `pest catalog: published entity '${e.slug}' is status:'excluded' in src/data/pests.ts — ` +
          `excluded pests must not be published. Resolve the exclusion first.`,
      );
    }
  }

  const bySlug = new Map(published.map((e) => [e.slug, e]));
  const tiles: PestCatalogEntry[] = VISIBLE_PESTS.map((p) => {
    const entity = bySlug.get(p.slug);
    return {
      slug: p.slug,
      name: p.name,
      emoji: p.emoji,
      image: p.image,
      alt: p.alt,
      // An entity page is the tile's best destination the moment it exists.
      href: entity ? `/pest-library/${p.slug}` : p.href,
      isEntity: Boolean(entity),
      aliases: p.aliases ?? [],
    };
  });

  const tileSlugs = new Set(VISIBLE_PESTS.map((p) => p.slug));
  const extras: PestCatalogEntry[] = published
    .filter((e) => !tileSlugs.has(e.slug))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((e) => ({
      slug: e.slug,
      name: e.name,
      emoji: e.emoji ?? '🐛',
      image: e.image,
      alt: e.image ? e.imageAlt : undefined,
      href: `/pest-library/${e.slug}`,
      isEntity: true,
      aliases: [],
    }));

  return [...tiles, ...extras];
}

export interface PestIndexItem {
  name: string;
  emoji: string;
  /** Destination: /pest-library/<slug> or a service page, or `#<slug>` hub anchor. */
  link: string;
  aliases: string[];
}

export function buildPestIndex(catalog: PestCatalogEntry[]): PestIndexItem[] {
  return catalog.map((p) => ({
    name: p.name,
    emoji: p.emoji,
    link: p.href ?? `#${p.slug}`,
    aliases: p.aliases,
  }));
}

/**
 * Resolve free text (a search query or an AI identification result) to the best
 * pest entity. Exact name match wins, then whole-word alias match, then substring.
 * Returns null rather than guessing when nothing matches — the caller decides the
 * fallback, and "no match" must never silently become a commercial link.
 */
export function matchPest(text: string, index: PestIndexItem[]): PestIndexItem | null {
  const q = text.toLowerCase().trim();
  if (!q) return null;
  const exact = index.find((p) => p.name.toLowerCase() === q);
  if (exact) return exact;
  const wordHit = index.find((p) =>
    [p.name, ...p.aliases].some((a) => new RegExp(`\\b${a.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(q)),
  );
  if (wordHit) return wordHit;
  return (
    index.find((p) => [p.name, ...p.aliases].some((a) => q.includes(a.toLowerCase()) || a.toLowerCase().includes(q))) ?? null
  );
}
