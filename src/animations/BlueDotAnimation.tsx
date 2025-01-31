import { useEffect, useRef, useState } from "react";

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
          triggerRef.current.classList.add("animate");
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
      <div className="animationOrbitContainer">
        <div className="verticalLine"></div>
        <div className="dotMin"></div>
        <div className="sunDotMin"></div>
        <div className="orbitDashedMin"></div>
        <div
          className="orbitRotary"
          style={{
            animation: `orbitPlanet 10s linear infinite`,
          }}
        >
          <div className="planetInOrbit"></div>
        </div>
        <div className="dot"></div>
        <div className="orbitDashedExpand"></div>
        <div className="orbitExpand"></div>
        <div className="halfCircle"></div>
      </div>

      <div className="animationOrbitContainer2">
        <div className="verticalLineMiddle" ref={lineRef}>
          {showElements && (
            <>
              <div className="sunDotBig">
                <div
                  className="orbitRotary2"
                  style={{
                    animation: `orbitPlanet 8s linear infinite`,
                  }}
                >
                  <div className="paleBlueOrbit">
                    <div className="paleBlueDot"></div>
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
