import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import { CountryData } from "@/types";
import Image from "next/image";
import Banner from "@/components/Banner";

const RegionPage = () => {
  const router = useRouter();
  const { region, country } = router.query; // Obtenemos la región de la URL
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [countryData, setCountryData] = useState<CountryData>();

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
  }, [region]);

  return (
    <div>
      {/* Hero Section */}
      <Banner
        image={`${path}/images/palet-blue-dot.jpg`}
        title={`National Outreach Coordinators  - ${countryData?.country.name}`}
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          {countryData?.country.name}
        </h2>
      </div>
    </div>
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
