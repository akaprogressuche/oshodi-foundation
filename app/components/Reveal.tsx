"use client";

import { motion, type Transition } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

const offsetFor = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { y: 40, x: 0 };
    case "down":
      return { y: -40, x: 0 };
    case "left":
      return { y: 0, x: 40 };
    case "right":
      return { y: 0, x: -40 };
    default:
      return { y: 0, x: 0 };
  }
};

/**
 * Fades + slides children into view as they enter the viewport.
 * Plays once per page load. Cheap to use — wrap any block of content.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  amount = 0.2,
  className,
  as = "div",
}: Props) {
  const { x, y } = offsetFor(direction);
  const transition: Transition = {
    duration,
    delay,
    ease: [0.16, 1, 0.3, 1],
  };
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}
