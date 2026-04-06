# Lesson02：Storybookでのバリエーション定義とドキュメント化

## はじめに

Lesson01で作成したカスタムコンポーネントに対して、Storybookで **さまざまなバリエーション** のストーリーを追加し、コンポーネントのドキュメントを充実化させます。

---

## ストーリーの追加ルール

- 各コンポーネントに対して、**実際にプロジェクトで使うパターン**をストーリーとして追加する
- 「このプロジェクトのコンポーネントを使う人」が見て、使い方がわかるようにする

---

## CustomButtonのストーリー追加例

```tsx
// アイコン付きボタン
export const WithIcon: Story = {
  args: {
    variantType: 'primary',
    children: '保存',
    startIcon: <SaveIcon />,
  },
};

// 非活性ボタン
export const Disabled: Story = {
  args: {
    variantType: 'primary',
    children: '登録',
    disabled: true,
  },
};
```

---

## CustomCardのストーリー追加例

```tsx
// アクション付きカード
export const WithActions: Story = {
  args: {
    title: 'ユーザー情報',
    description: <p>admin - taro@example.com</p>,
    actions: (
      <>
        <button>編集</button>
        <button>削除</button>
      </>
    ),
  },
};
```

---

## CustomModalのストーリー追加例

```tsx
// 削除確認モーダル
export const DeleteConfirm: Story = {
  args: {
    open: true,
    title: '削除確認',
    content: '本当にこのユーザーを削除しますか？この操作は元に戻せません。',
    onConfirm: () => alert('削除実行'),
    onClose: () => alert('キャンセル'),
  },
};
```

---

## 課題

上記を参考に、各カスタムコンポーネントに **2つ以上の新しいストーリー** を追加してください。

どのようなバリエーションを追加するかは自分で考えて決めてください。

---

## 本Lessonのまとめ

- Storybookのストーリーを追加することでコンポーネントのドキュメントが充実する
- コンポーネントの利用者が使い方を理解できるバリエーションを考える力が重要
- 次のLessonではカスタムコンポーネントをアプリケーション全体に統合します
