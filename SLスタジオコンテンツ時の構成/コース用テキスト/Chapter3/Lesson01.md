# Lesson01：ReactからのAPI呼び出しとデータ表示

## はじめに

前のChapterでは、Thunder Clientを使ってAPIの疎通確認を行いました。

このChapterでは、いよいよ **Reactのプログラムからfetchを使ってAPIを呼び出し、取得したデータを画面に表示する** 方法を学びます。

---

## 実装前の「段取り」

APIからデータを取得して画面に表示するまでの処理順序を整理しましょう。

```
1. コンポーネントが画面に表示される
      ↓
2. useEffectが実行される（初回レンダリング時）
      ↓
3. fetch でAPIにリクエストを送る
      ↓
4. レスポンス（JSON）を受け取る
      ↓
5. 取得したデータを useState でstateに保存する
      ↓
6. stateが更新されたことでコンポーネントが再レンダリングされる
      ↓
7. 画面上にデータが表示される
```

この流れを理解した上で、実装に進みましょう。

---

## ReactからのAPI呼び出し（fetch と useEffect）

### fetchの基本構文

```tsx
fetch("APIのURL")
  .then(response => response.json())  // レスポンスをJSON形式に変換
  .then(data => {
    // 取得したデータを使った処理
    console.log(data);
  })
  .catch(error => {
    // エラー時の処理
    console.error("データ取得に失敗しました", error);
  });
```

### useEffectとの組み合わせ

Reactでは、**コンポーネントが画面に表示されたタイミングでAPIを呼び出す**のが一般的です。そのために `useEffect` を使います。

```tsx
import { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []); // 空配列 → 初回レンダリング時のみ実行

  return (
    <div>
      {data ? <p>{JSON.stringify(data)}</p> : <p>読み込み中...</p>}
    </div>
  );
};
```

**ポイント：**
- `useEffect` の第二引数に `[]`（空配列）を渡すと、**初回レンダリング時のみ** 実行される
- `useState` でstateにデータを保存すると、**自動的に再レンダリング** が行われる

---

## 取得データのstate管理とUIレンダリング

### APIレスポンスの型定義

TypeScriptを使う場合は、レスポンスの型を定義しておくとコードの可読性が上がります。

```tsx
// レスポンスの型を定義
interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}
```

### stateでデータを管理する

```tsx
const [catImage, setCatImage] = useState<string>("");
```

### データを画面に表示する

```tsx
{catImage && (
  <img src={catImage} alt="猫ちゃん" style={{ maxWidth: '100%', height: 'auto' }} />
)}
```

---

## 【実装課題】Cat APIのデータ取得と画面表示

ここまでの内容を使って、Cat APIから猫の画像を取得して画面に表示するコンポーネントを実装してみましょう。

### 仕様

1. Reactプロジェクトを新規作成する
2. `Cat` コンポーネントを作成する
3. コンポーネントが表示された時に The Cat API から猫の画像を取得する
4. 取得した画像を画面に表示する
5. 「別の猫ちゃんを見る」ボタンを設置し、クリックすると別の画像に切り替わるようにする

### API情報

| 項目 | 設定値 |
|---|---|
| HTTPメソッド | `GET` |
| URL | `https://api.thecatapi.com/v1/images/search` |
| レスポンス | JSON配列。`data[0].url` に画像URLが格納されている |

### 実装のヒント

1. `fetch` でAPIを呼び出す関数を作成する
2. `useEffect` で初回レンダリング時にその関数を呼び出す
3. 取得した画像URLを `useState` で管理する
4. ボタンの `onClick` で同じ関数を再度呼び出せば画像が切り替わる

> **💡 DevToolsの活用ヒント：**
> 
> 実装がうまくいかない場合は、Chrome DevToolsを活用してデバッグしましょう。
> 
> - **Consoleタブ**：`console.log(data)` でAPIのレスポンス内容を確認する
>   - `F12` → Consoleタブで確認できます
>   - 想定通りのデータが取得できているか確認しましょう
> 
> - **Networkタブ**：APIリクエストの詳細を確認する
>   - `F12` → Networkタブを開いた状態でページをリロード
>   - 送信されたリクエストのURL、ステータスコード、レスポンスを確認できます
>   - ステータスコードが `200` 以外の場合はエラーの原因を調べましょう

### 参考コード（部分）

```tsx
const fetchCatImage = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => setCatImage(data[0].url))
    .catch(error => console.error("画像取得に失敗しました", error));
};

useEffect(() => {
  fetchCatImage();
}, []);
```

---

## 本Lessonのまとめ

- Reactでは `fetch` + `useEffect` + `useState` の組み合わせでAPIからデータを取得・表示する
- `useEffect` の第二引数に空配列を渡すと初回レンダリング時のみ実行される
- APIで取得したデータは `useState` でstateに保存し、画面に反映させる
- Chrome DevToolsの **Consoleタブ** と **Networkタブ** を活用してデバッグする
- 次のLessonでは、Weather APIを使ったより実践的な課題に挑戦します
