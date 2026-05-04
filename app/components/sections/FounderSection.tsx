import Image from "next/image";
import { Reveal } from "../Reveal";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="bg-background text-foreground border-t border-border"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            The Story Behind the Work
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 mx-auto relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 rounded-full border-2 border-accent" />
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <Image
                src="/images/oshodi/founder.png"
                alt="John Oshodi, Founder of Relevant Technologies"
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="mt-10 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
            A path built through resilience.
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground text-left md:text-center">
            <p>
              John Oshodi is a technology executive and entrepreneur with over
              30 years of experience in business strategy, data systems, and
              industrial technology. As founder of{" "}
              <span className="text-foreground font-medium">
                Relevant Technologies
              </span>
              , he has led the delivery of innovative solutions across
              manufacturing, aerospace, healthcare, and defense — serving
              clients globally.
            </p>
            <p>
              Originally migrating to the United States in the early 1980s —
              thousands of miles from family, without an established network —
              John built his path through resilience, discipline, and a
              commitment to growth.
            </p>
            <p>
              A father of nine, he has always prioritized formal education and
              entrepreneurship in equal measure, instilling these values within
              his family and the communities he serves.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 mx-auto max-w-2xl border-t border-border pt-10">
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-foreground italic leading-snug text-balance">
              &ldquo;In honor of his impact, the John Oshodi Scholarship of
              Resilience supports individuals overcoming adversity in pursuit
              of education and personal growth.&rdquo;
            </p>
            <div className="mt-6 text-sm">
              <p className="font-semibold tracking-tight">JOHN OSHODI</p>
              <p className="mt-1 uppercase tracking-widest text-muted-foreground text-xs">
                Founder, Relevant Technologies
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
