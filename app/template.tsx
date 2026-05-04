"use client";

import { motion } from "motion/react";

/**
 * App Router template.tsx — re-mounts on every navigation, so each page
 * gets its own enter animation. Wraps the page content in a fade-up.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
