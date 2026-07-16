"use client";

import { useEffect, useState } from "react";
import EstimateForm from "../EstimateForm/EstimateForm";
import styles from "./BookingModal.module.css";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Subscribe to global click trigger events
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // lock page scroll
    };

    window.addEventListener("open-booking", handleOpen);
    return () => {
      window.removeEventListener("open-booking", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // restore page scroll
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      {/* Sliding Drawer Container */}
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>

        {/* Drawer Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.label}>✦ Secure Request</span>
            <h3 className={styles.title}>Request Free Estimate</h3>
          </div>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close booking">
            <svg
              width="20"
              height="20"
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
        </div>

        {/* Drawer Content */}
        <div className={styles.content}>
          <EstimateForm
            idPrefix="modal"
            onSuccessClose={handleClose}
            successCloseLabel="Return to Site"
          />
        </div>

      </div>
    </div>
  );
}
