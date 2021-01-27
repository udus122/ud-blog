import type { GetStaticProps } from "next";
import * as React from "react";
import IndexPage from "@/components/Pages/IndexPage";
import { fetchEntries as fetchArticleEntries } from "@/libs/api/article";

type IProps = React.ComponentProps<typeof IndexPage>;

const Index: React.FC<IProps> = ({ articles }) => {
  return <IndexPage articles={articles} />;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const articleCollection = await fetchArticleEntries();
  const articles = articleCollection.items;
  return {
    props: {
      articles,
    },
  };
};

export default Index;
