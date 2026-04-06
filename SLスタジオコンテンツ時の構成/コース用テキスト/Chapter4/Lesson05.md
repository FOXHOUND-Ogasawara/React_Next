# Lesson05：【Delete】データの削除と画面表示の更新

## はじめに

このLessonでは、CRUD処理の最後のパターンである **Delete（データの削除）** を実装します。

ただし、実務では物理的にデータを削除するのではなく、**論理削除**（削除フラグを `true` に更新する）のが一般的です。本コースでも論理削除を採用します。

---

## 論理削除とは

| 削除方法 | 説明 | SQL文 |
|---|---|---|
| 物理削除 | データを完全に削除する | `DELETE FROM users WHERE id = 1` |
| 論理削除 | 削除フラグを立てて「消したこと」にする | `UPDATE users SET deleted = true WHERE id = 1` |

**論理削除を使う理由：**
- 誤操作でデータが消えてしまうリスクを防ぐ
- 削除されたデータを後から復元できる
- 削除履歴を追跡できる

本コースのテーブルには `deleted` カラム（BOOLEAN型、デフォルト `false`）があり、`true` にすることで「削除済み」として扱います。

---

## APIエンドポイントの作成（バックエンド）

`server/index.js` に、論理削除用のエンドポイントを追加します。

```javascript
// ユーザーの論理削除（Delete）
app.patch('/api/users/:id/delete', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(
      'UPDATE sample_users SET deleted = true WHERE id = $1',
      [id]
    );
    res.status(204).send();
  } catch (error) {
    console.error('削除エラー:', error);
    res.status(500).json({ error: 'データの削除に失敗しました' });
  }
});
```

**ポイント：**
- `DELETE` メソッドではなく `PATCH` メソッドを使用する（deletedフラグの更新だから）
- SQLは `UPDATE` 文で `deleted = true` に更新する
- 成功時はステータスコード `204 No Content` を返す（レスポンスボディなし）

---

## Reactでの削除機能実装（フロントエンド）

### UserEdit.tsx に削除ボタンを追加

編集画面に削除ボタンを設置します。

```tsx
// 削除処理
const deleteUser = () => {
  if (user && confirm('本当にこのユーザーを削除しますか？')) {
    fetch(`http://localhost:3001/api/users/${id}/delete`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => navigate('/'))  // 削除後に一覧画面に遷移
      .catch(error => console.error('削除に失敗しました', error));
  }
};
```

**ポイント：**
- `confirm()` を使って削除前に確認ダイアログを表示する
- 削除はデータの完全消去ではなく、削除フラグの更新

### 削除ボタンのUI

```tsx
<button onClick={deleteUser} style={{ color: 'red' }}>
  削除
</button>
```

### 一覧画面での表示

Lesson02で実装した一覧取得のSQLには `WHERE deleted = false` が含まれているため、論理削除したデータは自動的に一覧から除外されます。

---

## 動作確認

1. 編集画面で「削除」ボタンをクリック
2. 確認ダイアログで「OK」を選択
3. 一覧画面に戻り、削除したユーザーが一覧から消えていることを確認
4. pgAdminで以下のSQLを実行し、論理削除されていることを確認

```sql
SELECT * FROM sample_users;
```

削除したユーザーの `deleted` カラムが `true` になっていればOKです。

---

## 【課題】Delete機能を自力で実装してみよう

上記のテキストと同じ手順で、以下を自力で実装してください。

1. APIエンドポイント（PATCH `/api/users/:id/delete`）を追加
2. `UserEdit` に削除処理と削除ボタンを追加
3. 動作確認を行う

### チェックポイント

- [ ] 「削除」ボタンを押すと確認ダイアログが表示される
- [ ] 確認後、一覧画面に遷移し削除したユーザーが表示されなくなっている
- [ ] pgAdminで `deleted = true` に更新されていることを確認できる
- [ ] 物理削除（DELETEのSQL）は使っていない

---

## 本Lessonのまとめ

- 実務では **論理削除** が一般的（`deleted` フラグを更新する）
- 物理削除ではなくUPDATE文を使うことで、データの復元や履歴追跡が可能
- 削除操作では `confirm()` を使ってユーザーに確認を求める
- 次のLessonではCRUD全体の統合課題に取り組みます
