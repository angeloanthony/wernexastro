// src/content.config.ts — Astro 5/6 load the content config from THIS path only.
// (It previously sat at the project root, where Astro never read it, so none of
// these schemas or guardrails were actually enforced. Moved Aug 2026.)
// Uses glob loader + astro/zod.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// ── Blog: informational/traffic articles ──────────────────────────────
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),                  // AI-pullable TL;DR block (required)
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    canonical: z.string().url().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(3).optional(),
  }),
});

// ── Cities: local landing pages — guardrails against doorway pages ─────
// A town cannot enter the build unless it supplies genuinely unique local content.
const cities = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cities' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().url(),
    city: z.string(),
    county: z.string(),
    localStat: z.string().min(40),                 // forces real local data
    landmarks: z.array(z.string()).min(2),         // specific local references
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
    testimonial: z.string().min(60).optional(),    // E-E-A-T signal
  }),
});

// ── Services: service detail pages ─────────────────────────────────────
const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().url(),
    serviceType: z.string(),
    summary: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(3).optional(),
    offerPrice: z.string().optional(),
  }),
});

// ── Pest library entries ───────────────────────────────────────────────
// Three-layer taxonomy. A `speciesOf` value makes the entry Layer 2 (an individual
// species); its absence makes it Layer 1 (a pest category). Layer 3 — commercial
// local intent — stays in the hand-authored /*-control-* pages and is reached via
// `relatedServices`, so an informational pest page never competes with the page
// that is actually meant to convert.
//
// Guardrails mirror the `cities` collection: a pest cannot enter the build without
// the Utah-specific substance that justifies its existence. `utahDistribution` is
// the geographic-accuracy gate — Wernex serves both Washington County and the
// Uintah Basin, and most pests are not relevant to both.
const pestLibrary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pest-library' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    canonical: z.string().url().optional(),
    emoji: z.string().optional(),
    summary: z.string(),
    /**
     * Publish gate. Defaults to false (draft). Drafts build ONLY in `astro dev` or
     * when the PEST_PREVIEW=1 env var is set on a local build — a normal production
     * build (what Cloudflare Pages runs) generates no route for them, so an
     * accidental deploy during the canonical measurement window cannot expose them.
     * Flipping this to true is the deliberate act of publishing a pest URL.
     */
    published: z.boolean().default(false),
    /** Hero image path. Omit to fall back to this pest's (or its category's) tile image in src/data/pests.ts. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    signs: z.array(z.string()).optional(),
    treatment: z.string().optional(),

    // ── Taxonomy ──────────────────────────────────────────────────────
    /** Layer 1 grouping this entry belongs to (slug form, e.g. 'ants'). */
    parentCategory: z.string(),
    /** Set on Layer 2 species pages: the category slug this is a species of. */
    speciesOf: z.string().optional(),
    /** Binomial name, e.g. 'Centruroides sculpturatus'. Layer 2 pages should have one. */
    scientificName: z.string().optional(),

    // ── Utah accuracy gate ────────────────────────────────────────────
    /** Which parts of the service area this pest actually occurs in. */
    regions: z.array(z.enum(['southwest-utah', 'uintah-basin', 'statewide'])).min(1),
    /** Prose on where in Utah it is found and where it is not. Forces real local data. */
    utahDistribution: z.string().min(80),
    /**
     * How this entry earns a page:
     *   'treatable'    — Wernex services it; commercial framing is honest.
     *   'informational' — real Utah pest, no direct service line; identification only.
     *   'myth'         — commonly searched but not established in Utah (e.g. recluse
     *                    spiders). Page exists to correct the misconception, and must
     *                    NOT carry treatment framing.
     */
    intent: z.enum(['treatable', 'informational', 'myth']),
    /** When it is active and searched for. Drives seasonal internal linking. */
    seasonality: z.string().optional(),

    // ── Internal link graph ───────────────────────────────────────────
    /** Slugs of sibling/related pest entries. */
    relatedPests: z.array(z.string()).optional(),
    /** Absolute paths to existing service/location pages, e.g. '/scorpion-control-st-george'. */
    relatedServices: z.array(z.string()).optional(),

    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
  })
  // A 'myth' entry must not point at a commercial page — that is the exact
  // bait-and-switch the intent gate exists to prevent.
  .refine((d) => d.intent !== 'myth' || !d.relatedServices?.length, {
    message: "intent:'myth' entries must not set relatedServices — they have no treatment market.",
    path: ['relatedServices'],
  })
  // Layer 2 pages declare their species relationship consistently.
  .refine((d) => !d.speciesOf || d.speciesOf === d.parentCategory, {
    message: 'speciesOf must match parentCategory.',
    path: ['speciesOf'],
  }),
});

export const collections = { blog, cities, services, pestLibrary };
