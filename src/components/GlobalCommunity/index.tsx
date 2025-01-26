import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface GlobalCommunityItem {
  src: string; // URL de la imagen
  url: string; // URL al que redirige el div al hacer clic
  alt: string; // Texto alternativo para la imagen
  caption?: string;
}

interface GlobalCommunityGridProps {
  images: GlobalCommunityItem[];
}

const linkClass = classNames(
  "rounded-lg",
  "focus:outline-none",
  "focus:ring-4",
  "focus:ring-blue-300",
  "transition-transform",
  "duration-300",
  "hover:scale-105"
);

const GlobalCommunityGrid: React.FC<GlobalCommunityGridProps> = ({
  images,
}) => {
  return (
    <div className="flex flex-wrap w-full gap-4 ">
      <div className="w-full bg-dark-dark p-4 rounded-lg">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {images?.map((image, index) => (
            <Link
              key={index}
              href={image?.url}
              target="_blank"
              className={`bg-cover aspect-video ${linkClass}`}
              style={{ backgroundImage: `url(${image.src})` }}
              role="link"
              aria-label={image?.alt}
            >
              <span className="sr-only">{image?.alt}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalCommunityGrid;
