import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header id="inicio" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.textSection}>
          <div className={styles.badge}>UTSJR • Innovación Transversal</div>
          <h1 className={styles.title}>
            Centro de Innovación e <br />
            <span className={styles.accentText}>IA Aplicada</span>
          </h1>
          <p className={styles.subtitle}>
            Espacio de convergencia tecnológica entre software inteligente, robótica y automatización. Con base en <strong>Tecnologías de la Información (IA)</strong> y <strong>Mecatrónica</strong>, abierto e integrado de forma <strong>transversal a todas las carreras</strong> de la UTSJR y el sector productivo del Bajío.
          </p>
          <div className={styles.ctas}>
            <a href="#servicios">
              <button className={styles.btnPrimary}>Oferta de Servicios</button>
            </a>
            <a href="#postularse">
              <button className={styles.btnSecondary}>Diagnóstico Tecnológico</button>
            </a>
          </div>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.modelWrapper}>
            <div className={styles.modelCore}>
              <img
                src="/mascot_vr.png"
                alt="Mascota Lobo UTSJR IA & Mecatrónica"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "28px" }}
              />
            </div>
            {/* Wrapper for Tag 1 */}
            <div className={styles.tagWrapper}>
              <div className={`${styles.floatingTag} ${styles.tag1}`}>
                <span className={`${styles.tagDot} ${styles.tagDotBlue}`} />
                <span>IA & Computer Vision</span>
              </div>
            </div>

            {/* Wrapper for Tag 2 */}
            <div className={styles.tagWrapper}>
              <div className={`${styles.floatingTag} ${styles.tag2}`}>
                <span className={`${styles.tagDot} ${styles.tagDotGreen}`} />
                <span>Robótica & ROS2</span>
              </div>
            </div>

            {/* Wrapper for Tag 3 */}
            <div className={styles.tagWrapper}>
              <div className={`${styles.floatingTag} ${styles.tag3}`}>
                <span className={`${styles.tagDot} ${styles.tagDotPurple}`} />
                <span>IIoT & Gemelos Digitales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
