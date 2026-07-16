"use client";

import { useState } from "react";
import EstimateForm from "@/components/organisms/EstimateForm/EstimateForm";
import styles from "./page.module.css";

const FAQS = [
  {
    q: "How far in advance do I need to book?",
    a: "We recommend booking 48–72 hours in advance for standard sessions. For post-construction or estate cleans, we prefer 5–7 days lead time to assign the right crew and materials.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. Many clients provide a key, smart lock code, or concierge access. Our crew is fully bonded, background-checked, and insured. We'll send you photo confirmation after every session.",
  },
  {
    q: "What products do you use?",
    a: "Our entire product line is plant-derived, cruelty-free, and certified biodegradable. We never use bleach or harsh acid-based agents unless specifically requested for restorative projects.",
  },
  {
    q: "Do you service apartments and condos?",
    a: "Absolutely. We work with residential estates, high-rise condos, apartments, townhomes, and commercial studio spaces across the Tampa Bay area.",
  },
  {
    q: "What if I'm not satisfied with the result?",
    a: "We offer a 100% satisfaction re-clean guarantee. If any area doesn't meet your expectations, contact us within 24 hours and we'll return at no charge to address it.",
  },
  {
    q: "How are your prices determined?",
    a: "Pricing is based on square footage, frequency, service type, and any specialty add-ons. Our coordinators provide a transparent, itemized estimate before every session.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.faqIcon} ${open ? styles.faqIconOpen : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={styles.faqAnswer}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroLabel}>✦ Get In Touch</span>
            <h1 className={styles.heroTitle}>
              Let's Detail<br />
              <em>Your Space.</em>
            </h1>
            <p className={styles.heroLead}>
              Ready to experience the JUC29 standard? Fill out the form below and our coordinator will respond within 2 hours.
            </p>
          </div>
        </div>
        <div className={styles.heroAccent}></div>
      </section>

      {/* Form + Info Grid */}
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>

            {/* Left: Form */}
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <span className={styles.formLabel}>✦ Detailing Request</span>
                <h2 className={styles.formTitle}>Request Free Estimate</h2>
              </div>
              <EstimateForm idPrefix="contact" />
            </div>

            {/* Right: Info Sidebar */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Contact Coordinates</h3>
                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.83 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Phone</span>
                      <span className={styles.infoValue}>(813) 555-2929</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Email</span>
                      <span className={styles.infoValue}>tampa@juc29.com</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Coverage Area</span>
                      <span className={styles.infoValue}>Tampa Bay, St. Pete, Clearwater</span>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Response Time</span>
                      <span className={styles.infoValue}>Within 2 business hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.coverageCard}>
                <h4 className={styles.coverageTitle}>Coverage Map</h4>
                <div className={styles.coverageAreas}>
                  {["South Tampa", "Hyde Park", "Davis Islands", "Channelside", "Westshore", "St. Petersburg", "Clearwater", "New Tampa", "Palma Ceia"].map((area) => (
                    <span key={area} className={styles.areaTag}>{area}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqHeader}>
            <span className={styles.faqLabel}>✦ FAQ</span>
            <h2 className={styles.faqTitle}>Common Questions.</h2>
          </div>
          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
