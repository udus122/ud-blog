import * as React from "react";

type IProps = {
  children?: React.ReactNode;
  title: string;
};

const SidebarSection = ({ children, title }: IProps): JSX.Element => {
  return (
    <section className="pb-4">
      <h6 className="text-xl font-medium mb-3">{title}</h6>
      {children}
    </section>
  );
};

export default SidebarSection;
