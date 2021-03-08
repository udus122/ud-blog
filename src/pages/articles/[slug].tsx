import * as React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { getArticleBySlug, getArticles } from "@/libs/api";
import ArticlePage from "@/components/Pages/ArticlePage";

type Query = {
  slug: string;
};

type Props = React.ComponentProps<typeof ArticlePage>;

export const getStaticPaths: GetStaticPaths<Query> = async () => {
  const articles = await getArticles();

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => {
  if (params === undefined) {
    throw new Error("params is undefined");
  }
  const article = await getArticleBySlug(params.slug);

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
};

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <ArticlePage article={article} />;
};

export default Article;
