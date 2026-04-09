// components/DeleteUserButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import DeleteUserButton from "./DeleteUserButton";

const meta: Meta<typeof DeleteUserButton> = {
  title: "Components/DeleteUserButton",
  component: DeleteUserButton,
};

export default meta;

type Story = StoryObj<typeof DeleteUserButton>;

// TODO: デフォルトストーリーに例となるプロパティを設定する
export const Default: Story = {
  args: {
    userId: 1,
    onDelete: () => alert("ユーザーが削除されました。"),
  },
};
