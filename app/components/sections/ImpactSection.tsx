/**
 * Impact stats — pulled directly from the proposal PDF.
 * Big numerals on a high-contrast surface; the visual climax of the page.
 */
const stats = [
  { value: "2023", label: "Founded" },
  { value: "20", label: "Scholarship Recipients" },
  { value: "15", label: "Paid Internships" },
];

export function ImpactSection() {
  return (
    <section id="impact" className="bg-inverted-bg text-inverted-fg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
          Our Impact
        </p>
        <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
          Measured in lives, not metrics.
        </h2>

        <dl className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/20 pt-6">
              <dt className="text-sm uppercase tracking-widest text-white/50">
                {stat.label}
              </dt>
              <dd className="mt-4 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight tabular-nums text-accent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-16 max-w-2xl text-lg text-white/60 leading-relaxed">
          Through the John Oshodi Scholarship of Resilience and our broader
          programs, we&rsquo;ve built early momentum — and the work is just getting started.
        </p>
      </div>
    </section>
  );
}
