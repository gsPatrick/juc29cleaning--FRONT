"use client";

import Services from "@/components/organisms/Services/Services";
import ServicesDetail from "@/components/organisms/ServicesDetail/ServicesDetail";
import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero — clean video, same treatment as the other pages ── */}
      <section className={styles.hero}>
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroLabel}>✦ Detailing Programs</span>
            <h1 className={styles.heroTitle}>
              Every Space Deserves<br />
              <em>Surgical Precision.</em>
            </h1>
            <p className={styles.heroLead}>
              Flagship programs engineered for residential estates, commercial sanctuaries, and busy homes across Tampa Bay.
            </p>
            <div className={styles.heroActions}>
              <button
                className={styles.heroCta}
                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
              >
                Get My Free Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>5.0★</span>
                <span className={styles.heroStatLabel}>Google Rating · Tampa Bay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Same sections as the home page ── */}
      <Services />
      <ServicesDetail />

    </main>
  );
}
