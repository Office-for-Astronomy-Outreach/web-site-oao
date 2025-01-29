import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { useTranslation } from "react-i18next";
import { loadTranslations } from "ni18n";

import Carousel from "@/components/Carrousel";
import ContentCard from "@/components/ContentCard";
import Parallax from "@/components/Parallax";
import Button from "@/components/Button";
import GlobalCommunityGrid from "@/components/GlobalCommunity";
import WindowSpace from "@/components/WindowSpace";
import BackgroundImg from "@/components/BackgroundImg";

import classNames from "classnames";

export default function Home() {
  // i18n translation function for multi-language support
  const { t } = useTranslation("home");

  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const slides = [
    {
      image: `${path}/images/parallax-bg.jpg`,
      title: "Welcome to the Office for Astronomy Outreach",
      subtitle: "Astronomy for everyone",
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
      src: `${path}/images/global-community/iau.jpg`,
      url: "https://example.com/iau",
      alt: "IAU image",
    },

    {
      src: `${path}/images/global-community/womeninastronomy.jpg`,
      url: "https://example.com/womeninastronomy",
      alt: "Women in Astronomy image",
    },

    {
      src: `${path}/images/global-community/100hours.jpeg`,
      url: "https://example.com/100hours",
      alt: "100 Hours of Astronomy image",
    },

    {
      src: `${path}/images/global-community/meet.jpg`,
      url: "https://example.com/meet",
      alt: "Meet image",
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

  return (
    <>
      <Carousel slides={slides} autoPlay={true} interval={7000} />

      <div className={containerClass}>
        <div className="flex flex-col gap-8">
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
              imageUrl: `${path}/images/home/100 Hours of Astronomy-Turkey-Saadet Manaz.png`,
              caption: t("build-community.caption-img"),
              alt: t("build-community.alt-img"),
            }}
            link={{
              url: "/outreach",
              label: "Join",
            }}
          />

          <ContentCard
            title={t("professional-development.title")}
            text={t("professional-development.description")}
            type={"primary"}
            image={{
              imageUrl: `${path}/images/home/AU100 Flagship Event-Brussels-April2019.png`,
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
          <h2 className="text-h2 font-bold px-8 md:w-1/2">
            {t("global-community.title")}
          </h2>
          <GlobalCommunityGrid images={globalCommunity} />
        </div>

        <div className="relative">
          <BackgroundImg
            title={t("community.title")}
            text={t("community.description")}
            image={{
              imageUrl: `${path}/images/home/community-for-the-stars.jpg`,
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
            imgUrl: `${path}/images/parallax-bg-01.jpg`,
            caption: t("new-letter.caption-img"),
          }}
        >
          <Button
            label={`${t("new-letter.subscribe")}`}
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
