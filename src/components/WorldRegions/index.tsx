import { useState } from "react";
import Button from "../Button"; // Asegúrate de importar correctamente tu componente Button
import router from "next/router";

const WorldRegions: React.FC = () => {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Estado para la imagen de fondo
  const [backgroundImage, setBackgroundImage] = useState<string>(
    `${path}/images/mapa.jpg`
  ); // Imagen por defecto

  const handleRegionClick = (region: string) => {
    // Redirige a la página de la región, pasando el nombre de la región como parámetro en la URL
    router.push(`/nocs-network/${region}`);
  };

  // Función para cambiar la imagen de fondo
  const handleMouseEnter = (region: string) => {
    let newImage = "";

    switch (region) {
      case "america":
        newImage = `${path}/images/america.jpg`; // Ruta de la imagen de América
        break;
      case "africa":
        newImage = `${path}/images/africa.jpg`; // Ruta de la imagen de África
        break;
      case "asia":
        newImage = `${path}/images/asia.jpg`; // Ruta de la imagen de Asia
        break;
      case "europa":
        newImage = `${path}/images/europa.jpg`; // Ruta de la imagen de Europa
        break;
      case "oceania":
        newImage = `${path}/images/oceania.jpg`; // Ruta de la imagen de Oceanía
        break;
      default:
        newImage = `${path}/images/mapa.jpg`; // Imagen por defecto
    }

    setBackgroundImage(newImage); // Actualizar el estado de la imagen
  };

  // Función para restablecer la imagen de fondo
  const handleMouseLeave = () => {
    setBackgroundImage(`${path}/images/mapa.jpg`); // Restaurar la imagen original
  };

  return (
    <section aria-labelledby="">
      <div className="container mx-auto flex flex-col gap-8 p-8 bg-white rounded-lg shadow-md">
        <h2 id="" className="text-h2 font-bold text-teal-700">
          World Regions
        </h2>

        <div className="container mx-auto flex md:flex-row flex-col ">
          {/* Contenedor para la imagen con la clase de fondo dinámico */}
          <div
            className="flex flex-1 md:w-1/2 w-full relative aspect-video md:aspect-auto bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Establecer la imagen de fondo según el estado
          ></div>

          <div className="flex md:w-1/2 w-full justify-center items-center flex-wrap gap-3 md:p-4">
            {/* Botones que llaman a la función para cambiar la imagen de fondo */}
            <Button
              label={"America"}
              color="dark"
              variant="outline"
              onMouseEnter={() => handleMouseEnter("america")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRegionClick("america")}
            />
            <Button
              label={"Africa"}
              color="dark"
              variant="outline"
              onMouseEnter={() => handleMouseEnter("africa")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRegionClick("africa")}
            />
            <Button
              label={"Asia"}
              color="dark"
              variant="outline"
              onMouseEnter={() => handleMouseEnter("asia")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRegionClick("asia")}
            />
            <Button
              label={"Europa"}
              color="dark"
              variant="outline"
              onMouseEnter={() => handleMouseEnter("europa")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRegionClick("europa")}
            />
            <Button
              label={"Oceania"}
              color="dark"
              variant="outline"
              onMouseEnter={() => handleMouseEnter("oceania")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRegionClick("oceania")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldRegions;
