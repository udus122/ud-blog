import * as React from "react";
import Head from "next/head";
import siteMeta from "@/config";

type Props = {
  title: string;
  description?: string;
};

const SEO = ({ title, description }: Props): JSX.Element => {
  const { siteTitle } = siteMeta;

  console.log(title, siteTitle, description);

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:creator"
        content={`@${siteMeta.social.twitter}`}
      />
      <meta property="twitter:title" content={title} />
      {description && (
        <meta property="twitter:description" content={description} />
      )}
    </Head>
  );
};

export default SEO;
