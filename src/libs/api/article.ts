import { IArticleField } from '@/types/contentful';
import { Entry } from 'contentful';
import client from '../contentful';

export const fetchEntries = async (): Promise<
  Entry<IArticleField>[] | undefined
> => {
  try {
    const entries = await client.getEntries<IArticleField>({
      content_type: 'article',
    });
    console.log('entries:', entries);
    console.log('entries.items:', entries.items);
    if (entries.items) {
      return entries.items;
    }
    return;
  } catch (err) {
    console.error(err);
    return;
  }
};
