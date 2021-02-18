import * as React from "react";

type Props = {
  children?: string;
};

const CategoryLabel = ({ children }: Props): JSX.Element => {
  return (
    <span className="inline-block py-1 px-2 rounded bg-blue-50 text-steel-500 text-xs font-medium tracking-widest">
      {children}
    </span>
  );
};

export default CategoryLabel;
