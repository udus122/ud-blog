import * as React from "react";
import Head from "next/head";
import Article from "@/components/Organisms/Article";
import { BlogTemplate } from "@/components/Templates/BlogTemplate";

type IProps = React.ComponentProps<typeof Article>;

const ArticlePage = ({ article }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{article.fields.title} - UDlog</title>
      </Head>
      <BlogTemplate title={"UDlog"}>
        <Article article={article} />
      </BlogTemplate>
    </React.Fragment>
  );
};

export default ArticlePage;
