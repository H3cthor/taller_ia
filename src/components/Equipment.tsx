import styles from "./Equipment.module.css";

export default function Equipment() {
  const infrastructureAreas = [
    {
      category: "Cómputo e Infraestructura IA",
      icon: "🖥️",
      items: [
        "Workstations de alto rendimiento con GPUs dedicadas (NVIDIA RTX / A-Series)",
        "Servidor local para entrenamiento intensivo de modelos pesados",
        "Licencias de software especializado e integración con plataformas Cloud",
      ],
    },
    {
      category: "Robótica y Mecatrónica",
      icon: "🤖",
      items: [
        "Kits de robótica modular didáctica y avanzada",
        "Brazos robóticos industriales/colaborativos (Cobots)",
        "Sensores de variables industriales, PLC y microcontroladores (Arduino, ESP32, Raspberry Pi 5)",
      ],
    },
    {
      category: "Visión Artificial e IoT",
      icon: "👁️",
      items: [
        "Cámaras de visión industrial estereoscópicas y de alta velocidad",
        "Kits IIoT con conectividad industrial (MQTT, OPC-UA, Modbus)",
        "Sistemas de escaneo 3D y sensores LiDAR de profundidad",
      ],
    },
    {
      category: "Prototipado Físico",
      icon: "🖨️",
      items: [
        "Impresoras 3D de tecnología FDM y Resina SLA de alta precisión",
        "Cortadora Láser CO2 para materiales sintéticos y madera",
        "Estaciones de soldadura de precisión y ensamble electrónico",
      ],
    },
    {
      category: "Espacio Físico / Layout",
      icon: "🏫",
      items: [
        "Zona de Talleres y Co-Working interactivo modular",
        "Zona de Servidores y Cómputo Pesado aislada",
        "Área de Pruebas de Robótica, AMRs y Sala de Consultoría Ejecutiva",
      ],
    },
  ];

  return (
    <section id="infraestructura" className={styles.equipment}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "var(--secondary)", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Infraestructura y Recursos
          </span>
          <h2 className="section-title" style={{ marginTop: "4px" }}>
            Equipamiento e <span className="text-gradient">Infraestructura Especializada</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            Instrumental de vanguardia para soportar las actividades de prototipado, investigación aplicada y vinculación tecnológica del <strong>Centro de Innovación e IA Aplicada</strong>.
          </p>
        </div>

        <div className={styles.grid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {infrastructureAreas.map((area, idx) => (
            <div key={idx} className={`glass glass-hover ${styles.card}`} style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span className={styles.icon} style={{ fontSize: "2rem" }}>{area.icon}</span>
                <h3 className={styles.name} style={{ fontSize: "1.2rem", fontWeight: "700", color: "#fff" }}>
                  {area.category}
                </h3>
              </div>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {area.items.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "var(--accent)", fontWeight: "bold" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
