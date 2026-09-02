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
          <span className={styles.logoIcon}>🤖</span>
          <span>
            LabIA<span className={styles.logoSub}>-UTSJR</span>
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
            <a href="#general" className={styles.navLink}>
              1. Info General
            </a>
          </li>
          <li>
            <a href="#servicios" className={styles.navLink}>
              2. Servicios
            </a>
          </li>
          <li>
            <a href="#infraestructura" className={styles.navLink}>
              3. Equipamiento
            </a>
          </li>
          <li>
            <a href="#operacion" className={styles.navLink}>
              4. Operación
            </a>
          </li>
          <li>
            <a href="#postularse" className={styles.navLink}>
              Vinculación
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#postularse">
          <button className={styles.ctaBtn}>Servicios e Industria</button>
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
            <a href="#general" className={styles.navLink} onClick={closeMenu}>
              1. Info General
            </a>
          </li>
          <li>
            <a href="#servicios" className={styles.navLink} onClick={closeMenu}>
              2. Servicios
            </a>
          </li>
          <li>
            <a href="#infraestructura" className={styles.navLink} onClick={closeMenu}>
              3. Equipamiento
            </a>
          </li>
          <li>
            <a href="#operacion" className={styles.navLink} onClick={closeMenu}>
              4. Operación
            </a>
          </li>
          <li>
            <a href="#postularse" className={styles.navLink} onClick={closeMenu}>
              Vinculación
            </a>
          </li>
          <li>
            <a
              href="#postularse"
              className={styles.ctaBtn}
              style={{ display: "block", textAlign: "center", marginTop: "10px" }}
              onClick={closeMenu}
            >
              Servicios e Industria
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
