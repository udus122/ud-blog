import { IArticleField } from '@/types/contentful';
import { Entry } from 'contentful';
import client from '../contentful';

export const fetchEntries = async (): Promise<Entry<IArticleField>[]> => {
  try {
    const entries = await client.getEntries<IArticleField>({
      content_type: 'article',
    });
    if (entries.items) {
      return entries.items;
    } else {
      return [];
    }
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const fetchEntry = async (
  slug: string
): Promise<Entry<IArticleField>> => {
  try {
    const postEntries = await client.getEntries<IArticleField>({
      content_type: 'article',
      'fields.slug': slug,
    });
    if (postEntries.items.length === 1) {
      return postEntries.items[0];
    } else {
      throw new Error('page not found');
    }
  } catch (err) {
    console.error('err:', err);
    throw new Error(err);
  }
};
