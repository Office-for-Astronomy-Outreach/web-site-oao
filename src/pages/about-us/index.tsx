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
import classNames from "classnames";

export default function About() {
  const { t } = useTranslation("about");
  const [isMounted, setIsMounted] = useState(false);

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
        "Kelly Blumenthal is an astrophysicist and science communicator who has had the fortune of living in and working with many communities across the United States and worldwide. These experiences have shaped Kelly’s perspectives on the importance of astronomy communication in building STEM opportunities for under-resourced people worldwide and its role in science writ large.",
    },
    {
      name: "Dr. Naomi Asabre Frimpong",
      role: "Deputy Director",
      image: `${path}/images/drnaomi.png`,
      description:
        "Naomi Asabre Frimpong is an astrophysicist, science communicator, and leader in African astronomy. Coming to the OAO from the Ghana Space Science and Technology Institute (GSSTI), Naomi’s work has advanced the field of astronomy and the growth of scientific communities across Africa. As the former Vice President of the African Astronomical Society, she championed the development of astronomy across the continent and continues to do so on a global scale in her new role as Deputy Director of the IAU Office for Astronomy Outreach.",
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
      image: `${path}/images/collaborates/commissionc2-logo.png`,
    },
    {
      title: "LEIDEN UNIVERSITY",
      description:
        "We partner with Leiden University for our Telescopes for All project, collaboration on Science and Society, and through our IAU OAO Science Communication Internship",
      bgColor: "bg-blue-300",
      url: "https://www.universiteitleiden.nl/",
      image: `${path}/images/collaborates/universiteit-leiden-logo.png`,
    },
    {
      title: "SKA ORGANISATION",
      bgColor: "bg-blue-400",
      description:
        "The SKAO provides the funding for our NOC/SKACON Funding Scheme projects - a joint funding program in which NOCs and SKACONS collaborate to perform",
      url: "https://www.skao.int/en",
      image: `${path}/images/collaborates/ska-logo.png`,
    },
    {
      title: "IUCAA",
      description:
        "Astronomy communicators from IUCAA work with us on several of our programs throughout the year. In addition, staff from IUCAA provide technical support for",
      bgColor: "bg-blue-500",
      url: "https://www.iucaa.in/",
      image: `${path}/images/collaborates/iucaa-logo.jpg`,
    },
  ];

  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

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

      <div className={containerClass}>
        <div className="flex flex-col gap-8">
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
              imageUrl: `${path}/images/about/100 Hours of Astronomy Ecuador Observatorio Astronomico de Quito.png`,
              caption: t("astronomy-for-everyone.caption-img"),
            }}
            type="transparent"
          />

          {/* Mission and Vision */}
          <div className="relative">
            <div className="md:block hidden">
              <BlueDotAnimation />
            </div>
            <div className="flex flex-col bg-primary-main shadow-md rounded-lg md:p-16 gap-8">
              {/* Mission */}
              <div className="flex flex-row justify-between">
                <div className="md:w-1/4"></div>
                <div className="md:w-2/4 px-8 py-8 justify-center flex flex-col gap-8">
                  <h2 className="font-bold text-h2 text-white">
                    {t("mission.title")}
                  </h2>
                  <p className="xl:text-h5 text-p text-white">
                    {t("mission.description")}
                  </p>
                </div>
              </div>
              {/* Vision */}
              <div className="flex flex-row justify-between">
                <div className="md:w-2/4 px-8 py-8 md:py-16 justify-center flex flex-col gap-8">
                  <h2 className="font-bold text-h2 text-white">
                    {t("vision.title")}
                  </h2>
                  <p className="xl:text-h5 text-p text-white">
                    {t("vision.description")}
                  </p>
                </div>
                <div className="md:w-1/4"></div>
              </div>
              {/* Strategic Actions */}
              <div className="flex flex-row justify-between">
                <div className="md:w-1/4"></div>
                <div className="md:w-2/4 px-8 py-8 justify-center flex flex-col gap-8">
                  <h2 className="font-bold text-h2 text-white">
                    {t("strategic-actions.title")}
                  </h2>
                  <p className="xl:text-h5 text-p text-white">
                    {t("strategic-actions.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col gap-8">
          <h2 className="text-h2 font-bold text-body px-8">
            {t("team.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
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
        <section
          aria-labelledby="partners-section"
          className="bg-primary-main shadow-md rounded-lg py-8 md:py-16 px-8"
        >
          <div className="flex flex-col w-full gap-8 mb-16">
            <h2 id="partners-section" className="text-h2 font-bold text-white">
              {t("partners.title")}
            </h2>
            <p className="text-white xl:text-h5 text-p">
              {t("partners.description")}
            </p>
          </div>
          <div className="flex w-full sm:flex-row flex-col justify-center items-center gap-8">
            <Link
              href="https://www.iau.org/"
              target="_blank"
              className="relative w-[250px] rounded-lg aspect-video hover:scale-105 transition-transform"
              aria-label="Visit the International Astronomical Union website"
            >
              <Image
                src={`${path}/images/partners/iau-logo-white.png`}
                alt="IAU Logo"
                layout="fill"
                objectFit="contain"
              />
            </Link>
            <Link
              href="https://www.astronomyoutreach.network/"
              target="_blank"
              className="relative w-[250px] rounded-lg aspect-video hover:scale-105 transition-transform"
              aria-label="Visit the Astronomy Outreach Network website"
            >
              <Image
                src={`${path}/images/partners/naoj-logo-white.png`}
                alt="Astronomy Outreach Network Logo"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="flex flex-col gap-16 bg-white shadow-md rounded-lg py-8 md:py-16 px-8">
          <div className="px-8 flex flex-col gap-8">
            <h2 className="text-h2 font-bold text-primary-main ">
              {t("collaborations.title")}
            </h2>
            <p className="text-gray-600 xl:text-h5 text-p">
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
  );
}

// Server-side props
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
