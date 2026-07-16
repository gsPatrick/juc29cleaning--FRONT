import styles from "./TrustBar.module.css";

const ITEMS = [
  "Fully Insured",
  "Satisfaction Guaranteed",
  "Background Checked",
  "Locally Owned",
  "5-Star Rated",
];

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="Why trust JUC29">
      <div className={styles.track}>
        {/* List rendered twice for a seamless infinite marquee loop */}
        {[0, 1].map((dup) => (
          <ul key={dup} className={styles.list} aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
