import Article from '@/components/Molcules/Article';
import { IArticleField } from '@/types/contentful';
import { Entry } from 'contentful';
import Head from 'next/head';
import * as React from 'react';

interface IProps {
  articles: Entry<IArticleField>[] | undefined;
}

const IndexPage: React.FC<IProps> = ({ articles }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Udlog</title>
      </Head>
      <h1>Udlog | Hello, Next × Contentful</h1>
      {articles &&
        articles.map((article) => (
          <Article
            key={article.sys.id}
            title={article.fields.title}
            image={article.fields.image}
            slug={article.fields.slug}
            date={article.fields.date}
            body={article.fields.body}
            category={article.fields.category}
            tags={article.fields.tags}
          />
        ))}
    </React.Fragment>
  );
};

export default IndexPage;
