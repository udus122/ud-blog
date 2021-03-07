import * as React from "react";
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";
import siteMeta from "@/config";

import SidebarSection from "@/components/Molcules/SidebarSection";

type Props = {
  className?: string;
};

const socials = [
  {
    name: "GitHub",
    icon: GitHubIcon,
    url: `https://github.com/${siteMeta.social.github}`,
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    url: `https://twitter.com/${siteMeta.social.twitter}`,
  },
];

const Sidebar = ({ className }: Props): JSX.Element => {
  return (
    <SidebarSection title="Social" className={`${className}`}>
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
