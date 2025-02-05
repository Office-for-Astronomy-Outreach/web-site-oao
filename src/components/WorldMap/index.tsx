"use client"; // Asegura que el componente solo se renderiza en el cliente

import React, { useEffect, useState } from "react";

import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";

// Importar el mapa de continentes
import mapDataWorld from "@highcharts/map-collection/custom/world-continents.topo.json";

console.log(mapDataWorld);
// Evita que se ejecute en el servidor

const WorldMap: React.FC = () => {
  const [options, setOptions] = useState<unknown>(null);

  useEffect(() => {
    // Asegura que el código solo se ejecuta en el cliente

    setOptions({
      chart: {
        map: mapDataWorld,
      },
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },
      colorAxis: {
        min: 0,
      },
      series: [
        {
          data: [
            ["eu", 10],
            ["oc", 11],
            ["af", 12],
            ["as", 13],
            ["na", 14],
            ["sa", 15],
          ],
          name: "",
          states: {
            hover: {
              color: "#BADA55",
            },
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      ],
    });
  }, []);

  return options ? (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="mapChart"
        options={options}
      />

      <style jsx>{`
        .highcharts-legend {
          display: "none";
        }
      `}</style>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default WorldMap;
