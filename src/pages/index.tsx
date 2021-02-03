import type { GetStaticProps, InferGetStaticPropsType } from "next";
import * as React from "react";
import IndexPage from "@/components/Pages/IndexPage";
import { fetchEntries as fetchArticleEntries } from "@/libs/api/article";

type IProps = React.ComponentProps<typeof IndexPage>;

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const articleCollection = await fetchArticleEntries();
  const articles = articleCollection.items;
  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};

const Index = ({
  articles,
}: InferGetStaticPropsType<typeof IndexPage>): JSX.Element => {
  return <IndexPage articles={articles} />;
};

export default Index;
