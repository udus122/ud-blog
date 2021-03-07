import SidebarAbout from "@/components/Organisms/SidebarAbout";
import SidebarSocial from "@/components/Organisms/SidebarSocial";
import SidebarSection from "@/components/Molcules/SidebarSection";

type Props = {
  sideContents?: { title: string; content: React.ReactNode };
  className?: string;
};

const Sidebar = ({ sideContents, className }: Props): JSX.Element => {
  return (
    <aside className={`${className}`}>
      <SidebarAbout />
      <SidebarSocial />
      {sideContents && (
        <SidebarSection title={sideContents.title}>
          {sideContents.content}
        </SidebarSection>
      )}
    </aside>
  );
};

export default Sidebar;
