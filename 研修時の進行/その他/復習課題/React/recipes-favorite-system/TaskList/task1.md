### タスク1: レシピデータの表示機能を実装する

外部から取得したレシピデータを利用して、レシピ一覧ページを作成してください。

**タスク詳細**

- `src/types/index.ts` に以下の型定義を追加する、または既存の型定義を確認する
    - `Recipe` 型を定義する（id, name, image, cuisineプロパティを含む）
    - `RecipesResponse` 型を定義する（recipesプロパティに`Recipe`の配列を含む）
- `Home.tsx` にレシピデータの取得処理と state 管理を実装する
    - `Home.tsx` に `useState` をインポートする
    - `Home.tsx` に `useEffect` をインポートする
    - `Home.tsx` に `Recipe` と `RecipesResponse` の型をインポートする
    - `Home.tsx` で `recipes` ステートを `useState<Recipe[]>([]);` で宣言する
    - `Home.tsx` で `loading` ステートを `useState<boolean>(true);` で宣言する
    - `Home.tsx` の `useEffect` 内で `fetch` 関数を定義する
    - `Home.tsx` の `fetch` 関数内で `https://dummyjson.com/recipes` からデータを取得する
    - `Home.tsx` の `fetch` 関数内で取得したJSONデータを `RecipesResponse` 型にキャストする
    - `Home.tsx` の `fetch` 関数内で `setRecipes` を呼び出し、取得したレシピデータでステートを更新する
    - `Home.tsx` の `fetch` 関数内で `setLoading(false)` を呼び出す
    - `Home.tsx` の `useEffect` の依存配列を空にする
    - `Home.tsx` で `loading` の状態に応じて「読み込み中...」と `RecipeList` を条件付きレンダリングする
    - `Home.tsx` の `RecipeList` コンポーネントに `recipes` プロップスを渡す
- `RecipeList.tsx` 内にレシピリストの表示処理を実装する
    - `src/components/RecipeList.tsx` ファイルを作成する
    - `RecipeList.tsx` に `Grid` コンポーネントをインポートする
    - `RecipeList.tsx` に `Recipe` 型をインポートする
    - `RecipeList.tsx` に `RecipeItem` コンポーネントをインポートする
    - `RecipeList.tsx` で `RecipeListProps` インターフェースを定義し、`recipes: Recipe[]` を含むようにする
    - `RecipeList.tsx` コンポーネントで `recipes` をプロップスとして受け取る
    - `RecipeList.tsx` で `Grid container` をレンダリングする
    - `RecipeList.tsx` で `recipes.map` を使用して各レシピに対して `Grid item` をレンダリングする
    - `RecipeList.tsx` の `Grid item` に `key` プロップスとして `recipe.id` を渡す
    - `RecipeList.tsx` の `Grid item` 内で `RecipeItem` コンポーネントをレンダリングし、`recipe` プロップスを渡す
- `RecipeItem.tsx` 内にレシピ情報の表示処理を実装する
    - `src/components/RecipeItem.tsx` ファイルを作成する
    - `RecipeItem.tsx` に `Card`, `CardContent`, `CardMedia`, `Typography` をインポートする
    - `RecipeItem.tsx` に `Recipe` 型をインポートする
    - `RecipeItem.tsx` で `RecipeItemProps` インターフェースを定義し、`recipe: Recipe` を含むようにする
    - `RecipeItem.tsx` コンポーネントで `recipe` をプロップスとして受け取る
    - `RecipeItem.tsx` の `CardMedia` コンポーネントの `image` プロップスに `recipe.image` を設定する
    - `RecipeItem.tsx` の `CardMedia` コンポーネントの `alt` プロップスに `recipe.name` を設定する
    - `RecipeItem.tsx` の `Typography variant="h6"` に `recipe.name` を表示する
    - `RecipeItem.tsx` の `Typography variant="body2"` に `カテゴリ: {recipe.cuisine}` を表示する
- `App.tsx` に関連する修正
    - タスク1の範囲では `Home` コンポーネントに渡す `props` はないため、`App.tsx` の修正は不要

**コンポーネントの役割**

- `Home.tsx`
    レシピ一覧ページを表示するコンポーネントです。
    API からデータを取得し、state 管理を利用してレンダリングを行います。
- `RecipeList.tsx`
    `Home.tsx` から呼び出されるコンポーネントで、リスト生成を担当します。
    呼び出し元から受け取った props を利用して、受け取ったデータ数分のカードを出力します。
- `RecipeItem.tsx`
    `RecipeList` で利用される、レシピ情報をカード表示するコンポーネントです。
    受け取ったデータを利用してレシピ情報を表示するほか、
    該当レシピをお気に入りに登録するボタンをタスク3で追加実装してもらいます。
- `App.tsx`
    レシピ一覧ページとお気に入り（サイドメニュー）を表示するコンポーネントです。
    お気に入り機能についてはタスク3で実装します。
