"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { photos } from "../../data/photos";
import { Typewriter } from "../Typewriter";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-inverted-bg text-inverted-fg"
    >
      {/* Background photo with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
        <Image
          src={photos.hero}
          alt="A multi-generational community gathered around a shared table"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      {/* Centered content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-28 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.4em] text-accent font-semibold"
        >
          The Oshodi Family Foundation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          We are{" "}
          <span className="text-accent">
            <Typewriter
              phrases={[
                "empowering families.",
                "nourishing communities.",
                "building futures.",
              ]}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-white/80"
        >
          A community-centered nonprofit committed to strengthening families,
          addressing food insecurity, and expanding access to education and
          leadership opportunities in underserved communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Get Involved
          </Link>
          <Link
            href="#initiatives"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/60 text-xs uppercase tracking-widest">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
