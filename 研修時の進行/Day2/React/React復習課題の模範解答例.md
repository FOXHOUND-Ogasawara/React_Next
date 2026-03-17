# React復習課題の模範解答例

### App.tsx

```tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';
import { Product } from './types';
import { Container } from '@mui/material';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App

```

### Home.tsx

```tsx
import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import ProductList from '../components/ProductList';
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface HomeProps {
  addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // 商品データの取得
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch(err => {
        console.error(err);
      });

    // カテゴリデータの取得
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then((data: string[]) => {
        setCategories(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        商品一覧
      </Typography>
      <FormControl sx={{ minWidth: 200, marginBottom: 2 }}>
        <InputLabel id="category-select-label">カテゴリで絞り込み</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          label="カテゴリで絞り込み"
          onChange={e => setSelectedCategory(e.target.value as string)}
        >
          <MenuItem value="all">全て</MenuItem>
          {categories.map(category => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Home;
```

### ProductList.tsx

```tsx
import React from 'react';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductItem product={product} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
```

### ProductItem.tsx

```tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Product } from '../types';

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ height: 140, objectFit: 'contain', padding: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>
        <Typography variant="body1">
          価格: ${product.price}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToCart(product)}
        sx={{ margin: 1 }}
      >
        カートに追加
      </Button>
    </Card>
  );
};

export default ProductItem;
```

### Cart.tsx

```tsx
import React from 'react';
import { Drawer, Typography, List, Divider, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from '../types';
import CartItem from './CartItem';

interface CartProps {
  cartItems: Product[];
  removeFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1300 }}
      >
        カート ({cartItems.length})
      </Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 300, padding: '16px' }}>
          <IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom>
            カート
          </Typography>
          <Divider />
          {cartItems.length === 0 ? (
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              カートに商品がありません。
            </Typography>
          ) : (
            <>
              <List>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                ))}
              </List>
              <Divider />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
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
import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../types';

interface CartItemProps {
  item: Product;
  removeFromCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={item.title}
        secondary={`価格: $${item.price}`}
      />
    </ListItem>
  );
};

export default CartItem;
```