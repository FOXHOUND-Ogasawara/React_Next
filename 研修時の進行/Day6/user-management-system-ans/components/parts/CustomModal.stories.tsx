import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CustomModal from "./CustomModal";

const meta: Meta<typeof CustomModal> = {
  title: "parts/CustomModal",
  component: CustomModal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CustomModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          モーダルを開く
        </Button>
        <CustomModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            setOpen(false);
            alert("確認");
          }}
        />
      </>
    );
  },
  args: {
    title: "確認",
    content: "本当に実行しますか？",
  },
};

export const OnlyClose: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          モーダルを開く
        </Button>
        <CustomModal {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    title: "通知",
    content: "これは確認ボタンなしのモーダルです。",
  },
};

export const LongContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          モーダルを開く
        </Button>
        <CustomModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            setOpen(false);
            alert("確認");
          }}
        />
      </>
    );
  },
  args: {
    title: "長い内容",
    content: (
      <div>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i}>これは長い説明文の行です（{i + 1}行目）。</p>
        ))}
      </div>
    ),
    onConfirm: () => alert("確認"),
  },
};
