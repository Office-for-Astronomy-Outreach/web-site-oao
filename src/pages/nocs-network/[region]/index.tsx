import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import useSWR from "swr"; // Importa el hook SWR
import Link from "next/link";

import { projectPath } from "@/utils/path";
import { RegionData } from "@/types";
import Banner from "@/components/Banner";
import EmailDisplay from "@/components/EmailDisplay";
import ContentCard from "@/components/ContentCard";
import Button from "@/components/Button";
import Parallax from "@/components/Parallax";

// Define el fetcher para SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const RegionPage = () => {
  const router = useRouter();
  const { region } = router.query; // Obtenemos la región de la URL

  const { data: regionData, isLoading } = useSWR<RegionData>(
    router.isReady && region ? `${projectPath}/api/regions/${region}` : null,
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

  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${projectPath}/images/nocs-network/region/background-principal.jpg`,
          alt: "The Milky Way galaxy arching above the platform of ESO's Very Large Telescope",
          caption:
            "The Milky Way galaxy arching above the platform of ESO's Very Large Telescope (VLT) on Cerro Paranal, Chile. Credit: John Colosimo (colosimophotography.com)/ESO",
        }}
        title={`National Outreach Coordinators  - ${regionData?.region?.name}`}
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <ContentCard
          title={"Celebrating Astronomy around the world, one story at a time"}
          text={
            "The International Astronomical Union (IAU) Office for Astronomy Outreach (OAO) is the IAU central coordination and dissemination point for astronomy outreach activities taking place around the world. To support projects at the level of a nation, territory, or country, the IAU OAO created the network of IAU National Outreach Coordinators (NOC): volunteers with extensive experience in public outreach, acting as the outreach representative of the IAU in their respective communities."
          }
          type={"secondary"}
          wfull
        />
        {!router.isReady || isLoading ? (
          <div className="h-screen">Loading...</div>
        ) : (
          <div className="flex flex-col gap-16">
            <h2 className="capitalize text-h2 font-bold w-full px-8">
              Directory of National Diffusion Coordinators in{" "}
              {regionData?.region?.name}
            </h2>
            <div className="relative rounded-xl overflow-auto shadow-sm bg-white">
              {regionData?.countries && (
                <table className="table-auto border-collapse w-full text-gray-600">
                  <thead>
                    <tr className="bg-primary-main text-white">
                      <th className="p-4 text-left">Logo</th>
                      <th className="p-4 text-left">Country</th>
                      <th className="p-4 text-left">
                        National Outreach Coorninator
                      </th>
                      <th className="p-4 text-left" colSpan={2}>
                        Contact
                      </th>
                      <th className="p-4 text-left">{""}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionData?.countries?.length > 0 ? (
                      regionData?.countries?.map((country, index) => (
                        <tr key={index} className="hover:bg-gray-100 border">
                          <td className="px-4">
                            <Image
                              src={
                                country.urlImg ??
                                `/images/nocs/${country.name}/oao-${country.slug}.png`
                              }
                              alt={`Logo ${country.name}`}
                              width={70}
                              height={55}
                              style={{
                                width: 70,
                                height: 55,
                                objectFit: "contain",
                              }}
                            />
                          </td>
                          <td className="px-4">{country.name}</td>
                          <td className="px-4">
                            {(country?.coordinators &&
                              country?.coordinators[0]?.name) ??
                              "Information not available"}
                          </td>
                          <td className="px-4">
                            {country?.coordinators &&
                            country?.coordinators.length > 0 &&
                            country?.coordinators[0]?.email ? (
                              <EmailDisplay
                                email={country.coordinators[0].email}
                              />
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="px-4">
                            {country?.webSite ? (
                              <Link href={country?.webSite}>
                                {country.name} web site
                              </Link>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="p-4">
                            <Button
                              label="More details"
                              url={`/nocs-network/${region}/${country?.slug}`}
                              variant="transparent"
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-8 py-2 text-center">
                          No countries available for this region
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
            <div>
              <p>
                <strong>Note:</strong> Places not mentioned here are those that,
                at the present moment, do not have an official IAU National
                Outreach Coordinator (NOC). If you are interested in applying
                for the NOC position, please contact the IAU Office for
                Astronomy Outreach via{" "}
                <EmailDisplay email="public@oao.iau.org" /> for further
                information.
              </p>
            </div>
          </div>
        )}

        <Parallax
          title="Visit Our World"
          subtitle="Astronomy Outreach Events"
          backgroundImage={{
            imgUrl: `${projectPath}/images/nocs-network/region/background-secondary.jpg`,
            caption:
              "Celestial conjunction: the Moon, Venus and Jupiter - Very Large Telescope (VLT) observatory at Paranal. Credit: ESO/Y. Beletsky",
          }}
        >
          <Button
            label="Events"
            url="/astronomy-outreach"
            variant="outline"
            color="light"
          />
        </Parallax>
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
