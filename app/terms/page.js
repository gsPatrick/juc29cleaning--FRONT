import styles from "./page.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.wrap}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>JUC29 Corp Cleaning · Tampa Bay, FL</p>

          <p className={styles.p}>By requesting a quote or booking a service with JUC29 Corp Cleaning ("JUC29 Cleaning", "we"), you agree to these terms.</p>

          <h2 className={styles.h2}>Quotes and services</h2>
          <p className={styles.p}>Quotes are free and based on the details you share about your space. The final price and scope are confirmed with you before the service. Services are provided in the Tampa Bay area.</p>

          <h2 className={styles.h2}>Access to your home</h2>
          <p className={styles.p}>Please make sure our team can access the property at the scheduled time and tell us about pets, alarms or special instructions in advance.</p>

          <h2 className={styles.h2} id="cancellation">Cancellation and rescheduling</h2>
          <p className={styles.p}>If you need to cancel or reschedule, please let us know as early as possible by text at (727) 900-8730 or by email. Cancellation terms for your service are confirmed with you when your booking is made.</p>

          <h2 className={styles.h2} id="payment">Payment</h2>
          <p className={styles.p}>Payment details, including accepted payment methods and when payment is due, are confirmed with you in your quote or booking.</p>

          <h2 className={styles.h2}>Satisfaction</h2>
          <p className={styles.p}>If something does not meet your expectations, contact us as soon as possible so we can make it right.</p>

          <h2 className={styles.h2}>Promotions</h2>
          <p className={styles.p}>The BOOKNOW 10% off offer is for first-time clients and applies to all services.</p>

          <h2 className={styles.h2}>Contact</h2>
          <p className={styles.p}>
            <a className={styles.a} href="mailto:support@juc29cleaning.com">support@juc29cleaning.com</a> · text (727) 900-8730.
          </p>
        </div>
      </div>
    </main>
  );
}
