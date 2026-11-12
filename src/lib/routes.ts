import { LOCATION_PAGES } from '@/data/areas';

type StaticPage = 'home' | 'about' | 'services' | 'service-areas' | 'contact' | 'privacy-policy' | 'terms-and-conditions';

export type Route =
  | { page: StaticPage | 'not-found' }
  | { page: 'location'; serviceSlug: string; areaSlug: string };

const STATIC_ROUTES: Record<string, StaticPage> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/service-areas': 'service-areas',
  '/contact': 'contact',
  '/privacy-policy': 'privacy-policy',
  '/terms-and-conditions': 'terms-and-conditions',
};

export function resolveRoute(pathname: string): Route {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const staticPage: StaticPage | undefined = STATIC_ROUTES[path];
  if (staticPage) return { page: staticPage };

  const location = LOCATION_PAGES.find(({ serviceSlug, areaSlug }) => path === `/${serviceSlug}-${areaSlug}`);
  if (location) return { page: 'location', ...location };

  return { page: 'not-found' };
}
