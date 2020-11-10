import * as React from 'react';
import { IArticleField } from '../@types/contentful';

type IProps = IArticleField;

const Post: React.FC<IProps> = ({
  title,
  image,
  slug,
  date,
  body,
  category,
  tags,
}) => {
  console.log('Post Props:', title, image, slug, date, body, category, tags);
  return (
    <React.Fragment>
      <h2>{title}</h2>
      {image && <img src={image.fields.file.url} width={100} height={100} />}
      <h3>body</h3>
      <p>{body}</p>
      <h4>category</h4>
    </React.Fragment>
  );
};

export default Post;
