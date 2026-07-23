"use client";

import { useState } from "react";
import { Project } from "@/types";
import styles from "./ProjectsHub.module.css";
import SillSimulator from "./SillSimulator";

export default function ProjectsHub() {
  const [filter, setFilter] = useState("Todos");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "intelipark",
      title: "InteliPark",
      area: "Estacionamiento",
      problem: "Los estudiantes pierden un promedio de 5 minutos buscando lugar de estacionamiento en horas pico. Además, el uso de gafetes físicos genera demoras y riesgo de fraudes.",
      solution: "Cámara inteligente con reconocimiento automático de placas (OCR) conectada a sensores IoT mediante protocolo LoRa. Aplicación móvil que muestra el mapa de ocupación en tiempo real.",
      impact: "Reducción del 70% en el tiempo de búsqueda. Control de accesos ágil sin filas en la entrada del campus.",
      skills: ["Visión por Computadora", "Internet de las Cosas (IoT)", "Desarrollo Móvil", "Comunicaciones LoRa WAN"],
      tech: ["Python", "OpenCV", "Raspberry Pi", "LoRa Gateway", "Flutter"],
    },
    {
      id: "bioaccess",
      title: "BIOACCESS",
      area: "Seguridad",
      problem: "Las credenciales físicas universitarias se pierden, se dañan o se prestan entre personas. El registro manual en accesos especiales (como laboratorios) es lento e ineficiente.",
      solution: "Sistema de control de acceso mediante reconocimiento facial que utiliza una Red Neuronal Convolucional (CNN) optimizada para ejecutarse en hardware local.",
      impact: "Verificación segura y sin contacto en menos de 500 milisegundos con una precisión comprobada del 95.3%.",
      skills: ["Deep Learning", "Optimización de Modelos", "Edge Computing", "Ciberseguridad Biométrica"],
      tech: ["Python", "PyTorch", "NVIDIA Jetson Nano", "SQLite", "OpenCV"],
    },
    {
      id: "orion",
      title: "ORION",
      area: "Atención",
      problem: "El personal de servicios escolares e información no puede responder consultas las 24 horas. Los alumnos se enfrentan a largos tiempos de espera por dudas simples y repetitivas.",
      solution: "Asistente físico (robot de servicio escolar) acoplado a un motor conversacional inteligente con Procesamiento del Lenguaje Natural (PLN) e integración de síntesis de voz.",
      impact: "Atención automatizada 24/7. Reducción de carga administrativa en el personal escolar en consultas repetitivas.",
      skills: ["Procesamiento del Lenguaje Natural (NLP)", "Integración Hardware-Software", "Robótica Móvil", "APIs de Voz"],
      tech: ["Python", "Rasa NLU", "ROS (Robot Operating System)", "Arduino", "Text-to-Speech APIs"],
    },
    {
      id: "strupret-ia",
      title: "STRUPRET IA",
      area: "Civil",
      problem: "Los cálculos de esfuerzos estructurales en vigas y columnas de ingeniería civil son sumamente complejos. Los estudiantes suelen tardar horas en validar si cometieron un error de signo o de fórmula.",
      solution: "Software tutor inteligente para ingeniería civil que realiza cálculos estructurales automatizados y utiliza Inteligencia Artificial Explicativa (XAI) para desglosar y explicar paso a paso dónde se cometió el error.",
      impact: "Mejora del aprendizaje práctico en materias críticas. Reducción drástica en la deserción escolar en cálculo numérico.",
      skills: ["Inteligencia Artificial Explicativa (XAI)", "Cálculo Numérico Avanzado", "Ingeniería de Software", "Diseño UX/UI Científico"],
      tech: ["Python", "React", "SymPy", "Flask", "SciPy"],
    },
    {
      id: "sill-utsjr",
      title: "SILL-UTSJR",
      area: "Educación",
      problem: "El laboratorio de Realidad Virtual de la UTSJR se encuentra subutilizado (menos del 30% de capacidad). Las prácticas físicas iniciales en materias de circuitos electrónicos conllevan riesgos de daño a componentes costosos y cortocircuitos.",
      solution: "Laboratorio virtual adaptativo en Unreal Engine 5 para conectar sensores a Arduino. Utiliza un motor de Inteligencia Artificial con Lógica Difusa que ajusta la dificultad de las prácticas según el rendimiento del alumno.",
      impact: "Reducción esperada del 30% en el tiempo de aprendizaje y 40% menos errores graves en prácticas físicas reales. Activación del laboratorio VR del <30% a más del 80%.",
      skills: ["Realidad Virtual", "Motor de Inteligencia Artificial (Lógica Difusa)", "Bases de Datos Relacionales", "Integración de Sistemas Inmersivos"],
      tech: ["Unreal Engine 5", "C++", "Python", "Flask", "PostgreSQL", "Meta Quest 3/2"],
      hasSimulator: true,
    },
  ];

  const filters = ["Todos", "Estacionamiento", "Seguridad", "Atención", "Civil", "Educación"];

  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((p) => p.area === filter);

  return (
    <section id="proyectos" className={styles.hub}>
      <div className="container">
        <h2 className="section-title">
          Proyectos <span className="text-gradient">Estratégicos</span>
        </h2>
        <p className="section-subtitle">
          Explora los proyectos reales que desarrollan nuestros estudiantes. Soluciones directas a problemáticas
          del campus con tecnologías punteras.
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
