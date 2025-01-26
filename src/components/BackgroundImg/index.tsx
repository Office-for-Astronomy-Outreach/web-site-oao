import React from "react";
import { BackgroundImgProps } from "./types";

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
  return (
    <section role="region" aria-labelledby={`${title}-header`}>
      {/* Title and Text Section */}
      <div
        className="w-full px-8 py-16 shadow-md rounded-lg text-white"
        style={{
          background: `url(${image.imageUrl})`,
          backgroundSize: "cover !important",
        }}
      >
        <div className="flex flex-col gap-8">
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
