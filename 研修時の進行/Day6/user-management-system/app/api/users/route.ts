import pool from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

// ユーザー一覧の取得
export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM users ORDER BY id ASC"
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "ユーザーの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// ユーザーの新規登録
export async function POST(request: NextRequest) {
  try {
    const { name, email, role } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "名前とメールアドレスは必須です" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO users (name, email, role) VALUES ($1, $2, $3) RETURNING *",
      [name, email, role || "一般ユーザー"]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "ユーザーの登録に失敗しました" },
      { status: 500 }
    );
  }
}
