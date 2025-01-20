import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import { useRouter } from "next/router";
import useSWR from "swr"; // Importa el hook SWR

import Button from "@/components/Button";
import { RegionData } from "@/types";
import Image from "next/image";
import Banner from "@/components/Banner";

// Define el fetcher para SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const RegionPage = () => {
  const router = useRouter();
  const { region } = router.query; // Obtenemos la región de la URL
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const {
    data: regionData,
    error,
    isLoading,
  } = useSWR<RegionData>(
    router.isReady && region ? `/api/regions/${region}` : null,
    fetcher
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Nocs Network", href: "/nocs-network" },
    { label: `${regionData?.region?.name}`, href: `/nocs-network/${region}` },
  ];

  if (!router.isReady) return <div>Loading...</div>;
  if (isLoading) return <div>Loading region data...</div>;
  if (error) return <div>Error loading region data</div>;

  return (
    <div>
      {/* Hero Section */}
      <Banner
        image={`${path}/images/palet-blue-dot.jpg`}
        title={`National Outreach Coordinators  - ${regionData?.region?.name}`}
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Countries in {regionData?.region?.name}
        </h2>
        <div className="relative rounded-xl overflow-auto shadow-sm bg-white">
          {regionData?.countries && (
            <table className="border-collapse table-auto w-full">
              <thead>
                <tr className="">
                  <th className="px-4 py-2 text-left">.</th>
                  <th className="px-4 py-2 text-left">Country</th>
                  <th className="px-4 py-2 text-left">Coordinator</th>
                </tr>
              </thead>
              <tbody>
                {regionData?.countries?.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-2 text-center">
                      No countries available for this region
                    </td>
                  </tr>
                ) : (
                  regionData?.countries?.map((country, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-2">
                        <Image
                          src={
                            country.urlImg ||
                            `/images/nocs/${country.name}/oao-${country.slug}.png`
                          }
                          alt="logo"
                          width={70}
                          height={55}
                        />
                      </td>
                      <td className="px-4 py-2">{country.name}</td>
                      <td className="px-4 py-2">{country.id}</td>
                      <td className="px-4 py-2">
                        <Button
                          label="Read More"
                          url={`/nocs-network/${region}/${country?.slug}`}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegionPage;

// Cargar traducciones con ni18n
export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, [
        "home",
        "layout",
        "about",
      ])),
    },
  };
};
