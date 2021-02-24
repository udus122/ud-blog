import * as React from "react";
import Head from "next/head";
import Article from "@/components/Organisms/Article";
import Toc from "@/components/Organisms/Toc";
import { BlogTemplate } from "@/components/Templates/BlogTemplate";

type Props = Omit<React.ComponentProps<typeof Article>, "className">;

const ArticlePage = ({ article }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{article.title} - UDlog</title>
      </Head>
      <BlogTemplate
        title={"UDlog"}
        sideContents={{
          title: "目次",
          content: <Toc markdown={article.body} />,
        }}
      >
        <Article className="prose mx-auto" article={article} />
      </BlogTemplate>
    </React.Fragment>
  );
};

export default ArticlePage;
