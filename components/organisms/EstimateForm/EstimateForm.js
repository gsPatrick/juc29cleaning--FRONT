"use client";

import { useState, useSyncExternalStore } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import styles from "./EstimateForm.module.css";

const TOTAL_STEPS = 9;

const STEP_TITLES = [
  "Property Type",
  "How many bedrooms?",
  "How many bathrooms?",
  "Approximate square footage",
  "Select Your Service",
  "Help Us Estimate Your Home",
  "Additional Information",
  "Property Address",
  "Your Contact Details",
];

const PROPERTY_TYPES = ["House", "Condo", "Apartment", "Townhome"];

const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5", "6+"];

const BATHROOM_OPTIONS = ["1", "1.5", "2", "2.5", "3", "3.5", "4+"];

const SQFT_OPTIONS = [
  "Under 1,000",
  "1,000–2,000",
  "2,000–3,000",
  "3,000–4,000",
  "4,000+",
];

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
 * Shared 9-step estimate wizard.
 * Options (buttons only) come first; typed contact details come last.
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

  // Phone is validated against the selected country's real numbering rules
  // (libphonenumber), so gibberish / wrong-length numbers can't get through.
  const phoneValid = !!formData.phone && isValidPhoneNumber(formData.phone);
  const showPhoneError = !!formData.phone && !phoneValid;

  // Button-select steps have no native validation, so gate "Next" on a choice.
  const canProceed = () => {
    switch (step) {
      case 1: return !!formData.propertyType;
      case 2: return !!formData.bedrooms;
      case 3: return !!formData.bathrooms;
      case 4: return !!formData.sqft;
      case 5: return formData.services.length > 0;
      case 6: return !!formData.estimateMethod;
      case 9: return phoneValid; // name/email use native "required"; phone must be valid
      default: return true; // notes are optional; address uses native "required"
    }
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

      {/* ─── Step 1 — Property Type ─── */}
      {step === 1 && (
        <div className={styles.inputGroup}>
          <span className={styles.fieldLabel}>What type of property is it?</span>
          <div className={styles.optionColumn}>
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                className={`${styles.optionBtn} ${formData.propertyType === type ? styles.optionBtnActive : ""}`}
                onClick={() => setFormData({ ...formData, propertyType: type })}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── Step 2 — Bedrooms ─── */}
      {step === 2 && (
        <div className={styles.inputGroup}>
          <span className={styles.fieldLabel}>Number of bedrooms</span>
          <div className={styles.optionColumn}>
            {BEDROOM_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                className={`${styles.optionBtn} ${formData.bedrooms === n ? styles.optionBtnActive : ""}`}
                onClick={() => setFormData({ ...formData, bedrooms: n })}
              >
                {n === "6+" ? "6 or more" : n} {n === "1" ? "Bedroom" : "Bedrooms"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── Step 3 — Bathrooms ─── */}
      {step === 3 && (
        <div className={styles.inputGroup}>
          <span className={styles.fieldLabel}>Number of bathrooms</span>
          <div className={styles.optionColumn}>
            {BATHROOM_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                className={`${styles.optionBtn} ${formData.bathrooms === n ? styles.optionBtnActive : ""}`}
                onClick={() => setFormData({ ...formData, bathrooms: n })}
              >
                {n === "4+" ? "4 or more" : n} {n === "1" ? "Bathroom" : "Bathrooms"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── Step 4 — Square Footage ─── */}
      {step === 4 && (
        <div className={styles.inputGroup}>
          <span className={styles.fieldLabel}>Approximate square footage</span>
          <div className={styles.optionColumn}>
            {SQFT_OPTIONS.map((range) => (
              <button
                key={range}
                type="button"
                className={`${styles.optionBtn} ${formData.sqft === range ? styles.optionBtnActive : ""}`}
                onClick={() => setFormData({ ...formData, sqft: range })}
              >
                {range} sq ft
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── Step 5 — Select Your Service ─── */}
      {step === 5 && (
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

      {/* ─── Step 6 — Help Us Estimate Your Home ─── */}
      {step === 6 && (
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

      {/* ─── Step 7 — Additional Information ─── */}
      {step === 7 && (
        <div className={styles.inputGroup}>
          <label htmlFor={`${idPrefix}-additional`} className={styles.fieldLabel}>
            Is there anything else you&apos;d like us to know? <em className={styles.optionalTag}>(optional)</em>
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

      {/* ─── Step 8 — Property Address ─── */}
      {step === 8 && (
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

      {/* ─── Step 9 — Your Contact Details ─── */}
      {step === 9 && (
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
            <label htmlFor={`${idPrefix}-phone`} className={styles.fieldLabel}>Phone Number*</label>
            <PhoneInput
              id={`${idPrefix}-phone`}
              international
              countryCallingCodeEditable={false}
              defaultCountry="US"
              placeholder="(813) 555-0100"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value || "" })}
              className={`${styles.phoneField} ${showPhoneError ? styles.phoneFieldError : ""}`}
            />
            {showPhoneError && (
              <p className={styles.phoneError}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Hmm… that phone number doesn&apos;t look right
              </p>
            )}
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
        <button type="submit" className={styles.submitBtn} disabled={!canProceed()}>
          {step < TOTAL_STEPS ? "Next" : "Get My Free Quote"}
        </button>
      </div>

    </form>
  );
}
