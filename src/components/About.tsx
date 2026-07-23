"use client";

import { useState } from "react";
import styles from "./About.module.css";

type TabType = "estudiante" | "utsjr";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("estudiante");

  const modelSteps = [
    {
      step: "01",
      icon: "🔍",
      title: "Detección",
      description: "Identificamos una necesidad o problema real en el campus de la UTSJR o en empresas asociadas que pueda resolverse mediante tecnología.",
    },
    {
      step: "02",
      icon: "💻",
      title: "Desarrollo",
      description: "Los estudiantes, guiados por mentores, diseñan y construyen la solución utilizando Inteligencia Artificial, Internet de las Cosas y Realidad Virtual.",
    },
    {
      step: "03",
      icon: "🚀",
      title: "Impacto",
      description: "La universidad implementa la solución y se beneficia directamente, mientras los estudiantes adquieren experiencia real y construyen un portafolio profesional.",
    },
  ];

  const studentBenefits = [
    { text: "Portafolio real con desarrollos implementados en producción", icon: "📁" },
    { text: "Habilidades prácticas avanzadas en IA, VR y Backend", icon: "🧠" },
    { text: "Experiencia en trabajo en equipo interdisciplinario (varias carreras)", icon: "👥" },
    { text: "Oportunidad de realizar publicaciones científicas y patentes", icon: "📝" },
    { text: "Desarrollo de competencias en simulación interactiva y robótica", icon: "🤖" },
  ];

  const utsjrBenefits = [
    { text: "Resolución de problemas críticos internos (seguridad, estacionamiento)", icon: "🔒" },
    { text: "Fomento de la innovación interna dentro de la misma universidad", icon: "💡" },
    { text: "Reducción de costos de software de terceros mediante desarrollo propio", icon: "📉" },
    { text: "Aumento del prestigio tecnológico a nivel estatal y nacional", icon: "🏆" },
    { text: "Activación del Laboratorio de Realidad Virtual (VR) a más del 80%", icon: "🥽" },
  ];

  const stats = [
    { number: "+35", label: "Estudiantes formados en IA Aplicada" },
    { number: "5", label: "Áreas del plantel UTSJR beneficiadas directamente" },
    { number: ">80%", label: "Tasa de uso del Laboratorio de Realidad Virtual" },
    { number: "6", label: "Prototipos listos para fase piloto" },
  ];

  return (
    <section id="nosotros" className={styles.about}>
      <div className="container">
        {/* Model Intro Card with Mascot */}
        <div className={styles.introWrapper}>
          <div className={styles.mascotWrapper}>
            <img src="/mascot_ai.png" alt="Mascota Lobo UTSJR IA" className={styles.mascotImg} />
          </div>
          <div className={styles.introText}>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "8px" }}>
              Nuestro Modelo: <span className="text-gradient">Aprender Haciendo</span>
            </h2>
            <p className={styles.introParagraph}>
              ¡Hola! Soy el Lobo, la mascota oficial de la <strong>UTSJR</strong>. En nuestro Taller de Inteligencia Artificial no nos limitamos a la teoría; creemos que la mejor manera de dominar la tecnología es resolviendo desafíos reales de nuestro propio campus.
            </p>
            <p className={styles.introParagraph}>
              Aquí, estudiantes de múltiples carreras colaboran para construir prototipos funcionales de IA, IoT y VR, beneficiando directamente a la universidad mientras ganan experiencia profesional invaluable.
            </p>
          </div>
        </div>

        <div className={styles.modelGrid}>
          {modelSteps.map((item, idx) => (
            <div key={idx} className={`glass glass-hover ${styles.modelCard}`}>
              <div className="flex-between" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <span style={{ fontSize: "1.2rem", fontWeight: "800", opacity: 0.15 }}>{item.step}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Segment */}
        <div className={`glass ${styles.benefitSection}`}>
          <h3 className={styles.benefitTitle}>
            Un Esquema con <span className="text-gradient">Doble Beneficio</span>
          </h3>

          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tabButton} ${activeTab === "estudiante" ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab("estudiante")}
            >
              Para el Estudiante
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "utsjr" ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab("utsjr")}
            >
              Para la UTSJR
            </button>
          </div>

          <div className={styles.benefitContent}>
            {activeTab === "estudiante"
              ? studentBenefits.map((item, idx) => (
                  <div key={idx} className={styles.benefitCard}>
                    <span className={styles.benefitIcon}>{item.icon}</span>
                    <span className={styles.benefitText}>{item.text}</span>
                  </div>
                ))
              : utsjrBenefits.map((item, idx) => (
                  <div key={idx} className={styles.benefitCard}>
                    <span className={styles.benefitIcon}>{item.icon}</span>
                    <span className={styles.benefitText}>{item.text}</span>
                  </div>
                ))}
          </div>
        </div>

        {/* Counters / Stats */}
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
