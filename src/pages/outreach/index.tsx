import type { GetServerSideProps } from 'next';
import { ni18nConfig } from 'ni18n.config';
import { loadTranslations } from 'ni18n'

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import ImageGrid from "@/components/ImageGrid";
import InfoGrid from "@/components/InfoGrid";
import Parallax from "@/components/Parallax";
import CardTeamMember from "@/components/TeamCard";
import Image from "next/image";

export default function ProfessionalDevelopment() {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const items = [
    {
      title: "100 Hours of Astronomy",
      link: "",
      image: `${path}/images/global-community/100hours.png`,
      alt: "",
    },
    {
      title: "Dark Skies",
      link: "/",
      image: `${path}/images/global-community/dark-and-quiet-skies.jpeg`,
      alt: "",
    },
    {
      title: "Annual Contest Call",
      link: "/",
      image: `${path}/images/global-community/quasi-moon.jpg`,
      alt: "",
    },
    {
      title: "Girls in Astronomy",
      link: "/",
      image: `${path}/images/global-community/womeninastronomy.jpg`,
      alt: "",
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
      title: "Download Astronomy Education Materials",
      description: "",
      bgColor: "bg-blue-500",
      url: "/",
    },
  ];

  const group = [
    {
      name: "Indigenous studies",
      role: "",
      image: `${path}/images/about/about.png`,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Education",
      role: "",
      image: `${path}/images/about/about.png`,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Grant and fundraising for our community",
      role: "",
      image: `${path}/images/about/about.png`,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Outreach', href: '/outreach' },
  ];

  return (
    <div role="region" aria-labelledby="outreach-title">

      {/* Hero Section */}
      <Banner 
        image={`${path}/images/palet-blue-dot.jpg`}
        title="Outreach"
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 py-8 flex flex-col gap-16 content-card-img">
        <ContentCard
          title="Bridge between public and science"
          text="The OAO is dedicated to bringing astronomy closer to everyone, building bridges between the public and the discoveries of the cosmos. Through interactive projects and global collaborations, we aim to inspire new generations and strengthen the understanding of the universe from an accessible and exciting perspective."
          type="secondary"
          twoColums
          wfull
        />

        <ImageGrid
          items={items}
          title="Global Projects"
          description="Each year, the IAU OAO hosts a series of Global Outreach Projects to engage the general public with astronomy through our National Outreach Coordinators."
        />

        <section aria-labelledby="naoj-program">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
            <h2 id="naoj-program" className="text-h2 font-bold text-body">
                Meet the Astronomers Program
            </h2>
            <div className="flex flex-wrap w-full gap-8">
              <div className="flex flex-1 relative rounded-lg aspect-auto">
                <Image
                  src={`${path}/images/professional-development.jpg`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <div
                className="w-full md:w-1/2 items-center rounded-lg bg-primary-main aspect-auto p-8"
                role="region"
                aria-labelledby="open-call-title"
              >
                <p className="py-6 text-white">
                    Meet the IAU Astronomers! is a bridge between the public and IAU astronomers. Through this programme, the OAO aims to make the science of the IAU accessible to a wider public. 
                </p>
                <p className="py-6 text-white">Would you like to register?</p>
                <p className="py-4 text-white mb-4">Fill out the form:</p>
                <div className="flex gap-8 flex-wrap">
                    <Button
                        label="Astronomer"
                        color="light"
                        variant="solid"
                        className="w-1/2"
                    />
                    <Button
                        label="Participant"
                        color="light"
                        variant="solid"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-bold text-body">Working Groups</h2>
            <p className="text-gray-800 w-full mb-4">We introduce the new working groups, designed to foster dialogue and support community development around the world. These are spaces where you can freely share your ideas, collaborate, and engage in conversations with specialists in the field to help your community grow.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.map((grup, index) => (
                <CardTeamMember
                  key={index}
                  name={grup.name}
                  role={grup.role}
                  image={grup.image}
                  description={grup.description}
                />
              ))}
            </div>
          </div>

        {/* Collaboration Section */}
        <section className="flex flex-col gap-6" aria-labelledby="resources-title">
          <h2 id="resources-title" className="text-h2 font-bold text-body">
            Resources
          </h2>
          <div className="w-full sm:max-h-80 max-h-[30rem] relative rounded-lg overflow-hidden">
            <Image
              src={`${path}/images/palet-blue-dot.jpg`}
              alt="Resources"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <p className="p-4 text-white absolute bottom-0">
              We have gathered a series of educational, practical, and research resources based on strict scientific standards, for anyone interested in getting involved in the dissemination of current astronomy.
            </p>
          </div>
          
          <InfoGrid items={info} />
        </section>

        <Parallax
          title="Visit Our World"
          subtitle="Astronomy Outreach Map"
          backgroundImage={`${path}/images/parallax-bg.jpg`}
        />
      </div>
    </div>
  );
}

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, ['home', 'layout', 'about'])),
    },
  };
};
