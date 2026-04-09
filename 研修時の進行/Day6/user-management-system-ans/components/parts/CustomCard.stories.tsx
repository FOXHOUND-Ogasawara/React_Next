import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";

const meta: Meta<typeof CustomCard> = {
  title: "parts/CustomCard",
  component: CustomCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CustomCard>;

export const Basic: Story = {
  args: {
    title: "タイトル",
    description: "これは説明文です。",
    actions: <Button variant="contained">アクション</Button>,
  },
};

export const NoActions: Story = {
  args: {
    title: "アクションなし",
    description: "アクションボタンがありません。",
  },
};

export const LongDescription: Story = {
  args: {
    title: "長い説明文",
    description: "これは非常に長い説明文です。".repeat(10),
    actions: <Button variant="outlined">詳細</Button>,
  },
};

export const JSXDescription: Story = {
  args: {
    title: <span style={{ color: "red" }}>JSXタイトル</span>,
    description: (
      <>
        <div>複数行の説明</div>
        <ul>
          <li>リスト1</li>
          <li>リスト2</li>
        </ul>
      </>
    ),
    actions: (
      <>
        <Button variant="contained" color="primary">
          OK
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </>
    ),
  },
};
