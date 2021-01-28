import * as React from "react";
import type { Entry } from "contentful";
import Link from "next/link";
import type { IArticleFields } from "@/types/contentful";

type IProps = {
  articles: Entry<IArticleFields>[];
};
const ArticleList = ({ articles }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      {articles &&
        articles.map((article) => (
          <div key={article.sys.id}>
            <Link href={`/articles/${article.fields.slug}`}>
              <a>{article.fields.title}</a>
            </Link>
            <img
              src={article.fields.image?.fields.file.url ?? ""}
              width="100px"
            ></img>
          </div>
        ))}
      ;
    </React.Fragment>
  );
};

export default ArticleList;
