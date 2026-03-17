# テンプレート

【概要】タスクX：タスク名

【期限】yyyy/mm/dd hh:mm(未記入でOK)

【タスク作業時間】yyyy/mm/dd hh:mm（未記入でOK）

【タスクの詳細】

1. []～
    1-1.～ 
    1-2. ～
2. []～
・・・

【確認事項】

何かしら確認事項や口頭で確認したことがあれば記載

# 記載例

【概要】天気情報画面の実装

【期限】2025/6/4 13:00

【タスクの作業時間】80分2025/6/4 14:20

【タスクの詳細】

1. []天気情報の型定義
    1. アイコン
    2. 温度
2. []各種ステート管理を実装
    1. selectArea：number型で初期値は千代田区のコード
    2. weatherData：Weather型で初期値はなし
3. []地域を選択可能にする
    1. 初期値：千代田区（1850147）、中央区（1850158）、港区（1850181）
4. []fetchを利用してAPIから地域情報を取得
    1. URL：https://api.openweathermap.org/data/2.5/weather
        1. クエリパラメータ：id=都市コード、appid=配布したAPI KEY、units=metric(メータ法の指定)
5. []取得した地域情報を選択するプルダウンを作成
6. []初期値に対する天気情報の表示
    1. []iconについて：[https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png](https://openweathermap.org/img/wn/$%7BweatherData.weather[0].icon%7D@2x.png)の形で指定
    2. []気温について：weatherData.main.tempで指定
7. []プルダウンで地域を変更した際の表示
    1. []selectAreaをonChangeイベントで管理

【確認事項】

〇アイコンの表示について（確認済み）
公式ドキュメントの下記参照
https://openweathermap.org/weather-conditions

〇温度の表記に関して
クエリパラメータを指定しないとデフォルトが華氏表記（℉）になってしまう
→units=metricを指定すると摂氏（℃）表記に変えられる
公式ドキュメントの下記参照
https://openweathermap.org/current#data