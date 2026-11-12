import { useCurrentPath } from '@/lib/router';
import { resolveRoute } from '@/lib/routes';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { LocationPage } from '@/pages/LocationPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PrivacyPolicyPage, TermsPage } from '@/pages/LegalPages';
import { ServiceAreasPage } from '@/pages/ServiceAreasPage';
import { ServicesPage } from '@/pages/ServicesPage';

function App() {
  const route = resolveRoute(useCurrentPath());

  return (
    <SiteLayout>
      {route.page === 'home' && <HomePage />}
      {route.page === 'about' && <AboutPage />}
      {route.page === 'services' && <ServicesPage />}
      {route.page === 'service-areas' && <ServiceAreasPage />}
      {route.page === 'contact' && <ContactPage />}
      {route.page === 'privacy-policy' && <PrivacyPolicyPage />}
      {route.page === 'terms-and-conditions' && <TermsPage />}
      {route.page === 'location' && <LocationPage serviceSlug={route.serviceSlug} areaSlug={route.areaSlug} />}
      {route.page === 'not-found' && <NotFoundPage />}
    </SiteLayout>
  );
}

export default App;
