import * as React from "react";

type Props = {
  children?: string;
  className?: string;
};

const CategoryLabel = ({ children, className }: Props): JSX.Element => {
  return (
    <span
      className={`${className} inline-block py-1 px-2 rounded bg-blue-50 text-steel-500 text-xs font-medium tracking-widest`}
    >
      {children}
    </span>
  );
};

export default CategoryLabel;
