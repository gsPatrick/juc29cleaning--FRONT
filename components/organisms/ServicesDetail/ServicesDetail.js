"use client";

import { useEffect, useState } from "react";
import styles from "./ServicesDetail.module.css";

const SERVICES_DATA = [
  {
    tabTitle: "Regular Cleaning",
    quote: "The JUC29 team keeps our family home completely pristine. They are extremely thorough and our kids love the botanical scent.",
    author: "Davis Islands Family, Tampa",
    bgColor: "#C6E7E4", // soft teal
    image: "/images/about_interior.png",
    stat1: "100%",
    label1: "Eco-safe, child and pet-friendly botanical cleaners.",
    stat2: "Weekly",
    label2: "Routine maintenance custom scheduling options.",
    cta: "Request Regular Clean"
  },
  {
    tabTitle: "Deep Cleaning",
    quote: "Surgical-grade cleanliness. They scrubbed grout lines I thought were permanently stained and descaled our glass enclosures.",
    author: "Hyde Park Resident, Tampa",
    bgColor: "#D9E2E2", // soft gray-blue
    image: "/images/deep_cleaning.png",
    stat1: "35+",
    label1: "Detail cleaning audit checkpoints completed in one pass.",
    stat2: "Restored",
    label2: "Limescale and mildew completely removed.",
    cta: "Request Deep Clean"
  },
  {
    tabTitle: "Move In/Out Cleaning",
    quote: "Absolute peace of mind. The property manager commented that the cabinets and appliances looked brand new on walk-through.",
    author: "Downtown Tampa Tenant",
    bgColor: "#FFF0B3", // soft gold/yellow
    image: "/images/kitchen_clean.png",
    stat1: "Turnkey",
    label1: "Full interior cabinet, fridge, and oven detailing.",
    stat2: "100%",
    label2: "Deposit refund satisfaction guarantee on detailing.",
    cta: "Request Move In/Out Clean"
  },
  {
    tabTitle: "Post-Construction",
    quote: "Drywall dust, paint specks, and fine particles vanished. JUC29 made our brand new architectural space move-in ready.",
    author: "Luxury Builder, St. Petersburg",
    bgColor: "#eaeaea", // light gray
    image: "/images/about_tools.png",
    stat1: "HEPA",
    label1: "Air filtration vacuuming captures micro-dust particles.",
    stat2: "1-Pass",
    label2: "Complete residue and tape remediation.",
    cta: "Request Construction Clean"
  },
  {
    tabTitle: "Commercial/Office",
    quote: "Outstanding commercial program. They work after-hours seamlessly, leaving our workspace pristine for clients next morning.",
    author: "Boutique Office, Tampa Bay",
    bgColor: "#D9E2E2", // soft gray-blue
    image: "/images/about_commercial.png",
    stat1: "Flexible",
    label1: "Custom office schedules designed around work hours.",
    stat2: "Vetted",
    label2: "Fully background-checked, bonded, and insured crew.",
    cta: "Request Commercial Clean"
  },
  {
    tabTitle: "Carpet Cleaning",
    quote: "Our high-traffic carpets and area rugs look completely refreshed. The hot steam extraction lifted years of wear.",
    author: "Bayshore Blvd Estate, Tampa",
    bgColor: "#C6E7E4", // soft teal
    image: "/images/expert_gear.png",
    stat1: "220°F",
    label1: "High-temperature deep steam sanitize extraction.",
    stat2: "Fast Dry",
    label2: "Industrial blower setup gets spaces dry quickly.",
    cta: "Request Carpet Clean"
  },
  {
    tabTitle: "Laundry Rescue",
    quote: "JUC29 rescued us from a mountain of laundry after our vacation. Everything returned smelling incredible, soft, and perfectly folded.",
    author: "Culbreath Isles Resident",
    bgColor: "#FFF0B3",
    image: "/images/about_interior.png",
    stat1: "Every Step",
    label1: "Washing, drying, folding, organizing, and putting everything away.",
    stat2: "Closets Too",
    label2: "While the laundry runs, we organize closets and drawers.",
    cta: "Request Laundry Rescue"
  },
  {
    tabTitle: "Turnover Cleaning",
    quote: "Every single turnover looks flawless. Guests consistently leave 5-star reviews specifically mentioning the cleanliness.",
    author: "Airbnb Host, Tampa Bay",
    bgColor: "#D9E2E2",
    image: "/images/kitchen_clean.png",
    stat1: "5-Star",
    label1: "Guest-ready results with fresh linens and restocked essentials.",
    stat2: "Every Stay",
    label2: "Final inspection included on every single turnover.",
    cta: "Request Turnover Cleaning"
  }
];

export default function ServicesDetail() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-rotate effect: switches index every 6 seconds.
  // Re-runs whenever activeTab changes, which resets the timer on manual click.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const service = SERVICES_DATA[activeTab];

  return (
    <section id="services-detail" className={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>✦ Detailing Programs</span>
          <h2 className={styles.title}>Services tailored to your space.</h2>
        </div>

        {/* Top Navigation Pill Bar */}
        <div className={styles.tabBar}>
          {SERVICES_DATA.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                className={`${styles.tabPill} ${isActive ? styles.activePill : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {item.tabTitle}
              </button>
            );
          })}
        </div>

        {/* Ease-Style 3-Column Asymmetrical Grid */}
        <div className={styles.grid}>
          
          {/* Card 1: Solid Color Testimonial Quote */}
          <div
            className={styles.quoteCard}
            style={{ backgroundColor: service.bgColor }}
          >
            <p className={styles.quoteText}>“{service.quote}”</p>
            <div className={styles.quoteFooter}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{service.author}</span>
                <span className={styles.authorRole}>Vetted Detailing Client</span>
              </div>
              <div className={styles.brandBadge}>JUC29</div>
            </div>
          </div>

          {/* Card 2: Vertical Image Frame */}
          <div className={styles.imageCard}>
            <img
              src={service.image}
              alt={service.tabTitle}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.imageOverlay}></div>
          </div>

          {/* Column 3: Stacked Stat Cards & CTA Card */}
          <div className={styles.stackColumn}>
            {/* Stat Box 1 */}
            <div className={styles.statCard}>
              <span className={styles.statNumber}>{service.stat1}</span>
              <p className={styles.statText}>{service.label1}</p>
            </div>

            {/* Stat Box 2 */}
            <div className={styles.statCard}>
              <span className={styles.statNumber}>{service.stat2}</span>
              <p className={styles.statText}>{service.label2}</p>
            </div>

            {/* CTA Button Card */}
            <button
              className={styles.ctaCard}
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            >
              <span className={styles.ctaText}>{service.cta}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.ctaArrow}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

        </div>

        {/* Explore All Link Bar */}
        <div className={styles.exploreBar}>
          <a href="/services" className={styles.exploreLink}>
            <span>Explore All Detailing Programs</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.exploreArrow}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
