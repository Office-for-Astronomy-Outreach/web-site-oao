import Link from "next/link";
import React from "react";
import classNames from "classnames";

export interface GridItem {
  title: string;
  description?: string;
  bgColor?: string;
  url?: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
  ariaLabel?: string;
}

export interface GridButtonProps {
  grildItem: GridItem;
  children?: React.ReactNode;
}

const GridButton: React.FC<GridButtonProps> = ({
  grildItem: { title, description, url = "#", target = "_self", ariaLabel },
  children,
}) => {
  const buttonClass = classNames(
    "flex flex-col items-center justify-top",
    "w-full h-full",
    "sm:aspect-square aspect-video shadow-md rounded-lg",
    "hover:scale-105 transition-transform",
    "p-8",
    "content-card-img",
    "relative",
    "text-center",
    "bg-dark-main",
    "text-white",
    "overflow-hidden"
  );

  const linkClass = classNames("z-[5] w-full h-full");

  const titleClass = classNames("text-center uppercase text-h5 font-medium");

  return (
    <div className={buttonClass}>
      {children}
      <Link
        href={url}
        target={target}
        className={linkClass}
        aria-label={ariaLabel}
      >
        <p className={titleClass}>{title}</p>
        {description && <span className="pt-2 text-xs">{description}</span>}
      </Link>
    </div>
  );
};

export default GridButton;
