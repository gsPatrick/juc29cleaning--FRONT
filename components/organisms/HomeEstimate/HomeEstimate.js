"use client";

import EstimateForm from "../EstimateForm/EstimateForm";
import styles from "./HomeEstimate.module.css";

export default function HomeEstimate() {
  const handleBookNowClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <section className={styles.section}>
      {/* Background Video Layer */}
      <div className={styles.bgWrap}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgImg}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Full-bleed grid: no container — columns anchor to image edges */}
      <div className={styles.grid}>
          {/* Left Column: Value Proposition */}
          <div className={styles.contentCol}>
            <span className={styles.topLabel}>Tampa Bay House Cleaning Services</span>
            <h2 className={styles.heading}>
              Spend your weekends living, not cleaning.
            </h2>
            <p className={styles.subheading}>
              Professional Cleaning. Honest People. Outstanding Results.
            </p>


            <div className={styles.actionsRow}>
              <button onClick={handleBookNowClick} className={styles.bookBtn}>
                Get Free Estimate
              </button>
              <div className={styles.ratingsBadges}>
                <div className={styles.avatars}>
                  <span className={styles.avatar} style={{ backgroundColor: "#003760" }}>M</span>
                  <span className={styles.avatar} style={{ backgroundColor: "#9ECF84" }}>O</span>
                  <span className={styles.avatar} style={{ backgroundColor: "#96989A" }}>A</span>
                </div>
                <div className={styles.ratingText}>
                  <span className={styles.star}>★</span> 4.9 Google <span className={styles.ratingDivider}>|</span> 153 reviews
                </div>
              </div>
            </div>
          </div>

          {/* Middle: empty — image breathes through */}
          <div aria-hidden="true" />

          {/* Right Column: Request Free Estimate Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Request Free Estimate</h3>
              <EstimateForm idPrefix="home-estimate" />
            </div>
          </div>
        </div>
    </section>
  );
}
