import type { ReactNode } from 'react';
import { MobileCallBar } from '@/components/MobileCallBar';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-navy antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1 pb-28 md:pb-0">
        {children}
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
