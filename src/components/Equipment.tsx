import styles from "./Equipment.module.css";

export default function Equipment() {
  const inventory = [
    { name: "Estación de IA (RTX 4000 Ada 20 GB)", qty: 1, icon: "🖥️" },
    { name: "Computadora de alto rendimiento (RTX 4070 SUPER)", qty: 1, icon: "💻" },
    { name: "Meta Quest 3 (Cascos VR)", qty: 2, icon: "🥽" },
    { name: "Meta Quest 2 (Cascos VR)", qty: 2, icon: "🕶️" },
    { name: "Kits de Desarrollo NVIDIA Jetson", qty: 2, icon: "🤖" },
    { name: "Kits de Sensores e IoT (Arduino/ESP32)", qty: 4, icon: "🔌" },
    { name: "Impresora 3D para Prototipado", qty: 1, icon: "🖨️" },
    { name: "Proyector de alta definición", qty: 1, icon: "📹" },
    { name: "Aula equipada con Red de Alta Velocidad", qty: 1, icon: "🏫" },
  ];

  return (
    <section id="equipamiento" className={styles.equipment}>
      <div className="container">
        <h2 className="section-title">
          Equipamiento del <span className="text-gradient">Taller</span>
        </h2>
        <p className="section-subtitle">
          Infraestructura de hardware y herramientas físicas necesarias para el desarrollo de
          aplicaciones de inteligencia artificial y entornos inmersivos de realidad virtual.
        </p>

        <div className={styles.grid}>
          {inventory.map((item, idx) => (
            <div key={idx} className={`glass glass-hover ${styles.card}`}>
              <div className={styles.qtyWrapper}>CANT: {item.qty}</div>
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.name}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
