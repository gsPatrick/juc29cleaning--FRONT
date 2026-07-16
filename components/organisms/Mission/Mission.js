"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Mission.module.css";

const STATEMENTS = [
  "Cleanliness is more than a service — it is the foundation of mental clarity, comfort, and absolute well-being.",
  "We combine meticulous, hand-crafted attention to detail with eco-safe products, delivering a standard of care that transforms your space.",
  "Whether residential or commercial, JUC29 is dedicated to crafting a seamless, reliable, and premium experience from start to finish."
];

export default function Mission() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      setProgress(scrollable > 0 ? scrolled / scrollable : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const count = STATEMENTS.length;
  const scaled = progress * count;
  const active = Math.min(count - 1, Math.floor(scaled));
  const local = scaled - active; // 0..1 within the active statement

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        {/* Label Header */}
        <div className={`container ${styles.head}`}>
          <span className={styles.label}>✦ Our Mission</span>
        </div>

        {/* Scroll Progress Indicator Line */}
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        {/* Content Layout */}
        <div className={`container ${styles.content}`}>
          {/* Active Statement — left column */}
          <div className={styles.main}>
            {STATEMENTS.map((statement, si) => {
              const isActive = si === active;
              const chars = statement.split("");
              const revealCount = isActive
                ? local * chars.length
                : si < active
                ? chars.length
                : 0;

              return (
                <p
                  key={si}
                  className={styles.statement}
                  style={{ opacity: isActive ? 1 : 0 }}
                  aria-hidden={!isActive}
                >
                  {chars.map((ch, i) => (
                    <span
                      key={i}
                      className={styles.char}
                      style={{ opacity: i < revealCount ? 1 : 0.35 }}
                    >
                      {ch}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>

          {/* Index Circle — right column */}
          <aside className={styles.index}>
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className={styles.indexDivider}>/</span>
            <span className={styles.indexTotal}>
              {String(count).padStart(2, "0")}
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
}
