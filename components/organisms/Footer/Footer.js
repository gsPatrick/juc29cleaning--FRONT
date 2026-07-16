"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleBookNow = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          
          <div className={styles.top}>
            {/* Left Brand Col */}
            <div className={styles.brand}>
              <img src="/images/logo.jpeg" alt="JUC29" className={styles.logo} />
              <p className={styles.brandDesc}>
                Surgical-grade detailing for premium architectural spaces in Tampa Bay.
              </p>
            </div>

            {/* Middle Sitemap Links */}
            <div className={styles.links}>
              <div className={styles.linksGroup}>
                <span className={styles.groupTitle}>Programs</span>
                <a href="/services" className={styles.link}>Regular Clean</a>
                <a href="/services" className={styles.link}>Deep Clean</a>
                <a href="/services" className={styles.link}>Turnover Care</a>
                <a href="/services" className={styles.link}>Construction</a>
              </div>
              <div className={styles.linksGroup}>
                <span className={styles.groupTitle}>Navigation</span>
                <a href="/" className={styles.link}>Home</a>
                <a href="/why-us" className={styles.link}>Why Us</a>
                <a href="/before-after" className={styles.link}>Before & After</a>
                <a href="/reviews" className={styles.link}>Reviews</a>
              </div>
            </div>

            {/* Right Action Column */}
            <div className={styles.actions}>
              <span className={styles.groupTitle}>Bookings</span>
              <button onClick={handleBookNow} className={styles.bookLink}>
                <span>Request Estimate</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.arrowIcon}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Parallax Reveal Background Layer (all screen sizes) */}
      <div className={styles.revealWrap} aria-hidden="true">
        <div className={styles.revealInner}>
          <div className={styles.gradientOverlay} />
          <video autoPlay loop muted playsInline className={styles.videoBg}>
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.revealBar}>
            <span>© {new Date().getFullYear()} JUC29. All Rights Reserved.</span>
            <span>
              Developed by{" "}
              <a href="https://codebypatrick.dev/" target="_blank" rel="noopener noreferrer" className={styles.creatorLink}>
                Patrick.Developer
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
