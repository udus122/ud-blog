import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

type IProps = {
  title: string;
};

const Header = ({ title }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
