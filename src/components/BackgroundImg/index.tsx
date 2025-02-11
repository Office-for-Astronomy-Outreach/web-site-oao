import React from "react";
import { BackgroundImgProps } from "./types";
import Image from "next/image";
import classNames from "classnames";

/**
 * `BackgroundImg` Component
 *
 * A flexible and accessible card component that displays a title, text, and ackground image
 *
 */
const BackgroundImg: React.FC<BackgroundImgProps> = ({
  title,
  text,
  image,
  size = "lg",
}) => {
  const maskClasses = "absolute inset-0 bg-black bg-opacity-0 rounded-lg";
  const textClasses =
    "absolute inset-0 flex items-center justify-center text-center flex flex-col gap-8 text-white p-8";

  const containImgClass = classNames(
    "w-full px-8 py-16 shadow-md relative rounded-lg group",
    {
      "h-auto": size === "auto",
      "min-h-64": size === "xs",
      "min-h-80": size === "sm",
      "min-h-96": size === "md",
      "min-h-[25rem]": size === "lg",
      "min-h-screen": size === "xl",
    }
  );

  const captionClass = classNames(
    "absolute z-[1] bottom-0 left-0 w-full bg-black/60 p-2 text-sm text-center text-white rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  );

  return (
    <section>
      {/* Title and Text Section */}
      <div
        role="region"
        aria-labelledby={`${title}-header`}
        className={containImgClass}
      >
        <Image
          src={image.imageUrl}
          alt="alt"
          fill
          className="rounded-lg h-2"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          style={{
            objectFit: image?.fit ?? "cover",
            objectPosition: image?.position ?? "top",
          }}
        />
        {image?.caption && (
          <figcaption className={captionClass}>{image?.caption}</figcaption>
        )}
        <div className={maskClasses}></div>
        <div className={textClasses}>
          <h2 id={`${title}-header`} className="font-bold text-h2">
            {title}
          </h2>
          {typeof text === "string" ? (
            <p className="xl:text-h5 text-p">{text}</p>
          ) : (
            <div className="xl:text-h5 text-p">{text}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BackgroundImg;
