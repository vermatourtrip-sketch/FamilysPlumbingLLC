import { PageHeader } from '@/components/PageHeader';
import { BUSINESS } from '@/data/business';
import { useSeo } from '@/lib/seo';

interface LegalSection {
  heading: string;
  body: string[];
}

function LegalPage({ title, description, path, sections }: { title: string; description: string; path: string; sections: LegalSection[] }) {
  useSeo({ title: `${title} | ${BUSINESS.name}`, description, path });

  return (
    <>
      <PageHeader title={title} description={description} crumbs={[{ label: 'Home', to: '/' }, { label: title }]} />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-navy">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-600">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Family's Plumbing LLC handles information on this website."
      path="/privacy-policy"
      sections={[
        {
          heading: 'Information on this website',
          body: [
            'This website does not include contact forms, quote requests, booking tools, or chat features. We do not ask visitors to submit personal information through the site.',
            'When you choose to call us, your phone carrier and our phone system handle the call the same way any ordinary phone call is handled.',
          ],
        },
        {
          heading: 'Third-party services',
          body: [
            'Pages may display a map from Google Maps and links to our listings on other websites. Those services are operated by their providers and follow their own privacy policies.',
          ],
        },
        {
          heading: 'Contact',
          body: [`For questions about this policy, call ${BUSINESS.phoneDisplay}.`],
        },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="Terms for using the Family's Plumbing LLC website."
      path="/terms-and-conditions"
      sections={[
        {
          heading: 'Website information',
          body: [
            'The information on this website describes the plumbing services Family\'s Plumbing LLC offers. It is provided for general information and may change without notice.',
          ],
        },
        {
          heading: 'Service availability and pricing',
          body: [
            'Service availability, service areas, and pricing are confirmed by phone for each job. Nothing on this website is a binding offer or quote.',
          ],
        },
        {
          heading: 'Links to other websites',
          body: [
            'This website links to third-party sites, including our Google Maps listing and reviews on Networx. We are not responsible for the content of those sites.',
          ],
        },
      ]}
    />
  );
}
