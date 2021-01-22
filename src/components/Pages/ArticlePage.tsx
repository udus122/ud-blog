import Article from '@/components/Molcules/Article';
import * as React from 'react';

type IProps = React.ComponentProps<typeof Article>;

const ArticlePage: React.FC<IProps> = ({ article }) => {
  return (
    <React.Fragment>
      <Article article={article} />
    </React.Fragment>
  );
};

export default ArticlePage;
