// src/lib/pestIndex.ts
// The one place the client-facing pest entity index is built. Everything that
// needs to resolve "what the user typed / what the AI identified" to a pest
// entity consumes THIS shape, derived from src/data/pests.ts:
//   - the Pest Library search box, via the #pest-index JSON that pest-library.astro
//     emits from buildPestIndex(). NOTE: public/script.js consumes that JSON but runs
//     its own substring filter — it does not import matchPest().
//   - the Bug Identifier result→entity mapping, when its upload flow is restored
//     (the identify* client functions were never migrated into this repo — see
//     the implementation report). Whoever rebuilds it must map the AI's answer
//     through matchPest() below instead of hard-coding URLs.
//
// matchPest() therefore has NO caller today. It is the resolver the identifier is meant
// to use; it is not currently load-bearing, and nothing breaks if it is wrong. Test it
// before trusting it.
//
// `link` policy: an entity points at its own /pest-library/<slug> page once that
// page is published (pests.ts href is updated at publish time), else at an
// existing service page, else at its hub anchor. That ordering is what keeps the
// identifier from dumping every result at /contact.

import { VISIBLE_PESTS, type PestEntry } from '../data/pests';

export interface PestIndexItem {
  name: string;
  emoji: string;
  /** Destination: /pest-library/<slug> or a service page, or `#<slug>` hub anchor. */
  link: string;
  aliases: string[];
}

export function buildPestIndex(): PestIndexItem[] {
  return VISIBLE_PESTS.map((p: PestEntry) => ({
    name: p.name,
    emoji: p.emoji,
    link: p.href ?? `#${p.slug}`,
    aliases: p.aliases ?? [],
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
