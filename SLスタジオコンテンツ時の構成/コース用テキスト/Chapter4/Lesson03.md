# Lesson03：【Create】フォーム入力からのデータ登録

## はじめに

前のLessonではデータの取得（Read）を実装しました。

このLessonでは、**Create（データの新規登録）** を実装します。フォームから入力されたデータをAPIに送信し、PostgreSQLに保存する処理を作ります。

---

## APIエンドポイントの作成（バックエンド）

`server/index.js` に、ユーザー登録用のエンドポイントを追加します。

```javascript
// ユーザーの新規登録（Create）
app.post('/api/users', async (req, res) => {
  const { name, age } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO sample_users (name, age) VALUES ($1, $2) RETURNING *',
      [name, age]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('登録エラー:', error);
    res.status(500).json({ error: 'データの登録に失敗しました' });
  }
});
```

**ポイント：**
- HTTPメソッドは `POST` を使用する
- リクエストの `body` から `name` と `age` を受け取る
- `RETURNING *` を付けると、登録されたデータがレスポンスとして返される
- 成功時はステータスコード `201 Created` を返す

---

## Reactでの登録フォーム実装（フロントエンド）

`UserList.tsx` に新規登録フォームを追加します。

### 登録処理の実装

```tsx
const [name, setName] = useState('');
const [age, setAge] = useState<number | ''>('');

const addUser = () => {
  if (name && age) {
    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('登録成功:', data);
        setName('');
        setAge('');
        fetchUsers(); // 一覧を再取得して画面を更新
      })
      .catch(error => {
        alert('登録に失敗しました');
        console.error(error);
      });
  }
};
```

**ポイント：**
- `fetch` の第二引数にリクエスト情報をオブジェクト形式で渡す
- `method: 'POST'` で登録リクエストであることを明示
- `headers` で `Content-Type: application/json` を指定（JSONデータを送ることを伝える）
- `body` に `JSON.stringify()` で変換したデータを渡す
- 登録成功後、フォームをクリアし `fetchUsers()` で一覧を再取得する

### 登録フォームのUI

```tsx
<div>
  <h2>新規ユーザーの追加</h2>
  <div>
    <input
      type="text"
      placeholder="名前"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="number"
      placeholder="年齢"
      value={age}
      onChange={(e) => setAge(Number(e.target.value))}
    />
    <button onClick={addUser}>追加</button>
  </div>
</div>
```

---

## 動作確認

1. フォームに名前と年齢を入力し「追加」ボタンをクリック
2. 一覧に新しいユーザーが追加されることを確認
3. DevToolsのNetworkタブで以下を確認
   - POSTリクエストが送信されていること
   - ステータスコードが `201` であること
   - リクエストBodyに入力データが含まれていること
4. pgAdminでもデータが追加されていることを確認

---

## 【課題】Create機能を自力で実装してみよう

上記のテキストと同じ手順で、以下を自力で実装してください。

1. APIエンドポイント（POST `/api/users`）をバックエンドに追加する
2. `UserList` コンポーネントに登録フォームと登録処理を追加する
3. 動作確認を行う

### チェックポイント

- [ ] フォームに名前・年齢を入力して「追加」ボタンを押すと登録される
- [ ] 登録後、一覧に新しいユーザーが表示される
- [ ] 登録後、フォームの入力値がクリアされる
- [ ] pgAdminでデータが登録されていることを確認できる

---

## 本Lessonのまとめ

- POSTリクエストでデータを登録する際は `method`、`headers`、`body` を指定する
- `JSON.stringify()` でJavaScriptオブジェクトをJSON文字列に変換して送信する
- 登録成功後は一覧を再取得して画面を更新する
- 次のLessonではUpdate（データの更新）を実装します
