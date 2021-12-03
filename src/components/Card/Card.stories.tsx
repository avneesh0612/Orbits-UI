import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
