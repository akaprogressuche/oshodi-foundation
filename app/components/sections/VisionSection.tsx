/**
 * Vision section — full-width red panel with bold serif-feeling display type.
 * Mirrors the proposal PDF's vision spread (red background, black type).
 */
export function VisionSection() {
  return (
    <section id="vision" className="bg-accent text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-3 lg:border-r lg:border-black/30 lg:pr-8">
            <p className="font-bold tracking-tight text-sm leading-tight">
              OSHODI<br />
              FAMILY<br />
              FOUNDATION
            </p>
            <p className="mt-12 text-xs uppercase tracking-widest text-black/60">
              Our Vision
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              We envision communities where families are nourished,
              opportunities are accessible, and individuals are empowered to
              define their futures beyond statistics and circumstances.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
