import { Grid } from "@material-ui/core";
import type { GridProps } from "@material-ui/core";
import SidebarAbout from "@/components/Organisms/SidebarAbout";
import SidebarSocial from "@/components/Organisms/SidebarSocial";

type IProps = GridProps;

const Sidebar = ({ ...props }: IProps): JSX.Element => {
  return (
    <Grid item xs={props.xs} md={props.md}>
      <SidebarAbout />
      <SidebarSocial />
    </Grid>
  );
};

export default Sidebar;
