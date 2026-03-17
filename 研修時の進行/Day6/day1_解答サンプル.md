# day1_解答サンプル

## 言語化の例

- 評価指標としては、フォーマットに準じた内容で記載できているか
- 自身が何をする必要があるか

これらを言語化できているかとなります。

また、タスク1-1については資料にサンプルを載せているため、ベースとしては同じような粒度感になることを想定しています。

### タスク1-1：新規登録画面コンポーネントの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - 新規登録画面に関する記載があるか
        - 何をすべきかイメージできているか
        - 新規登録処理に必要な処理を把握しているか
        - 入力フォームの実装方法を把握しているか
        - インターフェースやPropsの定義を把握しているか
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```tsx
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components
　　ファイル名：RegisterForm.tsx
・資料のソースコードを張り付ける
・インターフェースの定義
　　名前：RegisterFormProps
　　プロパティは資料を参照
・外部からデータを受け取れるようにPropsを設定
・新規登録の処理を実装
・登録用のフォームを実装
　　項目：名前、メール、ロール
　　登録ボタンに onClick を追加し新規登録処理を呼び出す
　　登録後にユーザー一覧画面に遷移するように設定

【確認事項】
・新規登録の方法を確認する
　　fetchとどう異なるのか？
・画面の遷移方法を確認する
・RegisterFormPropsの役割を確認する
```

### タスク1-2：RegisterFormのストーリー作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ストーリーブックに関する記載があるか
        - メタデータの定義
        - ストーリーの定義
        - デフォルトストーリーの定義
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components
　　ファイル名：RegisterForm.stories.tsx
・資料のソースコードを張り付ける
　　既存のUserCard.stories.tsxを参考にする
・メタデータを定義する
　　title: 'Components/RegisterForm'
　　component: RegisterForm
・ストーリーの定義
　　type Story = StoryObj<typeof RegisterForm>
・デフォルトストーリーの設定
　　⇒記述方法を質問させてください
・実行確認

【確認事項】
・storybookでの動作確認方法について確認する
```

### タスク1-3：新規登録ページの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - 新規登録ページに関する記載があるか
        - 何をすべきかイメージできているか
        - ルーティング方法とファイルの作成場所を把握している
        - RegisterFormコンポーネントを呼び出すことを把握している
        - リンクを追加する箇所を把握している
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```tsx
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：app/register
　　ファイル名：page.tsx
・資料のソースコードを張り付ける
・RegisterFormコンポーネントをレンダリングさせる

・Navbar.tsxに新規登録ページへのリンクを追加
・動作確認
　　新規登録ページを表示できることを確認する
　　ユーザーの新規登録ができることを確認する

【確認事項】
・新規登録ページのURLについて
　localhost:xxxx/register で間違いないかを確認する
```

### タスク2-1：ユーザー編集画面コンポーネントの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - 編集機能に関する記載があるか
        - 何をすべきかイメージができているか
        - インターフェースやPropsの定義を把握しているか
        - 対象となるユーザー情報の取得方法を把握している
        - 更新処理に必要な処理を把握している
        - 入力フォームの実装方法を把握しているか
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```tsx
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components
　　ファイル名：EditUserForm.tsx
・資料のソースコードを張り付ける
・インターフェースの定義
　　名前：EditUserFormProps
　　プロパティは資料を参照
・外部からデータを受け取れるようにPropsを設定
・Propsを利用して対象のデータを取得
・更新の処理を実装
・更新用のフォームを実装
　　項目：名前、メール、ロール
　　各項目にデフォルトデータの設定
　　更新ボタンに onClick を追加し更新処理を呼び出す
　　更新後にユーザー一覧画面に遷移するように設定

【確認事項】
・更新の方法を確認する
　　既存のpage.tsxを参考して実装する方針で問題ないか
・画面の遷移方法を確認する
```

### タスク2-2：EditUserFormのストーリー作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ストーリーブックに関する記載があるか
        - メタデータの定義
        - ストーリーの定義
        - デフォルトストーリーの定義
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components
　　ファイル名：EditUserForm.stories.tsx
・資料のソースコードを張り付ける
・メタデータを定義する
　　title: 'Components/EditUserForm'
　　component: EditUserForm
・ストーリーの定義
　　type Story = StoryObj<typeof EditUserForm>
・デフォルトストーリーの設定
　　userIdが「1」のユーザー
・実行確認

【確認事項】
・記述方法はRegsiterForm.stories.tsxを参考にしても問題ないか
```

