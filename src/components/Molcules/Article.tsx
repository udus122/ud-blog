import { IArticleField } from '@/types/contentful';
import { Entry } from 'contentful';
import * as React from 'react';

type IProps = { article: Entry<IArticleField> };

const Article: React.FC<IProps> = ({ article }) => {
  const { title, image, body } = article.fields;
  return (
    <React.Fragment>
      <h2 css={{ color: 'red' }}>{title}</h2>
      {image && <img src={image.fields.file.url} width={100} height={100} />}
      <h3>body</h3>
      <p>{body}</p>
      <h4>category</h4>
    </React.Fragment>
  );
};

export default Article;
