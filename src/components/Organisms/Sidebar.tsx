import * as React from "react";
import SidebarAbout from "@/components/Organisms/SidebarAbout";
import SidebarSocial from "@/components/Organisms/SidebarSocial";

const Sidebar = (): JSX.Element => {
  return (
    <React.Fragment>
      <SidebarAbout />
      <SidebarSocial />
    </React.Fragment>
  );
};

export default Sidebar;
