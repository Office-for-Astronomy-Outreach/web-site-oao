import { useState, useCallback } from "react";
import Button from "../Button"; // Asegúrate de importar correctamente tu componente Button
import router from "next/router";

import { Region } from "@/types";
import WorldMap from "../WorldMap";

interface WorldRegionsProps {
  regions: Region[];
}

const WorldRegions: React.FC<WorldRegionsProps> = ({ regions }) => {
  // Estado para la imagen de fondo
  const [regionSelected, setRegionSelected] = useState<string>("");

  // Función para redirigir a la página de la región
  const handleRegionClick = useCallback((region: string) => {
    router.push(`/nocs-network/${region}`);
  }, []);

  // Función para cambiar la imagen de fondo al pasar el ratón por encima
  const handleMouseEnter = useCallback((region: string) => {
    setRegionSelected(region);
  }, []);

  // Función para restaurar la imagen de fondo
  const handleMouseLeave = useCallback(() => {
    setRegionSelected(""); // Restaurar la imagen original
  }, []);

  return (
    <section>
      <div className="flex flex-col gap-8 px-8 rounded-lg">
        <h2 id="world-regions" className="text-h2 font-bold text-body">
          World Regions
        </h2>

        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex md:w-1/3 w-full md:flex-col flex-wrap justify-top gap-4 mt-8">
            {regions.length > 0 &&
              regions.map((region) => (
                <Button
                  key={region.slug}
                  label={region.name}
                  color="dark"
                  variant="outline"
                  onMouseEnter={() => handleMouseEnter(region.slug)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleRegionClick(region.slug)}
                />
              ))}
          </div>
          <div className="flex flex-1 relative">
            <WorldMap
              handleClick={handleRegionClick}
              regionSelected={regionSelected}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldRegions;
