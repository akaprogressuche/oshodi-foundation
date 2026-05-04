import { Reveal } from "../Reveal";

export function VisionSection() {
  return (
    <section id="vision" className="bg-accent text-foreground relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-black blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-40 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60 font-medium">
            Our Vision
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance">
            We envision communities where families are nourished, opportunities
            are accessible, and individuals are empowered to define their
            futures{" "}
            <span className="italic">beyond statistics and circumstances.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
