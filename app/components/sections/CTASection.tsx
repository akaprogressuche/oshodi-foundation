import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
          Partner with us
        </p>
        <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl mx-auto">
          Let&rsquo;s get to work, together.
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
          Every partnership strengthens our ability to serve families today
          while investing in the leaders of tomorrow. Whether you&rsquo;re here
          to collaborate, support a program, or learn more — we&rsquo;d welcome
          the conversation.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Contact the Foundation
          </Link>
          <a
            href="mailto:info@theoshodifoundation.org"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
          >
            info@theoshodifoundation.org
          </a>
        </div>
      </div>
    </section>
  );
}
