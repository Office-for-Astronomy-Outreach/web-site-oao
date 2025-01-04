import React from "react";
import Image from "next/image";
import classNames from "classnames";

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
    "gap-8 px-8 py-16",
    "rounded-lg",
    imageUrl ? "justify-between" : "justify-center",
    {
      "bg-primary shadow-md text-white": type === "primary",
      "bg-white shadow-md": type === "secondary",
      "bg-transparent": type === "transparent",
    }
  );

  const titleClass = classNames("font-bold text-h1", {
    "text-body": type === "transparent",
    "text-primary": type === "secondary",
  });

  return (
    <div className={cardClass} role="region" aria-labelledby={`${title}-header`}>
      {/* Title and Text Section */}
      <div
        className={classNames(
          imageUrl ? "md:w-5/12" : "md:w-7/12",
          type === "primary" ? "md:order-last" : ""
        )}
      >
        <div className="flex flex-col gap-6">
          <h1 id={`${title}-header`} className={titleClass} aria-label="Card Title">
            {title}
          </h1>
          <p className="text-h5" aria-label="Card Description">
            {text}
          </p>
          {link && (
            <a
              href={link.url}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              role="button"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          )}
        </div>
      </div>

      {/* Image Section */}
      {imageUrl && (
        <div className="w-full md:w-6/12 content-card-img" aria-hidden="true">
          <div className="w-full md:h-full relative">
            <Image
              src={imageUrl}
              alt=""
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
