import { IArticleField } from '@/types/contentful';
import { Entry } from 'contentful';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

type IProps = {
  articles: Entry<IArticleField>[];
};

const IndexPage: React.FC<IProps> = ({ articles }) => {
  return (
    <React.Fragment>
      <Head>
        <title>UDlog</title>
      </Head>
      <h1>Udlog | Hello, Next × Contentful</h1>
      {articles &&
        articles.map((article) => (
          <div key={article.sys.id}>
            <Link href={`/articles/${article.fields.slug}`}>
              <a>{article.fields.title}</a>
            </Link>
          </div>
        ))}
    </React.Fragment>
  );
};

export default IndexPage;
