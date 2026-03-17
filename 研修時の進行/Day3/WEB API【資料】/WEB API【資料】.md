# WEB API【資料】

## WEB APIとは

WEBエンジニアの界隈ではWEBを付けずにAPIと呼ぶこともあるのですが、簡単に言ってしまうとインターネット上に公開されている便利なメソッドのようなものです。

いくつかのルールはありますが、URLにアクセスすることで簡単にデータを取得したりできるため、よく利用されます。
Reactコースの学習内容にも、fetchを利用してURLにアクセスしたことがあるかと思いますが、あれもWEB APIを叩いてデータを取得していたわけですね。

今回の座学では、世の中にたくさん存在しているWEB APIをどうやって使うのか？という部分について学習していきます。

WEBエンジニアとして仕事をしてもらうとなると、このWEB APIの存在は必ず登場します。
その時に備えてしっかりと身に付けていきましょう。

ちなみに、WEB APIは人が作ったものなので、逆に考えると皆さんも作ることが可能です。
もしかすると実務ではAPIを使うのではなく、作る立場になる可能性も全然あるので、そこも覚えておきましょう。

## WEB APIを体験してみる

お題としては、下記のWEB APIを利用して進めていきます。

- 猫の画像が取得できるAPI
    
    https://thecatapi.com/
    
- 天気情報が取得できるAPI
    
    https://openweathermap.org/api
    

上記サイトにアクセスし、アカウントの発行を行いましょう。

アカウントの発行が終わったら、公式のドキュメントがあるので内容を確認してみましょう。

### The Cat API

公式ドキュメント

[https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW)

Quick startの最初にあるリンクをクリックするとすぐにJSONとしてデータを確認することも可能です。

![image.png](image%2015.png)

### Weather API

公式ドキュメント

[https://openweathermap.org/current#geocoding](https://openweathermap.org/current#geocoding)

こちもサンプルが記載されていますね。

![image.png](image%2016.png)

※API Keyは発行してから利用可能になるまでに、10 ~ 120分ほどのタイムラグが発生します

### ドキュメントの確認ポイント

まずは何ができるのかを確認しましょう。

今回利用するAPIはそれぞれ、猫の画像を取得できるものと、天気情報を取得できるものとなります。

そのため、APIにリクエストすると、特定のデータがレスポンスとして戻ってくることになります。

確認する必要がある項目

- URL（エンドポイント）
- HTTPメソッド
- 送信する情報
    - リクエストヘッダー
    - リクエストボディ
    - クエリパラメータ

The Cat APIの場合、トップページに非常にわかりやすい例が載っています。

```jsx
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch(
	"https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
	requestOptions
)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));        
```

この記述内容は、プログラムになっていますね。
※ `fetch` 内のURLは `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1` 

これをここまでに学習した際に見た内容に変化させると…

```jsx
GET https://api.thecatapi.com/v1/images/search

// ヘッダー
Content-Type: application/json
x-api-key: DEMO-API-KEY

redirect: follow

// ボディ
{
	"size": "med",
	"mime_types": "jpg",
	"format": "json",
	"has_breeds": true,
	"order": "RANDOM",
	"page": 0,
	"limit": 1,
}
```

こんな感じで情報を送ることになります。

注意しなければいけない点として、GETで通信を送る場合は、リクエストボディではなくURLに直接追加する必要がある点です。

`?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1` の部分ですね。

こういったGETリクエスト時に付ける文字を「クエリパラメータ」と呼び、URLの後ろに `?` から始めるのがルールとなっています。
また、 `key=value` の形式でクォーテーションなども付けずに記述し、複数ある場合は `&` で繋げる書き方となります。

レスポンスについてもJSON形式で記載されている箇所があるので、該当箇所を探してみましょう！

### API Testerを使ってAPIを叩いてみよう

API Testerは、Chromeの拡張機能で、簡単にWEB APIを実行することができる便利なツールです。

以下のURLから追加してみましょう。

[https://chromewebstore.google.com/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=ja&pli=1](https://chromewebstore.google.com/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=ja&pli=1)

拡張機能を追加したら早速開いてみましょう。

使い方は非常に簡単です。

![image.png](image%2017.png)

HTTPメソッドとURLを指定し、HEADER欄に必要な情報を入力したり、BODYに送信するデータを入力するだけです。

あとは「Send」ボタンをクリックすることでResponseを確認することが可能です。

## Reactを使ってAPIを利用する

今回試した二つのWEB APIを利用して、Reactからデータを取得してみましょう。

取得できるのが確認出来たら、データを画面に表示するところまでチャレンジしてみてください。

前提として

- 天気情報を表示するプロジェクト
- 猫ちゃんを表示するプロジェクト

別々のプロジェクトとして作成することとします。

### 天気情報画面の仕様

- 地域が選択可能である
- 選択した地域の情報が表示される
    - アイコン
    - 温度

### 猫ちゃん表示画面の仕様

- 猫ちゃんが表示される
- ボタンを押すと別の猫ちゃんが表示される

### 画面例

![image.png](image%2018.png)

![image.png](image%2019.png)