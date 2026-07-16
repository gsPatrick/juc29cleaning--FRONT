"use client";

import { useEffect, useState } from "react";
import styles from "./AboutUs.module.css";

const TABS_DATA = [
  {
    index: "01",
    title: "Restorative Surface Care",
    description: "Our detailing crew undergoes specialized training to handle premium materials like Carrara marble, custom brass fixtures, and fine hardwood finishes with absolute safety.",
    type: "image",
    src: "/images/about_tools.png"
  },
  {
    index: "02",
    title: "Vetted Hospitality Crew",
    description: "We hire for character and train for perfection. Every detailer is background-checked, fully insured, and operates under our strict 35+ checkpoint quality audit.",
    type: "image",
    src: "/images/about_interior.png"
  },
  {
    index: "03",
    title: "100% Pure Botanical Clean",
    description: "We use only premium, plant-derived, biodegradable cleaning formulations. Enjoy an immaculate home with zero synthetic residues, harsh chemical fumes, or allergens.",
    type: "video",
    src: "/videos/hero.mp4"
  }
];

const INTERVAL_MS = 4000;

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-rotate: cycle through tabs every INTERVAL_MS
  useEffect(() => {
    setProgress(0);
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      setProgress(Math.min((elapsed / INTERVAL_MS) * 100, 100));
      if (elapsed < INTERVAL_MS) {
        rafRef = requestAnimationFrame(tick);
      } else {
        setActiveTab((prev) => (prev + 1) % TABS_DATA.length);
      }
    };

    let rafRef = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef);
  }, [activeTab]);

  const active = TABS_DATA[activeTab];

  return (
    <section id="about" className={styles.section}>
      <div className="container">

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>✦ Our Philosophy</span>
          <h2 className={styles.title}>The JUC29 Standards.</h2>
        </div>

        {/* 2-Column Grid */}
        <div className={styles.grid}>

          {/* Left Column: Auto-rotating display (no click) */}
          <div className={styles.tabsCol}>
            {TABS_DATA.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={index}
                  className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
                >
                  <div className={styles.tabHeader}>
                    <span className={styles.tabNumber}>{tab.index}</span>
                    <h3 className={styles.tabTitle}>{tab.title}</h3>

                    {/* Progress ring replaces the chevron */}
                    <div className={styles.progressRing}>
                      <svg width="28" height="28" viewBox="0 0 28 28">
                        <circle
                          cx="14" cy="14" r="11"
                          fill="none"
                          stroke="rgba(15,30,46,0.08)"
                          strokeWidth="2"
                        />
                        {isActive && (
                          <circle
                            cx="14" cy="14" r="11"
                            fill="none"
                            stroke="var(--color-accent-teal)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 11}`}
                            strokeDashoffset={`${2 * Math.PI * 11 * (1 - progress / 100)}`}
                            transform="rotate(-90 14 14)"
                            style={{ transition: "stroke-dashoffset 0.05s linear" }}
                          />
                        )}
                      </svg>
                    </div>
                  </div>

                  {/* Description body — visible only when active */}
                  <div
                    className={styles.tabBody}
                    style={{
                      maxHeight: isActive ? "200px" : "0px",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className={styles.tabBodyInner}>
                      <p className={styles.tabDescription}>{tab.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Media Panel — shows the active tab's image/video */}
          <div className={styles.visualCol}>
            <div className={styles.mediaFrame}>

              {TABS_DATA.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={index}
                    className={styles.mediaWrapper}
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    {tab.type === "video" ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.mediaElement}
                      >
                        <source src={tab.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={tab.src}
                        alt={tab.title}
                        className={styles.mediaElement}
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}

              {/* Floating Glassmorphic Badge */}
              <div className={styles.glassBadge}>
                <span className={styles.badgeLabel}>✦ JUC29 Standard</span>
                <span className={styles.badgeText}>{active.title}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
