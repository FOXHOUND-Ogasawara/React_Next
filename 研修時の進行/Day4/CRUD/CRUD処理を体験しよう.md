# CRUD処理を体験しよう

ここまでの研修では、WEBの仕組みやWEBサービスについて、WEB APIと学んできましたね。

では、そろそろ座学だけではなくプログラムを書いていくとしましょう。

多くのWEBサービスは様々なデータを取り扱っていますよね。
今回はここまでの知識を活用しつつ、データの操作方法を学習してもらいます。

## API Testerを利用して体験する

以下のAPI情報を参考にしてデータの登録と取得を行ってください。
プロジェクト名とAPI Keyは別途Slackにて共有したものを使いましょう。

### データを登録してみよう

- URL： `https://YOUR_PROJECT_NAME/rest/v1/sample_users`
- HTTPメソッド： `POST`
- リクエストヘッダー：
    
    ```json
    {
    	"Content-Type": "application/json",
    	"apikey": "YOUR_API_KEY",
    	"Prefer": "return=representation"
    }
    ```
    
- リクエストデータ：
    
    ```json
    {
    	"name": "USER_NAME",
    	"age": USER_AGE
    }
    ```
    
- レスポンス例：
    
    ```json
    {
    	{
    		id: 1,
    		name: "USER_NAME",
    		created_at: "2024-09-24T11:00:00.242365+00:00",
    		age: USER_AGE
    	}
    }
    ```
    

### データを取得してみよう

- URL：`https://YOUR_PROJECT_NAME/rest/v1/sample_users`
- HTTPメソッド： `GET`
- リクエストヘッダー：
    
    ```json
    {
    	"apikey": "YOUR_API_KEY"
    }
    ```
    
- レスポンス例：
    
    ```json
    {
    	{
    		id: 1,
    		name: "user01",
    		created_at: "2024-09-24T11:00:00.242365+00:00",
    		age: 20
    	},
    	{
    		id: 2,
    		name: "user02",
    		created_at: "2024-09-25T11:00:00.242365+00:00",
    		age: 22
    	},
    	{
    		id: 3,
    		name: "user03",
    		created_at: "2024-09-26T11:00:00.242365+00:00",
    		age: 24
    	},
    }
    ```
    

先ほど自分が登録した情報や他のメンバーが登録した情報が確認できればOKです。

## Reactを利用してユーザー情報を扱える画面を作ろう

データの登録と取得が確認できたので、次はReactを使ってプログラム上からデータの通信を行ってみましょう。

先ほどの登録と取得に加えて、データの更新と削除についても体験してもらいます。

この、「登録」「取得」「更新」「削除」という4つのデータ操作はWEBサービスにおける基本とされていて、英語の頭文字を取って CRUD なんて呼ばれてます。

キーワードも含めて知らないと恥ずかしい思いをすることになるのでしっかりと覚えておきましょう。

Reactコースの内容やMUIの公式ドキュメントを見ながらオリジナルの画面を作成してください。

### 機能などの基本仕様

【実装すべき機能】

- タスク1:ユーザー情報の一覧
- タスク2:新規ユーザー登録
- タスク3:ユーザー情報の更新
- タスク4:ユーザー削除

【フォルダの構成】

```tsx
src
 ├ components
 │  ├ UserList.tsx
 │  └ UserEdit.tsx
 └ App.tsx
```

【URLの構成】

- `localhost:xxxx/`
    - ユーザー一覧と新規登録フォームが表示されるページ
- `localhost:xxxx/edit/[id]`
    - idに応じたユーザー情報更新フォームと削除ボタンが表示されるページ

### 今回利用するWEB API情報

- URL：`https://YOUR_PROJECT_NAME/rest/v1/sample_users`
- API Key：Slackにて共有
- 取り扱えるユーザー情報
    - id
    - name
    - age
    - deleted

### 言語化のサンプル

- 観点
    - フォーマット通りに記載されている
    - タスクの見積もりが記載されている
        - 作業時間と完了時間が別々に記載されている
    - タスク内でやることを明確にしている
        - ファイル名や何をするのか
        - 表示に関する内容や実装手順など
    - 不明点を洗い出している
        - 報告前に質問や確認した内容も記載すること
