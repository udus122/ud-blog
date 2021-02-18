import * as React from "react";
import type { Entry } from "contentful";
import Head from "next/head";
import { BlogTemplate } from "@/components/Templates/BlogTemplate";
import type { IArticleFields } from "@/types/contentful";
import ArticleList from "@/components/Organisms/ArticleList";

type Props = {
  articles: Entry<IArticleFields>[];
};

const IndexPage = ({ articles }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>UDlog</title>
      </Head>
      <BlogTemplate title={"UDlog"}>
        <ArticleList articles={articles} />
      </BlogTemplate>
    </React.Fragment>
  );
};

export default IndexPage;
