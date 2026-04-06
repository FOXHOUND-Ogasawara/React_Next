# Lesson04：【Update】既存データの編集処理

## はじめに

このLessonでは、**Update（データの更新）** を実装します。

既存のユーザー情報を編集画面で修正し、APIを通じてデータベースを更新する処理を作ります。

---

## APIエンドポイントの作成（バックエンド）

`server/index.js` に、以下の2つのエンドポイントを追加します。

### 特定ユーザーの取得（編集画面の初期値用）

```javascript
// 特定ユーザーの取得
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM sample_users WHERE id = $1 AND deleted = false',
      [id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'ユーザーが見つかりません' });
    }
  } catch (error) {
    console.error('取得エラー:', error);
    res.status(500).json({ error: 'データの取得に失敗しました' });
  }
});
```

### ユーザー情報の更新

```javascript
// ユーザー情報の更新（Update）
app.patch('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  try {
    const result = await pool.query(
      'UPDATE sample_users SET name = $1, age = $2 WHERE id = $3 RETURNING *',
      [name, age, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('更新エラー:', error);
    res.status(500).json({ error: 'データの更新に失敗しました' });
  }
});
```

**ポイント：**
- URLに `:id` を含めることで、**対象のユーザーを特定** する
- HTTPメソッドは `PATCH` を使用（部分更新に適している）
- `req.params.id` でURLからIDを取得する

---

## Reactでの編集画面実装（フロントエンド）

### フォルダ構成の更新

```
src
 ├ components
 │  ├ UserList.tsx
 │  └ UserEdit.tsx   ← 新規作成
 └ App.tsx
```

### ルーティングの設定

まず、`react-router-dom` をインストールします。

```bash
npm install react-router-dom
```

`App.tsx` にルーティングを追加します。

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';

const App = () => {
  return (
    <Router>
      <h1>ユーザー管理サンプルアプリ</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
```

### UserEdit.tsx

```tsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  age: number;
}

const UserEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');

  // 対象ユーザーのデータを取得
  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setName(data.name);
        setAge(data.age);
      })
      .catch(error => console.error(error));
  }, [id]);

  // 更新処理
  const updateUser = () => {
    if (name && age && user) {
      fetch(`http://localhost:3001/api/users/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age }),
      })
        .then(() => navigate('/'))  // 更新後に一覧画面に遷移
        .catch(error => console.error('更新に失敗しました', error));
    }
  };

  if (!user) {
    return <p>読み込み中...</p>;
  }

  return (
    <div>
      <h2>ユーザーの編集</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button onClick={updateUser}>更新</button>
      </div>
    </div>
  );
};

export default UserEdit;
```

**ポイント：**
- `useParams` でURLからIDを取得する（例：`/edit/1` → `id = "1"`）
- `useNavigate` で更新完了後に一覧画面（`/`）に遷移させる
- 編集画面では、まず対象ユーザーのデータを取得してフォームの初期値に設定する

### UserList.tsx に編集リンクを追加

一覧の各行に「編集」ボタンを追加します。

```tsx
import { Link } from 'react-router-dom';

// テーブルの各行に追加
<td>
  <Link to={`/edit/${user.id}`}>
    <button>編集</button>
  </Link>
</td>
```

---

## 動作確認

1. 一覧画面で「編集」ボタンをクリックし、編集画面に遷移することを確認
2. 編集画面にユーザーの現在の情報が表示されていることを確認
3. 情報を変更して「更新」ボタンをクリック
4. 一覧画面に戻り、変更が反映されていることを確認

---

## 【課題】Update機能を自力で実装してみよう

上記のテキストと同じ手順で、以下を自力で実装してください。

1. APIエンドポイント（GET `/api/users/:id` と PATCH `/api/users/:id`）を追加
2. `UserEdit` コンポーネントを作成
3. `App.tsx` にルーティングを設定
4. `UserList` に編集リンクを追加
5. 動作確認を行う

### チェックポイント

- [ ] 「編集」ボタンで編集画面に遷移できる
- [ ] 編集画面に対象ユーザーの情報が初期値として表示される
- [ ] 情報を変更して「更新」すると、一覧画面で変更が反映されている
- [ ] pgAdminでもデータが更新されていることを確認できる

---

## 本Lessonのまとめ

- `PATCH` メソッドでデータの部分更新を行う
- `useParams` でURLパラメータを取得し、対象データを特定する
- `useNavigate` で処理完了後に画面遷移させる
- 次のLessonではDelete（データの削除）を実装します
