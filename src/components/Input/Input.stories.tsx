import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<InputProps> = (args) => <Input {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { placeholder: "Type here" };
