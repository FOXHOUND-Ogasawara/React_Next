# テンプレート

【概要】タスク1：国データを取得して一覧表示しよう

【期限】(未記入でOK)

【タスク作業時間】(未記入でOK)

【タスクの詳細】

1.  []REST Countries APIから国情報を取得する
    1-1. APIエンドポイント: `https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,languages,currencies`
    1-2. `fields`パラメータを付けること
2.  []`Home.tsx` に `useEffect()` を使ってAPI通信を実装する
3.  []取得したデータを `countries` state に保存し、`CountryList` に渡して一覧表示する
4.  []`CountryItem.tsx` で1件ずつ国情報をカード形式で表示する
    4-1. 表示項目: 国旗（`flags.png`）、国名（`name.common`）、地域（`region`）、人口（`population`）

【確認事項】

何かしら確認事項や口頭で確認したことがあれば記載