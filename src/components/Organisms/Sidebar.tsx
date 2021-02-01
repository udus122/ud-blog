import { Grid } from "@material-ui/core";
import type { GridProps } from "@material-ui/core";
import * as React from "react";

type IProps = GridProps;

const Sidebar = ({ ...props }: IProps): JSX.Element => {
  return (
    <Grid item xs={props.xs} md={props.md}>
      Hello Sidebar
    </Grid>
  );
};

export default Sidebar;
