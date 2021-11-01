import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Avatar component
const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { size: "medium" };
