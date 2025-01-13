import type { GetServerSideProps } from 'next';
import { ni18nConfig } from '../../../ni18n.config';
import {
  loadTranslations,
} from 'ni18n'

import ContentCard from "@/components/ContentCard";
import InfoGrid from "@/components/InfoGrid";
import Parallax from "@/components/Parallax";
import CardTeamMember from "@/components/TeamCard";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';
import { useEffect, useState } from 'react';
import Banner from '@/components/Banner';

export default function About() {
  const { t } = useTranslation('about');

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/category/subcategory' },
  ];

  const teamMembers = [
    {
      name: "Dr. Kelly Blumenthal",
      role: "Director",
      image: "/images/kelly.jpeg",
      description: "She is an astronomer-turned-educator dedicated to science communication, promoting scientific attitudes, and creating educational opportunities for marginalized groups.",
    },
    {
      name: "Dr. Naomi Asabre Frimpong",
      role: "Deputy Director",
      image: "/images/drnaomi.png",
      description: "Vice President of AfAS, promotes astronomy in Africa through outreach, mentoring, and global collaboration. She holds a Ph.D. in astronomy and serves on the African Network of Women in Astronomy board.",
    },
    {
      name: "Cintia Duran",
      role: "International Outreach Officer",
      image: "/images/cintia.png",
      description: "Cintia's work focuses on a unique and interdisciplinary approach to astronomy outreach, at the intersection of planetary science, language, and sound, particularly in communicating complex scientific ideas and our place in the universe.",
    },
  ];

  const info = [
    {
      title: "IAU COMMISSION C2",
      description: "We work with IAU Commission C2 to co-organise the Communicating Astronomy with the Public Conferences, among other IAU-related events.",
      bgColor: "bg-blue-200",
      url: "https://capconferences.org/",
    },
    {
      title:"LEIDEN UNIVERSITY",
      description: "We partner with Leiden University for our Telescopes for All project, collaboration on Science and Society, and through our IAU OAO Science Communication Internship",
      bgColor: "bg-blue-300",
      url: "https://www.universiteitleiden.nl/",
    },
    {
      title: "SKA ORGANISATION",
      bgColor: "bg-blue-400",
      description: "The SKAO provides the funding for our NOC/SKACON Funding Scheme projects - a joint funding program in which NOCs and SKACONS collaborate to perform",
      url: "https://www.skao.int/en",
    },
    {
      title: "IUCAA",
      description: "Astronomy communicators from IUCAA work with us on several of our programs throughout the year. In addition, staff from IUCAA provide technical support for",
      bgColor: "bg-blue-500",
      url: "https://www.iucaa.in/",
    },
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  
  return (
    <div>
      {/* Hero Section */}
      <Banner 
        image="/images/about/sardinia-radio-telescope.jpg" 
        title={t("title")}
        breadcrumbs={breadcrumbs}
      />

      {/* About Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col gap-16">
        <ContentCard
          title={t("about.title")}
          text={<Trans i18nKey={t("about.description")} />}
          type="secondary"
          twoColums
          wfull
        />

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
            <h2 className="text-h2 font-bold">{t("mission.title")}</h2>
            <p className="mt-6">
              {t("mission.description")}
            </p>
          </div>
          <div className="bg-primary-main rounded-lg shadow-lg p-6 text-white">
            <h2 className="text-h2 font-bold">{t("vision.title")}</h2>
            <p className="mt-6">
              {t("vision.description")}
            </p>
          </div>
        </div>

        <ContentCard
          title={t("astronomy-for-everyone.title")}
          text={t("astronomy-for-everyone.description")}
          imageUrl="/images/about/observing-mercury.jpg"
          type="transparent"
        />

  
          

        {/* Strategic Actions */}

          <ContentCard
            title= {t("strategic-actions.title")}
            text= {t("strategic-actions.description")}
            imageUrl="/images/about/about-new.png"
            type="primary"
          />

         

        {/* Team Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-bold text-body">{t("team.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>

        {/* Partners Section */}
        <section className="md:py-16 py-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-bold text-body">{t("partners.title")}</h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-full">
              <p className="">
                {t("partners.description")}
              </p>
            </div>
            <div className="flex-1 flex lg:w-1/3 justify-center items-center">
              <div className="w-full relative bg-white rounded-lg shadow-lg aspect-video">
                <Image
                  src="/images/naoj-logo.png"
                  alt="NAOJ Logo"
                  layout="fill"
                  objectFit="contain"
                  className="p-6"
                />
              </div>
            </div>
            <div className="flex-1 flex lg:w-1/3 justify-center items-center">
              <div className="w-full relative bg-white rounded-lg shadow-lg aspect-video">
                <Image
                  src="/images/iau-logo.jpg"
                  alt="IAU Logo"
                  layout="fill"
                  objectFit="contain"
                  className="p-6"
                />
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Collaboration Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-bold text-body">{t("collaborations.title")}</h2>

            <div className="w-full">
              <p className="">
                 {t("collaborations.description")}
              </p>
          </div>
          <div className="w-full">
            <InfoGrid items={info} />
          </div>
        </div>

        <Parallax
          title="Visit Our World"
          subtitle="Astronomy Outreach Map"
          backgroundImage="/images/parallax-bg.jpg"
        >
        </Parallax>
      </div>
    </div>
  );
}

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, undefined)),
    },
  };
};