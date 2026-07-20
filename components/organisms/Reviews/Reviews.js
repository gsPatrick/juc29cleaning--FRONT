"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reviews.module.css";

// Real 5-star customer reviews for JUC29 Cleaning. Roles are derived from the
// service mentioned in each review — no locations or dates are invented.
const INITIAL_REVIEWS = [
  {
    name: "Betsy Irizarry",
    role: "Airbnb Deep Clean",
    text: "We hired Juc29 cleaning to do a deep cleaning in our airbnb. The shower needed major work and they did an amazing job. They are reliable and punctual. Will highly recommend.",
    stars: 5
  },
  {
    name: "Robin May",
    role: "Deep Clean",
    text: "So pleased with the deep clean they did on my home! I have very exacting standards and they exceeded them. It was just the help we needed with two dirty dogs and a newborn home.",
    stars: 5
  },
  {
    name: "Damaris Carlson",
    role: "Move-In Deep Clean",
    text: "They were prompt in responding to my messages and were available the day I needed them. They did a deep clean in my home after I moved and did an exceptional job.",
    stars: 5
  },
  {
    name: "Jessica Schools",
    role: "Verified Customer",
    text: "Carolina had great communication from the start. She set all the right expectations and Anna did an amazing job!",
    stars: 5
  },
  {
    name: "Helen Williams Moulis",
    role: "Move-Out Clean",
    text: "Great service! Was able to come on short notice and did a very thorough move out clean with pictures afterwards.",
    stars: 5
  },
  {
    name: "Sarah Thesse Wobrock",
    role: "Condo Deep Clean",
    text: "Carollina and her team were available on short notice to deep clean our condo. It is extremely evident that she takes pride in each and every job.",
    stars: 5
  },
  {
    name: "Camerin Quinones",
    role: "Home Cleaning",
    text: "Carollina was amazing! Family of 6 household with 3 dogs — she had my house back in order and looking brand new.",
    stars: 5
  },
  {
    name: "Nathan Marquardt",
    role: "Deep Clean",
    text: "Carolina and her team did a fantastic job. They were very thorough. My wife was very happy with the results.",
    stars: 5
  },
  {
    name: "Jaime Dumala",
    role: "Recurring Client",
    text: "Carolina has been cleaning our home for a few months now and her service is outstanding. She is consistent and detailed, and always leaves our home so clean and fresh.",
    stars: 5
  },
  {
    name: "Diego Dominguez",
    role: "Recurring Client",
    text: "Caroline and her company have been cleaning my home for over a year now. We have 3 dogs and 4 people living here and it can get very messy. I am very pleased with the work that they do.",
    stars: 5
  },
  {
    name: "Fabiane Lima",
    role: "Recurring Client",
    text: "I finally found someone who I can trust to clean my house the way I always wanted. Carollina works with perfection.",
    stars: 5
  },
  {
    name: "Samantha Possert",
    role: "First-Time Client",
    text: "Just used this service for the first time and was very pleased. Friendly and efficient company with good communication.",
    stars: 5
  },
  {
    name: "Krista Hutchinson",
    role: "Home Cleaning",
    text: "Carollina and her team did such an amazing job on my house! I'm so thankful that I found her!",
    stars: 5
  },
  {
    name: "Haley Mitchell",
    role: "Apartment Cleaning",
    text: "I was extremely happy with the cleaning that was done for my apartment! Very detailed and fair priced.",
    stars: 5
  },
  {
    name: "Stacey Nicole",
    role: "Verified Customer",
    text: "Very professional and easy to work with. They're very thorough and do a great job. I would definitely recommend them!",
    stars: 5
  },
  {
    name: "Callie Hodges",
    role: "Home Cleaning",
    text: "Carolina did a FANTASTIC job cleaning my house!! She is not only friendly, but diligent, and quick.",
    stars: 5
  },
  {
    name: "Victor Olise",
    role: "Home Cleaning",
    text: "Carolina did such a fantastic job cleaning my house that I would recommend her to anyone.",
    stars: 5
  },
  {
    name: "Stacy Lyn Taylor",
    role: "Verified Customer",
    text: "Very happy with the quality and attention to detail. I would highly recommend.",
    stars: 5
  },
  {
    name: "William Bainer",
    role: "Verified Customer",
    text: "Always lovely service. Thanks so much. 10/10.",
    stars: 5
  },
  {
    name: "Jennifer Cortes",
    role: "Verified Customer",
    text: "I am very happy. Thank you!",
    stars: 5
  }
];

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={styles.star}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.check}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  // Hook 1: Prepared to pull reviews from Google Places API in real time.
  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        // Prepare Google Places call in the future
      } catch (error) {
        console.error("Failed to fetch Google reviews:", error);
      }
    }
    fetchGoogleReviews();
  }, []);

  // Hook 2: Handles the horizontal scroll translation linking vertical scroll progress.
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
  }, [reviews]); // Recompute if reviews state changes

  return (
    <section ref={sectionRef} id="reviews" className={styles.section}>
      <div className={styles.sticky}>
        
        {/* Section Header */}
        <div className="container">
          <div className={styles.header}>
            <span className={styles.label}>✦ Google Reviews</span>
            <h2 className={styles.title}>What our clients say.</h2>
            <p className={styles.lead}>
              Average rating 5.0 in Tampa Bay, backed by verified Google Business reviews.
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
            {reviews.map((review, index) => (
              <div key={index} className={styles.card}>
                
                {/* Card Header: Stars & Verification */}
                <div className={styles.cardHeader}>
                  <div className={styles.starsRow}>
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <div className={styles.verifiedBadge}>
                    <CheckIcon />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Card Body: Testimonial Text */}
                <p className={styles.reviewText}>“{review.text}”</p>

                {/* Card Footer: Client Info & Google Logo */}
                <div className={styles.cardFooter}>
                  <div className={styles.clientInfo}>
                    <span className={styles.clientName}>{review.name}</span>
                    <span className={styles.clientRole}>{review.role}</span>
                  </div>
                  <div className={styles.googleIconWrapper}>
                    <GoogleIcon />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
