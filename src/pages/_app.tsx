import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
