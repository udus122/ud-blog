import { ParsedUrlQuery } from 'querystring';
import ArticlePage from '@/components/Pages/ArticlePage';
import {
  fetchEntries as fetchArticleEntries,
  fetchEntry as fetchArticleEntry,
} from '@/libs/api/article';
import { IArticleField } from '@/types/contentful';
import { Entry } from 'contentful';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next';
import * as React from 'react';

type IParams = ParsedUrlQuery & {
  slug: string;
};

type IProps = {
  articles: Entry<IArticleField>;
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const articles = await fetchArticleEntries();

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
  if (typeof slug === 'undefined') {
    return { props: {} } as GetStaticPropsResult<IProps>;
  }
  const articles = await fetchArticleEntry(slug);
  return {
    props: {
      articles,
    },
  };
};

const Article: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return <ArticlePage article={articles} />;
};

export default Article;
