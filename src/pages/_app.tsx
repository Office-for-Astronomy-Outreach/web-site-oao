import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../../ni18n.config';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) =>{
  const is404 = Component?.is404;
  return (
    is404 ? <Component {...pageProps} /> : <Layout><Component {...pageProps} /></Layout>
  );
}

export default appWithI18Next(App, ni18nConfig)
