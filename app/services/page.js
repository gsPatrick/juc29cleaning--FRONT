import Services from "@/components/organisms/Services/Services";
import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <Services headingTag="h1" />
    </main>
  );
}
