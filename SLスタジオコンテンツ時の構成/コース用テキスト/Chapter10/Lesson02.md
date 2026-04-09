# Lesson02：【卒業試験】総合理解度テスト

## はじめに

これが本コースの最終テストです。コースを通じて学んだ知識・技術の理解度を確認します。

---

## 課題1：Web APIの基礎（各2点 × 5問 = 10点）

### 課題設問

1. Web APIとは何か、1〜2文で説明してください。
2. HTTPメソッドの `GET` / `POST` / `PATCH` / `DELETE` のそれぞれの役割を、CRUD操作と対応させて答えてください。
3. ステータスコード `200`、`201`、`404`、`500` のそれぞれの意味を答えてください。
4. クエリパラメータとは何か説明し、具体例を1つ挙げてください。
5. JSON形式のデータ構造について、JavaScriptのオブジェクトとの違い（もしあれば）を説明してください。

### 解答

1. Web APIとは、インターネット上に公開されたサービスの機能をURLを通じて呼び出せる仕組み。HTTPリクエストを送ることで、データの取得や登録などの操作が可能。
2. `GET` = Read（取得）、`POST` = Create（登録）、`PATCH` = Update（更新）、`DELETE` = Delete（削除）
3. `200` = OK（リクエスト成功）、`201` = Created（データ作成成功）、`404` = Not Found（リソースが見つからない）、`500` = Internal Server Error（サーバー側のエラー）
4. URLの末尾に `?キー=値` の形式で付けるパラメータ。例：`?q=Tokyo&units=metric`（都市名Tokyoを摂氏で指定）
5. JSONはキーが必ずダブルクォーテーションで囲まれる。JavaScriptのオブジェクトではクォーテーション不要。また、JSONにはメソッドを含められない。

---

## 課題2：React（各3点 × 5問 = 15点）

### 課題設問

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

### 解答

1. `useState`：コンポーネント内で状態（state）を管理するためのHook。stateが更新されると再レンダリングされる。`useEffect`：副作用（API呼び出し、DOM操作等）を実行するためのHook。
2. `[]`（空配列）：**初回レンダリング時のみ**実行される。`[selectedArea]`：初回レンダリング時に加え、**`selectedArea`が変更されるたびに**再実行される。
3. **問題点**：`fetch` が `useEffect` の外に記述されているため、毎回のレンダリング時に実行され無限ループが発生する。**修正版**：
   ```tsx
   const MyComponent = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
       fetch('http://localhost:3001/api/users')
         .then(res => res.json())
         .then(data => setData(data));
     }, []);  // useEffectで囲み、空配列で初回のみ実行

     return <div>{data.length}件</div>;
   };
   ```
4. Propsとは、親コンポーネントから子コンポーネントに渡すデータのこと。コード例：
   ```tsx
   // 親コンポーネント
   <UserCard name="太郎" age={25} />

   // 子コンポーネント
   const UserCard = ({ name, age }: { name: string; age: number }) => {
     return <p>{name}（{age}歳）</p>;
   };
   ```
5. ①`method: 'POST'`（HTTPメソッドの指定）、②`headers: { 'Content-Type': 'application/json' }`（送信データの形式を指定）、③`body: JSON.stringify({...})`（送信するデータ本体をJSON文字列に変換して渡す）

---

## 課題3：Next.js（各3点 × 5問 = 15点）

### 課題設問

1. Next.jsのApp Routerにおいて、以下のURLに対応するファイルパスを答えてください。
   - `/users`
   - `/users/5/edit`

2. `page.tsx` と `layout.tsx` のそれぞれの役割の違いを説明してください。
3. Next.jsでの画面遷移の方法を2つ挙げ、それぞれどのような場面で使うか説明してください。
4. `'use client'` ディレクティブとは何か、どのような場合に必要か説明してください。
5. react-router-domの `useParams()` に相当する、Next.jsでURLパラメータを取得する方法を説明してください。

