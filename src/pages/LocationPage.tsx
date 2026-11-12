import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { CtaBanner } from '@/components/CtaBanner';
import { FaqList } from '@/components/FaqList';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getArea, AREAS } from '@/data/areas';
import { BUSINESS } from '@/data/business';
import { getService } from '@/data/services';
import { locationPath, mainLocationPath } from '@/lib/paths';
import { breadcrumbSchema, serviceSchema, useSeo } from '@/lib/seo';
import { Link } from '@/lib/router';

interface LocationPageProps {
  serviceSlug: string;
  areaSlug: string;
}

function NotFoundFallback() {
  return (
    <section className="px-5 py-24 text-center lg:px-8">
      <p className="text-slate-600">This service page is not available.</p>
    </section>
  );
}

export function LocationPage({ serviceSlug, areaSlug }: LocationPageProps) {
  const service = getService(serviceSlug);
  const area = getArea(areaSlug);
  const path = locationPath(serviceSlug, areaSlug);
  const pageLabel = service && area ? `${service.name} in ${area.name}, VA` : '';

  useSeo({
    title: `${pageLabel} | ${BUSINESS.name}`,
    description: service && area ? `${service.summary} Serving ${area.name}, VA. Call ${BUSINESS.phoneDisplay}.` : '',
    path,
    jsonLd: service && area
      ? [
          serviceSchema(service, `${area.name}, VA`, path),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Plumbing Services', path: '/services' },
            { name: pageLabel, path },
          ]),
        ]
      : [],
  });

  if (!service || !area) return <NotFoundFallback />;

  const relatedHere = service.related
    .filter((slug) => area.serviceSlugs.includes(slug))
    .map((slug) => getService(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const otherAreas = AREAS.filter((other) => other.slug !== area.slug && other.serviceSlugs.includes(service.slug));
  const Icon = service.icon;

  return (
    <>
      <section className="border-b border-navy/10 bg-mist px-5 pb-16 pt-12 lg:px-8 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Plumbing Services', to: '/services' },
                { label: `${service.name} in ${area.name}` },
              ]}
            />
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {area.isMain ? 'Main service area' : 'Serving this area'}: {area.name}, VA
            </p>
            <h1 className="text-4xl font-bold leading-[1.15] text-navy md:text-5xl">
              {service.name} in {area.name}, VA
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600">{service.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{area.about}</p>
            <div className="mt-8">
              <CallButton variant="primary" size="lg" label={`Call Now: ${BUSINESS.phoneDisplay}`} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-navy/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-navy">{service.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Common problems we see</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-base leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-aqua" aria-hidden="true" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Signs you may need this service</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {service.signs.map((sign) => (
                <li key={sign} className="flex gap-3 text-base leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">How the work is handled</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {service.process.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-white p-6 ring-1 ring-navy/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            {relatedHere.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-navy">Related services in {area.name}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {relatedHere.map((related) => (
                    <li key={related.slug}>
                      <Link
                        to={locationPath(related.slug, area.slug)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-blue transition-all hover:gap-3 hover:text-navy"
                      >
                        {related.name} in {area.name}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold text-navy">{area.isMain ? `${service.name} nearby` : `Main service area`}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {area.isMain ? (
                  otherAreas.map((other) => (
                    <li key={other.slug}>
                      <Link
                        to={locationPath(service.slug, other.slug)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-blue transition-all hover:gap-3 hover:text-navy"
                      >
                        {service.name} in {other.name}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      to={mainLocationPath(service.slug)}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-blue transition-all hover:gap-3 hover:text-navy"
                    >
                      {service.name} in {BUSINESS.mainAreaName}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                )}
              </ul>
              <Link to="/service-areas" className="mt-6 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline">
                View all service areas
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-navy md:text-3xl">Questions about {service.name.toLowerCase()}</h2>
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Call about ${service.name.toLowerCase()} in ${area.name}`}
        body="Describe the problem by phone. We will confirm availability and the next steps before we arrive."
      />
    </>
  );
}
