import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header id="inicio" className={styles.hero}>
      <div className={styles.glow} />
      <div className={`container ${styles.content}`}>
        <div className={styles.textSection}>
          <div className={styles.badge}>#SoyUTSanJuan</div>
          <h1 className={styles.title}>
            Taller de
            <span className={`text-gradient ${styles.accentText}`}>Inteligencia Artificial</span>
          </h1>
          <p className={styles.subtitle}>
            Proyectos reales transversales desarrollados por estudiantes para resolver problemas 
            de la UTSJR, impulsando la innovación académica y formando a los líderes tecnológicos del futuro.
          </p>
          <div className={styles.ctas}>
            <a href="#postularse">
              <button className={styles.btnPrimary}>Postularse</button>
            </a>
            <a href="#proyectos">
              <button className={styles.btnSecondary}>Ver Proyectos</button>
            </a>
          </div>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.modelWrapper}>
            <div className={styles.modelCore}>
              <img
                src="/mascot_vr.png"
                alt="Mascota Lobo UTSJR VR"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "28px" }}
              />
            </div>
            {/* Wrapper for Tag 1 */}
            <div className={styles.tagWrapper}>
              <div className={`${styles.floatingTag} ${styles.tag1}`}>
                <span className={`${styles.tagDot} ${styles.tagDotBlue}`} />
                <span>Deep Learning</span>
              </div>
            </div>

            {/* Wrapper for Tag 2 */}
            <div className={styles.tagWrapper}>
              <div className={`${styles.floatingTag} ${styles.tag2}`}>
                <span className={`${styles.tagDot} ${styles.tagDotGreen}`} />
                <span>IoT & LoRa</span>
              </div>
            </div>

            {/* Wrapper for Tag 3 */}
            <div className={styles.tagWrapper}>
              <div className={`${styles.floatingTag} ${styles.tag3}`}>
                <span className={`${styles.tagDot} ${styles.tagDotPurple}`} />
                <span>VR Lab (Unreal 5)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
