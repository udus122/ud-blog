import * as React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import breaks from "remark-breaks";
import math from "remark-math";

import Heading from "@/components/Atoms/Heading";
import InlineMath from "@/components/Atoms/InlineMath";
import Math from "@/components/Atoms/Math";

type Props = {
  children: string;
};

const renderers = {
  inlineMath: InlineMath,
  math: Math,
  heading: Heading,
};

const Markdown = ({ children }: Props): JSX.Element => {
  return (
    <ReactMarkdown plugins={[[gfm], [breaks], [math]]} renderers={renderers}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
