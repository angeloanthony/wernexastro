// content.config.ts  (Astro 6 — lives at project root, uses glob loader + astro/zod)
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
const pestLibrary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pest-library' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    canonical: z.string().url().optional(),
    emoji: z.string().optional(),
    summary: z.string(),
    signs: z.array(z.string()).optional(),
    treatment: z.string().optional(),
  }),
});

export const collections = { blog, cities, services, pestLibrary };
