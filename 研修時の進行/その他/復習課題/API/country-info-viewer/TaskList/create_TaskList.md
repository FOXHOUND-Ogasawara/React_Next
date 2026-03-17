以下のタスクリストをテンプレートと同じ形式で作成してください。
作成したタスクリストは「taskX.md」（Xにはタスク番号が入る）として「TaskList」フォルダ配下に配置してください。

### タスク1:国データを取得して一覧表示しよう

REST Countries APIから国情報を取得して、画面に一覧表示しましょう。

### **タスク詳細**

- APIエンドポイント
    
    ```
    https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,languages,currencies
    ```
    
    ※ `fields` パラメータを付けないとエラー（400）が返るため注意。
    
- `Home.tsx` に `useEffect()` を使ってAPI通信を実装する。
- 取得したデータを `countries` state に保存し、`CountryList` に渡して一覧表示する。
- `CountryItem.tsx` で1件ずつ国情報をカード形式で表示する。

### **表示項目**

- 国旗（`flags.png`）
- 国名（`name.common`）
- 地域（`region`）
- 人口（`population`）

---

## タスク2:地域（region）で絞り込み&件数を表示しよう

REST Countries APIのレスポンスには、各国の所属する地域（region）情報が含まれています。

次は、これを使って国の一覧を絞り込めるようにしましょう。

併せて、「現在画面に表示されている国が何件あるか」も表示させましょう。

### **タスク詳細**

- `Home.tsx` に「選択中の地域」を管理する state を追加する。

```tsx
例) const [selectedRegion, setSelectedRegion] = useState<string>('all');
```

- `CountryFilter.tsx` に地域選択用のプルダウン（`Select` コンポーネント）を実装する。
    - 選択肢の例：`all`, `Asia`, `Europe`, `Americas`, `Africa`, `Oceania`
    - プルダウンで地域を選択したら、`setSelectedRegion` が呼ばれるようにする
- `Home.tsx` で `selectedRegion` に応じて国リストを絞り込む。
    - `selectedRegion === 'all'` のときは全件表示
    - それ以外のときは、`country.region === selectedRegion` の国だけを表示する
- 画面上部（タイトルの下など）に「現在表示している国の件数」を表示する。
    
    例：`表示件数: 42件`
    

💡**ヒント：**

地域で絞り込んだ配列の件数は、`length` を使うと簡単に取得できます。

ただ、使う際に「メソッド」ではない点には注意しましょう。

---

## タスク3:国名で検索機能と並び替え機能を実装しよう

タスク2では、「地域」での絞り込みと件数の表示を行いました。

次は、そこからさらに一歩進めて**国名による検索**と、**並び替え（ソート）機能**を実装してみましょう。

### **タスク詳細**

1.国名検索機能

- `Home.tsx` に検索文字列用の state を追加する。

```tsx
例) 例) const [searchText, setSearchText] = useState<string>('');
```

- `CountryFilter.tsx` の `TextField` と `searchText` / `setSearchText` をつなげる。
    - 入力欄に文字を打つと、`searchText` が更新されるようにする
- タスク2で地域で絞り込んだ結果に対して、さらに国名による絞り込みを行う。
    - 比較には `country.name.common` を使う
    - 大文字・小文字は区別しないように `toLowerCase()` を使う

```tsx
例) country.name.common.toLowerCase().includes(searchText.toLowerCase())
```

2.並び替え（ソート）機能

- `Home.tsx` に「並び替え条件」を管理する state を追加する。

```tsx
例) const [sortOption, setSortOption] = useState<string>('name-asc');
```

- `CountryFilter.tsx` に「並び替え」用のプルダウン（`Select`）を追加し、`sortOption` / `setSortOption` とつなげる。
    
    並び替えの例：
    
    - `name-asc`：国名（`name.common`）の昇順（A → Z）
    - `population-desc`：人口（`population`）の多い順
- 国名検索で絞り込んだ結果を、`sortOption` に応じて並び替える。
- 最終的に`CountryList` には、この並び替え後の配列（例：`sortedCountries`）を渡すようにします。

```tsx
例) <CountryList countries={sortedCountries} />
```

💡**ヒント：**

条件に合うものだけ残したい時はfilter()を使ったと思いますが、順番を並べ替えたい時はsort()というものがあり、どちらも配列に使用できるメソッドです

使い方がわからない場合は、「TypeScript sort メソッド」などで調べてみましょう。

処理のイメージ図：

```tsx
すべての国
  → 地域で絞り込み（タスク2）
  → 国名で検索（filter）
  → 並び替え（sort）
  → 画面に表示
```

---

## タスク4: 国ごとの詳細ページを作ってみよう（応用）

タスク1〜3では、1画面の中で「一覧表示・絞り込み・検索・並び替え」までを実装しました。

余裕がある人は、**国ごとの詳細ページ**を作って、クリックした国の詳しい情報を表示できるようにしてみましょう。

※このタスクは 応用**課題（任意）** です。ここまでのタスクが終わって余裕があれば挑戦してください。

### 前提

このタスクでは、ページ遷移を行うために **`react-router-dom`** を使用するので追加でインストールしましょう。

（タスク1〜3では使っていませんが、4では使用します）

```bash
npm install react-router-dom
```

### タスク詳細

1. **ルーティングの設定を追加する**
    - `App.tsx` を修正し、React Router を使ってページを分けます。
2. **詳細ページ用コンポーネントを作成する**
    - `src/pages/CountryDetail.tsx` を新しく作成する。
    - URLパラメータから国名を取得して、その国の詳細情報を表示します。
        - 例： `useParams()` を使うと `/countries/:name` の `name` 部分が取得できます。
    - 使用するAPIの例：
        
        ```
        https://restcountries.com/v3.1/name/{name}?fullText=true&fields=name,region,population,flags,capital,languages,currencies
        ```
        
    - 表示項目：
        - 国旗
        - 国名
        - 地域
        - 首都（`capital`）
        - 人口
        - 言語一覧（`languages`）
        - 通貨一覧（`currencies`）
3. **一覧から詳細ページに遷移できるようにする**
    - `CountryItem.tsx` で、カードをクリックしたときに詳細ページへ遷移できるようにします。
    - 遷移方法の例：
        - カード全体を `<Link>` で囲む
        - もしくは `useNavigate()` を使ってクリック時に `navigate('/countries/〇〇')` する
    - URLには `country.name.common` を使ってOKです（`encodeURIComponent` を使うと安全）。
4. **一覧に戻る導線を用意する**
    - 詳細ページに「一覧に戻る」ボタンを設置し、`/` へ戻れるようにしておくと使いやすくなります。
    - `useNavigate()` を使って「戻る」ボタンを実装してみましょう。

💡**ヒント：**

- URL のパラメータは `useParams()` で取得できます。
    
    例：`const { name } = useParams();`
    
- 一覧ページから遷移する際、国名に**スペースや日本語**が含まれているとURLが壊れてしまうことがあります。
    
    その場合は、`encodeURIComponent()` を使って安全なURLに変換しましょう。
    
    ```tsx
    // 例
    to={`/countries/${encodeURIComponent(country.name.common)}`}
    ```
    
- 詳細ページでも `useEffect()` と `fetch()` を使って、該当する1件のデータを取得します。
- `languages` や `currencies` はオブジェクトになっているので、そのままでは表示しにくいです。
    
    `Object.values()` などを使って配列に変換してから、カンマ区切りで表示してみましょう。
    
    ```tsx
    // 例
    const languageList = country.languages
      ? Object.values(country.languages).join(', ')
      : '-';
    ```