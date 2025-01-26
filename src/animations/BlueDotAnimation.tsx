import { useEffect, useRef, useState } from "react";
import styles from "./BlueDotAnimation.module.css";

export default function BlueDotAnimation() {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const lineRef = useRef<HTMLDivElement | null>(null);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    let animationTriggered = false; // Bandera para evitar que desaparezcan

    const handleScroll = () => {
      if (triggerRef.current) {
        const triggerTop = triggerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (!animationTriggered && triggerTop < windowHeight / 3) {
          triggerRef.current.classList.add(styles.animate);
          animationTriggered = true; // Marcar como activada
        }
      }
    };

    const handleAnimationEnd = () => {
      setShowElements(true); // Mostrar los elementos cuando termine la animación
    };

    const lineElement = lineRef.current;
    if (lineElement) {
      lineElement.addEventListener("animationend", handleAnimationEnd);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lineElement) {
        lineElement.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div ref={triggerRef}>
      <div className={styles.animationOrbitContainer}>
        <div className={styles.verticalLine}></div>
        <div className={styles.dotMin}></div>
        <div className={styles.sunDotMin}></div>
        <div className={styles.orbitDashedMin}></div>
        <div
          className={styles.orbitRotary}
          style={{
            animation: `orbitPlanet 10s linear infinite`,
          }}
        >
          <div className={styles.planetInOrbit}></div>
        </div>
        <div className={styles.dot}></div>
        <div className={styles.orbitDashedExpand}></div>
        <div className={styles.orbitExpand}></div>
        <div className={styles.halfCircle}></div>
      </div>

      <div className={styles.animationOrbitContainer2}>
        <div className={styles.verticalLineMiddle} ref={lineRef}>
          {showElements && (
            <>
              <div className={styles.sunDotBig}>
                <div
                  className={styles.orbitRotary2}
                  style={{
                    animation: `orbitPlanet 8s linear infinite`,
                  }}
                >
                  <div className={styles.paleBlueOrbit}>
                    <div className={styles.paleBlueDot}></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
