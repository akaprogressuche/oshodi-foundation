import { SectionLabel } from "../SectionLabel";
import { initiatives } from "../../data/initiatives";

export function InitiativesSection() {
  return (
    <section id="initiatives" className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-3 lg:border-r lg:border-accent/40 lg:pr-8">
            <SectionLabel eyebrow="Our Initiatives" />
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Programs that meet families where they are.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Four initiatives, one shared belief — that compassionate support
              today builds stronger futures tomorrow.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {initiatives.map((initiative, idx) => (
                <article
                  key={initiative.slug}
                  className="group relative border-t-2 border-accent/30 pt-6 hover:border-accent transition-colors"
                >
                  <span className="absolute right-0 top-6 text-xs text-muted-foreground tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                    {initiative.name}
                  </h3>
                  <p className="mt-2 text-sm text-accent font-medium uppercase tracking-wider">
                    {initiative.tagline}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {initiative.description}
                  </p>
                  {initiative.pillars && (
                    <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                      {initiative.pillars.map((pillar, i) => (
                        <li key={pillar} className="flex items-baseline gap-2">
                          <span className="text-accent font-bold tabular-nums">0{i + 1}</span>
                          <span className="text-foreground">{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
