"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { HighlightedText } from "../HighlightedText";
import { photos } from "../../data/photos";

const stats = [
  { value: 2023, label: "Founded", suffix: "" },
  { value: 20, label: "Scholarship Recipients", suffix: "+" },
  { value: 15, label: "Paid Internships", suffix: "+" },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative bg-inverted-bg text-inverted-fg overflow-hidden"
    >
      {/* Background image fade */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src={photos.impact}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: eyebrow + title */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-medium"
            >
              Our Impact
            </motion.p>
            <HighlightedText
              as="h2"
              startOpacity={0.2}
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance"
            >
              Measured in lives, not metrics.
            </HighlightedText>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 max-w-md text-lg text-white/60 leading-relaxed"
            >
              Through the John Oshodi Scholarship of Resilience and our
              broader programs, we&rsquo;ve built early momentum — and the
              work is just getting started.
            </motion.p>
          </div>

          {/* Right: stats */}
          <div className="lg:col-span-6">
            <dl className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-12 lg:gap-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="border-t border-white/20 pt-6 text-left"
                >
                  <dt className="text-sm uppercase tracking-widest text-white/60">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-accent">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
