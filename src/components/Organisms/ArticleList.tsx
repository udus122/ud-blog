import * as React from "react";
import type { Entry } from "contentful";
import { Grid } from "@material-ui/core";
import type { IArticleFields } from "@/types/contentful";
import ArticleCard from "@/components/Organisms/ArticleCard";
type IProps = {
  articles: Entry<IArticleFields>[];
};
const ArticleList = ({ articles }: IProps): JSX.Element => {
  return (
    <Grid container spacing={4}>
      {articles &&
        articles.map((article) => (
          <ArticleCard
            key={article.sys.id}
            title={article.fields.title}
            description={article.fields.body?.slice(0, 30) ?? ""}
            articleUrl={`/articles/${article.fields.slug}`}
            date={article.fields.date ?? ""}
            image={article.fields.image?.fields.file.url ?? ""}
            imageTitle={article.fields.image?.fields.file.fileName ?? ""}
          />
        ))}
      ;
    </Grid>
  );
};

export default ArticleList;
