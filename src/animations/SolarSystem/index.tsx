// components/SolarSystem.tsx
import { useEffect } from "react";

const SolarSystem: React.FC = () => {
  useEffect(() => {
    const planets = [
      { element: document.querySelector(".planet1"), a: 300, b: 150, speed: 0.002 },
      { element: document.querySelector(".planet2"), a: 250, b: 125, speed: 0.004 },
      { element: document.querySelector(".planet3"), a: 200, b: 100, speed: 0.006 },
    ];

    let angle = 0;

    const animatePlanets = () => {
      angle += 1;

      planets.forEach((planet) => {
        const { element, a, b, speed } = planet;

        if (element) {
          const radians = angle * speed;
          const x = a * Math.cos(radians);
          const y = b * Math.sin(radians);
          element.style.transform = `translate(${x + 300}px, ${y + 150}px)`;
        }
      });

      requestAnimationFrame(animatePlanets);
    };

    animatePlanets();
  }, []);

  return (
    <div className="solar-system-container">
      <div className="solar-system">
        {/* Órbitas */}
        <div className="orbit orbit1"></div>
        <div className="orbit orbit2"></div>
        <div className="orbit orbit3"></div>

        {/* Planetas */}
        <div className="planet planet1"></div>
        <div className="planet planet2"></div>
        <div className="planet planet3"></div>
      </div>
    </div>
  );
};

export default SolarSystem;
