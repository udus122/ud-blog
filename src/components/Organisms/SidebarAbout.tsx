import SidebarSection from "@/components/Molcules/SidebarSection";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props): JSX.Element => {
  return (
    <SidebarSection title="About" className={className}>
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
