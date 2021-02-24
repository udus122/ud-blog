import * as React from "react";

type Props = {
  children?: React.ReactNode;
  title: string;
  className?: string;
};

const SidebarSection = ({ children, title, className }: Props): JSX.Element => {
  return (
    <section className={`${className} pb-4`}>
      <h6 className="text-xl font-medium pb-3">{title}</h6>
      {children}
    </section>
  );
};

export default SidebarSection;
