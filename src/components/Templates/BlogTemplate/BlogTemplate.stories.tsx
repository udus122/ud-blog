import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";

import BlogTemplateCoponent from "./BlogTemplate";

export default {
  title: "Design System/Template/BlogTemplate",
  component: BlogTemplateCoponent,
};

const Template: Story<ComponentProps<typeof BlogTemplateCoponent>> = (args) => (
  <BlogTemplateCoponent {...args} />
);

export const BlogTemplate = Template.bind({});
BlogTemplate.args = {
  title: "UDlog",
};