### タスク2-3：ユーザー編集ページの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - 編集ページに関する記載があるか
        - 何をすべきかイメージできているか
        - ルーティング方法とファイルの作成場所を把握している
        - 概要ユーザーのIDを取得する方法を把握している
        - EditUserFormコンポーネントを呼び出すことを把握している
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```tsx
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：app/users/[id]/edit
　　ファイル名：page.tsx
・資料のソースコードに差し替える
・URLからIDを取得する
　⇒要確認
・EditUserFormコンポーネントをレンダリングさせる
・動作確認
　　編集ページが表示できる
　　URLのIDに応じて対象データが変化する
　　正常に編集が機能している
　　更新後に一覧ページに遷移する

【確認事項】
・すでに存在しているファイルを書き換える認識で問題ないか
・URLパラメータからユーザーIDを取得する方法を確認したいです
　useParams().idを利用する方針で問題ないか
```

---

## プログラムサンプル

### RegisterForm.tsx

```tsx
// components/RegisterForm.tsx

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { createUser } from '../utils/api';

interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

// 成功後のリダイレクトなどを行う場合
interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError, disabled = false }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await createUser({ name: data.name, email: data.email, role: data.role });
      setSuccess(true);
      setError(null);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError('ユーザーの登録に失敗しました。' + err);
      setSuccess(false);
      if (onError) onError(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
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
          {...register('name', { required: '名前は必須です。' })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        {/* メールフィールド */}
        <TextField
          label="メール"
          type="email"
          fullWidth
          margin="normal"
          {...register('email', { 
            required: 'メールは必須です。',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '有効なメールアドレスを入力してください。',
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        {/* ロールフィールド */}
        <TextField
          label="役職"
          fullWidth
          margin="normal"
          {...register('role', { required: 'ロール設定は必須です。' })}
          error={!!errors.role}
          helperText={errors.role?.message}
        />
        {/* 送信ボタン */}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={disabled}>
          登録
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm;
```

### RegisterForm.stories.tsx

```tsx
// components/RegisterForm.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import RegisterForm from './RegisterForm';

const meta: Meta<typeof RegisterForm> = {
  title: 'Components/RegisterForm',
  component: RegisterForm,
};

export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
```

### register/page.tsx

```tsx
// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  const router = useRouter();

  const handleSuccess = () => {
    // 登録成功後にユーザー一覧ページにリダイレクト
    router.push('/users');
  };

  const handleError = (error: any) => {
    // エラーログを外部サービスに送信するなどの処理
    console.error('登録エラー:', error);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        新規ユーザー登録
      </Typography>
      <RegisterForm onSuccess={handleSuccess} onError={handleError} />
    </Box>
  );
}

export default RegisterPage;
```

### Navbar.tsx

```tsx
// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ユーザー管理システム
        </Typography>
        <Button color="inherit" component={Link} href="/">
          ホーム
        </Button>
        <Button color="inherit" component={Link} href="/users">
          ユーザー一覧
        </Button>
        <Button color="inherit" component={Link} href="/register">
          ユーザー新規登録
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
```

### EditUserForm.tsx

```
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
  } = useForm<EditUserFormInputs>();
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
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>
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
          helperText={errors.name?.message}
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
          helperText={errors.email?.message}
        />
        {/* 役割フィールド */}
        <TextField
          label="役割"
          fullWidth
          margin="normal"
          {...register("role", { required: "役割は必須です。" })}
          error={!!errors.role}
          helperText={errors.role?.message}
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

```

### EditUserForm.stories.tsx

```tsx
// components/EditUserForm.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import EditUserForm from './EditUserForm';

const meta: Meta<typeof EditUserForm> = {
  title: 'Components/EditUserForm',
  component: EditUserForm,
};

export default meta;

type Story = StoryObj<typeof EditUserForm>;

// TODO: デフォルトストーリーにユーザーIDを設定する
export const Default: Story = {
  args: {
    userId: 1, // 例となるユーザーID
  },
};
```

### edit/page.tsx

```tsx
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

```