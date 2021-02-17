import * as React from "react";

type IProps = {
  children?: string;
};

const CategoryLabel = ({ children }: IProps): JSX.Element => {
  return (
    <span className="inline-block py-1 px-2 rounded bg-blue-50 text-steel-500 text-xs font-medium tracking-widest">
      {children}
    </span>
  );
};

export default CategoryLabel;
