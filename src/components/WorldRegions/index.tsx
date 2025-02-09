import { useState, useMemo, useCallback } from "react";
import Button from "../Button"; // Asegúrate de importar correctamente tu componente Button
import router from "next/router";
import Image from "next/image";

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
    <section aria-labelledby="">
      <div className="flex flex-col gap-8 p-8 bg-white rounded-lg shadow-md">
        <h2 id="" className="text-h2 font-bold text-primary-main">
          World Regions
        </h2>

        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex md:w-1/3 w-full md:flex-col flex-wrap justify-center gap-4">
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
