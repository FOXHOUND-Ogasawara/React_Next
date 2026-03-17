# day2_解答サンプル

## 言語化の例

- 評価指標としては、フォーマットに準じた内容で記載できているか
- 自身が何をする必要があるか

これらを言語化できているかとなります。

## ユーザー一覧機能

### タスク1-1：ユーザー一覧コンポーネントの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ユーザー一覧コンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - インターフェースの定義を把握している
        - コンポーネントの作成やPropsの定義を把握している
        - UserCardコンポーネントを呼び出すことを把握している
    - 注意点
        - ユーザーデータはfetchではなくPropsから受け取る
        - 出力はUserCardコンポーネントを利用する
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
　　ファイル名：UserList.tsx
・インターフェースの定義
　　名前：UserListProps
　　{ users: User[]; }
・外部からデータを受け取れるようにPropsを設定
・受け取ったUserデータをmapを利用して<UserCard>に渡す
```

### タスク1-2：UserListのストーリー作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ストーリーブックに関する記載があるか
        - 何をすべきかイメージができているか
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
　　ファイル名：DeleteUserButton.stories.tsx
・資料のソースコードを張り付ける
・メタデータを定義する
　　title: 'Components/DeleteUserButton'
　　component: DeleteUserButton
・ストーリーの定義
　　type Story = StoryObj<typeof DeleteUserButton>
・デフォルトストーリーの設定
　　サンプルとしてIDが1のユーザーで作成
・実行確認
```

### タスク1-3：ユーザー一覧画面の修正

- フォーマットを利用しているか
- タスクの見積もりができているか
- ユーザー一覧画面に関する記載があるか
    - 何をすべきかイメージができているか
    - ユーザーデータを取得する必要性を把握している
    - ユーザーデータをUserListコンポーネントに渡すことを把握している
    - 表示の確認
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
　　作成場所：app/users
　　ファイル名：page.tsx
・UserListPageコンポーネントを実装
	・ユーザーの一覧を取得
	・取得したデータを<UserList>に渡しレンダリング
・動作確認

【確認事項】
```

## ユーザー削除機能

### タスク2-1：ユーザー削除ボタンのコンポーネント作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - 削除機能に関する記載があるか
        - 何をすべきかイメージができているか
        - データ取得時に”削除済み”を除外する
        - `deleted` が `false` のみを参照する
        - 質問や確認があるか
    - 削除ボタンに関する記載があるか
        - 何をすべきかイメージができているか
        - インターフェースの定義を把握している
        - コンポーネントやPropsの定義を把握している
        - 削除処理の流れを把握している
        - イベント設定の方法を把握している
    - 事前にわかる範囲で確認事項を記載しているか
        - api周りの改修については質問や確認される想定となっています
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細 - 削除用の新規関数追加】
・対象ファイルの修正
　　対象ファイル：utils/api.ts
・削除済みユーザーを取得しない処理の追加

【タスクの詳細 - 削除ボタンコンポーネント作成】
・対象ファイルの作成
　　作成場所：components
　　ファイル名：DeleteUserButton.tsx
・インターフェースの定義
　　名前：DeleteUserButtonProps
　　　userId: number;
　　　onDelete: () => void;
・外部からデータを受け取れるようにPropsを設定
・削除機能の実装
	　新規追加した論理削除用の関数を実行するhandleを作成
	　削除対象はPropsから受け取ったIDを利用する
	　削除成功時に再レンダリングするようにonDelete()を実行する
	　削除ボタンのonClickに設定する

【確認事項】
・削除済みユーザーを取得しない処理について
　修正の対象はfetchUsers()とfetchUserById()で合っているか
　.eq()を利用してdeletedがfalseのユーザーのみを絞り込む記述で合っているか
・論理削除用の関数について
　deleteではなくupdateを利用する認識で合っているか
```

### タスク2-2：DeleteUserButtonのストーリー作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ストーリーブックに関する記載があるか
        - 何をすべきかイメージができているか
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
　　ファイル名：DeleteUserButton.stories.tsx
・資料のソースコードを張り付ける
・メタデータを定義する
　　title: 'Components/DeleteUserButton'
　　component: DeleteUserButton
・ストーリーの定義
　　type Story = StoryObj<typeof DeleteUserButton>
・デフォルトストーリーの設定
　　サンプルとしてIDが1のユーザーで作成
・実行確認
```

### タスク2-3：UserCardコンポーネントとDeleteUserButtonの統合

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ユーザー一覧画面に関する記載があるか
        - 何をすべきかイメージができているか
        - 修正対象がUserListとUserCardの二か所であること
        - UserListには表示やデータのstate管理が必要であること
        - UserCardはPropsの追加や削除ボタンの差し替え処理が必要であること
    - 事前にわかる範囲で確認事項を記載しているか
        - 削除時の再レンダリングについての質問が多いことが予想される
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・UserListコンポーネントの修正
　・表示用のユーザー配列を作成しstate管理を行うように
　・表示更新用のfilter処理を関数として追加
　・レンダリング内のmapで利用する変数を差し替える
・UserCardコンポーネントの修正
　・Propsを追加してUserListから関数を受け取れるように
　・削除ボタンの差し替え
　　・UserCardコンポーネント内の削除ボタンを<DeleteUserButton>に変更
　　・該当のIDとレンダリング用関数を渡す
・動作確認

【確認事項】
・再レンダリングする処理ついてどのように実装するかを相談させていただきたいです
```

