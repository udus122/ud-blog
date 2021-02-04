import * as React from "react";
import { Container, Grid, useTheme } from "@material-ui/core";
import Header from "@/components/Organisms/Header";
import Main from "@/components/Organisms/Main";
import Sidebar from "@/components/Organisms/Sidebar";
import Footer from "@/components/Organisms/Footer";

type IProps = {
  children?: React.ReactNode;
};

const Template = ({ children }: IProps): JSX.Element => {
  const theme = useTheme();
  const blogTitle = "UDlog";

  return (
    <React.Fragment>
      <Header title={blogTitle} />
      <Container maxWidth="lg" css={{ marginTop: theme.spacing(3) }}>
        <Grid container spacing={5}>
          <Main xs={12} md={9}>
            {children}
          </Main>
          <Sidebar xs={12} md={3} />
        </Grid>
      </Container>
      <Footer title={blogTitle} />
    </React.Fragment>
  );
};

export default Template;
