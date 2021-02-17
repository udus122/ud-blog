import { Typography } from "@material-ui/core";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type IProps = {
  children: string;
};

const renderers = {
  paragraph: Typography,
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li>
      <Typography>{children}</Typography>
    </li>
  ),
  heading: ({
    level,
    children,
  }: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
  }) => {
    const variantMap = new Map<
      typeof level,
      "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2"
    >([
      [1, "h3"],
      [2, "h4"],
      [3, "h5"],
      [4, "h6"],
      [5, "subtitle1"],
      [6, "subtitle2"],
    ]);

    return (
      <Typography
        component={`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
        variant={variantMap.get(level)}
        gutterBottom
      >
        {children}
      </Typography>
    );
  },
  code: ({
    language,
    value,
  }: {
    language: string | undefined;
    value: React.ReactNode;
  }) => {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <SyntaxHighlighter style={dark} language={language}>
        {value}
      </SyntaxHighlighter>
    );
  },
};

const Markdown = ({ children }: IProps): JSX.Element => {
  return (
    <Typography variant="body1">
      <ReactMarkdown
        plugins={[[gfm, { singleTilde: false }]]}
        renderers={renderers}
      >
        {children}
      </ReactMarkdown>
    </Typography>
  );
};

export default Markdown;
