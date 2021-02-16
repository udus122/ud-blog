import * as React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Main = ({ children, className }: Props): JSX.Element => {
  return <main className={className}>{children}</main>;
};

export default Main;
