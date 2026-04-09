// components/DeleteUserButton.tsx

import React from "react";
import { softDeleteUser } from "../utils/api";
import CustomButton from "./parts/CustomButton";
import CustomModal from "./parts/CustomModal";

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

// TODO: ユーザーを削除するボタンコンポーネントを実装する
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const [isConfirm, setIsConfirm] = React.useState(false);

  const handleDelete = async () => {
    try {
      await softDeleteUser(userId);
      onDelete(userId);
    } catch (error) {
      alert("削除に失敗しました。" + error);
    }
  };

  return (
    <>
      <CustomButton
        color="error"
        sx={{ ml: 1 }}
        onClick={() => setIsConfirm(true)}
      >
        削除
      </CustomButton>
      <CustomModal
        open={isConfirm}
        title="ユーザー削除確認"
        content="本当に削除して良いですか？"
        onClose={() => setIsConfirm(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default DeleteUserButton;
