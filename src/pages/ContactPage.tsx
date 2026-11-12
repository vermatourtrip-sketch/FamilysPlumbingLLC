import { ExternalLink, MapPin, Phone } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { PageHeader } from '@/components/PageHeader';
import { AREAS } from '@/data/areas';
import { BUSINESS, GOOGLE_MAP_EMBED_SRC } from '@/data/business';
import { plumberSchema, useSeo } from '@/lib/seo';

export function ContactPage() {
  useSeo({
    title: "Contact Family's Plumbing LLC | Colonial Heights, VA Plumber",
    description: "Call Family's Plumbing LLC at (804) 896-3618 for plumbing service in Colonial Heights, VA and the surrounding Tri-Cities area.",
    path: '/contact',
    jsonLd: [plumberSchema()],
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Call Family's Plumbing LLC"
        description="Phone is the fastest way to reach us. Tell us what is happening with your plumbing and we will confirm availability and next steps."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-navy p-8 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-aqua">Business Name</p>
              <p className="mt-2 text-2xl font-bold">{BUSINESS.name}</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-aqua">Phone</p>
              <a href={BUSINESS.phoneTel} className="mt-2 inline-flex items-center gap-2 text-3xl font-bold transition hover:text-aqua">
                <Phone className="h-7 w-7" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <CallButton variant="accent" size="lg" label="Call Now" className="mt-8 w-full sm:w-auto" />
            </div>

            <div className="rounded-2xl bg-mist p-6 ring-1 ring-navy/10">
              <h2 className="text-lg font-bold text-navy">Service area</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Main service area: Colonial Heights, VA. We also serve Petersburg, Richmond, Chesterfield, and Chester, VA. Call to confirm availability for your address.
              </p>
            </div>

            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl bg-white p-6 ring-1 ring-navy/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-blue/30"
            >
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue" aria-hidden="true" />
                <span className="text-sm font-semibold text-navy group-hover:text-blue">Open our Google Maps listing</span>
              </span>
              <ExternalLink className="h-4 w-4 text-blue" aria-hidden="true" />
            </a>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-mist shadow-lg ring-1 ring-navy/10 sm:aspect-video lg:aspect-[4/3]">
            <iframe
              src={GOOGLE_MAP_EMBED_SRC}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Family's Plumbing LLC on Google Maps"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-navy">Our service areas</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <li key={area.slug} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy ring-1 ring-navy/10">
                {area.name}, VA{area.isMain ? ' (main)' : ''}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
