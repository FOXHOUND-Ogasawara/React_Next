# Lesson04：Storybookの基本操作とストーリーの書き方

## はじめに

このLessonでは、Storybookの **ストーリーファイル（.stories.tsx）の具体的な書き方** を学びます。

---

## ストーリーファイルの命名規則

ストーリーファイルは、対象コンポーネントと同じディレクトリに以下の命名で作成します。

```
components/
  UserCard.tsx              ← コンポーネント本体
  UserCard.stories.tsx      ← ストーリーファイル
```

---

## ストーリーの基本構造

```tsx
// components/UserCard.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import UserCard from './UserCard';

// ① メタデータの定義
const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',    // Storybook内での表示位置
  component: UserCard,              // 対象コンポーネント
  tags: ['autodocs'],               // 自動ドキュメント生成
};

export default meta;

// ② ストーリーの型定義
type Story = StoryObj<typeof UserCard>;

// ③ デフォルトストーリー
export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: '山田 太郎',
      email: 'taro@example.com',
      role: 'admin',
    },
  },
};

// ④ バリエーション
export const GeneralUser: Story = {
  args: {
    user: {
      id: 2,
      name: '佐藤 花子',
      email: 'hanako@example.com',
      role: 'user',
    },
  },
};
```

### 各パートの説明

| パート | 説明 |
|---|---|
| `Meta` | コンポーネントのメタ情報（タイトル、対象コンポーネント等） |
| `export default meta` | メタデータのエクスポート |
| `StoryObj` | ストーリーの型定義 |
| `args` | コンポーネントに渡すpropsの値 |

---

## ストーリーの確認方法

1. ターミナルで `npm run storybook` を実行
2. ブラウザで `http://localhost:6006` を開く
3. 左側のツリーから対象コンポーネントを選択
4. 右側に表示されたコンポーネントを確認

### Controlsパネル

Storybookの下部にある **Controls** パネルでは、propsの値をリアルタイムに変更して表示を確認できます。

---

## 実践：シンプルなコンポーネントのストーリーを書いてみよう

### 対象コンポーネント

```tsx
// components/Greeting.tsx
interface GreetingProps {
  name: string;
  isVIP?: boolean;
}

const Greeting = ({ name, isVIP = false }: GreetingProps) => {
  return (
    <div style={{
      padding: '16px',
      border: isVIP ? '2px solid gold' : '1px solid gray',
      borderRadius: '8px',
    }}>
      <p>こんにちは、{name}さん！</p>
      {isVIP && <span>⭐ VIP会員</span>}
    </div>
  );
};

export default Greeting;
```

### ストーリーファイル

```tsx
// components/Greeting.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Greeting from './Greeting';

const meta: Meta<typeof Greeting> = {
  title: 'Components/Greeting',
  component: Greeting,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Greeting>;

export const Default: Story = {
  args: {
    name: '太郎',
  },
};

export const VIPUser: Story = {
  args: {
    name: '花子',
    isVIP: true,
  },
};
```

---

## Storybookで確認できること

1. `Default` ストーリー → 通常のカード表示
2. `VIPUser` ストーリー → VIP用の金枠カード表示
3. Controlsパネルで `name` や `isVIP` を変更してリアルタイムに確認

---

## 本Lessonのまとめ

- ストーリーファイルは `.stories.tsx` という拡張子で作成する
- `Meta`、`StoryObj`、`args` の3つがストーリーの基本構成
- `args` にpropsの値を設定してバリエーションを定義する
- Controlsパネルでpropsをリアルタイムに変更して確認できる
- 次のChapterでは、Next.js + Storybookの環境でユーザー管理システムを構築します
