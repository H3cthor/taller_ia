"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./SillSimulator.module.css";

type Level = "Principiante" | "Intermedio" | "Experto";

interface LogMessage {
  time: string;
  text: string;
}

export default function SillSimulator() {
  const [level, setLevel] = useState<Level>("Principiante");
  const [successes, setSuccesses] = useState(0);
  const [fails, setFails] = useState(0);
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const addLog = (text: string) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    setLogs((prev) => [...prev, { time: timeStr, text }]);
  };

  // Initial log
  useEffect(() => {
    addLog("Simulador inicializado. Nivel actual: Principiante. Conexión de sensores a Arduino en VR.");
    addLog("Regla 1: 3 fallos consecutivos en un paso baja un nivel.");
    addLog("Regla 2: 3 aciertos consecutivos en menos de 10s sube un nivel.");
  }, []);

  // Scroll to bottom of terminal when logs update
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleSuccessFast = () => {
    const nextSuccesses = successes + 1;
    setFails(0); // Reset fails on success

    if (nextSuccesses >= 3) {
      setSuccesses(0);
      if (level === "Principiante") {
        setLevel("Intermedio");
        addLog("📈 ¡MOTOR LÓGICA DIFUSA! 3 aciertos rápidos detectados. Subiendo nivel a: INTERMEDIO.");
      } else if (level === "Intermedio") {
        setLevel("Experto");
        addLog("🔥 ¡MOTOR LÓGICA DIFUSA! 3 aciertos rápidos detectados. Subiendo nivel a: EXPERTO.");
      } else {
        addLog("⭐ Desempeño excelente. Ya estás en el nivel máximo (Experto).");
      }
    } else {
      setSuccesses(nextSuccesses);
      addLog(`✓ Paso correcto en 4.5s. Racha rápida: ${nextSuccesses}/3. Errores limpios.`);
    }
  };

  const handleSuccessSlow = () => {
    setSuccesses(0); // Slow successes reset the fast success streak
    setFails(0); // Reset failures
    addLog("✓ Paso correcto en 15.2s. Tiempo de resolución normal. Racha de velocidad reiniciada.");
  };

  const handleFail = () => {
    const nextFails = fails + 1;
    setSuccesses(0); // Reset success streak on fail

    if (nextFails >= 3) {
      setFails(0);
      if (level === "Experto") {
        setLevel("Intermedio");
        addLog("📉 ¡MOTOR LÓGICA DIFUSA! 3 errores consecutivos. Bajando nivel a: INTERMEDIO.");
      } else if (level === "Intermedio") {
        setLevel("Principiante");
        addLog("⚠️ ¡MOTOR LÓGICA DIFUSA! 3 errores consecutivos. Bajando nivel a: PRINCIPIANTE (pines resaltados habilitados).");
      } else {
        addLog("ℹ️ Racha de errores activa. Nivel mínimo alcanzado. Sugiriendo asistencia docente.");
      }
    } else {
      setFails(nextFails);
      addLog(`✕ Error en conexión de pin. Cortocircuito simulado. Errores racha: ${nextFails}/3.`);
    }
  };

  const handleReset = () => {
    setLevel("Principiante");
    setSuccesses(0);
    setFails(0);
    setLogs([]);
    setTimeout(() => {
      addLog("🔄 Simulador reiniciado. Nivel actual: Principiante.");
    }, 100);
  };

  const getLevelStyle = () => {
    if (level === "Principiante") return styles.levelBeginner;
    if (level === "Intermedio") return styles.levelIntermediate;
    return styles.levelExpert;
  };

  const getLevelFeature = () => {
    if (level === "Principiante") {
      return "Guía Activa: Los pines de la protoboard y Arduino parpadean en verde indicando la conexión exacta.";
    }
    if (level === "Intermedio") {
      return "Diagrama Esquemático: Sin pines parpadeantes. El estudiante debe guiarse con el plano de circuitos en pantalla.";
    }
    return "Modo Experto: Sin ayudas visuales. Simulación aleatoria de componentes defectuosos en tiempo real.";
  };

  return (
    <div className={styles.simulator}>
      <h4 className={styles.title}>
        <span>🥽</span> Simulador Interactivo SILL-UTSJR (Motor IA)
      </h4>

      <div className={styles.dashboard}>
        {/* Status panel */}
        <div className={styles.statusPanel}>
          <div>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
              Nivel Adaptativo:
            </span>
            <div className={`${styles.levelIndicator} ${getLevelStyle()}`}>
              <span>{level}</span>
              <span>{level === "Principiante" ? "🟢" : level === "Intermedio" ? "🟡" : "🔴"}</span>
            </div>
          </div>

          {/* Feature details */}
          <div className={styles.featureText}>{getLevelFeature()}</div>

          {/* Gauges */}
          <div className={styles.meterRow}>
            <span>Racha Rápida (&lt;10s):</span>
            <div className={styles.meterDots}>
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${successes >= i ? styles.dotSuccessActive : ""}`}
                />
              ))}
            </div>
          </div>

          <div className={styles.meterRow}>
            <span>Racha Errores:</span>
            <div className={styles.meterDots}>
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${fails >= i ? styles.dotFailActive : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Logs */}
        <div className={styles.terminal}>
          {logs.map((log, idx) => (
            <div key={idx} className={styles.logEntry}>
              <span className={styles.logTimestamp}>[{log.time}]</span>
              <span>{log.text}</span>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.controls}>
        <button className={`${styles.btnSim} ${styles.btnSuccess}`} onClick={handleSuccessFast}>
          ⚡ Acierto Rápido (&lt;10s)
        </button>
        <button className={styles.btnSim} onClick={handleSuccessSlow}>
          ⏱️ Acierto Lento (&gt;10s)
        </button>
        <button className={`${styles.btnSim} ${styles.btnFail}`} onClick={handleFail}>
          💥 Simular Fallo (Error)
        </button>
        <button className={styles.btnSim} onClick={handleReset}>
          🔄 Reiniciar
        </button>
      </div>
    </div>
  );
}
