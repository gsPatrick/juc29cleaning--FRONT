"use client";

import styles from "./HomeEstimate.module.css";

const STEPS = [
  {
    title: "Tell us about your home",
    text: "Share the size, the rooms and what you need. It takes about two minutes.",
  },
  {
    title: "Pick a day that suits you",
    text: "We confirm your free quote and book a time that fits your week.",
  },
  {
    title: "Come home to spotless",
    text: "Our vetted team arrives on time, cleans every detail and leaves it ready.",
  },
];

export default function HomeEstimate() {
  const handleBookNowClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <section className={styles.section}>
      <div className={styles.bgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/estimate_bg.jpg" alt="" className={styles.bgImg} />
        <div className={styles.bgShade} />
      </div>

      <div className={styles.grid}>
        <div className={styles.contentCol}>
          <span className={styles.topLabel}>✦ How It Works</span>
          <h2 className={styles.heading}>
            A spotless home is three simple steps away.
          </h2>
          <p className={styles.subheading}>
            No contracts, no hassle. Just a clean home, on your schedule.
          </p>
          <div className={styles.actionsRow}>
            <button onClick={handleBookNowClick} className={styles.bookBtn}>
              Get My Free Quote
            </button>
          </div>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
