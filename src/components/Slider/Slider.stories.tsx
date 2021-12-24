import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Slider, { SliderProps } from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Slider component
const Template: Story<SliderProps> = (args) => <Slider {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
