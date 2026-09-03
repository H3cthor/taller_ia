import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            <span>
              Centro de Innovación e <span className={styles.logoSub}>IA Aplicada</span>
            </span>
          </div>
          <p className={styles.slogan}>
            Convergencia de software inteligente, robótica, automatización e innovación transversal para todas las carreras de la Universidad Tecnológica de San Juan del Río.
          </p>
          <div className={styles.quote}>
            &ldquo;Impulsando el talento y la competitividad regional a través de la educación práctica y la tecnología.&rdquo;
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={styles.sectionTitle}>Navegación</h4>
          <ul className={styles.list}>
            <li>
              <a href="#inicio" className={styles.link}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#general" className={styles.link}>
                Info General
              </a>
            </li>
            <li>
              <a href="#servicios" className={styles.link}>
                Servicios Tecnológicos
              </a>
            </li>
            <li>
              <a href="#infraestructura" className={styles.link}>
                Equipamiento
              </a>
            </li>
            <li>
              <a href="#operacion" className={styles.link}>
                Ciclo Operativo
              </a>
            </li>
            <li>
              <a href="#postularse" className={styles.link}>
                Portal de Vinculación
              </a>
            </li>
          </ul>
        </div>

        {/* Propuesta Autores */}
        <div>
          <h4 className={styles.sectionTitle}>Propuesta Creada Por</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className={styles.authorCard}>
              <span className={styles.authorName}>ISC Héctor Saldaña Benítez</span>
              Docente e Investigador - UTSJR
            </div>
            <div className={styles.authorCard}>
              <span className={styles.authorName}>TSU Eduardo Ochoa Almaraz</span>
              Estudiante Colaborador - UTSJR
            </div>
            <div className={styles.authorCard}>
              <span className={styles.authorName}>TSU Esryil Falcon Vidales Peña</span>
              Estudiante Colaborador - UTSJR
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`container ${styles.bottom}`}>
        <span>
          &copy; {currentYear} Universidad Tecnológica de San Juan del Río. Todos los derechos reservados.
        </span>
        <span>
          Centro de Innovación e IA Aplicada - UTSJR
        </span>
      </div>
    </footer>
  );
}
