import styles from "./Methodology.module.css";

export default function Methodology() {
  const steps = [
    {
      phase: "Fase 1",
      title: "Fundamentos y Capacitación",
      duration: "4 Semanas",
      desc: "Introducción intensiva y nivelación técnica en programación con Python, bases teóricas de redes neuronales artificiales, fundamentos de Realidad Virtual (Unreal Engine 5) y desarrollo backend.",
    },
    {
      phase: "Fase 2",
      title: "Formación de Equipos",
      duration: "1 Semana",
      desc: "Asignación de estudiantes a los proyectos estratégicos del Taller (2-3 integrantes por equipo sugerido) según perfiles, carreras e intereses de especialización.",
    },
    {
      phase: "Fase 3",
      title: "Desarrollo de Soluciones",
      duration: "10-12 Semanas",
      desc: "Implementación práctica de las soluciones propuestas mediante metodologías ágiles. Sprints semanales orientados al cumplimiento de entregables concretos y mentoría continua.",
    },
    {
      phase: "Fase 4",
      title: "Integración y Pruebas",
      duration: "2 Semanas",
      desc: "Despliegue de los sistemas en el entorno físico de la universidad (estacionamiento, laboratorios, oficinas). Pruebas de integración, calibración de modelos de IA y corrección de errores.",
    },
    {
      phase: "Fase 5",
      title: "Presentación y Documentación",
      duration: "1 Semana",
      desc: "Cierre de proyectos, entrega de manuales técnicos, redacción de posibles publicaciones y presentación final del portafolio ante las autoridades de la UTSJR e invitados externos.",
    },
  ];

  return (
    <section id="metodologia" className={styles.methodology}>
      <div className="container">
        <h2 className="section-title">
          Metodología de <span className="text-gradient">Trabajo</span>
        </h2>
        <p className="section-subtitle">
          Un plan estructurado de 5 fases diseñado para llevar a los estudiantes desde los conceptos teóricos 
          de IA hasta la implementación de soluciones reales.
        </p>

        <div className={styles.timeline}>
          {steps.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={`glass ${styles.timelineContent}`}>
                <span className={styles.phase}>{item.phase}</span>
                <h3 className={styles.phaseTitle}>{item.title}</h3>
                <span className={styles.duration}>🕒 Duración: {item.duration}</span>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
