import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Oshodi Family Foundation — partnerships, programs, volunteer opportunities, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-inverted-bg text-inverted-fg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            Contact
          </p>
          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] max-w-3xl">
            Let&rsquo;s get to <span className="text-accent">work together.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Whether you&rsquo;re here to collaborate, support our programs, or
            learn more about the foundation — we&rsquo;d welcome the opportunity
            to connect.
          </p>
        </div>
      </section>

      {/* Two-column: info + form */}
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: contact details */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                  Get in touch
                </h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:info@theoshodifoundation.org"
                      className="mt-2 block text-2xl md:text-3xl font-semibold tracking-tight hover:text-accent transition-colors break-words"
                    >
                      info@theoshodifoundation.org
                    </a>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+12147648258"
                      className="mt-2 block text-2xl md:text-3xl font-semibold tracking-tight hover:text-accent transition-colors"
                    >
                      +1 (214) 764-8258
                    </a>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">
                      Web
                    </p>
                    <p className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                      theoshodifoundation.org
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
                  Together, we can create communities where families are
                  supported, opportunities are accessible, and individuals have
                  the resources they need to build a better future.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
