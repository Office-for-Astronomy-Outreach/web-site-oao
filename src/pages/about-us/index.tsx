
import ContentCard from "@/components/ContentCard";
import InfoGrid from "@/components/InfoGrid";
import Parallax from "@/components/Parallax";
import CardTeamMember from "@/components/TeamCard";
import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Kelly Blumenthal",
      role: "Director",
      image: "/images/kelly.jpeg",
      description:
        "She is an astronomer-turned-educator dedicated to science communication, promoting scientific attitudes, and creating educational opportunities for marginalized groups.",
    },
    {
      name: "Dr. Naomi Asabre Frimpong",
      role: "Deputy Director",
      image: "/images/drnaomi.png",
      description:
        "Vice President of AfAS, promotes astronomy in Africa through outreach, mentoring, and global collaboration. She holds a Ph.D. in astronomy and serves on the African Network of Women in Astronomy board.",
    },
    {
      name: "Cintia Duran",
      role: "International Outreach Officer",
      image: "/images/cintia.png",
      description: "Focused on building global outreach strategies for astronomy.",
    },
  ];

  const info = [
    {
      title: "IAU COMMISSION C2",
      description: "We work with IAU Commission C2 to co-organise the Communicating Astronomy with the Public Conferences, among other IAU-related events.",
      bgColor: "bg-blue-200",
      url: "/" },
    {
      title:"LEIDEN UNIVERSITY",
      description: "We partner with Leiden University for our Telescopes for All project, collaboration on Science and Society, and through our IAU OAO Science Communication Internship",
      bgColor: "bg-blue-300",
      url: "/",
    },
    {
      title: "SKA ORGANISATION",
      bgColor: "bg-blue-400",
      description: "The SKAO provides the funding for our NOC/SKACON Funding Scheme projects - a joint funding program in which NOCs and SKACONS collaborate to perform",
      url: "/"
    },
    {
      title: "INTER-UNIVERSITY CENTRE FOR ASTRONOMY AND ASTROPHYSICS (IUCAA)",
      description: "Astronomy communicators from IUCAA work with us on several of our programs throughout the year. In addition, staff from IUCAA provide technical support for",
      bgColor: "bg-blue-500",
      url: "/"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-home ">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          <div className="flex flex-wrap w-full gap-8">
            <div className="flex flex-1 items-center">
              <h1 className="text-h1 font-extrabold text-white">
                What is the Office for Astronomy Outreach?
              </h1>
            </div>
            <div className="w-full md:w-1/2 h-64 relative rounded-lg overflow-hidden">
              <Image
                src="/images/about.png"
                alt="About"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col gap-16">
        <ContentCard
          title={"About Us"}
          text="The Office for Astronomy Outreach (OAO) of the International Astronomical Union (IAU) is a global initiative that connects professionals and enthusiasts to promote astronomy outreach worldwide.
          Its mission is to professionalize science communication and bring the universe closer to the public by fostering global, educational, and community-driven projects that emphasize inclusion, collaboration, and respect for cultural diversity. This is achieved through innovative programs and its international network of National Outreach Coordinators (NOCs), which spans over 120 countries."
          type="secondary"
        />

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-h3 font-bold">Mission</h3>
            <p className="mt-6">
              Inspire public engagement in astronomy by ensuring access to
              astronomical information and effectively communicating the science
              of the cosmos.
            </p>
          </div>
          <div className="bg-primary-main rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-h3 font-bold">Vision</h3>
            <p className="mt-6">
              The OAO envisions itself as a bridge between the IAU and the
              global astronomy community, connecting amateur astronomers,
              outreach practitioners, educators, and the public. Through
              international collaboration, we aim to make the science of
              astronomy accessible to everyone.
            </p>
          </div>
        </div>

        {/* Strategic Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-h3 font-bold text-primary-main">Strategic Actions</h3>
          <p className="mt-6">
            The OAO aims to foster collaboration and make astronomy accessible
            to everyone by building bridges between international communities
            and promoting public engagement in the science of the cosmos.
          </p>
        </div>

        {/* Team Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-bold text-body">Our Team</h2>
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
        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-bold text-body">Partners</h2>
          <div className="flex flex-wrap gap-6">
            <div className="bg-primary-main text-white rounded-lg shadow-lg p-6 w-full md:w-1/2">
              <p className="">
                Inspire public engagement in astronomy by ensuring access to
                astronomical information and effectively communicating the
                science of the cosmos.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full h-32 relative">
                <Image
                  src="/images/naoj-logo.png"
                  alt="NAOJ Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full h-32 relative">
                <Image
                  src="/images/iau-logo.jpg"
                  alt="IAU Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-bold text-body">Collaborations</h2>

            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              <p className="">
                The IAU OAO collaborates with many international organizations to bring astronomy to the global public and further
                 work toward fulfilling our Strategic Actions
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
