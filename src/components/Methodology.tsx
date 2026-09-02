import styles from "./Methodology.module.css";

export default function Methodology() {
  const studentFlowSteps = [
    {
      step: "01",
      role: "Empresa / Cliente",
      title: "Plantea Necesidad o Reto",
      desc: "La empresa o área universitaria expone su problemática técnica o necesidad de automatización/IA ante la Coordinación del LabIA-UTSJR.",
      icon: "🏢",
    },
    {
      step: "02",
      role: "Coordinación LabIA",
      title: "Asigna Proyecto Integrador / Residencia",
      desc: "Se conforma el equipo de trabajo asignando estudiantes de Ing. en Inteligencia Artificial e Ing. en Mecatrónica guiados por Docentes Investigadores.",
      icon: "📋",
    },
    {
      step: "03",
      role: "Estudiantes & Docentes",
      title: "Desarrolla Prototipo en LabIA",
      desc: "Uso intensivo de las estaciones GPU, impresoras 3D, brazos robóticos y kits IIoT para construir y entrenar la solución funcional.",
      icon: "⚙️",
    },
    {
      step: "04",
      role: "LabIA a Empresa",
      title: "Entrega Demostrador / Solución",
      desc: "Pruebas de validación en planta o entorno real y entrega formal del prototipo o software a medida al cliente.",
      icon: "🚀",
    },
    {
      step: "05",
      role: "Retribución & Impacto",
      title: "Pago por Servicio & Becas Estudiantiles",
      desc: "La empresa liquida el servicio tecnológico a la UTSJR; los fondos se destinan al mantenimiento del laboratorio y otorgamiento de becas/experiencia a los alumnos.",
      icon: "🎓",
    },
  ];

  const businessSteps = [
    { num: "1", title: "Recepción y Diagnóstico", text: "Diagnóstico técnico preliminar por Vinculación UTSJR y Coordinador LabIA." },
    { num: "2", title: "Cotización y Propuesta", text: "Alcances, entregables, cronograma y costos ajustados a tabuladores de la UTSJR." },
    { num: "3", title: "Asignación de Equipo", text: "1 Docente Investigador Líder + Becarios de Ing. en IA e Ing. en Mecatrónica." },
    { num: "4", title: "Desarrollo y Prototipado", text: "Entrenamiento de modelos, ensamble de tarjetas y calibración de algoritmos." },
    { num: "5", title: "Pruebas y Despliegue", text: "Validación de la solución en la planta del cliente o entrega terminada." },
    { num: "6", title: "Cierre y Facturación", text: "Facturación institucional e ingreso de fondos para reinversión en el laboratorio." },
  ];

  return (
    <section id="operacion" className={styles.methodology}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Sección 3
          </span>
          <h2 className="section-title" style={{ marginTop: "4px" }}>
            Procedimientos y <span className="text-gradient">Procesos Operativos</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            Modelos de vinculación universitaria y protocolos de atención a clientes industriales del <strong>LabIA-UTSJR</strong>.
          </p>
        </div>

        {/* 3.1 Flujo de Vinculación Estudiantil */}
        <div className="glass" style={{ padding: "32px", borderRadius: "20px", marginBottom: "48px" }}>
          <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            3.1 Flujo de Vinculación
          </span>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#fff", marginBottom: "8px" }}>
            Ciclo Operativo Estudiantil (IA & Mecatrónica)
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "28px" }}>
            Los estudiantes operan como el motor de innovación del laboratorio a través de Residencias Profesionales, Servicio Social y Proyectos Integradores reales.
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

        {/* 3.2 Atención a Empresas */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <span style={{ color: "var(--secondary)", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              3.2 Servicios Tecnológicos
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#fff" }}>
              Proceso de Atención a Empresas Externas
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {businessSteps.map((s, idx) => (
              <div key={idx} className="glass" style={{ padding: "20px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ background: "var(--primary)", color: "#fff", width: "28px", height: "28px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.85rem" }}>
                    {s.num}
                  </span>
                  <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#fff" }}>{s.title}</h4>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3.3 Gestión Operativa del Espacio */}
        <div className="glass" style={{ padding: "28px", borderRadius: "20px" }}>
          <span style={{ color: "var(--primary)", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            3.3 Gestión Operativa del Espacio
          </span>
          <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#fff", marginBottom: "16px" }}>
            Administración y Normativa Interna
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.4rem" }}>🌐</span>
                <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#fff" }}>Sistema de Reservas Web</h4>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Plataforma interna para la gestión de turnos y reservación de equipos pesados (Workstations GPU, brazos robóticos e impresoras 3D) por parte de docentes y estudiantes.
              </p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.4rem" }}>🛡️</span>
                <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#fff" }}>Reglamento de Seguridad y Uso</h4>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Normas de bioseguridad y protección en el uso de estaciones de soldadura, cortadoras láser CO2, circuitos de alta potencia y manejo seguro de componentes electrónicos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
