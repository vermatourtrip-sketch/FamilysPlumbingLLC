import { Droplets, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from '@/components/layout/BrandLogo';
import { AREAS } from '@/data/areas';
import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { mainLocationPath } from '@/lib/paths';
import { Link } from '@/lib/router';

const FOOTER_LINK = 'text-sm text-white/80 transition-colors duration-200 hover:text-aqua';
const HEADING = 'mb-4 text-xs font-bold uppercase tracking-widest text-aqua';

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-5">
          <BrandLogo />
          <p className="text-sm leading-6 text-white/80">
            A locally owned and operated plumbing company serving Colonial Heights and the surrounding Tri-Cities and Greater Richmond communities.
          </p>
          <a href={BUSINESS.phoneTel} className="inline-flex items-center gap-2 text-lg font-bold text-white transition hover:text-aqua">
            <Phone className="h-5 w-5 text-aqua" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${FOOTER_LINK} inline-flex items-center gap-2`}>
            <MapPin className="h-4 w-4 text-aqua" aria-hidden="true" />
            View our Google Maps listing
          </a>
        </div>

        <div>
          <h2 className={HEADING}>Plumbing Services</h2>
          <ul className="flex flex-col gap-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={mainLocationPath(service.slug)} className={FOOTER_LINK}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={HEADING}>Service Areas</h2>
          <ul className="flex flex-col gap-3">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/service-areas#${area.slug}`} className={FOOTER_LINK}>
                  {area.name}, VA{area.isMain ? ' (main service area)' : ''}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={HEADING}>Company</h2>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className={FOOTER_LINK}>Home</Link></li>
            <li><Link to="/about" className={FOOTER_LINK}>About Us</Link></li>
            <li><Link to="/services" className={FOOTER_LINK}>Plumbing Services</Link></li>
            <li><Link to="/service-areas" className={FOOTER_LINK}>Service Areas</Link></li>
            <li><Link to="/contact" className={FOOTER_LINK}>Contact</Link></li>
            <li><Link to="/privacy-policy" className={FOOTER_LINK}>Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className={FOOTER_LINK}>Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <Droplets className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
            Serving Colonial Heights, VA and nearby communities
          </p>
        </div>
      </div>
    </footer>
  );
}
