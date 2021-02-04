import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Header from "@/components/Organisms/Header";
import Footer from "@/components/Organisms/Footer";

const NotFound = (): JSX.Element => {
  const blogTitle = "UDlog";

  return (
    <Flex direction="column" minHeight="100vh">
      <Header title={blogTitle} />
      <Box position="relative" flex={1}>
        <Flex
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translateY(-50%) translateX(-50%)"
        >
          <Center>
            <Heading as="h1">404 | NotFound</Heading>
          </Center>
        </Flex>
      </Box>
      <Footer title={blogTitle} />
    </Flex>
  );
};

export default NotFound;
