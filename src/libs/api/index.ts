import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { markdownToPlain, separateTitleBody } from "@/libs/markdown";

import type { BlogItem } from "@/types";

const contentsDirectory = join(process.cwd(), "contents");

export const getArticleSlugs = (): string[] => {
  return fs.readdirSync(contentsDirectory);
};

export const getArticleBySlug = async (slug: string): Promise<BlogItem> => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const plainContent = await markdownToPlain(content);

  const { title, body } = await separateTitleBody(content);

  return {
    title: title ?? null,
    date: data.date ?? null,
    slug: realSlug ?? null,
    author: data.author ?? null,
    excerpt: plainContent.slice(0, 400),
    body: body ?? null,
    category: data.category ?? null,
    tags: data.tags ?? null,
    ogImage: data.ogImage ?? null,
    coverImage: data.coverImage ?? null,
  };
};

export const getArticles = async (
  start = 0,
  limit?: number
): Promise<BlogItem[]> => {
  const slugs = getArticleSlugs();
  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  );

  const end = limit ? start + limit : articles.length;
  return articles
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(start, end);
};
