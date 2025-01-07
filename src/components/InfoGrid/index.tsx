import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface GridItem {
  title: string;
  description?: string;
  bgColor: string;
  url?: string;
}

interface InfoGridProps {
  items: GridItem[];
}

const InfoGrid: React.FC<InfoGridProps> = ({ items }) => {

  const buttonClass = classNames(
    "flex flex-col items-center justify-center",
    "w-full h-full",
    "p-6 lg:aspect-square shadow-md rounded-lg",
    "hover:scale-105 transition-transform",
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <Link
            key={index}
            href={item.url || "#"}
            className={`${buttonClass} ${item.bgColor}`}
        >
            <span className="text-center uppercase">{item.title}</span>
            {item?.description && <span className="pt-2 text-xs">{item?.description}</span>}
        </Link>
      ))}
    </div>
  );
};

export default InfoGrid;
