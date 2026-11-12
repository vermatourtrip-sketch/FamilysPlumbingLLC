import { ArrowRight } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHeader } from '@/components/PageHeader';
import { AREAS } from '@/data/areas';
import { getService } from '@/data/services';
import { locationPath } from '@/lib/paths';
import { plumberSchema, useSeo } from '@/lib/seo';
import { Link } from '@/lib/router';

export function ServiceAreasPage() {
  useSeo({
    title: 'Plumbing Service Areas | Colonial Heights, Petersburg, Richmond, VA | Family\'s Plumbing LLC',
    description: 'Family\'s Plumbing LLC serves Colonial Heights, VA as its main service area, with plumbing service in Petersburg, Richmond, Chesterfield, and Chester.',
    path: '/service-areas',
    jsonLd: [plumberSchema()],
  });

  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="Where Family's Plumbing LLC works"
        description="Colonial Heights is our main service area. We also serve nearby communities for the services listed below. Call to confirm availability for your address."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]}
      />

      {AREAS.map((area) => (
        <section key={area.slug} id={area.slug} className="scroll-mt-28 border-b border-navy/10 px-5 py-16 last:border-b-0 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">
                {area.isMain ? 'Main service area' : 'Additional service area'}
              </p>
              <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">{area.name}, VA</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">{area.about}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {area.serviceSlugs.map((serviceSlug) => {
                const service = getService(serviceSlug);
                if (!service) return null;
                return (
                  <li key={serviceSlug}>
                    <Link
                      to={locationPath(serviceSlug, area.slug)}
                      className="group flex h-full items-center justify-between gap-3 rounded-xl bg-white p-5 ring-1 ring-navy/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-blue/30"
                    >
                      <span className="text-sm font-semibold text-navy group-hover:text-blue">
                        {service.name} in {area.name}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-blue transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <CtaBanner
        title="Call to confirm we can reach your area"
        body="Give us your city and the plumbing problem, and we will confirm availability by phone."
      />
    </>
  );
}
