// components/UserDetails.tsx

import { Paper, Typography } from "@mui/material";
import React from "react";
import { User } from "../types/User";

interface UserDetailsProps {
  user: User;
}

// TODO: ユーザーの詳細情報を表示するコンポーネントを実装する
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Paper sx={{ padding: 2, mt: 2 }}>
      <Typography>ID: {user.id}</Typography>
      <Typography>名前: {user.name}</Typography>
      <Typography>メール: {user.email}</Typography>
      <Typography>役割: {user.role}</Typography>
    </Paper>
  );
};

export default UserDetails;
