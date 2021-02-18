import SidebarSection from "@/components/Molcules/SidebarSection";

const Sidebar = (): JSX.Element => {
  return (
    <SidebarSection title="About">
      <img className="w-14" alt="avator" src="/ud-avator.png" />
      <span className="leading-loose">UD</span>
      <p className="mt-4 text-gray-600">
        技術的なことを書いていく。 <br />
        フロントエンド・統計学・機械学習あたりがメイン
      </p>
    </SidebarSection>
  );
};

export default Sidebar;