### 解答

1. `/users` → `app/users/page.tsx`、`/users/5/edit` → `app/users/[id]/edit/page.tsx`
2. `page.tsx`：そのURLに対応するページコンポーネントを定義するファイル。`layout.tsx`：そのディレクトリ以下の全ページに共通するレイアウト（ヘッダー・サイドバー等）を定義するファイル。
3. ①`<Link href="/users">` — テンプレート内でリンクを設置する場合（ナビゲーション等）。②`useRouter().push('/users')` — 処理の中でプログラム的に遷移させたい場合（登録成功後の遷移等）。
4. `'use client'` はファイルの先頭に記述するディレクティブで、そのコンポーネントをクライアントコンポーネントとして宣言する。`useState`、`useEffect`、`onClick` などブラウザ側のインタラクションを使う場合に必要。
5. App Routerでは、ページコンポーネントのpropsとして `params` を受け取る。`app/users/[id]/page.tsx` の場合、`{ params: { id: string } }` として受け取れる。また、クライアントコンポーネントでは `useParams()` を `next/navigation` からインポートして使用する。

---

## 課題4：データベースとCRUD（各2点 × 5問 = 10点）

### 課題設問

1. CRUD処理に対応するSQL文をそれぞれ答えてください。
2. 論理削除と物理削除の違いを説明してください。
3. 論理削除を採用するメリットを2つ挙げてください。
4. フロントエンドからデータベースに直接アクセスしない理由を説明してください。
5. `React → API → PostgreSQL` の3層構造において、各層の役割を簡潔に説明してください。

### 解答

1. Create = `INSERT`、Read = `SELECT`、Update = `UPDATE`、Delete = `DELETE`
2. 論理削除：`deleted` フラグを `true` に更新してデータを「削除済み」として扱う（レコードは残る）。物理削除：`DELETE` 文でレコードを完全に削除する。
3. ①データの復元が可能（誤操作への対応）、②削除履歴の追跡ができる（監査や分析に利用可能）
4. セキュリティ上の理由（DB接続情報が公開されてしまう）、アクセス制御やバリデーションをサーバー側で一元管理するため。
5. React（フロント）：ユーザーが操作する画面の表示とインタラクション。API（バック）：リクエストを受け取り、ビジネスロジックの処理とDBへのクエリ実行。PostgreSQL（DB）：データの永続的な保存と管理。

---

## 課題5：Storybook（各2点 × 5問 = 10点）

### 課題設問

1. Storybookとは何か、1〜2文で説明してください。
2. ストーリー（Story）とは何か説明してください。
3. ストーリーファイルの基本構成要素を3つ挙げ、それぞれの役割を説明してください。
4. Storybookを使用するメリットを2つ挙げてください。
5. 以下のストーリー定義の空欄（A〜F）を埋めてください。

```tsx
import type { Meta, __A__ } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: __B__<typeof CustomButton> = {
  title: 'Components/CustomButton',
  component: __C__,
  tags: ['autodocs'],
};

export default __D__;

type Story = __E__<typeof CustomButton>;

export const Primary: Story = {
  __F__: {
    variantType: 'primary',
    children: 'Click me',
  },
};
```

### 解答

1. Storybookとは、UIコンポーネントをアプリケーションから切り離して個別に開発・確認・ドキュメント化できる開発ツール。
2. コンポーネントの1つの表示パターン（バリエーション）のこと。異なるpropsを渡した各状態を個別に定義・確認できる。
3. ①`Meta`（メタデータ定義：タイトル、対象コンポーネント等の設定）、②`StoryObj`（ストーリーの型定義）、③`args`（コンポーネントに渡すpropsの値の設定）
4. ①コンポーネント単体で表示・動作確認ができる（画面全体を構築せずにテスト可能）、②コンポーネントのカタログ・ドキュメントとして機能する（使い方を共有できる）
5. A = `StoryObj`、B = `Meta`、C = `CustomButton`、D = `meta`、E = `StoryObj`、F = `args`

