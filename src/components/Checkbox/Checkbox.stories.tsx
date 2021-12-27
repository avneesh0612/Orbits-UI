import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Checkbox, { CheckProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Avatar component
const Template: Story<CheckProps> = (args) => <Checkbox {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { size: "medium" };
