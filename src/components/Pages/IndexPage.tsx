import * as React from "react";
import type { Entry } from "contentful";
import Head from "next/head";
import type { IArticleFields } from "@/types/contentful";
import Template from "@/components/Templates/Template";
import ArticleList from "@/components/Organisms/ArticleList";

type IProps = {
  articles: Entry<IArticleFields>[];
};

const IndexPage = ({ articles }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>UDlog</title>
      </Head>
      <Template title={"UDlog"}>
        <h2>This is Main</h2>
        <ArticleList articles={articles} />
      </Template>
    </React.Fragment>
  );
};

export default IndexPage;
