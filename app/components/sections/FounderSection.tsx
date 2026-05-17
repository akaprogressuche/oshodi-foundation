import Image from "next/image";
import { Reveal } from "../Reveal";
import { HighlightedText } from "../HighlightedText";
import { photos } from "../../data/photos";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="bg-background text-foreground border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: photo */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 rounded-full border-2 border-accent" />
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <Image
                      src={photos.founder}
                      alt="John Oshodi, Founder of Relevant Technologies"
                      fill
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="mt-6 text-sm">
                  <p className="font-semibold tracking-tight">JOHN OSHODI</p>
                  <p className="mt-1 uppercase tracking-widest text-muted-foreground text-xs">
                    Founder, Relevant Technologies
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                The Story Behind the Work
              </p>
            </Reveal>

            <HighlightedText
              as="h2"
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance"
            >
              A path built through resilience.
            </HighlightedText>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <Reveal delay={0.15}>
                <p>
                  John Oshodi is a technology executive and entrepreneur with
                  over 30 years of experience in business strategy, data
                  systems, and industrial technology. As founder of{" "}
                  <span className="text-foreground font-medium">
                    Relevant Technologies
                  </span>
                  , he has led the delivery of innovative solutions across
                  manufacturing, aerospace, healthcare, and defense — serving
                  clients globally.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Originally migrating to the United States in the early
                  1980s — thousands of miles from family, without an
                  established network — John built his path through
                  resilience, discipline, and a commitment to growth.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p>
                  A father of nine, he has always prioritized formal education
                  and entrepreneurship in equal measure, instilling these
                  values within his family and the communities he serves.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <HighlightedText
                as="p"
                startOpacity={0.2}
                className="text-xl md:text-2xl font-medium tracking-tight text-foreground italic leading-snug text-balance"
              >
                {"“In honor of his impact, the John Oshodi Scholarship of Resilience supports individuals overcoming adversity in pursuit of education and personal growth.”"}
              </HighlightedText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
