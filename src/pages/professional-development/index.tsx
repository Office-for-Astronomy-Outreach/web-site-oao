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
      title: "CAP Conference",
      link: "https://capconferences.org/",
      image: `${path}/images/cap-conference.jpg`,
      alt: "Invited speaker for the sub-theme “Outreach and Informal Education,” Norio Kaifu, Professor Emeritus of the National Astronomical Observatory of Japan (NAOJ) Advisor to the IAU, writer, and lecturer. CAP 2018",
    },
    {
      title: "CAP Training",
      link: "/naoj",
      image: `${path}/images/cap-training.jpg`,
      alt: "The Communicating Astronomy with the Public Journal (CAPj) is a free peer-reviewed journal for astronomy communicators.",
    },
    {
      title: "CAP Journal",
      link: "/iau",
      image: `${path}/images/cap-journal.jpg`,
      alt: "Cover of the CAP Journal showing a representation of astronomical outreach.",
    },
    {
      title: "CAP Inclusive Astronomy  Working Group",
      link: "/rectangular",
      image: `${path}/images/cap-working-group-inclusive.png`,
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
    { label: 'Professional Development', href: '/professional-development' },
  ];

  return (
    <div role="region" aria-labelledby="professional-development-title">

      {/* Hero Section */}
      <Banner 
        image={`${path}/images/professional-development.png`}
        title="Professional Development"
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 py-8 flex flex-col gap-16 content-card-img">
        <ContentCard
          title="Professional Development"
          text="We work to empower the professional astronomy community by providing continuous development opportunities. Through resources, events, and programs, we support the professionalization of science communication and foster the growth of skills and networks within astronomy."
          type="secondary"
          twoColums
          wfull
        />

        <ImageGrid
          items={items}
          title="CAP Communicating Astronomy with the Public"
          description="Is a key initiative of the International Astronomical Union's Office for Astronomy Outreach (OAO). It encompasses various projects, including the CAP Conference, the CAP Journal, CAP Training, and the CAP Inclusive Astronomy Communication working group. These efforts aim to enhance the global exchange of knowledge, improve science communication practices, and promote inclusive and accessible ways of sharing astronomy with diverse audiences. CAP is a core part of the OAO’s mission to bridge the gap between the scientific community and the public."
        />

        <section aria-labelledby="naoj-program">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
            <h2 id="naoj-program" className="text-h2 font-bold text-body">
              National Astronomical Observatory of Japan NAOJ Astronomy Outreach Trainee
            </h2>
            <div className="flex flex-wrap w-full gap-8">
              <div className="flex flex-1 relative rounded-lg sm:aspect-square aspect-video">
                <Image
                  src={`${path}/images/professional-development.png`}
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
                  This program invites a science communicator from any country for  a year-long 
                  internship or fellowship at the IAU Office for Astronomy Outreach. 
                  Trainees build skills while 
                  engaging in IAU OAO and NAOJ outreach and educational 
                  programming. All tasks and deliverables carried out during the 
                  training are assigned in alignment with the mission and vision of all 
                  institutions in mind. 
                  The programme is built to enhance relations between the National 
                  Astronomical Observatory of Japan (NAOJ) and the IAU OAO in 
                  areas of public outreach and astronomy education.
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
              src={`${path}/images/about/resources.jpg`}
              alt="Resources"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <p className="p-4 text-white absolute bottom-0">The National Outreach Coordinator (NOC) network is a global initiative of the International Astronomical Union (IAU) aimed at connecting astronomy outreach efforts worldwide. Comprising representatives from over 100 countries, the NOC network works to bridge local communities with global astronomy programs, fostering collaboration and promoting the public understanding of science. Together, they create opportunities for cultural exchange, education, and engagement, making astronomy accessible to diverse audiences across the globe.</p>
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
