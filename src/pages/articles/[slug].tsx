import { ParsedUrlQuery } from "querystring";
import { Entry } from "contentful";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next";
import * as React from "react";
import { IArticleFields } from "@/types/contentful";
import {
  fetchEntries as fetchArticleEntries,
  fetchEntry as fetchArticleEntry,
} from "@/libs/api/article";
import ArticlePage from "@/components/Pages/ArticlePage";

type IParams = ParsedUrlQuery & {
  slug: string;
};

type IProps = {
  article: Entry<IArticleFields>;
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const articleCollection = await fetchArticleEntries();
  const articles = articleCollection.items;
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<IParams>
): Promise<GetStaticPropsResult<IProps>> => {
  const slug = context.params?.slug;
  if (typeof slug === "undefined") {
    return { props: {} } as GetStaticPropsResult<IProps>;
  }
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
