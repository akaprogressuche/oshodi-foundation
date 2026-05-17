import Image from "next/image";
import { Reveal } from "../Reveal";
import { initiatives } from "../../data/initiatives";

export function InitiativesSection() {
  return (
    <section
      id="initiatives"
      className="bg-background text-foreground border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Our Initiatives
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              Programs that meet families where they are.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
              Four initiatives, one shared belief — that compassionate support
              today builds stronger futures tomorrow.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {initiatives.map((initiative, idx) => (
            <Reveal
              key={initiative.slug}
              delay={idx * 0.1}
              direction="up"
              as="article"
              className="group lift-card will-change-transform relative bg-background rounded-lg overflow-hidden border border-border hover:border-accent/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-5 right-5 text-xs text-white/80 tabular-nums bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  0{idx + 1}
                </span>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-widest text-accent font-medium">
                  {initiative.tagline}
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                  {initiative.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {initiative.description}
                </p>
                {initiative.pillars && (
                  <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                    {initiative.pillars.map((pillar, i) => (
                      <li
                        key={pillar}
                        className="flex items-baseline gap-2"
                      >
                        <span className="text-accent font-bold tabular-nums">
                          0{i + 1}
                        </span>
                        <span className="text-foreground">{pillar}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
