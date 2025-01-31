import { useState, useMemo, useCallback } from "react";
import Button from "../Button"; // Asegúrate de importar correctamente tu componente Button
import router from "next/router";

import { Region } from "@/types";

interface WorldRegionsProps {
  regions: Region[];
}

const WorldRegions: React.FC<WorldRegionsProps> = ({ regions }) => {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Imagen por defecto
  const defaultBackgroundImage = `${path}/images/nocs-network/mapa.jpg`;

  // Estado para la imagen de fondo
  const [backgroundImage, setBackgroundImage] = useState<string>(
    defaultBackgroundImage
  );

  // Memorizar la imagen de fondo
  const memoizedBackgroundImage = useMemo(
    () => backgroundImage,
    [backgroundImage]
  );

  // Función para redirigir a la página de la región
  const handleRegionClick = useCallback((region: string) => {
    router.push(`/nocs-network/${region}`);
  }, []);

  // Función para cambiar la imagen de fondo al pasar el ratón por encima
  const handleMouseEnter = useCallback(
    (region: string) => {
      let newImage = defaultBackgroundImage; // Imagen por defecto

      switch (region) {
        case "americas":
          newImage = `${path}/images/nocs-network/america.jpg`;
          break;
        case "africa":
          newImage = `${path}/images/nocs-network/africa.jpg`;
          break;
        case "asia":
          newImage = `${path}/images/nocs-network/asia.jpg`;
          break;
        case "europe":
          newImage = `${path}/images/nocs-network/europa.jpg`;
          break;
        case "oceania":
          newImage = `${path}/images/nocs-network/oceania.jpg`;
          break;
        default:
          newImage = defaultBackgroundImage;
      }

      setBackgroundImage(newImage);
    },
    [path, defaultBackgroundImage]
  );

  // Función para restaurar la imagen de fondo
  const handleMouseLeave = useCallback(() => {
    setBackgroundImage(defaultBackgroundImage); // Restaurar la imagen original
  }, [defaultBackgroundImage]);

  return (
    <section aria-labelledby="">
      <div className="container mx-auto flex flex-col gap-8 p-8 bg-white rounded-lg shadow-md">
        <h2 id="" className="text-h2 font-bold text-teal-700">
          World
        </h2>

        <div className="container mx-auto flex md:flex-row flex-col">
          <div
            className="flex flex-1 md:w-2/3 h-[450px] w-full relative bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${memoizedBackgroundImage})` }}
          ></div>

          <div className="flex md:w-1/3 w-full  md:flex-col gap-3 md:p-4">
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
        </div>
      </div>
    </section>
  );
};

export default WorldRegions;
