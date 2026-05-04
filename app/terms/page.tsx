import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of the Oshodi Family Foundation website.",
};

const lastUpdated = "May 4, 2026";

export default function TermsPage() {
  return (
    <article className="bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          Legal
        </p>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-muted-foreground">
          <Section title="Acceptance">
            <p>
              By using{" "}
              <a href="https://www.theoshodifoundation.org" className="text-accent hover:underline">
                theoshodifoundation.org
              </a>
              , you agree to these terms. If you don&rsquo;t agree,
              please don&rsquo;t use the site.
            </p>
          </Section>

          <Section title="Use of the site">
            <p>You may use this site to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Learn about the foundation&rsquo;s mission and programs</li>
              <li>Get in touch about volunteering, donating, or partnering</li>
              <li>Apply for our scholarship and other programs</li>
            </ul>
            <p className="mt-3">You agree not to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Misuse, scrape, or attempt to disrupt the site</li>
              <li>Submit false information through our forms</li>
              <li>Reproduce content for commercial use without permission</li>
            </ul>
          </Section>

          <Section title="Content ownership">
            <p>
              All text, images, logos, and design on this site are owned by
              The Oshodi Family Foundation or used with permission. You may
              not republish material without written consent.
            </p>
          </Section>

          <Section title="No professional advice">
            <p>
              Information on this site is for general awareness only and
              isn&rsquo;t legal, financial, or professional advice. Always
              consult a qualified professional for specific situations.
            </p>
          </Section>

          <Section title="Donations">
            <p>
              Donations made through the foundation are processed by
              third-party providers under their own terms. We will publish
              specific donation terms when our processor is in place.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              The site is provided &ldquo;as is.&rdquo; We do our best to
              keep it accurate and available, but we&rsquo;re not liable for
              indirect or consequential losses arising from your use of it.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              We may update these terms when our practices or applicable law
              changes. The &ldquo;last updated&rdquo; date at the top reflects
              the current version.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These terms are governed by the laws of the State of Texas,
              United States, without regard to conflict-of-law principles.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms?{" "}
              <a href="mailto:info@theoshodifoundation.org" className="text-accent hover:underline">
                info@theoshodifoundation.org
              </a>
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
