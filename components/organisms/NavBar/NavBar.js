"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Transparent-over-video state is exclusive to the home hero;
    // every other page uses the solid header from the start.
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    closeMenu();
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${isHome ? styles.homeHeader : styles.subHeader}`}>
      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <img src="/images/logo-mark.png" alt="JUC29 Cleaning" className={styles.logoImg} />
            <span className={styles.logoTagline}>Cleaning &amp; Carpet Care</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/why-us" className={styles.navLink}>Why Us</Link>
            <Link href="/reviews" className={styles.navLink}>Reviews</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>

          {/* CTA Action */}
          <div className={styles.navActions}>
            <button onClick={handleBookNow} className={styles.ctaButton}>
              Get My Free Quote
</button>
          </div>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.mobileDrawerActive : ""}`}>
        <div className={styles.mobileLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link>
          <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>Services</Link>
          <Link href="/why-us" className={styles.mobileNavLink} onClick={closeMenu}>Why Us</Link>
          <Link href="/reviews" className={styles.mobileNavLink} onClick={closeMenu}>Reviews</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link>
          <button onClick={handleBookNow} className={`${styles.ctaButton} ${styles.mobileCta}`}>
            Get My Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
