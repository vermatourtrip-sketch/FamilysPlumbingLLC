import { MAIN_AREA_SLUG } from '@/data/business';
import { SERVICES } from '@/data/services';

export interface ServiceArea {
  slug: string;
  name: string;
  isMain: boolean;
  about: string;
  serviceSlugs: string[];
}

export const AREAS: ServiceArea[] = [
  {
    slug: MAIN_AREA_SLUG,
    name: 'Colonial Heights',
    isMain: true,
    about:
      'Colonial Heights is home base for Family\'s Plumbing LLC. Most of our plumbing work is for homeowners in Colonial Heights and the surrounding Tri-Cities area, and every service we offer is available here. Call to confirm availability for your street.',
    serviceSlugs: SERVICES.map((service) => service.slug),
  },
  {
    slug: 'petersburg-va',
    name: 'Petersburg',
    isMain: false,
    about:
      'Petersburg homeowners call us for clogged bathroom sinks and tubs, outdoor faucet repairs, and drain clearing. Petersburg is a short drive from our Colonial Heights base, and we confirm availability for each address by phone.',
    serviceSlugs: ['faucet-repair', 'bathroom-plumbing', 'drain-cleaning', 'plumbing-repair'],
  },
  {
    slug: 'richmond-va',
    name: 'Richmond',
    isMain: false,
    about:
      'In Richmond, our work includes kitchen sink service, garbage disposal installation, and faucet repairs for homes across the city. Richmond is part of our wider Greater Richmond service area; call to confirm we can reach your neighborhood.',
    serviceSlugs: ['kitchen-plumbing', 'faucet-repair', 'plumbing-repair', 'garbage-disposal-installation'],
  },
  {
    slug: 'chesterfield-va',
    name: 'Chesterfield',
    isMain: false,
    about:
      'Chesterfield homeowners contact us for kitchen plumbing service and general plumbing repairs. Call to talk through your problem and find out when we can reach your part of Chesterfield.',
    serviceSlugs: ['kitchen-plumbing', 'plumbing-repair'],
  },
  {
    slug: 'chester-va',
    name: 'Chester',
    isMain: false,
    about:
      'In Chester, we handle drain clearing and general plumbing repairs, including washing machine drain and water line problems. Call to check availability for your home before scheduling a visit.',
    serviceSlugs: ['drain-cleaning', 'washing-machine-line-repair', 'plumbing-repair'],
  },
];

export const LOCATION_PAGES = AREAS.flatMap((area) =>
  area.serviceSlugs.map((serviceSlug) => ({ serviceSlug, areaSlug: area.slug })),
);

export function getArea(slug: string) {
  return AREAS.find((area) => area.slug === slug);
}
