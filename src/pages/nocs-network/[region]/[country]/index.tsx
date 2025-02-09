import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import { CountryData } from "@/types";
import Image from "next/image";
import Banner from "@/components/Banner";
import classNames from "classnames";
import CardTeamMember from "@/components/TeamCard";

import { typeMember } from "@/types";
import EmailDisplay from "@/components/EmailDisplay";

const RegionPage = () => {
  const router = useRouter();
  const { region, country } = router.query; // Obtenemos la región de la URL
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [countryData, setCountryData] = useState<CountryData>();

  const memberRole = (role: string) => {
    switch (role) {
      case "0":
        return typeMember.coordinator;
      case "1":
        return typeMember.committee;
      case "2":
        return typeMember.observer;
      case "3":
        return typeMember.vice;

      default:
        return typeMember.observer;
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Nocs Network", href: "/nocs-network" },
    {
      label: `${region}`,
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
        const response = await fetch(`/api/countries/${country}`);
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
        <div className="flex flex-col gap-16 px-8">
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
                alt={""}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
                fill
                priority
                className="p-8"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8 px-8">
            <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full">
              Formal president <br />
              and members of society
            </h2>
            <p className="text-gray-600 xl:text-h5 text-p w-full"></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData?.members.map((member, index) => (
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
                    <div className="mt-4">{member?.description}</div>
                  </>
                }
              />
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
