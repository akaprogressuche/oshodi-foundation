"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  intensity?: number;
  priority?: boolean;
  sizes?: string;
};

/**
 * Image that shifts vertically as it scrolls through the viewport.
 * Wrap any photo with this for a subtle parallax effect.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  imageClassName = "object-cover",
  intensity = 12,
  priority = false,
  sizes = "100vw",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${intensity}%`, `${intensity}%`],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imageClassName}
        />
      </motion.div>
    </div>
  );
}
