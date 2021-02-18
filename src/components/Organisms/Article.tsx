import * as React from "react";
import type { Entry } from "contentful";
import type { IArticleFields } from "@/types/contentful";
import Markdown from "@/components/Molcules/Markdown";

import CategoryLabel from "@/components/Molcules/CategoryLabel";
import DateLabel from "@/components/Molcules/DateLabel";

type Props = {
  className: string;
  article: Entry<IArticleFields>;
};

const Article = ({ className, article }: Props): JSX.Element => {
  const { title, body, date, category } = article.fields;
  return (
    <article className={`${className} break-words`}>
      <header>
        <CategoryLabel>{category?.fields.name ?? "Category"}</CategoryLabel>
        <h1>{title}</h1>
        <div>
          <DateLabel className="inline-flex items-center ml-auto">
            {new Date(date)}
          </DateLabel>
        </div>
      </header>
      <hr className="mt-4" />
      <section className="mt-8">
        <Markdown>{body ?? ""}</Markdown>
      </section>
    </article>
  );
};

export default Article;
