import { useEffect } from 'react';
import { AREAS } from '@/data/areas';
import { BUSINESS } from '@/data/business';
import type { Service } from '@/data/services';

export type JsonLd = Record<string, unknown>;

interface SeoInput {
  title: string;
  description: string;
  path: string;
  jsonLd?: JsonLd[];
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function useSeo({ title, description, path, jsonLd = [] }: SeoInput) {
  const jsonLdText = JSON.stringify(jsonLd);

  useEffect(() => {
    const url = `${BUSINESS.siteUrl}${path}`;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', BUSINESS.name);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let script = document.getElementById('page-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = jsonLdText;
  }, [title, description, path, jsonLdText]);
}

export function plumberSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: BUSINESS.name,
    telephone: BUSINESS.phoneE164,
    url: BUSINESS.siteUrl,
    sameAs: [BUSINESS.mapsUrl, BUSINESS.reviewsUrl],
    areaServed: AREAS.map((area) => ({ '@type': 'City', name: `${area.name}, VA` })),
  };
}

export function serviceSchema(service: Service, areaName: string, path: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${areaName}`,
    serviceType: service.name,
    url: `${BUSINESS.siteUrl}${path}`,
    provider: { '@type': 'Plumber', name: BUSINESS.name, telephone: BUSINESS.phoneE164 },
    areaServed: { '@type': 'City', name: areaName },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.siteUrl}${item.path}`,
    })),
  };
}
