import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Banner from "@/components/Banner";

import classNames from "classnames";
import StarCanvas from "@/components/Animations/StarCanvas";

import { projectPath } from "@/utils/path";

export default function Outreach() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Rules to name a start", href: "" },
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
          urlImage: `${projectPath}/images/banner-rules-to-name-a-start.jpg`,
          caption: "Credits: Aperture Vintage",
        }}
        title="Naming Stars and Other Astronomical Objects"
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}></div>
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
