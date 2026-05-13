"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/**
 * Mounts a global Lenis smooth-scroll instance and routes anchor-link clicks
 * (`<a href="#section">`) through `lenis.scrollTo` so they animate properly.
 * Also resets scroll to top on every route change so nav clicks always land
 * at the top of the destination page.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    lenisInstance = new Lenis({
      lerp: 0.1,
      duration: 1.2,
    });

    let rafId = 0;
    function raf(time: number) {
      lenisInstance?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      event.preventDefault();
      lenisInstance?.scrollTo(el as HTMLElement, { offset: -64 });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  // Reset scroll to top on route change. Skip when the URL has a hash
  // (anchor link to an in-page section).
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
