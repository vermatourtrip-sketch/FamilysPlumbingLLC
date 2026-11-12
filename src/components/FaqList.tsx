import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/data/services';

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-navy/10 rounded-2xl ring-1 ring-navy/10">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy">
            {item.question}
            <ChevronDown className="h-5 w-5 shrink-0 text-blue transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="pt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
