import Link from "next/link";
import React from "react";
import classNames from "classnames";
import Image from "next/image";

export interface GridItem {
  title: string;
  description?: string;
  bgColor?: string;
  url?: string;
  target?: string | "_blank" | "_self" | "_top" | "_parent";
  image?: string;
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
    "text-body rounded-lg shadow-lg text-gray-600",
    "bg-white"
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <Link
          href={item.url || "#"}
          target={item?.target ?? "_self"}
          className={buttonClass}
          key={index}
        >
          <div className="relative aspect-auto w-full">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={100}
                style={{ objectFit: "contain", width: "100%", height: 100 }}
              />
            ) : (
              <h3>{item.title}</h3>
            )}
          </div>

          {item?.description && (
            <p className="text-xs text-gray-600">{item?.description}</p>
          )}
        </Link>
      ))}
    </div>
  );
};

export default InfoGrid;
