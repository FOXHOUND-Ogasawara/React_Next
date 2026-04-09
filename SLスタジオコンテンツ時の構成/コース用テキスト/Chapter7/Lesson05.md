# Lesson05：【実践課題】編集（Update）機能の実装と整理

## 課題の概要

新規登録機能と同じ流れで、**ユーザー編集機能**を自力で実装してください。Lesson02の段取りとLesson03〜04の実装パターンを参考に進めましょう。

---

## 課題1：EditUserFormコンポーネントの作成

### 課題設問

`components/EditUserForm.tsx` を作成し、以下の仕様を満たすコンポーネントを実装してください。

- `EditUserFormProps` インターフェースを定義する
- ユーザーの編集機能（名前・メール・ロール）を実装する
- 「更新」ボタンでデータ更新が可能であること
- 更新成功後は `onSuccess` コールバックを呼び出すこと
- 遷移の仕組みはLesson04のRegisterFormと同様の設計にすること

### 解答

```tsx
'use client';
import { useEffect, useState } from 'react';

interface EditUserFormProps {
  userId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

const EditUserForm = ({ userId, onSuccess, onError }: EditUserFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    // 対象ユーザーのデータを取得してフォームに初期値を設定
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name);
        setEmail(data.email);
        setRole(data.role);
      })
      .catch(error => console.error(error));
  }, [userId]);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role }),
      });
      if (res.ok) {
        onSuccess?.();
      } else {
        throw new Error('更新に失敗しました');
      }
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <div>
      <div>
        <label>名前</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>メールアドレス</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>ロール</label>
        <input value={role} onChange={(e) => setRole(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>更新</button>
    </div>
  );
};

export default EditUserForm;
```

---

## 課題2：EditUserFormのストーリー作成

### 課題設問

`components/EditUserForm.stories.tsx` を作成し、以下の仕様を満たすストーリーを定義してください。

- `Meta` を使用してメタデータを定義
- `StoryObj` を使用してストーリーを定義
- デフォルトストーリーに `userId` が「1」のユーザーを設定
- `onSuccess` には `alert` を設定し、Storybookでの動作確認ができるようにすること

### 解答

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import EditUserForm from './EditUserForm';

const meta: Meta<typeof EditUserForm> = {
  title: 'Components/EditUserForm',
  component: EditUserForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditUserForm>;

export const Default: Story = {
  args: {
    userId: 1,
    onSuccess: () => alert('更新成功！'),
    onError: (error) => alert('エラー: ' + error),
  },
};
```

---

## 課題3：ユーザー編集ページの修正

### 課題設問

`app/users/[id]/edit/page.tsx` を修正し、以下の仕様を満たすページを実装してください。

- `EditUserForm` コンポーネントをレンダリングする
- URLパラメータから対象ユーザーのIDを取得して `EditUserForm` に渡す
- 更新成功後にユーザー一覧画面（`/users`）に遷移すること
- ページのレイアウトが崩れていないこと

### 解答

```tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import EditUserForm from '@/components/EditUserForm';

const EditUserPage = () => {
  const params = useParams();
  const router = useRouter();
  const userId = Number(params.id);

  return (
    <div>
      <h1>ユーザー編集</h1>
      <EditUserForm
        userId={userId}
        onSuccess={() => router.push('/users')}
        onError={(error) => alert('更新に失敗しました: ' + error)}
      />
    </div>
  );
};

export default EditUserPage;
```

---

## 課題4：差分確認と整理

### 課題設問

実装完了後、以下の手順でコードを整理してください。

1. VSCodeのソース管理タブで差分を確認する
2. 不要な `console.log` やコメントアウトを削除する
3. コミットしてプッシュする

### 解答

```bash
git add .
git commit -m "ユーザー編集機能の実装完了"
git push origin develop
```

確認すべき観点：
- フォームの初期値取得用の `console.log` が残っていないこと
- 試行錯誤で書いたコメントアウト済みコードが残っていないこと
- `EditUserForm` と `EditUserForm.stories.tsx` が正しいディレクトリに配置されていること
