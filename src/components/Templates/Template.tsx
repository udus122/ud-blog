import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Header from "@/components/Organisms/Header";
import Main from "@/components/Organisms/Main";
import Sidebar from "@/components/Organisms/Sidebar";
import Footer from "@/components/Organisms/Footer";

type IProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof Header>;

const Template = ({ children, title }: IProps): JSX.Element => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Header title={title} />
      <Container maxWidth="lg" css={{ marginTop: theme.spacing(3) }}>
        <Grid container spacing={5}>
          <Main>{children}</Main>
          <Sidebar />
        </Grid>
      </Container>
      <Footer title={title} description={"description"} />
    </React.Fragment>
  );
};

export default Template;
