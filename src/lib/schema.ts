// src/lib/schema.ts
// Centralized JSON-LD generators built from the single-source business data.
// Use these for NEW pages so structured data stays consistent and NAP-aligned.
// (Migrated legacy pages keep their original verbatim JSON-LD; adopt these
//  incrementally during Phase 2 standardization.)
import { WERNEX, SERVICE_AREAS } from '../data/business';

const ID = {
  business: `${WERNEX.website}/#business`,
  website: `${WERNEX.website}/#website`,
};

export function localBusiness() {
  return {
    '@type': 'LocalBusiness',
    '@id': ID.business,
    name: WERNEX.legalName,
    alternateName: WERNEX.alternateName,
    url: `${WERNEX.website}/`,
    telephone: WERNEX.phoneSchema,
    email: WERNEX.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: WERNEX.street,
      addressLocality: WERNEX.city,
      addressRegion: WERNEX.state,
      postalCode: WERNEX.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: WERNEX.geo.lat, longitude: WERNEX.geo.lng },
    areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: WERNEX.rating.value,
      bestRating: WERNEX.rating.best,
      ratingCount: WERNEX.rating.count,
    },
    priceRange: WERNEX.priceRange,
    image: WERNEX.logo,
    logo: WERNEX.logo,
    foundingDate: WERNEX.foundingDate,
    sameAs: [WERNEX.socials.facebook, WERNEX.socials.instagram, WERNEX.socials.youtube],
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: `${WERNEX.website}/`,
    name: WERNEX.name,
    publisher: { '@id': ID.business },
  };
}

export function faqPage(items: { q: string; a: string }[], pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function service(opts: {
  name: string; description: string; serviceType: string; url: string;
  areaServed?: string[]; offerPrice?: string;
}) {
  const node: Record<string, unknown> = {
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    provider: { '@id': ID.business },
    areaServed: (opts.areaServed ?? [...SERVICE_AREAS]).map((name) => ({ '@type': 'City', name })),
  };
  if (opts.offerPrice !== undefined) {
    node.offers = { '@type': 'Offer', price: opts.offerPrice, priceCurrency: 'USD' };
  }
  return node;
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** Wrap one or more schema nodes into a single @graph document string. */
export function graph(...nodes: object[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
