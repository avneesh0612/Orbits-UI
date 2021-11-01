import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Modal component
const Template: Story<ModalProps> = (args) => <Modal {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { children: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, children: "Secondary 😇" };
