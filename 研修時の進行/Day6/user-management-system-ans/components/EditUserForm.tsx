// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../types/User";
import { fetchUserById, updateUser } from "../utils/api";

interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

interface EditUserFormProps {
  userId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({
  userId,
  onSuccess,
  onError,
  disabled = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditUserFormInputs>({
    criteriaMode: "all", // ← 複数エラーを取得する設定
  });
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user: User | null = await fetchUserById(userId);
        if (user) {
          setValue("name", user.name);
          setValue("email", user.email);
          setValue("role", user.role);
        } else {
          setError("ユーザーが見つかりません。");
        }
      } catch (err) {
        setError("ユーザー情報の取得に失敗しました。" + err);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId, setValue]);

  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      await updateUser(userId, data);
      setSuccess(true);
      setError(null);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError("ユーザー情報の更新に失敗しました。" + err);
      setSuccess(false);
      if (onError) onError(err);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      {success && (
        <Alert severity="success">ユーザー情報が更新されました。</Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 名前フィールド */}
        <TextField
          label="名前"
          fullWidth
          margin="normal"
          {...register("name", { required: "名前は必須です。" })}
          error={!!errors.name}
          helperText={
            errors.name?.types
              ? Object.values(errors.name.types).map((msg, i) => (
                  <div key={i}>{msg}</div>
                ))
              : errors.name?.message
          }
        />
        {/* メールフィールド */}
        <TextField
          label="メール"
          type="email"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "メールは必須です。",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "有効なメールアドレスを入力してください。",
            },
          })}
          error={!!errors.email}
          helperText={
            errors.email?.types
              ? Object.values(errors.email.types).map((msg, i) => (
                  <div key={i}>{msg}</div>
                ))
              : errors.email?.message
          }
        />
        {/* 役割フィールド */}
        <TextField
          label="役割"
          fullWidth
          margin="normal"
          {...register("role", { required: "役割は必須です。" })}
          error={!!errors.role}
          helperText={
            errors.role?.types
              ? Object.values(errors.role.types).map((msg, i) => (
                  <div key={i}>{msg}</div>
                ))
              : errors.role?.message
          }
        />
        {/* 更新ボタン */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={disabled}
        >
          更新
        </Button>
      </form>
    </Box>
  );
};

export default EditUserForm;
