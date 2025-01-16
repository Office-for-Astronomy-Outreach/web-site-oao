import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { useTranslation } from "react-i18next";
import { loadTranslations } from "ni18n";

import Carousel from "@/components/Carrousel";
import ContentCard from "@/components/ContentCard";
import Parallax from "@/components/Parallax";
import Button from "@/components/Button";
import SolarSystem from "@/components/Animations/SolarSystem";
import InfoGrid from "@/components/InfoGrid";
import GlobalCommunityGrid from "@/components/GlobalCommunity";

export default function Home() {
  // i18n translation function for multi-language support
  const { t } = useTranslation("home");

  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const slides = [
    {
      image: `${path}/images/parallax-bg.jpg`,
      title: "Welcome to Office for Astronomy Outreach",
      subtitle: "Discover amazing content and more",
    },
  ];

  const info = [
    {
      title: t("education.title"),
      description: t("education.description"),
      bgColor: "bg-blue-200",
      url: "/education",
    },
    {
      title: t("rules-to-name-a-start.title"),
      description: t("rules-to-name-a-start.description"),
      bgColor: "bg-blue-300",
      url: "/rules-to-name-a-start",
    },
    {
      title: t("ask-a-question.title"),
      description: t("ask-a-question.description"),
      bgColor: "bg-blue-400",
      url: "/ask-a-question",
    },
    {
      title: t("pluto-qa.title"),
      description: t("pluto-qa.description"),
      bgColor: "bg-blue-500",
      url: "/pluto-qa",
    },
  ];

  const globalCommunityImages = {
    firstGrid: [
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
    ],
    secondGrid: [
      {
        src: `${path}/images/global-community/onesky.jpg`,
        url: "https://example.com/onesky",
        alt: "One Sky image",
      },
      {
        src: `${path}/images/global-community/dark-and-quiet-skies.jpeg`,
        url: "https://example.com/dark-and-quiet-skies",
        alt: "Dark and Quiet Skies image",
      },
    ],
    thirdGrid: [
      {
        src: `${path}/images/global-community/quasi-moon.jpg`,
        url: "https://example.com/quasi-moon",
        alt: "Quasi Moon image",
      },
      {
        src: `${path}/images/global-community/telescopecollaboration.jpg`,
        url: "https://example.com/telescopecollaboration",
        alt: "Telescope Collaboration image",
      },
    ],
  };

  return (
    <div>
      <Carousel slides={slides} autoPlay={true} interval={7000} />

      <div className="md:container md:mx-auto mx-2 md:px-4 py-2 flex flex-col gap-16 mt-8">
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
            caption: `Nine kids standing in a classroom, each with the name of a planet on
             their chests, written in Turkish. Copyright: 100 Hours of Astronomy, Turkey, Saadet Manaz`,
            alt: "100 Hours of Astronomy-Turkey-Saadet Manaz",
          }}
          link={{
            url: "/outreach",
            label: "Join",
          }}
        />

        <ContentCard
          title="Professional Development"
          text="We work to empower the professional astronomy community by providing continuous development opportunities. Through resources, events, and programs, we support the professionalization of science communication and foster the growth of skills and networks within astronomy."
          type={"primary"}
          image={{
            imageUrl: `${path}/images/home/AU100 Flagship Event-Brussels-April2019.png`,
            caption: "",
          }}
          link={{
            url: "/professional-development",
            label: "Join our team",
          }}
        />

        <div>
          <div className="relative">
            <ContentCard
              title="A community for the stars"
              text="In a universe so vast, our shared curiosity lights the way. The knowledge and exploration unite to bring the cosmos closer to home."
              type="secondary"
            />
            <SolarSystem />
          </div>
          <div className="w-full pt-4">
            <InfoGrid items={info} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-bold">
            Global Community of Astronomy Communicator
          </h2>
          <GlobalCommunityGrid images={globalCommunityImages} />
        </div>

        <Parallax
          title="Join Our New Letter"
          subtitle="The secrets of the cosmos await you"
          backgroundImage={`${path}/images/parallax-bg-01.jpg`}
        >
          <Button label="Subscribe" variant="transparent" color="light" />
        </Parallax>
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