## ユーザー詳細機能

### タスク3-1：ユーザー詳細コンポーネントの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ユーザー詳細コンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - インターフェースの定義を把握している
        →複数形のUser型ではない
        - コンポーネントの作成やPropsの定義を把握している
        - 受け取ったデータのレンダリング
    - 注意点
        - ユーザーデータはfetchではなくPropsから受け取る
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
　　ファイル名：UserDetails.tsx
・インターフェースの定義
　　名前：UserDetailsProps
　　{ user: User; }
・外部からデータを受け取れるようにPropsを設定
・受け取ったUserデータを利用して詳細情報をレンダリング
　　表示情報：ID, Name, Email, Roll
```

### タスク3-2：UserDetailsのストーリー作成

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
　　ファイル名：UserDetails.stories.tsx
・資料のソースコードを張り付ける
・メタデータを定義する
　　title: 'Components/UserDetails'
　　component: UserDetails
・ストーリーの定義
　　type Story = StoryObj<typeof UserDetails>
・デフォルトストーリーの設定
　　サンプルとしてIDが1のユーザーで作成
・実行確認
```

### タスク3-3：ユーザー詳細画面の作成と反映

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - ユーザー詳細画面に関する記載があるか
        - 何をすべきかイメージができているか
        - ルーティング方法とファイルの作成場所を把握している
        - 対象となるユーザーのIDの取得方法を把握している
        - UserDetailsコンポーネントを呼び出すことを把握している
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
　　作成場所：app/users/[id]/details/
　　ファイル名：page.tsx
　　コンポーネント名：UserDetailsPage
・コンポーネントの実装
	・URLから対象のユーザーIDを取得
	・取得したIDを<UserDetails>に渡してレンダリング
・動作確認

【確認事項】
・再レンダリングする処理ついてどのように実装するかを相談させていただきたいです
```

## 追加タスク

### タスク4-1：フォームのバリエーションを強化する

本タスクは追加のタスクとなる点、バリエーションについては本来やらなくても良いといわれている点を考慮してください。

そのため、言語化や進め方については指摘ではなく、アドバイスの方向で伝えてください。
基本的には自身で少し調査をしてもらい、そのうえで以下をチェックしてもらいます。

- 何を調査したか
- どのようの調査したか
- バリエーションを調べてみてわかったことは何か

これらを確認したのち、新規登録と編集の入力フォームに対して以下のルールを調べてもらいつつ、任意のバリエーションを実装してもらいましょう。
対象となる入力欄は「名前」と「役職」のみで問題ありません。

- N文字以上、M文字以内
- アルファベットの大文字、小文字
- 日本語
- 先頭にスペースを含めない
- 記号の制限
- 数字

---

## プログラムサンプル

### UserList.tsx

```tsx
// components/UserList.tsx

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import UserCard from './UserCard';
import { User } from '../types/User';

interface UserListProps {
  initialUsers: User[];
}

// TODO: ユーザー一覧を表示するコンポーネントを実装する
const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  
  const handleUserDeleted = (deletedUserId: number) => {
    setUsers(initialUsers => initialUsers.filter((user: User) => user.id !== deletedUserId));
  };

  if (users.length === 0) {
    return <Typography>ユーザーが存在しません。</Typography>;
  }

  return (
    <Box>
      {users.map(user => (
        <UserCard key={user.id} user={user} onUserDeleted={handleUserDeleted} />
      ))}
    </Box>
  );
}

export default UserList;
```

### UserList.stories.tsx

```tsx
// components/UserList.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import UserList from './UserList';

const meta: Meta<typeof UserList> = {
  title: 'Components/UserList',
  component: UserList,
};

export default meta;

type Story = StoryObj<typeof UserList>;

// TODO: デフォルトストーリーに例となるユーザーデータを設定する
export const Default: Story = {
  args: {
    initialUsers: [
      {
        id: 1,
        name: '山田 太郎',
        email: 'taro.yamada@example.com',
        role: '管理者',
        deleted: false,
      },
      {
        id: 2,
        name: '佐藤 花子',
        email: 'hanako.sato@example.com',
        role: 'ユーザー',
        deleted: true,
      },
    ],
  },
};
```

### users/page.tsx

```tsx
// app/users/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../utils/api';
import { User } from '../../types/User';
import { Typography, CircularProgress, Alert, Box } from '@mui/material';
import UserList from '@/components/UserList';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (err) {
        setError('ユーザーの取得に失敗しました。' + err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー一覧
      </Typography>
      <UserList initialUsers={users} />
    </Box>
  );
}

