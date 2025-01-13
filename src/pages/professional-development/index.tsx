import Button from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import ImageGrid from "@/components/ImageGrid";
import InfoGrid from "@/components/InfoGrid";
import Parallax from "@/components/Parallax";
import Image from "next/image";

export default function ProfessionalDevelopment() {
  const items = [
    {
      title: "CAP Conference",
      link: "https://capconferences.org/",
      image: "/images/cap-conference.jpg",
      alt: "Invited speaker for the sub-theme “Outreach and Informal Education,” Norio Kaifu, Professor Emeritus of the National Astronomical Observatory of Japan (NAOJ) Advisor to the IAU, writer, and lecturer. CAP 2018",
    },
    {
      title: "CAP Training",
      link: "/naoj",
      image: "/images/cap-training.jpg",
      alt: "The Communicating Astronomy with the Public Journal (CAPj) is a free peer-reviewed journal for astronomy communicators.",
    },
    {
      title: "CAP Journal",
      link: "/iau",
      image: "/images/cap-journal.jpg",
      alt: "Cover of the CAP Journal showing a representation of astronomical outreach.",
    },
    {
      title: "CAP Working Group Inclusive Astronomy Communication",
      link: "/rectangular",
      image: "/images/cap-working-group-inclusive.png",
      alt: "Students join the Kottamai Observatory staff for two open days organised in the context of NameExoWorlds 2022 on 18 and 19 November 2022, in Cairo, Egypt.",
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

  return (
    <div role="region" aria-labelledby="professional-development-title">
      {/* Hero Section */}
      <section className="bg-home">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          <div className="flex flex-wrap w-full gap-8">
            <div className="flex flex-1 items-center">
              <h1
                id="professional-development-title"
                className="text-h1 font-extrabold text-white"
              >
                Professional Development
              </h1>
            </div>
            <div className="w-full md:w-1/2 h-64 relative rounded-lg overflow-hidden">
              <Image
                src="/images/professional-development.png"
                alt="Professional Development section"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 flex flex-col gap-16 content-card-img">
        <ContentCard
          title="Bridge between public and science"
          text="The Office for Astronomy Outreach (OAO) of the International Astronomical Union (IAU) is a global initiative that connects professionals and enthusiasts to promote astronomy outreach worldwide.
          Its mission is to professionalize science communication and bring the universe closer to the public by fostering global, educational, and community-driven projects that emphasize inclusion, collaboration, and respect for cultural diversity. This is achieved through innovative programs and its international network of National Outreach Coordinators (NOCs), which spans over 120 countries."
          type="secondary"
        />

        <ImageGrid
          items={items}
          title="CAP Communicating Astronomy with the Public"
        />

        <section aria-labelledby="naoj-program">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
            <h2 id="naoj-program" className="text-h2 font-bold text-body">
              NAOJ Visitor Program
            </h2>
            <p className="text-h5 text-body" role="contentinfo">
              The OAO envisions itself as a bridge between the IAU and the global astronomy community, connecting amateur astronomers, outreach practitioners, educators, communicators, and the general public through international collaboration.
            </p>
            <div className="flex flex-wrap w-full gap-8">
              <div className="flex flex-1 relative rounded-lg sm:aspect-square aspect-video">
                <Image
                  src="/images/professional-development.png"
                  alt="NAOJ Visitor Program"
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
                <h3
                  id="open-call-title"
                  className="text-white text-h3 font-bold"
                >
                  Open Call
                </h3>
                <p className="py-6 text-white">
                  Aligned with the IAU Strategic Plan 2020-2030, and specifically with Goal 4, which states that the IAU engages the public in astronomy through access to astronomical Information and communication of the science of astronomy, the OAO has outlined a series of strategic actions to achieve this vision throughout the decade.
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

        {/* Collaboration Section */}
        <section className="flex flex-col gap-6" aria-labelledby="resources-title">
          <h2 id="resources-title" className="text-h2 font-bold text-body">
            Resources
          </h2>
          <div className="w-full h-80 relative rounded-lg overflow-hidden">
            <Image
              src="/images/resources.jpg"
              alt="Resources"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          
          <InfoGrid items={info} />
        </section>

        <Parallax
          title="Visit Our World"
          subtitle="Astronomy Outreach Map"
          backgroundImage="/images/parallax-bg.jpg"
        />
      </div>
    </div>
  );
}
