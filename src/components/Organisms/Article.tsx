import * as React from "react";

import { BlogItem } from "@/types";
import Markdown from "@/components/Molcules/Markdown";
import CategoryLabel from "@/components/Molcules/CategoryLabel";
import DateLabel from "@/components/Molcules/DateLabel";

type Props = {
  className: string;
  article: BlogItem;
};

const Article = ({ className, article }: Props): JSX.Element => {
  const { title, body, date, category } = article;

  return (
    <article className={`${className} break-words`}>
      <header>
        <div className="mb-4">
          <CategoryLabel>{category ?? "Category"}</CategoryLabel>
        </div>
        <div>
          <DateLabel className="inline-flex items-center ml-auto">
            {new Date(date)}
          </DateLabel>
        </div>
        <h1>{title}</h1>
      </header>
      <hr />
      <section className="mt-8">
        <Markdown>{body ?? ""}</Markdown>
      </section>
    </article>
  );
};

export default Article;
