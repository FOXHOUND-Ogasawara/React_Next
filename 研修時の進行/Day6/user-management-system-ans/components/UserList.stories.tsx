// components/UserList.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import UserList from "./UserList";

const meta: Meta<typeof UserList> = {
  title: "Components/UserList",
  component: UserList,
};

export default meta;

type Story = StoryObj<typeof UserList>;

// TODO: デフォルトストーリーに例となるユーザーデータを設定する
export const Default: Story = {
  args: {
    initialUsers: [
      {
        id: 1,
        name: "山田 太郎",
        email: "taro.yamada@example.com",
        role: "管理者",
        deleted: false,
      },
      {
        id: 2,
        name: "佐藤 花子",
        email: "hanako.sato@example.com",
        role: "ユーザー",
        deleted: true,
      },
    ],
  },
};
