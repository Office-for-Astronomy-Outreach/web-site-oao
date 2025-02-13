import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import ImageGridsSection from "@/components/ImageGridsSection";
import InfoGrid from "@/components/InfoGrid";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import classNames from "classnames";
import StarCanvas from "@/components/Animations/StarCanvas";
import BackgroundImg from "@/components/BackgroundImg";
import ImageCard from "@/components/ImageCard";
import { projectPath } from "@/utils/path";

export default function Outreach() {
  const items = [
    {
      title: "100 Hours of Astronomy",
      link: "/outreach/global-projects/100-hours-of-astronomy",
      image: `${projectPath}/images/global-community/100hours.png`,
      alt: "",
      hiddenTitle: true,
    },
    {
      title: "Dark Skies",
      link: "/",
      image: `${projectPath}/images/global-community/dark-and-quiet-skies.jpeg`,
      alt: "",
      hiddenTitle: true,
    },
    {
      title: "Annual Contest Call",
      link: "/",
      image: `${projectPath}/images/global-community/quasi-moon.jpg`,
      alt: "",
      hiddenTitle: true,
    },
    {
      title: "Girls in Astronomy",
      link: "/outreach/global-projects/women-and-girls-in-astronomy",
      image: `${projectPath}/images/global-community/women-in-astronomy.png`,
      alt: "",
      hiddenTitle: true,
    },
  ];

  const info = [
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
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Public Engagement", href: "/outreach" },
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
          urlImage: `${projectPath}/images/outreach/background-principal.jpg`,
          caption:
            "The Atacama Large Millimeter/submillimeter Array (ALMA) ranged across the unearthly landscape. Credit: ESO/B. Tafreshi ",
        }}
        title="Public Engagement"
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <ContentCard
          title="Bridge between public and science"
          text="The OAO is dedicated to bringing astronomy closer to everyone, building bridges between the public and the discoveries of the cosmos. Through interactive projects and global collaborations, we aim to inspire new generations and strengthen the understanding of the universe from an accessible and exciting perspective."
          type="secondary"
          twoColums
          wfull
        />

        {/** Global Projects */}
        <ImageGridsSection
          items={items}
          title="Global Projects"
          description="Each year, the IAU OAO hosts a series of Global Outreach Projects to engage the general public with astronomy through our National Outreach Coordinators."
        />

        <section aria-labelledby="naoj-program">
          <div className="flex flex-col gap-16">
            <h2
              id="naoj-program"
              className="text-h2 font-bold md:w-1/2 w-full px-8"
            >
              Meet the Astronomers Program
            </h2>
            <div className="flex flex-wrap w-full gap-8">
              <div className="flex flex-1 relative rounded-lg md:aspect-auto aspect-video bg-black">
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

              <div
                className="md:w-1/2 w-full items-center rounded-lg bg-primary-main p-8"
                role="region"
                aria-labelledby="open-call-title"
              >
                <p className="py-6 text-white xl:text-h5 text-p">
                  Meet the IAU Astronomers! is a bridge between the public and
                  IAU astronomers. Through this programme, the OAO aims to make
                  the science of the IAU accessible to a wider public.
                </p>
                <p className="py-6 text-white xl:text-h5 text-p">
                  Would you like to register?
                </p>
                <p className="py-4 text-white mb-4 text-p">
                  Fill out the form:
                </p>
                <div className="flex gap-4 flex-wrap ">
                  <Button
                    label="Astronomer"
                    color="dark"
                    variant="solid"
                    className="w-1/2"
                  />
                  <Button label="Participant" color="dark" variant="solid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8 px-8">
            <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full">
              We celebrate the diversity in our languages
            </h2>
            <p className="text-gray-600 xl:text-h5 text-p w-full">
              At the OAO, we are committed to embracing the world&apos;s
              linguistic diversity by translating educational and research
              materials into languages beyond English. We believe that science
              should be accessible to everyone, regardless of the language they
              speak. By breaking language barriers, we aim to ensure that
              astronomy reaches communities worldwide, fostering inclusion and a
              shared curiosity about the universe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImageCard
              item={{
                title: "Help us translate",
                link: "",
                image: `${projectPath}/images/she-is-as-astronomer.jpg`,
                alt: "",
              }}
              extraClasses="aspect-[4/3]"
            />

            <ImageCard
              item={{
                title: "Find translated materiale",
                link: "",
                image: `${projectPath}/images/outreach/material.jpg`,
                alt: "",
              }}
              extraClasses="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Collaboration Section */}
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
        </section>

        <Parallax
          title="Visit Our World"
          subtitle="Astronomy Outreach Map"
          backgroundImage={{
            imgUrl: `${projectPath}/images/outreach/background-secondary.png `,
            caption:
              "Four of the first ALMA antennas at the Array Operations Site (AOS). Credit: ESO/José Francisco Salgado (josefrancisco.org)",
          }}
        >
          <Button
            label="Events"
            url="/outreach/global-projects/astronomy-outreach-map"
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
        "home",
        "layout",
        "about",
      ])),
    },
  };
};
