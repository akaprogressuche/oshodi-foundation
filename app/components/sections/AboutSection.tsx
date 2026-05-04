import { Reveal } from "../Reveal";
import { ParallaxImage } from "../ParallaxImage";
import { HighlightedText } from "../HighlightedText";
import { photos } from "../../data/photos";

export function AboutSection() {
  return (
    <section id="about" className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            Who We Are
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            When families are supported, communities thrive.
          </h2>
        </Reveal>

        <div className="mt-12 mx-auto max-w-2xl space-y-8 text-lg md:text-xl leading-relaxed text-foreground">
          <HighlightedText as="p">
            Our work is grounded in the belief that when families are supported and individuals are equipped with opportunity, entire communities can thrive. Through compassionate service and forward-thinking initiatives, we address immediate needs while building long-term pathways for empowerment, stability, and generational impact.
          </HighlightedText>
          <HighlightedText as="p">
            By combining direct community support with educational and leadership development programs, we create environments where families are nourished, individuals are empowered, and futures are redefined.
          </HighlightedText>
        </div>
      </div>

      <Reveal>
        <ParallaxImage
          src={photos.about}
          alt="Diverse hands stacked together — a symbol of unity and shared purpose"
          className="aspect-[16/9] md:aspect-[21/9] w-full"
          sizes="100vw"
        />
      </Reveal>
    </section>
  );
}
