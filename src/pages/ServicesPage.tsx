import { CtaBanner } from '@/components/CtaBanner';
import { PageHeader } from '@/components/PageHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/data/services';
import { plumberSchema, useSeo } from '@/lib/seo';

export function ServicesPage() {
  useSeo({
    title: 'Plumbing Services in Colonial Heights, VA | Family\'s Plumbing LLC',
    description: 'Water heater installation, drain cleaning, faucet and toilet repair, kitchen and bathroom plumbing, and leak repair in Colonial Heights, VA.',
    path: '/services',
    jsonLd: [plumberSchema()],
  });

  return (
    <>
      <PageHeader
        eyebrow="Plumbing Services"
        title="Plumbing services for Colonial Heights homes"
        description="Choose a service to see the common problems, the signs you may need help, and how we handle the work. Every page includes a direct line to call us."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Plumbing Services' }]}
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBanner
        title="Not sure which service you need?"
        body="Describe the problem by phone. We will tell you what it sounds like and whether we can help."
      />
    </>
  );
}
