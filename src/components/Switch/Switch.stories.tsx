import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
