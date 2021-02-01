import { Typography } from "@material-ui/core";
import SidebarSection from "@/components/Molcules/SidebarSection";

const Sidebar = (): JSX.Element => {
  return (
    <SidebarSection title="About">
      <Typography>
        This is about me.
        <div />I am Data and Software Engineer.
      </Typography>
    </SidebarSection>
  );
};

export default Sidebar;
