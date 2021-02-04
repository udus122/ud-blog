import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";

import HeaderComponent from "./Header";

export default {
  title: "Design System/Organisms/Header",
  component: HeaderComponent,
};

const Template: Story<ComponentProps<typeof HeaderComponent>> = (args) => (
  <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  title: "UDlog",
};
