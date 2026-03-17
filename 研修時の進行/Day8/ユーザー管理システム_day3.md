# ユーザー管理システム_day3

## タスクの確認

1. ボタンコンポーネントの実装
    1. コンポーネントの作成
    2. ストーリーブックの作成
    3. 画面改修（DeletedUserButton）
2. カードコンポーネントの実装
    1. コンポーネントの作成
    2. ストーリーブックの作成
    3. 画面改修（userCard）
3. モーダルコンポーネントの実装
    1. コンポーネントの作成
    2. ストーリーブックの作成
    3. 画面改修（DeletedUserButton）※タスク1で既に置き換わっている
4. ストーリーの追加実装
5. アプリケーションへの統合
    1. コンポーネントの反映
    2. UI/UXを向上させる

本タスクの1~3は、コンポーネント作成とストーリーブック作成がセットの内容となっています。
TODOとして各タスクで実装すべき内容を記載していますが、中にはそのままだと読み解くことが難しい内容も含まれています。

これまでと同様に言語化と見積もりを行ってから進めてもらうのですが、
**必ずコンポーネントの作成とストーリーブックの作成の内容を合わせて確認してください**。
コンポーネントを作成するために必要なヒントがストーリーブック側に記載されている場合もあるため、それらの情報を確認したうえで順番に進めていきましょう。

## タスク1：ボタンコンポーネント

### 1-1：ボタンコンポーネントの作成

多様なスタイルや機能を持つカスタムボタンコンポーネントを作成する

- 対象ファイル
    
    `components/parts/CustomButton.tsx`
    

下記のコードをコピーし、TODOと記載されている箇所を修正しなさい。

- 仕様
    - MUIを利用してレイアウトを整えていること

必要ファイルはプロジェクト内の「必要ファイル」フォルダにあります。

### 1-2：ストーリーブック作成

`CustomButton` コンポーネントのストーリーを作成します

- 対象ファイル
    
    `components/parts/CustomButton.stories.tsx`
    

下記のコードをコピーし、TODOと記載されている箇所を修正しなさい。

```tsx
// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/Parts/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
};

// TODO: メタデータのエクスポート

// TODO: ストーリーの定義

export const Primary: Story = {
  args: {
    variantType: 'primary',
    children: 'Primary Button',
  },
};

// TODO: 上記サンプルを参考に[Secondary][Danger]を設定する
```

### 1-3：DeletedUserButtonの改修

Day2で実装した`UserCard`コンポーネント内の削除ボタンをCustomButtonに差し替える

- 対象ファイル
`components/UserCard.tsx`

- 仕様
    - `UserCard` コンポーネント内の削除ボタンが `CustomButton` になっている
    - ボタンの仕様はDay2で実装した`DeletedUserButton`と同じ

<aside>
💡

ヒント

`DeleteUserButton`は削除専用のボタンだったのに対して、`CustomButton`は様々な役割を持つことが出来るボタンです。

そのため、`DeleteUserButton`に実装していた削除処理も適切なコンポーネントに移動させる必要があります。

</aside>

## タスク2：カードコンポーネント

### 2-1：カードコンポーネントの作成

情報を表示するための再利用可能なカードコンポーネントを作成します

- 対象ファイル
    
    `components/parts/CustomCard.tsx`
    

下記のコードをコピーし、TODOと記載されている箇所を修正しなさい。

- 仕様
    - `CustomCardProps` インターフェース
        
        ```tsx
        title: string;
        description: React.ReactNode;
        actions?: React.ReactNode;
        ```
        
    - MUIを利用してレイアウトを整えていること

必要ファイルはプロジェクト内の「必要ファイル」フォルダにあります。

### 2-2：ストーリーブック作成

`CustomCard` コンポーネントのストーリーを作成します

- 対象ファイル
    
    `components/parts/CustomCard.stories.tsx`
    

下記のコードをコピーし、TODOと記載されている箇所を修正しなさい。

