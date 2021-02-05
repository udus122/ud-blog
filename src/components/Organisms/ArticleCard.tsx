import * as React from "react";
import {
  Container,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

type IProps = {
  title: string;
  date: Date | undefined;
  description: string;
  articleUrl: string;
  imageUrl?: string | undefined;
  imageTitle?: string | undefined;
};

const ArticleCard = ({
  title,
  date,
  description,
  articleUrl,
  imageUrl,
  imageTitle,
}: IProps): JSX.Element => {
  return (
    <GridItem>
      <Link as={NextLink} href={articleUrl}>
        <Container
          boxShadow="md"
          rounded="lg"
          height="160px"
          px={3}
          pt={3}
          pb={4}
          overflow="hidden"
          _hover={{ backgroundColor: "gray.50" }}
        >
          <Heading as="h2" size="md" isTruncated>
            {title}
          </Heading>
          <Text color="gray.500">{date ? date.toLocaleDateString() : ""}</Text>
          <Text fontSize="md">{description}</Text>
          <Text color="blue.700">Continue reading...</Text>
          <Image width="md" src={imageUrl} alt={imageTitle} fit="cover" />
        </Container>
      </Link>
    </GridItem>
  );
};

export default ArticleCard;
