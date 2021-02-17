import * as React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type IProps = {
  children: string;
};

const renderers = {
  code: ({
    language,
    value,
  }: {
    language: string | undefined;
    value: React.ReactNode;
  }) => {
    return (
      <SyntaxHighlighter style={dark} language={language}>
        {value}
      </SyntaxHighlighter>
    );
  },
};

const Markdown = ({ children }: IProps): JSX.Element => {
  return (
    <ReactMarkdown plugins={[[gfm]]} renderers={renderers}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
