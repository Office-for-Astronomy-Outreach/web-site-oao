import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface GlobalCommunityItem {
  src: string; // URL de la imagen
  url: string; // URL al que redirige el div al hacer clic
  alt: string; // Texto alternativo para la imagen
  position?: string;
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
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
      {images?.map((image, index) => (
        <Link
          key={index}
          href={image?.url}
          className={`bg-cover aspect-video ${linkClass}`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundPosition: image.position ?? "center",
          }}
          role="link"
          aria-label={image?.alt}
        >
          <p className="sr-only">{image?.alt}</p>
        </Link>
      ))}
    </div>
  );
};

export default GlobalCommunityGrid;
