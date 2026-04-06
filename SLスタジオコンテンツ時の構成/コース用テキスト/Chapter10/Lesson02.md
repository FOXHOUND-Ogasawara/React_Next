# Lesson02：【卒業試験】総合理解度テスト

## はじめに

これが本コースの最終テストです。コースを通じて学んだ知識・技術の理解度を確認します。

---

## 第1問：Web APIの基礎（各2点 × 5問 = 10点）

1. Web APIとは何か、1〜2文で説明してください。

2. HTTPメソッドの `GET` / `POST` / `PATCH` / `DELETE` のそれぞれの役割を、CRUD操作と対応させて答えてください。

3. ステータスコード `200`、`201`、`404`、`500` のそれぞれの意味を答えてください。

4. クエリパラメータとは何か説明し、具体例を1つ挙げてください。

5. JSON形式のデータ構造について、JavaScriptのオブジェクトとの違い（もしあれば）を説明してください。

---

## 第2問：React（各3点 × 5問 = 15点）

1. `useState` と `useEffect` のそれぞれの役割を説明してください。

2. `useEffect` の第二引数に `[]`（空配列）を渡した場合と、`[selectedArea]` を渡した場合の違いを説明してください。

3. 以下のコードの問題点を指摘し、修正してください。

```tsx
const MyComponent = () => {
  const [data, setData] = useState([]);

  fetch('http://localhost:3001/api/users')
    .then(res => res.json())
    .then(data => setData(data));

  return <div>{data.length}件</div>;
};
```

4. Propsとは何か説明し、親コンポーネントから子コンポーネントにデータを渡すコード例を書いてください。

5. `fetch` でPOSTリクエストを送る場合に必要な設定項目を3つ挙げ、それぞれの役割を説明してください。

---

## 第3問：Next.js（各3点 × 5問 = 15点）

1. Next.jsのApp Routerにおいて、以下のURLに対応するファイルパスを答えてください。
   - `/users`
   - `/users/5/edit`

2. `page.tsx` と `layout.tsx` のそれぞれの役割の違いを説明してください。

3. Next.jsでの画面遷移の方法を2つ挙げ、それぞれどのような場面で使うか説明してください。

4. `'use client'` ディレクティブとは何か、どのような場合に必要か説明してください。

5. react-router-domの `useParams()` に相当する、Next.jsでURLパラメータを取得する方法を説明してください。

---

## 第4問：データベースとCRUD（各2点 × 5問 = 10点）

1. CRUD処理に対応するSQL文をそれぞれ答えてください。

2. 論理削除と物理削除の違いを説明してください。

3. 論理削除を採用するメリットを2つ挙げてください。

4. フロントエンドからデータベースに直接アクセスしない理由を説明してください。

5. `React → API → PostgreSQL` の3層構造において、各層の役割を簡潔に説明してください。

---

## 第5問：Storybook（各2点 × 5問 = 10点）

1. Storybookとは何か、1〜2文で説明してください。

2. ストーリー（Story）とは何か説明してください。

3. ストーリーファイルの基本構成要素を3つ挙げ、それぞれの役割を説明してください。

4. Storybookを使用するメリットを2つ挙げてください。

5. 以下のストーリー定義の空欄を埋めてください。

```tsx
import type { Meta, _____ } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: _____<typeof CustomButton> = {
  title: 'Components/CustomButton',
  component: _____,
  tags: ['autodocs'],
};

export default _____;

type Story = _____<typeof CustomButton>;

export const Primary: Story = {
  _____: {
    variantType: 'primary',
    children: 'Click me',
  },
};
```

---

## 第6問：開発プロセス（各3点 × 5問 = 15点）

1. 「開発の段取り」とは何か、その目的を説明してください。

2. 実装前に作成するタスクリストには、どのような情報を含めるべきですか？3つ以上挙げてください。

3. VSCodeのソース管理タブで差分確認を行う際、チェックすべき観点を3つ以上挙げてください。

4. Gitのブランチ運用において、以下の手順を正しい順序に並べ替えてください。
   - `git push origin develop`
   - `git merge feature/task1`
   - `git checkout -b feature/task1`
   - `git checkout develop`
   - `git add . && git commit -m "タスク1完了"`

5. コミットメッセージの良い例と悪い例をそれぞれ1つずつ挙げ、その理由を説明してください。

---

## 第7問：実技課題（25点）

以下の仕様に基づいて、コンポーネントとストーリーを作成してください。

### 仕様

**StatusBadge コンポーネント**を作成する。

- Props:
  - `status`: `'active' | 'inactive' | 'pending'`
  - `label`: `string`
- 表示:
  - `active` → 緑色の背景
  - `inactive` → 灰色の背景
  - `pending` → 黄色の背景
  - `label` の文字を表示

### 提出物

1. `StatusBadge.tsx`（コンポーネント）
2. `StatusBadge.stories.tsx`（3つ以上のストーリー）

---

## 配点

| 問題 | 配点 |
|---|---|
| 第1問：Web APIの基礎 | 10点 |
| 第2問：React | 15点 |
| 第3問：Next.js | 15点 |
| 第4問：データベースとCRUD | 10点 |
| 第5問：Storybook | 10点 |
| 第6問：開発プロセス | 15点 |
| 第7問：実技課題 | 25点 |
| **合計** | **100点** |

---

お疲れ様でした！🎉
