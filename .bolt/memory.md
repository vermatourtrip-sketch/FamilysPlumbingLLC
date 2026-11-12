# Project memory

## Product intent & audience

- Website for Family's Plumbing LLC, a local plumbing business in Colonial Heights and Greater Richmond, VA.
- Target audience: local homeowners seeking plumbing services.
- Call-only conversion strategy — drive phone calls; no forms or booking widgets.
- Local SEO strategy with structured service pages, service-area pages, and sitemap.

## Brand personality & voice

- "Family" business positioning — trustworthy, approachable, local, dependable.
- Tone is professional but friendly and community-rooted.

## Visual design & UX direction

- Modern, mobile-responsive, production-quality (not cookie-cutter).
- Tailwind CSS + Lucide React icons; React hooks; Vite + React (JSX).
- Path alias `@/` → `src/`.
- Homepage is content-rich: "Find Your Problem" problem-to-service navigation, homeowner tips, and 8 FAQs.
- Google Maps integration for service area visualization.
- Favicon set generated: ICO, 32px PNG, 192px PNG, Apple touch icon.
- Data-driven architecture: services and areas stored in separate data files, linked by associations.

## Decisions, constraints & rationale

- 10 structured service pages; 5 service-area pages (Colonial Heights as main hub, plus Petersburg, Richmond, Chesterfield, Chester).
- Only verified service areas included — sources limited to Networx and Angi listings; official website and Google Maps could not be fully verified.
- Unverified areas (Midlothian, Hopewell, Henrico) deliberately excluded until business confirms coverage.
- No forms or booking widgets — conversion is phone-call-only.
- Sitemap updated when new pages or URLs are added.
- Build and typecheck both passing.

## Open questions & assumptions

- Does Family's Plumbing LLC serve Midlothian, Hopewell, Henrico, and other Greater Richmond areas? User requested 10 service areas but only 5 could be verified; remaining 5 pending business confirmation.
- Official business website and Google Business profile not fully verified — contact details and service-area boundaries may need owner confirmation.
- User communicates in Hinglish (Hindi + English); respond in the user's language.