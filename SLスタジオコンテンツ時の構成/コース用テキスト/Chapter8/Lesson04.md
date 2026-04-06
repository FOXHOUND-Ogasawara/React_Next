# Lesson04：モーダルUIを利用した削除機能（Delete）の実装

## はじめに

ユーザーの削除機能を実装します。Chapter4では `confirm()` を使いましたが、このChapterでは **削除前にモーダルで確認を表示する** UIを実装します。

---

## タスク2-1：削除機能の追加

### API側の修正

`utils/api.ts` に論理削除用の関数 `softDeleteUser` を追加します。

また、既存のユーザー取得関数に `deleted = false` の条件を追加し、削除済みユーザーを取得しないようにします。

### DeleteUserButtonコンポーネントの作成

### 対象ファイル
`components/DeleteUserButton.tsx`

### 仕様

- `DeleteUserButtonProps` インターフェース
  ```tsx
  userId: number;
  onDelete: (userId: number) => void;  // 再レンダリング用
  ```
- 「削除」ボタンを押すと確認ダイアログ（`confirm`）を表示
- 確認後、論理削除APIを呼び出す
- 削除成功後は `onDelete` を実行して一覧を再レンダリング

---

## タスク2-2：ストーリー作成

### 対象ファイル
`components/DeleteUserButton.stories.tsx`

- デフォルトストーリーにユーザーIDを設定

---

## タスク2-3：UserCardとDeleteUserButtonの統合

### 対象ファイル
- `components/UserCard.tsx`
- `components/UserList.tsx`

### 仕様

- `UserCard` 内の削除ボタンを `DeleteUserButton` に差し替え
- 削除後にユーザー一覧が再レンダリングされること

### 再レンダリングのポイント

1. `UserCard` に再レンダリング用の関数を受け取れるようにする
2. `UserList` にstate管理を追加
3. 削除実行後にstateを更新して再レンダリング

```tsx
// UserList内での削除後の処理例
const handleDelete = (userId: number) => {
  setUsers(users.filter(user => user.id !== userId));
};
```

---

## チェックポイント

- [ ] `DeleteUserButton` がStorybookで表示できる
- [ ] 一覧画面の各カードに削除ボタンが表示されている
- [ ] 削除ボタン押下時に確認ダイアログが表示される
- [ ] 確認後、一覧からユーザーが消える（再レンダリング）
- [ ] DBで `deleted = true` に更新されている

---

## 本Lessonのまとめ

- 論理削除のAPI関数と削除ボタンコンポーネントを作成した
- `onDelete` コールバックとstateの `filter` で削除後の再レンダリングを実現
- 次のLessonでは全機能を結合してテストします
