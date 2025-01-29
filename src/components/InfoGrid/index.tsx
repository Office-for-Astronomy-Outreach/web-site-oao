import Link from "next/link";
import React from "react";
import classNames from "classnames";
import Image from "next/image";

export interface GridItem {
  title: string;
  description?: string;
  bgColor?: string;
  url?: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
  image: string;
}

export interface InfoGridProps {
  items: GridItem[];
}

const InfoGrid: React.FC<InfoGridProps> = ({ items }) => {
  const buttonClass = classNames(
    "flex flex-col items-center justify-top",
    "hover:scale-105 transition-transform",
    "p-8 gap-8",
    "relative",
    "text-body rounded-lg border border-gray-300 text-gray-600"
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <Link
          href={item.url || "#"}
          target={item?.target ?? "_self"}
          className={buttonClass}
          key={index}
        >
          <Image
            src={item.image}
            alt={item.title}
            height={100}
            width={200}
            style={{ objectFit: "contain" }}
            className="aspect-video"
          />

          {item?.description && (
            <span className="text-p text-gray-600">{item?.description}</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default InfoGrid;
