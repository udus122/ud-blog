import * as React from "react";
import Tex from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";

type Props = {
  value: string | number;
};

const Math = ({ value }: Props): JSX.Element => <Tex math={value} />;

export default Math;
