import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { color: "primary", size: "small" };
