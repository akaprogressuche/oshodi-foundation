import type { Metadata } from "next";
import { VolunteerForm } from "../components/VolunteerForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, donate, partner, or apply for a scholarship — every action strengthens the families and communities we serve.",
};

const ways = [
  {
    title: "Volunteer",
    body: "Lend your time and skills to programs like Helen's Food Pantry and STATS.",
  },
  {
    title: "Donate",
    body: "Every dollar goes directly to family support, scholarships, and community programs.",
  },
  {
    title: "Apply",
    body: "Eligible for the John Oshodi Scholarship of Resilience? We want to hear your story.",
  },
  {
    title: "Partner",
    body: "Local businesses, faith groups, and community orgs — let's build something together.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-inverted-bg text-inverted-fg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Get Involved
          </p>
          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl text-balance">
            Show up however you can. <span className="text-accent">It all matters.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Time, resources, partnership, voice — every contribution
            strengthens our ability to serve families today and invest in the
            leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Ways to help */}
      <section className="bg-background text-foreground border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ways.map((way, i) => (
              <div
                key={way.title}
                className="border-t-2 border-accent/30 pt-6"
              >
                <span className="text-xs text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {way.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {way.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-background text-foreground border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                Tell us about you
              </p>
              <h2 className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
                One short form. We&rsquo;ll take it from there.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Share what you&rsquo;d like to do and a little about yourself.
                A team member will follow up within a few business days.
              </p>
            </div>
            <div className="lg:col-span-7">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
