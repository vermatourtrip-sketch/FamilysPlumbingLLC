import { CallButton } from '@/components/CallButton';
import { BUSINESS } from '@/data/business';

export function CtaBanner({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-navy px-5 py-20 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/85">{body}</p>
        <CallButton variant="accent" size="lg" label={`Call Now: ${BUSINESS.phoneDisplay}`} />
      </div>
    </section>
  );
}
