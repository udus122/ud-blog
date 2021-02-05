import * as React from "react";
import type { Entry } from "contentful";
import { Grid } from "@chakra-ui/react";
import type { IArticleFields } from "@/types/contentful";
import ArticleCard from "@/components/Organisms/ArticleCard";

type IProps = {
  articles: Entry<IArticleFields>[];
};

const ArticleList = ({ articles }: IProps): JSX.Element => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(320px, 1fr))" gap={6}>
      {/* 最低320px以上を保ったまま(320px)、できるだけ各子要素の幅が均等になるように(1fr)配置する。親要素の幅いっぱい使って(auto-fit) */}
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
    </Grid>
  );
};

export default ArticleList;
