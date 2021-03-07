import * as React from "react";
import Header from "@/components/Organisms/Header";
import Main from "@/components/Organisms/Main";
import Sidebar from "@/components/Organisms/Sidebar";
import Footer from "@/components/Organisms/Footer";

type Props = {
  children?: React.ReactNode;
  // sideContents?: { title: string; content: React.ReactNode };
} & React.ComponentProps<typeof Header> &
  React.ComponentProps<typeof Footer> &
  React.ComponentProps<typeof Sidebar>;

export const BlogTemplate = ({
  children,
  sideContents,
  title,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title={title} />
      <section className="grid flex-grow grid-cols-12 gap-6 px-6 mt-6">
        <Main className="col-span-12 lg:col-span-9">{children}</Main>
        <div className="col-span-12 lg:col-span-3">
          <Sidebar className="sticky top-8" sideContents={sideContents} />
        </div>
      </section>
      <Footer title={title} />
    </div>
  );
};
