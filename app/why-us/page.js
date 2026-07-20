"use client";

import styles from "./page.module.css";

const VALUES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M9 16L14 21L23 12" stroke="var(--color-navy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L23 8.5L25.5 9L23 9.5L22 12L21 9.5L18.5 9L21 8.5L22 6Z" fill="var(--color-accent-yellow)"/>
      </svg>
    ),
    title: "Attention to Detail",
    desc: "We treat every home with the same care and precision we'd expect in our own.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <rect x="10" y="12" width="12" height="10" rx="2" stroke="var(--color-navy)" strokeWidth="2"/>
        <path d="M13 12V10C13 8.34315 14.3431 7 16 7V7C17.6569 7 19 8.34315 19 10V12" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 6L23 8.5L25.5 9L23 9.5L22 12L21 9.5L18.5 9L21 8.5L22 6Z" fill="var(--color-accent-yellow)"/>
      </svg>
    ),
    title: "Reliable & Trustworthy",
    desc: "Professional, respectful, background-checked team you can feel comfortable welcoming into your home.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M22 10C16 10 10 16 10 22C10 22 16 22 22 16C22 13 22 10 22 10Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 22L7 25" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 6L23 8.5L25.5 9L23 9.5L22 12L21 9.5L18.5 9L21 8.5L22 6Z" fill="var(--color-accent-yellow)"/>
      </svg>
    ),
    title: "Premium Products & Equipment",
    desc: "Professional-grade products and commercial equipment for exceptional results.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M16 8L17.5 13H22.5L18.5 16L20 21L16 18L12 21L13.5 16L9.5 13H14.5L16 8Z" stroke="var(--color-navy)" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M22 6L23 8.5L25.5 9L23 9.5L22 12L21 9.5L18.5 9L21 8.5L22 6Z" fill="var(--color-accent-yellow)"/>
      </svg>
    ),
    title: "Consistent Quality",
    desc: "Every visit follows the same high standards, delivering reliable results you can count on.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M9 11C9 10.4477 9.44772 10 10 10H22C22.5523 10 23 10.4477 23 11V19C23 19.5523 22.5523 20 22 20H14L10 24V20H10C9.44772 20 9 19.5523 9 19V11Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12.5 14H19.5M12.5 16.5H17" stroke="var(--color-navy)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M25 6L26 8.5L28.5 9L26 9.5L25 12L24 9.5L21.5 9L24 8.5L25 6Z" fill="var(--color-accent-yellow)"/>
      </svg>
    ),
    title: "Honest Communication",
    desc: "Clear pricing, no surprises, and responsive customer service from start to finish.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--color-accent-teal)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M16 7L23 10V15C23 19.5 20 23.5 16 25C12 23.5 9 19.5 9 15V10L16 7Z" stroke="var(--color-navy)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M13 15.5L15.5 18L19.5 13.5" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 6L26 8.5L28.5 9L26 9.5L25 12L24 9.5L21.5 9L24 8.5L25 6Z" fill="var(--color-accent-yellow)"/>
      </svg>
    ),
    title: "Fully Insured & Guaranteed",
    desc: "Fully insured for your peace of mind, backed by our satisfaction guarantee.",
  },
];

const STATS = [
  { value: "5.0★", label: "Google Rating", sub: "Tampa Bay" },
  { value: "350+", label: "Spaces Detailed", sub: "Since 2020" },
  { value: "98%", label: "Client Retention", sub: "Monthly Plans" },
  { value: "0", label: "Damage Claims", sub: "All Time Record" },
];

export default function WhyUsPage() {
  return (
    <main className={styles.page}>

      {/* Page Hero */}
      <section className={styles.hero}>
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroLabel}>✦ Our Difference</span>
            <h1 className={styles.heroTitle}>
              Not Just Clean —<br />
              <em>Surgically Detailed.</em>
            </h1>
            <p className={styles.heroLead}>
              JUC29 was built on a single belief: that every surface in your space deserves the precision of a master craftsperson, not a checklist clerk.
            </p>
          </div>
        </div>
        <div className={styles.heroAccent}></div>
      </section>

      {/* Stats Band */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statSub}>{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <span className={styles.valuesLabel}>✦ Why Choose JUC29</span>
            <h2 className={styles.valuesTitle}>Built on Six Pillars of Excellence.</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className={styles.storyLabel}>✦ Our Story</span>
              <h2 className={styles.storyTitle}>Precision born in Tampa Bay.</h2>
              <p className={styles.storyText}>
                JUC29 was founded with a clear gap in mind: Tampa Bay's luxury residential market had access to beautiful architecture, custom furniture, and premium finishes — but no cleaning company treated those spaces with matching sophistication.
              </p>
              <p className={styles.storyText}>
                We set out to change that. Every protocol we use was designed by studying hospitality operations from five-star hotels and applying those standards to residential and commercial settings. We don't just clean — we restore and maintain the integrity of your space.
              </p>
              <button
                className={styles.storyCta}
                onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
              >
                Experience the JUC29 Difference
              </button>
            </div>
            <div className={styles.storyRight}>
              <div className={styles.storyCard}>
                <blockquote className={styles.storyQuote}>
                  "We didn't start JUC29 to compete on price. We started it to set a new standard for what 'clean' means in this city."
                </blockquote>
                <div className={styles.storyAuthor}>
                  <span className={styles.storyAuthorName}>Carlos, Founder</span>
                  <span className={styles.storyAuthorRole}>JUC29 Cleaning · Tampa, FL</span>
                </div>
              </div>
              <div className={styles.storyBadge}>
                <div className={styles.badgeInner}>
                  <span className={styles.badgeStar}>★★★★★</span>
                  <span className={styles.badgeRating}>5.0</span>
                  <span className={styles.badgeSource}>Google Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready to experience it?</h2>
            <p className={styles.ctaDesc}>Book your first session and see the JUC29 standard in your own space.</p>
            <button
              className={styles.ctaBtn}
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            >
              Get My Free Quote
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
