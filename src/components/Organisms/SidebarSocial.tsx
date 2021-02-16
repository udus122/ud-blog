import * as React from "react";
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";

import SidebarSection from "@/components/Molcules/SidebarSection";

const socials = [
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/yudai1202" },
  { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com/udus122" },
];

const Sidebar = (): JSX.Element => {
  return (
    <SidebarSection title="Social">
      {socials.map((social) => (
        <a
          className="text-steel-800 hover:underline"
          href={social.url}
          key={social.name}
        >
          <div className="flex pb-3">
            <div className="pr-2">
              <social.icon />
            </div>
            <div>{social.name}</div>
          </div>
        </a>
      ))}
    </SidebarSection>
  );
};

export default Sidebar;
