import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Menu as MenuIcon } from "@material-ui/icons";

type IProps = {
  title: string;
};

const Header = ({ title }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      <AppBar position={"static"}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <h1>{title}</h1>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
