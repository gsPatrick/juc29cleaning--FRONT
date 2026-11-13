"use client";

import { useEffect } from "react";

const OFFSET = 96; // clears the fixed header
const MIN_MS = 900;
const MAX_MS = 2200;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Slow, eased scrolling for in-page links (header, footer, buttons).
 * The browser's native smooth scroll is fast and not adjustable, so the
 * animation is done here. The target is re-measured every frame because
 * sections above it (e.g. the Reviews runway) can change height while scrolling.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const root = document.documentElement;

    const stop = () => {
      cancelAnimationFrame(raf);
      root.style.scrollBehavior = "";
    };

    const targetY = (el) => {
      const max = root.scrollHeight - window.innerHeight;
      return Math.min(Math.max(el.getBoundingClientRect().top + window.scrollY - OFFSET, 0), max);
    };

    const scrollToEl = (el) => {
      stop();
      const startY = window.scrollY;
      const distance = Math.abs(targetY(el) - startY);
      const duration = Math.min(MAX_MS, Math.max(MIN_MS, 600 + distance * 0.45));
      const t0 = performance.now();
      root.style.scrollBehavior = "auto";

      const step = (now) => {
        const t = Math.min((now - t0) / duration, 1);
        const y = startY + (targetY(el) - startY) * easeInOutCubic(t);
        window.scrollTo(0, y);
        if (t < 1) raf = requestAnimationFrame(step);
        else stop();
      };
      raf = requestAnimationFrame(step);
    };

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
      if (!url.hash && !(a.getAttribute("href") === "/" && window.location.pathname === "/")) return;

      const el = url.hash ? document.getElementById(url.hash.slice(1)) : null;
      if (url.hash && !el) return;
      e.preventDefault();
      if (el) {
        history.pushState(null, "", url.hash);
        scrollToEl(el);
      } else {
        // "Home" / logo: back to the top
        const fake = { getBoundingClientRect: () => ({ top: -window.scrollY + OFFSET }) };
        history.pushState(null, "", "/");
        scrollToEl(fake);
      }
    };

    // The user grabbing the page cancels the animation
    const cancel = () => stop();
    document.addEventListener("click", onClick);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });

    return () => {
      stop();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, []);

  return null;
}
