import { ChevronRight } from 'lucide-react';
import { Link } from '@/lib/router';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-600">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
            {item.to ? (
              <Link to={item.to} className="font-medium text-blue transition-colors hover:text-navy">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
