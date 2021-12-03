import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Spinner, { SpinnerProps } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { size: "small" };
