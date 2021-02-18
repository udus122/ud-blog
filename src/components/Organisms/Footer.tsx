import * as React from "react";
import Copyright from "@/components/Organisms/Copyright";

type Props = {
  title: string;
  description?: string;
};

const Footer = ({ title, description }: Props): JSX.Element => {
  return (
    <footer className="bg-gray-500 py-12">
      <h6 className="text-2xl font-bold text-center">{title}</h6>
      <p className="text-center">{description}</p>
      <Copyright />
    </footer>
  );
};

export default Footer;
