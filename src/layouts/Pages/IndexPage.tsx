import * as React from 'react';
import Head from 'next/head';
import Post from '@/components/Post';
import { IArticleField } from '@/@types/contentful';
import { fetchEntries as fetchArticleEntries } from '@/libs/api/article';
import { Entry } from 'contentful';

const IndexPage: React.FC = () => {
  const [articles, setArticles] = React.useState<Entry<IArticleField>[]>([]);

  React.useEffect(() => {
    async function getArticles() {
      const allArticles = await fetchArticleEntries();
      if (allArticles) {
        setArticles([...allArticles]);
      }
    }
    getArticles();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Udlog</title>
      </Head>
      <h1>Udlog | Hello, Next × Contentful</h1>
      {articles.length &&
        articles.map((post) => (
          <Post
            title={post.fields.title}
            image={post.fields.image}
            slug={post.fields.slug}
            date={post.fields.date}
            body={post.fields.body}
            category={post.fields.category}
            tags={post.fields.tags}
          />
        ))}
    </React.Fragment>
  );
};

export default IndexPage;
