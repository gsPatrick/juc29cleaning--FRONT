"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./PromoPopup.module.css";

const STORAGE_KEY = "juc29_promo_seen";
const PROMO_CODE = "BOOKNOW";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  // Show once per session, shortly after arriving on the home page.
  useEffect(() => {
    if (pathname !== "/") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // lock page scroll
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setIsOpen(false);
  };

  const handleClose = () => {
    dismiss();
    document.body.style.overflow = "auto"; // restore page scroll
  };

  // Close on Escape while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // handleClose is stable enough for this one-shot listener; re-bind only on open/close.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClaim = () => {
    // Hand off to the existing estimate flow. Keep scroll locked so the
    // booking drawer takes over the overlay without a flash of the page.
    dismiss();
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable — the code stays visible for manual copy.
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={styles.card}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
      >
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close offer">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Atmospheric accent glow */}
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.content}>
          <span className={styles.badge}>✦ Limited Time Offer</span>

          <h2 id="promo-title" className={styles.headline}>
            <span className={styles.amount}>10%</span>
            <span className={styles.off}>OFF</span>
          </h2>

          <p className={styles.subhead}>For first-time clients</p>

          <div className={styles.codeRow}>
            <span className={styles.codeLabel}>Use code</span>
            <button
              type="button"
              className={styles.codeChip}
              onClick={handleCopyCode}
              aria-label={`Copy promo code ${PROMO_CODE}`}
            >
              <span className={styles.codeText}>{PROMO_CODE}</span>
              <span className={styles.codeHint}>{copied ? "Copied ✓" : "Tap to copy"}</span>
            </button>
          </div>

          <button className={styles.cta} onClick={handleClaim}>
            Claim My 10% Off
            <svg
              className={styles.ctaArrow}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <p className={styles.note}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Fully insured · No commitment
          </p>
        </div>
      </div>
    </div>
  );
}
