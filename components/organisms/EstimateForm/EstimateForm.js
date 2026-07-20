"use client";

import { useState, useSyncExternalStore } from "react";
import styles from "./EstimateForm.module.css";

const TOTAL_STEPS = 6;

const STEP_TITLES = [
  "Tell us about you",
  "Property Information",
  "Home Details",
  "Select Your Service",
  "Help Us Estimate Your Home",
  "Additional Information",
];

const PROPERTY_TYPES = ["House", "Condo", "Apartment", "Townhome"];

const SERVICES = [
  "Deep Cleaning",
  "Recurring Cleaning",
  "Move In / Move Out",
  "Carpet Cleaning",
  "Laundry Rescue",
  "Airbnb Turnover",
  "Office Cleaning",
];

const ESTIMATE_OPTIONS = [
  { value: "photos", title: "Upload Photos", tag: "Recommended" },
  { value: "video", title: "Upload a Short Video" },
  { value: "walkthrough", title: "Schedule a Virtual Walkthrough" },
];

const ADDITIONAL_PLACEHOLDER = [
  "Do you have pets?",
  "Are there any heavily soiled or neglected areas?",
  "Any special cleaning requests?",
  "Gate code or access instructions?",
  "Any rooms or areas you'd like us to focus on?",
  "Anything else that may help us prepare the most accurate estimate.",
].join("\n");

const INITIAL_DATA = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  zip: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  sqft: "",
  services: [],
  estimateMethod: "",
  photos: [],
  video: null,
  additionalInfo: "",
};

/*
 * Shared store: every EstimateForm instance (hero, home section, modal)
 * reads and writes the same data + step, so filling one form updates
 * the others and the visitor never types the same info twice.
 */
let store = { data: INITIAL_DATA, step: 1 };
const listeners = new Set();

const subscribe = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const getSnapshot = () => store;

const updateStore = (patch) => {
  store = { ...store, ...patch };
  listeners.forEach((listener) => listener());
};

/**
 * Shared 6-step estimate wizard.
 * variant: "light" (white cards/modal) | "glass" (transparent over video — hero)
 * idPrefix: keeps input ids unique when the form renders more than once per page
 * onSuccessClose + successCloseLabel: override the success button (e.g. close a modal);
 * without it the button resets the wizard for a new request.
 */
