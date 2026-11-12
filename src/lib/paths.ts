import { MAIN_AREA_SLUG } from '@/data/business';

export function locationPath(serviceSlug: string, areaSlug: string) {
  return `/${serviceSlug}-${areaSlug}`;
}

export function mainLocationPath(serviceSlug: string) {
  return locationPath(serviceSlug, MAIN_AREA_SLUG);
}
