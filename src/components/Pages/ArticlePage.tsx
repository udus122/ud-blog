import * as React from "react";
import Article from "@/components/Molcules/Article";

type IProps = React.ComponentProps<typeof Article>;

const ArticlePage = ({ article }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      <Article article={article} />
    </React.Fragment>
  );
};

export default ArticlePage;
