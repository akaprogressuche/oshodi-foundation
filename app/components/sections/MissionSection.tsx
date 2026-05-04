import { Reveal } from "../Reveal";
import { HighlightedText } from "../HighlightedText";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="bg-background text-foreground border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: eyebrow + title with scroll highlight */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                Our Mission
              </p>
            </Reveal>
            <HighlightedText
              as="h2"
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance"
            >
              Strengthen families today while investing in the leaders and innovators of tomorrow.
            </HighlightedText>
          </div>

          {/* Right: body */}
          <div className="lg:col-span-5 lg:pt-3">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We serve with compassion, uplift with intention, and build
                pathways that foster sustainability, leadership, and
                generational impact. Through meaningful partnerships and
                community-driven initiatives, we strengthen families today
                while investing in the leaders and innovators of tomorrow.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
