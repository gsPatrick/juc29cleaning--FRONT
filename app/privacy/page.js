import styles from "./page.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.wrap}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>JUC29 Corp Cleaning · Tampa Bay, FL</p>

          <p className={styles.p}>This policy explains what information JUC29 Corp Cleaning ("JUC29 Cleaning", "we") collects through this website and how we use it.</p>

          <h2 className={styles.h2}>Information we collect</h2>
          <p className={styles.p}>When you request a quote, you may give us:</p>
          <ul className={styles.ul}>
            <li className={styles.li}>Your name, phone number and email address.</li>
            <li className={styles.li}>Your property address and details about the space (type, size, services needed).</li>
            <li className={styles.li}>Photos, a video or notes you choose to share.</li>
            <li className={styles.li}>Messages you send through our chat or by text or email.</li>
          </ul>

          <h2 className={styles.h2}>How we use it</h2>
          <p className={styles.p}>We use this information only to respond to your request, prepare your quote, schedule and provide cleaning services, and communicate with you about them.</p>

          <h2 className={styles.h2}>Sharing</h2>
          <p className={styles.p}>We do not sell your personal information. We use third-party tools to run our business, such as the Housecall Pro chat on this site, and they process your information only to provide their service to us.</p>

          <h2 className={styles.h2}>Text messages</h2>
          <p className={styles.p}>If you contact us by text, we reply by text about your request. Message and data rates may apply. Tell us if you prefer another way to be contacted.</p>

          <h2 className={styles.h2}>Your choices</h2>
          <p className={styles.p}>You can ask us to update or delete the information you gave us at any time.</p>

          <h2 className={styles.h2}>Contact</h2>
          <p className={styles.p}>
            Questions about this policy: <a className={styles.a} href="mailto:support@juc29cleaning.com">support@juc29cleaning.com</a> or text (727) 900-8730.
          </p>
        </div>
      </div>
    </main>
  );
}
