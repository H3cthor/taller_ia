"use client";

import { useState } from "react";
import styles from "./PortalForm.module.css";

type FormType = "estudiante" | "proyecto";

export default function PortalForm() {
  const [formType, setFormType] = useState<FormType>("estudiante");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Student Form State
  const [studentData, setStudentData] = useState({
    nombre: "",
    matricula: "",
    correo: "",
    carrera: "Sistemas",
    cuatrimestre: "",
    proyectos: [] as string[],
    motivacion: "",
  });

  // Project Form State
  const [projectData, setProjectData] = useState({
    contacto: "",
    organizacion: "",
    correo: "",
    titulo: "",
    problematica: "",
    impacto: "",
  });

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Student Data Submitted: ", studentData);
    setIsSubmitted(true);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Project Data Submitted: ", projectData);
    setIsSubmitted(true);
  };

  const toggleProjectInterest = (projId: string) => {
    setStudentData((prev) => {
      const updated = prev.proyectos.includes(projId)
        ? prev.proyectos.filter((id) => id !== projId)
        : [...prev.proyectos, projId];
      return { ...prev, proyectos: updated };
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStudentData({
      nombre: "",
      matricula: "",
      correo: "",
      carrera: "Sistemas",
      cuatrimestre: "",
      proyectos: [],
      motivacion: "",
    });
    setProjectData({
      contacto: "",
      organizacion: "",
      correo: "",
      titulo: "",
      problematica: "",
      impacto: "",
    });
  };

  return (
    <section id="postularse" className={styles.portal}>
      <div className="container">
        <h2 className="section-title">
          Portal de <span className="text-gradient">Vinculación</span>
        </h2>
        <p className="section-subtitle">
          ¿Eres estudiante y quieres unirte al taller, o eres una empresa/departamento y quieres
          inscribir una problemática real para ser resuelta? Completa el formulario correspondiente.
        </p>

        <div className={`glass ${styles.formBox}`}>
          {!isSubmitted ? (
            <>
              {/* Tab Selector */}
              <div className={styles.tabs}>
                <button
                  className={`${styles.tabBtn} ${formType === "estudiante" ? styles.tabBtnActive : ""}`}
                  onClick={() => setFormType("estudiante")}
                >
                  Postulación Estudiantes
                </button>
                <button
                  className={`${styles.tabBtn} ${formType === "proyecto" ? styles.tabBtnActive : ""}`}
                  onClick={() => setFormType("proyecto")}
                >
                  Proponer Proyecto Real
                </button>
              </div>

              {/* Form Render */}
              {formType === "estudiante" ? (
                <form className={styles.form} onSubmit={handleStudentSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre Completo *</label>
                    <input
                      type="text"
                      className={styles.input}
                      required
                      placeholder="Ej. Juan Pérez García"
                      value={studentData.nombre}
                      onChange={(e) => setStudentData({ ...studentData, nombre: e.target.value })}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Matrícula *</label>
                      <input
                        type="text"
                        className={styles.input}
                        required
                        placeholder="Ej. 122030123"
                        value={studentData.matricula}
                        onChange={(e) => setStudentData({ ...studentData, matricula: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Correo Institucional *</label>
                      <input
                        type="email"
                        className={styles.input}
                        required
                        placeholder="usuario@utsjr.edu.mx"
                        value={studentData.correo}
                        onChange={(e) => setStudentData({ ...studentData, correo: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formRowUnequal}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Carrera *</label>
                      <select
                        className={styles.select}
                        value={studentData.carrera}
                        onChange={(e) => setStudentData({ ...studentData, carrera: e.target.value })}
                      >
                        <option value="IA">Ing. en Inteligencia Artificial (UTSJR)</option>
                        <option value="Mecatrónica">Ing. en Mecatrónica (UTSJR)</option>
                        <option value="Sistemas">Ing. en Tecnologías de la Información</option>
                        <option value="Química">Ing. en Química / Procesos</option>
                        <option value="Mantenimiento">Ing. en Mantenimiento Industrial</option>
                        <option value="Negocios">Lic. en Gestión de Negocios y Proyectos</option>
                        <option value="Otra">Otra Carrera</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Cuatrimestre *</label>
                      <input
                        type="number"
                        min="1"
                        max="11"
                        className={styles.input}
                        required
                        placeholder="Ej. 7"
                        value={studentData.cuatrimestre}
                        onChange={(e) => setStudentData({ ...studentData, cuatrimestre: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Proyectos de Interés (Selecciona al menos uno)</label>
                    <div className={styles.checkboxGroup}>
                      {[
                        { id: "intelipark", name: "InteliPark (Estacionamiento)" },
                        { id: "bioaccess", name: "BIOACCESS (Seguridad)" },
                        { id: "orion", name: "ORION (Chatbot / Robótica)" },
                        { id: "strupret", name: "STRUPRET IA (Civil)" },
                        { id: "sill", name: "SILL-UTSJR (VR + IA)" },
                      ].map((p) => (
                        <label key={p.id} className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={studentData.proyectos.includes(p.id)}
                            onChange={() => toggleProjectInterest(p.id)}
                          />
                          <span>{p.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>¿Por qué quieres unirte al Taller de IA? *</label>
                    <textarea
                      className={styles.textarea}
                      rows={4}
                      required
                      placeholder="Cuéntanos brevemente qué te motiva, qué habilidades esperas desarrollar y qué puedes aportar al taller..."
                      value={studentData.motivacion}
                      onChange={(e) => setStudentData({ ...studentData, motivacion: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Enviar Solicitud de Postulación
                  </button>
                </form>
              ) : (
                <form className={styles.form} onSubmit={handleProjectSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre del Responsable *</label>
                    <input
                      type="text"
                      className={styles.input}
                      required
                      placeholder="Ej. Ing. Carlos Mendoza"
                      value={projectData.contacto}
                      onChange={(e) => setProjectData({ ...projectData, contacto: e.target.value })}
                    />
                  </div>

                  <div className={styles.formRowUnequal}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Organización / Departamento / Empresa *</label>
                      <input
                        type="text"
                        className={styles.input}
                        required
                        placeholder="Ej. Departamento de Servicios Escolares / Empresa X"
                        value={projectData.organizacion}
                        onChange={(e) => setProjectData({ ...projectData, organizacion: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Correo de Contacto *</label>
                      <input
                        type="email"
                        className={styles.input}
                        required
                        placeholder="carlos.mendoza@empresa.com"
                        value={projectData.correo}
                        onChange={(e) => setProjectData({ ...projectData, correo: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Área / Título del Proyecto Propuesto *</label>
                    <input
                      type="text"
                      className={styles.input}
                      required
                      placeholder="Ej. Automatización de inventario, Control de aforo, etc."
                      value={projectData.titulo}
                      onChange={(e) => setProjectData({ ...projectData, titulo: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción de la Problemática Real *</label>
                    <textarea
                      className={styles.textarea}
                      rows={4}
                      required
                      placeholder="Describe la necesidad o problema actual de tu organización. ¿Qué proceso es lento, inseguro o ineficiente?..."
                      value={projectData.problematica}
                      onChange={(e) => setProjectData({ ...projectData, problematica: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Impacto Esperado *</label>
                    <textarea
                      className={styles.textarea}
                      rows={2}
                      required
                      placeholder="¿Qué mejoras esperas obtener con el desarrollo de una solución basada en Inteligencia Artificial? (Ej. reducir tiempos, ahorrar costos)..."
                      value={projectData.impacto}
                      onChange={(e) => setProjectData({ ...projectData, impacto: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Proponer Proyecto para Desarrollo
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className={styles.successPanel}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>¡Registro Recibido!</h3>
              <p className={styles.successText}>
                Tu información ha sido registrada exitosamente en las bases de datos del Taller de IA. 
                Los administradores revisarán tu solicitud y se pondrán en contacto contigo a través del correo proporcionado.
              </p>
              <button className={styles.resetBtn} onClick={handleReset}>
                Volver al Formulario
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
