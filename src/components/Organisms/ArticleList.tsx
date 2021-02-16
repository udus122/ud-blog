import * as React from "react";
import type { Entry } from "contentful";
import type { IArticleFields } from "@/types/contentful";
import ArticleCard from "@/components/Organisms/ArticleCard";

type IProps = {
  articles: Entry<IArticleFields>[];
};

const ArticleList = ({ articles }: IProps): JSX.Element => {
  return (
    <article className="grid gap-12 sm:grid-cols-2">
      {articles &&
        articles.map((article) => {
          const date = article.fields.date
            ? new Date(article.fields.date)
            : undefined;
          return (
            <ArticleCard
              key={article.sys.id}
              title={article.fields.title}
              description={article.fields.body?.slice(0, 50) ?? ""}
              articleUrl={`/articles/${article.fields.slug}`}
              date={date}
              imageUrl={article.fields.image?.fields.file.url ?? ""}
              imageTitle={article.fields.image?.fields.file.fileName ?? ""}
            />
          );
        })}
    </article>
  );
};

export default ArticleList;
