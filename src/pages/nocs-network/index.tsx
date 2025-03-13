import { useEffect, useState } from "react";
import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import classNames from "classnames";

import Parallax from "@/components/Parallax";
import ParticleMap from "@/components/ParticleMap";
import WorldRegions from "@/components/WorldRegions";

import type { Region } from "@/types";
import ContentCard from "@/components/ContentCard";
import FAQList from "@/components/FAQList";
import { projectPath } from "@/utils/path";
import EmailDisplay from "@/components/EmailDisplay";

export default function ProfessionalDevelopment() {
  const [regions, setRegions] = useState<Region[]>([
    {
      id: 1,
      name: "Africa",
      slug: "africa",
    },
    {
      id: 3,
      name: "Asia",
      slug: "asia",
    },
    {
      id: 4,
      name: "Europe",
      slug: "europe",
    },
    {
      id: 5,
      name: "Oceania",
      slug: "oceania",
    },
    {
      id: 2,
      name: "Americas",
      slug: "americas",
    },
  ]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("/api/regions");
        if (response.ok) {
          const data = await response.json();
          setRegions(data);
        } else {
          // eslint-disable-next-line no-console
          console.error("Failed to fetch regions");
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching data: ", error);
      }
    };

    fetchRegions();
  }, []);

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
      <section className="bg-nocs mb-8">
        <div className="container aspect-video mx-auto px-4 py-8 relative">
          <ParticleMap />
        </div>
      </section>

      <div
        role="region"
        aria-labelledby="nocs-network"
        className={containerClass}
      >
        <div className="flex flex-col gap-16">
          <div
            className="p-8 bg-yellow-400 rounded-lg"
            aria-labelledby="nocs-network-title"
          >
            <h1
              id="nocs-network-title"
              className="md:text-5xl text-h1 text-end font-bold text-body capitalize"
            >
              National <span className="text-primary-main">Outreach</span>
              <br /> Coordinators Network
            </h1>
          </div>
          <p
            className="xl:text-h5 text-p md:columns-2 gap-8 px-8 text-gray-600"
            role="presentation"
          >
            The National Outreach Coordinator (NOC) network is a global
            initiative of the International Astronomical Union (IAU) dedicated
            to making astronomy accessible to diverse audiences around the
            world. Representing over 100 countries, NOCs serve as national
            points of contact for astronomy outreach, bridging local communities
            with international programs and fostering collaboration on a global
            scale. Beyond sharing astronomy-related news and implementing IAU
            Office for Astronomy Outreach (OAO) projects at a national level,
            NOCs play a crucial role in creating opportunities for education,
            cultural exchange, and public engagement. Through their efforts,
            astronomy becomes a powerful tool to connect people across different
            backgrounds, inspiring curiosity and a deeper understanding of the
            universe. In return, they receive support from the IAU OAO,
            including funding opportunities, access to international resources,
            and the strength of a global network of outreach professionals
            working together to bring the wonders of the astronomy for everyone.
          </p>
        </div>
        <Parallax
          title=" Together, they create opportunities for cultural exchange, education, and engagement, making astronomy accessible to diverse audiences across the globe."
          subtitle=""
          backgroundImage={{
            imgUrl: `${projectPath}/images/nocs-network/background-secondary.jpg`,
          }}
        ></Parallax>

        <FAQList />

        {regions.length > 0 && <WorldRegions regions={regions} />}

        <ContentCard
          title="NOCs Funding Scheme"
          text="Aligned with the IAU Strategic Plan 2020-2030, and
                  specifically with Goal 4, which states that the IAU engages
                  the public in astronomy through access to astronomical
                  Information and communication of the science of astronomy, the
                  OAO has outlined a series of strategic actions to achieve this
                  vision throughout the decade. The NOCs Funding Scheme is a
                  dedicated grant system to support public engagement
                  initiatives led by IAU National Outreach Coordinators. This
                  grant system, administered by the IAU Office for Astronomy
                  Outreach, will provide funding to projects presented as a
                  joint activity between countries, with the goal of bolstering
                  international cooperation."
          type="primary"
          image={{
            imageUrl: `${projectPath}/images/nocs-network/astronomy-global-project.jpg`,
            caption:
              "Activity in Ethiopia in the framework of the 100 Hours of Astronomy Global Project. Credit: IAU100",
            alt: "A group of Ethiopian schoolchildren in uniform watch with enthusiasm as a classmate, standing on a chair, looks through an astronomical telescope mounted on a wooden tripod. A curly-haired instructor guides the activity, ensuring that the students understand how to use the telescope.",
          }}
        />
        <ContentCard
          title="More Information"
          text={
            <div className="space-y-6">
              <p>
                The IAU <span>Office for Astronomy Outreach (IAU OAO)</span> is
                dedicated to engaging the public in astronomy through access to
                astronomical information and communication of the science of
                astronomy. The OAO is responsible for managing and maintaining
                the IAU National Outreach Coordinator (NOC) network, including
                the NOCs Funding Scheme.
              </p>
              <p>
                If you have any questions you can contact us by email:
                <EmailDisplay email="public@oao.iau.org" />
              </p>
            </div>
          }
          type="transparent"
          image={{
            imageUrl: `${projectPath}/images/nocs-network/background.png`,
            alt: "A group of young girls with solar protection glasses look toward the Sun in an open field.",
            caption: "Copyright: 100 Hours of Astronomy, India, Neelam Mishra.",
          }}
        />
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
