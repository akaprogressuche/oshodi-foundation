"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

/**
 * Cycles through a list of phrases with a typewriter effect — types each one,
 * holds, then deletes, then moves to the next. Loops forever.
 */
export function Typewriter({
  phrases,
  className = "",
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
}: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    return () => clearTimeout(timeout!);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      <span aria-live="polite" aria-atomic="true">
        {text}
      </span>
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[0.06em] -mb-[0.05em] ml-[0.08em] align-baseline bg-current"
        style={{ height: "0.85em" }}
      />
    </span>
  );
}
