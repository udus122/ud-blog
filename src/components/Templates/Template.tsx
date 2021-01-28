import * as React from "react";
import Header from "@/components/Organisms/Header";
import Main from "@/components/Organisms/Main";
import Footer from "@/components/Organisms/Footer";

type IProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof Header>;

const Template = ({ children, title }: IProps): JSX.Element => {
  return (
    <React.Fragment>
      <Header title={title} />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Template;
