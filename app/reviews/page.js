"use client";

import styles from "./page.module.css";

const REVIEWS = [
  {
    name: "Amanda Torres",
    location: "South Tampa",
    rating: 5,
    date: "2 weeks ago",
    text: "JUC29 is the most professional cleaning service I've used in Tampa. They treated my home like a five-star hotel. The grout in my master bath looks brand new — and I had given up hope on it.",
    service: "Residential Detailing",
    initials: "AT",
    color: "#00a896",
  },
  {
    name: "Marcus Webb",
    location: "Hyde Park",
    rating: 5,
    date: "1 month ago",
    text: "I've been through four different cleaning companies. None of them touched the baseboards, fan blades, or light switches like JUC29 does. The checklist they leave behind is incredibly detailed.",
    service: "Bi-Weekly Residential",
    initials: "MW",
    color: "#9ECF84",
  },
  {
    name: "Sofia Kline",
    location: "Davis Islands",
    rating: 5,
    date: "3 weeks ago",
    text: "We use JUC29 for our boutique design studio downtown. The team is incredibly respectful of the space and our client-facing areas always look immaculate. I can't recommend them enough.",
    service: "Commercial Studio Program",
    initials: "SK",
    color: "#b58900",
  },
  {
    name: "Robert Jimenez",
    location: "Westshore",
    rating: 5,
    date: "6 weeks ago",
    text: "Post-construction clean was flawless. The attention to detail during our kitchen renovation cleanup was next-level. Every single cabinet interior was spotless and they even polished the hardware.",
    service: "Post-Build Restoration",
    initials: "RJ",
    color: "#00a896",
  },
  {
    name: "Natalie Chen",
    location: "St. Petersburg",
    rating: 5,
    date: "2 months ago",
    text: "JUC29 has become an essential part of our home maintenance routine. It's not just cleaning — it's a real service. Everything smells incredible and looks pristine for weeks.",
    service: "Monthly Residential",
    initials: "NC",
    color: "#9ECF84",
  },
  {
    name: "David Park",
    location: "Clearwater",
    rating: 5,
    date: "5 weeks ago",
    text: "The shower glass descaling they did was remarkable. I thought the glass was permanently damaged from hard water — JUC29 made it crystal clear again. Worth every dollar.",
    service: "Bathroom Deep Restore",
    initials: "DP",
    color: "#b58900",
  },
  {
    name: "Elena Gutierrez",
    location: "Palma Ceia",
    rating: 5,
    date: "3 months ago",
    text: "I was hesitant at first because of the price point but after the first session I understood completely. The quality is simply on another level. My entire home felt transformed.",
    service: "Residential Estate",
    initials: "EG",
    color: "#00a896",
  },
  {
    name: "James O'Brien",
    location: "Channelside",
    rating: 5,
    date: "7 weeks ago",
    text: "Professional, punctual, and thorough. The 35-point checklist photos they send after each visit give me incredible peace of mind. No other company does that.",
    service: "Weekly Maintenance",
    initials: "JO",
    color: "#9ECF84",
  },
  {
    name: "Christina Lee",
    location: "New Tampa",
    rating: 5,
    date: "4 months ago",
    text: "Our oven restoration alone was worth booking them. I didn't even know an oven could look that clean again after years of use. JUC29 is genuinely impressive.",
    service: "Kitchen Deep Detail",
    initials: "CL",
    color: "#b58900",
  },
];

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[...Array(rating)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent-yellow)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroLabel}>✦ Client Testimonials</span>
            <h1 className={styles.heroTitle}>
              What Tampa Bay<br />
              <em>Clients Say.</em>
            </h1>
            <div className={styles.heroRating}>
              <StarRating rating={5} />
              <span className={styles.heroRatingText}>5.0 average across 150+ verified Google reviews</span>
            </div>
          </div>
        </div>
        <div className={styles.heroAccent}></div>
      </section>

      {/* Google Badge Strip */}
      <div className={styles.badge}>
        <div className="container">
          <div className={styles.badgeInner}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className={styles.badgeText}>Verified Google Business Reviews · Tampa Bay Area</span>
            <div className={styles.badgeScore}>
              <span className={styles.badgeStars}>★★★★★</span>
              <span className={styles.badgeNum}>5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className={styles.grid}>
        <div className="container">
          <div className={styles.reviewsGrid}>
            {REVIEWS.map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.cardTop}>
                  <div className={styles.avatar} style={{ background: review.color }}>
                    {review.initials}
                  </div>
                  <div className={styles.reviewer}>
                    <span className={styles.reviewerName}>{review.name}</span>
                    <span className={styles.reviewerLocation}>{review.location}, FL</span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.googleLogo}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <StarRating rating={review.rating} />
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.cardBottom}>
                  <span className={styles.serviceTag}>{review.service}</span>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Become our next 5-star review.</h2>
            <p className={styles.ctaDesc}>Join 350+ Tampa Bay clients who trust JUC29 to maintain their spaces.</p>
            <button
              className={styles.ctaBtn}
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            >
              Book Your First Session
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
