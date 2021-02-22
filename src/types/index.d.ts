const frontmatterKeys = [
  "title",
  "date",
  "slug",
  "author",
  "body",
  "excerpt",
  "category",
  "tags",
  "ogImage",
  "coverImage",
] as const;

export type FrontmatterKeys = typeof frontmatterKeys;

export type Frontmatter = typeof frontmatterKeys[number];

export type BlogItem = {
  [key in Frontmatter]: string;
};
