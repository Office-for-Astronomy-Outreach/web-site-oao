import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { useTranslation } from "react-i18next";
import { loadTranslations } from "ni18n";
import classNames from "classnames";

import Carousel from "@/components/Carrousel";
import ContentCard from "@/components/ContentCard";
import Parallax from "@/components/Parallax";
import Button from "@/components/Button";
import GlobalCommunityGrid from "@/components/GlobalCommunity";
import WindowSpace from "@/components/WindowSpace";
import BackgroundImg from "@/components/BackgroundImg";
import { projectPath } from "@/utils/path";

export default function Home() {
  // i18n translation function for multi-language support
  const { t } = useTranslation("home");

  const slides = [
    {
      image: `${projectPath}/images/home/parallax-bg.jpg`,
      title: "Welcome to the Office for Astronomy Outreach",
      subtitle: "Astronomy for everyone",
      caption:
        "The Gran Telescopio Canarias, Spain. Credits: David Monje/Unsplash",
    },
  ];

  const info = [
    {
      title: t("education.title"),
      description: t("education.description"),
      bgColor: "blue-200",
      url: "/education",
    },
    {
      title: t("rules-to-name-a-start.title"),
      description: t("rules-to-name-a-start.description"),
      bgColor: "blue-300",
      url: "/rules-to-name-a-start",
    },
    {
      title: t("ask-a-question.title"),
      description: t("ask-a-question.description"),
      bgColor: "blue-400",
      url: "/ask-a-question",
    },
    {
      title: t("pluto-qa.title"),
      description: t("pluto-qa.description"),
      bgColor: "blue-500",
      url: "/pluto-qa",
    },
  ];

  const globalCommunity = [
    {
      src: `${projectPath}/images/global-community/team-iau.png`,
      url: "about-us#our-team",
      alt: "IAU team",
    },

    {
      src: `${projectPath}/images/global-community/women-in-astronomy.png`,
      url: "/global-projects/women-and-girls-in-astronomy",
      alt: "Women in Astronomy",
      position: "left",
    },

    {
      src: `${projectPath}/images/global-community/100-hours-of-astronomy.png`,
      url: "/global-projects/100-hours-of-astronomy",
      alt: "100 Hours of Astronomy",
      position: "right",
    },

    {
      src: `${projectPath}/images/global-community/meet.jpg`,
      url: "/global-projects/meet-the-iau-astronomers",
      alt: "Meet the IAU astronomers",
      position: "left",
    },
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
      <Carousel slides={slides} autoPlay={true} interval={7000} />

      <div className={containerClass}>
        <div className="flex flex-col gap-24">
          <ContentCard
            title={t("accessible-astronomy.title")}
            text={t("accessible-astronomy.description")}
            type="secondary"
            twoColums
            wfull
            link={{
              url: "/about-us",
              label: t("accessible-astronomy.button"),
            }}
          />

          <ContentCard
            title={t("build-community.title")}
            text={t("build-community.description")}
            type="transparent"
            image={{
              imageUrl: `${projectPath}/images/home/100 Hours of Astronomy-Turkey-Saadet Manaz.png`,
              caption: t("build-community.caption-img"),
              alt: t("build-community.alt-img"),
            }}
            link={{
              url: "/public-engagement",
              label: "Join",
            }}
          />

          <ContentCard
            title={t("professional-development.title")}
            text={t("professional-development.description")}
            type={"primary"}
            image={{
              imageUrl: `${projectPath}/images/home/AU100 Flagship Event-Brussels-April2019.png`,
              caption: t("professional-development.caption-img"),
              alt: t("professional-development.alt-img"),
            }}
            link={{
              url: "/professional-development",
              label: "Join our team",
            }}
          />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="capitalize  text-h2 font-bold px-8 md:w-1/2">
            {t("global-community.title")}
          </h2>
          <p className="text-gray-800 w-full mb-4 px-8">
            {t("global-community.description")}
          </p>
          <GlobalCommunityGrid images={globalCommunity} />
        </div>

        <div className="relative">
          <BackgroundImg
            title={t("community.title")}
            text={t("community.description")}
            image={{
              imageUrl: `${projectPath}/images/home/background.jpg`,
              caption: "Jason Johnson/IAU OAE (CC BY 4.0)",
            }}
          />
          <div className="w-full pt-8">
            <WindowSpace items={info} />
          </div>
        </div>

        <Parallax
          title={t("new-letter.title")}
          subtitle={t("new-letter.subtitle")}
          backgroundImage={{
            imgUrl: `${projectPath}/images/home/parallax-bg-01.jpg`,
            caption: t("new-letter.caption-img"),
          }}
          showAnimation={true}
        >
          <Button
            label={`${t("new-letter.subscribe")}`}
            url="https://iau.us11.list-manage.com/subscribe?u=0ecb46e29196a0f367daf3dd6&id=9c0d469b8f"
            variant="outline"
            color="light"
            newTab
          />
        </Parallax>
      </div>
    </>
  );
}

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, ["home", "layout"])),
    },
  };
};
