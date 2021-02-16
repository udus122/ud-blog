import SidebarAbout from "@/components/Organisms/SidebarAbout";
import SidebarSocial from "@/components/Organisms/SidebarSocial";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props): JSX.Element => {
  return (
    <aside className={className}>
      <SidebarAbout />
      <SidebarSocial />
    </aside>
  );
};

export default Sidebar;
