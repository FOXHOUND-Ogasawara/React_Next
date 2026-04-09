-- テーブルの作成
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT '一般ユーザー',
    deleted BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- テストデータの挿入
INSERT INTO users (name, email, role) VALUES
    ('山田太郎', 'yamada@gmail.com', 'admin'),
    ('佐藤花子', 'sato@fox-hound.co.jp', 'guest'),
    ('鈴木一郎', 'suzuki@gmail.com', '一般ユーザー')
ON CONFLICT (email) DO NOTHING;
