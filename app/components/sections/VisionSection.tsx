import { Reveal } from "../Reveal";
import { HighlightedText } from "../HighlightedText";

export function VisionSection() {
  return (
    <section id="vision" className="bg-accent text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: eyebrow */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-black font-bold">
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
