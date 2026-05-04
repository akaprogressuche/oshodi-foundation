"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

/**
 * Sticky donate CTA — pinned bottom-right, visible on every page.
 * Currently links to /get-involved (donation processor will replace href later).
 */
export function DonateButton() {
  const pathname = usePathname();
  // Hide on legal pages where it'd feel out of place
  if (pathname === "/privacy" || pathname === "/terms") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed bottom-5 right-5 z-30"
    >
      <Link
        href="/get-involved"
        className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-medium shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="group-hover:scale-110 transition-transform"
          aria-hidden
        >
          <path d="M12 21s-7-4.35-9.5-8.25C.5 9.5 2 5 6 5c2 0 3 1 4 2 1-1 2-2 4-2 4 0 5.5 4.5 3.5 7.75C19 16.65 12 21 12 21z" />
        </svg>
        <span>Donate</span>
      </Link>
    </motion.div>
  );
}
