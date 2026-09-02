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
        "Reforzar las competencias prácticas de los estudiantes de Ingeniería en Inteligencia Artificial e Ingeniería en Mecatrónica de la UTSJR mediante proyectos integradores multidisciplinarios en entornos reales de prueba y producción.",
      bullets: [
        "Desarrollo de prototipos funcionales integrando software inteligente y hardware físico.",
        "Generación de residencias profesionales, becas y estancias de investigación.",
        "Publicaciones científicas, patentes y portafolios altamente empleables.",
      ],
    },
    social: {
      title: "2. Objetivo Social / Formativo",
      icon: "🌱",
      badge: "Vinculación y Sociedad",
      description:
        "Ofrecer programas de alfabetización tecnológica, talleres STEM y cursos adaptados de IA y Robótica para niños, jóvenes y adultos de San Juan del Río y la región del Bajío.",
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
        "Generar ingresos propios institucionales a través de servicios de consultoría técnica especializada, desarrollo de software a medida, automatización e instrucción ejecutiva in-company para el parque industrial local.",
      bullets: [
        "Plataforma de servicios tecnológicos UTSJR habilitada para facturación.",
        "Mantenimiento predictivo, visión artificial e inspección industrial de calidad.",
        "Reinversión directa en actualización de infraestructura y equipamiento de laboratorio.",
      ],
    },
  };

  const stats = [
    { number: "2028", label: "Visión: Laboratorio Líder en Transferencia Tecnológica en el Bajío" },
    { number: "2", label: "Carreras Clave: Ing. en IA e Ing. en Mecatrónica" },
    { number: "3", label: "Ejes de Impacto: Académico, Social e Industrial" },
    { number: "100%", label: "Prototipado e Integración Hardware-Software" },
  ];

  return (
    <section id="general" className={styles.about}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Sección 1
          </span>
          <h2 className="section-title" style={{ marginTop: "4px" }}>
            Información General y <span className="text-gradient">Alineación Académica</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            <strong>"Centro de Innovación y Laboratorio de Inteligencia Artificial Aplicada (LabIA-UTSJR)"</strong>
            <br />
            Enfoque: IA, Robótica, Automatización e Industria 4.0
          </p>
        </div>

        {/* Justification Card */}
        <div className={styles.introWrapper}>
          <div className={styles.mascotWrapper}>
            <img src="/mascot_ai.png" alt="Mascota Lobo UTSJR IA" className={styles.mascotImg} />
          </div>
          <div className={styles.introText}>
            <div style={{ display: "inline-block", background: "rgba(0, 104, 55, 0.15)", color: "var(--accent)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.8rem", fontWeight: "700", marginBottom: "12px" }}>
              1.2 Justificación Estratégica
            </div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#fff", marginBottom: "12px" }}>
              Fusión de Hardware Físico y Software Inteligente
            </h3>
            <p className={styles.introParagraph}>
              La Universidad Tecnológica de San Juan del Río cuenta con las carreras de <strong>Ingeniería en Inteligencia Artificial</strong> e <strong>Ingeniería en Mecatrónica</strong>. La creación del <strong>LabIA-UTSJR</strong> responde a la oportunidad de fusionar el software inteligente con la robótica física y la automatización industrial, posicionando a la universidad como un referente tecnológico en San Juan del Río y el estado de Querétaro.
            </p>
            <p className={styles.introParagraph}>
              El laboratorio no solo funciona como espacio de prácticas universitarias, sino como un <strong>nodo de innovación abierta y servicios tecnológicos</strong> para el sector industrial, PyMEs, instituciones educativas y el público en general.
            </p>
          </div>
        </div>

        {/* Misión y Visión Cards */}
        <div className={styles.modelGrid}>
          <div className={`glass glass-hover ${styles.modelCard}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className={styles.cardIcon}>🎯</span>
              <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--accent)", textTransform: "uppercase" }}>Declaración</span>
            </div>
            <h3 className={styles.cardTitle}>Misión</h3>
            <p className={styles.cardDescription}>
              Desarrollar talento, prototipos y soluciones tecnológicas basadas en Inteligencia Artificial y Mecatrónica, impulsando la educación práctica y la competitividad de las empresas regionales.
            </p>
          </div>

          <div className={`glass glass-hover ${styles.modelCard}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className={styles.cardIcon}>🚀</span>
              <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--secondary)", textTransform: "uppercase" }}>Meta 2028</span>
            </div>
            <h3 className={styles.cardTitle}>Visión</h3>
            <p className={styles.cardDescription}>
              Ser el laboratorio universitario líder en la región del Bajío en transferencia de tecnología de IA, automatización inteligente e Industria 4.0 para el año 2028.
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
