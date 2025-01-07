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
  text: string;
  imageUrl?: string;
  link?: { url: string; label: string };
  type: "primary" | "secondary" | "transparent";
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  text,
  imageUrl,
  link,
  type,
}) => {
  const cardClass = classNames(
    "flex flex-wrap md:flex-nowrap",
    "items-stretch",
    "gap-8 px-8 md:py-16 py-4",
    "rounded-lg",
    imageUrl ? "justify-between" : "justify-center",
    {
      "bg-primary-main shadow-md text-white": type === "primary",
      "bg-white shadow-md": type === "secondary",
      "bg-transparent": type === "transparent",
    }
  );

  const titleClass = classNames("font-bold text-h2", {
    "text-body": type === "transparent",
    "text-primary-main": type === "secondary",
  });

  const colorButton = type === "primary" ? "dark" : "primary";

  return (
    <div className={cardClass} role="region" aria-labelledby={`${title}-header`}>
      {/* Title and Text Section */}
      <div
        className={classNames(
          imageUrl ? "md:w-5/12" : "md:w-8/12",
          type === "primary" ? "md:order-last" : ""
        )}
      >
        <div className="flex flex-col gap-6">
          <h2 id={`${title}-header`} className={titleClass} aria-label="Card Title">
            {title}
          </h2>
          <p aria-label="Card Description">
            {text}
          </p>
          {link && (
            <div>
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
        <div className="w-full md:w-6/12 content-card-img" aria-hidden="true">
          <div className="w-full md:h-full relative">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
