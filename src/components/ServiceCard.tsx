import { ArrowRight } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import type { Service } from '@/data/services';
import { mainLocationPath } from '@/lib/paths';
import { Link } from '@/lib/router';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const path = mainLocationPath(service.slug);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue/30">
      <div className="aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-lg font-bold leading-snug text-navy">
            <Link to={path} className="transition-colors hover:text-blue">{service.name}</Link>
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{service.summary}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <CallButton size="md" label="Call Now" />
          <Link to={path} className="inline-flex items-center gap-1 text-sm font-semibold text-blue transition-all duration-200 hover:gap-2">
            {service.name} details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
