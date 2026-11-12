import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { BrandLogo } from '@/components/layout/BrandLogo';
import { CallButton } from '@/components/CallButton';
import { AREAS } from '@/data/areas';
import { SERVICES } from '@/data/services';
import { mainLocationPath } from '@/lib/paths';
import { Link, useCurrentPath } from '@/lib/router';

const NAV_LINK = 'rounded-lg px-3 py-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-blue';
const MENU_LINK = 'block rounded-lg px-3 py-2.5 text-sm text-navy transition-colors duration-200 hover:bg-navy/5 hover:text-blue';

function DesktopDropdown({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="group relative">
      <button type="button" className={`${NAV_LINK} inline-flex items-center gap-1`}>
        {label}
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="max-h-[70vh] overflow-y-auto rounded-2xl bg-white p-2 shadow-xl ring-1 ring-navy/10">{children}</div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useCurrentPath();
  const closeMenu = () => setMenuOpen(false);
  const isActive = (to: string) => (path === to ? 'page' : undefined);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <BrandLogo tone="dark" />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Link to="/" className={NAV_LINK} aria-current={isActive('/')}>Home</Link>
          <Link to="/about" className={NAV_LINK} aria-current={isActive('/about')}>About Us</Link>
          <DesktopDropdown label="Plumbing Services">
            {SERVICES.map((service) => (
              <Link key={service.slug} to={mainLocationPath(service.slug)} className={MENU_LINK}>
                {service.name}
              </Link>
            ))}
            <Link to="/services" className={`${MENU_LINK} font-semibold`}>All plumbing services</Link>
          </DesktopDropdown>
          <DesktopDropdown label="Service Areas">
            {AREAS.map((area) => (
              <Link key={area.slug} to={`/service-areas#${area.slug}`} className={MENU_LINK}>
                {area.name}, VA
              </Link>
            ))}
            <Link to="/service-areas" className={`${MENU_LINK} font-semibold`}>All service areas</Link>
          </DesktopDropdown>
          <Link to="/contact" className={NAV_LINK} aria-current={isActive('/contact')}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <CallButton label="Call Now" className="hidden lg:inline-flex" />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy ring-1 ring-navy/15 transition hover:bg-navy/5 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[80vh] overflow-y-auto border-t border-navy/10 bg-white px-5 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/" className={MENU_LINK} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={MENU_LINK} onClick={closeMenu}>About Us</Link>
            <p className="px-3 pt-4 text-xs font-bold uppercase tracking-widest text-blue">Plumbing Services</p>
            {SERVICES.map((service) => (
              <Link key={service.slug} to={mainLocationPath(service.slug)} className={MENU_LINK} onClick={closeMenu}>
                {service.name}
              </Link>
            ))}
            <p className="px-3 pt-4 text-xs font-bold uppercase tracking-widest text-blue">Service Areas</p>
            {AREAS.map((area) => (
              <Link key={area.slug} to={`/service-areas#${area.slug}`} className={MENU_LINK} onClick={closeMenu}>
                {area.name}, VA
              </Link>
            ))}
            <Link to="/contact" className={`${MENU_LINK} mt-2`} onClick={closeMenu}>Contact</Link>
            <CallButton label="Call Now" size="lg" className="mt-4 w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
