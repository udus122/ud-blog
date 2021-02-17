import * as React from "react";
import Head from "next/head";
import Header from "@/components/Organisms/Header";
import Footer from "@/components/Organisms/Footer";

const NotFound = (): JSX.Element => {
  const blogTitle = "UDlog";

  return (
    <React.Fragment>
      <Head>
        <title>Page Not Found - {blogTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header title={blogTitle} />
        <div className="h-screen w-screen bg-gray-100 flex items-center">
          <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div className="max-w-md">
              <div className="text-5xl font-dark font-bold">404</div>
              <p className="text-2xl md:text-3xl font-light leading-normal">
                Sorry we couldn&apos;t find this page.
              </p>
              <p className="mb-8">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>

              <a
                href="/"
                className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
              >
                back to homepage
              </a>
            </div>
          </div>
        </div>
        <Footer title={blogTitle} />
      </div>
    </React.Fragment>
  );
};

export default NotFound;
