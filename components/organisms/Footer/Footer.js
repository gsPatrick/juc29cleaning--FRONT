/* Plain anchors on purpose: in-page links are animated by SmoothAnchors. */
/* eslint-disable @next/next/no-html-link-for-pages */
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
      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>

          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <img src="/images/logo.jpeg" alt="JUC29 Cleaning" className={styles.logo} />
              <p className={styles.brandDesc}>Professional home cleaning in Tampa Bay.</p>
            </div>

            {/* Services */}
            <nav className={styles.col} aria-label="Services">
              <h3 className={styles.colTitle}>Services</h3>
              <a href="/#services" className={styles.link}>Deep Cleaning</a>
              <a href="/#services" className={styles.link}>Recurring Cleaning</a>
              <a href="/#services" className={styles.link}>Move-In / Move-Out</a>
              <a href="/#services" className={styles.link}>Commercial Cleaning</a>
              <a href="/#services" className={styles.link}>Post-Construction</a>
              <a href="/#services" className={styles.link}>Carpet &amp; Upholstery</a>
            </nav>

            {/* Company */}
            <nav className={styles.col} aria-label="Company">
              <h3 className={styles.colTitle}>Company</h3>
              <a href="/" className={styles.link}>Home</a>
              <a href="/#why-us" className={styles.link}>Why Us</a>
              <a href="/#before-after" className={styles.link}>Before &amp; After</a>
              <a href="/#reviews" className={styles.link}>Reviews</a>
            </nav>

            {/* Contact */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Contact</h3>
              <a href="sms:+17279008730" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                (727) 900-8730
              </a>
              <a href="mailto:support@juc29cleaning.com" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                support@juc29cleaning.com
              </a>
              <button onClick={handleBookNow} className={styles.quoteBtn}>
                Get My Free Quote
              </button>
            </div>
          </div>

          {/* Legal */}
          <div className={styles.legal}>
            <span>Tampa Bay, FL</span>
            <div className={styles.legalLinks}>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
              <a href="/terms" className={styles.legalLink}>Terms of Service</a>
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
            <span>© {new Date().getFullYear()} JUC29 Corp Cleaning. All Rights Reserved.</span>
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
