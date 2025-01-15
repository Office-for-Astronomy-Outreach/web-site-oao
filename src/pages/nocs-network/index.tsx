import type { GetServerSideProps } from 'next';
import { ni18nConfig } from 'ni18n.config';
import { loadTranslations } from 'ni18n'

import Button from "@/components/Button";

import Parallax from "@/components/Parallax";
import ParticleMap from "@/components/ParticleMap";
import WorldRegions from "@/components/WorldRegions";

// Cargar el componente solo en el cliente

export default function ProfessionalDevelopment() {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div role="region" aria-labelledby="professional-development-title">
      {/* Hero Section */}
      <section className="bg-nocs">
        <div className="container aspect-video mx-auto px-4 py-8 relative">
         
            <ParticleMap />
        </div>
      </section>

      <div className="container mx-auto px-4 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <div className="md:p-8 p-4  bg-yellow-300 rounded-lg" aria-labelledby="resources-title" >
              <h1 id="resources-title" className="md:text-5xl text-h1 text-end font-bold text-body uppercase">
                  National <span className="text-teal-700">Outreach</span><br /> Coordinators Network
              </h1>
          </div>
          <p className="text-h5 text-gray-600 md:columns-2 gap-6" role="contentinfo">
            The IAU National Outreach Coordinators (NOCs) are national-level representatives for the IAU Office for Astronomy Outreach (OAO). Members of the network act as a point-of-contact for astronomy outreach for a country or territory. NOCs support the implementation of IAU OAO projects on a national level, share astronomy news and events within their country, and bridge the IAU with local communities. In the process, they receive outreach support from the IAU OAO, such as access to the NOCs Funding Scheme, and a connection with the global network of NOCs.
          </p>
        </div>

        <WorldRegions />

        <div
          className="w-full md:w-1/2 items-center rounded-lg bg-teal-700 aspect-auto p-8"
          role="region"
          aria-labelledby="open-call-title"
        >
          <h3
            id="open-call-title"
            className="text-white text-h3 font-bold"
          >
              pen Call
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