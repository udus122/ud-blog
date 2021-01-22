/// <reference types="@emotion/core"/>
import { IArticleField } from '@/types/contentful';
import { Entry } from 'contentful';

export interface ArticleEntries {
  articles: Entry<IArticleField>[] | undefined;
}
