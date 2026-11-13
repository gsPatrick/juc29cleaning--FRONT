import styles from "./WhyUs.module.css";

const ITEMS = [
  {
    title: "Personalized Service",
    text: "Every home is different. We tailor each clean to your space and your routine.",
  },
  {
    title: "Attention to Detail",
    text: "We treat your home with the same care we would give our own.",
  },
  {
    title: "Clear Communication",
    text: "Straightforward pricing, no surprises, and a team that answers when you reach out.",
  },
  {
    title: "Reliable & Trustworthy",
    text: "A background-checked, insured team you can feel comfortable welcoming into your home.",
  },
  {
    title: "Locally Owned",
    text: "A Tampa Bay company serving our neighbors, backed by our satisfaction guarantee.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Why JUC29</span>
          <h2 className={styles.title}>Cleaning you can count on.</h2>
        </div>
        <ul className={styles.grid}>
          {ITEMS.map((item, i) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.num}>0{i + 1}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
