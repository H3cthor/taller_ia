import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header id="inicio" className={styles.hero}>
      <div className={styles.glow} />
      <div className={`container ${styles.content}`}>
        <div className={styles.textSection}>
          <div className={styles.badge}>#UTSJR • Innovación Abierta</div>
          <h1 className={styles.title}>
            Centro de Innovación y <br />
            <span className={`text-gradient ${styles.accentText}`}>Laboratorio de IA Aplicada</span>
          </h1>
          <p className={styles.subtitle}>
            <strong>LabIA-UTSJR</strong>: Convergencia estratégica de software inteligente, robótica física, automatización e Industria 4.0 para impulsar las carreras de <strong>Ing. en Inteligencia Artificial</strong> e <strong>Ing. en Mecatrónica</strong> en el Bajío.
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
