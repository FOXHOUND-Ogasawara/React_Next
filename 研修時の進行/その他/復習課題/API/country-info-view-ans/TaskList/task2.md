# テンプレート

【概要】タスク2：地域（region）で絞り込み&件数を表示しよう

【期限】(未記入でOK)

【タスク作業時間】(未記入でOK)

【タスクの詳細】

1.  []`Home.tsx` に「選択中の地域」を管理する state (`selectedRegion`) を追加する
    1-1. 例: `const [selectedRegion, setSelectedRegion] = useState<string>('all');`
2.  []`CountryFilter.tsx` に地域選択用のプルダウン（`Select` コンポーネント）を実装する
    2-1. 選択肢の例: `all`, `Asia`, `Europe`, `Americas`, `Africa`, `Oceania`
    2-2. プルダウンで地域を選択したら、`setSelectedRegion` が呼ばれるようにする
3.  []`Home.tsx` で `selectedRegion` に応じて国リストを絞り込む
    3-1. `selectedRegion === 'all'` のときは全件表示
    3-2. それ以外のときは、`country.region === selectedRegion` の国だけを表示する
4.  []画面上部（タイトルの下など）に「現在表示している国の件数」を表示する
    4-1. 例: `表示件数: 42件`

【確認事項】

何かしら確認事項や口頭で確認したことがあれば記載