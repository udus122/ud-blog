import IndexPage from '@/components/Pages/IndexPage';
import { fetchEntries as fetchArticleEntries } from '@/libs/api/article';
import { GetStaticProps } from 'next';
import * as React from 'react';

type IProps = React.ComponentProps<typeof IndexPage>;

const Index: React.FC<IProps> = ({ articles }) => {
  return <IndexPage articles={articles} />;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const articles = await fetchArticleEntries();
  return {
    props: {
      articles,
    },
  };
};

export default Index;