export default UsersPage;
```

### utils/api.ts

```tsx
// utils/api.ts

import { supabase } from './supabaseClient';
import { User } from '../types/User';

export const fetchUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase
    .from<'dev_users', User>('dev_users')
    .select('*')
    .eq('deleted', false);

  if (error) {
    throw error;
  }
  return data as User[];
};

export const fetchUserById = async (id: number): Promise<User | null> => {
  const { data, error } = await supabase
    .from<'dev_users', User>('dev_users')
    .select('*')
    .eq('id', id)
    .eq('deleted', false)
    .single();

  if (error) {
    if (error.code === 'PGRST116') { // No rows found
      return null;
    }
    throw error;
  }

  return data as User;
};

export const createUser = async (user: Omit<User, 'id' | 'deleted'>): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .insert(user)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

export const updateUser = async (id: number, user: Partial<User>): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .update(user)
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

export const deleteUser = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from('dev_users')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
};

export const softDeleteUser = async (id: number): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .update({ deleted: true })
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
}
```

### DeleteUserButton.tsx

```tsx
// components/DeleteUserButton.tsx

import React from 'react';
import { Button } from '@mui/material';
import { softDeleteUser } from '../utils/api';

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId) => void;
}

// TODO: ユーザーを削除するボタンコンポーネントを実装する
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    if (confirm('本当にこのユーザーを削除しますか？')) {
      try {
        await softDeleteUser(userId);
        onDelete(userId);
      } catch (error) {
        alert('削除に失敗しました。' + error);
      }
    }
  };

  return (
    <Button variant="outlined" color="error" sx={{ ml: 1 }} onClick={handleDelete}>
      削除
    </Button>
  );
}

export default DeleteUserButton;
```

### DeleteUserButton.stories.tsx

```tsx
// components/DeleteUserButton.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import DeleteUserButton from './DeleteUserButton';

const meta: Meta<typeof DeleteUserButton> = {
  title: 'Components/DeleteUserButton',
  component: DeleteUserButton,
};

export default meta;

type Story = StoryObj<typeof DeleteUserButton>;

// TODO: デフォルトストーリーに例となるプロパティを設定する
export const Default: Story = {
  args: {
    userId: 1,
    onDelete: () => alert('ユーザーが削除されました。'),
  },
};
```

### UserCard.tsx

```tsx
// components/UserCard.tsx

import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { User } from '../types/User';
import Link from 'next/link';
import DeleteUserButton from './DeleteUserButton';

interface UserCardProps {
  user: User;
  onUserDeleted: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onUserDeleted }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2">
          役割: {user.role}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" component={Link} href={`/users/${user.id}/details`}>詳細</Button>
        <Button variant="outlined" component={Link} href={`/users/${user.id}/edit`}>編集</Button>
        <DeleteUserButton userId={user.id} onDelete={onUserDeleted} />
      </CardActions>
    </Card>
  );
}

export default UserCard;
```

### UserDetails.tsx

```tsx
// components/UserDetails.tsx

import React from 'react';
import { Typography, Paper } from '@mui/material';
import { User } from '../types/User';

interface UserDetailsProps {
  user: User;
}

// TODO: ユーザーの詳細情報を表示するコンポーネントを実装する
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Paper sx={{ padding: 2, mt: 2 }}>
      <Typography variant="h6">ユーザー詳細</Typography>
      <Typography>名前: {user.name}</Typography>
      <Typography>メール: {user.email}</Typography>
      <Typography>役割: {user.role}</Typography>
    </Paper>
  );
}

export default UserDetails;
```

### UserDatails.stories.tsx

```tsx
// components/UserDatails.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import UserDetails from './UserDetails';

const meta: Meta<typeof UserDetails> = {
  title: 'Components/UserDetails',
  component: UserDetails,
};

export default meta;

type Story = StoryObj<typeof UserDetails>;

// TODO: デフォルトストーリーに例となるユーザーデータを設定する
export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: '山田 太郎',
      email: 'taro.yamada@example.com',
      role: '管理者',
      deleted: false,
    },
  },
};
```

### details/page.tsx

```tsx
// app/users/[id]/details/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import UserDetails from '@/components/UserDetails';
import { User } from '@/types/User';
import { fetchUserById } from '@/utils/api';

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
      {user && (
        <UserDetails user={user} />
      )}
    </Box>
  );
}

export default EditUserPage;
```