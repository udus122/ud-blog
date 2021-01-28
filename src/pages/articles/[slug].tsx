import * as React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Entry } from "contentful";
import {
  fetchEntries as fetchArticleEntries,
  fetchEntry as fetchArticleEntry,
} from "@/libs/api/article";
import ArticlePage from "@/components/Pages/ArticlePage";
import { IArticleFields } from "@/types/contentful";

type IQuery = {
  slug: string;
};

type IProps = {
  article: Entry<IArticleFields>;
};

export const getStaticPaths: GetStaticPaths<IQuery> = async () => {
  const articleCollection = await fetchArticleEntries();
  const articles = articleCollection.items;
  const paths = articles.map((article) => ({
    params: {
      slug: article.fields.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps, IQuery> = async ({
  params,
}) => {
  if (params === undefined) {
    throw new Error("params is undefined");
  }
  const { slug } = params;
  const article = await fetchArticleEntry(slug);
  return {
    props: {
      article,
    },
  };
};

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return <ArticlePage article={article} />;
};

export default Article;
