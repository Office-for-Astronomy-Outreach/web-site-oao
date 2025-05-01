import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import classNames from "classnames";
import Image from "next/image";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import ImageGrid from "@/components/ImageGridsSection";

import Parallax from "@/components/Parallax";
import CardTeamMember from "@/components/TeamCard";
import { projectPath } from "@/utils/path";

export default function ProfessionalDevelopment() {
  const items = [
    {
      title: "CAP Conference",
      link: "https://capconferences.org/",
      image: `${projectPath}/images/cap-conference-01.jpg`,
      alt: "Invited speaker for the sub-theme “Outreach and Informal Education,” Norio Kaifu, Professor Emeritus of the National Astronomical Observatory of Japan (NAOJ) Advisor to the IAU, writer, and lecturer. CAP 2018",
      target: "_blank",
    },
    {
      title: "CAP Training",
      link: "https://www.iau.org/public/oao/cap/cap-training/",
      image: `${projectPath}/images/cap-training-01.jpg`,
      alt: "The Communicating Astronomy with the Public Journal (CAPj) is a free peer-reviewed journal for astronomy communicators.",
    },
    {
      title: "CAP Journal",
      link: "https://www.capjournal.org/",
      image: `${projectPath}/images/cap-journal-01.jpg`,
      alt: "Cover of the CAP Journal showing a representation of astronomical outreach.",
      target: "_blank",
    },
    {
      title: "CAP Inclusive Astronomy  Working Group",
      link: "https://iau.org/science/scientific_bodies/working_groups/259/",
      image: `${projectPath}/images/cap-working-group-inclusive.png`,
      alt: "Students join the Kottamai Observatory staff for two open days organised in the context of NameExoWorlds 2022 on 18 and 19 November 2022, in Cairo, Egypt.",
      target: "_blank",
    },
  ];

  /*const info = [
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
      title: "Astronomy Education Materials",
      description: "",
      bgColor: "bg-blue-500",
      url: "/",
    },
  ];*/

  const group = [
    {
      name: "Indigenous Studies in Astronomy",
      role: "",
      image: `${projectPath}/images/professional-development/work-group-1.jpg`,
      description: (
        <div className="space-y-4">
          <p>
            <strong>What is this group about?</strong> This group focuses on
            exploring the intersection of indigenous knowledge systems and
            modern astronomy. We aim to bridge the gap between traditional
            wisdom and scientific discovery, encouraging the integration of
            indigenous perspectives in astronomy.
          </p>
          <p>
            <strong>How to join:</strong> If you&apos;re passionate about
            learning from indigenous cultures and want to collaborate in
            advancing inclusive astronomy, join us! We welcome researchers,
            educators, and advocates who wish to explore and promote the
            valuable contributions of indigenous peoples to the understanding of
            the universe. Whether you&apos;re an academic, a member of an
            indigenous community, or just someone who wants to learn more, your
            voice and expertise are vital.
          </p>
        </div>
      ),
    },
    {
      name: "Inclusion and Community in Astronomy",
      role: "",
      image: `${projectPath}/images/professional-development/work-group-2.jpg`,
      description: (
        <div className="space-y-4">
          <p>
            <strong>What is this group about?</strong> The goal of this group is
            to ensure that everyone, regardless of background, has access to the
            wonders of astronomy. We are committed to promoting inclusivity
            within the field and addressing barriers faced by underrepresented
            groups. This includes creating opportunities for individuals from
            diverse backgrounds to engage with astronomy, from education to
            professional development.
          </p>
          <p>
            <strong>How to join:</strong> If you believe in the power of
            inclusion and want to help build a community where everyone feels
            represented in the field of astronomy, we invite you to participate.
            This group is open to anyone who wants to create a more inclusive
            environment, whether through outreach, research, or policy advocacy.
            Join us in making astronomy a field for all.
          </p>
        </div>
      ),
    },
    {
      name: "Language and Astronomy: Breaking Language Barriers",
      role: "",
      image: `${projectPath}/images/professional-development/work-group-3.jpg`,
      description: (
        <div className="space-y-4">
          <p>
            <strong>What is this group about?</strong> Language is a powerful
            tool in shaping how we understand the world. In this group, we focus
            on the importance of language diversity in the sciences,
            particularly in astronomy. We aim to challenge the dominance of
            English and explore how other languages can be used to communicate
            astronomical knowledge, promoting greater accessibility and
            inclusion worldwide.
          </p>
          <p>
            <strong>How to join:</strong> If you&apos;re passionate about
            language and its role in shaping our understanding of the universe,
            this group is for you. Whether you&apos;re a linguist, an educator,
            a scientist, or simply someone who believes in the importance of
            linguistic diversity in science, your input is essential. Join us in
            promoting the use of diverse languages in the astronomical
            community.
          </p>
        </div>
      ),
    },
    {
      name: "The Use of AI in Astronomy Engage",
      role: "",
      image: `${projectPath}/images/professional-development/work-group-3.jpg`,
      description: (
        <div className="space-y-4">
          <p>
            <strong>What is this group about?</strong> Artificial Intelligence (AI) is rapidly becoming an integral part of how humans gather and interact with information. The growing prominence of AI has sparked many debates about ethics, the misinformation landscape, and the future of science communication itself.
          </p>
          <p>
            <strong>How to join:</strong> There is no stopping the integration of AI into science communication, but we can find ways to use this tool — and build our own — that improve the field, rather than render it obsolete. This group aims to bring discussions related to AI to our community of astronomy communication. If you are interested in or concerned about the rise of AI, join us as we investigate ways to navigate this new terrain
          </p>
        </div>
      ),
    },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Professional Development", href: "/professional-development" },
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
          urlImage: `${projectPath}/images/professional-development/background.jpg`,
          alt: "The Milky Way arcs across this 360-degree panorama of the night sky above ESO's Paranal Very Large Telescope.",
          caption:
            "The Milky Way arcs across this 360-degree panorama of the night sky above ESO's Paranal Very Large Telescope. Credit: ESO/H.H. Heyer",
        }}
        title="Professional Development"
        breadcrumbs={breadcrumbs}
      />
      <div
        className={containerClass}
        role="region"
        aria-labelledby="professional-development-title"
      >
        <ContentCard
          title="Professional Development"
          text="We work to empower the professional astronomy community by providing continuous development opportunities. Through resources, events, and programs, we support the professionalization of science communication and foster the growth of skills and networks within astronomy."
          type="secondary"
          wfull
        />

        <ImageGrid
          items={items}
          title="CAP Communicating Astronomy with the Public"
          description="Is a key initiative of the International Astronomical Union's Office for Astronomy Outreach (OAO). It encompasses various projects, including the CAP Conference, the CAP Journal, CAP Training, and the CAP Inclusive Astronomy Communication working group. These efforts aim to enhance the global exchange of knowledge, improve science communication practices, and promote inclusive and accessible ways of sharing astronomy with diverse audiences. CAP is a core part of the OAO’s mission to bridge the gap between the scientific community and the public."
        />

        <section aria-labelledby="naoj-program">
          <div className="flex flex-col gap-8">
            <h2 id="naoj-program" className="text-h2 font-bold text-body px-8">
              National Astronomical Observatory of Japan NAOJ Astronomy Outreach
              Trainee
            </h2>
            <div className="flex flex-wrap w-full gap-8">
              <div className="flex flex-1 relative rounded-lg sm:aspect-square aspect-video">
                <Image
                  src={`${projectPath}/images/professional-development/naoj.jpg`}
                  alt="NAOJ Visitor Program"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg"
                />
              </div>

              <div
                className="w-full md:w-1/2 items-center rounded-lg bg-primary-main aspect-auto p-8"
                role="region"
                aria-labelledby="open-call-title"
              >
                <h3
                  id="open-call-title"
                  className="text-white text-h3 font-bold"
                >
                  Open Call
                </h3>
                <p className="py-6 text-white">
                  This program invites a science communicator from any country
                  for a year-long internship or fellowship at the IAU Office for
                  Astronomy Outreach. Trainees build skills while engaging in
                  IAU OAO and NAOJ outreach and educational programming. All
                  tasks and deliverables carried out during the training are
                  assigned in alignment with the mission and vision of all
                  institutions in mind. The programme is built to enhance
                  relations between the National Astronomical Observatory of
                  Japan (NAOJ) and the IAU OAO in areas of public outreach and
                  astronomy education.
                </p>
                <p className="py-6 text-white">Would you like to register?</p>
                <Button
                  label="Register as Astronomer"
                  color="light"
                  variant="solid"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-8">
          <h2 className="capitalize text-h2 font-bold text-body px-8">
            Community of Practice Discord Server
          </h2>
          <p className="text-gray-600 xl:text-h5 text-p w-full mb-4 px-8">
          The CAP Community of Practice Discord is a vibrant global hub for astronomy communicators, educators, and National Outreach Coordinators (NOCs). Our mission is to foster collaboration, professional growth, and the exchange of best practices in astronomy communication.

