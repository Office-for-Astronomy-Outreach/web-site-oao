import type { AppProps } from "next/app";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "ni18n.config";
import { ToastContainer } from "react-toastify";

import Head from "next/head";

import Layout from "@/components/Layout";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const is404 = (Component as any).is404;
  return is404 ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Head>
        <title>IAU Office for Astronomy Outreach</title>
      </Head>
      <ToastContainer
        role="alert"
        position="top-right"
        autoClose={5000}
        style={{ zIndex: 1000 }}
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithI18Next(App, ni18nConfig);
