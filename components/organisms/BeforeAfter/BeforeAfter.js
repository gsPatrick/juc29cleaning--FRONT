"use client";

import { useRef, useState } from "react";
import styles from "./BeforeAfter.module.css";

const EXAMPLES = [
  {
    title: "Kitchen Range Restoration",
    desc: "Surgical removal of grease, carbon, and burnt-on residue from stainless steel stove cooktops.",
    beforeImg: "/images/kitchen_before.png",
    afterImg: "/images/kitchen_after.png",
    beforeStyle: {}
  },
  {
    title: "Bathroom Grout Detailing",
    desc: "Deep scrub tile remediation dissolving mildew, lime deposits, and grout line discoloration.",
    beforeImg: "/images/grout_before.png",
    afterImg: "/images/grout_after.png",
    beforeStyle: {}
  },
  {
    title: "Shower Glass Descaling",
    desc: "Crystal-clear glass chemical polishing, completely stripping calcified water rings and spots.",
    beforeImg: "/images/glass_before.png",
    afterImg: "/images/glass_after.png",
    beforeStyle: {}
  },
  {
    title: "Baseboard Corner Wiping",
    desc: "Detailed dry-brushing and wet-wipe mold, cobweb, and lint remediation across moldings.",
    beforeImg: "/images/baseboards_before.png",
    afterImg: "/images/baseboards_after.png",
    beforeStyle: {}
  },
  {
    title: "Hardwood Floor Polishing",
    desc: "Restorative gloss floor buffing removing matte scuffs, fine dust, and footprint oil haze.",
    beforeImg: "/images/about_interior.png",
    afterImg: "/images/about_interior.png",
    beforeStyle: { filter: "grayscale(0.25) contrast(0.85) brightness(0.8) sepia(0.1) blur(0.7px)" }
  }
];

export default function BeforeAfter() {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeExample = EXAMPLES[activeIdx];

  const handleMove = (clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation(); // Prevent slider trigger interference
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev - 1 + EXAMPLES.length) % EXAMPLES.length);
      setSliderPos(50); // reset slide bar to middle
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % EXAMPLES.length);
      setSliderPos(50);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="before-after" className={styles.section}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>✦ Visual Proof</span>
          <h2 className={styles.title}>Transformations, Detailed.</h2>
          <p className={styles.lead}>
            Slide or hover to inspect the surgical precision of our restorative kitchen stove, grout, glass, and baseboard detailing programs.
          </p>
        </div>

        {/* Carousel Slider Layout */}
        <div className={styles.carouselWrapper}>
          
          {/* Left Navigation Arrow */}
          <button onClick={handlePrev} className={`${styles.navArrow} ${styles.prevArrow}`} aria-label="Previous example">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Slider Frame */}
          <div
            ref={containerRef}
            className={`${styles.sliderContainer} ${isTransitioning ? styles.fade : ""}`}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* UNDER LAYER: AFTER */}
            <img
              src={activeExample.afterImg}
              alt={`${activeExample.title} After Clean`}
              className={styles.afterImage}
              draggable="false"
            />

            {/* OVER LAYER: BEFORE */}
            <img
              src={activeExample.beforeImg}
              alt={`${activeExample.title} Before Clean`}
              className={styles.beforeImage}
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                ...activeExample.beforeStyle
              }}
              draggable="false"
            />

            {/* Slider Line Divider */}
            <div className={styles.dividerLine} style={{ left: `${sliderPos}%` }} />

            {/* Slider Handle Button */}
            <div className={styles.dividerHandle} style={{ left: `${sliderPos}%` }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className={styles.handleIcon}
              >
                <polyline points="8 5 1 12 8 19" />
                <polyline points="16 5 23 12 16 19" />
              </svg>
            </div>

            {/* Float Labels */}
            <span className={styles.beforeLabel} style={{ opacity: sliderPos > 20 ? 1 : 0 }}>
              Before
            </span>
            <span className={styles.afterLabel} style={{ opacity: sliderPos < 80 ? 1 : 0 }}>
              After Clean
            </span>
          </div>

          {/* Right Navigation Arrow */}
          <button onClick={handleNext} className={`${styles.navArrow} ${styles.nextArrow}`} aria-label="Next example">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

        {/* Carousel Indicator Details */}
        <div className={styles.detailsRow}>
          <div className={styles.counter}>
            Example 0{activeIdx + 1} <span className={styles.counterTotal}>/ 0{EXAMPLES.length}</span>
          </div>
          <div className={styles.info}>
            <h4 className={styles.infoTitle}>{activeExample.title}</h4>
            <p className={styles.infoDesc}>{activeExample.desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
