import RSS from "rss";
import { fetchEntries } from "@/libs/api/article";

const SITE_URL = "https://blog.udusd.dev";

const generateFeedXml = async (): Promise<string> => {
  const feed = new RSS({
    title: "UDlog",
    description: "UD Blog",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed`,
    language: "ja",
  });

  const articleCollection = await fetchEntries();
  const articles = articleCollection.items.slice(0, 15);

  articles.forEach((article) => {
    const title = article.fields.title;
    const description = article.fields.body.slice(0, 400);
    const date = new Date(article.fields.date);
    const slug = article.fields.slug;
    const url = `${SITE_URL}/articles/${slug}`;

    feed.item({
      title,
      description,
      date,
      url,
    });
  });

  return feed.xml();
};

export default generateFeedXml;
