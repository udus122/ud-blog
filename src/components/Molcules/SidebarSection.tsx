import { Typography, useTheme } from "@material-ui/core";
import * as React from "react";

type IProps = {
  children?: React.ReactNode;
  title: string;
};

const SidebarSection = ({ children, title }: IProps): JSX.Element => {
  const theme = useTheme();
  return (
    <div css={{ paddingBottom: theme.spacing(2) }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default SidebarSection;
