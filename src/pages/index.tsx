import type { GetServerSideProps } from 'next';
import { ni18nConfig } from '../../ni18n.config';

import {
  loadTranslations,
} from 'ni18n'
import Carousel from '@/components/Carrousel';
import ContentCard from '@/components/ContentCard';
import Parallax from '@/components/Parallax';

export default function Home() {
  const slides = [
    {
      image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/5357641277789f0a8de3eo.jpg?w=1280&q=50',
      title: 'Welcome to Our Website',
      subtitle: 'Discover amazing content and more',
      button: { label: 'Learn More', url: '/about' },
    },
    {
      image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/5357641277789f0a8de3eo.jpg?w=1280&q=50',
      title: 'Explore the World',
      subtitle: 'Travel with us to amazing destinations',
      button: { label: 'View Destinations', url: '/destinations' },
    },
  ];

  return (
    <div>
      <div>
        <Carousel slides={slides} autoPlay={true} interval={7000} />
      </div>
      <div className="md:container md:mx-auto my-16 flex flex-col gap-16">
        {/* Caso con imagen */}
        <ContentCard
          title="Accessible Astronomy for everyone"
          text="Office for Astronomy Outreach (OAO) promotes public engagement in astronomy, by providing accessible information, and fostering collaboration within the global astronomy community"
          type="secondary"
        />

        {/* Caso sin imagen */}
        <ContentCard
          title="Build community thorough astronomy Outreach"
          text="The OAO is dedicated to bringing astronomy closer to everyone, building bridges between the public and the discoveries of the cosmos. Through interactive projects and global collaborations, we aim to inspire new generations and strengthen the understanding of the universe from an accessible and exciting perspective."
          imageUrl="/images/build-community.png"
          type="transparent"
        />

        {/* Caso sin imagen */}
        <ContentCard
          title="Professional Development"
          text="We work to empower the professional astronomy community by providing continuous development opportunities. Through resources, events, and programs, we support the professionalization of science communication and foster the growth of skills and networks within astronomy."
          imageUrl="/images/professional-development.png"
          type={'primary'}
        />

        <div className="flex flex-col gap-6">
          <h1 className="text-h1 text-primary font-bold">
            Global Community of Astronomy Communicator
          </h1>

          <div className="flex flex-wrap w-full gap-4">
            {/* Primer contenedor con una matriz 2x2 */}
            <div className="w-full md:w-1/2 bg-gray-900 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-200 p-6 aspect-[4/3] rounded-lg"></div>
                <div className="bg-blue-300 p-6 aspect-[4/3] rounded-lg"></div>
                <div className="bg-blue-400 p-6 aspect-[4/3] rounded-lg"></div>
                <div className="bg-blue-500 p-6 aspect-[4/3] rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-1 md:w-1/2 gap-4">
              {/* Segundo contenedor con una matriz 1x2 */}
              <div className="w-1/2 bg-gray-900 p-4 rounded-lg">
                <div className="grid grid-rows-2 gap-4 h-full">
                  <div className="bg-green-200 p-6 aspect-[4/3] md:aspect-auto rounded-lg"></div>
                  <div className="bg-green-300 p-6 aspect-[4/3] md:aspect-auto rounded-lg"></div>
                </div>
              </div>

              {/* Tercer contenedor con una matriz 1x2 */}
              <div className="w-1/2 bg-gray-900 p-4 rounded-lg">
                <div className="grid grid-rows-2 gap-4 h-full">
                  <div className="bg-yellow-200 p-6 aspect-[4/3] md:aspect-auto rounded-lg"></div>
                  <div className="bg-yellow-300 p-6 aspect-[4/3] md:aspect-auto rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Parallax
          title="Explora el Universo"
          subtitle="Los secretos del cosmos te esperan"
          backgroundImage="/images/parallax-bg-01.jpg"
        >
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Descubrir Más
        </button>
      </Parallax>
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