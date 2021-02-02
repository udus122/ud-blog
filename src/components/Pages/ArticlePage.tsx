import * as React from "react";
import Head from "next/head";
import Article from "@/components/Organisms/Article";
import Template from "@/components/Templates/Template";

type IProps = React.ComponentProps<typeof Article>;

const ArticlePage = ({ article }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{article.fields.title} - UDlog</title>
      </Head>
      <Template title={"UDlog"}>
        <Article article={article} />
      </Template>
    </React.Fragment>
  );
};

export default ArticlePage;
