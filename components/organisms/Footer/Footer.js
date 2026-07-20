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
                  href="https://instagram.com/juc29cleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={styles.socialIcon}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/juc29cleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={styles.socialIcon}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/10000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={styles.socialIcon}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12 2a10 10 0 0 0-8.5 15.28L2 22l4.85-1.27A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.88.76.77-2.8-.2-.31A8.2 8.2 0 1 1 12 20.2Z" />
                  </svg>
                </a>
                <a
                  href="tel:+10000000000"
                  aria-label="Phone"
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

            <a href="mailto:support@juc29cleaning.com" className={styles.emailLink}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              support@juc29cleaning.com
            </a>
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
