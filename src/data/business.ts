// src/data/business.ts
// SINGLE SOURCE OF TRUTH — Name, Address, Phone, and core business facts.
// Every component, schema block, footer, and CTA imports from here.
// Changing a value here propagates everywhere; a NAP mismatch becomes impossible.

export const WERNEX = {
  name: "Wernex Termite & Pest Control",
  legalName: "Wernex Termite & Pest Control, Inc.",
  alternateName: "Wernex Pest Control",
  phone: "(435) 673-9503",
  phoneTel: "+14356739503",        // tel: link form
  phoneSchema: "+1-435-673-9503",  // schema.org form
  email: "wernexpestcontrol@gmail.com",
  street: "6097 Dry Fork Canyon Rd",
  city: "Vernal",
  state: "UT",
  stateLong: "Utah",
  zip: "84078",
  website: "https://www.wernexpestcontrol.com",
  geo: { lat: 40.4555, lng: -109.5287 },
  // NOTE: Verified Google Business Profile rating as of June 2026 = 4.5 stars / 27 reviews.
  // aggregateRating structured data is rendered ONLY on testimonials.html, where the actual
  // reviews are displayed on-page (the policy-correct place for it). It is intentionally NOT
  // on the other pages. If you re-add a `rating` field here for the schema.ts helper, keep it
  // in sync with the live GBP numbers — stale/invented counts risk a structured-data violation.
  foundingDate: "1994",
  priceRange: "$$",
  logo: "https://www.wernexpestcontrol.com/images/Logo.webp",
  hours: {
    weekday: "Mon–Fri 7am–7pm",
    saturday: "Sat 8am–5pm",
  },
  socials: {
    facebook: "https://www.facebook.com/wernexpestcontrol",
    instagram: "https://www.instagram.com/wernexpestcontrol",
    youtube: "https://www.youtube.com/@wernexpestcontrol",
  },
} as const;

// Primary navigation — order and labels preserved from the original site.
export const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "services.html", label: "Services" },
  { href: "pest-library.html", label: "Pest Library" },
  { href: "bug-identifier.html", label: "Identify a Bug" },
  { href: "blog.html", label: "Blog" },
  { href: "testimonials.html", label: "Reviews" },
  { href: "contact.html", label: "Schedule Appt" },
] as const;

// Service areas (used by ServiceArea component) — real community names.
export const SERVICE_AREAS = [
  "St. George", "Washington", "Hurricane", "Ivins", "Santa Clara",
  "LaVerkin", "Toquerville", "Leeds", "Springdale", "Cedar City",
  "Enterprise", "Hildale", "Duchesne County", "Uintah County",
] as const;
