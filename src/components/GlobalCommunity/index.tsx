import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface GlobalCommunityItem {
  src: string; // URL de la imagen
  url: string; // URL al que redirige el div al hacer clic
  alt: string; // Texto alternativo para la imagen
}

interface GlobalCommunityGridProps {
  images: {
    firstGrid: GlobalCommunityItem[]; // Matriz 2x2
    secondGrid: GlobalCommunityItem[]; // Matriz 1x2 (parte izquierda)
    thirdGrid: GlobalCommunityItem[]; // Matriz 1x2 (parte derecha)
  };
}

const linkClass = classNames(
    "rounded-lg",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-blue-300",
    "transition-transform",
    "duration-300",
    "hover:scale-105",
  );

const GlobalCommunityGrid: React.FC<GlobalCommunityGridProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap w-full gap-4 ">
      {/* Primer contenedor con una matriz 2x2 */}
      <div className="w-full md:w-1/2 bg-gray-900 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          {images?.firstGrid.map((image, index) => (
            <Link
              key={index}
              href={image?.url}
              target="_blank"
              className={`bg-cover aspect-[4/3] ${linkClass}`}
              style={{ backgroundImage: `url(${image.src})` }}
              role="link"
              aria-label={image?.alt}
            >
              <span className="sr-only">{image?.alt}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Segundo y Tercer contenedor */}
      <div className="flex flex-1 md:w-1/2 gap-4">
        {/* Segundo contenedor con una matriz 1x2 */}
        <div className="w-1/2 bg-gray-900 p-4 rounded-lg">
          <div className="grid grid-rows-2 gap-4 h-full">
            {images?.secondGrid.map((image, index) => (
              <Link
                key={index}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-cover bg-right aspect-[4/3] md:aspect-auto ${linkClass}`}
                role="link"
                style={{ backgroundImage: `url(${image.src})` }}
                aria-label={image.alt}
              >
                <span className="sr-only">{image.alt}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Tercer contenedor con una matriz 1x2 */}
        <div className="w-1/2 bg-gray-900 p-4 rounded-lg">
          <div className="grid grid-rows-2 gap-4 h-full">
            {images?.thirdGrid.map((image, index) => (
              <Link
                key={index}
                href={image?.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-cover aspect-[4/3] md:aspect-auto bg-center ${linkClass}`}
                role="link"
                aria-label={image?.alt}
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <span className="sr-only">{image?.alt}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCommunityGrid;
