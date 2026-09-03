import styles from "./Methodology.module.css";

export default function Methodology() {
  const studentFlowSteps = [
    {
      step: "01",
      role: "Empresa / Sector Productivo",
      title: "Plantea Necesidad o Reto",
      desc: "La empresa, institución u organización expone su problemática técnica o necesidad de innovación ante la Dirección del Centro.",
      icon: "🏢",
    },
    {
      step: "02",
      role: "Coordinación del Centro",
      title: "Conformación Multidisciplinaria",
      desc: "Se integra un equipo de trabajo transversal con estudiantes y docentes de diversas carreras de la UTSJR según los requerimientos del reto.",
      icon: "📋",
    },
    {
      step: "03",
      role: "Estudiantes & Asesores",
      title: "Desarrollo y Prototipado Integral",
      desc: "Uso intensivo de la infraestructura del centro (cómputo GPU, robótica, sensores, fabricación) para construir la solución validada.",
      icon: "⚙️",
    },
    {
      step: "04",
      role: "Centro a Empresa",
      title: "Entrega de la Solución",
      desc: "Pruebas de validación en entorno real y entrega formal del prototipo, sistema o consultoría tecnológica aplicada.",
      icon: "🚀",
    },
    {
      step: "05",
      role: "Impacto & Sostenibilidad",
      title: "Retribución y Experiencia Real",
      desc: "La contraprestación económica fortalece el fondo de equipamiento del centro y genera becas e inserción laboral de alto nivel para los estudiantes.",
      icon: "🎓",
    },
  ];

  const businessSteps = [
    { num: "1", title: "Recepción y Diagnóstico", text: "Diagnóstico técnico preliminar por el área de Vinculación y el equipo especializado del Centro." },
    { num: "2", title: "Cotización y Propuesta", text: "Definición de alcances, entregables, cronograma y costos alineados a los tabuladores de la UTSJR." },
    { num: "3", title: "Asignación de Equipo", text: "1 Docente Investigador Líder + Estudiantes de las carreras afines al proyecto." },
    { num: "4", title: "Desarrollo y Prototipado", text: "Diseño, programación, ensamblaje, calibración y validación de la solución tecnológica." },
    { num: "5", title: "Pruebas y Despliegue", text: "Validación de desempeño en las instalaciones del cliente o entrega terminada del desarrollo." },
    { num: "6", title: "Cierre y Facturación", text: "Facturación institucional formal y canalización de fondos para reinversión continua." },
  ];

  return (
    <section id="operacion" className={styles.methodology}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "var(--secondary)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Metodología y Procesos
          </span>
          <h2 className="section-title" style={{ marginTop: "4px" }}>
            Ciclo Operativo y <span className="text-gradient">Vinculación</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            Modelo ágil de vinculación abierta entre la comunidad universitaria y el ecosistema empresarial en el <strong>Centro de Innovación e IA Aplicada</strong>.
          </p>
        </div>

        {/* Flujo de Vinculación Abierta */}
        <div className="glass" style={{ padding: "32px", borderRadius: "12px", marginBottom: "48px" }}>
          <span style={{ color: "var(--secondary)", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Ciclo de Innovación
          </span>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff", marginBottom: "8px" }}>
            Ciclo Operativo Multidisciplinario
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "28px" }}>
            Los estudiantes de todas las carreras operan como el motor de innovación a través de Residencias Profesionales, Servicio Social y Proyectos Integradores de impacto tangible.
          </p>

          <div className={styles.timeline}>
            {studentFlowSteps.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={`glass ${styles.timelineContent}`}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span className={styles.phase}>{item.step} • {item.role}</span>
                    <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  </div>
                  <h4 className={styles.phaseTitle}>{item.title}</h4>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atención a Empresas */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <span style={{ color: "var(--secondary)", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Servicios Tecnológicos
            </span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff" }}>
              Proceso de Atención y Desarrollo para Empresas
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {businessSteps.map((s, idx) => (
              <div key={idx} className="glass" style={{ padding: "20px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ background: "var(--primary)", color: "#fff", width: "26px", height: "26px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.82rem" }}>
                    {s.num}
                  </span>
                  <h4 style={{ fontSize: "0.98rem", fontWeight: "700", color: "#fff" }}>{s.title}</h4>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
