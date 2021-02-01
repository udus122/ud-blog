import * as React from "react";
import { Grid } from "@material-ui/core";

type IProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: IProps): JSX.Element => {
  return (
    <Grid item xs={12} md={8}>
      {children}
    </Grid>
  );
};

export default Main;
