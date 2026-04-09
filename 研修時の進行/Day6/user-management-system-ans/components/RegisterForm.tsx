// components/RegisterForm.tsx

import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "../utils/api";

interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onError,
  disabled = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    criteriaMode: "all", // ← 複数エラーを取得する設定
  });

  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await createUser({ name: data.name, email: data.email, role: data.role });
      setSuccess(true);
      setError(null);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError("ユーザーの登録に失敗しました。" + err);
      setSuccess(false);
      if (onError) onError(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">登録が完了しました。</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 名前フィールド */}
        <TextField
          label="名前"
          fullWidth
          margin="normal"
          {...register("name", {
            required: "名前は必須です。",
            validate: {
              minLength: (value) =>
                value.length >= 2 || "2文字以上で入力してください。",
              maxLength: (value) =>
                value.length <= 8 || "8文字以内で入力してください。",
              noSymbol: (value) =>
                /^[A-Za-z0-9ぁ-んァ-ン一-龠]+$/.test(value) ||
                "記号は使えません。",
            },
          })}
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
            validate: {
              validFormat: (value) =>
                /^\S+@\S+\.\S+$/.test(value) ||
                "有効なメールアドレスを入力してください。",
              allowedDomain: (value) => {
                const allowed = ["gmail.com", "fox-hound.co.jp"];
                const domain = value.split("@")[1];
                return (
                  allowed.includes(domain) ||
                  "使用できるドメインは gmail.com または fox-hound.co.jp のみです。"
                );
              },
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

        {/* ロールフィールド */}
        <TextField
          label="役職"
          fullWidth
          margin="normal"
          {...register("role", {
            required: "ロール設定は必須です。",
            validate: {
              validRole: (value) =>
                ["admin", "guest", "一般ユーザー"].includes(value) ||
                "役職は admin / guest / 一般ユーザー のいずれかを入力してください。",
            },
          })}
          error={!!errors.role}
          helperText={
            errors.role?.types
              ? Object.values(errors.role.types).map((msg, i) => (
                  <div key={i}>{msg}</div>
                ))
              : errors.role?.message
          }
        />

        {/* 送信ボタン */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={disabled}
        >
          登録
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
