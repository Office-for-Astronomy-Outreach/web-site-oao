import React from "react";
import Image from "next/image";
import classNames from "classnames";

import Button from "@/components/Button";

/**
 * ContentCard Component
 * A flexible card component that displays a title, text, optional image, and an optional link.
 *
 * Props:
 * @param {string} title - The title displayed in the card.
 * @param {string} text - The text description displayed in the card.
 * @param {string} [imageUrl] - Optional URL for the image.
 * @param {{ url: string; label: string }} [link] - Optional link object with URL and label.
 * @param {"primary" | "secondary" | "transparent"} type - Defines the card's styling type.
 */
interface ContentCardProps {
  title: string;
  text: string | React.ReactElement;
  imageUrl?: string;
  link?: { url: string; label: string };
  type: "primary" | "secondary" | "transparent";
  twoColums?: boolean,
  wfull?: boolean, 
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  text,
  imageUrl,
  link,
  type,
  twoColums,
  wfull,
}) => {
  const cardClass = classNames(
    "flex flex-wrap md:flex-nowrap",
    "items-stretch",
    "rounded-lg",
    imageUrl ? "justify-between" : "justify-center",
    {
      "px-8 md:py-16 py-8 bg-primary-main shadow-md text-white": type === "primary",
      "px-8 md:py-16 py-8 bg-white shadow-md text-gray-600": type === "secondary",
      "px-0 md:py-8 py-4 bg-transparent text-gray-600": type === "transparent",
    }
  );

  const titleClass = classNames("font-bold text-h2", {
    "text-body": type === "transparent",
    "text-primary-main": type === "secondary",
  });

  const colorButton = type === "primary" ? "dark" : "primary";

  const wSize = wfull ? "md:w-full" : "md:w-8/12";
  return (
    <section className={cardClass} role="region" aria-labelledby={`${title}-header`}>
      {/* Title and Text Section */}
      <div
        className={classNames(
          imageUrl ? "md:w-5/12" : wSize,
          type === "primary" ? "md:order-last" : ""
        )}
      >
        <div className="flex flex-col gap-6">
          <h2 id={`${title}-header`} className={titleClass} aria-label="Card Title">
            {title}
          </h2>
          {typeof text === "string" ?
          <p aria-label="Card Description" className={`${twoColums ? "md:columns-2 gap-6" : ""}`}>
            {text}
          </p> :
          <div aria-label="Card Description" className={`${twoColums ? "md:columns-2 gap-6" : ""}`}>{text}</div>
          }
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
      {imageUrl && (
        <div className="content-card-img w-full md:w-6/12" aria-hidden="true">
          <div className="relative w-full md:h-full md:mt-0 mt-10">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg aspect-[16/9]"
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ContentCard;