- サンプル
    
    ```tsx
    【概要】
    タスク１：ユーザー情報の一覧
    
    【期限】
    20xx年xx月xx日 xx:xxまで本タスクの想定時間
    
    【タスクの作業時間】
    作業時間：45分
    xx月xx日 xx:xx完了予定
    
    【タスクの詳細】
    ・確認事項の内容を質問し事前確認を行う
    ・新規プロジェクトの作成
    　　プロジェクト名は「crud-sample」とする
    ・必要なライブラリをインストール
    ・ユーザー情報の一覧機能作成
    　・UserList.tsxに記載
    　・fetchを利用したデータ取得処理
    　・mapを利用してユーザー情報を一覧表示する
    　　・id,name,ageを表示する
    ・App.tsxにルーティングを追記する[確認済み]
    ・動作確認
    
    【確認事項】
    ・各種画面構成についてを確認する
    　　機能ごとにページが必要なのか
    　　⇒一覧と新規登録、編集と削除の2ページを想定[確認済み]
    　　遷移するメニューは必要なのか
    ・出力するユーザー情報は以下で問題ないか確認する
    　　id, name, age
    ```
    

### ポイント

- ユーザー情報を削除する機能はDELETEではなく、UPDATEにて削除フラグを利用すること。
削除フラグが `true` の場合は一覧に表示されないようにすること。

- ドキュメントを確認しながらチャレンジしてみましょう！
`fetch` を利用した通信時にもリクエストヘッダーは必要となります。
公式ドキュメント：[https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
    
    ```tsx
    // GETリクエストの例
    fetch("URL", {
        method: 'GET',
        headers: {
          'apikey': APIKEY,
        }
      })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    ```
    
    `fetch` にはURLを渡すことで対象となるAPIを指定することができますが、
    二つ目の引数に **リクエスト情報をオブジェクト形式** で渡すことで追加の情報を指定可能です。
    

### 取得（Read）

- URL：`https://YOUR_PROJECT_NAME/rest/v1/sample_users`
    - 絞り込み： `?id=eq.ID`
- HTTPメソッド： `GET`
- ヘッダー：
    
    ```json
    {
    	"Content-Type": "application/json",
    	"apikey": "YOUR_API_KEY",
    	"Prefer": "return=representation"
    }
    ```
    
- レスポンス例（成功時）：
    
    ```json
    {
    	{
    		"id": 1,
    		"name": "John Doe",
    		"age": 30
    	},
    	{
    		"id": 2,
    		"name": "Jane Doe",
    		"age": 25
    	}
    }
    ```
    

### 登録（Create）

- URL：`https://YOUR_PROJECT_NAME/rest/v1/sample_users`
- HTTPメソッド： `POST`
- ヘッダー：
    
    ```json
    {
    	"Content-Type": "application/json",
    	"apikey": "YOUR_API_KEY",
    	"Prefer": "return=representation"
    }
    ```
    
- リクエストデータ：
    
    ```json
    {
    	"name": "John Doe",
    	"age": 30
    }
    ```
    
- レスポンス例（成功時）：
    
    ```json
    {
    	"id": 1,
    	"name": "John Doe",
    	"age": 30
    }
    ```
    
- ステータスコード： `201 Created`

### 更新

- URL：`https://YOUR_PROJECT_NAME/rest/v1/sample_users?id=eq.ID`
- HTTPメソッド： `PATCH`
- ヘッダー：
    
    ```json
    {
    	"Content-Type": "application/json",
    	"apikey": "YOUR_API_KEY",
    	"Prefer": "return=representation"
    }
    ```
    
- リクエスト例：
    
    ```json
    {
      "name": "John Doe"
    }
    ```
    
- レスポンス例（成功時）：
    
    ```json
    {
    	"name": "John Doe"
    }
    ```
    

<aside>
💡

ポイント

更新が完了した場合は「一覧画面」に切り替わる仕様にしてみましょう！
レスポンスの情報は画面に表示する必要がないため、コンソールにて確認が済んだら以下の実装を組み込んでみましょう。

// useStateなどを定義したあたりに以下を追加
const navigate = useNavigate();

// then()のコールバックとして以下を追加
navigate(’/’);

</aside>

### 削除

- URL：`https://YOUR_PROJECT_NAME/rest/v1/sample_users?id=eq.ID`
- HTTPメソッド： `PATCH`
- ヘッダー：
    
    ```json
    {
    	"Content-Type": "application/json",
    	"apikey": "YOUR_API_KEY",
    	"Prefer": "return=representation"
    }
    ```
    
- リクエスト例：
    
    ```jsx
    {
    	"deleted": true
    }
    ```
    
- レスポンス例（成功時）：
    - ステータスコード： `204 No Content`

<aside>
💡

ポイント

更新処理と同様に「一覧画面」に切り替わるようにしてみましょう！

</aside>

### 追加実装

- 削除済みのユーザーが表示されないように修正してみよう
    - ヒント：クエリパラメータに `KEY=eq.VALUE` を追加すると絞り込みが可能
- ソート用のプルダウンを追加して並び替え機能を追加してみよう
    - ヒント：クエリパラメータに `order=KEY.asc` or `order=KEY.desc` でソートが可能