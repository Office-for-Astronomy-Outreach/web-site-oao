import Image from "next/image";
import Link from "next/link";
import clsx from "classnames";
import { ImageGridItem } from "./types";

const baseClasses =
  "relative bg-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300 hover:scale-105";
const maskClasses = "absolute inset-0 bg-black bg-opacity-10 rounded-lg";
const textClasses =
  "absolute inset-0 flex items-end justify-center text-white text-lg font-bold text-center";

const ImageCard: React.FC<{ item: ImageGridItem; extraClasses?: string }> = ({
  item,
  extraClasses,
}) => (
  <Link
    href={item.link}
    className={clsx(baseClasses, extraClasses)}
    role="link"
    aria-label={item.title}
    target={item.target ?? "_self"}
  >
    <Image
      src={item.image}
      alt={item?.alt ?? item.title}
      fill
      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
      className="rounded-lg object-top"
      style={{ objectFit: "cover" }}
    />
    <div className={maskClasses}></div>
    <div className={textClasses}>
      <h5
        className={`text-h5 read ${item.hiddenTitle ? "sr-only" : "not-sr-only"} bg-black/70 w-full rounded-b-lg`}
      >
        {item.title}
      </h5>
    </div>
  </Link>
);

export default ImageCard;
