"use client";

import BeforeAfter from "@/components/organisms/BeforeAfter/BeforeAfter";
import styles from "./page.module.css";

/* ─────────────────────────── Custom Icons ─────────────────────────── */
const IconTileRestoration = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
    <rect x="8" y="8" width="6" height="6" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="18" y="8" width="6" height="6" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="8" y="18" width="6" height="6" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="18" y="18" width="6" height="6" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M16 11.5L16.5 13L18 13.5L16.5 14L16 15.5L15.5 14L14 13.5L15.5 13L16 11.5Z" fill="var(--color-accent-yellow)"/>
  </svg>
);

const IconGlassDescaling = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
    <path d="M9 13V24C9 24.5523 9.44772 25 10 25H22C22.5523 25 23 24.5523 23 24V9C23 8.44772 22.5523 8 22 8H14" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 10L14 7L13 14" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9L19 16" stroke="var(--color-navy)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 6L23 8.5L25.5 9L23 9.5L22 12L21 9.5L18.5 9L21 8.5L22 6Z" fill="var(--color-accent-yellow)"/>
  </svg>
);

const IconMoldingDetailing = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
    <path d="M8 22H24" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 18H24" stroke="var(--color-navy)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 15C12 15 15 12 18 12H24" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 8L10.5 10L12 10.5L10.5 11L10 13L9.5 11L8 10.5L9.5 10L10 8Z" fill="var(--color-accent-yellow)"/>
  </svg>
);

/* ─────────────────────────── Data ─────────────────────────── */
const METHODS = [
  {
    Icon: IconTileRestoration,
    title: "Tile & Grout Deep Restoration",
    desc: "Our alkaline-based enzymatic solution is applied to grout lines and allowed to dwell for 8–12 minutes, dissolving mineral deposits and mildew at the molecular level. Manual scrubbing with professional rotary brushes extracts residue from the pore structure without damaging the tile surface.",
    steps: ["pH-balanced pre-spray application", "Dwell time for enzymatic reaction", "High-rotation brush agitation", "Hot water extraction rinse", "Grout sealing & final inspection"],
  },
  {
    Icon: IconGlassDescaling,
    title: "Glass Descaling Protocol",
    desc: "Our calcium and limescale removal formula is applied in controlled sections. Using professional squeegees and polishing pads, we restore optical clarity without scratching the tempered glass surface.",
    steps: ["Mineral deposit assessment", "Descaling agent application", "Circular polishing technique", "Detail edge wipe with lint-free cloth", "Streak-free final buff & dry"],
  },
  {
    Icon: IconMoldingDetailing,
    title: "Baseboard & Molding Detailing",
    desc: "We use a systematic 4-tool approach to reach every contour of ornate baseboards and crown moldings. Vacuum extraction first removes dry particles, followed by damp microfiber wipe and precision corner tool.",
    steps: ["Dry particle vacuum extraction", "Microfiber damp-wipe primary pass", "Corner crevice tool detail", "Wood-safe conditioning wipe", "Dual-check quality inspection"],
  },
];

/* ─────────────────────────── Component ─────────────────────────── */
export default function BeforeAfterPage() {
  return (
    <main className={styles.page}>

      {/* Cinematic Hero with background image */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="/images/about_tools.png" alt="" className={styles.heroBgImg} aria-hidden="true" />
          <div className={styles.heroBgOverlay} />
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroLabel}>✦ Visual Proof</span>
            <h1 className={styles.heroTitle}>
              See the JUC29<br />
              <em>Standard.</em>
            </h1>
            <p className={styles.heroLead}>
              Real transformations across real Tampa Bay spaces. Hover or drag any slider to reveal our work side-by-side.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.heroScrollHint}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </section>

      {/* BeforeAfter Interactive Component */}
      <BeforeAfter />

      {/* Methodology Section */}
      <section className={styles.methods}>
        <div className="container">
          <div className={styles.methodsHeader}>
            <span className={styles.methodsLabel}>✦ Our Protocols</span>
            <h2 className={styles.methodsTitle}>The Science Behind the Clean.</h2>
            <p className={styles.methodsDesc}>
              Every transformation above follows a rigorously documented protocol. Here's how we do it.
            </p>
          </div>
          <div className={styles.methodsGrid}>
            {METHODS.map((method, i) => {
              const { Icon } = method;
              return (
                <div key={i} className={styles.methodCard}>
                  <div className={styles.methodIconWrap}>
                    <Icon />
                  </div>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDesc}>{method.desc}</p>
                  <div className={styles.methodSteps}>
                    {method.steps.map((step, j) => (
                      <div key={j} className={styles.methodStep}>
                        <span className={styles.stepNum}>0{j + 1}</span>
                        <span className={styles.stepText}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <h2 className={styles.ctaTitle}>Your space is next.</h2>
              <p className={styles.ctaDesc}>Book your transformation and join 350+ satisfied clients in Tampa Bay.</p>
            </div>
            <button
              className={styles.ctaBtn}
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            >
              Book Your Restoration
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
