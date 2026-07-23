"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon}>💡</span>
          <span>
            Taller<span className={styles.logoSub}>IA</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="#inicio" className={styles.navLink}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" className={styles.navLink}>
              Modelo
            </a>
          </li>
          <li>
            <a href="#proyectos" className={styles.navLink}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#metodologia" className={styles.navLink}>
              Metodología
            </a>
          </li>
          <li>
            <a href="#equipamiento" className={styles.navLink}>
              Equipamiento
            </a>
          </li>
          <li>
            <a href="#postularse" className={styles.navLink}>
              Postularse
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#postularse">
          <button className={styles.ctaBtn}>¡Únete al Taller!</button>
        </a>

        {/* Mobile Menu Hamburger Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Abrir menú">
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Dropdown Menu */}
        <ul className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
          <li>
            <a href="#inicio" className={styles.navLink} onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" className={styles.navLink} onClick={closeMenu}>
              Modelo
            </a>
          </li>
          <li>
            <a href="#proyectos" className={styles.navLink} onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#metodologia" className={styles.navLink} onClick={closeMenu}>
              Metodología
            </a>
          </li>
          <li>
            <a href="#equipamiento" className={styles.navLink} onClick={closeMenu}>
              Equipamiento
            </a>
          </li>
          <li>
            <a href="#postularse" className={styles.navLink} onClick={closeMenu}>
              Postularse
            </a>
          </li>
          <li>
            <a
              href="#postularse"
              className={styles.ctaBtn}
              style={{ display: "block", textAlign: "center", marginTop: "10px" }}
              onClick={closeMenu}
            >
              ¡Únete al Taller!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
