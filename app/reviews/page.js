"use client";

import styles from "./page.module.css";

// Real 5-star customer reviews for JUC29 Cleaning. Service tags are derived from
// each review's own text; no locations or dates are invented.
const REVIEWS = [
  {
    name: "Betsy Irizarry",
    rating: 5,
    text: "We hired Juc29 cleaning to do a deep cleaning in our airbnb. The shower needed major work and they did an amazing job. They are reliable and punctual. Will highly recommend.",
    service: "Airbnb Deep Clean",
    initials: "BI",
    color: "#00a896",
  },
  {
    name: "Robin May",
    rating: 5,
    text: "So pleased with the deep clean they did on my home! I have very exacting standards and they exceeded them. It was just the help we needed with two dirty dogs and a newborn home.",
    service: "Deep Clean",
    initials: "RM",
    color: "#9ECF84",
  },
  {
    name: "Damaris Carlson",
    rating: 5,
    text: "They were prompt in responding to my messages and were available the day I needed them. They did a deep clean in my home after I moved and did an exceptional job.",
    service: "Move-In Deep Clean",
    initials: "DC",
    color: "#b58900",
  },
  {
    name: "Jessica Schools",
    rating: 5,
    text: "Carolina had great communication from the start. She set all the right expectations and Anna did an amazing job!",
    service: "Verified Customer",
    initials: "JS",
    color: "#00a896",
  },
  {
    name: "Helen Williams Moulis",
    rating: 5,
    text: "Great service! Was able to come on short notice and did a very thorough move out clean with pictures afterwards.",
    service: "Move-Out Clean",
    initials: "HM",
    color: "#9ECF84",
  },
  {
    name: "Sarah Thesse Wobrock",
    rating: 5,
    text: "Carollina and her team were available on short notice to deep clean our condo. It is extremely evident that she takes pride in each and every job.",
    service: "Condo Deep Clean",
    initials: "SW",
    color: "#b58900",
  },
  {
    name: "Camerin Quinones",
    rating: 5,
    text: "Carollina was amazing! Family of 6 household with 3 dogs — she had my house back in order and looking brand new.",
    service: "Home Cleaning",
    initials: "CQ",
    color: "#00a896",
  },
  {
    name: "Nathan Marquardt",
    rating: 5,
    text: "Carolina and her team did a fantastic job. They were very thorough. My wife was very happy with the results.",
    service: "Deep Clean",
    initials: "NM",
    color: "#9ECF84",
  },
  {
    name: "Jaime Dumala",
    rating: 5,
    text: "Carolina has been cleaning our home for a few months now and her service is outstanding. She is consistent and detailed, and always leaves our home so clean and fresh.",
    service: "Recurring Client",
    initials: "JD",
    color: "#b58900",
  },
  {
    name: "Diego Dominguez",
    rating: 5,
    text: "Caroline and her company have been cleaning my home for over a year now. We have 3 dogs and 4 people living here and it can get very messy. I am very pleased with the work that they do.",
    service: "Recurring Client",
    initials: "DD",
    color: "#00a896",
  },
  {
    name: "Fabiane Lima",
    rating: 5,
    text: "I finally found someone who I can trust to clean my house the way I always wanted. Carollina works with perfection.",
    service: "Recurring Client",
    initials: "FL",
    color: "#9ECF84",
  },
  {
    name: "Samantha Possert",
    rating: 5,
    text: "Just used this service for the first time and was very pleased. Friendly and efficient company with good communication.",
    service: "First-Time Client",
    initials: "SP",
    color: "#b58900",
  },
  {
    name: "Krista Hutchinson",
    rating: 5,
    text: "Carollina and her team did such an amazing job on my house! I'm so thankful that I found her!",
    service: "Home Cleaning",
    initials: "KH",
    color: "#00a896",
  },
  {
    name: "Haley Mitchell",
    rating: 5,
    text: "I was extremely happy with the cleaning that was done for my apartment! Very detailed and fair priced.",
    service: "Apartment Cleaning",
    initials: "HA",
    color: "#9ECF84",
  },
  {
    name: "Stacey Nicole",
    rating: 5,
    text: "Very professional and easy to work with. They're very thorough and do a great job. I would definitely recommend them!",
    service: "Verified Customer",
    initials: "SN",
    color: "#b58900",
  },
  {
    name: "Callie Hodges",
    rating: 5,
    text: "Carolina did a FANTASTIC job cleaning my house!! She is not only friendly, but diligent, and quick.",
    service: "Home Cleaning",
    initials: "CH",
    color: "#00a896",
  },
  {
    name: "Victor Olise",
    rating: 5,
    text: "Carolina did such a fantastic job cleaning my house that I would recommend her to anyone.",
    service: "Home Cleaning",
    initials: "VO",
    color: "#9ECF84",
  },
  {
    name: "Stacy Lyn Taylor",
    rating: 5,
    text: "Very happy with the quality and attention to detail. I would highly recommend.",
    service: "Verified Customer",
    initials: "ST",
    color: "#b58900",
  },
  {
    name: "William Bainer",
    rating: 5,
    text: "Always lovely service. Thanks so much. 10/10.",
    service: "Verified Customer",
    initials: "WB",
    color: "#00a896",
  },
  {
    name: "Jennifer Cortes",
    rating: 5,
    text: "I am very happy. Thank you!",
    service: "Verified Customer",
    initials: "JC",
    color: "#9ECF84",
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
              <span className={styles.heroRatingText}>5.0 average across 20+ verified Google reviews</span>
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
                    <span className={styles.reviewerLocation}>Verified Google Review</span>
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
            <p className={styles.ctaDesc}>Join the Tampa Bay clients who trust JUC29 to maintain their spaces.</p>
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
