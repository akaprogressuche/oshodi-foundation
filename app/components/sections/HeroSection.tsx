import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-inverted-bg text-inverted-fg overflow-hidden">
      {/* Decorative red accent bar — matches the proposal's red vertical rule */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 md:pt-32 md:pb-40">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
          The Oshodi Family Foundation
        </p>
        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] max-w-4xl">
          Empowering Families.<br />
          Nourishing Communities.<br />
          <span className="text-accent">Building Futures.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-white/70">
          A community-centered nonprofit committed to strengthening families,
          addressing food insecurity, and expanding access to education and
          leadership opportunities in underserved communities.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Get Involved
          </Link>
          <Link
            href="#initiatives"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
