import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";

import { BlogTemplate as BlogTemplateComponent } from "./BlogTemplate";

export default {
  title: "Design System/Template/BlogTemplate",
  component: BlogTemplateComponent,
};

const Template: Story<ComponentProps<typeof BlogTemplateComponent>> = (
  args
) => <BlogTemplateComponent {...args} />;

export const BlogTemplate = Template.bind({});
BlogTemplate.args = {
  title: "UDlog",
};
