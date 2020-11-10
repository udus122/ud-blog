import { Asset, Entry, Link } from 'contentful';

export interface ICategoryField {
  title: string;
  slug: string;
}

export interface ITagField {
  title: string;
  slug: string;
}

export interface IArticleField {
  title: string;
  image: Asset;
  slug: string;
  date: string;
  body: string;
  category: ICategoryEntry;
  tags: Array<ITagEntry>;
}

export type ICategoryEntry = Link<IcategoryField>;

export type ITagEntry = Link<ITagField>;
