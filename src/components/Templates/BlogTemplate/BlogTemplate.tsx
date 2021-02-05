import * as React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "@/components/Organisms/Header";
import Main from "@/components/Organisms/Main";
import Sidebar from "@/components/Organisms/Sidebar";
import Footer from "@/components/Organisms/Footer";

type IProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof Header>;

export const BlogTemplate = ({ children, title }: IProps): JSX.Element => {
  return (
    <Flex display="flex" direction="column" minHeight="100vh">
      <Header title={title} />
      <Grid templateColumns="repeat(4, 1fr)" px={3} gap={6} flexGrow={1}>
        <GridItem colSpan={{ base: 4, lg: 3 }}>
          <Main>{children}</Main>
        </GridItem>
        <GridItem colSpan={{ base: 4, lg: 1 }}>
          <Sidebar />
        </GridItem>
      </Grid>
      <Footer title={title} />
    </Flex>
  );
};
