import * as React from "react";
import type { Entry } from "contentful";
import { Box, Divider, Typography, useTheme } from "@material-ui/core";
import type { IArticleFields } from "@/types/contentful";
import Markdown from "@/components/Atoms/Markdown";

type IProps = { article: Entry<IArticleFields> };

const Article = ({ article }: IProps): JSX.Element => {
  const theme = useTheme();
  const { title, body } = article.fields;
  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Box mt={3}>
        <Markdown
          css={{
            marginTop: theme.spacing(3),
          }}
        >
          {body ?? ""}
        </Markdown>
      </Box>
    </React.Fragment>
  );
};

export default Article;
