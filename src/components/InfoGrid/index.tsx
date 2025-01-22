import Link from "next/link";
import React from "react";
import classNames from "classnames";
import SolarSystem from "../Animations/SolarSystem";
import StarCanvas from "../StarCanvas";
import BlackHole from "../BlackHole";

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
    "flex flex-col items-center justify-top",
    "w-full h-full",
    "sm:aspect-square aspect-video shadow-md rounded-lg",
    "hover:scale-105 transition-transform",
    "p-8",
    "content-card-img",
    "relative",
    "text-center",
    "bg-dark-main",
    "text-white"
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

        <div className={`${buttonClass} overflow-hidden`}>
          <Link
            href={items[0].url || "#"}
            
            target={items[0]?.target ?? "_self"}
            className="z-[5] w-full h-full"
          >
            <p className="text-center uppercase text-h5 font-medium">
              {items[0].title}
            </p>
            {items[0]?.description && (
              <span className="pt-2 text-xs">{items[0]?.description}</span>
            )}
          </Link>

          <div className="absolute aspect-square sm:w-[80%] sm:h-[80%] w-[250px] h-[250px] md:-bottom-[100px] -bottom-[170px]">
            <div className="sun">
              <div className="shadow-sun"></div>
            </div>
          </div>
        </div>

        <div className={`${buttonClass} overflow-hidden`}>
          <StarCanvas
            numStars={60}
            starColors={["#ffffff", "#e0e7ff", "#99b9eb"]}
            starSize={2}
          />
          <div className="comets comets-left comets-long"></div>
          <div className="comets comets-center comets-long"></div>
          <div className="h-[80%] w-full absolute bg-contain bg-no-repeat bottom-0" style={{ backgroundImage: `url(/images/orion.png)` }}></div>
          <Link
            href={items[1].url || "#"}
            
            target={items[1]?.target ?? "_self"}
            className="z-[5] w-full h-full"
          >
            <p className="text-center uppercase text-h5 font-medium z-[1]">
              {items[1].title}
            </p>
            {items[1]?.description && (
              <span className="pt-2 text-xs z-[1]">{items[1]?.description}</span>
            )}
          </Link>
        </div>

      <div className={`${buttonClass} overflow-hidden relative`}>
          <BlackHole />
          <Link
            href={items[2].url || "#"}
            target={items[0]?.target ?? "_self"}
            className="z-[5] w-full h-full"
          >
            <p className="text-center uppercase text-h5 font-medium">
              {items[2].title}
            </p>
            {items[2]?.description && (
              <span className="pt-2 text-xs">{items[2]?.description}</span>
            )}
          </Link>
        </div>

    <div className={`${buttonClass} overflow-hidden`}>
        <div className="absolute  xl:bottom-[8%] lg:-bottom-[17%] left-[50%] bottom-[25%]">
          <SolarSystem />
        </div>
        <Link
          href={items[3].url || "#"}
          
          target={items[0]?.target ?? "_self"}
          className="z-[5] w-full h-full"
        >
          <p className="text-center uppercase text-h5 font-medium z-[1]">
            {items[3].title}
          </p>
          {items[3]?.description && (
            <span className="pt-2 text-xs z-[1]">{items[3]?.description}</span>
          )}
          
        </Link>
    </div>
        
    </div>
  );
};

export default InfoGrid;
