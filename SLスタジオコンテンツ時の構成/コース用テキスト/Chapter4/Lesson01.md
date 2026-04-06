# Lesson01：全体アーキテクチャの理解

## はじめに

これまでのChapterでは、外部の公開APIからデータを取得して画面に表示しました。

しかし、実際のWebアプリケーションでは **自分たちでAPIを作り、自分たちのデータベースとやり取りする** のが一般的です。

このChapterでは、ローカルのPostgreSQLと連携し、ReactからAPIを通じて **CRUD（登録 / 取得 / 更新 / 削除）** を実装します。

---

## フロントエンド → API → DB のアーキテクチャ

実際のWebアプリケーションは、以下の3層構造になっています。

```
┌──────────────┐      HTTP       ┌──────────────┐      SQL       ┌──────────────┐
│              │   リクエスト     │              │    クエリ      │              │
│    React     │ ─────────────→  │  Node.js /   │ ────────────→  │  PostgreSQL  │
│ （フロント）  │                 │  Express API │                │   （DB）     │
│              │ ←─────────────  │ （バック）    │ ←────────────  │              │
│              │   レスポンス     │              │    結果        │              │
└──────────────┘                 └──────────────┘                └──────────────┘
```

- **React（フロントエンド）**：ユーザーが操作する画面。`fetch` を使ってAPIにリクエストを送る
- **Node.js / Express API（バックエンド）**：リクエストを受け取り、データベースに対してSQL文を実行する
- **PostgreSQL（データベース）**：データを保存・管理する場所

データベースコースでは pgAdmin を使って **SQL文でDBを直接操作** しましたが、実際のWebアプリケーションではフロントエンドから直接DBにアクセスすることはありません。必ず **APIサーバーを経由** します。

---

## CRUD処理の全体像

CRUD処理とは、データ操作の基本4パターンです。

| 操作 | 英語 | HTTPメソッド | SQL文 | 具体例 |
|---|---|---|---|---|
| 登録 | Create | `POST` | `INSERT` | ユーザーを新規登録する |
| 取得 | Read | `GET` | `SELECT` | ユーザー一覧を表示する |
| 更新 | Update | `PUT` / `PATCH` | `UPDATE` | ユーザー情報を編集する |
| 削除 | Delete | `DELETE`（※） | `UPDATE`（※） | ユーザーを削除する |

> **※ 削除について：** 実務では `DELETE` メソッドで物理的にデータを消すのではなく、`deleted` フラグを `true` に更新する **論理削除** が一般的です。本コースでも論理削除を採用します。

---

## ローカルDB接続の準備

本コースでは、データベースコースで構築済みのローカルPostgreSQLを使用します。

### 1. PostgreSQLが起動していることを確認

pgAdminを開いて、ローカルのPostgreSQLサーバーに接続できることを確認してください。

### 2. 演習用のテーブルを作成

pgAdminのクエリツールで以下のSQLを実行し、演習用のテーブルを作成します。

```sql
CREATE TABLE sample_users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER,
  deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 初期データの投入
INSERT INTO sample_users (name, age) VALUES ('山田 太郎', 25);
INSERT INTO sample_users (name, age) VALUES ('佐藤 花子', 30);
INSERT INTO sample_users (name, age) VALUES ('田中 一郎', 28);
```

### 3. データが登録されたことを確認

```sql
SELECT * FROM sample_users;
```

3件のデータが表示されればOKです。

---

## プロジェクトの作成と環境構築

### 1. Reactプロジェクトの作成

```bash
npx create-vite@latest user-management --template react-ts
cd user-management
npm install
```

### 2. バックエンドAPIの作成

フロントエンドとDBの間を繋ぐAPIサーバーを作成します。プロジェクトのルートに `server` ディレクトリを作成し、以下のパッケージをインストールします。

```bash
mkdir server
cd server
npm init -y
npm install express pg cors dotenv
```

### 3. 環境変数の設定

`server` ディレクトリに `.env` ファイルを作成し、DB接続情報を設定します。

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_database
```

> `.env.example` として接続情報のテンプレートを git にコミットし、実際の `.env` は `.gitignore` で除外するのが実務のベストプラクティスです。

### 4. APIサーバーの基本構成

`server/index.js` に以下の内容を記述します。

```javascript
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// この後のLessonで各種APIエンドポイントを追加していきます

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`APIサーバーが起動しました: http://localhost:${PORT}`);
});
```

### 5. 動作確認

```bash
node index.js
```

「APIサーバーが起動しました」と表示されれば成功です。

---

## 本Lessonのまとめ

- Webアプリケーションは **React（フロント） → API（バック） → PostgreSQL（DB）** の3層構造
- CRUD処理はデータ操作の基本4パターン（Create / Read / Update / Delete）
- HTTPメソッドとSQL文の対応関係を理解する
- ローカルPostgreSQLに演習用テーブルを作成し、バックエンドAPIサーバーの基盤を構築した
- 次のLessonから、各CRUD操作を1つずつ実装していきます
