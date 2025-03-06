import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { CountryData } from "@/types";
import Image from "next/image";
import Banner from "@/components/Banner";
import classNames from "classnames";
import CardTeamMember from "@/components/TeamCard";

import { typeMember } from "@/types";
import EmailDisplay from "@/components/EmailDisplay";
import { projectPath } from "@/utils/path";

const RegionPage = () => {
  const router = useRouter();
  const { region, country } = router.query; // Obtenemos la región de la URL
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [countryData, setCountryData] = useState<CountryData>();

  const memberRole = (role: string) => {
    switch (role) {
      case "coordinator":
        return typeMember.coordinator;
      case "committee":
        return typeMember.committee;
      case "observer":
        return typeMember.observer;
      case "vice":
        return typeMember.vice;

      default:
        return typeMember.observer;
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Nocs Network", href: "/nocs-network" },
    {
      label: `${countryData?.region?.name}`,
      href: `/nocs-network/${region}`,
    },
    {
      label: `${countryData?.country.name}`,
      href: `/nocs-network/${region}/${country}`,
    },
  ];

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(`${projectPath}/api/countries/${country}`);
        if (response.ok) {
          const data = await response.json();
          setCountryData(data);
        } else {
          console.error("Failed to fetch regions");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (router.isReady) {
      fetchRegions();
    }
  }, [country, region, router.isReady]);

  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

  const images = [
    {
      src: `${path}/images/nocs-network/noc-background.jpg`,
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: `${path}/images/nocs-network/noc-background.jpg`,
      width: 320,
      height: 174,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: `${path}/images/nocs-network/noc-background.jpg`,
      width: 320,
      height: 274,
    },
    {
      src: `${path}/images/nocs-network/noc-background.jpg`,
      width: 320,
      height: 274,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${path}/images/nocs-network/noc-background.jpg`,
          alt: "",
        }}
        title={
          <div>
            <span className="text-p">National Outreach Coordinator</span> <br />
            {countryData?.country.name}
          </div>
        }
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <div className="space-y-16 px-8">
          <h2 className="capitalize text-h2 font-bold w-full">
            {countryData?.country.name || ""}
          </h2>
          <div className="flex md:flex-row flex-col gap-8">
            <div className="flex-1">
              <p className="xl:text-h5 text-p text-gray-600">
                {countryData?.country.description || ""}
              </p>
            </div>
            <div className="aspect-video bg-white relative md:w-1/2 w-full h-auto rounded-lg shadow-sm">
              <Image
                src={
                  countryData?.country.urlImg ??
                  `/images/nocs/${countryData?.country.name}/oao-${countryData?.country.slug}.png`
                }
                alt={"logo"}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1200px) 100vw"
                fill
                priority
                className="p-8"
              />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col gap-8 px-8">
            <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full">
              Formal president and active members of the society
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {countryData?.activer_members.map((member, index) => (
              <CardTeamMember
                key={index}
                name={member.name}
                role={memberRole(member?.role)}
                image={member.url_image}
                description={
                  <>
                    <div className="flex gap-2">
                      <span className="font-bold">Affiliation: </span>
                      {member?.affiliation}
                    </div>
                    <div className="flex gap-2">
                      {member?.email && (
                        <>
                          <span className="font-bold">Email:</span>
                          <EmailDisplay email={member?.email} />
                        </>
                      )}
                    </div>
                  </>
                }
              />
            ))}
          </div>
          {countryData?.others_members &&
            countryData?.others_members.length > 0 && (
              <>
                <div className="flex flex-col gap-8 px-8">
                  <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full">
                    Former members of the society
                  </h2>
                </div>
                <div className=" relative rounded-xl overflow-auto shadow-sm">
                  <table className="border-collapse table-auto w-full text-gray-600 bg-white">
                    <thead className="bg-primary-main">
                      <tr className="text-white">
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Position</th>
                        <th className="p-4 text-left">Afiliation</th>
                        <th className="p-4 text-left">Email</th>
                        <th className="p-4 text-left">{""}</th>
                      </tr>
                    </thead>
                    {countryData?.others_members.map((member, index) => (
                      <tr key={index}>
                        <td className="p-4">{member.name}</td>
                        <td className="p-4">{memberRole(member?.role)}</td>
                        <td className="p-4">{member.affiliation}</td>
                        <td className="p-4">
                          {member?.email && (
                            <EmailDisplay email={member?.email} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </>
            )}
        </div>

        <div className="space-y-16">
          <h2 className="capitalize text-h2 font-bold md:w-2/3 w-full px-8">
            Images of Activites in {countryData?.country.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((item, index) => (
              <div className="h-[250px] w-full relative rounded" key={index}>
                <Image
                  src={item.src}
                  alt={item?.alt ?? ""}
                  layout="fill"
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionPage;

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
