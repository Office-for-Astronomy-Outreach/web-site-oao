import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import useSWR from "swr"; // Importa el hook SWR

import { projectPath } from "@/utils/path";
import { RegionData } from "@/types";
import Button from "@/components/Button";
import Banner from "@/components/Banner";

// Define el fetcher para SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const RegionPage = () => {
  const router = useRouter();
  const { region } = router.query; // Obtenemos la región de la URL

  const { data: regionData } = useSWR<RegionData>(
    router.isReady && region ? `/api/regions/${region}` : null,
    fetcher
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Nocs Network", href: "/nocs-network" },
    { label: `${regionData?.region?.name}`, href: `/nocs-network/${region}` },
  ];

   const containerClass = classNames(
      "md:container",
      "md:mx-auto mx-2",
      "my-16",
      "md:px-4",
      "py-2",
      "flex flex-col gap-24"
    );

  if (!router.isReady) return <div className="h-screen">Loading...</div>;

  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${projectPath}/images/nocs-network/background-principal.jpg`,
          alt: "The Milky Way galaxy arching above the platform of ESO's Very Large Telescope",
          caption:
            "The Milky Way galaxy arching above the platform of ESO's Very Large Telescope (VLT) on Cerro Paranal, Chile. Credit: John Colosimo (colosimophotography.com)/ESO",
        }}
        title={`National Outreach Coordinators  - ${regionData?.region?.name}`}
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <div className="relative rounded-xl overflow-auto shadow-sm bg-white p-8">
          {regionData?.countries && (
            <table className="border-collapse table-auto w-full text-gray-600">
              <thead>
                <tr className="text-primary-main">
                  <th className="p-4 text-left">Logo</th>
                  <th className="p-4 text-left">Country</th>
                  <th className="p-4 text-left">National Outreach Coorninator </th>
                </tr>
              </thead>
              <tbody>
                {regionData?.countries?.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-2 text-center">
                      No countries available for this region
                    </td>
                  </tr>
                ) : (
                  regionData?.countries?.map((country, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-4">
                        <Image
                          src={
                            country.urlImg ??
                            `/images/nocs/${country.name}/oao-${country.slug}.png`
                          }
                          alt="logo"
                          width={70}
                          height={55}
                        />
                      </td>
                      <td className="p-4">{country.name}</td>
                      <td className="p-4">Information not available</td>
                      <td className="p-4">
                        {/*Button
                          label="Read More"
                          url={`/nocs-network/${region}/${country?.slug}`}
                          disabled
                        />*/}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
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
