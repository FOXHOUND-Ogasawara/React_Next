# React課題（復習用）

## 準備

1. プロジェクト作成
    1. プロジェクト名は「recipes-favorite-system」
    2. 必要なライブラリは以下の通り
    コピペ用コマンド：`npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled`
        1. `react-router-dom`
        2. `@mui/material`
        3. `@mui/icons-material`
        4. `@emotion/react`
        5. `@emotion/styled` 
2. `src` フォルダの中身が下記の構成になっていることを確認してください。
    
    （※事前に配布されたZIPファイルを解凍すると、このフォルダ構成が用意されています）
    

```
src/
├─ components/
│  ├─ RecipeList.tsx
│  ├─ RecipeItem.tsx
│  ├─ Favorites.tsx
│  └─ FavoriteItem.tsx
│
├─ pages/
│  └─ Home.tsx
│
├─ types/
│  └─ index.ts
│
└─ App.tsx

```

各ファイルはすでに雛形コードが書かれています。

起動させて、初期のモック画面が表示されたらOKです。

このあと記載されている「タスク」に沿って、該当箇所を完成させていきましょう。

---

## タスク内容

### タスク1: レシピデータの表示機能を実装する

外部から取得したレシピデータを利用して、レシピ一覧ページを作成してください。

**タスク詳細**

- `Home.tsx` にレシピデータの取得処理と state 管理を実装する
    - データは以下のURLから取得すること
    - URL: `https://dummyjson.com/recipes`
    - 型は `RecipesResponse` / `Recipe` を使用する
- `RecipeList.tsx` 内にレシピリストの表示処理を実装する
    - props で `recipes` を受け取り、配列の件数分 `RecipeItem` を表示する
- `RecipeItem.tsx` 内にレシピ情報の表示処理を実装する
    - レシピ一覧では、**「レシピ名 (name)」「料理ジャンル (cuisine)」「画像 (image)」** を表示する

**コンポーネントの役割**

- `Home.tsx`
    
    レシピ一覧ページを表示するコンポーネントです。
    
    API からデータを取得し、state 管理を利用してレンダリングを行います。
    
- `RecipeList.tsx`
    
    `Home.tsx` から呼び出されるコンポーネントで、リスト生成を担当します。
    
    呼び出し元から受け取った props を利用して、受け取ったデータ数分のカードを出力します。
    
- `RecipeItem.tsx`
    
    `RecipeList` で利用される、レシピ情報をカード表示するコンポーネントです。
    
    受け取ったデータを利用してレシピ情報を表示するほか、
    
    該当レシピをお気に入りに登録するボタンをタスク3で追加実装してもらいます。
    
- `App.tsx`
    
    レシピ一覧ページとお気に入り（サイドメニュー）を表示するコンポーネントです。
    
    お気に入り機能についてはタスク3で実装します。
    

---

### タスク2: タグ（カテゴリー）による絞り込みを実装する

レシピのタグで絞り込みができる機能を追加実装してください。

**タスク詳細**

- `Home.tsx` にタグ（カテゴリー）の取得処理と state 管理を実装する
    - URL: `https://dummyjson.com/recipes/tags` [DummyJSON](https://dummyjson.com/docs/recipes/)
    - 戻り値は `string[]`（例: `"Pizza"`, `"Dessert"` など）
- タグ選択用のプルダウン（`Select` コンポーネント）を実装する
    - 初期値は `'all'` に設定し、「すべて」を選択できるようにする
    - 取得したタグ一覧を **`MenuItem`（MUIの選択肢コンポーネント）** として動的に出力する
- 選択されたタグに応じてレシピリストが更新されるように修正する
    - `selectedTag === 'all'` のときは全件表示
    - それ以外のときは、`recipe.tags` に `selectedTag` が含まれるレシピのみ表示する

💡**ヒント：**

今回のAPIの仕様上、各レシピが持ってるタグが複数のケースがあります。

タグは配列として持たれているため、単純な比較ではなく「含まれているか」を判定します。

以下のような書き方を参考にしてください。

```tsx
例）recipe.tags.includes(selectedTag)
```

---

### タスク3: お気に入り機能を実装する

お気に入りへのレシピ追加や削除、件数の表示を実装してください。

**タスク詳細**

- `App.tsx` 内でお気に入りの状態管理を行う
    - `const [favoriteItems, setFavoriteItems] = useState<Recipe[]>([])`
    - `addToFavorites` 関数を実装し、同じレシピを2回以上追加しないようにしてみるのも良い
- `Home.tsx` から `addToFavorites` を `RecipeList` → `RecipeItem` に渡す
- `RecipeItem.tsx` に「お気に入りに追加」ボタンを実装し、クリック時に `addToFavorites` を呼び出す
- `Favorites.tsx` と `FavoriteItem.tsx` に処理を追記し、次を満たすようにする
    - お気に入りに登録されたレシピが一覧表示される
    - 「削除」ボタンで該当レシピがお気に入りから削除される
    - 下部に「合計レシピ数: X件」と表示される

💡**ヒント：**

レシピの`tags`は配列（`string[]`）になっているため、そのまま表示しようとすると区切りが無くて見づらくなったり、環境によってはうまく表示されない場合もあります。

その場合は、`join`メソッドを使うと便利です。

以下の例では、カンマ区切りで1つの文字列にまとめて表示することができるので参考にしてください。

```tsx
例）item.tags.join(", ")
```

---

### タスク4: ローディングを実装する

データの取得完了までのローディング処理を追加してください。

**タスク詳細**

- `Home.tsx` にローディング用の state を追加実装する
    - 例: `const [loading, setLoading] = useState(false);`
- レシピ・タグの fetch 前に `loading` を `true`、完了時に `false` にする
- ローディング中は `CircularProgress` を画面中央付近に表示し、
    
    取得完了後にレシストパネルが見えるようにする