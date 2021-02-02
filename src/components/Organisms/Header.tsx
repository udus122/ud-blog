import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

type IProps = {
  title: string;
};

const Header = ({ title }: IProps): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <React.Fragment>
      <AppBar position={"static"}>
        <Toolbar>
          <Link href="/">
            <Typography
              component={pathname === "/" ? "h1" : "div"}
              variant="h5"
              css={{ cursor: "pointer" }}
            >
              {title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
