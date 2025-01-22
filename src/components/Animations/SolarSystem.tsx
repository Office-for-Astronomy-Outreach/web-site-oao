import React from "react";

const OrbitSystem = () => {
  const orbits = [
    { size: 100, thickness: 6, duration: 0.024 }, // Mercurio
    { size: 130, thickness: 5.5, duration: 0.062 }, // Venus
    { size: 160, thickness: 5, duration: 0.098 }, // Tierra
    { size: 190, thickness: 4.5, duration: 0.186 }, // Marte
    { size: 220, thickness: 4, duration: 1.086 }, // Júpiter
    { size: 250, thickness: 3, duration: 2.819 }, // Saturno
    { size: 280, thickness: 2, duration: 8.4 }, // Urano
    { size: 310, thickness: 1, duration: 16.4 }, // Neptuno
  ];

  return (
    <div className="relative flex items-center justify-center">
      {orbits.map((orbit, index) => (
        <div
          key={index}
          className="absolute rounded-full border-[#235d72]"
          style={{
            width: `${orbit.size}px`,
            height: `${orbit.size}px`,
            borderWidth: `${orbit.thickness}px`,
          }}
        >
          {/* Planeta que orbita */}
          <div
            className="absolute rounded-full"
            style={{
              width: `${orbit.size}px`,
              height: `${orbit.size}px`,
              animation: `orbitPlanet ${orbit.duration}s linear infinite`,
            }}
          >
            {index > 4 && (
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: "10px",
                  height: "10px",
                  top: 0,
                  left: "50%",
                  transform: "translate(-48%, -48%)",
                }}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrbitSystem;
