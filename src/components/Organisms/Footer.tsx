import * as React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Copyright from "@/components/Organisms/Copyright";

type IProps = {
  title: string;
  description?: string;
};

const Footer = ({ title, description }: IProps): JSX.Element => {
  return (
    <Box as="footer" backgroundColor="gray.500" p={6}>
      <Heading as="h6" textAlign="center" mb={3} fontSize="1.5rem">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
      <Copyright />
    </Box>
  );
};

export default Footer;