We aim to provide resources, promote the professionalisation of science communication, and empower our community to use astronomy as a tool for education, inclusion, and societal impact. Through shared learning, peer support, and global collaboration, we are building a stronger, more connected network of science communicators.

Join us in shaping the future of astronomy outreach — together, we make the universe more accessible and meaningful to all.

          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Section
        <section
          className="flex flex-col gap-8"
          aria-labelledby="resources-title"
        >
          <h2 id="resources-title" className="text-h2 font-bold text-body">
            Resources
          </h2>
          <div className="w-full sm:max-h-80 max-h-[30rem] relative rounded-lg overflow-hidden">
            <Image
              src={`${projectPath}/images/about/resources.jpg`}
              alt="Resources"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-lg"
            />
            <p className="p-4 text-white absolute bottom-0">
              The National Outreach Coordinator (NOC) network is a global
              initiative of the International Astronomical Union (IAU) aimed at
              connecting astronomy outreach efforts worldwide. Comprising
              representatives from over 100 countries, the NOC network works to
              bridge local communities with global astronomy programs, fostering
              collaboration and promoting the public understanding of science.
              Together, they create opportunities for cultural exchange,
              education, and engagement, making astronomy accessible to diverse
              audiences across the globe.
            </p>
          </div>

          <InfoGrid items={info} />
        </section> */}

        <Parallax
          title="Visit Our World"
          subtitle="Astronomy Outreach Events"
          backgroundImage={{
            imgUrl: `${projectPath}/images/professional-development/background-secondary.jpg`,
            caption:
              "Clouds over the New Technology Telescope (NTT). Credit: Y. Beletsky (LCO)/ESO",
          }}
        >
          <Button
            label="Events"
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
        "home",
        "layout",
        "about",
      ])),
    },
  };
};
