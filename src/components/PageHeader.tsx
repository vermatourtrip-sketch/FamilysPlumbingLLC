import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from '@/components/Breadcrumbs';

interface PageHeaderProps {
  title: string;
  description: string;
  crumbs: Crumb[];
  eyebrow?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, crumbs, eyebrow, children }: PageHeaderProps) {
  return (
    <section className="border-b border-navy/10 bg-mist px-5 pb-16 pt-12 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={crumbs} />
        <div className="max-w-3xl">
          {eyebrow && <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue">{eyebrow}</p>}
          <h1 className="text-4xl font-bold leading-[1.15] text-navy md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{description}</p>
          {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
