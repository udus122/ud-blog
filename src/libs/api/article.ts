import type { Entry, EntryCollection } from "contentful";
import type { IArticleFields } from "@/types/contentful";
import client from "../contentful";

export const fetchEntries = async (): Promise<
  EntryCollection<IArticleFields>
> => {
  try {
    const entries = await client.getEntries<IArticleFields>({
      content_type: "article",
    });
    return entries;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const fetchEntry = async (
  slug: string
): Promise<Entry<IArticleFields>> => {
  try {
    const postEntries = await client.getEntries<IArticleFields>({
      content_type: "article",
      "fields.slug": slug,
      limit: 1,
    });
    if (postEntries.total === 0) {
      throw new Error("投稿が見つかりません");
    }
    return postEntries.items[0];
  } catch (err) {
    console.error("err:", err);
    throw new Error(err);
  }
};
