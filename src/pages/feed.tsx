import { GetServerSideProps } from "next";
import generateFeedXml from "@/libs/rss";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = await generateFeedXml();

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

const Page = (): null => null;

export default Page;
