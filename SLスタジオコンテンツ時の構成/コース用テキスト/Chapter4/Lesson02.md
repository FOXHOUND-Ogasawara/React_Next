# Lesson02：【Read】データの取得と一覧表示

## はじめに

このLessonでは、CRUD処理の最も基本である **Read（データの取得）** を実装します。

user-managementプロジェクトをなぞりながら、APIエンドポイントの作成とReactでのデータ表示を行います。

---

## APIエンドポイントの作成（バックエンド）

`server/index.js` に、ユーザー一覧を取得するエンドポイントを追加します。

```javascript
// ユーザー一覧の取得（Read）
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM sample_users WHERE deleted = false ORDER BY id ASC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('データ取得エラー:', error);
    res.status(500).json({ error: 'データの取得に失敗しました' });
  }
});
```

**ポイント：**
- `WHERE deleted = false` で論理削除されていないデータのみ取得する
- `ORDER BY id ASC` でIDの昇順に並べる
- エラーが発生した場合はステータスコード500を返す

---

## Reactでの一覧表示（フロントエンド）

### フォルダ構成

```
src
 ├ components
 │  └ UserList.tsx
 └ App.tsx
```

### UserList.tsx

```tsx
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = () => {
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('取得エラー:', error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>年齢</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
```

### App.tsx

```tsx
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>ユーザー管理サンプルアプリ</h1>
      <UserList />
    </div>
  );
};

export default App;
```

---

## 動作確認

1. バックエンドAPIサーバーを起動する：`node server/index.js`
2. フロントエンドを起動する：`npm run dev`
3. ブラウザでアクセスし、ユーザー一覧が表示されることを確認する
4. DevToolsのNetworkタブで、`/api/users` へのGETリクエストが成功していることを確認する

---

## 【課題】Read機能を自力で実装してみよう

上記のテキストと同じ手順で、以下を自力で実装してください。

1. APIエンドポイント（GET `/api/users`）をバックエンドに追加する
2. `UserList` コンポーネントを作成し、一覧表示する
3. 動作確認を行い、正しくデータが表示されることを確認する

### チェックポイント

- [ ] APIサーバーが正常に起動している
- [ ] ブラウザ上にユーザーの一覧（ID・名前・年齢）が表示されている
- [ ] DevToolsのNetworkタブでステータスコード200が返っている

---

## 本Lessonのまとめ

- バックエンドにGETエンドポイントを作成し、PostgreSQLからデータを取得した
- Reactの `fetch` + `useEffect` + `useState` でデータを取得・表示した
- `WHERE deleted = false` で論理削除済みデータを除外した
- 次のLessonではCreate（データの登録）を実装します
