import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Banner from "@/components/Banner";

import classNames from "classnames";
import StarCanvas from "@/components/Animations/StarCanvas";

import { projectPath } from "@/utils/path";
import ContentCard from "@/components/ContentCard";

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

      <div className={containerClass}>
        <div className="flex flex-col gap-24">
          <ContentCard
            title="Naming Stars and Other Astronomical Objects"
            text={
              <>
                <p>
                  The IAU frequently receives requests from people who want to
                  buy or name stars (or any other astronomical object). Some
                  commercial enterprises claim to offer such services for a fee.{" "}
                  <b>
                    However, such &quot;names&quot; have no formal or official
                    validity whatsoever.
                  </b>
                </p>

                <p>
                  Some bright stars have proper names, often with Arabic, Greek,
                  or Latin etymologies (e.g., Vega). However, the vast majority
                  of stars have alphanumeric designations consisting of an
                  acronym plus either an index number or celestial position
                  (e.g., HR 7001, 2MASS J18365633+3847012)
                </p>
              </>
            }
            type="secondary"
            twoColums
            wfull
          />

          <ContentCard
            title="Echoes of the Sky: Cultural Star Names and the IAU"
            text={
              <div className="space-y-4">
                <p>
                  The IAU supports a Working Group on Star Names (WGSN) under
                  Division C, which catalogs star names from various cultures
                  and maintains a list of approved and unique proper names
                  (e.g., Sirius, Proxima Centauri).
                </p>{" "}
                <p>
                  After investigating cultural star names worldwide, the WGSN
                  may adopt new official IAU star names for stars currently
                  lacking one, helping to preserve astronomical heritage while
                  providing unique names for the international community. You
                  can learn more on the IAU Star Names page.
                </p>
                <p>
                  Names for exoplanets and their host stars may also be approved
                  by the IAU Executive Committee Working Group on the Public
                  Naming of Planets and Planetary Satellites, as was done for
                  the NameExoWorlds contests in 2015, 2019, and 2022.
                </p>
              </div>
            }
            image={{
              imageUrl: `${projectPath}/images/about/astronomy-for-everywere.png`,
              caption: "",
            }}
            type="transparent"
          />

          <ContentCard
            title="The IAU's Position on Commercial Star-Naming Services"
            text={
              <>
                <p>
                  As an international scientific organization, the IAU
                  completely dissociates itself from the commercial practice of
                  &quot;selling&quot; fictitious star names, surface feature
                  names, or extraterrestrial real estate. The IAU does not
                  maintain a list of the competing businesses that claim to
                  offer such services. Those seeking to contact such enterprises
                  should refer to commercial directories in their respective
                  countries.
                </p>
                <p>
                  Some businesses have misleadingly suggested that the IAU is
                  associated with, recognizes, or approves their activities. The
                  IAU makes it clear that any such claims are false. If you come
                  across unauthorized use of the IAU&apos;s name, please report
                  it to us with supporting documentation.
                </p>
                <p>
                  Like many of the best things in life,{" "}
                  <b>the beauty of the night sky is not for sale</b>—it is free
                  for all to enjoy. While &quot;buying&quot; a star name may be
                  a symbolic gift or contribute to a good cause, it does not
                  grant legal ownership or recognition of the name. Despite
                  these clarifications, the IAU continues to receive star-naming
                  requests. If you have further questions, you can contact
                  public@oao.iau.org.
                </p>
              </>
            }
            image={{
              imageUrl: `${projectPath}/images/about/astronomy-for-everywere.png`,
              caption: "",
            }}
            type="primary"
          />
        </div>
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
