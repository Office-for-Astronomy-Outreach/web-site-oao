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
    "w-full px-8 py-16 shadow-md relative rounded-lg",
    {
      "h-auto": size === "auto",
      "min-h-64": size === "xs",
      "min-h-80": size === "sm",
      "min-h-96": size === "md",
      "min-h-[25rem]": size === "lg",
      "min-h-screen": size === "xl",
    }
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
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
          style={{
            objectFit: image?.fit ?? "cover",
            objectPosition: image?.position ?? "top",
          }}
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
function clsx(
  p0: string,
  p1: {
    "h-auto": boolean;
    "min-h-64": boolean;
    "min-h-80": boolean;
    "min-h-96": boolean;
    "min-h-[35rem]": boolean;
    "min-h-screen": boolean;
  },
  arg0: {
    "h-auto": boolean;
    "h-64": boolean;
    "h-80": boolean;
    "h-96": boolean;
    "h-[35rem]": boolean;
    "h-screen": boolean;
  }
) {
  throw new Error("Function not implemented.");
}
