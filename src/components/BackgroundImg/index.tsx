import React from "react";
import { BackgroundImgProps } from "./types";
import Image from "next/image";

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
}) => {
  const maskClasses = "absolute inset-0 bg-black bg-opacity-0 rounded-lg";
  const textClasses =
    "absolute inset-0 flex items-center justify-center text-center flex flex-col gap-8 text-white p-8";

  return (
    <section>
      {/* Title and Text Section */}
      <div
        role="region"
        aria-labelledby={`${title}-header`}
        className="w-full min-h-[400px] px-8 py-16 shadow-md relative rounded-lg"
      >
        <Image
          src={image.imageUrl}
          alt="alt"
          fill
          className="rounded-lg"
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
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
