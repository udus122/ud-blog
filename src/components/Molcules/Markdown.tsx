import * as React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  children: string;
};

const Markdown = ({ children }: Props): JSX.Element => {
  return <ReactMarkdown plugins={[[gfm]]}>{children}</ReactMarkdown>;
};

export default Markdown;
