import * as React from "react";
import ArticleCard from "@/components/Organisms/ArticleCard";
import { BlogItem } from "@/types";

type Props = {
  allArticles: BlogItem[];
};

const ArticleList = ({ allArticles }: Props): JSX.Element => {
  return (
    <article className="grid gap-12 sm:grid-cols-2">
      {allArticles &&
        allArticles.map((article) => {
          const date = article.date ? new Date(article.date) : undefined;
          return (
            <ArticleCard
              key={article.slug}
              title={article.title}
              description={article.body?.slice(0, 50) ?? ""}
              articleUrl={`/articles/${article.slug}`}
              date={date}
              imageUrl={article.coverImage ?? ""}
              imageTitle={article.coverImage ?? ""} // file名にする
            />
          );
        })}
    </article>
  );
};

export default ArticleList;
