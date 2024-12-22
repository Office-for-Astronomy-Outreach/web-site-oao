import type { GetServerSideProps } from 'next';
import { ni18nConfig } from '../../ni18n.config';

import {
  loadTranslations,
} from 'ni18n'

export default function Home() {
  return (
    <></>
  );
}


export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, undefined)),
    },
  };
};