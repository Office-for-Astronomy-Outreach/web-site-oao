import React from "react";
import clsx from "classnames";

interface ParallaxProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  backgroundImage: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Parallax: React.FC<ParallaxProps> = ({
  title,
  subtitle,
  children,
  backgroundImage,
  size = "lg",
}) => {
  const sizeClasses = clsx({
    "h-64": size === "xs",
    "h-80": size === "sm",
    "h-96": size === "md",
    "h-[35rem]": size === "lg",
    "h-screen": size === "xl",
  });

  return (
    <div className="relative">
      <div
        className={clsx(
          "relative shadow-md rounded-lg bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-center px-4",
          sizeClasses
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        role="region"
        aria-labelledby="parallax-title"
        aria-describedby="parallax-subtitle"
      >
        {/* Overlay para oscurecer la imagen */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"
          aria-hidden="true"
        ></div>
        {/* Contenido del parallax */}
        <div className="relative z-2">
          <h2 id="parallax-title" className="text-white text-h2 font-bold mb-4">
            {title}
          </h2>
          <h3
            id="parallax-subtitle"
            className="text-white text-h3 font-light mb-8"
          >
            {subtitle}
          </h3>

          {children && <div>{children}</div>}
        </div>
      </div>
      <div className="absolute top-0 w-full">
        <div className="comets comets-left comets-long"></div>
        <div className="comets comets-center comets-long"></div>
        <div className="comets comets-top comets-long"></div>
      </div>
    </div>
  );
};

export default Parallax;
