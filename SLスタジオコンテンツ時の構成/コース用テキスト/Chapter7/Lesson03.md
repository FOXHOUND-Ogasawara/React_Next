# Lesson03：Storybookを用いたフォームコンポーネントの開発

## はじめに

このLessonでは、新規登録フォームコンポーネント（`RegisterForm`）を作成し、Storybookでコンポーネント単体の動作を確認します。

---

## タスク1-1：RegisterFormコンポーネントの作成

### 対象ファイル
`components/RegisterForm.tsx`

### 仕様

- コンポーネント名：`RegisterForm`
- `RegisterFormProps` で定義した内容を受け取る
- 入力フォーム：名前、メール、ロール
- 「登録」ボタンで新規登録処理を実行
- 登録成功後は `onSuccess` コールバックを呼び出す

### 実装のポイント

1. 配布プロジェクトの「必要ファイル」フォルダにソースコードのテンプレートがあります
2. テンプレートをコピーし、未実装の箇所を完成させてください
3. API通信の方法は、プロジェクト内の既存コード（`utils/api.ts`）を参考にしてください

---

## タスク1-2：RegisterFormのストーリー作成

### 対象ファイル
`components/RegisterForm.stories.tsx`

### 仕様

- `Meta` を使用してストーリーメタデータを定義
- `StoryObj` を使用してストーリーを定義
- デフォルトストーリーを設定
- Storybookで表示・操作が確認できる

### 実装のヒント

Storybookでは実際のページ遷移はできないため、`onSuccess` に `alert()` を設定すると便利です。

```tsx
export const Default: Story = {
  args: {
    onSuccess: () => alert('登録成功！'),
  },
};
```

---

## 動作確認

1. `npm run storybook` でStorybookを起動
2. 左側のツリーから `RegisterForm` を選択
3. フォームに入力して「登録」ボタンをクリック
4. `alert` が表示されれば成功

---

## 本Lessonのまとめ

- Storybookを使うことで、**ページに組み込む前にコンポーネント単体で動作確認**ができる
- Propsにコールバック関数を渡す設計にすることで、Storybook用とページ用の挙動を切り替えられる
- 次のLessonでは、RegisterFormを実際のページに組み込みます
