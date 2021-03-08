import RSS from "rss";
import { getArticles } from "@/libs/api";

const SITE_URL = "https://blog.udusd.dev";

const generateFeedXml = async (): Promise<string> => {
  const feed = new RSS({
    title: "UDlog",
    description: "UD Blog",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed`,
    language: "ja",
  });

  const articles = await getArticles(0, 15);

  articles.forEach((article) => {
    const title = article.title;
    const description = article.excerpt;
    const date = new Date(article.date);
    const slug = article.slug;
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
