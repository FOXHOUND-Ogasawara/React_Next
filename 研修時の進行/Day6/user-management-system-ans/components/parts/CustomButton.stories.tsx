import { Add } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "contained",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "contained",
    color: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "contained",
    color: "error",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "contained",
    color: "primary",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Add fontSize="small" />
        アイコン付き
      </>
    ),
    variant: "contained",
    color: "primary",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    variant: "contained",
    color: "primary",
    fullWidth: true,
  },
};
