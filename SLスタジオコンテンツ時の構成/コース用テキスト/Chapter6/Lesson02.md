# Lesson02：ファイルベースルーティング（App Router）の基礎

## はじめに

Next.jsの最大の特徴のひとつが、**ファイルベースルーティング**です。

`app` ディレクトリ配下にファイルを配置するだけで、自動的にルーティングが設定されます。

---

## App Routerの基本ルール

### ルール1：`page.tsx` がページになる

`app` ディレクトリ内に `page.tsx` を作成すると、そのパスがURLになります。

```
app/
  page.tsx              → http://localhost:3000/
  about/
    page.tsx            → http://localhost:3000/about
  users/
    page.tsx            → http://localhost:3000/users
```

### ルール2：フォルダ名がURLの一部になる

```
app/
  settings/
    page.tsx            → /settings
    profile/
      page.tsx          → /settings/profile
```

### ルール3：動的ルーティングは `[パラメータ名]` で定義

URLの一部を変数として受け取りたい場合は、フォルダ名を `[]` で囲みます。

```
app/
  users/
    [id]/
      page.tsx          → /users/1, /users/2, /users/123, ...
      edit/
        page.tsx        → /users/1/edit, /users/2/edit, ...
```

---

## 動的ルーティングの実装例

### ページコンポーネントでパラメータを受け取る

```tsx
// app/users/[id]/page.tsx

interface PageProps {
  params: {
    id: string;
  };
}

const UserDetailPage = ({ params }: PageProps) => {
  return (
    <div>
      <h1>ユーザー詳細</h1>
      <p>ユーザーID: {params.id}</p>
    </div>
  );
};

export default UserDetailPage;
```

`/users/5` にアクセスすると、`params.id` に `"5"` が入ります。

---

## layout.tsx について

`layout.tsx` は、**そのディレクトリ以下の全ページに共通するレイアウト**を定義するファイルです。

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>ユーザー管理システム</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
```

ヘッダーやナビゲーションなど、全ページ共通のUIを `layout.tsx` に配置します。

---

## ページ遷移の方法

Next.jsでは `Link` コンポーネントを使ってページ遷移を行います。

```tsx
import Link from 'next/link';

<Link href="/users">ユーザー一覧</Link>
<Link href={`/users/${user.id}/edit`}>編集</Link>
```

プログラム的に遷移させる場合は `useRouter` を使います。

```tsx
'use client';
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/users');  // ユーザー一覧に遷移
```

---

## react-router-dom との対比

| 機能 | react-router-dom | Next.js App Router |
|---|---|---|
| ルート定義 | `<Route path="..." />` | ファイル配置で自動 |
| リンク | `<Link to="...">` | `<Link href="...">` |
| パラメータ取得 | `useParams()` | `params` props |
| 画面遷移 | `useNavigate()` | `useRouter()` |

---

## 本Lessonのまとめ

- App Routerでは **ファイルの配置 = URLの構造** になる
- `page.tsx` がページ、`layout.tsx` が共通レイアウト
- `[パラメータ名]` フォルダで動的ルーティングを実現する
- ページ遷移は `Link` コンポーネントまたは `useRouter` を使う
- 次のLessonでは、Storybookの概念と役割を学びます
