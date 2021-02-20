import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { markdownToPlain } from "@/libs/markdown";

import type { BlogItem } from "@/types";

const postsDirectory = join(process.cwd(), "contents");

export const getArticleSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getArticleBySlug = async (slug: string): Promise<BlogItem> => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const plainContent = await markdownToPlain(content);

  return {
    title: data.title ?? null,
    date: data.date ?? null,
    slug: realSlug ?? null,
    author: data.author ?? null,
    excerpt: plainContent.slice(0, 400),
    body: content ?? null,
    category: data.category ?? null,
    tags: data.tags ?? null,
    ogImage: data.ogImage ?? null,
    coverImage: data.coverImage ?? null,
  };
};

export const getAllArticles = async (): Promise<BlogItem[]> => {
  const slugs = getArticleSlugs();
  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  );
  return articles.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};
