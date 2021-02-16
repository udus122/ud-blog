import { Avatar, Typography, useTheme } from "@material-ui/core";
import SidebarSection from "@/components/Molcules/SidebarSection";

const Sidebar = (): JSX.Element => {
  const theme = useTheme();
  return (
    <SidebarSection title="About">
      <Avatar
        alt="avator"
        src="/ud-avator.png"
        variant="square"
        css={{ width: theme.spacing(7), height: theme.spacing(7) }}
      />

      <Typography
        component="span"
        css={{
          lineHeight: 2,
        }}
      >
        UD
      </Typography>
      <Typography variant="body2">
        技術的なことを書いていく。 <br />
        フロントエンド・統計学・機械学習あたりがメイン
      </Typography>
    </SidebarSection>
  );
};

export default Sidebar;
