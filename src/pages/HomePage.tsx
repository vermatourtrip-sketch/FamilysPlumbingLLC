import { ArrowRight, MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { CtaBanner } from '@/components/CtaBanner';
import { FaqList } from '@/components/FaqList';
import { ServiceCard } from '@/components/ServiceCard';
import { AREAS } from '@/data/areas';
import { BUSINESS, GOOGLE_MAP_EMBED_SRC } from '@/data/business';
import { SERVICES, getService } from '@/data/services';
import { locationPath, mainLocationPath } from '@/lib/paths';
import { plumberSchema, useSeo } from '@/lib/seo';
import { Link } from '@/lib/router';

const HERO_IMAGE = 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const WHY_CHOOSE = [
  { title: 'Clear communication', body: 'We explain the problem and your options in plain language before any work begins.' },
  { title: 'Thorough diagnosis', body: 'We look for the cause of the problem, not just the symptom we were called about.' },
  { title: 'Direct phone access', body: 'You speak with us directly by phone to discuss your plumbing needs and availability.' },
  { title: 'Honest next steps', body: 'We talk through costs and next steps by phone so there are no surprises.' },
];

const HOW_IT_WORKS = [
  { title: 'Call Family\'s Plumbing LLC', body: 'Dial (804) 896-3618 at any time that suits you.' },
  { title: 'Explain your plumbing problem', body: 'Tell us what is happening, where, and how long it has been going on.' },
  { title: 'Discuss service availability', body: 'We confirm whether we can reach your home and when.' },
  { title: 'Confirm next steps by phone', body: 'We agree on the plan directly with you before we arrive.' },
];

const HOME_FAQS = [
  {
    question: 'Where do you provide plumbing service?',
    answer: 'Our main service area is Colonial Heights, VA. We also serve nearby communities such as Petersburg, Richmond, Chesterfield, and Chester. Call to confirm availability at your address.',
  },
  {
    question: 'How do I get a plumber to come out?',
    answer: `Call ${BUSINESS.phoneDisplay}. We will discuss your plumbing problem and confirm availability and next steps by phone.`,
  },
  {
    question: 'Do you offer emergency service?',
    answer: 'We do not advertise round-the-clock emergency service. Call us to ask about current availability for urgent problems.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Call to talk through your project. We will explain what to expect and confirm cost details by phone.',
  },
  {
    question: 'What plumbing services do you offer?',
    answer: 'We handle water heater installation and replacement, drain cleaning, faucet and toilet repair, kitchen and bathroom plumbing, garbage disposal installation, washing machine drain and water line repair, leak repair, and general plumbing repair.',
  },
  {
    question: 'Do you provide warranties on your work?',
    answer: 'Call us to ask what applies to your specific job. We will explain any terms before work begins.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Ask us by phone about our licensing and insurance before you book work. We are happy to answer that directly.',
  },
  {
    question: 'What should I do before the plumber arrives?',
    answer: 'Clear the area around the fixture or appliance, and tell us the symptoms and when they started so we can prepare.',
  },
];

const REVIEWS = [
  { quote: 'Hot water heater.', name: 'Thomas', city: 'Colonial Heights, VA' },
  { quote: 'Kitchen sink plumbing.', name: 'Jan', city: 'Chesterfield, VA' },
  { quote: 'Installed a garbage disposal, unplugged our bathroom sink, and redid our kitchen sink.', name: 'William A.', city: 'Richmond, VA' },
  { quote: 'Plumbing.', name: 'Gil', city: 'Richmond, VA' },
  { quote: 'Drain and repaired a washing machine drain and power jet water line.', name: 'G.', city: 'Chester, VA' },
  { quote: 'Fixed outside faucet.', name: 'Debbie', city: 'Richmond, VA' },
  { quote: 'Repaired clogged bathroom sink and tub.', name: 'Tracey', city: 'Petersburg, VA' },
  { quote: 'Fixed a major leak in my house.', name: 'Jennifer', city: 'Colonial Heights, VA' },
  { quote: 'Cleared a clogged sink and replaced toilet parts.', name: 'Liz', city: 'New Kent, VA' },
];

const PROBLEM_FINDER = [
  { symptom: 'Drains are slow or keep clogging', slug: 'drain-cleaning' },
  { symptom: 'Water is leaking or dripping', slug: 'plumbing-leak-repair' },
  { symptom: 'Hot water runs out or is lukewarm', slug: 'water-heater-installation' },
  { symptom: 'A faucet drips or sputters', slug: 'faucet-repair' },
  { symptom: 'A toilet keeps running', slug: 'toilet-repair' },
  { symptom: 'The kitchen sink is acting up', slug: 'kitchen-plumbing' },
  { symptom: 'The bathroom sink or tub drains poorly', slug: 'bathroom-plumbing' },
  { symptom: 'The garbage disposal hums or leaks', slug: 'garbage-disposal-installation' },
  { symptom: 'The washer drain backs up or the line leaks', slug: 'washing-machine-line-repair' },
  { symptom: 'Not sure what is wrong', slug: 'plumbing-repair' },
];

const HOMEOWNER_TIPS = [
  'Know where your main water shutoff valve is and confirm it turns freely.',
  'Keep grease, coffee grounds, and wipes out of kitchen and bathroom drains.',
  'Use drain screens to catch hair and debris before they reach the pipe.',
  'Check your water meter when every fixture is off. If it moves, you may have a hidden leak.',
  'Watch for rusty water or hot water that runs out sooner than usual, and call early.',
];

export function HomePage() {
  useSeo({
    title: "Plumber in Colonial Heights, VA | Family's Plumbing LLC",
    description: "Reliable plumbing services in Colonial Heights, VA. Water heaters, drain cleaning, faucets, toilets, and leak repair. Call Family's Plumbing LLC at (804) 896-3618.",
    path: '/',
    jsonLd: [plumberSchema()],
  });

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-aqua ring-1 ring-white/15">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Colonial Heights, Virginia
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
              Reliable Plumbing Services in Colonial Heights, VA
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/85">
              Looking for dependable plumbing help? Contact Family&apos;s Plumbing LLC to discuss your plumbing needs and service availability in Colonial Heights and surrounding communities.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <CallButton variant="accent" size="lg" label={`Call ${BUSINESS.phoneDisplay}`} />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition duration-200 hover:bg-white hover:text-navy"
              >
                Explore Plumbing Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img src={HERO_IMAGE} alt="Plumber fitting steel pipes indoors" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-navy shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua/20 text-navy">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-snug">Locally owned<br />and operated</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Trust" className="border-b border-navy/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-blue" aria-hidden="true" />
            <p className="text-sm font-semibold">Family&apos;s Plumbing LLC<br /><span className="font-normal text-slate-600">Colonial Heights, Virginia</span></p>
          </div>
          <a href={BUSINESS.phoneTel} className="flex items-center gap-3 transition hover:text-blue">
            <Phone className="h-6 w-6 text-blue" aria-hidden="true" />
            <p className="text-sm font-semibold">{BUSINESS.phoneDisplay}<br /><span className="font-normal text-slate-600">Verified business phone</span></p>
          </a>
          <a href={BUSINESS.reviewsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-blue">
            <Star className="h-6 w-6 text-blue" aria-hidden="true" />
            <p className="text-sm font-semibold">Five-star reviews<br /><span className="font-normal text-slate-600">9 homeowner reviews on Networx</span></p>
          </a>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-blue" aria-hidden="true" />
            <p className="text-sm font-semibold">Locally owned<br /><span className="font-normal text-slate-600">Operated in the Tri-Cities area</span></p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Plumbing Services</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Plumbing help for your home in Colonial Heights</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Each service below links to its own page with the details, common problems, and the steps we take.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Why Choose Us</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">A plumber who explains the work first</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Homeowners who call us get a direct conversation about the problem, not a sales pitch. These are the habits we bring to every job.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {WHY_CHOOSE.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-6 ring-1 ring-navy/10">
                  <h3 className="text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-navy p-8 text-white shadow-xl md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-aqua">Serving the Tri-Cities</p>
              <h3 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">Colonial Heights and nearby communities</h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Colonial Heights is our home base. We also serve Petersburg, Richmond, Chesterfield, and Chester. Call to confirm we can reach your address.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {AREAS.map((area) => (
                <li key={area.slug} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
                  {area.name}, VA
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <CallButton variant="accent" label={`Call ${BUSINESS.phoneDisplay}`} />
              <a href={BUSINESS.reviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-white transition-all hover:gap-2 hover:text-aqua">
                Read our reviews on Networx
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">What Homeowners Say</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Recent jobs our customers have shared</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Every review below is a five-star rating from a homeowner on Networx.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <figure key={`${review.name}-${review.city}`} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/10">
                <div className="mb-3 flex gap-1 text-blue" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-base font-semibold leading-relaxed text-navy">&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="mt-auto pt-4 text-sm text-slate-600">{review.name}, {review.city}</figcaption>
              </figure>
            ))}
          </div>
          <a href={BUSINESS.reviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-1 text-sm font-semibold text-blue transition-all hover:gap-2">
            See all reviews on Networx
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Find Your Problem</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Start with what you are noticing</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Pick the problem that sounds closest. Each page explains the common causes and warning signs, with a direct line to call us.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEM_FINDER.map(({ symptom, slug }) => {
              const service = getService(slug);
              if (!service) return null;
              return (
                <li key={symptom}>
                  <Link
                    to={mainLocationPath(slug)}
                    className="group flex h-full flex-col gap-2 rounded-2xl bg-white p-6 ring-1 ring-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-blue/30"
                  >
                    <span className="text-base font-bold text-navy group-hover:text-blue">{symptom}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue">
                      {service.name}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Homeowner Tips</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Simple habits that prevent most plumbing trouble</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Small routine checks can catch problems early. If something seems off, call us and we will talk it through.</p>
            <CallButton className="mt-8" label={`Call ${BUSINESS.phoneDisplay}`} />
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {HOMEOWNER_TIPS.map((tip, index) => (
              <li key={tip} className="rounded-2xl bg-white p-6 ring-1 ring-navy/10">
                <span className="text-2xl font-bold text-blue">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Service Areas</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Where we work</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Colonial Heights is our main service area. We also serve nearby communities, and we confirm availability for each address by phone.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas#${area.slug}`}
                className="group flex items-center justify-between rounded-2xl bg-white p-6 ring-1 ring-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-blue/30"
              >
                <span>
                  <span className="block text-lg font-bold text-navy group-hover:text-blue">{area.name}, VA</span>
                  <span className="mt-1 block text-sm text-slate-600">{area.isMain ? 'Main service area' : `${area.serviceSlugs.length} services available`}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-blue transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Services by Area</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Find the service you need in your town</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Each town lists the plumbing services we currently offer there. Open a page for the common problems, warning signs, and our process.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <div key={area.slug} className="rounded-2xl bg-white p-6 ring-1 ring-navy/10">
                <h3 className="text-lg font-bold text-navy">{area.name}, VA</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {area.serviceSlugs.map((serviceSlug) => {
                    const service = getService(serviceSlug);
                    if (!service) return null;
                    return (
                      <li key={serviceSlug}>
                        <Link to={locationPath(serviceSlug, area.slug)} className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue">
                          <ArrowRight className="h-3.5 w-3.5 text-blue transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                          {service.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">How It Works</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Four steps from your first call to the repair</h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => (
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Our Location</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Based in Colonial Heights, Virginia</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Find us on the map, then call to confirm service at your address before you visit.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CallButton label={`Call ${BUSINESS.phoneDisplay}`} />
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 text-base font-semibold text-navy transition duration-200 hover:bg-navy hover:text-white">
                Open in Google Maps
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy/10">
            <iframe
              src={GOOGLE_MAP_EMBED_SRC}
              title="Map showing Family's Plumbing LLC in Colonial Heights, VA"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue">Questions</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Still have a question? Call us and we will answer it directly.</p>
            <CallButton className="mt-8" label={`Call ${BUSINESS.phoneDisplay}`} />
          </div>
          <FaqList items={HOME_FAQS} />
        </div>
      </section>

      <CtaBanner
        title="Speak With a Plumber Today"
        body="Tell us what is going on with your plumbing and we will talk through availability and next steps by phone."
      />
    </>
  );
}
