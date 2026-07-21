"use client";

import Mission from "../Mission/Mission";
import EstimateForm from "../EstimateForm/EstimateForm";
import styles from "./Hero.module.css";

export default function Hero() {
  // Video opens with the intro reveal animation and stays fullscreen — no scroll expand/contract.
  return (
    <section className={styles.experience} id="home">
      {/* Sticky video backdrop */}
      <div className={styles.videoBg}>
        <div className={`${styles.frame} ${styles.expanded}`}>
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

          {/* Right column — glass form card pinned to far right edge */}
          <div className={`${styles.heroContent} ${styles.heroContentExpanded}`}>
            <div className={styles.formCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardBadge}>✦ Free Quote</span>
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

          {/* Left column — headline over the video */}
          <div className={styles.heroVisualSpacer}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroHeadline}>Life&apos;s too short to spend it cleaning.</h1>
              <p className={styles.heroSubheadline}>
                Professional home cleaning that gives you back your time, your weekends, and the peace of mind of always coming home to a beautifully cared-for home.
              </p>
            </div>
          </div>
        </div>

        <Mission />
      </div>
    </section>
  );
}
