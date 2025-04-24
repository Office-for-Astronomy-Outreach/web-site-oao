import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { useTranslation } from "react-i18next";
import { loadTranslations } from "ni18n";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import ImageCard from "@/components/ImageCard";
import ImageGridsSection from "@/components/ImageGridsSection";
import Parallax from "@/components/Parallax";
import StarCanvas from "@/components/Animations/StarCanvas";
//import InfoGrid from "@/components/InfoGrid";
//import BackgroundImg from "@/components/BackgroundImg";
import { projectPath } from "@/utils/path";

export default function Outreach() {
  const { t } = useTranslation("public-engagement");

  const items = [
    {
      title: "100 Hours of Astronomy",
      link: "/global-projects/100-hours-of-astronomy",
      image: `${projectPath}/images/global-community/100hours.png`,
      alt: "",
      hiddenTitle: true,
    },
    {
      title: "Dark Skies",
      link: "https://www.eso.org/public/about-eso/dark-skies-preservation/",
      image: `${projectPath}/images/global-community/dark-and-quiet-skies.jpeg`,
      alt: "",
      hiddenTitle: true,
    },
    {
      title: "Annual Contest Call",
      link: "/global-projects/",
      image: `${projectPath}/images/global-community/quasi-moon.jpg`,
      alt: "",
      hiddenTitle: true,
    },
    {
      title: "Girls in Astronomy",
      link: "/global-projects/women-and-girls-in-astronomy",
      image: `${projectPath}/images/global-community/women-in-astronomy.png`,
      alt: "",
      hiddenTitle: true,
    },
  ];

  /*const info = [
    {
      title: "Infographics",
      description: "",
      bgColor: "bg-blue-200",
      url: "/",
    },
    {
      title: "Workshops",
      description: "",
      bgColor: "bg-blue-300",
      url: "/",
    },
    {
      title: "Astronomy Today",
      bgColor: "bg-blue-400",
      description: "",
      url: "/",
    },
    {
      title: "Astronomy Education Materials",
      description: "",
      bgColor: "bg-blue-500",
      url: "/",
    },
  ];*/

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Public Engagement", href: "/public-engagement" },
  ];
  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-32"
  );
  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${projectPath}/images/outreach/background-principal.jpg`,
          caption:
            "The Atacama Large Millimeter/submillimeter Array (ALMA) ranged across the unearthly landscape. Credit: ESO/B. Tafreshi ",
        }}
        title={t("title")}
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <ContentCard
          title={t("bridge-between-public-and-science.title")}
          text={t("bridge-between-public-and-science.description")}
          type="secondary"
          twoColums
          wfull
        />

        {/** Global Projects */}
        <ImageGridsSection
          items={items}
          title={t("global-projects.title")}
          description={t("global-projects.description")}
        />

        {/** Astronomers program */}
        <section aria-labelledby="astronomers-program">
          <div className="flex flex-col gap-8">
            <h2
              id="astronomers-program"
              className="text-h2 font-bold md:w-1/2 w-full px-8"
            >
              {t("astronomers-program.title")}
            </h2>
            <p className="text-gray-600 xl:text-h5 text-p w-full mb-4 px-8">
              {t("astronomers-program.description")}
            </p>

            <div className="flex flex-wrap w-full relative bg-black rounded-lg">
              <div className="w-full relative h-52">
                <Image
                  src={`${projectPath}/images/outreach/meet-the-astronomers.png`}
                  alt=""
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
                  className="rounded-lg"
                />

                <StarCanvas
                  numStars={450}
                  starColors={["#ffffff", "#e0e7ff", "#99b9eb"]}
                />
              </div>
              <div className="text-center w-full mb-16 mx-8">
                <Button
                  label={t("astronomers-program.label-button")}
                  color="light"
                  variant="solid"
                  url="/global-projects/meet-the-iau-astronomers"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 px-8">
            <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full">
              {t("diversity-languages.title")}
            </h2>
            <p className="text-gray-600 xl:text-h5 text-p w-full mb-4">
              {t("diversity-languages.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImageCard
              item={{
                title: t("diversity-languages.help-us"),
                link: "",
                image: `${projectPath}/images/she-is-as-astronomer.jpg`,
                alt: "",
              }}
              extraClasses="aspect-[4/3]"
            />

            <ImageCard
              item={{
                title: t("diversity-languages.find-translated"),
                link: "",
                image: `${projectPath}/images/outreach/material.jpg`,
                alt: "",
              }}
              extraClasses="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Collaboration Section
        <section
          className="flex flex-col gap-8"
          aria-labelledby="resources-title"
        >
          <BackgroundImg
            title={"Resources"}
            text="We have gathered a series of educational, practical, and research
              resources based on strict scientific standards, for anyone
              interested in getting involved in the dissemination of current
              astronomy."
            image={{
              imageUrl: `${projectPath}/images/outreach/resources.jpg`,
              position: "center",
            }}
          />

          <InfoGrid items={info} />
        </section>*/}

        <Parallax
          title={t("parallax.title")}
          subtitle={t("parallax.subtitle")}
          backgroundImage={{
            imgUrl: `${projectPath}/images/outreach/background-secondary.png `,
            caption: t("parallax.caption"),
          }}
        >
          <Button
            label={t("parallax.label-button")}
            url="/astronomy-outreach"
            variant="outline"
            color="light"
          />
        </Parallax>
      </div>
    </>
  );
}

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, [
        "layout",
        "public-engagement",
      ])),
    },
  };
};
