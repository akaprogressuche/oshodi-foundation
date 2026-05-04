import { Reveal } from "../Reveal";
import { HighlightedText } from "../HighlightedText";

export function VisionSection() {
  return (
    <section id="vision" className="bg-accent text-foreground relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-black blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: eyebrow */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-black/70 font-medium">
                Our Vision
              </p>
            </Reveal>
          </div>

          {/* Right: big vision statement with scroll highlight */}
          <div className="lg:col-span-9">
            <HighlightedText
              as="h2"
              startOpacity={0.25}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] text-balance"
            >
              We envision communities where families are nourished, opportunities are accessible, and individuals are empowered to define their futures beyond statistics and circumstances.
            </HighlightedText>
          </div>
        </div>
      </div>
    </section>
  );
}
