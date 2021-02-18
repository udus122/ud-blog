import * as React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import {
  fetchEntries as fetchArticleEntries,
  fetchEntry as fetchArticleEntry,
} from "@/libs/api/article";
import ArticlePage from "@/components/Pages/ArticlePage";

type Query = {
  slug: string;
};

type Props = React.ComponentProps<typeof ArticlePage>;

export const getStaticPaths: GetStaticPaths<Query> = async () => {
  const articleCollection = await fetchArticleEntries();
  const articles = articleCollection.items;
  const paths = articles.map((article) => ({
    params: {
      slug: article.fields.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Query> = async ({
  params,
}) => {
  try {
    if (params === undefined) {
      throw new Error("params is undefined");
    }
    const { slug } = params;
    const article = await fetchArticleEntry(slug);
    return {
      props: {
        article,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
};

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <ArticlePage article={article} />;
};

export default Article;
