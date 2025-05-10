import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";

import { loadTranslations } from "ni18n";

import Carousel from "@/components/Carrousel";

import { projectPath } from "@/utils/path";

export default function InclusiveAstronomy() {
  const slides = [
    {
      image: `${projectPath}/images/coming_soon_2.jpg`,
      title: "Comming Soon",
      subtitle:
        "We're working hard to bring you something special. Check back soon to discover it.",
      caption:
        "This lovely equirectangular panorama captures the ALMA telescope as dusk begins to fall, turning the sky a into a bright palette of colour. ALMA may not look like a single telescope, but this battalion of high-precision antennas work together to observe the coolest components of the universe.  Credit: P. Horálek/ESO",
      button: {
        label: "Go to Home",
        url: "/",
      },
    },
  ];

  return (
    <>
      <Carousel slides={slides} autoPlay={true} interval={7000} />
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
