"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

/**
 * Minimal success modal with a small branded confetti burst.
 * - Backdrop fade + card scale-up entrance
 * - Click outside or press Escape to dismiss
 * - Confetti uses brand colors (red / black / white) with conservative
 *   particle count so it stays celebratory but not loud
 */
export function SuccessModal({ open, onClose, title, message }: Props) {
  // Confetti burst when the modal opens
  useEffect(() => {
    if (!open) return;

    const fire = () => {
      confetti({
        particleCount: 60,
        spread: 70,
        startVelocity: 30,
        origin: { y: 0.45, x: 0.5 },
        colors: ["#e11d48", "#ffffff", "#0a0a0a", "#9ca3af"],
        ticks: 90,
        scalar: 0.9,
        gravity: 0.85,
        disableForReducedMotion: true,
      });
    };
    // small delay so the modal animates in before particles arrive
    const t = setTimeout(fire, 120);
    return () => clearTimeout(t);
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          aria-describedby="success-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-background text-foreground rounded-2xl p-8 md:p-10 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Checkmark */}
            <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e11d48"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2
              id="success-title"
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              {title}
            </h2>
            <p
              id="success-message"
              className="mt-3 text-base leading-relaxed text-muted-foreground"
            >
              {message}
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
