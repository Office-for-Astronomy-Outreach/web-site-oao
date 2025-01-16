import React from "react";
import Image from "next/image";
import classNames from "classnames";

import Button from "@/components/Button";
import type { ContentCardProps } from "./types";

/**
 * `ContentCard` Component
 *
 * A flexible and accessible card component that displays a title, text, optional image, and an optional link.
 *
 */
const ContentCard: React.FC<ContentCardProps> = ({
  title,
  text,
  image,
  link,
  type,
  twoColums,
  wfull,
}) => {
  const colorButton = type === "primary" ? "dark" : "primary";
  const wSize = wfull ? "md:w-full" : "md:w-8/12";

  const cardClass = classNames(
    "flex flex-wrap md:flex-nowrap items-stretch rounded-lg px-8 py-8 md:py-16",
    image?.imageUrl ? "justify-between" : "justify-center",
    {
      "bg-primary-main shadow-md text-white": type === "primary",
      "bg-white shadow-md text-gray-600": type === "secondary",
      "bg-transparent text-gray-600": type === "transparent",
    },
  );

  const titleClass = classNames("font-bold text-h2", {
    "text-body": type === "transparent",
    "text-primary-main": type === "secondary",
  });

  const containerClass = classNames(
    image?.imageUrl ? "md:w-5/12" : wSize,
    type === "primary" ? "md:order-last" : "",
  );

  const captionClass = classNames(
    "absolute z-10 bottom-0 left-0 w-full bg-black/60 p-2 text-sm text-center text-white rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  );

  return (
    <section
      className={cardClass}
      role="region"
      aria-labelledby={`${title}-header`}
    >
      {/* Title and Text Section */}
      <div className={containerClass}>
        <div className="flex flex-col gap-6">
          <h2 id={`${title}-header`} className={titleClass}>
            {title}
          </h2>
          {typeof text === "string" ? (
            <p className={`${twoColums ? "md:columns-2 gap-6" : ""}`}>{text}</p>
          ) : (
            <div className={`${twoColums ? "md:columns-2 gap-6" : ""}`}>
              {text}
            </div>
          )}
          {link && (
            <div className="flex md:w-1/2 mt-4">
              <Button
                label={link.label}
                variant="solid"
                color={colorButton}
                url={link.url}
              />
            </div>
          )}
        </div>
      </div>

      {/* Image Section */}
      {image?.imageUrl && (
        <div className="content-card-img group w-full md:w-6/12">
          <figure className="relative w-full h-full">
            <div className="relative w-full h-full md:mt-0 mt-10">
              <Image
                src={image.imageUrl}
                alt={image.alt || title}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw"
                fill
                priority
              />
            </div>
            {image?.caption && (
              <figcaption className={captionClass}>{image.caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  );
};

export default ContentCard;
