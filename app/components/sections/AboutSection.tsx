import { Reveal } from "../Reveal";
import { ParallaxImage } from "../ParallaxImage";

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
        <Reveal delay={0.2}>
          <div className="mt-10 mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Our work is grounded in the belief that when families are
              supported and individuals are equipped with opportunity, entire
              communities can thrive. Through compassionate service and
              forward-thinking initiatives, we address immediate needs while
              building long-term pathways for empowerment, stability, and
              generational impact.
            </p>
            <p>
              By combining direct community support with educational and
              leadership development programs, we create environments where
              families are nourished, individuals are empowered, and futures
              are redefined.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <ParallaxImage
          src="/images/oshodi/about.jpg"
          alt="Hands joining together over shared resources — symbolizing community"
          className="aspect-[16/9] md:aspect-[21/9] w-full"
          sizes="100vw"
        />
      </Reveal>
    </section>
  );
}
