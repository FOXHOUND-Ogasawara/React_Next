# Lesson03：アプリケーション全体のUI統合とスタイル修正

## はじめに

作成したカスタムコンポーネント（`CustomButton` / `CustomCard` / `CustomModal`）を、アプリケーション全体に統合します。

---

## タスク1：ボタンの置き換え

### 対象
`UserCard` 内の削除ボタンを `CustomButton`（Danger）に差し替え。

**Before（DeleteUserButton専用ボタン）：**
```tsx
<DeleteUserButton userId={user.id} onDelete={handleDelete} />
```

**After（CustomButton + 削除ロジック）：**
```tsx
<CustomButton variantType="danger" onClick={() => handleDeleteClick(user.id)}>
  削除
</CustomButton>
```

> **注意：** `DeleteUserButton` に実装していた削除処理は、適切なコンポーネント（`UserList` など）に移動させる必要があります。

---

## タスク2：カードの置き換え

### 対象
`UserCard` を `CustomCard` に置き換え。

`UserList` コンポーネント内で、`UserCard` の代わりに `CustomCard` を使ってユーザー情報を表示します。

> **注意：** 編集・詳細ボタンは `CustomButton` に置き換える必要はありません。

---

## タスク3：モーダルの統合

### 対象
削除時の `confirm()` を `CustomModal` に差し替え。

```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

// 削除ボタンクリック
const handleDeleteClick = (userId: number) => {
  setDeleteTargetId(userId);
  setIsModalOpen(true);
};

// モーダルの確認ボタン
const handleConfirmDelete = async () => {
  if (deleteTargetId) {
    await softDeleteUser(deleteTargetId);
    setUsers(users.filter(user => user.id !== deleteTargetId));
    setIsModalOpen(false);
  }
};

// JSX
<CustomModal
  open={isModalOpen}
  title="削除確認"
  content="本当にこのユーザーを削除しますか？"
  onClose={() => setIsModalOpen(false)}
  onConfirm={handleConfirmDelete}
/>
```

---

## タスク4：UI/UXの向上（チャレンジ課題）

余裕があれば、以下の機能をユーザー一覧画面に追加してみましょう。

- **ユーザー検索機能**
  - ID検索と役職検索に対応
  - プルダウン形式
- **ユーザー並び替え機能**
  - IDの昇順・降順で並び替え

---

## チェックポイント

- [ ] 削除ボタンが `CustomButton` になっている
- [ ] ユーザーカードが `CustomCard` になっている
- [ ] 削除時に `CustomModal` が表示される
- [ ] 全機能が正常に動作する

---

## 本Lessonのまとめ

- カスタムコンポーネントをアプリケーション全体に統合した
- `confirm()` から `CustomModal` への置き換えでUIが向上した
- 次のLessonでは最終デバッグと不要コードの除去を行います