- 仕様
    - MUIを利用してレイアウトを整えていること

必要ファイルはプロジェクト内の「必要ファイル」フォルダにあります。

### 2-3：UserCardの改修

`UserCard`コンポーネントをCustomCardに差し替える

- 対象ファイル
`components/UserList.tsx`

- 仕様
    - `UserList` コンポーネント内のデータ表示部分が `UserCard`から`CustomCard` になっている
    - 仕様は`UserCard`と同じ

<aside>
💡

ヒント

- タスク1同様に、タスク2も様々なカスタマイズが可能なコンポーネントに置き換えていきます。
そのため、`UserCard`に実装されていた処理というのは適切なコンポーネントに移動させないと`UserCard`と同様の挙動は示しません。
- 編集や詳細ボタンは`CustomButton`に置き換える必要はないです。
</aside>

## タスク3：モーダルコンポーネント

### 3-1：モーダルコンポーネントの作成

ダイアログやモーダルを表示するための再利用可能なコンポーネントを作成します

- 対象ファイル
    
    `components/parts/CustomModal.tsx`
    

下記のコードをコピーし、TODOと記載されている箇所を修正しなさい。

- 仕様
    - インターフェースを定義している
        
        ```tsx
        open: boolean;
        title: string;
        content: string;
        onClose: () => void;
        onConfirm?: () => void;
        ```
        
    - MUIを利用してレイアウトを整えている

必要ファイルはプロジェクト内の「必要ファイル」フォルダにあります。

### 3-2：ストーリーブック作成

`CustomModal` コンポーネントのストーリーを作成します

- 対象ファイル
    
    `components/parts/CustomModal.stories.tsx`
    

下記のコードをコピーし、TODOと記載されている箇所を修正しなさい。

必要ファイルはプロジェクト内の「必要ファイル」フォルダにあります。

### 3-3：DeletedUserButtonの改修

`DeleteUserButton.tsx`でisConfirmで表示されるモーダルを`CustomModal`に差し替える

ただし、`DeleteUserButton` はタスク1-3で`CustomButton`に置き換わっているので便宜上、`DeleteUserButton` としているが実態は`CustomButton` であることは留意すること

- 対象ファイル
components/UserList.tsx

- 仕様
    - Day2で実装した`DeleteUserButton`と同じ挙動（＝タスク1の`CustomButton`）

必要ファイルはプロジェクト内の「必要ファイル」フォルダにあります。

## タスク4：ストーリーを追加して試してみよう

上記で実装した各コンポーネントの新しいストーリーを追加して、ドキュメントを充実化させてみましょう。

細かい指定はありませんので、実際にみなさんが実装したコンポーネントを使う人がいると想定し、こんな風にコードを書けばこれが実現できますよ！とわかるようにバリエーションを増やしてみましょう。

また、ストーリーを追加するにあたって各カスタムコンポーネントの内容を修正する必要が出てくる場面もあるかと思います。
そういった場合は講師に相談し、方針を決めたうえで作業を進めるようにしてください。

本タスクについては言語化は不要とします。
作業時間の見積もりのみ報告するようにしてください。

## タスク5：アプリケーションへの統合

ここまでのタスクで追加したコンポーネントを活用して、ユーザー管理システムのUIを向上させてみましょう。

「コンポーネントの反映」については言語化は不要です。
対象箇所の確認と見積もりの報告のみで問題ありません。

「UI/UXを向上させる」については言語化を行ってください。

### 5-1：コンポーネントの反映

カードやボタンを差し替えたり、削除にモーダルを表示させたりしてカスタムボタンコンポーネントを使ってみましょう。

### 5-2：UI/UXを向上させる

ユーザー一覧画面内に以下の機能を追加してみましょう。

- ユーザー検索機能
    - ID検索と役職検索に対応
    - フリー検索ではなくプルダウン形式とする
- ユーザー並び替え機能
    - IDの昇順、降順でそれぞれ並び替え
    - 並び替え用のタグは任意の形式とする