import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Address, { AddressProps } from "./Address";

export default {
  title: "Components/Address",
  component: Address,
} as Meta;

// Create a master template for mapping args to render the Address component
const Template: Story<AddressProps> = (args) => <Address {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
