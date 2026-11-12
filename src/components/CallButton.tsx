import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

const VARIANTS = {
  primary: 'bg-blue text-white hover:bg-navy',
  accent: 'bg-aqua text-navy hover:bg-aqua/90',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-navy',
};

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface CallButtonProps {
  label?: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}

export function CallButton({ label = 'Call Now', variant = 'primary', size = 'md', className = '' }: CallButtonProps) {
  return (
    <a
      href={BUSINESS.phoneTel}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
