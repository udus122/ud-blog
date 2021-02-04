import * as React from "react";
import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Header from "@/components/Organisms/Header";
import Footer from "@/components/Organisms/Footer";

const NotFound = (): JSX.Element => {
  const blogTitle = "UDlog";

  return (
    <React.Fragment>
      <Head>
        <title>Page Not Found - {blogTitle}</title>
      </Head>
      <Flex direction="column" minHeight="100vh">
        <Header title={blogTitle} />
        <Box position="relative" flexGrow={1}>
          <Flex
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="50%"
            left="50%"
            transform="translateY(-50%) translateX(-50%)"
          >
            <Heading as="h1">404 | Page Not Found</Heading>
          </Flex>
        </Box>
        <Footer title={blogTitle} />
      </Flex>
    </React.Fragment>
  );
};

export default NotFound;
