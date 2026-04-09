import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "../types/User";
import { softDeleteUser } from "../utils/api";
import CustomButton from "./parts/CustomButton";
import CustomCard from "./parts/CustomCard";
import CustomModal from "./parts/CustomModal";

export interface UserListProps {
  initialUsers: User[];
  onUserDeleted?: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [confirmUserId, setConfirmUserId] = useState<number | null>(null);

  // 検索情報の管理
  const [selectingId, setSelectingId] = useState<number | string>("all");
  const [selectingRole, setSelectingRole] = useState<string>("all");

  // 検索欄表示用のデータ管理
  const [searchableId, setSearchableId] = useState<number[]>([]);
  const [searchableRole, setSearchableRole] = useState<string[]>([]);

  // 並び替え用のデータ管理
  const [sortOrder, setSortOrder] = useState<string>("asc");

  // 並び順のハンドリング関数
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleDelete = async (user: User) => {
    try {
      await softDeleteUser(user.id);
      setUsers((prev) => prev.filter((u) => u.id !== user.id));
      setConfirmUserId(null);
    } catch (error) {
      alert("削除に失敗しました。" + error);
    }
  };

  // レンダリング用のユーザーデータ
  const filteredUsers = users.filter((user) => {
    const filterId = selectingId === "all" || user.id === selectingId;
    const filterRole = selectingRole === "all" || user.role === selectingRole;
    return filterId && filterRole;
  });

  // ユーザーリストのソート
  const sortedUser = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  const sortIcon =
    sortOrder === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;

  useEffect(() => {
    // 検索欄の初期データを設定
    setSearchableId(
      users.filter((user) => !user.deleted).map((user) => user.id)
    );
    setSearchableRole([...new Set(initialUsers.map((user) => user.role))]);
  }, [users]);

  if (users.length === 0) {
    return <Typography>ユーザーが存在しません。</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        ユーザー検索
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <FormControl variant="standard" sx={{ minWidth: 100, mr: 2 }}>
          <InputLabel id="selecting-id">ID</InputLabel>
          <Select
            labelId="selecting-id"
            value={selectingId}
            onChange={(e) => setSelectingId(e.target.value)}
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            <MenuItem value="all">all</MenuItem>
            {searchableId.map((id, key) => (
              <MenuItem key={key} value={id}>
                {id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 100, mr: 2 }}>
          <InputLabel id="selecting-role">役職</InputLabel>
          <Select
            labelId="selecting-role"
            value={selectingRole}
            onChange={(e) => setSelectingRole(e.target.value)}
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            <MenuItem value="all">all</MenuItem>
            {searchableRole.map((role, key) => (
              <MenuItem key={key} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={sortIcon}
          endIcon={sortIcon}
          onClick={toggleSortOrder}
          sx={{ minWidth: 100 }}
        >
          ID: {sortOrder === "asc" ? "昇順" : "降順"}
        </Button>
      </Box>
      <Container sx={{ mt: 2 }}>
        {sortedUser.map((user) => (
          <CustomCard
            key={user.id}
            title={user.name}
            description={
              <>
                <Typography color="text.secondary">{user.email}</Typography>
                <Typography variant="body2">役割: {user.role}</Typography>
              </>
            }
            actions={
              <>
                <CustomButton
                  variant="outlined"
                  variantType="primary"
                  component={Link}
                  href={`/users/${user.id}/details`}
                >
                  詳細
                </CustomButton>
                <CustomButton
                  variant="outlined"
                  variantType="secondary"
                  component={Link}
                  href={`/users/${user.id}/edit`}
                >
                  編集
                </CustomButton>
                <CustomButton
                  variantType="danger"
                  variant="outlined"
                  sx={{ ml: 1 }}
                  onClick={() => setConfirmUserId(user.id)}
                >
                  削除
                </CustomButton>
                <CustomModal
                  open={confirmUserId === user.id}
                  title="ユーザー削除確認"
                  content="本当に削除して良いですか？"
                  onClose={() => setConfirmUserId(null)}
                  onConfirm={async () => {
                    handleDelete(user);
                  }}
                />
              </>
            }
          />
        ))}
      </Container>
    </Box>
  );
};

export default UserList;
