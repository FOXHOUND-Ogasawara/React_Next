import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// PostgreSQLのカラム構成に合わせたUserの型定義
interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchUsers = () => {
    // TODO: fetchを用いて 'GET /api/users' からユーザー一覧を取得し、setUsers にデータをセットする処理を実装してください
  };

  const addUser = () => {
    // TODO: fetchを用いて 'POST /api/users' へ新しいユーザー情報を送信する処理を実装してください
    // 送信するデータ(body)の例: JSON.stringify({ name: name, email: email })
    // 成功したら、フォームを空にして fetchUsers() を呼び出し一覧を更新してください
  };

  useEffect(() => {
    // コンポーネントのマウント時にユーザー一覧を取得
    fetchUsers();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        新規ユーザーの追加
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={addUser}>
          追加
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom>
        ユーザー一覧
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>メールアドレス</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  component={Link}
                  to={`/edit/${user.id}`}
                >
                  編集
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default UserList;
