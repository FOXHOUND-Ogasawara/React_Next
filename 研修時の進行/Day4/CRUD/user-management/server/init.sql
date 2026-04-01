-- テーブルの作成
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- テストデータの挿入
INSERT INTO users (name, email) VALUES
    ('山田 太郎', 'yamada@example.com'),
    ('佐藤 花子', 'sato@example.com'),
    ('鈴木 一郎', 'suzuki@example.com')
ON CONFLICT (email) DO NOTHING;
