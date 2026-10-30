"use client";

import AutoplayVideo from "@/components/atoms/AutoplayVideo/AutoplayVideo";
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
                <span>Get Your Free Quote Now</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.arrowIcon}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Social & Contact — sits before the video reveal layer */}
          <div className={styles.social}>
            <div className={styles.socialLeft}>
              <span className={styles.groupTitle}>Connect</span>
              <div className={styles.socialRow}>
                <a
                  href="sms:+17279008730"
                  aria-label="Text us"
                  className={styles.socialIcon}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </a>
                <a
                  href="mailto:support@juc29cleaning.com"
                  aria-label="Email"
                  className={styles.socialIcon}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.contactLinks}>
              <a href="sms:+17279008730" className={styles.emailLink}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                (727) 900-8730
              </a>
              <a href="mailto:support@juc29cleaning.com" className={styles.emailLink}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                support@juc29cleaning.com
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Parallax Reveal Background Layer (all screen sizes) */}
      <div className={styles.revealWrap} aria-hidden="true">
        <div className={styles.revealInner}>
          <div className={styles.gradientOverlay} />
          <AutoplayVideo className={styles.videoBg} />
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
