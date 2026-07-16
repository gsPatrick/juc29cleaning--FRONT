import styles from "./Marquee.module.css";

export default function Marquee() {
  const phrase = "A spotless space, designed for your peace of mind. \u00A0\u2014\u00A0 ";

  return (
    <section className={styles.section} aria-label="JUC29 brand slogan marquee">
      <div className={styles.track}>
        <span className={styles.item}>{phrase}</span>
        <span className={styles.item}>{phrase}</span>
      </div>
    </section>
  );
}
