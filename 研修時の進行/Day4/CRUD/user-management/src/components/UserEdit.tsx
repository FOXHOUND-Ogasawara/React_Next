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

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      console.error('ユーザーの取得に失敗しました:', error);
    }
  };

  const updateUser = async () => {
    if (!name || !email || !user) return;
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      navigate("/");
    } catch (error) {
      console.error('ユーザーの更新に失敗しました:', error);
    }
  };

  const deleteUser = async () => {
    if (!user) return;
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      navigate("/");
    } catch (error) {
      console.error('ユーザーの削除に失敗しました:', error);
    }
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
