# Lesson01：最終課題の仕様確認とプロジェクト準備

## はじめに

Chapter7〜9では、**ユーザー管理システム**をNext.js + Storybookの環境で構築します。

これまで学んだAPI通信・CRUD処理・コンポーネント設計・開発プロセスの全てを組み合わせた最終課題です。

---

## プロジェクトの準備

### 1. ZIPファイルのダウンロードと展開

配布されたZIPファイル（`user-management-system.zip`）をダウンロードし、展開してください。

### 2. 自分のGitHubリポジトリとして初期化

```bash
cd user-management-system
git init
git add .
git commit -m "初期コミット"
```

GitHubで新規リポジトリを作成し、リモートとして登録します。

```bash
git remote add origin https://github.com/あなたのアカウント/user-management-system.git
git push -u origin main
```

### 3. 依存関係のインストール

```bash
npm install
```

### 4. 動作確認

```bash
npm run dev        # アプリケーションの起動
npm run storybook  # Storybookの起動（別ターミナル）
```

---

## プロジェクトの構造確認（コードリーディング）

### 確認すべきポイント

1. **トップページ**の内容はどこに記載されているか → `app/page.tsx`
2. **ユーザー一覧ページ**はどこか → `app/users/page.tsx`
3. **ユーザー編集ページ**はどこか → `app/users/[id]/edit/page.tsx`
4. **既存のコンポーネント**にはどんなものがあるか → `components/` を確認
5. **API通信の処理**はどこに記述されているか → `utils/api.ts` を確認

---

## Chapter7〜9で実装する機能の全体像

| Chapter | 実装する機能 |
|---|---|
| Chapter7 | 新規登録機能・編集機能 |
| Chapter8 | 一覧機能・削除機能・詳細機能 |
| Chapter9 | 再利用可能コンポーネント・UI改善・技術レポート |

---

## Gitのブランチ運用ルール

タスクごとにブランチを作成して作業します。

```
main
  └ develop
      └ Ch7_task1-1（新規登録コンポーネント）
          └ Ch7_task1-2（ストーリーブック）
              └ Ch7_task1-3（画面作成）
                  ...
```

1. まず `develop` ブランチを作成
2. タスクごとに `ChX_taskY` ブランチを作成
3. 完了したら `develop` にマージ
4. 全て完了したら `main` にマージ

---

## DB接続設定

環境変数ファイル（`.env`）にPostgreSQLの接続情報を設定してください。

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_database
```

### 演習用テーブルの作成

```sql
CREATE TABLE dev_users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO dev_users (name, email, role) VALUES
  ('山田 太郎', 'taro@example.com', 'admin');
```

---

## 本Lessonのまとめ

- 最終課題のプロジェクトを準備し、GitHubリポジトリとして管理する
- コードリーディングでプロジェクト構造を把握した
- Chapter7〜9の全体像とブランチ運用ルールを理解した
- 次のLessonでは、新規登録・編集機能の段取りを組みます
