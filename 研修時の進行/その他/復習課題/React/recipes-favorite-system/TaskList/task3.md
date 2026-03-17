### タスク3: お気に入り機能を実装する

お気に入りへのレシピ追加や削除、件数の表示を実装してください。

**タスク詳細**

- `App.tsx` 内でお気に入りの状態管理を行う
    - `App.tsx` に `useState` をインポートする
    - `App.tsx` で `favoriteItems` ステートを `const [favoriteItems, setFavoriteItems] = useState<Recipe[]>([]);` で宣言する
    - `App.tsx` で `addToFavorites` 関数を実装する
        - `addToFavorites` 関数は `Recipe` 型の引数 `recipe` を受け取る
        - `favoriteItems` に同じ `recipe.id` を持つレシピが既に存在しないか確認する
        - 存在しない場合のみ、`setFavoriteItems` を呼び出し、`favoriteItems` に新しいレシピを追加する
    - `App.tsx` で `removeFromFavorites` 関数を実装する
        - `removeFromFavorites` 関数は `recipeId: number` を引数に受け取る
        - `setFavoriteItems` を呼び出し、`favoriteItems` から `recipeId` に一致するレシピを削除する
- `Home.tsx` から `addToFavorites` を `RecipeList` → `RecipeItem` に渡す
    - `App.tsx` の `Route path="/" element={<Home />}` を修正し、`Home` コンポーネントに `addToFavorites` プロップスを渡す
    - `Home.tsx` で `HomeProps` インターフェースを定義し、`addToFavorites: (recipe: Recipe) => void;` を含むようにする
    - `Home.tsx` コンポーネントで `addToFavorites` をプロップスとして受け取る
    - `Home.tsx` の `RecipeList` コンポーネントに `addToFavorites` プロップスを渡す
    - `RecipeList.tsx` で `RecipeListProps` インターフェースに `addToFavorites: (recipe: Recipe) => void;` を追加する
    - `RecipeList.tsx` コンポーネントで `addToFavorites` をプロップスとして受け取る
    - `RecipeList.tsx` の `RecipeItem` コンポーネントに `addToFavorites` プロップスを渡す
    - `RecipeItem.tsx` で `RecipeItemProps` インターフェースに `addToFavorites: (recipe: Recipe) => void;` を追加する
    - `RecipeItem.tsx` コンポーネントで `addToFavorites` をプロップスとして受け取る
- `RecipeItem.tsx` に「お気に入りに追加」ボタンを実装し、クリック時に `addToFavorites` を呼び出す
    - `RecipeItem.tsx` に `Button` コンポーネントをインポートする
    - `RecipeItem.tsx` の `CardContent` 内に「お気に入りに追加」ボタンを配置する
    - ボタンの `onClick` イベントで `addToFavorites(recipe)` を呼び出す
- `Favorites.tsx` と `FavoriteItem.tsx` に処理を追記し、次を満たすようにする
    - `src/components/Favorites.tsx` の `Favorites` コンポーネントに `favoriteItems: Recipe[]` と `removeFromFavorites: (recipeId: number) => void;` をプロップスとして受け取るインターフェースを定義する
    - `src/components/Favorites.tsx` の `Favorites` コンポーネントでお気に入りのレシピが一覧表示されるように `favoriteItems.map` を使用して `FavoriteItem` をレンダリングする
    - `src/components/Favorites.tsx` の下部に `合計レシピ数: {favoriteItems.length}件` と表示する `Typography` を追加する
    - `src/components/FavoriteItem.tsx` ファイルを作成する
    - `src/components/FavoriteItem.tsx` に `List`, `ListItem`, `ListItemText`, `ListItemAvatar`, `Avatar`, `IconButton` (`DeleteIcon` を含む) をインポートする
    - `src/components/FavoriteItem.tsx` で `FavoriteItemProps` インターフェースを定義し、`recipe: Recipe` と `removeFromFavorites: (recipeId: number) => void;` を含むようにする
    - `src/components/FavoriteItem.tsx` コンポーネントで `recipe` と `removeFromFavorites` をプロップスとして受け取る
    - `src/components/FavoriteItem.tsx` で `ListItemAvatar` と `Avatar` を使用して `recipe.image` を表示する
    - `src/components/FavoriteItem.tsx` で `ListItemText` を使用して `recipe.name` と `recipe.cuisine` (`join(", ")` で表示) を表示する
    - `src/components/FavoriteItem.tsx` で `IconButton` と `DeleteIcon` を使用した「削除」ボタンを配置する
    - 「削除」ボタンの `onClick` イベントで `removeFromFavorites(recipe.id)` を呼び出す
