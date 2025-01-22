import React from "react";
import GridButton, { GridItem } from "@/components/GridButton";
import SolarSystem from "@/components/Animations/SolarSystem";
import StarCanvas from "@/components/StarCanvas";
import BlackHole from "@/components/BlackHole";

export interface WindowSpaceProps {
  items: GridItem[];
}

const WindowSpace: React.FC<WindowSpaceProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {items.map((item, index) => (
        <GridButton grildItem={ {
          title: item.title,
          description: item.description,
          url: item.url,
          target: item.target,
          ariaLabel:`Navigate to ${item.title}`
        }}
        key={index}          
            
          >
          {index === 0 && (
            <div className="absolute aspect-square sm:w-[80%] sm:h-[80%] w-[250px] h-[250px] md:-bottom-[100px] -bottom-[170px]">
              <div className="sun">
                <div className="shadow-sun"></div>
              </div>
            </div>
          )}

          {index === 1 && (
            <>
              <StarCanvas
                numStars={60}
                starColors={["#ffffff", "#e0e7ff", "#99b9eb"]}
                starSize={2}
              />
              <div className="comets comets-left comets-long"></div>
              <div className="comets comets-center comets-long"></div>
              <div
                className="h-[80%] w-full absolute bg-contain bg-no-repeat bottom-0"
                style={{ backgroundImage: `url(/images/orion.png)` }}
              ></div>
            </>
          )}

          {index === 2 && <BlackHole />}

          {index === 3 && (
            <div className="absolute xl:bottom-[8%] lg:-bottom-[17%] left-[50%] bottom-[25%]">
              <SolarSystem />
            </div>
          )}
        </GridButton>
        
      ))}
    </div>
  );
};

export default WindowSpace;
