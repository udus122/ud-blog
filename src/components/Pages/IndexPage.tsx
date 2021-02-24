import * as React from "react";

import { BlogTemplate } from "@/components/Templates/BlogTemplate";
import ArticleList from "@/components/Organisms/ArticleList";
import SEO from "@/components/Molcules/SEO";

type Props = React.ComponentProps<typeof ArticleList>;

const IndexPage = ({ allArticles }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <SEO title="TOP" />

      <BlogTemplate title={"UDlog"}>
        <ArticleList allArticles={allArticles} />
      </BlogTemplate>
    </React.Fragment>
  );
};

export default IndexPage;
