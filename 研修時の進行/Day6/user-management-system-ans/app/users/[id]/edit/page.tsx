// app/users/[id]/edit/page.tsx

"use client";

import React from "react";
// import { useRouter } from 'next/router';
import { Box, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import EditUserForm from "../../../../components/EditUserForm";

const EditUserPage: React.FC = () => {
  const id = useParams().id;
  const router = useRouter();

  // ユーザーIDが取得できていない場合はnullを返す
  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です。</Typography>;
  }

  const handleSuccess = () => {
    // 登録成功後にユーザー一覧ページにリダイレクト
    router.push("/users");
  };

  const handleError = (error: any) => {
    // エラーログを外部サービスに送信するなどの処理
    console.error("登録エラー:", error);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      {/* EditUserFormにユーザーIDを渡す */}
      <EditUserForm
        userId={Number(id)}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </Box>
  );
};

export default EditUserPage;
