import { SectionLabel } from "../SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-3 lg:border-r lg:border-accent/40 lg:pr-8">
            <SectionLabel eyebrow="Who We Are" />
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Who We Are
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
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
                leadership development programs, the foundation seeks to create
                environments where families are nourished, individuals are
                empowered, and futures are redefined.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
