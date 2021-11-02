import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import TagInput, { TagInputProps } from "./TagInput";

export default {
  title: "Components/TagInput",
  component: TagInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the TagInput component
const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { size: "large", placeholder: "Type here" };
