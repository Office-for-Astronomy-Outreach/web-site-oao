import type { GetServerSideProps } from 'next';
import { ni18nConfig } from '../../ni18n.config';

import {
  loadTranslations,
} from 'ni18n'
import Carousel from '@/components/Carrousel';
import SolarSystem from '@/animations/SolarSystem';

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
      <Carousel slides={slides} autoPlay={true} interval={7000} />
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