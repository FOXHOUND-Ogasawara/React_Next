# Lesson02：【課題】Thunder ClientによるAPI疎通確認

## 課題の概要

このLessonでは、前のLessonで学んだWeb APIの知識を使って、**Thunder Client** を利用しAPIの疎通確認を行います。

Thunder Clientは、VSCode上で直接APIリクエストを送信できる拡張機能です。プログラムを書かずにリクエストとレスポンスを確認できるため、**APIの動作確認（疎通確認）** に非常に便利です。

---

## Thunder Client のインストール

1. VSCodeを開く
2. 左側の拡張機能アイコン（四角のマーク）をクリック
3. 検索バーに「Thunder Client」と入力
4. 「Thunder Client」をインストール
5. インストール後、左側サイドバーに雷マークのアイコンが表示される

---

## Thunder Client の基本操作

1. 左側サイドバーの **雷マーク** をクリック
2. 「New Request」をクリック
3. 以下を設定してリクエストを送信する
   - **HTTPメソッド**：GET / POST などを選択
   - **URL**：リクエスト先のURLを入力
   - **Headers**：必要なヘッダー情報を設定
   - **Body**：POSTの場合にリクエストデータを設定
4. 「Send」ボタンをクリック
5. 右側の **Response** エリアにレスポンスが表示される

---

## 課題1：The Cat API からデータを取得しよう

### 手順

1. Thunder Clientで「New Request」を作成する
2. 以下の設定でリクエストを送信する

| 項目 | 設定値 |
|---|---|
| HTTPメソッド | `GET` |
| URL | `https://api.thecatapi.com/v1/images/search` |

3. 「Send」ボタンをクリックする

### レスポンスの確認

以下の内容をレスポンスから読み取って確認してください。

- ステータスコードは何か？
- レスポンスのJSON構造はどうなっているか？
- 画像のURLはどのキーに格納されているか？

> **メモ：** The Cat APIはAPIキー無しでもGETリクエストが可能です。

---

## 課題2：OpenWeatherMap API から天気情報を取得しよう

### 手順

1. Thunder Clientで「New Request」を作成する
2. 以下の設定でリクエストを送信する

| 項目 | 設定値 |
|---|---|
| HTTPメソッド | `GET` |
| URL | `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&lang=ja&appid=YOUR_API_KEY` |

> **注意：** `YOUR_API_KEY` の部分を、Lesson01で取得した自分のAPIキーに置き換えてください。

3. 「Send」ボタンをクリックする

### レスポンスの確認

以下の内容をレスポンスから読み取って回答してください。

---

### 【回答課題】

以下の質問にレスポンスの内容を確認して回答してください。

1. **ステータスコード**は何ですか？
2. レスポンスJSON内で、**天気の説明文**はどのキーに格納されていますか？
3. レスポンスJSON内で、**気温（temperature）** はどのキーに格納されていますか？
4. レスポンスJSON内で、**天気アイコンのコード** はどのキーに格納されていますか？
5. クエリパラメータの `units=metric` を削除して再度リクエストした場合、気温の値はどう変わりますか？その理由は何ですか？

---

## 課題3：別の都市の天気を取得してみよう

クエリパラメータの `q=Tokyo` を別の都市名に変更して、天気情報を取得してみましょう。

- 例：`q=Osaka`、`q=London`、`q=NewYork`

### 【回答課題】

6. 選んだ都市名と、その都市の**現在の気温**を回答してください。
7. 存在しない都市名（例：`q=XXXXXX`）を指定した場合、**ステータスコード**は何になりますか？

---

## 発展課題（任意）

APIキーをHeaderに設定してThe Cat APIを叩いてみましょう。

| 項目 | 設定値 |
|---|---|
| HTTPメソッド | `GET` |
| URL | `https://api.thecatapi.com/v1/images/search?limit=5` |
| Header | `x-api-key: YOUR_CAT_API_KEY` |

- `limit=5` を指定すると、5件の猫画像データが返ってきます
- APIキーをHeaderに設定するとリクエスト上限が増えます

---

## 本Lessonのまとめ

- **Thunder Client** を使ってプログラムを書かずにAPIの疎通確認ができる
- レスポンスから **ステータスコード・JSON構造・必要なデータの場所** を読み取るスキルが重要
- APIドキュメントとレスポンスの対応関係を確認することで、後の実装がスムーズになる
- 次のChapterでは、ReactからこれらのAPIを呼び出す実装に挑戦します
