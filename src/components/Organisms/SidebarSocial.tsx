import * as React from "react";
import { Grid, Link } from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";

import SidebarSection from "@/components/Molcules/SidebarSection";

const socials = [
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/yudai1202" },
  { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com/udus122" },
  { name: "Facebook", icon: FacebookIcon, url: "#" },
];

const Sidebar = (): JSX.Element => {
  return (
    <SidebarSection title="Social">
      {socials.map((social) => (
        <Link
          display="block"
          variant="body1"
          href={social.url}
          key={social.name}
        >
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <social.icon />
            </Grid>
            <Grid item>{social.name}</Grid>
          </Grid>
        </Link>
      ))}
    </SidebarSection>
  );
};

export default Sidebar;
