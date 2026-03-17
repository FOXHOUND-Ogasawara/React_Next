# テンプレート

【概要】タスク3：国名で検索機能と並び替え機能を実装しよう

【期限】(未記入でOK)

【タスク作業時間】(未記入でOK)

【タスクの詳細】

1.  []国名検索機能
    1-1. `Home.tsx` に検索文字列用の state (`searchText`) を追加する
        例: `const [searchText, setSearchText] = useState<string>('');`
    1-2. `CountryFilter.tsx` の `TextField` と `searchText` / `setSearchText` をつなげる
    1-3. 地域で絞り込んだ結果に対して、さらに国名による絞り込みを行う
        比較には `country.name.common` を使い、大文字・小文字を区別しないように `toLowerCase()` を使う
        例: `country.name.common.toLowerCase().includes(searchText.toLowerCase())`
2.  []並び替え（ソート）機能
    2-1. `Home.tsx` に「並び替え条件」を管理する state (`sortOption`) を追加する
        例: `const [sortOption, setSortOption] = useState<string>('name-asc');`
    2-2. `CountryFilter.tsx` に「並び替え」用のプルダウン（`Select`）を追加し、`sortOption` / `setSortOption` とつなげる
    2-3. 並び替えの例:
        - `name-asc`: 国名（`name.common`）の昇順（A → Z）
        - `population-desc`: 人口（`population`）の多い順
    2-4. 国名検索で絞り込んだ結果を、`sortOption` に応じて並び替える
    2-5. 最終的に`CountryList` には、この並び替え後の配列（例: `sortedCountries`）を渡す
        例: `<CountryList countries={sortedCountries} />`

【確認事項】

何かしら確認事項や口頭で確認したことがあれば記載