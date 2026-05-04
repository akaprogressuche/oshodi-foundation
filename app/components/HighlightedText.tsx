"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: string;
  className?: string;
  /** How dim the text starts — 0.15 to 0.3 looks Apple-like */
  startOpacity?: number;
  /** Element to render. Use "p" for paragraphs, "h2" for headings, etc. */
  as?: "p" | "h1" | "h2" | "h3" | "div" | "span";
};

/**
 * Apple-style scroll-driven text highlight.
 * As the block scrolls into view, words light up word-by-word from a dim
 * starting opacity to fully opaque. Improves readability and pulls the eye
 * through the copy.
 *
 * Usage:
 *   <HighlightedText as="p" className="...">
 *     Long paragraph that should glow word-by-word as the user scrolls.
 *   </HighlightedText>
 */
export function HighlightedText({
  children,
  className = "",
  startOpacity = 0.18,
  as = "p",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = children.split(" ");
  const Tag = motion[as];

  // motion's useScroll needs the target to have non-static position so it can
  // measure scroll offsets correctly. `relative` is enough.
  const finalClassName = className.includes("relative")
    ? className
    : `relative ${className}`;

  return (
    <Tag ref={ref as never} className={finalClassName}>
      {words.map((word, i) => {
        const wordStart = i / words.length;
        const wordEnd = wordStart + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[wordStart, wordEnd]}
            startOpacity={startOpacity}
            isLast={i === words.length - 1}
          >
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
  startOpacity,
  isLast,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  startOpacity: number;
  isLast: boolean;
}) {
  const opacity = useTransform(progress, range, [startOpacity, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>
      {!isLast && " "}
    </>
  );
}
