# テンプレート

【概要】タスク4：国ごとの詳細ページを作ってみよう（応用）

【期限】(未記入でOK)

【タスク作業時間】(未記入でOK)

【タスクの詳細】

1.  []`react-router-dom` をインストールする
    1-1. `npm install react-router-dom`
2.  []ルーティングの設定を追加する
    2-1. `App.tsx` を修正し、React Router を使ってページを分ける
3.  []詳細ページ用コンポーネントを作成する
    3-1. `src/pages/CountryDetail.tsx` を新しく作成する
    3-2. URLパラメータから国名を取得して、その国の詳細情報を表示する
        例: `useParams()` を使うと `/countries/:name` の `name` 部分が取得できる
    3-3. 使用するAPIの例: `https://restcountries.com/v3.1/name/{name}?fullText=true&fields=name,region,population,flags,capital,languages,currencies`
    3-4. 表示項目: 国旗、国名、地域、首都（`capital`）、人口、言語一覧（`languages`）、通貨一覧（`currencies`）
4.  []一覧から詳細ページに遷移できるようにする
    4-1. `CountryItem.tsx` で、カードをクリックしたときに詳細ページへ遷移できるようにする
    4-2. 遷移方法の例: カード全体を `<Link>` で囲む、または `useNavigate()` を使ってクリック時に `navigate('/countries/〇〇')` する
    4-3. URLには `country.name.common` を使ってOK（`encodeURIComponent` を使うと安全）
5.  []一覧に戻る導線を用意する
    5-1. 詳細ページに「一覧に戻る」ボタンを設置し、`/` へ戻れるようにする
    5-2. `useNavigate()` を使って「戻る」ボタンを実装する

【確認事項】

何かしら確認事項や口頭で確認したことがあれば記載