import { CssBaseline } from "@material-ui/core";
import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
