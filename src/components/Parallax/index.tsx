import React from "react";

interface ParallaxProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  backgroundImage: string; // URL de la imagen de fondo
}

const Parallax: React.FC<ParallaxProps> = ({
  title,
  subtitle,
  children,
  backgroundImage,
}) => {
  return (
    <div
      className="relative shadow-md rounded-lg bg-cover bg-center bg-fixed h-[35rem] flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay para oscurecer la imagen si es necesario */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Contenido del parallax */}
      <div className="relative z-1">
        <h2 className="text-white text-h2 font-bold mb-4">
          {title}
        </h2>
        <h3 className="text-white text-h3 font-light mb-8">
          {subtitle}
        </h3>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};

export default Parallax;
