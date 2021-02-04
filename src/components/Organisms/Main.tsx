import * as React from "react";

type IProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: IProps): JSX.Element => {
  return <React.Fragment>{children};</React.Fragment>;
};

export default Main;
