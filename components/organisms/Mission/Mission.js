import styles from "./Mission.module.css";

const PILLARS = [
  {
    title: "More Time",
    text: "Enjoy your weekends and the moments that matter.",
    icon: (
      <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />
    ),
  },
  {
    title: "Less Stress",
    text: "Come home to a fresh, organized space.",
    icon: (
      <>
        <path d="M12 21c-3-2-5-5-5-8 0-2 1-4 5-8 4 4 5 6 5 8 0 3-2 6-5 8z" />
        <path d="M12 21c-5 0-8-2-9-6 3 0 6 1 9 6zM12 21c5 0 8-2 9-6-3 0-6 1-9 6z" />
      </>
    ),
  },
  {
    title: "A Happier Home",
    text: "A cleaner home for a healthier, happier you.",
    icon: (
      <path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.7A4.5 4.5 0 0120 9c0 6-8 11-8 11z" />
    ),
  },
];

export default function Mission() {
  return (
    <section className={styles.section}>
      <div className={styles.photo} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/about_interior.png" alt="" className={styles.photoImg} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.label}>✦ Our Mission</span>

          <h2 className={styles.title}>
            A clean home.
            <span className={styles.accent}> A clearer mind.</span>
            <br />
            A better life.
          </h2>

          <p className={styles.lead}>
            We believe a clean home brings comfort, peace of mind, and more time
            to enjoy what truly matters.
          </p>

          <ul className={styles.pillars}>
            {PILLARS.map((p) => (
              <li key={p.title} className={styles.pillar}>
                <span className={styles.iconWrap}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                </span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarText}>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
