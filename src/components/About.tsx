"use client";

import { useState } from "react";
import styles from "./About.module.css";

type TabType = "academico" | "social" | "comercial";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("academico");

  const strategicObjectives = {
    academico: {
      title: "1. Objetivo Académico",
      icon: "🎓",
      badge: "Formación de Excelencia",
      description:
        "Fortalecer las competencias prácticas e interdisciplinarias de los estudiantes de la UTSJR. Con base en Tecnologías de la Información (IA) y Mecatrónica, promoviendo la integración transversal con carreras como Química, Mantenimiento Industrial y Gestión de Negocios en proyectos de impacto real.",
      bullets: [
        "Desarrollo de prototipos funcionales integrando software inteligente, sensórica y hardware físico.",
        "Generación de residencias profesionales, estancias de investigación y semilleros de talento.",
        "Publicaciones técnicas, proyectos integradores y portafolios altamente competitivos.",
      ],
    },
    social: {
      title: "2. Objetivo Social / Formativo",
      icon: "🌱",
      badge: "Vinculación y Sociedad",
      description:
        "Ofrecer programas de alfabetización tecnológica, talleres STEM y cursos adaptados de IA y Robótica para niños, jóvenes y profesionistas de San Juan del Río y la región del Bajío.",
      bullets: [
        "Semilleros STEM e IA Kids para edades tempranas (8 a 17 años).",
        "Reducción de la brecha digital y democratización de la inteligencia artificial.",
        "Fomento de vocaciones científicas y tecnológicas regionales.",
      ],
    },
    comercial: {
      title: "3. Objetivo Comercial / Tecnológico",
      icon: "💼",
      badge: "Sostenibilidad & Industria",
      description:
        "Generar valor institucional mediante consultoría técnica especializada, desarrollo de soluciones tecnológicas a medida, automatización y capacitación ejecutiva para el parque industrial.",
      bullets: [
        "Plataforma de vinculación tecnológica y servicios especializados UTSJR.",
        "Mantenimiento predictivo, visión artificial e inspección industrial de procesos.",
        "Reinversión continua en infraestructura, equipamiento y becas estudiantiles.",
      ],
    },
  };

  const stats = [
    { number: "2028", label: "Visión: Centro Líder en Transferencia Tecnológica en el Bajío" },
    { number: "Transversal", label: "Abierto a todas las carreras con base en TI y Mecatrónica" },
    { number: "3", label: "Ejes de Impacto: Académico, Social e Industrial" },
    { number: "100%", label: "Proyectos Aplicados e Integración Hardware-Software" },
  ];

  return (
    <section id="general" className={styles.about}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "var(--secondary)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Información Institucional
          </span>
          <h2 className="section-title" style={{ marginTop: "4px" }}>
            Alineación Académica y <span className="text-gradient">Propósito Estratégico</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            <strong>Centro de Innovación e IA Aplicada</strong>
            <br />
            Enfoque: Inteligencia Artificial, Automatización, Robótica e Innovación Transversal
          </p>
        </div>

        {/* Justification Card */}
        <div className={styles.introWrapper}>
          <div className={styles.mascotWrapper}>
            <img src="/mascot_ai.png" alt="Mascota Lobo UTSJR IA" className={styles.mascotImg} />
          </div>
          <div className={styles.introText}>
            <div style={{ display: "inline-block", background: "rgba(16, 185, 129, 0.12)", color: "var(--secondary)", padding: "4px 12px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "700", marginBottom: "12px", alignSelf: "flex-start" }}>
              Justificación Estratégica
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff", marginBottom: "12px" }}>
              Innovación Transversal: Fusión de Hardware, Software y Procesos
            </h3>
            <p className={styles.introParagraph}>
              El <strong>Centro de Innovación e IA Aplicada</strong> nace con una sólida base técnica en las áreas de <strong>Tecnologías de la Información (Inteligencia Artificial)</strong> e <strong>Ingeniería en Mecatrónica</strong>, operando como un espacio <strong>abierto y transversal para todas las carreras</strong> de la Universidad Tecnológica de San Juan del Río.
            </p>
            <p className={styles.introParagraph}>
              Esta estructura multidisciplinaria permite abordar problemáticas complejas conectando la robótica y el software inteligente con la química de procesos, el mantenimiento industrial y la gestión estratégica de negocios, posicionando a la UTSJR como un nodo de innovación y servicios tecnológicos de alto impacto para la región.
            </p>
          </div>
        </div>

        {/* Misión y Visión Cards */}
        <div className={styles.modelGrid}>
          <div className={`glass glass-hover ${styles.modelCard}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className={styles.cardIcon}>🎯</span>
              <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--secondary)", textTransform: "uppercase" }}>Declaración</span>
            </div>
            <h3 className={styles.cardTitle}>Misión</h3>
            <p className={styles.cardDescription}>
              Desarrollar talento multidisciplinario, prototipos y soluciones tecnológicas aplicadas con Inteligencia Artificial y tecnologías emergentes, impulsando la educación práctica y la competitividad productiva regional.
            </p>
          </div>

          <div className={`glass glass-hover ${styles.modelCard}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className={styles.cardIcon}>🚀</span>
              <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--accent)", textTransform: "uppercase" }}>Meta 2028</span>
            </div>
            <h3 className={styles.cardTitle}>Visión</h3>
            <p className={styles.cardDescription}>
              Consolidarse como el centro universitario líder en la región del Bajío en transferencia tecnológica de IA aplicada, automatización y soluciones interdisciplinarias para el año 2028.
            </p>
          </div>
        </div>

        {/* Objectives Segment */}
        <div className={`glass ${styles.benefitSection}`} style={{ marginTop: "40px" }}>
          <div style={{ textTransform: "uppercase", fontSize: "0.8rem", fontWeight: "700", color: "var(--secondary)", textAlign: "center" }}>
            1.3 Objetivos Estratégicos
          </div>
          <h3 className={styles.benefitTitle}>
            Triangulación de <span className="text-gradient">Impacto Institucional</span>
          </h3>

          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tabButton} ${activeTab === "academico" ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab("academico")}
            >
              1. Académico
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "social" ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab("social")}
            >
              2. Social / Formativo
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "comercial" ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab("comercial")}
            >
              3. Comercial / Tecnológico
            </button>
          </div>

          <div className={styles.benefitContent} style={{ gridTemplateColumns: "1fr" }}>
            <div className={styles.benefitCard} style={{ flexDirection: "column", alignItems: "flex-start", gap: "12px", padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "2rem" }}>{strategicObjectives[activeTab].icon}</span>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--secondary)", textTransform: "uppercase" }}>
                    {strategicObjectives[activeTab].badge}
                  </span>
                  <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#fff" }}>
                    {strategicObjectives[activeTab].title}
                  </h4>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {strategicObjectives[activeTab].description}
              </p>

              <div style={{ width: "100%", height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "8px 0" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {strategicObjectives[activeTab].bullets.map((bullet, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((item, idx) => (
            <div key={idx} className={`glass ${styles.statCard}`}>
              <div className={`text-gradient ${styles.statNumber}`}>{item.number}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
