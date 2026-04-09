// app/users/[id]/details/page.tsx

"use client";

import UserDetails from "@/components/UserDetails";
import { User } from "@/types/User";
import { fetchUserById } from "@/utils/api";
import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditUserPage: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();
  const id = useParams().id;

  useEffect(() => {
    const getUser = async () => {
      try {
        const data: User | null = await fetchUserById(Number(id));
        if (data) {
          setUser(data);
        }
      } catch (err) {
        setError("ユーザーの取得に失敗しました" + err);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  // ユーザーIDが取得できていない場合はnullを返す
  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です。</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細
      </Typography>
      {user && <UserDetails user={user} />}
    </Box>
  );
};

export default EditUserPage;
