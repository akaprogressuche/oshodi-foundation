import { Reveal } from "../Reveal";
import { ParallaxImage } from "../ParallaxImage";
import { HighlightedText } from "../HighlightedText";
import { photos } from "../../data/photos";

export function AboutSection() {
  return (
    <section id="about" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: eyebrow + title */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                Who We Are
              </p>
            </Reveal>
            <HighlightedText
              as="h2"
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance"
            >
              When families are supported, communities thrive.
            </HighlightedText>
          </div>

          {/* Right: body */}
          <div className="lg:col-span-6 lg:pt-3 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <Reveal delay={0.15}>
              <p>
                Our work is grounded in the belief that when families are
                supported and individuals are equipped with opportunity, entire
                communities can thrive. Through compassionate service and
                forward-thinking initiatives, we address immediate needs while
                building long-term pathways for empowerment, stability, and
                generational impact.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                By combining direct community support with educational and
                leadership development programs, we create environments where
                families are nourished, individuals are empowered, and futures
                are redefined.
              </p>
            </Reveal>
          </div>
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