---

## 課題6：開発プロセス（各3点 × 5問 = 15点）

### 課題設問

1. 「開発の段取り」とは何か、その目的を説明してください。
2. 実装前に作成するタスクリストには、どのような情報を含めるべきですか？3つ以上挙げてください。
3. VSCodeのソース管理タブで差分確認を行う際、チェックすべき観点を3つ以上挙げてください。
4. Gitのブランチ運用において、以下の手順を正しい順序に並べ替えてください。
   - (A) `git push origin develop`
   - (B) `git merge feature/task1`
   - (C) `git checkout -b feature/task1`
   - (D) `git checkout develop`
   - (E) `git add . && git commit -m "タスク1完了"`
5. コミットメッセージの良い例と悪い例をそれぞれ1つずつ挙げ、その理由を説明してください。

### 解答

1. 実装に入る前にタスクを分解・整理し、実装順序や不明点を洗い出すプロセス。目的は作業の漏れを防ぎ、効率的に進めるため。
2. ①タスクの概要、②対象ファイル名、③実装する内容の詳細（箇条書き）、④確認事項・不明点、⑤使用するライブラリやデータ
3. ①不要な `console.log` が残っていないか、②コメントアウトした不要コードが残っていないか、③未使用の `import` 文が残っていないか、④インデントが統一されているか、⑤意図しない変更が含まれていないか
4. 正しい順序：**(C) → (E) → (D) → (B) → (A)**
   1. `git checkout -b feature/task1`（作業ブランチ作成）
   2. `git add . && git commit -m "タスク1完了"`（作業内容をコミット）
   3. `git checkout develop`（developに切り替え）
   4. `git merge feature/task1`（作業ブランチをマージ）
   5. `git push origin develop`（リモートにプッシュ）
5. **良い例**：`git commit -m "ユーザー新規登録フォームの実装"` → 何を実装したかが一目で分かる。**悪い例**：`git commit -m "修正"` → 何を修正したか分からず、後から履歴を追えない。

---

## 課題7：実技課題（25点）

### 課題設問

以下の仕様に基づいて、コンポーネントとストーリーを作成してください。

**StatusBadge コンポーネント：**

- Props:
  - `status`: `'active' | 'inactive' | 'pending'`
  - `label`: `string`
- 表示:
  - `active` → 緑色の背景
  - `inactive` → 灰色の背景
  - `pending` → 黄色の背景
  - `label` の文字を表示

**提出物：**
1. `StatusBadge.tsx`（コンポーネント）
2. `StatusBadge.stories.tsx`（3つ以上のストーリー）

### 解答

**StatusBadge.tsx：**

```tsx
interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending';
  label: string;
}

const statusColors = {
  active: { backgroundColor: '#4caf50', color: '#fff' },
  inactive: { backgroundColor: '#9e9e9e', color: '#fff' },
  pending: { backgroundColor: '#ffeb3b', color: '#333' },
};

const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  return (
    <span
      style={{
        ...statusColors[status],
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 'bold',
        display: 'inline-block',
      }}
    >
      {label}
    </span>
  );
};

export default StatusBadge;
```

**StatusBadge.stories.tsx：**

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import StatusBadge from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Active: Story = {
  args: {
    status: 'active',
    label: 'アクティブ',
  },
};

export const Inactive: Story = {
  args: {
    status: 'inactive',
    label: '非アクティブ',
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
    label: '保留中',
  },
};
```

---

## 配点

| 課題 | 配点 |
|---|---|
| 課題1：Web APIの基礎 | 10点 |
| 課題2：React | 15点 |
| 課題3：Next.js | 15点 |
| 課題4：データベースとCRUD | 10点 |
| 課題5：Storybook | 10点 |
| 課題6：開発プロセス | 15点 |
| 課題7：実技課題 | 25点 |
| **合計** | **100点** |

---

お疲れ様でした！🎉
