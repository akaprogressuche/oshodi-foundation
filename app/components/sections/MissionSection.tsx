import { SectionLabel } from "../SectionLabel";

export function MissionSection() {
  return (
    <section id="mission" className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-3 lg:border-r lg:border-accent/40 lg:pr-8">
            <SectionLabel eyebrow="Our Mission" />
          </div>

          <div className="lg:col-span-9 max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Strengthen families today while investing in the leaders and
              innovators of tomorrow.
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our mission is to serve with compassion, uplift with intention,
              and build pathways that foster sustainability, leadership, and
              generational impact. Through meaningful partnerships and
              community-driven initiatives, we strengthen families today while
              investing in the leaders and innovators of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
