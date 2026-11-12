import { CallButton } from '@/components/CallButton';
import { BUSINESS } from '@/data/business';
import { useSeo } from '@/lib/seo';
import { Link } from '@/lib/router';

export function NotFoundPage() {
  useSeo({
    title: `Page Not Found | ${BUSINESS.name}`,
    description: "The page you are looking for could not be found. Call Family's Plumbing LLC for plumbing help in Colonial Heights, VA.",
    path: '/',
  });

  return (
    <section className="flex min-h-[70vh] items-center px-5 py-24 lg:px-8">
      <div className="mx-auto flex max-w-xl flex-col items-start gap-6">
        <p className="text-sm font-bold uppercase tracking-widest text-blue">Error 404</p>
        <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl">This page could not be found</h1>
        <p className="text-base leading-relaxed text-slate-600">
          The link may be out of date. You can return to the homepage or call us directly for plumbing help.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/" className="inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
            Back to homepage
          </Link>
          <CallButton label={`Call ${BUSINESS.phoneDisplay}`} />
        </div>
      </div>
    </section>
  );
}
