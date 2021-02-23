import * as React from "react";
import GithubSlugger from "github-slugger";

const githubSlugger = new GithubSlugger();

type Props = {
  level: number;
  children: JSX.Element[];
};

const Heading = ({ level, children }: Props): JSX.Element => {
  githubSlugger.reset();
  return React.createElement(
    `h${level}`,
    {
      id: githubSlugger.slug(children[0].props.children),
    },
    children
  );
};

export default Heading;
