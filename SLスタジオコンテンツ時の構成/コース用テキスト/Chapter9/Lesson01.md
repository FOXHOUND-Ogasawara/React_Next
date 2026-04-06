# Lesson01：再利用可能なコンポーネント設計とは

## はじめに

Chapter7〜8で作成したコンポーネントは、それぞれ特定の目的に特化したものでした（`DeleteUserButton`、`UserCard`など）。

このChapterでは、**汎用的に再利用できるコンポーネント**（`CustomButton`、`CustomCard`、`CustomModal`）を作成し、既存のコンポーネントを置き換えていきます。

---

## なぜ再利用可能なコンポーネントが必要なのか

### 現状の問題

- `DeleteUserButton` は削除専用のボタン → 他の用途に使えない
- デザインの統一性がない → ボタンのスタイルがバラバラ
- 同じようなUIを複数箇所に作っている → 修正時に全箇所を変更する必要がある

### 再利用可能コンポーネントのメリット

- **1つのコンポーネントで複数の用途に対応**（Primary / Secondary / Danger）
- **デザインの一貫性**を保てる
- **修正が1箇所で済む**

---

## 作成するカスタムコンポーネント

### 1. CustomButton

多様なスタイルを持つ汎用ボタン。

```tsx
// 使用例
<CustomButton variantType="primary">登録</CustomButton>
<CustomButton variantType="danger" onClick={handleDelete}>削除</CustomButton>
```

### 2. CustomCard

情報を表示するための汎用カード。

```tsx
// 使用例
<CustomCard
  title="山田 太郎"
  description={<p>admin</p>}
  actions={<CustomButton variantType="primary">編集</CustomButton>}
/>
```

### 3. CustomModal

確認ダイアログを表示するためのモーダル。

```tsx
// 使用例
<CustomModal
  open={isOpen}
  title="確認"
  content="本当にこのユーザーを削除しますか？"
  onClose={() => setIsOpen(false)}
  onConfirm={handleDelete}
/>
```

---

## 実装の進め方

各コンポーネントについて、以下のセットで実装します。

1. **コンポーネント作成**（`components/parts/Custom*.tsx`）
2. **ストーリー作成**（`components/parts/Custom*.stories.tsx`）
3. **画面改修**（既存コンポーネントの置き換え）

配布プロジェクトの「必要ファイル」フォルダにテンプレートがあります。テンプレートのTODO箇所を完成させてください。

---

## CustomButtonの実装

### 対象ファイル
`components/parts/CustomButton.tsx`

### 仕様

- MUIの `Button` コンポーネントを利用
- `variantType` プロパティで `primary` / `secondary` / `danger` のスタイルを切り替え
- `children`（ボタンのラベル）と `onClick` を受け取る

### ストーリーのバリエーション

```tsx
export const Primary: Story = {
  args: { variantType: 'primary', children: 'Primary Button' },
};

export const Secondary: Story = {
  args: { variantType: 'secondary', children: 'Secondary Button' },
};

export const Danger: Story = {
  args: { variantType: 'danger', children: 'Danger Button' },
};
```

---

## チェックポイント

- [ ] CustomButton がStorybookで3つのバリエーションで表示できる
- [ ] CustomCard がStorybookで表示できる
- [ ] CustomModal がStorybookで開閉できる

---

## 本Lessonのまとめ

- 再利用可能なコンポーネントはデザインの統一性と保守性を向上させる
- `CustomButton` / `CustomCard` / `CustomModal` の3つのパーツコンポーネントを作成する
- 次のLessonでStorybookでバリエーションを充実させます
