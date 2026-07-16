"use client";

import { useEffect, useState } from "react";
import Mission from "../Mission/Mission";
import EstimateForm from "../EstimateForm/EstimateForm";
import styles from "./Hero.module.css";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setExpanded(window.scrollY > 50);

    // Only expand on load if the user has scrolled significantly down (e.g. scroll restoration)
    if (window.scrollY > 50) {
      setExpanded(true);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={styles.experience} id="home">
      {/* Sticky video backdrop */}
      <div className={styles.videoBg}>
        <div className={`${styles.frame} ${expanded ? styles.expanded : ""}`}>
          <div className={styles.canvas}>
            <video autoPlay loop muted playsInline className={styles.video}>
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Content overlay */}
      <div className={styles.overlay}>
        {/* Tagline — sticky through the hero AND the mission scrollytelling */}
        <div className={styles.heroTaglinePin}>
          <p className={styles.heroTagline}>Come home to a house that already feels ready.</p>
        </div>

        <div className={styles.heroGrid}>

          {/* Left column — glass form card pinned to far left edge */}
          <div className={`${styles.heroContent} ${expanded ? styles.heroContentExpanded : ""}`}>
            <div className={styles.formCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardBadge}>✦ Free Estimate</span>
                <h2 className={styles.cardTitle}>Book Your Clean</h2>
              </div>

              <EstimateForm variant="glass" idPrefix="hero" />

              <p className={styles.cardNote}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Fully insured · No commitment
              </p>
            </div>
          </div>

          {/* Right column — stays empty, video breathes through */}
          <div className={styles.heroVisualSpacer} />
        </div>

        <Mission />
      </div>
    </section>
  );
}
