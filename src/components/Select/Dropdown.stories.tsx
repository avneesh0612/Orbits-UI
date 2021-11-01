import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Dropdown component
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { size: "medium" };
