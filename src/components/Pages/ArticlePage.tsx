import * as React from "react";

import Article from "@/components/Organisms/Article";
import Toc from "@/components/Organisms/Toc";
import { BlogTemplate } from "@/components/Templates/BlogTemplate";
import SEO from "@/components/Molcules/SEO";

type Props = Omit<React.ComponentProps<typeof Article>, "className">;

const ArticlePage = ({ article }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <SEO title={article.title} />

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
