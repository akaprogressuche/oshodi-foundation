import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Oshodi Family Foundation collects, uses, and safeguards your personal information.",
};

const lastUpdated = "May 4, 2026";

export default function PrivacyPage() {
  return (
    <article className="bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          Legal
        </p>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="prose-content mt-12 space-y-8 text-base leading-relaxed text-muted-foreground">
          <Section title="Who we are">
            <p>
              The Oshodi Family Foundation (&ldquo;we&rdquo;, &ldquo;our&rdquo;) is a
              community-centered nonprofit. This policy explains what personal
              information we collect through{" "}
              <a href="https://www.theoshodifoundation.org" className="text-accent hover:underline">
                theoshodifoundation.org
              </a>{" "}
              and how we use it.
            </p>
          </Section>

          <Section title="What we collect">
            <p>We only collect information you give us directly:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Name and email address (contact form, volunteer form)</li>
              <li>Phone number (volunteer form, optional)</li>
              <li>Organization name (contact form, optional)</li>
              <li>The message you write us</li>
            </ul>
            <p className="mt-3">
              We do not use third-party trackers or advertising cookies on
              this site.
            </p>
          </Section>

          <Section title="How we use it">
            <p>We use your information only to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Respond to your inquiry or volunteer interest</li>
              <li>Send program updates if you opt in</li>
              <li>Maintain records of supporters and partnerships</li>
            </ul>
          </Section>

          <Section title="Who we share it with">
            <p>
              We do not sell or rent your information. We share it only with
              service providers who help us operate the site, under
              confidentiality agreements:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>
                <strong>Resend</strong> — email delivery for forms (
                <a href="https://resend.com/legal/privacy-policy" className="text-accent hover:underline">
                  privacy policy
                </a>
                )
              </li>
              <li>
                <strong>Vercel</strong> — site hosting (
                <a href="https://vercel.com/legal/privacy-policy" className="text-accent hover:underline">
                  privacy policy
                </a>
                )
              </li>
            </ul>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep contact and volunteer submissions for as long as
              they&rsquo;re relevant to our work — typically 24 months — unless
              you ask us to delete them sooner.
            </p>
          </Section>

          <Section title="Your rights">
            <p>You can ask us to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Show you what we have on file about you</li>
              <li>Correct anything that&rsquo;s wrong</li>
              <li>Delete your information entirely</li>
            </ul>
            <p className="mt-3">
              Email{" "}
              <a href="mailto:info@theoshodifoundation.org" className="text-accent hover:underline">
                info@theoshodifoundation.org
              </a>{" "}
              and we&rsquo;ll respond within a reasonable timeframe.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy as our practices change or laws
              require. The &ldquo;last updated&rdquo; date at the top will
              always reflect the most recent version.
            </p>
          </Section>

          <Section title="Contact">
            <p>Questions about privacy? Reach out:</p>
            <p className="mt-3">
              <strong className="text-foreground">Oshodi Family Foundation</strong>
              <br />
              <a href="mailto:info@theoshodifoundation.org" className="text-accent hover:underline">
                info@theoshodifoundation.org
              </a>
              <br />
              +1 (214) 764-8258
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
