import { Droplets } from 'lucide-react';
import { Link } from '@/lib/router';

export function BrandLogo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const textClass = tone === 'light' ? 'text-white' : 'text-navy';
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Family's Plumbing LLC home">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue text-white shadow-sm">
        <Droplets className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className={`flex flex-col leading-tight ${textClass}`}>
        <span className="text-base font-bold">Family&apos;s Plumbing</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua">LLC &middot; Colonial Heights, VA</span>
      </span>
    </Link>
  );
}
