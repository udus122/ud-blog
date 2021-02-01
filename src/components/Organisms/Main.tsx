import * as React from "react";
import { Grid } from "@material-ui/core";
import type { GridProps } from "@material-ui/core";

type IProps = {
  children?: React.ReactNode;
} & GridProps;

const Main = ({ children, ...props }: IProps): JSX.Element => {
  return (
    <Grid item xs={props.xs} md={props.md}>
      {children}
    </Grid>
  );
};

export default Main;
