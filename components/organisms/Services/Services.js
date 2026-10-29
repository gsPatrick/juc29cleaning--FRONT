"use client";

import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "Deep Cleaning",
    text: "A deeper clean for a fresh start.",
    image: "/images/services/deep-cleaning.jpg",
  },
  {
    title: "Recurring Cleaning",
    text: "A beautifully maintained home, effortlessly.",
    image: "/images/services/recurring-cleaning.jpg",
  },
  {
    title: "Move-In / Move-Out",
    text: "A fresh start for your next chapter.",
    image: "/images/services/move-in-out.jpg",
  },
  {
    title: "Commercial Cleaning",
    text: "Clean, welcoming spaces for your business.",
    image: "/images/services/commercial.jpg",
  },
  {
    title: "Post-Construction Cleaning",
    text: "From construction dust to move-in ready.",
    image: "/images/services/post-construction.jpg",
  },
  {
    title: "Carpet & Upholstery Cleaning",
    text: "Bringing freshness and comfort back to your fabrics.",
    image: "/images/services/carpet-upholstery.jpg",
  },
];

export default function Services() {
  // Opens the side booking form (same event used by the header and hero buttons)
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.label}>Our Services</span>
          <h2 className={styles.title}>
            <span className={styles.accent}>Cleaning</span> tailored to your lifestyle.
          </h2>
          <p className={styles.lead}>
            Thoughtful care for every home, every need, and every occasion.
          </p>
        </header>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={openBooking}
              className={styles.card}
            >
              <div className={styles.photo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} className={styles.photoImg} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.text}</p>
                <span className={styles.cardLink}>Explore Service →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
