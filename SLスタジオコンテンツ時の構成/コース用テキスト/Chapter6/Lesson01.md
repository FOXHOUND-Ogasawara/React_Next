# Lesson01：Next.jsの概要と、純粋なReactとの違い

## はじめに

これまでのChapterでは、Reactを使ってWebアプリケーションを構築してきました。

このChapterからは、Reactをベースとした **Next.js** というフレームワークと、コンポーネント開発ツールの **Storybook** を学びます。

---

## Next.jsとは

Next.jsは、Reactをベースにした **フルスタックWebフレームワーク** です。

Reactはあくまで「UIを作るためのライブラリ」ですが、Next.jsはそれに加えて以下の機能を提供します。

| 機能 | React（素の状態） | Next.js |
|---|---|---|
| ルーティング | 別ライブラリ（react-router-dom）が必要 | **ファイルベースで自動ルーティング** |
| サーバーサイドレンダリング | 自分で構築が必要 | **標準搭載** |
| API Routes | 別途バックエンドが必要 | **プロジェクト内でAPIを定義可能** |
| 画像最適化 | 自分で対応 | **標準搭載** |

つまり、Next.jsは **Reactを使いやすくするための"お膳立て"をしてくれるフレームワーク** です。

---

## ReactとNext.jsの主な違い

### 1. プロジェクトの作成方法

```bash
# React（Vite）
npx create-vite@latest my-app --template react-ts

# Next.js
npx create-next-app@latest my-app --typescript
```

### 2. ルーティングの方法

**React（react-router-dom を利用）：**
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/users/:id" element={<UserDetail />} />
</Routes>
```

**Next.js（App Router）：**
```
app/
  page.tsx          → /
  about/
    page.tsx        → /about
  users/
    [id]/
      page.tsx      → /users/1, /users/2, ...
```

Next.jsでは **ファイルとフォルダの構造がそのままURLになる** ため、ルーティング用のライブラリやコードが不要です。

### 3. データ取得の方法

**React：**
```tsx
useEffect(() => {
  fetch('/api/users').then(res => res.json()).then(setUsers);
}, []);
```

**Next.js（Server Components）：**
```tsx
// fetchを使わずに、サーバー側で直接データを取得できる
const users = await fetchUsers();
```

---

## あくまでもReactである

重要なのは、**Next.jsの中身はReactそのもの**ということです。

- コンポーネントの作り方は同じ
- `useState`、`useEffect` などのHooksも同じ
- JSXの書き方も同じ
- TypeScriptの使い方も同じ

これまで学んだReactの知識はNext.jsでもそのまま活かせます。違うのは「プロジェクトの構成」と「ルーティングの方法」です。

---

## 本Lessonのまとめ

- Next.jsはReactを拡張したフルスタックフレームワーク
- ファイルベースルーティングにより、ルーティング用コードが不要になる
- 中身はReactなので、これまでの知識がそのまま活かせる
- 次のLessonでは、App Routerの仕組みを詳しく学びます
