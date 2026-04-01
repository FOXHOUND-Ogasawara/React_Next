import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchUser = () => {
    // TODO: fetchを用いて 'GET /api/users/:id' を呼び出し、取得したユーザー情報を state（user, name, email）にセットする処理を実装してください
  };

  const updateUser = () => {
    // TODO: fetchを用いて 'PUT /api/users/:id' へユーザーの更新情報を送信する処理を実装してください
    // 成功したら navigate("/") を使い、一覧画面へ遷移してください
  };

  const deleteUser = () => {
    // TODO: fetchを用いて 'DELETE /api/users/:id' を呼び出し、ユーザーの削除処理を実装してください
    // 成功したら navigate("/") を使い、一覧画面へ遷移してください
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user && !name) {
    return <Typography>読み込み中...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        ユーザーの編集
      </Typography>
      <Box display="flex" mb={4}>
        <TextField
          label="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mr: 2 }}
        />
        <TextField
          label="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={updateUser}>
          更新
        </Button>
      </Box>
      <Button variant="outlined" color="secondary" onClick={deleteUser}>
        削除
      </Button>
    </Box>
  );
};

export default UserEdit;
