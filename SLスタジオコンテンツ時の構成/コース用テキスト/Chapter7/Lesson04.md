# Lesson04：新規登録（Create）API連携と画面実装

## はじめに

Lesson03で作成したRegisterFormコンポーネントを、実際の**新規登録ページ**に組み込みます。

---

## タスク1-3：新規登録ページの作成

### 対象ファイル
- `app/register/page.tsx` ← 新規作成
- `components/Navbar.tsx` ← メニュー追加

### 仕様

- `RegisterForm` コンポーネントをレンダリング
- 登録成功時にユーザー一覧画面（`/users`）に遷移
- 上部ナビゲーションに新規登録ページへのリンクを追加
- ページのレイアウトが崩れていないこと

### 実装のポイント

```tsx
// app/register/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import RegisterForm from '@/components/RegisterForm';

const RegisterPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>新規ユーザー登録</h1>
      <RegisterForm
        onSuccess={() => router.push('/users')}
        onError={(error) => alert('登録に失敗しました: ' + error)}
      />
    </div>
  );
};

export default RegisterPage;
```

**ポイント：**
- `'use client'` ディレクティブを先頭に記述（クライアントコンポーネントとして宣言）
- `useRouter` はNext.jsの `next/navigation` からインポート
- Storybookでは `alert` だった `onSuccess` を、ここでは `router.push` に差し替え

### Navbarにリンクを追加

```tsx
<Link href="/register">新規登録</Link>
```

---

## 動作確認

1. ナビゲーションから「新規登録」をクリック
2. 新規登録ページが表示されること
3. フォームに情報を入力して「登録」をクリック
4. ユーザー一覧画面に遷移すること
5. 一覧に新しいユーザーが表示されること

---

## 本Lessonのまとめ

- Storybookで確認済みのコンポーネントをページに組み込んだ
- `'use client'` ディレクティブでクライアントコンポーネントを宣言する
- コンポーネントの `onSuccess` プロップに `router.push` を設定して画面遷移を実現
- 次のLessonでは、編集機能を自力で実装する課題に取り組みます
