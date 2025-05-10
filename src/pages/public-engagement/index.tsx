import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { useTranslation } from "react-i18next";
import { loadTranslations } from "ni18n";
import Image from "next/image";
import classNames from "classnames";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import ImageCard from "@/components/ImageCard";
import ImageGridsSection from "@/components/ImageGridsSection";
import Parallax from "@/components/Parallax";
import StarCanvas from "@/components/Animations/StarCanvas";

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
      title: "Dark and Quiet Skies",
      link: "https://www.eso.org/public/about-eso/dark-skies-preservation/",
      image: `${projectPath}/images/global-community/dark-and-quiet-skies.png`,
      alt: "",
      hiddenTitle: true,
    },
    {
      title: "Inclusive Astronomy Communication",
      link: "/global-projects/inclusive-astronomy-communication",
      image: `${projectPath}/images/global-community/InclusiveComm.png`,
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
            <p className="text-gray-600 xl:text-h5 text-p w-full mb-0 px-8">
              {t("astronomers-program.description")}
            </p>
            <div className="flex flex-wrap w-full h-80 relative bg-black rounded-lg">
              <div className="w-full relative h-52">
                <Image
                  src={`${projectPath}/images/outreach/meet-the-astronomers.png`}
                  alt=""
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
                  className="rounded-lg"
                />
              </div>
              <StarCanvas
                numStars={450}
                starColors={["#ffffff", "#e0e7ff", "#99b9eb"]}
              />
              <div className="text-center w-full mb-16 absolute bottom-0 px-8">
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

        <ContentCard
          title="Pathways to the Cosmos"
          text={
            <>
              <p className="w-full mb-0">
                Pathways to the Cosmos is a live series by the IAU Office for
                Astronomy Outreach (OAO) that opens the door to informal,
                heartfelt conversations around astronomy, public engagement, and
                inclusion. Through engaging discussions, the OAO team shares
                their own stories and invites special guests to reflect on their
                personal journeys in science communication and
                community-building.
              </p>
              <p className="w-full mb-4">
                Each episode centers on real people and real
                experiences—celebrating diverse pathways into astronomy and
                addressing the urgent need for greater inclusion and
                representation in the field. By putting faces and voices to the
                work behind the scenes, we aim to humanize astronomy
                communication and build meaningful, trusted relationships with
                our global community. Join us for conversations that matter and
                be inspired by stories of passion, purpose, and perseverance.
              </p>
            </>
          }
          type="transparent"
          wfull
          image={{
            imageUrl: `${projectPath}/images/outreach/pathways.png`,
            alt: "pathways logo",
          }}
        />

        <ContentCard
          title="Space Scoop"
          text=" Space Scoop takes the latest and greatest articles in astronomy
              and transforms them into stories written in a language that is
              easy to understand. With Space Scoop, readers can take a journey
              through time to learn about how young galaxies grow, search for
              cosmic clues about the creation of the Universe and much more.
              Space Scoop's news and images are sourced from some of the
              most prestigious observatories and astronomy institutions
              worldwide, and we bring them to you without delay."
          type="secondary"
          wfull
          image={{
            imageUrl: `${projectPath}/images/outreach/SpaceScoop.jpeg`,
            alt: "Space Scoop logo",
          }}
          link={{
            url: "https://www.spacescoop.org/",
            label: "Read more",
            target: "_blank",
          }}
        />

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
