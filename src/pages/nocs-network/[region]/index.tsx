import type { GetServerSideProps } from 'next';
import { ni18nConfig } from 'ni18n.config';
import { loadTranslations } from 'ni18n'

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RegionPage = () => {
  const router = useRouter();
  const { region } = router.query; // Obtenemos la región de la URL

  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    if (region) {
      // Fetch del archivo JSON para obtener los países de la región seleccionada
      fetch("/data/regions.json")
        .then((response) => response.json())
        .then((data) => {
          setCountries(data[region as keyof typeof data] || []);
        })
        .catch((error) => console.error("Error al cargar los países:", error));
    }
  }, [region]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Countries in {region}</h2>
      <table className="table-fixed w-full border-separate border-spacing-4">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th className="px-4 py-2 text-left">Country</th>
          </tr>
        </thead>
        <tbody>
          {countries.length === 0 ? (
            <tr>
              <td colSpan={2} className="px-4 py-2 text-center">
                No countries available for this region
              </td>
            </tr>
          ) : (
            countries.map((country, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2">{country}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RegionPage;

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, ['home', 'layout', 'about'])),
    },
  };
};