export default function EstimateForm({
  variant = "light",
  idPrefix = "estimate",
  onSuccessClose,
  successCloseLabel,
}) {
  // Data and step live in the shared store (synced across all instances);
  // "submitted" stays local so a success in the modal doesn't flip the hero card.
  const { data: formData, step } = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const [submitted, setSubmitted] = useState(false);

  const setFormData = (next) => {
    updateStore({ data: typeof next === "function" ? next(store.data) : next });
  };

  const setStep = (next) => {
    updateStore({ step: next });
  };

  const glass = variant === "glass" ? styles.glass : "";

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleReset = () => {
    setSubmitted(false);
    updateStore({ data: INITIAL_DATA, step: 1 });
  };

  // "Next" is a submit button so the browser validates only the fields
  // mounted for the current step; the real submit happens on the last step.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={`${styles.successMessage} ${glass}`}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.successIcon}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h4 className={styles.successHeading}>Quote Request Received</h4>
        <p className={styles.successText}>
          Thank you for choosing JUC29. Our coordinator will contact you in less than 2 hours to confirm detailing variables.
        </p>
        <button
          type="button"
          className={styles.successCloseBtn}
          onClick={onSuccessClose || handleReset}
        >
          {successCloseLabel || "New Request"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${glass}`}>

      {/* Step progress */}
      <div className={styles.stepMeta}>
        <span className={styles.stepCount}>Step {step} of {TOTAL_STEPS}</span>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          ></div>
        </div>
        <h4 className={styles.stepTitle}>{STEP_TITLES[step - 1]}</h4>
      </div>

      {/* ─── Step 1 — Tell us about you ─── */}
      {step === 1 && (
        <>
          <div className={styles.inputGroup}>
            <label htmlFor={`${idPrefix}-fullname`} className={styles.fieldLabel}>Full Name*</label>
            <input
              type="text"
              id={`${idPrefix}-fullname`}
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor={`${idPrefix}-phone`} className={styles.fieldLabel}>Mobile Phone*</label>
            <input
              type="tel"
              id={`${idPrefix}-phone`}
              required
              placeholder="(813) 555-0100"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor={`${idPrefix}-email`} className={styles.fieldLabel}>Email*</label>
            <input
              type="email"
              id={`${idPrefix}-email`}
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.input}
            />
          </div>
        </>
      )}

      {/* ─── Step 2 — Property Information ─── */}
      {step === 2 && (
        <>
          <div className={styles.inputGroup}>
            <label htmlFor={`${idPrefix}-address`} className={styles.fieldLabel}>Property Address*</label>
            <input
              type="text"
              id={`${idPrefix}-address`}
              required
              placeholder="Start typing your address..."
              autoComplete="street-address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor={`${idPrefix}-city`} className={styles.fieldLabel}>City</label>
              <input
                type="text"
                id={`${idPrefix}-city`}
                placeholder="Tampa"
                autoComplete="address-level2"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor={`${idPrefix}-zip`} className={styles.fieldLabel}>ZIP Code</label>
              <input
                type="text"
                id={`${idPrefix}-zip`}
                placeholder="33601"
                autoComplete="postal-code"
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>
        </>
      )}

      {/* ─── Step 3 — Home Details ─── */}
      {step === 3 && (
        <>
          <div className={styles.inputGroup}>
            <span className={styles.fieldLabel}>Property Type</span>
            <div className={styles.typeGrid}>
              {PROPERTY_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`${styles.typePill} ${formData.propertyType === type ? styles.typePillActive : ""}`}
                  onClick={() => setFormData({ ...formData, propertyType: type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor={`${idPrefix}-bedrooms`} className={styles.fieldLabel}>Bedrooms</label>
              <select
                id={`${idPrefix}-bedrooms`}
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                className={styles.select}
              >
                <option value="">How many bedrooms?</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5 Bedrooms</option>
                <option value="6+">6+ Bedrooms</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor={`${idPrefix}-bathrooms`} className={styles.fieldLabel}>Bathrooms</label>
              <select
                id={`${idPrefix}-bathrooms`}
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                className={styles.select}
              >
                <option value="">How many bathrooms?</option>
                <option value="1">1 Bathroom</option>
                <option value="1.5">1.5 Bathrooms</option>
                <option value="2">2 Bathrooms</option>
                <option value="2.5">2.5 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="3.5">3.5 Bathrooms</option>
                <option value="4+">4+ Bathrooms</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor={`${idPrefix}-sqft`} className={styles.fieldLabel}>Approximate Square Footage</label>
            <input
              type="text"
              id={`${idPrefix}-sqft`}
              placeholder="e.g. 2500"
              value={formData.sqft}
              onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
              className={styles.input}
            />
          </div>
        </>
      )}

      {/* ─── Step 4 — Select Your Service ─── */}
      {step === 4 && (
        <div className={styles.serviceList}>
          {SERVICES.map((service) => (
            <label
              key={service}
              className={`${styles.serviceItem} ${formData.services.includes(service) ? styles.serviceItemActive : ""}`}
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => toggleService(service)}
                className={styles.serviceCheckbox}
              />
              <span className={styles.serviceCheckmark} aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {service}
            </label>
          ))}
        </div>
      )}

      {/* ─── Step 5 — Help Us Estimate Your Home ─── */}
      {step === 5 && (
        <>
          <p className={styles.stepHint}>Choose one option:</p>
          <div className={styles.optionList}>
            {ESTIMATE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`${styles.optionCard} ${formData.estimateMethod === option.value ? styles.optionCardActive : ""}`}
              >
                <input
                  type="radio"
                  name={`${idPrefix}-estimateMethod`}
                  value={option.value}
                  checked={formData.estimateMethod === option.value}
                  onChange={() => setFormData({ ...formData, estimateMethod: option.value })}
                  className={styles.optionRadio}
                />
                <span className={styles.optionDot} aria-hidden="true"></span>
                <span className={styles.optionTitle}>
                  {option.title}
                  {option.tag && <em className={styles.optionTag}>({option.tag})</em>}
                </span>
              </label>
            ))}
          </div>

          {formData.estimateMethod === "photos" && (
            <div className={styles.inputGroup}>
              <label htmlFor={`${idPrefix}-photos`} className={styles.fieldLabel}>Upload your photos</label>
              <input
                type="file"
                id={`${idPrefix}-photos`}
                accept="image/*"
                multiple
                onChange={(e) => setFormData({ ...formData, photos: Array.from(e.target.files) })}
                className={styles.fileInput}
              />
            </div>
          )}

          {formData.estimateMethod === "video" && (
            <div className={styles.inputGroup}>
              <label htmlFor={`${idPrefix}-video`} className={styles.fieldLabel}>Upload a short video</label>
              <input
                type="file"
                id={`${idPrefix}-video`}
                accept="video/*"
                onChange={(e) => setFormData({ ...formData, video: e.target.files[0] || null })}
                className={styles.fileInput}
              />
            </div>
          )}

          <p className={styles.helperNote}>
            Don&apos;t have photos? No problem. We can schedule a quick virtual walkthrough instead.
          </p>
        </>
      )}

      {/* ─── Step 6 — Additional Information ─── */}
      {step === 6 && (
        <div className={styles.inputGroup}>
          <label htmlFor={`${idPrefix}-additional`} className={styles.fieldLabel}>
            Is there anything else you&apos;d like us to know?
          </label>
          <textarea
            id={`${idPrefix}-additional`}
            placeholder={ADDITIONAL_PLACEHOLDER}
            value={formData.additionalInfo}
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            className={styles.textarea}
          ></textarea>
        </div>
      )}

      {/* Step Navigation */}
      <div className={styles.navRow}>
        {step > 1 && (
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
        <button type="submit" className={styles.submitBtn}>
          {step < TOTAL_STEPS ? "Next" : "Get My Free Quote"}
        </button>
      </div>

    </form>
  );
}
