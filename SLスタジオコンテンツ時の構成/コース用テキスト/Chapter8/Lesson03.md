# Lesson03：動的ルーティングによる詳細画面の実装

## はじめに

ユーザーの詳細情報を表示する画面を、App Routerの **動的ルーティング** を利用して実装します。

---

## タスク3-1：UserDetailsコンポーネントの作成

### 対象ファイル
`components/UserDetails.tsx`

### 仕様

- `UserDetailsProps` インターフェースを定義（`user: User`）
- コンポーネント名：`UserDetails`
- 以下のユーザー情報を表示
  - 名前
  - メールアドレス
  - 役職（ロール）

---

## タスク3-2：ストーリー作成

### 対象ファイル
`components/UserDetails.stories.tsx`

- デフォルトストーリーに例となるユーザーデータを設定
- Storybookで表示確認ができること

---

## タスク3-3：ユーザー詳細画面の作成

### 対象ファイル
- `app/users/[id]/details/page.tsx` ← 新規作成
- `components/UserCard.tsx` ← 「詳細」ボタン追加

### 仕様

- コンポーネント名：`UserDetailsPage`
- URLの `[id]` パラメータから対象ユーザーのIDを取得
- APIでユーザー情報を取得し、`UserDetails` コンポーネントに渡す
- `UserCard` に「詳細」ボタンを追加し、詳細画面への遷移リンクを設置

### 動的ルーティングの構成

```
app/users/[id]/details/page.tsx  →  /users/1/details, /users/2/details, ...
```

---

## チェックポイント

- [ ] `UserDetails` がStorybookで表示できる
- [ ] 一覧画面の各カードに「詳細」ボタンが表示されている
- [ ] 「詳細」ボタンから詳細画面に遷移できる
- [ ] 詳細画面に対象ユーザーの情報が正しく表示される

---

## 本Lessonのまとめ

- App Routerの `[id]` フォルダで動的ルーティングを実現した
- 詳細画面ではURLパラメータからIDを取得し、該当ユーザーの情報を表示する
- 次のLessonではモーダルUIを利用した削除機能を実装します
