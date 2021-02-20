import type { GetStaticProps, InferGetStaticPropsType } from "next";
import * as React from "react";
import IndexPage from "@/components/Pages/IndexPage";
import { getAllArticles } from "@/libs/api";

type Props = React.ComponentProps<typeof IndexPage>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allArticles = getAllArticles();

  return {
    props: {
      allArticles,
    },
    revalidate: 60,
  };
};

const Index = ({
  allArticles,
}: InferGetStaticPropsType<typeof IndexPage>): JSX.Element => {
  return <IndexPage allArticles={allArticles} />;
};

export default Index;
