import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import classNames from "classnames";
import Link from "next/link";

import ContentCard from "@/components/ContentCard";
import InfoGrid from "@/components/InfoGrid";
import Parallax from "@/components/Parallax";
import CardTeamMember from "@/components/TeamCard";
import Banner from "@/components/Banner";
import BlueDotAnimation from "@/animations/BlueDotAnimation";
import Button from "@/components/Button";
import { projectPath } from "@/utils/path";

export default function About() {
  const { t } = useTranslation("about");
  const [isMounted, setIsMounted] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about-us" },
  ];

  const teamMembers = [
    {
      name: "Kelly Blumenthal, PhD, EdM",
      role: "Director",
      image: `${projectPath}/images/about/team/kelly.jpeg`,
      description:
        "Kelly Blumenthal is an astrophysicist and science communicator who has had the fortune of living in and working with many communities across the United States and worldwide. These experiences have shaped Kelly’s perspectives on the importance of astronomy communication in building STEM opportunities for under-resourced people worldwide and its role in science writ large.",
    },
    {
      name: "Naomi Asabre Frimpong, PhD",
      role: "Deputy Director",
      image: `${projectPath}/images/about/team/drnaomi.png`,
      description:
        "Naomi Asabre Frimpong is an astrophysicist, science communicator, and leader in African astronomy. Coming to the OAO from the Ghana Space Science and Technology Institute (GSSTI), Naomi’s work has advanced the field of astronomy and the growth of scientific communities across Africa. As the former Vice President of the African Astronomical Society, she championed the development of astronomy across the continent and continues to do so on a global scale in her new role as Deputy Director of the IAU Office for Astronomy Outreach.",
    },
    {
      name: "Cintia Duran",
      role: "International Outreach Officer",
      image: `${projectPath}/images/about/team/cintia.png`,
      description:
        "Cintia Duran is an Educator, science communicator and artist. Her work and research focuses on a unique and interdisciplinary approach to public engagement with astronomy: the intersection of planetary science, language, and sound, particularly in communicating complex scientific ideas and our place in the universe. She works with cultural, civic, and technological organizations to develop educational resources, with the goal of transforming science institutions into diverse, multilingual, and approachable for the general public.",
    },
    {
      name: "Miho Matsumoto",
      role: "Assistant Outreach Officer",
      image: "",
      description:
        "Miho Matsumoto holds a Master's degree in Aesthetics and Art History and is a certified museum curator. She began her career as a gallery assistant in the cultural projects department at ISSEY MIYAKE, where she worked on contemporary art and product design initiatives. Over the past two decades, she has built a career in public relations, serving in roles at Prada Japan, Cassina ixc. (interior design), Harrods' apparel division in the UK, the Mori Art Museum (marketing & PR), and several hotel PR departments. She joined the OAO (Office for Astronomy Outreach) at the National Astronomical Observatory of Japan (NAOJ) in 2022.",
    },
    {
      name: "Makiko Aoki",
      role: "",
      image: "",
      description: "",
    },
  ];

  const info = [
    {
      title: "IAU COMMISSION C2",
      description:
        "We collaborate with IAU Commission C2 – Communicating Astronomy with the Public (CAP) on the CAP projects, including the CAP Conference series and CAPjournal, among other IAU-related events.",
      bgColor: "bg-blue-200",
      url: "https://iau.org/CommissionC2/CommissionC2/Home.aspx",
      image: `${projectPath}/images/about/collaborates/commissionc2-logo.png`,
      target: "_blank",
    },
    {
      title: "LEIDEN UNIVERSITY",
      description:
        "We work closely with Leiden University's Astronomy & Society group, as well as through the IAU OAO Science Communication Internship programme.",
      bgColor: "bg-blue-300",
      url: "https://www.universiteitleiden.nl/",
      image: `${projectPath}/images/about/collaborates/universiteit-leiden-logo.png`,
      target: "_blank",
    },
    {
      title: "SKA ORGANISATION",
      bgColor: "bg-blue-400",
      description:
        "The SKAO provides the funding for our NOC/SKACON Funding Scheme projects - a joint funding program in which NOCs and SKACONS collaborate to perform cross-national public engagement projects",
      url: "https://www.skao.int/en",
      image: `${projectPath}/images/about/collaborates/ska-logo.png`,
      target: "_blank",
    },
    {
      title: "IUCAA",
      description:
        "Astronomy communicators from IUCAA work with us on several of our programmes throughout the year.",
      bgColor: "bg-blue-500",
      url: "https://www.iucaa.in/",
      image: `${projectPath}/images/about/collaborates/iucaa-logo.jpg`,
      target: "_blank",
    },
    {
      title: "Stars Shine for Everyone (SSVI)",
      url: "https://www.ssvi.be/",
      bgColor: "bg-blue-500",
      description:
        "Alongside SSVI, we provide opportunities for members of our network to have access to cutting-edge telescopes.",
      image: `${projectPath}/images/about/collaborates/SSVI.png`,
      target: "_blank",
    },
    {
      title: "Bresser Corporation",
      description:
        "The Bresser Corporation donates the telescopes that are distributed with the help of SSVI.",
      bgColor: "bg-blue-500",
      url: "https://www.bresser.com/",
      image: `${projectPath}/images/about/collaborates/bresser.png`,
      target: "_blank",
    },
    {
      title: "ASTRON",
      description:
        "The OAO collaborates with ASTRON in the management of Space Scoop, a project that brings real research to beginning astronomy learners.",
      bgColor: "bg-blue-500",
      url: "https://www.astron.nl/",
      image: `${projectPath}/images/about/collaborates/Astron.jpg`,
      target: "_blank",
    },
    {
      title: "ESO",
      description:
        "Science writing interns at the European Southern Observatory (ESO) are trained to write for non-specialist audiences through the OAO project, Space Scoop.",
      bgColor: "bg-blue-500",
      url: "https://www.eso.org/public/",
      image: `${projectPath}/images/about/collaborates/eso.tif`,
      target: "_blank",
    },
    {
      title: "Hong Kong University",
      description: "Together with Hong Kong University, the OAO manages a database of dark sky brightness measurements from institutions worldwide.",
      bgColor: "bg-blue-500",
      url: "https://www.hku.hk/",
      image: `${projectPath}/images/about/collaborates/hku.jpeg`,
      target: "_blank",
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${projectPath}/images/about/background-principal.jpg`,
          caption: t("background-image.caption"),
        }}
        title={t("title")}
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <div className="flex flex-col gap-24">
          {/* About Section */}
          <ContentCard
            title={t("about.title")}
            text={<Trans i18nKey={t("about.description")} />}
            type="secondary"
            wfull
          />

          <ContentCard
            title={t("astronomy-for-everyone.title")}
            text={t("astronomy-for-everyone.description")}
            image={{
              imageUrl: `${projectPath}/images/about/astronomy-for-everywere.png`,
              caption: t("astronomy-for-everyone.caption-img"),
            }}
            type="transparent"
          />

          {/* Mission and Vision */}
          <section className="relative">
            <div className="md:block hidden">
              <BlueDotAnimation />
            </div>
            <div className="flex flex-col bg-primary-main shadow-md rounded-lg md:p-16 gap-8">
              {/* Mission */}
              <div className="flex flex-row justify-between">
                <div className="md:w-1/4"></div>
                <div className="md:w-2/4 px-8 py-8 justify-center flex flex-col gap-8">
                  <h2 className="capitalize font-bold text-h2 text-white">
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
                  <h2 className="capitalize font-bold text-h2 text-white">
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
                  <h2 className="capitalize font-bold text-h2 text-white">
                    {t("strategic-actions.title")}
                  </h2>
                  <p className="xl:text-h5 text-p text-white">
                    {t("strategic-actions.description")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Team Section */}
        <section className="flex flex-col gap-8">
          <h2
            className="capitalize text-h2 font-bold text-body px-8 scroll-mt-32"
            id="our-team"
          >
            {t("team.title")}
          </h2>
          <p className="text-gray-600 xl:text-h5 text-p  w-full mb-4 px-8">
            {t("team.description")}
          </p>
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
        </section>

        <section className="flex flex-col gap-8">
          <h2
            className="capitalize text-h2 font-bold text-body px-8 scroll-mt-32"
            id="our-team"
          >
            Steering Committee
          </h2>

          <div className="rounded-lg shadow-lg">
            <table className="table-auto border-collapse w-full text-gray-600 bg-white text-start rounded-lg">
              <thead className="bg-primary-main text-white rounded-t-lg">
                <tr>
                  <th className="text-start p-3">{""}</th>
                  <th className="text-start p-3">Name</th>
                  <th className="text-start p-3">Organization</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-sm font-light border-b border-gray-300 text-start">
                  <th className="text-sm font-normal text-start  p-3">{""}</th>
                  <th className="text-sm font-normal text-start  p-3">
                    Kazuhiro Sekiguchi
                  </th>
                  <th className="text-sm font-normal text-start  p-3">
                    NAOJ/NINS
                  </th>
                </tr>
                <tr className="text-sm font-light border-b border-gray-300 text-start">
                  <th className="text-sm font-normal text-start  p-3">{""}</th>
                  <th className="text-sm font-normal text-start  p-3">
                    Diana Worrall
                  </th>
                  <th className="text-sm font-normal text-start  p-3">IAU</th>
                </tr>
                <tr className="text-sm font-light border-b border-gray-300 text-start">
                  <th className="text-sm font-normal text-start  p-3">{""}</th>
                  <th className="text-sm font-normal text-start  p-3">
                    John B. Hearnshaw
                  </th>
                  <th className="text-sm font-normal text-start  p-3">IAU</th>
                </tr>
                <tr className="text-sm font-light border-b border-gray-300 text-start">
                  <th className="text-sm font-normal text-start  p-3">{""}</th>
                  <th className="text-sm font-normal text-start  p-3">
                    Masaaki Hiramatsu
                  </th>
                  <th className="text-sm font-normal text-start  p-3">NAOJ</th>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Partners Section */}

        <section aria-labelledby="partners-section" className="space-y-8">
          <div className="flex flex-col w-full gap-8 px-8 ">
            <h2
              id="partners-section"
              className="capitalize text-h2 font-bold w-full"
            >
              {t("partners.title")}
            </h2>
            <p className="xl:text-h5 text-p text-gray-600">
              {t("partners.description")}
            </p>
          </div>

          <div aria-labelledby="iau">
            <div className="flex flex-wrap w-full">
              <div className="md:w-1/2 items-center" role="region">
                <div className="md:mr-4 bg-white aspect-auto rounded-lg shadow-lg p-8 h-full">
                  <h3 id="" className="text-h3 font-bold text-primary-main">
                    International Astronomical Union (IAU)
                  </h3>
                  <p className="py-6 text-gray-600">
                    The International Astronomical Union (IAU) is the
                    world&apos;s leading organisation for professional
                    astronomers. Founded in 1919, it brings together over 13,000
                    members from around the globe to promote and safeguard the
                    science of astronomy. The Office for Astronomy Outreach
                    (OAO) is one of the IAU&apos;s key initiatives, working to
                    connect astronomy with society through education,
                    communication, and engagement.
                  </p>
                  <div className="relative w-[250px] h-[150px] rounded-lg shadow-md bg-primary-light hover:scale-105 transition-transform">
                    <Link
                      href="https://www.iau.org/"
                      target="_blank"
                      className=""
                      aria-label="Visit the Astronomy Outreach Network website"
                    >
                      <Image
                        src={`${projectPath}/images/about/partners/iau-logo-white.png`}
                        alt="IAU Logo"
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
                        className="p-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex md:w-1/2 w-full rounded-lg">
                <div className="relative w-full md:ml-4">
                  <Image
                    src={`${projectPath}/images/professional-development/naoj.jpg`}
                    alt="NAOJ Visitor Program"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div aria-labelledby="naoj-program">
            <div className="flex flex-wrap w-full">
              <div className="flex md:w-1/2 w-full rounded-lg">
                <div className="relative w-full md:mr-4">
                  <Image
                    src={`${projectPath}/images/professional-development/naoj.jpg`}
                    alt="NAOJ Visitor Program"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div
                className="md:w-1/2 items-center"
                role="region"
                aria-labelledby="open-call-title"
              >
                <div className="md:ml-4 bg-primary-main aspect-auto rounded-lg shadow-lg p-8 h-full">
                  <h3
                    id="open-call-title"
                    className="text-white text-h3 font-bold"
                  >
                    National Astronomical Observatory of Japan (NAOJ)
                  </h3>
                  <p className="py-6 text-white">
                    The Office for Astronomy Outreach (OAO) is based in Japan,
                    thanks to the generous support of our host institution, the
                    National Astronomical Observatory of Japan (NAOJ). NAOJ is
                    one of the leading research institutes in astronomy,
                    operating world-class observatories and promoting
                    cutting-edge astronomical research. It also plays a key role
                    in science communication and public engagement in Japan and
                    internationally.
                  </p>
                  <div className="relative w-[250px] h-[150px] rounded-lg shadow-md bg-primary-light hover:scale-105 transition-transform">
                    <Link
                      href="https://www.nao.ac.jp/en/"
                      target="_blank"
                      className=""
                      aria-label="Visit the Astronomy Outreach Network website"
                    >
                      <Image
                        src={`${projectPath}/images/about/partners/naoj-logo-white.png`}
                        alt="Astronomy Outreach Network Logo"
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
                        className="p-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="flex flex-col gap-8 md:py-16 ">
          <div className="px-8 flex flex-col gap-8">
            <h2 className="capitalize text-h2 font-bold text-body ">
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
          title={t("parallax.title")}
          subtitle={t("parallax.subtitle")}
          backgroundImage={{
            imgUrl: `${projectPath}/images/about/background-secondary.jpg`,
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
    </div>
  );
}

// Server-side props
export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, ["layout", "about"])),
    },
  };
};
