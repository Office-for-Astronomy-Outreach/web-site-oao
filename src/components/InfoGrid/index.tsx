import Link from "next/link";
import React from "react";
import classNames from "classnames";

export interface GridItem {
  title: string;
  description?: string;
  bgColor?: string;
  url?: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
}

export interface InfoGridProps {
  items: GridItem[];
}

const InfoGrid: React.FC<InfoGridProps> = ({ items }) => {
  const buttonClass = classNames(
    "flex flex-col items-center justify-center",
    "w-full h-full",
    "lg:aspect-square shadow-md rounded-lg",
    "hover:scale-105 transition-transform",
    "p-4",
    "content-card-img",
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url || "#"}
          className={`${buttonClass} ${item?.bgColor}`}
          target={item?.target ?? "_self"}
        >
          <h5 className="text-center uppercase text-h5 font-medium">
            {item.title}
          </h5>
          {item?.description && (
            <span className="pt-2 text-xs">{item?.description}</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default InfoGrid;
