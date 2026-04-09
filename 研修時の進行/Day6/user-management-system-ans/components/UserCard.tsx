import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { User } from "../types/User";
import { softDeleteUser } from "../utils/api";
import CustomButton from "./parts/CustomButton";
import CustomModal from "./parts/CustomModal";

interface UserCardProps {
  user: User;
  onUserDeleted: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onUserDeleted }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleDelete = async () => {
    try {
      await softDeleteUser(user.id);
      onUserDeleted(user.id);
    } catch (error) {
      alert("削除に失敗しました。" + error);
    }
  };

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          component={Link}
          href={`/users/${user.id}/details`}
        >
          詳細
        </Button>
        <Button
          variant="outlined"
          component={Link}
          href={`/users/${user.id}/edit`}
        >
          編集
        </Button>
        <CustomButton
          color="error"
          sx={{ ml: 1 }}
          onClick={() => setModalOpen(true)}
        >
          削除
        </CustomButton>
        <CustomModal
          open={modalOpen}
          title="ユーザー削除確認"
          content="本当に削除して良いですか？"
          onClose={() => setModalOpen(false)}
          onConfirm={handleDelete}
        />
      </CardActions>
    </Card>
  );
};

export default UserCard;
