import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import ContentCard from "@/components/ContentCard";
import InfoGrid from "@/components/InfoGrid";
import Parallax from "@/components/Parallax";
import CardTeamMember from "@/components/TeamCard";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";

import BlueDotAnimation from "@/animations/BlueDotAnimation";
import Link from "next/link";

export default function About() {
  const { t } = useTranslation("about");

  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about-us" },
  ];

  const teamMembers = [
    {
      name: "Dr. Kelly Blumenthal",
      role: "Director",
      image: `${path}/images/kelly.jpeg`,
      description:
        "She is an astronomer-turned-educator dedicated to science communication, promoting scientific attitudes, and creating educational opportunities for marginalized groups.",
    },
    {
      name: "Dr. Naomi Asabre Frimpong",
      role: "Deputy Director",
      image: `${path}/images/drnaomi.png`,
      description:
        "Vice President of AfAS, promotes astronomy in Africa through outreach, mentoring, and global collaboration. She holds a Ph.D. in astronomy and serves on the African Network of Women in Astronomy board.",
    },
    {
      name: "Cintia Duran",
      role: "International Outreach Officer",
      image: `${path}/images/cintia.png`,
      description:
        "Cintia's work focuses on a unique and interdisciplinary approach to astronomy outreach, at the intersection of planetary science, language, and sound, particularly in communicating complex scientific ideas and our place in the universe.",
    },
  ];

  const info = [
    {
      title: "IAU COMMISSION C2",
      description:
        "We work with IAU Commission C2 to co-organise the Communicating Astronomy with the Public Conferences, among other IAU-related events.",
      bgColor: "bg-blue-200",
      url: "https://capconferences.org/",
    },
    {
      title: "LEIDEN UNIVERSITY",
      description:
        "We partner with Leiden University for our Telescopes for All project, collaboration on Science and Society, and through our IAU OAO Science Communication Internship",
      bgColor: "bg-blue-300",
      url: "https://www.universiteitleiden.nl/",
    },
    {
      title: "SKA ORGANISATION",
      bgColor: "bg-blue-400",
      description:
        "The SKAO provides the funding for our NOC/SKACON Funding Scheme projects - a joint funding program in which NOCs and SKACONS collaborate to perform",
      url: "https://www.skao.int/en",
    },
    {
      title: "IUCAA",
      description:
        "Astronomy communicators from IUCAA work with us on several of our programs throughout the year. In addition, staff from IUCAA provide technical support for",
      bgColor: "bg-blue-500",
      url: "https://www.iucaa.in/",
    },
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      {/* Hero Section */}
      <Banner
        image={`${path}/images/about/sardinia-radio-telescope.jpg`}
        title={t("title")}
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-16">
          {/* About Section */}
          <ContentCard
            title={t("about.title")}
            text={<Trans i18nKey={t("about.description")} />}
            type="secondary"
            twoColums
            wfull
          />

          <ContentCard
            title={t("astronomy-for-everyone.title")}
            text={t("astronomy-for-everyone.description")}
            image={{
              imageUrl: `${path}/images/about/observing-mercury.jpg`,
            }}
            type="transparent"
          />

          {/* Strategic Actions */}
          <ContentCard
            title={t("strategic-actions.title")}
            text={t("strategic-actions.description")}
            image={{
              imageUrl: `${path}/images/about/about-new.png`,
            }}
            type="primary"
          />

          {/* Mission and Vision */}
          <div className="relative">
            <div className="sm:block hidden">
              <BlueDotAnimation />
            </div>
            <div className="flex flex-col gap-8 sm:ml-40">
              <section className="items-stretch justify-center p-8">
                <div className="flex items-center gap-6">
                  <h2 className="text-h2 font-bold">{t("mission.title")}</h2>
                </div>
                <p className="mt-6 text-gray-600">{t("mission.description")}</p>
              </section>

              <section className="items-stretch justify-center p-8">
                <div className="flex items-center  gap-6">
                  <h2 className="text-h2 font-bold">{t("vision.title")}</h2>
                </div>
                <p className="mt-6 text-gray-600">{t("vision.description")}</p>
              </section>
            </div>
          </div>

          {/* Team Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-bold text-body">{t("team.title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grild-cols-6 gap-6">
              {teamMembers.map((member, index) => (
                <CardTeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  description={member.description}
                />
              ))}
            </div>
          </div>

          {/* Partners Section */}

          <section>
            <div className="flex flex-col gap-6 bg-primary-main px-8 md:py-16 py-8 shadow-md rounded-lg">
              <h2 className="text-h2 font-bold text-white">
                {t("partners.title")}
              </h2>
              <div className="flex flex-wrap sm:flex-row gap-6 relative">
                <div className="w-full">
                  <p className="text-white">{t("partners.description")}</p>
                </div>
                <div className="flex sm:w-1/2 md:w-1/4 w-full justify-center items-center">
                  <Link
                    className="w-full relative rounded-lg shadow-lg aspect-video bg-white hover:scale-105 transition-transform"
                    href="https://www.nao.ac.jp/en/"
                    target="_blank"
                  >
                    <Image
                      src={`${path}/images/naoj-logo.png`}
                      alt="NAOJ Logo"
                      layout="fill"
                      objectFit="contain"
                      className="p-6"
                    />
                  </Link>
                </div>
                <div className="flex sm:w-1/2 md:w-1/4 w-full justify-center items-center">
                  <Link
                    className="w-full relative rounded-lg shadow-lg aspect-video bg-white hover:scale-105 transition-transform"
                    href="https://www.iau.org/"
                    target="_blank"
                  >
                    <Image
                      src={`${path}/images/iau-logo.jpg`}
                      alt="IAU Logo"
                      layout="fill"
                      objectFit="contain"
                      className="p-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Collaboration Section */}
          <section className="flex flex-col gap-6 px-8 md:py-16 py-8 bg-white shadow-md rounded-lg">
            <h2 className="text-h2 font-bold text-body">
              {t("collaborations.title")}
            </h2>
            <div className="w-full">
              <p className="text-gray-600 ">
                {t("collaborations.description")}
              </p>
            </div>
            <div className="w-full">
              <InfoGrid items={info} />
            </div>
          </section>

          <Parallax
            title="Visit Our World"
            subtitle="Astronomy Outreach Map"
            backgroundImage={{ imgUrl: `${path}/images/parallax-bg.jpg` }}
          ></Parallax>
        </div>
      </div>
    </div>
  );
}

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
