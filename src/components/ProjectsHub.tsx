"use client";

import { useState } from "react";
import { Project } from "@/types";
import styles from "./ProjectsHub.module.css";
import SillSimulator from "./SillSimulator";

export default function ProjectsHub() {
  const [activeAxis, setActiveAxis] = useState<"eje1" | "eje2" | "eje3">("eje1");
  const [filter, setFilter] = useState("Todos");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const catalogAxes = {
    eje1: {
      number: "Eje 1",
      title: "Educación y Talleres",
      icon: "🎓",
      color: "var(--primary)",
      description: "Formación de competencias STEM, programas técnicos y capacitaciones ejecutivas para la comunidad y la industria.",
      items: [
        {
          badge: "Niños y Jóvenes (8 - 17 años)",
          title: "Semillero STEM, IA Kids & Robótica Educativa",
          details: "Introducción lúdica a la programación, desarrollo del pensamiento lógico y cursos interactivos de '¿Cómo piensan las máquinas?'.",
          tags: ["Robótica Educativa", "IA Kids", "Pensamiento Lógico", "Scratch & Python"],
        },
        {
          badge: "Estudiantes & Profesionistas",
          title: "Talleres de Especialización Técnica",
          details: "Cursos prácticos intensivos: Python y Aprendizaje Automático desde cero, Visión por Computadora aplicada a Robótica (OpenCV + ROS2), y Edge AI.",
          tags: ["Python ML", "OpenCV", "ROS2", "Edge AI", "Prompts & IA Generativa"],
        },
        {
          badge: "Ejecutivos & Mandos Medios",
          title: "Diplomados y Bootcamps Ejecutivos",
          details: "Capacitación corporativa en Analítica Avanzada de Datos, Inteligencia de Negocios e Implementación de IA en Procesos de Manufactura.",
          tags: ["Business Intelligence", "IA en Manufactura", "Analítica de Datos", "Transformación Digital"],
        },
      ],
    },
    eje2: {
      number: "Eje 2",
      title: "Experimentación y Prototipado",
      icon: "🤖",
      color: "var(--secondary)",
      description: "Integración de hardware mecatrónico y modelos de inteligencia artificial para prototipos físicos funcionales.",
      items: [
        {
          badge: "Robótica Colaborativa",
          title: "Robótica Asistida por Visión Artificial",
          details: "Control de brazos robóticos didácticos e industriales mediante algoritmos de visión por computadora para clasificación automática de piezas (Pick & Place).",
          tags: ["Pick & Place", "Visión Artificial", "Brazos Robóticos", "ROS2"],
        },
        {
          badge: "IIoT & Analítica",
          title: "Mantenimiento Predictivo & Gemelos Digitales",
          details: "Captura de datos de sensores industriales en tiempo real mediante protocolos MQTT/OPC-UA para detección temprana de anomalías en maquinaria.",
          tags: ["IIoT", "OPC-UA", "Gemelos Digitales", "Detección de Anomalías"],
        },
        {
          badge: "Logística Inteligente",
          title: "Sistemas Autónomos Móviles (AMRs)",
          details: "Prototipado de vehículos guiados autónomos para optimización de transporte logístico en talleres e instalaciones industriales.",
          tags: ["AMRs", "Navegación SLAM", "Sensores LiDAR", "Logística 4.0"],
        },
      ],
    },
    eje3: {
      number: "Eje 3",
      title: "Servicios Tecnológicos a Empresas",
      icon: "🏭",
      color: "var(--accent)",
      description: "Transferencia tecnológica y desarrollo a medida para PyMEs e industrias locales de San Juan del Río y el Bajío.",
      items: [
        {
          badge: "Control de Calidad",
          title: "Inspección Automática por Visión Computacional",
          details: "Desarrollo e integración de sistemas de visión por computadora para detección de defectos superficiales y validación dimensional en líneas de producción.",
          tags: ["Defect Detection", "Visión Industrial", "Zero-Defect", "Cámaras Industriales"],
        },
        {
          badge: "Optimización Operativa",
          title: "Optimizadores de Inventario y Cadena de Suministro",
          details: "Modelos predictivos de demanda basados en analítica avanzada y algoritmos de optimización para reducir mermas y tiempos de entrega.",
          tags: ["Demand Forecasting", "Optimización de Inventario", "Machine Learning", "Supply Chain"],
        },
        {
          badge: "Estrategia Tecnológica",
          title: "Consultoría en Transformación Digital e IA",
          details: "Evaluación de madurez tecnológica, diagnósticos in-company y diseño de planes de ruta para la adopción segura de IA e Industria 4.0.",
          tags: ["Diagnóstico Tecnológico", "In-Company", "Consultoría IA", "Industria 4.0"],
        },
      ],
    },
  };

  const projects: Project[] = [
    {
      id: "intelipark",
      title: "InteliPark",
      area: "Estacionamiento",
      problem: "Los estudiantes pierden tiempo buscando lugar de estacionamiento en horas pico y el uso de gafetes físicos genera demoras y riesgo de fraudes.",
      solution: "Cámara inteligente con reconocimiento automático de placas (OCR) conectada a sensores IoT mediante protocolo LoRa y aplicación móvil en tiempo real.",
      impact: "Reducción del 70% en el tiempo de búsqueda y control de accesos ágil sin filas en la entrada del campus.",
      skills: ["Visión por Computadora", "Internet de las Cosas (IoT)", "Desarrollo Móvil", "Comunicaciones LoRa WAN"],
      tech: ["Python", "OpenCV", "Raspberry Pi", "LoRa Gateway", "Flutter"],
    },
    {
      id: "bioaccess",
      title: "BIOACCESS",
      area: "Seguridad",
      problem: "Las credenciales físicas se pierden o dañan, y el registro manual en accesos a laboratorios especiales es lento e ineficiente.",
      solution: "Sistema de control de acceso por reconocimiento facial con Red Neuronal Convolucional (CNN) optimizada para hardware local.",
      impact: "Verificación biométrica segura en menos de 500ms con precisión comprobada del 95.3%.",
      skills: ["Deep Learning", "Optimización de Modelos", "Edge Computing", "Ciberseguridad Biométrica"],
      tech: ["Python", "PyTorch", "NVIDIA Jetson Nano", "SQLite", "OpenCV"],
    },
    {
      id: "orion",
      title: "ORION",
      area: "Atención",
      problem: "Servicios escolares recibe consultas repetitivas continuas que saturan al personal en ventanilla.",
      solution: "Asistente físico (robot de servicio escolar) acoplado a un motor conversacional NLP con síntesis de voz.",
      impact: "Atención automatizada 24/7 y reducción sustancial de carga administrativa.",
      skills: ["NLP", "Integración Hardware-Software", "Robótica Móvil", "APIs de Voz"],
      tech: ["Python", "Rasa NLU", "ROS (Robot Operating System)", "Arduino", "TTS APIs"],
    },
    {
      id: "strupret-ia",
      title: "STRUPRET IA",
      area: "Civil",
      problem: "Cálculos de esfuerzos estructurales numéricos complejos en ingeniería civil provocan retrasos y dudas conceptuales.",
      solution: "Software tutor inteligente con IA Explicativa (XAI) para desglosar cálculos estructurales y explicar paso a paso los errores.",
      impact: "Mejora del aprendizaje práctico y reducción drástica en deserción escolar en materias de cálculo numérico.",
      skills: ["Inteligencia Artificial Explicativa (XAI)", "Cálculo Numérico Avanzado", "Ingeniería de Software"],
      tech: ["Python", "React", "SymPy", "Flask", "SciPy"],
    },
    {
      id: "sill-utsjr",
      title: "SILL-UTSJR",
      area: "Educación",
      problem: "Las prácticas iniciales físicas en circuitos electrónicos conllevan riesgos de daño a componentes costosos y el laboratorio VR requería mayor aprovechamiento.",
      solution: "Laboratorio virtual adaptativo en Unreal Engine 5 acoplado a un motor de IA con Lógica Difusa que ajusta la dificultad de las prácticas según el rendimiento del alumno.",
      impact: "Reducción del 30% en el tiempo de aprendizaje y 40% menos errores en prácticas reales. Incremento en el uso del laboratorio VR a más del 80%.",
      skills: ["Realidad Virtual", "Motor de Inteligencia Artificial (Lógica Difusa)", "Bases de Datos Relacionales"],
      tech: ["Unreal Engine 5", "C++", "Python", "Flask", "PostgreSQL", "Meta Quest 3/2"],
      hasSimulator: true,
    },
  ];

  const filters = ["Todos", "Estacionamiento", "Seguridad", "Atención", "Civil", "Educación"];

  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((p) => p.area === filter);

  return (
    <section id="servicios" className={styles.hub}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Sección 2
          </span>
          <h2 className="section-title" style={{ marginTop: "4px" }}>
            Oferta de Servicios <span className="text-gradient">LabIA-UTSJR</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            Portafolio diversificado articulado en tres ejes fundamentales de desarrollo y transferencia tecnológica.
          </p>
        </div>

        {/* 3 Axes Selector */}
        <div className={styles.filters} style={{ marginBottom: "32px" }}>
          <button
            className={`${styles.filterBtn} ${activeAxis === "eje1" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveAxis("eje1")}
          >
            1. Educación y Talleres
          </button>
          <button
            className={`${styles.filterBtn} ${activeAxis === "eje2" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveAxis("eje2")}
          >
            2. Experimentación y Prototipado
          </button>
          <button
            className={`${styles.filterBtn} ${activeAxis === "eje3" ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveAxis("eje3")}
          >
            3. Servicios Tecnológicos a Empresas
          </button>
        </div>

        {/* Active Axis Content Card */}
        <div className="glass" style={{ padding: "32px", marginBottom: "60px", borderRadius: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "2.5rem" }}>{catalogAxes[activeAxis].icon}</span>
            <div>
              <span style={{ color: catalogAxes[activeAxis].color, fontWeight: "800", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.08em" }}>
                {catalogAxes[activeAxis].number}
              </span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff" }}>
                {catalogAxes[activeAxis].title}
              </h3>
            </div>
          </div>
          
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: "28px", maxWidth: "800px" }}>
            {catalogAxes[activeAxis].description}
          </p>

          <div className={styles.grid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {catalogAxes[activeAxis].items.map((item, idx) => (
              <div key={idx} className="glass" style={{ padding: "24px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <span style={{ display: "inline-block", background: "rgba(0, 104, 55, 0.2)", color: "var(--accent)", fontSize: "0.75rem", fontWeight: "700", padding: "4px 10px", borderRadius: "6px", marginBottom: "12px" }}>
                  {item.badge}
                </span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "16px" }}>
                  {item.details}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.tags.map((t) => (
                    <span key={t} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Projects Showcase Sub-section */}
        <div style={{ marginTop: "40px" }}>
          <h3 className="section-title" style={{ fontSize: "1.8rem", textAlign: "center", marginBottom: "8px" }}>
            Prototipos y Demostradores <span className="text-gradient">Integrados</span>
          </h3>
          <p className="section-subtitle" style={{ marginBottom: "24px" }}>
            Ejemplos de proyectos reales desarrollados por estudiantes de Ing. en IA e Ing. en Mecatrónica.
          </p>

          {/* Filter Buttons */}
          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${filter === f ? styles.filterBtnActive : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid of Projects */}
          <div className={styles.grid}>
            {filteredProjects.map((p) => (
              <div key={p.id} className={`glass glass-hover ${styles.card}`}>
                <div>
                  <div className={styles.cardHeader}>
                    <span className={styles.areaTag}>{p.area}</span>
                    <span style={{ fontSize: "1.2rem" }}>
                      {p.id === "intelipark" ? "🚗" : p.id === "bioaccess" ? "👤" : p.id === "orion" ? "🤖" : p.id === "strupret-ia" ? "📐" : "🥽"}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardProblem}>{p.problem}</p>
                  <div className={styles.techTags}>
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && <span className={styles.techTag}>+{p.tech.length - 3}</span>}
                  </div>
                </div>
                <button className={styles.viewBtn} onClick={() => setActiveProject(p)}>
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className={styles.modalOverlay} onClick={() => setActiveProject(null)}>
          <div className={`glass ${styles.modalContent}`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveProject(null)}>
              ✕
            </button>

            <div className={styles.modalHeader}>
              <h3 className={`text-gradient ${styles.modalTitle}`}>{activeProject.title}</h3>
              <div className={styles.modalMeta}>
                <span className={styles.areaTag}>{activeProject.area}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Base Tecnológica: {activeProject.tech.join(" • ")}
                </span>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>El Problema</h4>
                <p className={styles.detailText}>{activeProject.problem}</p>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>La Solución con IA</h4>
                <p className={styles.detailText}>{activeProject.solution}</p>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Impacto Obtenido</h4>
                <p className={styles.detailText}>{activeProject.impact}</p>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Habilidades que Aporta</h4>
                <div className={styles.skillsTags}>
                  {activeProject.skills.map((s) => (
                    <span key={s} className={styles.skillsTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* SILL Simulator Integration */}
              {activeProject.hasSimulator && (
                <div className={styles.detailSection} style={{ marginTop: "16px" }}>
                  <h4 className={styles.detailTitle}>Simulación de Funcionamiento</h4>
                  <p className={styles.detailText} style={{ marginBottom: "12px" }}>
                    Interactúa directamente con las reglas de dificultad adaptativa de este proyecto. Observa cómo responde el motor de lógica difusa a las interacciones del estudiante:
                  </p>
                  <SillSimulator />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
