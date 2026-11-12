import { HeartHandshake, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHeader } from '@/components/PageHeader';
import { BUSINESS } from '@/data/business';
import { plumberSchema, useSeo } from '@/lib/seo';

const VALUES = [
  { icon: ShieldCheck, title: 'Honesty and integrity', body: 'We value honesty and integrity in everything we do, from the first phone call to the final check.' },
  { icon: Wrench, title: 'Quality of work', body: 'We take pride in our work and in getting results that hold up after we leave.' },
  { icon: HeartHandshake, title: 'Customers come first', body: 'Our customers are our top priority, regardless of the size of the job or the budget.' },
];

export function AboutPage() {
  useSeo({
    title: "About Family's Plumbing LLC | Colonial Heights, VA Plumber",
    description: "Learn about Family's Plumbing LLC, a locally owned plumbing company serving Colonial Heights, VA and the Tri-Cities area.",
    path: '/about',
    jsonLd: [plumberSchema()],
  });

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A locally owned plumbing company in Colonial Heights"
        description="Family's Plumbing LLC is a locally owned and operated plumbing business serving Colonial Heights and the surrounding Tri-Cities and Greater Richmond communities."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      >
        <CallButton label={`Call ${BUSINESS.phoneDisplay}`} size="lg" />
      </PageHeader>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6 text-base leading-relaxed text-slate-600">
            <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">Our approach to plumbing</h2>
            <p>
              We start by listening to the problem. Whether it is a slow drain, a leaking fitting, or a water heater that has given up, we look for the cause before we recommend a fix.
            </p>
            <p>
              We explain what we find in plain language and talk through the options with you. You decide what happens next, and we confirm the plan directly with you before any work begins.
            </p>
            <p>
              From kitchen sinks and bathroom fixtures to water heaters and drain clearing, we handle everyday residential plumbing for homes across Colonial Heights and nearby communities.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Worker repairing pipes with tools in an indoor workspace"
            loading="lazy"
            className="h-full min-h-72 w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold leading-tight md:text-4xl">What we believe in</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-white p-8 ring-1 ring-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <MessageCircle className="h-8 w-8 text-blue" aria-hidden="true" />
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">How we communicate with customers</h2>
          <p className="text-base leading-relaxed text-slate-600">
            Every job starts with a phone call. Tell us what is happening and we will explain whether we can help, when we can reach you, and what to expect. We keep the conversation direct, so you always know where things stand.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Talk to Family's Plumbing LLC"
        body="Call to discuss your plumbing needs, check availability, and agree on next steps."
      />
    </>
  );
}
