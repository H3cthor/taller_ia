import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🤖</span>
            <span>
              LabIA<span className={styles.logoSub}>-UTSJR</span>
            </span>
          </div>
          <p className={styles.slogan}>
            Centro de Innovación y Laboratorio de Inteligencia Artificial Aplicada. Convergencia de IA, Robótica, Automatización e Industria 4.0 en la UTSJR.
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
              <a href="#nosotros" className={styles.link}>
                Modelo Aprender Haciendo
              </a>
            </li>
            <li>
              <a href="#proyectos" className={styles.link}>
                Proyectos Estratégicos
              </a>
            </li>
            <li>
              <a href="#metodologia" className={styles.link}>
                Metodología de Trabajo
              </a>
            </li>
            <li>
              <a href="#equipamiento" className={styles.link}>
                Equipamiento de Laboratorio
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
          Desarrollado con ❤️ para el Taller de Inteligencia Artificial de la UTSJR.
        </span>
      </div>
    </footer>
  );
}
