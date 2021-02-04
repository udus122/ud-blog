import NextLink from "next/link";
import { Box, Flex, Link } from "@chakra-ui/react";

type IProps = {
  title: string;
};

const Header = ({ title }: IProps): JSX.Element => {
  return (
    <Flex
      bg="primary.900"
      color="white"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      boxShadow="xl"
    >
      <Link as={NextLink} href="/">
        <Box fontSize="1.5rem" cursor="pointer">
          {title}
        </Box>
      </Link>
    </Flex>
  );
};

export default Header;
