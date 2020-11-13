import client from '../contentful';
import { IArticleField } from '@/types/contentful';

export const fetchEntries = async () => {
  const entries = await client.getEntries<IArticleField>({
    content_type: 'article',
  });
  console.log('entries:', entries);
  console.log('entries.items:', entries.items);
  if (entries.items) return entries.items;
};
