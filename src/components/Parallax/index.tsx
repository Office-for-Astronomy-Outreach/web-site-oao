import React from "react";
import clsx from "classnames";

interface ParallaxProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  backgroundImage: {
    imgUrl: string;
    caption?: string;
  };
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "auto";
  showAnimation?: boolean;
}

const Parallax: React.FC<ParallaxProps> = ({
  title,
  subtitle,
  children,
  backgroundImage,
  size = "lg",
  showAnimation,
}) => {
  const sizeClasses = clsx({
    "h-auto": size === "auto",
    "h-64": size === "xs",
    "h-80": size === "sm",
    "h-96": size === "md",
    "h-[35rem]": size === "lg",
    "h-screen": size === "xl",
  });

  const captionClass = clsx(
    "absolute z-[1] bottom-0 left-0 w-full bg-black/60 p-2 text-sm text-center text-white rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  );

  return (
    <div className="relative">
      <div
        className={clsx(
          "group relative shadow-md rounded-lg bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-center p-8",
          sizeClasses
        )}
        style={{
          backgroundImage: `url(${backgroundImage.imgUrl})`,
        }}
        role="region"
        aria-labelledby="parallax-title"
        aria-describedby="parallax-subtitle"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"
          aria-hidden="true"
        ></div>
        {/* Parallax */}
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
        {backgroundImage?.caption && (
          <figcaption className={captionClass}>
            {backgroundImage?.caption}
          </figcaption>
        )}
      </div>
      {showAnimation && (
        <div className="absolute top-0 w-full">
          <div className="comets comets-left comets-long"></div>
          <div className="comets comets-center comets-long"></div>
          <div className="comets comets-top comets-long"></div>
        </div>
      )}
    </div>
  );
};

export default Parallax;
