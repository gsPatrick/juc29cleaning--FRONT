"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";

const SERVICES_DATA = [
  {
    index: "01",
    title: "Deep Cleaning",
    subtitle: "Surgical-grade restorative sanitization of your home from ceilings to baseboards.",
    features: [
      "Tile grout scrubbing and calcium descaling",
      "Cabinet and wardrobe detailing",
      "Deep sanitation of kitchen appliances",
      "Baseboard and crown molding detail washing"
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M8 15L16 8L24 15V24C24 24.5523 23.5523 25 23 25H9C8.44772 25 8 24.5523 8 24V15Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 25V18H19V25" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6L23 9L26 10L23 11L22 14L21 11L18 10L21 9L22 6Z" fill="var(--color-accent-yellow)" />
        <path d="M10 9L10.5 11L12.5 11.5L10.5 12L10 14L9.5 12L7.5 11.5L9.5 11L10 9Z" fill="var(--color-accent-yellow)" />
      </svg>
    )
  },
  {
    index: "02",
    title: "Recurring Cleaning",
    subtitle: "Routine maintenance cleanings tailored to keep your spaces perfectly detailed on a set cadence.",
    features: [
      "Detail sanitization of kitchen & countertops",
      "HEPA-grade micro-filtration vacuuming",
      "Bathroom sanitation and fixture polishing",
      "Dusting of accessible trim, baseboards & fans"
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M13 14H19L18 25H14L13 14Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 14V11H18M18 11H20" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 11H13L14 9H18L16 11Z" fill="var(--color-navy)" />
        <path d="M9 9L9.5 11L11.5 11.5L9.5 12L9 14L8.5 12L6.5 11.5L8.5 11L9 9Z" fill="var(--color-accent-yellow)" />
      </svg>
    )
  },
  {
    index: "03",
    title: "Move In / Move Out",
    subtitle: "Thorough sanitization to make properties pristine, sanitized, and completely move-in ready.",
    features: [
      "Inside cabinet, drawer and closet detailing",
      "Adhesive and tape residue extraction",
      "Streak-free glass panel & track polishing",
      "Complete move-in ready quality audit"
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="9" y="11" width="14" height="12" rx="1.5" stroke="var(--color-navy)" strokeWidth="2" />
        <path d="M9 15h14" stroke="var(--color-navy)" strokeWidth="1.5" />
        <path d="M13 11v4M19 11v4" stroke="var(--color-navy)" strokeWidth="1.5" />
        <path d="M25 7L26 9.5L28.5 10L26 10.5L25 13L24 10.5L21.5 10L24 9.5L25 7Z" fill="var(--color-accent-yellow)" />
      </svg>
    )
  },
  {
    index: "04",
    title: "Carpet Cleaning",
    subtitle: "Industrial steam extraction and stain remediation restoring traffic-heavy rugs and carpet areas.",
    features: [
      "Deep moisture extraction stain removal",
      "Eco-safe odor neutralizing formulations",
      "Traffic lane fiber restoration detailing",
      "Fast-dry industrial carpet blowers"
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M8 20c4-4 12-4 16 0" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 24c3-3 9-3 12 0" stroke="var(--color-navy)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 8v8" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="23" cy="9" r="1.5" fill="var(--color-accent-yellow)" />
        <circle cx="26" cy="11" r="2" fill="var(--color-accent-yellow)" />
      </svg>
    )
  },
  {
    index: "05",
    title: "Laundry Rescue",
    subtitle: "From washing and drying to folding, organizing, and putting everything away — we handle every step.",
    features: [
      "Washing, drying, folding & putting away",
      "Closet & drawer organization while laundry runs",
      "Delicate separating & temperature sorting",
      "Bed linen & bathroom towel sanitizing"
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M16 8v3M16 11c3 0 7 2 8 5H8c1-3 5-5 8-5Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M13 24h6v-8h-6v8Z" stroke="var(--color-navy)" strokeWidth="2" />
        <path d="M22 6L23 9L26 10L23 11L22 14L21 11L18 10L21 9L22 6Z" fill="var(--color-accent-yellow)" />
      </svg>
    )
  },
  {
    index: "06",
    title: "Airbnb Turnover",
    subtitle: "Every detail between guest stays — cleaning, linens, restocking, and final inspection for a 5-star impression.",
    features: [
      "Full cleaning after every guest checkout",
      "Fresh linens, towels & restocked essentials",
      "Final walkthrough inspection every time",
      "Consistent 5-star ready presentation"
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="var(--color-accent-teal)" strokeWidth="1.5" />
        <path d="M4 12h24" stroke="var(--color-navy)" strokeWidth="1.5" />
        <path d="M10 18h4M10 22h8" stroke="var(--color-navy)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 6L23 9L26 10L23 11L22 14L21 11L18 10L21 9L22 6Z" fill="var(--color-accent-yellow)" />
      </svg>
    )
  },
  {
    index: "07",
    title: "Office Cleaning",
    subtitle: "Sophisticated detailing programs for boutique offices, retailers, and high-end studios.",
    features: [
      "Custom routine schedule (morning, evening, weekend)",
      "Boardroom, lobby & workstation cleaning",
      "Breakroom & restroom deep sanitization",
      "Fully vetted crew under NDA compliance"
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M7 26V8C7 7.44772 7.44772 7 8 7H18C18.5523 7 19 7.44772 19 8V26" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 14H24C24.5523 14 25 14.4477 25 15V26" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 11H12M14 11H16M10 16H12M14 16H16" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 7L25 9.5L27.5 10L25 10.5L24 13L23 10.5L20.5 10L23 9.5L24 7Z" fill="var(--color-accent-yellow)" />
      </svg>
    )
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      const track = trackRef.current;
      if (!el || !track) return;

      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrollable > 0 ? scrolled / scrollable : 0;

      // Calculate the maximum translate offset (track width minus window viewport width)
      const maxScroll = track.scrollWidth - window.innerWidth;

      if (maxScroll > 0) {
        setTranslateX(-progress * maxScroll);
      } else {
        setTranslateX(0);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className={styles.section}>
      <div className={styles.sticky}>
        {/* Section Header */}
        <div className="container">
          <div className={styles.header}>
            <span className={styles.label}>✦ Our Platform</span>
            <h2 className={styles.title}>
              <span className={styles.highlightText}>Spotless</span> spaces, <br />
              customized for your lifestyle.
            </h2>
            <p className={styles.subtitleLead}>
              We reject the concept of one-size-fits-all cleaning. JUC29 operates on a platform of customized, detailed care, using top-tier equipment and certified non-toxic products.
            </p>
          </div>
        </div>

        {/* Horizontal Slider Track Wrapper */}
        <div className={styles.trackContainer}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <span className={styles.cardIndex}>{service.index}</span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.subtitle}</p>

                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.checkIcon}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
