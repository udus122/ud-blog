import * as React from "react";
import Head from "next/head";
import { BlogTemplate } from "@/components/Templates/BlogTemplate";
import ArticleList from "@/components/Organisms/ArticleList";

type Props = React.ComponentProps<typeof ArticleList>;

const IndexPage = ({ allArticles }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>UDlog</title>
      </Head>
      <BlogTemplate title={"UDlog"}>
        <ArticleList allArticles={allArticles} />
      </BlogTemplate>
    </React.Fragment>
  );
};

export default IndexPage;
