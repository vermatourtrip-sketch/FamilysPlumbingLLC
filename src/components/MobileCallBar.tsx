import { CallButton } from '@/components/CallButton';
import { BUSINESS } from '@/data/business';

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <CallButton label={`Call Now: ${BUSINESS.phoneDisplay}`} size="lg" className="w-full" />
    </div>
  );
}
