import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Stack, { StackProps } from "./Stack";

export default {
  title: "Components/Stack",
  component: Stack,
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<StackProps> = (args) => <Stack {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { direction: "row" };
