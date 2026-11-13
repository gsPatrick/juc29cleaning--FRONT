"use client";

import AutoplayVideo from "@/components/atoms/AutoplayVideo/AutoplayVideo";
import WhyUs from "@/components/organisms/WhyUs/WhyUs";
import styles from "./page.module.css";

export default function WhyUsPage() {
  return (
    <main className={styles.page}>

      {/* Page Hero */}
      <section className={styles.hero}>
        <AutoplayVideo className={styles.heroVideo} />
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroLabel}>✦ Our Difference</span>
            <h1 className={styles.heroTitle}>
              A local team that<br />
              <em>cares about your home.</em>
            </h1>
            <p className={styles.heroLead}>
              Personal service, clear communication, and careful work from a Tampa Bay company.
            </p>
          </div>
        </div>
        <div className={styles.heroAccent}></div>
      </section>

      {/* Differentiators — same section used on the home page */}
      <WhyUs />

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            <p className={styles.ctaDesc}>Request your free quote and we will get back to you.</p>
            <button
              className={styles.ctaBtn}
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            >
              Get My Free Quote
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
