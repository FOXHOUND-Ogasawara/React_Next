# React課題（資料）

## 環境構築

基本は事前学習時に利用した「Reactではじめるプログラミング基礎コース」を参考に、支給されたPCの環境を整える。

SLスタジオは、自己学習の時に利用していたアカウントをそのまま使用すること。

NVMの設定までがSLスタジオの方で実施する内容になります。（nvm use <バージョン>まで）

参考URL：[https://sls.ideal-growth.jp/46/lesson/829/learning](https://sls.ideal-growth.jp/46/lesson/829/learning)

環境構築に併せて下記の拡張機能は必ず入れましょう。

![image.png](image%208.png)

拡張機能のインストール方法についてはSLスタジオからの引用になりますが上記の図にならって①のアイコンをクリックし、②で以下の拡張機能の検索を行います。

途中まで入力したら候補に出てくると思いますが似たものが複数あるため画像を参考にしてください。

その後③で対象を選択し、④でインストール開始です。

インストール後は、VSCodeに反映させるためVSCodeの再起動をしましょう。

- **Typescript React code snippetsプラグイン**
    - 予測変換を出してくれるプラグイン

![image.png](image%209.png)

- **Prettier**
    - プログラムコードの整形を行ってくれる。読みやすく段落整理してくれる

![image.png](image%2010.png)

- **ESLint**
    - 書き方が間違っている、または良くない書き方を行っている場合に叱ってくれる

![image.png](image%2011.png)

- **Path Intellisense**
    - ファイルを指定する時に、パスのヒントが出る

![image.png](image%2012.png)

上記、拡張機能も含めてVSCodeにてReactが実行できる環境を構築してください。

プロジェクトを作成する際は、Cドライブ内に専用のフォルダを作成し、その配下に作成するようにしてください。

<aside>
💡

VSCodeでPowerShellを使用する際の権限設定の変更について

「npm create vite@latest」と打つと赤字でエラーが起きてしまうことがあります。

その際、下記の対応をお願いします。

1. PowerShellを管理者権限で開く
2. `Set-ExecutionPolicy RemoteSigned` と打ちエンターキーを押す
3. 表示された選択肢から「A」を打ちエンターキーを押す（画像参照）

![image.png](image%2013.png)

1. VSCodeを再起動して再度、コマンドを打つ
</aside>

## 準備

1. プロジェクト作成
    1. プロジェクト名は「products-management-system」
    2. 必要なライブラリは以下の通り
    コピペ用コマンド：`npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled` 
        1. `react-router-dom`
        2. `@mui/material`
        3. `@mui/icons-material`
        4. `@emotion/react`
        5. `@emotion/styled` 
2. 以下のフォルダとファイルを `src` の配下に作成する
    1. `components` フォルダ
        1. `ProductList.tsx`
        2. `ProductItem.tsx`
        3. `Cart.tsx`
        4. `CartItem.tsx`
    2. `pages` フォルダ
        1. `Home.tsx`
    3. `types` フォルダ
        1. `index.ts`
3. 配布用ファイル.zipの内容をsrc配下に

※ファイル数が多いので該当ファイルをしっかりと確認したうえで作業を進めてください。

### App.tsx

```tsx
// src/App.tsx
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Home from './pages/Home';
import { Container, CssBaseline } from '@mui/material';
import Cart from './components/Cart';
import { useState } from 'react';
import { Product } from './types';

const App = () => {

  const [cartItems, setCartItems] = useState<Product[]>([]);

  // const addToCart = () => {
  //   setCartItems([...cartItems]);
  // };

  const removeFromCart = () => {
    setCartItems([...cartItems]);
  };

  return (
    <Router>
      <CssBaseline />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
```

### ProductList.tsx

```tsx
// src/components/ProductList.tsx

import { Grid } from '@mui/material';
import { Product } from '../types';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: Product[];
  // addToCart: (product: Product) => void;
}

const ProductList = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>
    </Grid>
  );
};

export default ProductList;
```

### ProductItem.tsx

```tsx
// src/components/ProductItem.tsx

import {
	Card,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material';
import { Product } from '../types';
// import { Button } from '@mui/material';

interface ProductItemProps {
  product: Product;
  // addToCart: (product: Product) => void;
}

const ProductItem = () => {
  return (
    <Card
	    sx={{
		    height: '100%',
		    display: 'flex',
		    flexDirection: 'column'
		  }}
    >
      <CardMedia
        component="img"
        image={
	        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
	      }
        alt={"sample"}
        sx={{
	        height: 140,
	        objectFit: 'contain',
	        padding: 1
	      }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6">
          商品A
        </Typography>
        <Typography variant="body1">
          価格: $200
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
```

image用のURL： `https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg`

### Cart.tsx

```tsx
// src/components/Cart.tsx

import { useState } from 'react';
import {
	Drawer,
	Typography,
	List,
	Divider,
	IconButton,
	Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from '../types';
// import CartItem from './CartItem';

interface CartProps {
  cartItems: Product[];
  removeFromCart: (productId: number) => void;
}

const Cart = ({ cartItems, removeFromCart }: CartProps) => {
  const totalPrice = 0;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
        sx={{
	        position: 'fixed',
	        top: 16,
	        right: 16,
	        zIndex: 1300
	      }}
      >
        カート ({cartItems.length})
      </Button>
      <Drawer
	      anchor="right"
	      open={open} 
	      onClose={() => setOpen(false)}
	    >
        <div style={{ width: 300, padding: '16px' }}>
          <IconButton
	          onClick={() => setOpen(false)}
	          sx={{ float: 'right' }}
	        >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom>
            カート
          </Typography>
          <Divider />
          {cartItems.length === 0 ? (
            <Typography
	            variant="body1"
	            sx={{ marginTop: 2 }}
	          >
              カートに商品がありません。
            </Typography>
          ) : (
            <>
              <List>
                {/* TODO: CartItemを表示 */}
                {/* <CartItem */}
	              {/*   item={} */}
	              {/*   removeFromCart={removeFromCart} */}
	              {/* /> */}
              </List>
              <Divider />
              <Typography
	              variant="h6"
	              sx={{ marginTop: 2 }}
	            >
                合計金額: ${totalPrice.toFixed(2)}
              </Typography>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
```

### CartItem.tsx

```tsx
// src/components/CartItem.tsx

import {
	ListItem,
	ListItemText,
	IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../types';

interface CartItemProps {
  item: Product;
  removeFromCart: (productId: number) => void;
}

const CartItem = ({ item, removeFromCart }: CartItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
	        edge="end"
	        aria-label="delete"
	        onClick={() => removeFromCart(1)}
	      >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={"商品A"}
        secondary={`価格: $1000`}
      />
    </ListItem>
  );
};

export default CartItem;
```

### Home.tsx

```tsx
// src/pages/Home.tsx

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography
} from '@mui/material';
import ProductList from '../components/ProductList';
// import { Product } from '../types';

// interface HomeProps {
//   addToCart: (product: Product) => void;
// }

const Home = () => {

  // TODO: 商品データの取得とstate管理（タスク1）

  // TODO: カテゴリーデータの取得とstate管理（タスク2）
  // TODO: カテゴリーで絞り込んだ際のフィルタリング処理（タスク2）

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        商品一覧
      </Typography>
      {/* TODO: カテゴリー用のメニュー（タスク2） */}
      <FormControl
	      sx={{ minWidth: 200, marginBottom: 2 }}
	    >
        <InputLabel id="category-select-label">
	        カテゴリで絞り込み
	      </InputLabel>
        <Select
          labelId="category-select-label"
          value={"all"}
          label="カテゴリで絞り込み"
        >
          <MenuItem value="all">全て</MenuItem>
          <MenuItem value={"カテゴリー1"}>カテゴリー1</MenuItem>
          <MenuItem value={"カテゴリー2"}>カテゴリー2</MenuItem>
          <MenuItem value={"カテゴリー3"}>カテゴリー3</MenuItem>
        </Select>
      </FormControl>
      {/* TODO: 商品リストの表示（タスク1） */}
      <ProductList />
    </div>
  );
};

export default Home;
```

### index.ts

```tsx
// types/index.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
```

## タスク内容

### タスク1: 商品データの表示機能を実装する

外部から取得できるデータを利用して商品の一覧ページを作成してください。

タスク詳細

- `Home.tsx` に商品データの取得処理やstate管理処理を実装する
    - データは以下のURLから取得すること
    - URL: [`https://fakestoreapi.com/products`](https://fakestoreapi.com/products)
- `ProductList.tsx` 内に商品リストの表示処理を実装する
- `ProductItem.tsx` 内に商品情報の表示処理を実装する
    - 商品一覧では、「タイトル」「価格」「画像」を表示する

コンポーネントは以下のような用途で区切っています。

`Home.tsx` 

商品一覧ページを表示するためのコンポーネントです。
データの取得を行い、state管理を利用したレンダリングを行います。

`ProductList.tsx`

`Home.tsx` から呼び出される想定のコンポーネントで、リスト生成を担います。
呼び出し元から受け取ったpropsを利用して、受け取ったデータ数分のカードを出力します。

`ProductItem.tsx`

`ProductList` で利用される商品情報をカード表示するコンポーネントです。
受け取ったデータを利用して商品情報を表示するほか、
該当商品をカートに登録するためのボタンを追加実装してもらいます。

`App.tsx`

商品一覧ページとカート画面を表示するコンポーネントです。
カート機能についてはタスク3にて実装してもらいます。

### タスク2: カテゴリーによる絞り込みを実装する

商品のカテゴリーで絞り込みができる機能を追加実装してください。

タスク詳細

- `Home.tsx` にカテゴリーの取得処理とstate管理処理を実装する
    - URL: [`https://fakestoreapi.com/products/categories`](https://fakestoreapi.com/products/categories)
- カテゴリー選択用のプルダウンを実装する
- 選択されたカテゴリーに応じて商品リストが更新されるように修正する

### タスク3: カート機能を実装する

カートへの商品追加や削除、合計金額の計算処理を実装してください。

タスク詳細

- `App.tsx` 内でカートの状態管理を行う
- `ProductItem.tsx` に「カートに追加」ボタンを実装し、 `addToCart` 関数を呼び出す
- `Cart.tsx` と `CartItem.tsx` に処理を追記して完成させる

### タスク4: ローディングを実装する

データの取得完了までのローディング処理を追加してください。

タスク詳細

- `Home.tsx` にローディング処理を追加実装する
- ローディング中は `CircularProgress` を表示する

## 明日に向けて

以下の内容を調査し、意味や用途などをまとめる

- WEBの仕組み
- WEBサービスの仕組み
- WEB APIとはなにか