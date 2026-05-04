import { Reveal } from "../Reveal";
import { HighlightedText } from "../HighlightedText";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="bg-background text-foreground border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            Our Mission
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            Strengthen families today while investing in the leaders and
            innovators of tomorrow.
          </h2>
        </Reveal>

        <HighlightedText
          as="p"
          className="mt-12 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-foreground"
        >
          We serve with compassion, uplift with intention, and build pathways that foster sustainability, leadership, and generational impact. Through meaningful partnerships and community-driven initiatives, we strengthen families today while investing in the leaders and innovators of tomorrow.
        </HighlightedText>
      </div>
    </section>
  );
}
