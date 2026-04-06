# Lesson01：卒業試験に向けた総復習ポイント

## はじめに

お疲れ様でした！Chapter1〜9まで、長い学習を完走しました。

最後のChapterでは、コース全体を振り返り、卒業試験に備えます。

---

## コース全体の学習マップ

| Chapter | テーマ | 学んだこと |
|---|---|---|
| 1 | コースガイダンス | 開発の段取り、差分確認の習慣 |
| 2 | Web APIの基礎 | HTTP / CRUD / ステータスコード / Thunder Client |
| 3 | ReactからのAPI呼び出し | fetch / useEffect / useState / DevTools |
| 4 | React + PostgreSQL CRUD | Express API / 3層アーキテクチャ / CRUD実装 |
| 5 | ダッシュボード開発 | コードリーディング / Recharts / 段取り→実装→整理 |
| 6 | Next.js & Storybook入門 | App Router / ファイルベースルーティング / ストーリー |
| 7 | 新規登録・編集機能 | コンポーネント → ストーリー → ページの開発フロー |
| 8 | 一覧・詳細・削除機能 | 動的ルーティング / 論理削除 / 再レンダリング |
| 9 | コンポーネント設計・仕上げ | CustomButton / CustomCard / CustomModal / 技術レポート |

---

## 重要キーワードの確認

### Web API・通信

- **HTTPメソッド**：GET / POST / PUT(PATCH) / DELETE
- **CRUD**：Create / Read / Update / Delete
- **ステータスコード**：200, 201, 400, 401, 404, 500
- **JSON**：APIでやり取りされるデータ形式
- **エンドポイント**：APIのURL
- **クエリパラメータ**：`?key=value` 形式のURLパラメータ

### React

- **コンポーネント**：UIの部品
- **useState**：stateの管理
- **useEffect**：副作用の処理（API呼び出し等）
- **Props**：親コンポーネントから子コンポーネントにデータを渡す仕組み
- **fetch**：APIリクエストを送る関数

### Next.js

- **App Router**：ファイルベースルーティング
- **page.tsx**：ページコンポーネント
- **layout.tsx**：共通レイアウト
- **動的ルーティング**：`[id]` フォルダでURLパラメータを受け取る
- **`'use client'`**：クライアントコンポーネントの宣言
- **useRouter**：プログラム的な画面遷移

### Storybook

- **ストーリー**：コンポーネントの表示パターン
- **Meta**：ストーリーのメタデータ定義
- **StoryObj**：ストーリーの型
- **args**：コンポーネントに渡すprops

### データベース

- **PostgreSQL**：リレーショナルデータベース
- **SQL**：データベースを操作する言語
- **INSERT / SELECT / UPDATE / DELETE**：CRUD対応のSQL文
- **論理削除**：`deleted = true` に更新する削除方法
- **物理削除**：`DELETE` 文による完全削除

### Git

- **ブランチ**：作業を分岐させる仕組み
- **コミット**：変更を記録する
- **プッシュ**：リモートリポジトリに反映する
- **マージ**：ブランチを統合する

---

## 開発プロセスの復習

```
① 段取り   ： タスクの確認 → 分解 → 実装順序の整理
      ↓
② 実装     ： コンポーネント → ストーリー → ページ
      ↓
③ 動作確認 ： DevTools / ネットワーク確認 / Storybook
      ↓
④ 整理     ： 差分確認 → 不要コード除去 → コミット
```

---

## 本Lessonのまとめ

- コース全体で学んだ技術と概念を整理した
- 次のLessonの卒業試験に備えて重要ポイントを確認した
